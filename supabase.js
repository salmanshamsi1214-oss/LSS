/* Leads School System — Supabase client
 * Frontend-safe publishable key only. Never put a Supabase service_role key here.
 */
(function () {
  const SUPABASE_URL = 'https://kepxnnapnbiimgdctelp.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__UVi7mxdZLknPrOmYszJPw_hj_X6ml2';

  if (!window.supabase) {
    console.error('Supabase SDK was not loaded.');
    return;
  }

  window.LSS_SUPABASE_URL = SUPABASE_URL;
  window.LSS_SUPABASE_KEY = SUPABASE_PUBLISHABLE_KEY;
  window.lssSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log('LSS Supabase connected:', SUPABASE_URL);
})();
