-- =============================================================================
-- Leads School System — Fee Management Module
-- Supabase (Postgres) schema: normalized tables + Row Level Security + roles
-- =============================================================================
-- This is a DESIGN DELIVERABLE, not a connected backend. Running this against
-- a real Supabase project gives you the database side of the Fee Module. You'd
-- still need to point the front-end app at Supabase's client SDK (replacing
-- the in-browser `App.state` + `window.storage` calls) to actually wire it up.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 0. Extensions
-- ---------------------------------------------------------------------------
create extension if not exists "pgcrypto";   -- for gen_random_uuid()

-- ---------------------------------------------------------------------------
-- 1. Roles
-- ---------------------------------------------------------------------------
-- Supabase auth users get a role via a profile table. Add more roles here as
-- needed (principal, vice_principal, accountant, teacher, parent, student...).
create type app_role as enum (
  'super_admin',
  'principal',
  'vice_principal',
  'accountant',
  'teacher',
  'parent',
  'student',
  'receptionist',
  'librarian'
);

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role app_role not null,
  phone text,
  student_id uuid,           -- set when role = 'student' or 'parent' (linked child)
  created_at timestamptz not null default now()
);

comment on table profiles is 'One row per authenticated user, extending auth.users with school role.';

-- ---------------------------------------------------------------------------
-- 2. Core reference tables (assumed to exist elsewhere in the full schema —
--    included here minimally so the fee tables have something to reference)
-- ---------------------------------------------------------------------------
create table if not exists classes (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,               -- e.g. 'Reception', '1st', '7th'
  sort_order int not null default 0
);

create table if not exists sections (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references classes(id) on delete cascade,
  name text not null,                      -- e.g. 'A'
  unique (class_id, name)
);

create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  admission_no text unique not null,
  roll_no int,
  name text not null,
  father_name text,
  class_id uuid references classes(id),
  section_id uuid references sections(id),
  dob date,
  gender text,
  blood_group text,
  guardian_phone text,
  address text,
  photo_url text,
  status text not null default 'active',   -- active | left | graduated
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 3. payment_methods
-- ---------------------------------------------------------------------------
create table if not exists payment_methods (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,               -- Cash, Bank Transfer, Debit Card, ...
  requires_bank boolean not null default false,
  requires_transaction_id boolean not null default false,
  active boolean not null default true
);

insert into payment_methods (name, requires_bank, requires_transaction_id) values
  ('Cash', false, false),
  ('Bank Transfer', true, true),
  ('Debit Card', false, true),
  ('Credit Card', false, true),
  ('Online Payment', true, true),
  ('Cheque', true, false)
on conflict (name) do nothing;

-- ---------------------------------------------------------------------------
-- 4. fee_structures  (Class, all fee-type fields, discount, fine, effective date)
-- ---------------------------------------------------------------------------
create table if not exists fee_structures (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references classes(id) on delete cascade,
  tuition_fee numeric(12,2) not null default 0,
  admission_fee numeric(12,2) not null default 0,
  registration_fee numeric(12,2) not null default 0,
  computer_fee numeric(12,2) not null default 0,
  lab_fee numeric(12,2) not null default 0,
  library_fee numeric(12,2) not null default 0,
  exam_fee numeric(12,2) not null default 0,
  transport_fee numeric(12,2) not null default 0,
  hostel_fee numeric(12,2) not null default 0,
  other_charges numeric(12,2) not null default 0,
  discount numeric(12,2) not null default 0,
  fine numeric(12,2) not null default 0,
  effective_date date not null default current_date,
  created_by uuid references profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table fee_structures is 'One editable fee plan per class; CRUD from the Fee Structure screen.';

create or replace function fee_structures_total(fs fee_structures)
returns numeric language sql immutable as $$
  select fs.tuition_fee + fs.admission_fee + fs.registration_fee + fs.computer_fee
       + fs.lab_fee + fs.library_fee + fs.exam_fee + fs.transport_fee
       + fs.hostel_fee + fs.other_charges - fs.discount + fs.fine;
$$;

-- ---------------------------------------------------------------------------
-- 5. student_fee_assignments  (assign a fee_structure to every student)
-- ---------------------------------------------------------------------------
create table if not exists student_fee_assignments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  fee_structure_id uuid not null references fee_structures(id),
  assigned_at timestamptz not null default now(),
  assigned_by uuid references profiles(id),
  unique (student_id)   -- one active plan per student; keep history in a log table if needed
);

-- ---------------------------------------------------------------------------
-- 6. discounts / fines  (reusable catalog + per-voucher application log)
-- ---------------------------------------------------------------------------
create table if not exists discounts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  fee_collection_id uuid,                  -- set once linked to a collection (FK added below)
  amount numeric(12,2) not null check (amount >= 0),
  reason text,
  granted_by uuid references profiles(id),
  granted_at timestamptz not null default now()
);

create table if not exists fines (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id) on delete cascade,
  fee_collection_id uuid,
  amount numeric(12,2) not null check (amount >= 0),
  reason text,
  applied_by uuid references profiles(id),
  applied_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 7. fee_collections  (the Fee Collection / payment screen)
-- ---------------------------------------------------------------------------
create table if not exists fee_collections (
  id uuid primary key default gen_random_uuid(),
  receipt_no text not null unique,               -- auto-generated, e.g. RCT-000123
  student_id uuid not null references students(id),
  class_id uuid references classes(id),
  section_id uuid references sections(id),
  month text not null,                           -- 'July 2026' — or switch to a period_start date
  due_amount numeric(12,2) not null default 0,
  discount numeric(12,2) not null default 0,
  fine numeric(12,2) not null default 0,
  total_amount numeric(12,2) generated always as (due_amount + fine - discount) stored,
  amount_paid numeric(12,2) not null default 0,
  balance numeric(12,2) generated always as (due_amount + fine - discount - amount_paid) stored,
  payment_method_id uuid references payment_methods(id),
  bank_name text,
  transaction_id text,
  payment_date date,
  notes text,
  status text not null default 'pending',        -- pending | partial | paid
  received_by uuid references profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table discounts add constraint discounts_fee_collection_fk
  foreign key (fee_collection_id) references fee_collections(id) on delete set null;
alter table fines add constraint fines_fee_collection_fk
  foreign key (fee_collection_id) references fee_collections(id) on delete set null;

create index if not exists idx_fee_collections_student on fee_collections(student_id);
create index if not exists idx_fee_collections_month on fee_collections(month);
create index if not exists idx_fee_collections_status on fee_collections(status);

-- Auto-update `status` and `updated_at` when amount_paid changes
create or replace function fee_collections_set_status() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  if new.amount_paid <= 0 then
    new.status := 'pending';
  elsif new.amount_paid < (new.due_amount + new.fine - new.discount) then
    new.status := 'partial';
  else
    new.status := 'paid';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_fee_collections_status on fee_collections;
create trigger trg_fee_collections_status
  before insert or update of amount_paid, due_amount, fine, discount
  on fee_collections
  for each row execute function fee_collections_set_status();

-- ---------------------------------------------------------------------------
-- 8. fee_receipts  (one row per printed/generated receipt; supports partial
--    payments producing multiple receipts against one fee_collection)
-- ---------------------------------------------------------------------------
create table if not exists fee_receipts (
  id uuid primary key default gen_random_uuid(),
  fee_collection_id uuid not null references fee_collections(id) on delete cascade,
  receipt_no text not null unique,
  amount numeric(12,2) not null,
  payment_method_id uuid references payment_methods(id),
  bank_name text,
  transaction_id text,
  payment_date date not null default current_date,
  received_by uuid references profiles(id),
  qr_payload text,                 -- encoded string the printed QR code represents
  pdf_url text,                    -- if you generate & store PDFs in Supabase Storage
  created_at timestamptz not null default now()
);

create index if not exists idx_fee_receipts_collection on fee_receipts(fee_collection_id);

-- Auto-generate a receipt number if the caller didn't supply one
create sequence if not exists fee_receipt_seq start 100000;
create or replace function fee_receipts_autonumber() returns trigger
language plpgsql as $$
begin
  if new.receipt_no is null or new.receipt_no = '' then
    new.receipt_no := 'RCT-' || nextval('fee_receipt_seq');
  end if;
  return new;
end;
$$;

drop trigger if exists trg_fee_receipts_autonumber on fee_receipts;
create trigger trg_fee_receipts_autonumber
  before insert on fee_receipts
  for each row execute function fee_receipts_autonumber();

-- =============================================================================
-- ROW LEVEL SECURITY
-- =============================================================================
alter table profiles enable row level security;
alter table classes enable row level security;
alter table sections enable row level security;
alter table students enable row level security;
alter table payment_methods enable row level security;
alter table fee_structures enable row level security;
alter table student_fee_assignments enable row level security;
alter table discounts enable row level security;
alter table fines enable row level security;
alter table fee_collections enable row level security;
alter table fee_receipts enable row level security;

-- Helper: current user's role, read once per statement
create or replace function current_role_name() returns app_role
language sql stable as $$
  select role from profiles where id = auth.uid();
$$;

create or replace function is_staff() returns boolean
language sql stable as $$
  select current_role_name() in ('super_admin','principal','vice_principal','accountant');
$$;

-- profiles: everyone can read their own row; staff can read all
create policy profiles_self_read on profiles for select
  using (id = auth.uid() or is_staff());
create policy profiles_self_update on profiles for update
  using (id = auth.uid());

-- classes / sections / payment_methods: readable by any authenticated user,
-- writable only by super_admin
create policy ref_data_read on classes for select using (auth.role() = 'authenticated');
create policy ref_data_write on classes for all
  using (current_role_name() = 'super_admin') with check (current_role_name() = 'super_admin');
create policy sections_read on sections for select using (auth.role() = 'authenticated');
create policy sections_write on sections for all
  using (current_role_name() = 'super_admin') with check (current_role_name() = 'super_admin');
create policy methods_read on payment_methods for select using (auth.role() = 'authenticated');
create policy methods_write on payment_methods for all
  using (current_role_name() = 'super_admin') with check (current_role_name() = 'super_admin');

-- students: staff see everyone; a parent/student sees only their linked child
create policy students_staff_all on students for all
  using (is_staff()) with check (is_staff());
create policy students_self_read on students for select
  using (id = (select student_id from profiles where id = auth.uid()));

-- fee_structures: staff manage; parents/students can read (to see what they owe)
create policy fee_structures_staff_write on fee_structures for all
  using (is_staff()) with check (is_staff());
create policy fee_structures_read_all on fee_structures for select
  using (auth.role() = 'authenticated');

-- student_fee_assignments: staff manage; owner can read their own
create policy fee_assignments_staff_write on student_fee_assignments for all
  using (is_staff()) with check (is_staff());
create policy fee_assignments_self_read on student_fee_assignments for select
  using (student_id = (select student_id from profiles where id = auth.uid()));

-- fee_collections: staff full access; parent/student read-only for their own child
create policy fee_collections_staff_all on fee_collections for all
  using (is_staff()) with check (is_staff());
create policy fee_collections_self_read on fee_collections for select
  using (student_id = (select student_id from profiles where id = auth.uid()));

-- discounts / fines: staff only (sensitive financial adjustments)
create policy discounts_staff_all on discounts for all
  using (is_staff()) with check (is_staff());
create policy fines_staff_all on fines for all
  using (is_staff()) with check (is_staff());

-- fee_receipts: staff full access; parent/student read-only for their own child
create policy fee_receipts_staff_all on fee_receipts for all
  using (is_staff()) with check (is_staff());
create policy fee_receipts_self_read on fee_receipts for select
  using (
    fee_collection_id in (
      select id from fee_collections
      where student_id = (select student_id from profiles where id = auth.uid())
    )
  );

-- Accountant-only restriction example: only super_admin/principal can delete
-- vouchers, accountant can create/update but not delete
create policy fee_collections_no_delete_for_accountant on fee_collections for delete
  using (current_role_name() in ('super_admin','principal'));

-- =============================================================================
-- Notes for wiring this into the existing front-end
-- =============================================================================
-- 1. Replace App.state.feeStructures / App.state.fees reads & writes with
--    supabase.from('fee_structures') / supabase.from('fee_collections') calls.
-- 2. Auth: use Supabase Auth (email/password or magic link) and populate
--    `profiles.role` at signup (via a trusted server-side function, not the
--    client, so users can't self-assign 'super_admin').
-- 3. Receipts: generate `fee_receipts` rows on payment; render the printable
--    HTML client-side as today, or move PDF generation server-side (Supabase
--    Edge Function + a PDF library) if you want a stored, shareable PDF URL.
-- 4. WhatsApp sending stays a client-side wa.me/whatsapp:// deep link unless
--    you add a real WhatsApp Business API integration (see earlier notes in
--    this project) — Supabase itself does not send WhatsApp messages.
-- =============================================================================
