/* ============ Leads School System — Zeenat Campus (Prototype) ============ */

const ROLES = [
  {id:'admin', label:'Super Admin', icon:'👑'},
  {id:'principal', label:'Principal', icon:'🎓'},
  {id:'viceprincipal', label:'Vice Principal', icon:'📘'},
  {id:'accountant', label:'Accountant', icon:'💰'},
  {id:'teacher', label:'Teacher', icon:'🍎'},
  {id:'parent', label:'Parent', icon:'👨‍👩‍👧'},
  {id:'student', label:'Student', icon:'🎒'},
  {id:'receptionist', label:'Receptionist', icon:'🛎️'},
  {id:'librarian', label:'Librarian', icon:'📚'},
];

const NAV = {
  admin: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'People', items:[['students','🎒','Students'],['teachers','🍎','Teachers'],['admissioninquiry','📞','Admission Inquiry']]},
    {sec:'Academics', items:[['attendance','✅','Attendance'],['teacherattendance','🍎','Teacher Attendance'],['latecomers','⏰','Late Comers'],['dailydiary','📔','Daily Diary'],['weeklydiary','📅','Weekly Diary'],['notebookcheck','📓','Notebook Check'],['tests','🧪','Daily Tests'],['weeklytests','🧪','Weekly Tests'],['exams','🏆','Exams & Results']]},
    {sec:'Finance', items:[['fees','💰','Fee Management'],['feestructure','🧾','Fee Structure'],['feeassignment','🎓','Fee Assignment'],['duelist','📋','Due List']]},
    {sec:'Engagement', items:[['messagecenter','📣','Send Messages'],['smsmanagement','📲','SMS Management'],['whatsapp','💬','WhatsApp Automation'],['birthdays','🎂','Birthdays'],['notices','🔔','Notices']]},
    {sec:'Insights', items:[['reports','📈','Reports'],['progressreports','📄','Progress Reports']]},
    {sec:'System', items:[['schoolsettings','⚙️','School Settings']]},
  ],
  principal: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'People', items:[['students','🎒','Students'],['teachers','🍎','Teachers'],['admissioninquiry','📞','Admission Inquiry']]},
    {sec:'Academics', items:[['attendance','✅','Attendance'],['teacherattendance','🍎','Teacher Attendance'],['latecomers','⏰','Late Comers'],['notebookcheck','📓','Notebook Check'],['exams','🏆','Exams & Results']]},
    {sec:'Finance', items:[['fees','💰','Fee Management'],['feestructure','🧾','Fee Structure'],['feeassignment','🎓','Fee Assignment'],['duelist','📋','Due List']]},
    {sec:'Engagement', items:[['messagecenter','📣','Send Messages'],['notices','🔔','Notices'],['birthdays','🎂','Birthdays']]},
    {sec:'Insights', items:[['reports','📈','Reports'],['progressreports','📄','Progress Reports']]},
  ],
  viceprincipal: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'Academics', items:[['attendance','✅','Attendance'],['teacherattendance','🍎','Teacher Attendance'],['latecomers','⏰','Late Comers'],['dailydiary','📔','Daily Diary'],['weeklydiary','📅','Weekly Diary'],['notebookcheck','📓','Notebook Check'],['tests','🧪','Daily Tests'],['weeklytests','🧪','Weekly Tests']]},
    {sec:'Finance', items:[['fees','💰','Fee Management'],['feestructure','🧾','Fee Structure'],['feeassignment','🎓','Fee Assignment'],['duelist','📋','Due List']]},
    {sec:'Engagement', items:[['messagecenter','📣','Send Messages'],['notices','🔔','Notices']]},
  ],
  accountant: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'Academics', items:[['attendance','✅','Attendance']]},
    {sec:'Finance', items:[['fees','💰','Fee Management'],['feestructure','🧾','Fee Structure'],['feeassignment','🎓','Fee Assignment'],['duelist','📋','Due List']]},
    {sec:'Engagement', items:[['messagecenter','📣','Send Messages'],['smsmanagement','📲','SMS Management'],['whatsapp','💬','WhatsApp Automation']]},
  ],
  teacher: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'Teaching', items:[['attendance','✅','Mark Attendance'],['timetable','🗓️','Time Table'],['lessonplanner','📖','Lesson Planner']]},
    {sec:'Diary', items:[['dailydiary','📔','Daily Diary'],['weeklydiary','📅','Weekly Diary'],['notebookcheck','📓','Notebook Check']]},
    {sec:'Assessment', items:[['tests','🧪','Daily Tests'],['weeklytests','🧪','Weekly Tests'],['weeklytestreport','📈','Weekly Test Report'],['exams','🏆','Enter Marks']]},
    {sec:'Projects & Reports', items:[['roboticproject','🤖','Robotic Project'],['activitysubmission','📋','Activity Submission'],['progressreports','📄','Progress Reports']]},
    {sec:'My Records', items:[['myattendance','📆','Monthly Attendance'],['latecomers','⏰','Late Comers']]},
    {sec:'Engagement', items:[['notices','🔔','Notices']]},
  ],
  parent: [
    {sec:'Overview', items:[['dashboard','📊','My Child']]},
    {sec:'Academics', items:[['attendance','✅','Attendance'],['dailydiary','📔','Daily Diary'],['weeklydiary','📅','Weekly Diary'],['exams','🏆','Results'],['progressreports','📄','Progress Reports']]},
    {sec:'Finance', items:[['fees','💰','Fee Details']]},
    {sec:'Engagement', items:[['notices','🔔','Notices']]},
  ],
  student: [
    {sec:'Overview', items:[['dashboard','📊','My Dashboard']]},
    {sec:'Academics', items:[['dailydiary','📔','Daily Diary'],['weeklydiary','📅','Weekly Diary'],['tests','🧪','Daily Tests'],['exams','🏆','My Results']]},
    {sec:'Engagement', items:[['notices','🔔','Notices']]},
  ],
  receptionist: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'Front Desk', items:[['students','🎒','Students'],['latecomers','⏰','Late Comers'],['messagecenter','📣','Send Messages'],['notices','🔔','Notices']]},
  ],
  librarian: [
    {sec:'Overview', items:[['dashboard','📊','Dashboard']]},
    {sec:'Library', items:[['library','📚','Book Records']]},
  ],
};

const CLASSES = ['Reception','Mont-1','Mont-2','1st','2nd','3rd','4th','5th','6th','7th'];
const SECTIONS = ['A'];
const SUBJECTS = ['English','Urdu','Mathematics','Science','Islamiyat','Social Studies','Computer'];
const PAYMENT_METHODS = ['Cash','Bank Transfer','Debit Card','Credit Card','Online Payment','Cheque'];
const FIRST_NAMES = ['Ayesha','Bilal','Hassan','Zara','Ali','Sana','Usman','Mahnoor','Hamza','Fatima','Omar','Iqra','Fahad','Areeba','Danish','Laiba','Zain','Hira','Talha','Noor'];
const LAST_NAMES = ['Khan','Malik','Siddiqui','Sheikh','Raza','Baig','Ansari','Qureshi','Farooq','Chaudhry'];

function rand(arr){return arr[Math.floor(Math.random()*arr.length)];}
function randInt(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function pad(n){return String(n).padStart(2,'0');}
function fmtDate(d){return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;}
function todayStr(){return fmtDate(new Date());}
function niceDate(s){const d=new Date(s+'T00:00:00'); return d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});}
function money(n){return 'Rs. '+Number(n).toLocaleString('en-PK');}
function initials(name){return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();}
function uid(prefix){return prefix+'-'+Math.random().toString(36).slice(2,8);}
function hashCode(str){let h=0; for(let i=0;i<str.length;i++) h=(h*31+str.charCodeAt(i))>>>0; return h;}

/* ---------------- Seed data generation ---------------- */
const REAL_STUDENTS = [
  {id:"STU-0001", name:"Noor Zainab", cls:"Reception", section:"A", roll:1, admissionNo:"LSS-1001", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0002", name:"Irha Zain", cls:"Reception", section:"A", roll:2, admissionNo:"LSS-1002", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Zain Shahbaz", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0003", name:"Wasiqa Batool", cls:"Reception", section:"A", roll:3, admissionNo:"LSS-1003", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2023-09-07", parentName:"Arslan Nasir", guardianPhone:"03338551037", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0004", name:"Hamdan Shahid", cls:"Reception", section:"A", roll:4, admissionNo:"LSS-1004", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-01-23", parentName:"M. Shahid", guardianPhone:"03106270025", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0005", name:"Hassan Ali", cls:"Reception", section:"A", roll:5, admissionNo:"LSS-1005", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Nabeel", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0006", name:"Shees Ali", cls:"Reception", section:"A", roll:6, admissionNo:"LSS-1006", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Adil", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0007", name:"Subhan", cls:"Reception", section:"A", roll:7, admissionNo:"LSS-1007", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2023-08-26", parentName:"Abdul Qadir Mughal", guardianPhone:"03330285566", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0008", name:"Aiman Zara", cls:"Reception", section:"A", roll:8, admissionNo:"LSS-1008", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"03351023000", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0009", name:"Zarwa Khan", cls:"Reception", section:"A", roll:9, admissionNo:"LSS-1009", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2022-08-30", parentName:"Sher Muhammad", guardianPhone:"03362060111", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0010", name:"Haris", cls:"Reception", section:"A", roll:10, admissionNo:"LSS-1010", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0011", name:"Zunaisha Zahra", cls:"Reception", section:"A", roll:11, admissionNo:"LSS-1011", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-07-29", parentName:"Aqeel Abbass", guardianPhone:"03326226066", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0012", name:"Eshal Fatima", cls:"Reception", section:"A", roll:12, admissionNo:"LSS-1012", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Junaid", guardianPhone:"03315051180", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0013", name:"Fashi-u-din", cls:"Reception", section:"A", roll:13, admissionNo:"LSS-1013", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-09-06", parentName:"Rab Nawaz", guardianPhone:"03338964564", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0014", name:"Iraas Fatima", cls:"Reception", section:"A", roll:14, admissionNo:"LSS-1014", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-07-22", parentName:"Tahir Abbas", guardianPhone:"03362601412", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0015", name:"Arham Jawad", cls:"Reception", section:"A", roll:15, admissionNo:"LSS-1015", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2022-09-28", parentName:"Jawad Ahmad", guardianPhone:"03337442027", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0016", name:"Arham Haider", cls:"Reception", section:"A", roll:16, admissionNo:"LSS-1016", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Mohsin Haider", guardianPhone:"03368612742", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0017", name:"Arham Kashif", cls:"Reception", section:"A", roll:17, admissionNo:"LSS-1017", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-02-25", parentName:"Kashif", guardianPhone:"03106214567", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0018", name:"M. Hussain", cls:"Reception", section:"A", roll:18, admissionNo:"LSS-1018", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2022-06-13", parentName:"Malik Ijaz Akber", guardianPhone:"03327078117", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0019", name:"Hasnain Khan", cls:"Reception", section:"A", roll:19, admissionNo:"LSS-1019", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-12-07", parentName:"Mahran Khan", guardianPhone:"03326217441", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0020", name:"Umer Khan", cls:"Reception", section:"A", roll:20, admissionNo:"LSS-1020", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Wajjed Hussain", guardianPhone:"03186616206", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0021", name:"Musa Bukhari", cls:"Reception", section:"A", roll:21, admissionNo:"LSS-1021", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-08-28", parentName:"S. Saleem Raza", guardianPhone:"03366708586", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0022", name:"Ehan Mousa", cls:"Reception", section:"A", roll:22, admissionNo:"LSS-1022", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-04-19", parentName:"Shafat Sajid", guardianPhone:"03354427272", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0023", name:"Murtaza", cls:"Reception", section:"A", roll:23, admissionNo:"LSS-1023", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Hassan Raza", guardianPhone:"03347867672", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0024", name:"Waseem Asghar", cls:"Reception", section:"A", roll:24, admissionNo:"LSS-1024", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-02-07", parentName:"M. Asghar", guardianPhone:"03196476662", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0025", name:"Meerab Fatima", cls:"Reception", section:"A", roll:25, admissionNo:"LSS-1025", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2022-07-08", parentName:"Mohsin Atta", guardianPhone:"03356785185", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0026", name:"Noor-e-Jannat", cls:"Reception", section:"A", roll:26, admissionNo:"LSS-1026", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Latif", guardianPhone:"03156721343", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0027", name:"Meerab Fatima (old)", cls:"Reception", section:"A", roll:27, admissionNo:"LSS-1027", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Hamza", guardianPhone:"03172348029", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0028", name:"S. Tajeel Zainab", cls:"Reception", section:"A", roll:28, admissionNo:"LSS-1028", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2022-10-25", parentName:"M. Aqib Ali", guardianPhone:"03364282002", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0029", name:"Maliha", cls:"Reception", section:"A", roll:29, admissionNo:"LSS-1029", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Naik Muhammad", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0030", name:"Ahmad", cls:"Reception", section:"A", roll:30, admissionNo:"LSS-1030", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Nokar Hussain", guardianPhone:"03154268273", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0031", name:"Allah Wasia", cls:"Reception", section:"A", roll:31, admissionNo:"LSS-1031", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Malik Khadim", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0032", name:"Rija Haider", cls:"Reception", section:"A", roll:32, admissionNo:"LSS-1032", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2023-08-21", parentName:"Irfan Haider", guardianPhone:"03317340685", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0033", name:"Nida Haider", cls:"Reception", section:"A", roll:33, admissionNo:"LSS-1033", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-12-19", parentName:"Irfan Haider", guardianPhone:"03317340685", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0034", name:"Tatheer Fatima", cls:"Reception", section:"A", roll:34, admissionNo:"LSS-1034", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Abbass", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0035", name:"Haider Ali", cls:"Reception", section:"A", roll:35, admissionNo:"LSS-1035", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Abbass", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0036", name:"Abeeha Khan", cls:"Reception", section:"A", roll:36, admissionNo:"LSS-1036", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-11-08", parentName:"M. Ismail", guardianPhone:"03156562256", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0037", name:"Momina", cls:"Reception", section:"A", roll:37, admissionNo:"LSS-1037", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Kazim Hussain", guardianPhone:"03457137100", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0038", name:"Maheen Fatima", cls:"Reception", section:"A", roll:38, admissionNo:"LSS-1038", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-11-25", parentName:"Ahmad Raza", guardianPhone:"03346728039", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0039", name:"Atiq-ur-Rehman", cls:"Reception", section:"A", roll:39, admissionNo:"LSS-1039", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-08-18", parentName:"M. Haris", guardianPhone:"03704782998", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0040", name:"Nayab", cls:"Reception", section:"A", roll:40, admissionNo:"LSS-1040", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Sadam Hussain", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0041", name:"Faryal", cls:"Reception", section:"A", roll:41, admissionNo:"LSS-1041", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Arshad", guardianPhone:"03356601430", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0042", name:"Zamin Abbas", cls:"Reception", section:"A", roll:42, admissionNo:"LSS-1042", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2023-10-13", parentName:"Sabir Hussain", guardianPhone:"03371466110", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0043", name:"S. Mishal Fatima", cls:"Mont-1", section:"A", roll:1, admissionNo:"LSS-1043", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-05-22", parentName:"S. Abbas Haider", guardianPhone:"03347235564", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0044", name:"Zainab Yaseen", cls:"Mont-1", section:"A", roll:2, admissionNo:"LSS-1044", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Yaseen", guardianPhone:"03124449063", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0045", name:"Hoorain Fatima", cls:"Mont-1", section:"A", roll:3, admissionNo:"LSS-1045", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-06-25", parentName:"M. Naeem", guardianPhone:"03362392626", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0046", name:"Washma Zainab", cls:"Mont-1", section:"A", roll:4, admissionNo:"LSS-1046", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2023-07-09", parentName:"Imran Hassan", guardianPhone:"03186731512", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0047", name:"M. Zunair Haider", cls:"Mont-1", section:"A", roll:5, admissionNo:"LSS-1047", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Kamran Haider", guardianPhone:"03047844026", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0048", name:"Sift-e-Zahra", cls:"Mont-1", section:"A", roll:6, admissionNo:"LSS-1048", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Farookh Abbas", guardianPhone:"03346575005", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0049", name:"M. Hussain", cls:"Mont-1", section:"A", roll:7, admissionNo:"LSS-1049", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Sajjad", guardianPhone:"03366159102", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0050", name:"M. Armaghan", cls:"Mont-1", section:"A", roll:8, admissionNo:"LSS-1050", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-06-10", parentName:"Amjad Farooq", guardianPhone:"03346950500", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0051", name:"Zainab Saleem", cls:"Mont-1", section:"A", roll:9, admissionNo:"LSS-1051", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Saleem", guardianPhone:"03188864493", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0052", name:"Dua Zahra", cls:"Mont-1", section:"A", roll:10, admissionNo:"LSS-1052", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-05-29", parentName:"Mahran Khan", guardianPhone:"03326217441", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0053", name:"Faryal", cls:"Mont-1", section:"A", roll:11, admissionNo:"LSS-1053", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-06-23", parentName:"Arshad Hussain", guardianPhone:"03365679000", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0054", name:"Muneeb Ahmad", cls:"Mont-1", section:"A", roll:12, admissionNo:"LSS-1054", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-12-18", parentName:"Safat", guardianPhone:"03338817702", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0055", name:"Farzana Asif", cls:"Mont-1", section:"A", roll:13, admissionNo:"LSS-1055", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Asif", guardianPhone:"03117523927", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0056", name:"M. Sartaj Danish", cls:"Mont-1", section:"A", roll:14, admissionNo:"LSS-1056", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Danish", guardianPhone:"03313714196", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0057", name:"Abrar Hussain", cls:"Mont-1", section:"A", roll:15, admissionNo:"LSS-1057", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-07-17", parentName:"M. Hassnain", guardianPhone:"03182492658", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0058", name:"Ahmad Mohsin", cls:"Mont-1", section:"A", roll:16, admissionNo:"LSS-1058", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-12-02", parentName:"M. Abdullah", guardianPhone:"03326187759", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0059", name:"Sundas", cls:"Mont-1", section:"A", roll:17, admissionNo:"LSS-1059", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-02-18", parentName:"Ameer Hamza", guardianPhone:"03156826474", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0060", name:"Manahil Fatima", cls:"Mont-1", section:"A", roll:18, admissionNo:"LSS-1060", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Asghar", guardianPhone:"03166788684", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0061", name:"Hareem Fatima", cls:"Mont-1", section:"A", roll:19, admissionNo:"LSS-1061", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Asghar", guardianPhone:"03166788684", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0062", name:"Maryam", cls:"Mont-1", section:"A", roll:20, admissionNo:"LSS-1062", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-07-27", parentName:"Sh. Abdul Rahim", guardianPhone:"03077591011", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0063", name:"Zarshal Gull", cls:"Mont-1", section:"A", roll:21, admissionNo:"LSS-1063", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Tahir Gull", guardianPhone:"03156001951", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0064", name:"Hina Zahra", cls:"Mont-1", section:"A", roll:22, admissionNo:"LSS-1064", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-05-16", parentName:"Ali Raza", guardianPhone:"03344500028", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0065", name:"Abeeha Fatima", cls:"Mont-1", section:"A", roll:23, admissionNo:"LSS-1065", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2022-11-05", parentName:"Shakeel Hussain", guardianPhone:"03197237064", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0066", name:"Aima Khan", cls:"Mont-1", section:"A", roll:24, admissionNo:"LSS-1066", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Amjad Farooq", guardianPhone:"03343983434", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0067", name:"M. Nawaz", cls:"Mont-1", section:"A", roll:25, admissionNo:"LSS-1067", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-11-04", parentName:"Yasir Hasnain", guardianPhone:"03357937244", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0068", name:"M. Zoorain", cls:"Mont-1", section:"A", roll:26, admissionNo:"LSS-1068", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-04-12", parentName:"Imran Shabbir", guardianPhone:"03320962900", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0069", name:"M. Abdullah", cls:"Mont-1", section:"A", roll:27, admissionNo:"LSS-1069", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Umar", guardianPhone:"03344177070", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0070", name:"Zayan Zain", cls:"Mont-1", section:"A", roll:28, admissionNo:"LSS-1070", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Zain Ahmad", guardianPhone:"03347921135", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0071", name:"Shaffay", cls:"Mont-1", section:"A", roll:29, admissionNo:"LSS-1071", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"03351726666", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0072", name:"Aliyan Khan", cls:"Mont-1", section:"A", roll:30, admissionNo:"LSS-1072", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Ali", guardianPhone:"03412376170", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0073", name:"Zainab Khan", cls:"Mont-1", section:"A", roll:31, admissionNo:"LSS-1073", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-01-21", parentName:"Sher Muhammad", guardianPhone:"03362060111", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0074", name:"Humaira Sabir", cls:"Mont-2", section:"A", roll:1, admissionNo:"LSS-1074", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-05-26", parentName:"Sabir", guardianPhone:"03166631341", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0075", name:"Heeba Khan", cls:"Mont-2", section:"A", roll:2, admissionNo:"LSS-1075", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-04-07", parentName:"M. Khan", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0076", name:"Karar Ali", cls:"Mont-2", section:"A", roll:3, admissionNo:"LSS-1076", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-06-11", parentName:"Nokar Hussain", guardianPhone:"03154268273", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0077", name:"Farhan Ali", cls:"Mont-2", section:"A", roll:4, admissionNo:"LSS-1077", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-08-27", parentName:"Nokar Hussain", guardianPhone:"03154268273", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0078", name:"Insha Ismail", cls:"Mont-2", section:"A", roll:5, admissionNo:"LSS-1078", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-06-04", parentName:"M. Ismail", guardianPhone:"03156562256", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0079", name:"Muhammad Ali", cls:"Mont-2", section:"A", roll:6, admissionNo:"LSS-1079", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Arslan", guardianPhone:"03312416464", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0080", name:"Muhammad Ahad", cls:"Mont-2", section:"A", roll:7, admissionNo:"LSS-1080", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Hasnain", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0081", name:"Zareesh-e-Zainab", cls:"Mont-2", section:"A", roll:8, admissionNo:"LSS-1081", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-11-14", parentName:"Shafat Sajid", guardianPhone:"03354427272", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0082", name:"Muhammad Sarim", cls:"Mont-2", section:"A", roll:9, admissionNo:"LSS-1082", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-11-09", parentName:"Jawad Ahmad", guardianPhone:"03333785789", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0083", name:"Hassan Mustafa", cls:"Mont-2", section:"A", roll:10, admissionNo:"LSS-1083", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Asif Raza", guardianPhone:"03338576628", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0084", name:"Muhammad Hassan", cls:"Mont-2", section:"A", roll:11, admissionNo:"LSS-1084", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-01-07", parentName:"M. Ali Hussain", guardianPhone:"03346791922", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0085", name:"Muhammad Hussain", cls:"Mont-2", section:"A", roll:12, admissionNo:"LSS-1085", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-01-07", parentName:"M. Ali Hussain", guardianPhone:"03346791922", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0086", name:"Muhammad Muhadis", cls:"Mont-2", section:"A", roll:13, admissionNo:"LSS-1086", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-12-02", parentName:"M. Rashid", guardianPhone:"03338443283", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0087", name:"Urwa Zahra", cls:"Mont-2", section:"A", roll:14, admissionNo:"LSS-1087", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-09-04", parentName:"Mal. Faisal Atta", guardianPhone:"03367860692", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0088", name:"S. Anoushay Fatima", cls:"Mont-2", section:"A", roll:15, admissionNo:"LSS-1088", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-11-07", parentName:"S. Ali Haider", guardianPhone:"03311457212", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0089", name:"M. Kazim", cls:"Mont-2", section:"A", roll:16, admissionNo:"LSS-1089", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-05-13", parentName:"John Abbass", guardianPhone:"03317259572", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0090", name:"M. Rayan", cls:"Mont-2", section:"A", roll:17, admissionNo:"LSS-1090", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Ali", guardianPhone:"03318755625", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0091", name:"Qurban Arshad", cls:"Mont-2", section:"A", roll:18, admissionNo:"LSS-1091", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Arshad", guardianPhone:"03356601436", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0092", name:"Bassam Kashif", cls:"Mont-2", section:"A", roll:19, admissionNo:"LSS-1092", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Kashif", guardianPhone:"03106214567", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0093", name:"Hasnain Shahid Ali Abbass", cls:"Mont-2", section:"A", roll:20, admissionNo:"LSS-1093", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Shahid", guardianPhone:"03327580100", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0094", name:"Kanza Faheem", cls:"Mont-2", section:"A", roll:21, admissionNo:"LSS-1094", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-12-20", parentName:"M. Faheem", guardianPhone:"03321400031", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0095", name:"M. Arham", cls:"Mont-2", section:"A", roll:22, admissionNo:"LSS-1095", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-07-28", parentName:"M. Irshad", guardianPhone:"03338723399", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0096", name:"Amna Begam", cls:"Mont-2", section:"A", roll:23, admissionNo:"LSS-1096", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-12-26", parentName:"Ameer Hamza", guardianPhone:"03156826474", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0097", name:"Ebtassam Mehdi", cls:"1st", section:"A", roll:1, admissionNo:"LSS-1097", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Salman Shamsi", guardianPhone:"03326241440", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0098", name:"M. Asjad", cls:"1st", section:"A", roll:2, admissionNo:"LSS-1098", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Hani", guardianPhone:"03343358400", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0099", name:"Qaim Baqir", cls:"1st", section:"A", roll:3, admissionNo:"LSS-1099", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Asif Raza", guardianPhone:"03014851217", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0100", name:"Meer Ali", cls:"1st", section:"A", roll:4, admissionNo:"LSS-1100", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-11-13", parentName:"Arif Hussain", guardianPhone:"03149793042", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0101", name:"Zohaib", cls:"1st", section:"A", roll:5, admissionNo:"LSS-1101", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Naik Muhammad", guardianPhone:"971582633378", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0102", name:"M. Ayyan Ali", cls:"1st", section:"A", roll:6, admissionNo:"LSS-1102", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Ali", guardianPhone:"03318755625", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0103", name:"Zainab Mughal", cls:"1st", section:"A", roll:7, admissionNo:"LSS-1103", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-04-27", parentName:"Abdul Qadir Mughal", guardianPhone:"03330285566", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0104", name:"Tatheer Zainab", cls:"1st", section:"A", roll:8, admissionNo:"LSS-1104", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-09-03", parentName:"Imran Hassan", guardianPhone:"03186731512", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0105", name:"M. Qasim", cls:"1st", section:"A", roll:9, admissionNo:"LSS-1105", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2020-01-25", parentName:"John Abbass", guardianPhone:"03317259572", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0106", name:"Umm-e-Hani", cls:"1st", section:"A", roll:10, admissionNo:"LSS-1106", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-07-04", parentName:"M. Naeem", guardianPhone:"03362392626", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0107", name:"Haram Fatima", cls:"1st", section:"A", roll:11, admissionNo:"LSS-1107", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-06-22", parentName:"M. Faheem", guardianPhone:"03362392626", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0108", name:"Mardan Ali", cls:"1st", section:"A", roll:12, admissionNo:"LSS-1108", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Farookh Abbas", guardianPhone:"03346563744", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0109", name:"Sufiyan Arshad", cls:"1st", section:"A", roll:13, admissionNo:"LSS-1109", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Arshad", guardianPhone:"03356601430", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0110", name:"Ifra Nawal", cls:"1st", section:"A", roll:14, admissionNo:"LSS-1110", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Zafar Anjum", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0111", name:"Abdul Rafay", cls:"1st", section:"A", roll:15, admissionNo:"LSS-1111", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Fazal Abbass", guardianPhone:"03336236100", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0112", name:"Mehak Fatima", cls:"1st", section:"A", roll:16, admissionNo:"LSS-1112", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Khurram Shahzaid", guardianPhone:"03196506553", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0113", name:"M. Ahmad", cls:"1st", section:"A", roll:17, admissionNo:"LSS-1113", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-02-05", parentName:"Imran Shabbir", guardianPhone:"03320962900", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0114", name:"Abbas Haider", cls:"1st", section:"A", roll:18, admissionNo:"LSS-1114", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Sadam Hussain", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0115", name:"Fatima Noor", cls:"1st", section:"A", roll:19, admissionNo:"LSS-1115", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Ahmer Fiaz", guardianPhone:"03322720620", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0116", name:"Umer Sabir", cls:"1st", section:"A", roll:20, admissionNo:"LSS-1116", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-05-26", parentName:"Sabir", guardianPhone:"03166631341", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0117", name:"M. Waleed", cls:"1st", section:"A", roll:21, admissionNo:"LSS-1117", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Sikandar", guardianPhone:"03160270910", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0118", name:"Maira", cls:"1st", section:"A", roll:22, admissionNo:"LSS-1118", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Imran Rasool", guardianPhone:"03343562828", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0119", name:"Bakhtawar", cls:"1st", section:"A", roll:23, admissionNo:"LSS-1119", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Ali", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0120", name:"Hubdar Hussain", cls:"1st", section:"A", roll:24, admissionNo:"LSS-1120", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"03352895358", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0121", name:"Bushra Ashiq", cls:"1st", section:"A", roll:25, admissionNo:"LSS-1121", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0122", name:"Abdul Basit", cls:"2nd", section:"A", roll:1, admissionNo:"LSS-1122", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Rashid", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0123", name:"Abdul Hadi", cls:"2nd", section:"A", roll:2, admissionNo:"LSS-1123", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-02-24", parentName:"M. Naeem", guardianPhone:"03362392626", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0124", name:"M. Hadi", cls:"2nd", section:"A", roll:3, admissionNo:"LSS-1124", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Amir", guardianPhone:"03245887812", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0125", name:"M. Azan", cls:"2nd", section:"A", roll:4, admissionNo:"LSS-1125", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-02-07", parentName:"Abid Laal", guardianPhone:"03182701057", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0126", name:"Abdul Rehman", cls:"2nd", section:"A", roll:5, admissionNo:"LSS-1126", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-12-11", parentName:"Umer Farooq", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0127", name:"Muslim Raza", cls:"2nd", section:"A", roll:6, admissionNo:"LSS-1127", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-08-16", parentName:"M. Hassan Raza", guardianPhone:"03347867672", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0128", name:"M. Mustafa Haider", cls:"2nd", section:"A", roll:7, admissionNo:"LSS-1128", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-09-22", parentName:"M. Hassan Raza", guardianPhone:"03347867672", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0129", name:"M. Hanfiya", cls:"2nd", section:"A", roll:8, admissionNo:"LSS-1129", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-05-23", parentName:"M. Kazim", guardianPhone:"03346066146", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0130", name:"Manal Sajjad", cls:"2nd", section:"A", roll:9, admissionNo:"LSS-1130", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-05-18", parentName:"M. Sajjad", guardianPhone:"03366159102", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0131", name:"Abiha Fatima", cls:"2nd", section:"A", roll:10, admissionNo:"LSS-1131", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-12-02", parentName:"N/A", guardianPhone:"03343983434", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0132", name:"Armish Fatima", cls:"2nd", section:"A", roll:11, admissionNo:"LSS-1132", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Amjad Munir", guardianPhone:"03364472400", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0133", name:"Hania Gull", cls:"2nd", section:"A", roll:12, admissionNo:"LSS-1133", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Umar", guardianPhone:"03344177070", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0134", name:"Seerat Fatima", cls:"2nd", section:"A", roll:13, admissionNo:"LSS-1134", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-01-13", parentName:"M. Ali Hussain", guardianPhone:"03346791922", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0135", name:"Hoor-ul-Ain", cls:"2nd", section:"A", roll:14, admissionNo:"LSS-1135", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Imran", guardianPhone:"03376482929", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0136", name:"Hooria Zainab", cls:"2nd", section:"A", roll:15, admissionNo:"LSS-1136", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Raza", guardianPhone:"03348021718", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0137", name:"Abrish", cls:"2nd", section:"A", roll:16, admissionNo:"LSS-1137", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Tahir Gull", guardianPhone:"03156001951", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0138", name:"Hoorain Zainab", cls:"2nd", section:"A", roll:17, admissionNo:"LSS-1138", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-10-03", parentName:"M. Jabir", guardianPhone:"03176627140", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0139", name:"M. Kaif", cls:"2nd", section:"A", roll:18, admissionNo:"LSS-1139", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Imran Rasool", guardianPhone:"03343562828", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0140", name:"Yaha", cls:"2nd", section:"A", roll:19, admissionNo:"LSS-1140", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-12-07", parentName:"Arif Hussain", guardianPhone:"03149793042", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0141", name:"Ali Jaan", cls:"2nd", section:"A", roll:20, admissionNo:"LSS-1141", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-12-07", parentName:"Arif Hussain", guardianPhone:"03149793042", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0142", name:"M. Shahzaib", cls:"2nd", section:"A", roll:21, admissionNo:"LSS-1142", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-12-10", parentName:"Naik Muhammad", guardianPhone:"971582633378", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0143", name:"M. Shahzaman", cls:"2nd", section:"A", roll:22, admissionNo:"LSS-1143", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-08-16", parentName:"Kamran Masood", guardianPhone:"03226160617", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0144", name:"Rehab", cls:"2nd", section:"A", roll:23, admissionNo:"LSS-1144", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-09-23", parentName:"N/A", guardianPhone:"03335807444", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0145", name:"M. Hassan", cls:"3rd", section:"A", roll:1, admissionNo:"LSS-1145", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-03-07", parentName:"M. Faheem", guardianPhone:"03362392626", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0146", name:"Hassan", cls:"3rd", section:"A", roll:2, admissionNo:"LSS-1146", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Arslan", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0147", name:"M. Hurr Hussain", cls:"3rd", section:"A", roll:3, admissionNo:"LSS-1147", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2014-09-05", parentName:"Farookh", guardianPhone:"03317281800", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0148", name:"Abdul Wasy", cls:"3rd", section:"A", roll:4, admissionNo:"LSS-1148", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Fazal Abbass", guardianPhone:"03336236100", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0149", name:"Manahil", cls:"3rd", section:"A", roll:5, admissionNo:"LSS-1149", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Farookh Fiaz", guardianPhone:"03361321516", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0150", name:"Shahzain", cls:"3rd", section:"A", roll:6, admissionNo:"LSS-1150", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Salman Khan", guardianPhone:"03367617137", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0151", name:"Zunaisha", cls:"3rd", section:"A", roll:7, admissionNo:"LSS-1151", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Salman Khan", guardianPhone:"03367617137", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0152", name:"Moosa Raza", cls:"3rd", section:"A", roll:8, admissionNo:"LSS-1152", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-09-12", parentName:"M. Hassan Raza", guardianPhone:"03347867672", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0153", name:"Abdullah", cls:"3rd", section:"A", roll:9, admissionNo:"LSS-1153", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Amjad Farooq", guardianPhone:"03343983434", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0154", name:"Salahudin", cls:"3rd", section:"A", roll:10, admissionNo:"LSS-1154", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-03-13", parentName:"M. Asif", guardianPhone:"03362392626", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0155", name:"M. Khan", cls:"3rd", section:"A", roll:11, admissionNo:"LSS-1155", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Imran", guardianPhone:"03376482929", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0156", name:"Muhammad", cls:"3rd", section:"A", roll:12, admissionNo:"LSS-1156", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-10-24", parentName:"M. Abdullah", guardianPhone:"03326187759", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0157", name:"Abiha Fatima", cls:"3rd", section:"A", roll:13, admissionNo:"LSS-1157", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-06-13", parentName:"Adnan Faid", guardianPhone:"03366982864", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0158", name:"Hadia Noor", cls:"4th", section:"A", roll:1, admissionNo:"LSS-1158", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-11-02", parentName:"M. Imran Rasool", guardianPhone:"03343562828", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0159", name:"Muqadas Fatima", cls:"4th", section:"A", roll:2, admissionNo:"LSS-1159", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-06-18", parentName:"Khurram", guardianPhone:"03111495194", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0160", name:"Maham Zahra", cls:"4th", section:"A", roll:3, admissionNo:"LSS-1160", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2017-06-02", parentName:"Allah Dita", guardianPhone:"03313445002", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0161", name:"Hooram Ammar", cls:"4th", section:"A", roll:4, admissionNo:"LSS-1161", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-09-12", parentName:"Ammar Illahi", guardianPhone:"03334577764", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0162", name:"Fatima Ammar", cls:"4th", section:"A", roll:5, admissionNo:"LSS-1162", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-10-22", parentName:"Ammar Illahi", guardianPhone:"03334577764", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0163", name:"Bushra Bilal", cls:"4th", section:"A", roll:6, admissionNo:"LSS-1163", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"M. Bilal", guardianPhone:"03714461260", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0164", name:"Shaheer Alam", cls:"4th", section:"A", roll:7, admissionNo:"LSS-1164", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-04-22", parentName:"M. Kaleem", guardianPhone:"971527334515", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0165", name:"Reyan Haider", cls:"4th", section:"A", roll:8, admissionNo:"LSS-1165", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-07-18", parentName:"Amir", guardianPhone:"03245887812", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0166", name:"Rooman Sardar", cls:"4th", section:"A", roll:9, admissionNo:"LSS-1166", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-07-25", parentName:"Amjad Farooq", guardianPhone:"03346965050", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0167", name:"Ayan Sardar", cls:"4th", section:"A", roll:10, admissionNo:"LSS-1167", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-08-31", parentName:"Arshad Hussain", guardianPhone:"03365679000", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0168", name:"Basim Abbas", cls:"4th", section:"A", roll:11, admissionNo:"LSS-1168", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2015-10-08", parentName:"Asif Raza", guardianPhone:"03338576628", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0169", name:"Shaheer Rehmatullah", cls:"4th", section:"A", roll:12, admissionNo:"LSS-1169", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-05-27", parentName:"Rehmatullah", guardianPhone:"03346880680", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0170", name:"Wahab Khan", cls:"4th", section:"A", roll:13, admissionNo:"LSS-1170", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2012-05-07", parentName:"M. Ahmad", guardianPhone:"03348021718", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0171", name:"Mukhtiar Hussain", cls:"4th", section:"A", roll:14, admissionNo:"LSS-1171", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2016-09-16", parentName:"Munaveer Abbas", guardianPhone:"03349630391", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0172", name:"Aimen", cls:"4th", section:"A", roll:15, admissionNo:"LSS-1172", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Shoaib", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0173", name:"Aroosa", cls:"4th", section:"A", roll:16, admissionNo:"LSS-1173", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0174", name:"Meher Ali", cls:"4th", section:"A", roll:17, admissionNo:"LSS-1174", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2019-04-04", parentName:"Irfan Haider", guardianPhone:"03336148899", address:"—", medical:"None", feeStatus:"pending", monthlyFee:16000},
  {id:"STU-0175", name:"Mohib Ali", cls:"5th", section:"A", roll:1, admissionNo:"LSS-1175", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2012-11-11", parentName:"Farukh Abbas", guardianPhone:"03317281800", address:"—", medical:"None", feeStatus:"pending", monthlyFee:17000},
  {id:"STU-0176", name:"Maiza Amjad", cls:"5th", section:"A", roll:2, admissionNo:"LSS-1176", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2014-07-16", parentName:"Amjad Sardar", guardianPhone:"03346965050", address:"—", medical:"None", feeStatus:"pending", monthlyFee:17000},
  {id:"STU-0177", name:"M. Rayyan", cls:"5th", section:"A", roll:3, admissionNo:"LSS-1177", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2014-04-24", parentName:"Farrukh Fayyaz", guardianPhone:"03330000350", address:"—", medical:"None", feeStatus:"pending", monthlyFee:17000},
  {id:"STU-0178", name:"M. Manan", cls:"5th", section:"A", roll:4, admissionNo:"LSS-1178", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2018-01-01", parentName:"Irfan Haider", guardianPhone:"03336148899", address:"—", medical:"None", feeStatus:"pending", monthlyFee:17000},
  {id:"STU-0179", name:"Kainat Saleem", cls:"6th", section:"A", roll:1, admissionNo:"LSS-1179", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2011-09-09", parentName:"M. Saleem", guardianPhone:"03188864493", address:"—", medical:"None", feeStatus:"pending", monthlyFee:18000},
  {id:"STU-0180", name:"Eman Ali", cls:"6th", section:"A", roll:2, admissionNo:"LSS-1180", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2013-02-05", parentName:"M. Ali", guardianPhone:"03356490287", address:"—", medical:"None", feeStatus:"pending", monthlyFee:18000},
  {id:"STU-0181", name:"Horram Shahzad", cls:"6th", section:"A", roll:3, admissionNo:"LSS-1181", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2013-07-14", parentName:"Khurram", guardianPhone:"03111495144", address:"—", medical:"None", feeStatus:"pending", monthlyFee:18000},
  {id:"STU-0182", name:"Jawad Haider", cls:"6th", section:"A", roll:4, admissionNo:"LSS-1182", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2013-06-12", parentName:"Sikandar", guardianPhone:"03160270910", address:"—", medical:"None", feeStatus:"pending", monthlyFee:18000},
  {id:"STU-0183", name:"Emaan Zahra", cls:"3rd", section:"A", roll:14, admissionNo:"LSS-1183", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0184", name:"Muhammad Azan", cls:"3rd", section:"A", roll:15, admissionNo:"LSS-1184", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"Amir", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0185", name:"M. Azlan Amir", cls:"Reception", section:"A", roll:43, admissionNo:"LSS-1185", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2024-01-21", parentName:"M. Aamir Bashir", guardianPhone:"03358578901", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
  {id:"STU-0186", name:"M. Ayan", cls:"7th", section:"A", roll:1, admissionNo:"LSS-1186", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2012-07-03", parentName:"Abid Laal", guardianPhone:"03318470105", address:"—", medical:"None", feeStatus:"pending", monthlyFee:19000},
  {id:"STU-0187", name:"Farhal Arshad", cls:"7th", section:"A", roll:2, admissionNo:"LSS-1187", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2014-06-07", parentName:"Arshad", guardianPhone:"03356601420", address:"—", medical:"None", feeStatus:"pending", monthlyFee:19000},
  {id:"STU-0188", name:"M. Ammar", cls:"7th", section:"A", roll:3, admissionNo:"LSS-1188", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2014-06-06", parentName:"Imran Khan", guardianPhone:"03325420520", address:"—", medical:"None", feeStatus:"pending", monthlyFee:19000},
  {id:"STU-0189", name:"Shair Ali", cls:"7th", section:"A", roll:4, admissionNo:"LSS-1189", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:19000},
  {id:"STU-0190", name:"Azushma Shifqat", cls:"7th", section:"A", roll:5, admissionNo:"LSS-1190", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2013-01-26", parentName:"Shafqat", guardianPhone:"03338817702", address:"—", medical:"None", feeStatus:"pending", monthlyFee:19000},
  {id:"STU-0191", name:"Nadia Kaleem", cls:"7th", section:"A", roll:6, admissionNo:"LSS-1191", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2013-08-05", parentName:"M. Kaleem", guardianPhone:"971527334515", address:"—", medical:"None", feeStatus:"pending", monthlyFee:19000},
  {id:"STU-0192", name:"Abdul Rehman", cls:"2nd", section:"A", roll:24, admissionNo:"LSS-1192", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"03346778966", address:"—", medical:"None", feeStatus:"pending", monthlyFee:14000},
  {id:"STU-0193", name:"Fashi-u-din", cls:"3rd", section:"A", roll:16, admissionNo:"LSS-1193", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"03338964564", address:"—", medical:"None", feeStatus:"pending", monthlyFee:15000},
  {id:"STU-0194", name:"Bushra Ashiq", cls:"1st", section:"A", roll:26, admissionNo:"LSS-1194", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0195", name:"Anabia", cls:"1st", section:"A", roll:27, admissionNo:"LSS-1195", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0196", name:"Eshal Fatima / Shan-e-Haider", cls:"Mont-1", section:"A", roll:32, admissionNo:"LSS-1196", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:11000},
  {id:"STU-0197", name:"Momina", cls:"1st", section:"A", roll:28, admissionNo:"LSS-1197", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:13000},
  {id:"STU-0198", name:"M. Uzair Bloch", cls:"Mont-2", section:"A", roll:24, admissionNo:"LSS-1198", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0199", name:"Fajar Fatima", cls:"6th", section:"A", roll:5, admissionNo:"LSS-1199", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2014-03-13", parentName:"M. Abdullah", guardianPhone:"03326187759", address:"—", medical:"None", feeStatus:"pending", monthlyFee:18000},
  {id:"STU-0200", name:"Ayesha Bibi", cls:"Mont-2", section:"A", roll:25, admissionNo:"LSS-1200", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-01-03", parentName:"Nasir Khan", guardianPhone:"03036111101", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0201", name:"Muhammad Khan", cls:"Mont-2", section:"A", roll:26, admissionNo:"LSS-1201", gender:"Not Provided", bloodGroup:"Not Provided", dob:"2021-01-03", parentName:"Nasir Khan", guardianPhone:"03036111101", address:"—", medical:"None", feeStatus:"pending", monthlyFee:12000},
  {id:"STU-0202", name:"Abiha Fatima", cls:"Reception", section:"A", roll:44, admissionNo:"LSS-1202", gender:"Not Provided", bloodGroup:"Not Provided", dob:"", parentName:"N/A", guardianPhone:"N/A", address:"—", medical:"None", feeStatus:"pending", monthlyFee:10000},
];
function seedStudents(){
  // Real roster imported from LEADS_School_System_Students.xlsx (202 students, July 2026 import).
  // Deep-cloned each time so edits made in the app never mutate this master template.
  return REAL_STUDENTS.map(s => ({...s}));
}

function seedTeachers(){
  const names=['Mrs. Sadia Iqbal','Mr. Kamran Aziz','Ms. Rabia Hassan','Mr. Junaid Sheikh','Mrs. Farah Naz','Mr. Adnan Malik','Ms. Nida Yousuf'];
  return names.map((n,i)=>({
    id: uid('TCH'),
    name:n,
    subject: rand(SUBJECTS),
    classes: [rand(CLASSES)+' '+rand(SECTIONS), rand(CLASSES)+' '+rand(SECTIONS)],
    qualification: rand(['M.Ed','B.Ed, MA English','MSc Mathematics','BS Computer Science','M.Phil Education']),
    experience: randInt(1,15)+' yrs',
    phone:'0321'+randInt(1000000,9999999),
    salary: randInt(35,90)*1000,
    status: i===2? 'On Leave':'Active',
    weeklyActivitySubmitted: i%3!==0,
    password: 'demo1234',
    employeeId: 'EMP-'+(1000+i),
  }));
}

function seedAttendanceToday(students){
  const rec={};
  students.forEach(s=>{
    const r=Math.random();
    rec[s.id] = r<0.55 ? 'present' : r<0.63 ? 'late' : r<0.68 ? 'absent' : r<0.70 ? 'leave' : 'unmarked';
  });
  return rec;
}

function seedAttendanceInCharge(teachers){
  const map={};
  let i=0;
  CLASSES.forEach(cls=>{
    SECTIONS.forEach(sec=>{
      map[cls+'-'+sec] = teachers[i % teachers.length].id;
      i++;
    });
  });
  return map;
}

function seedLateComers(students){
  return students.filter((s,i)=>i%6===0).slice(0,6).map(s=>({
    id: uid('LC'),
    studentId:s.id,
    date: todayStr(),
    arrival: `${randInt(8,9)}:${pad(randInt(1,55))} AM`,
    lateMinutes: randInt(6,45),
    reason: rand(['Traffic','Overslept','Transport issue','Not given','Family emergency']),
    teacherRemarks: rand(['Spoke to student','Warned','—']),
    countThisMonth: randInt(1,9),
  }));
}

function seedDailyDiary(teachers, students){
  const workBank = {
    English:['Read Ch.3 and answer Q1–5','Write 10 sentences using new vocabulary','Comprehension worksheet page 12'],
    Urdu:['Qaida sabaq 4 mashq karain','Ibarat likhna safha 8','Naz’m yaad karna'],
    Mathematics:['Exercise 4 — Q1 to Q10','Practice multiplication tables 6–9','Worksheet on fractions'],
    Science:['Draw the water cycle diagram','Read Ch.2 & answer questions','Label the plant cell diagram'],
    Islamiyat:['Learn Surah Al-Fatiha translation','Write 5 lines on Pillars of Islam',''],
    'Social Studies':['Map work — label provinces','Read Ch.1 and summarize',''],
    Computer:['Practice typing exercise','Draw a flowchart for a simple task',''],
  };
  const entries=[];
  const pairs=[];
  CLASSES.slice(2,8).forEach(cls=> SECTIONS.forEach(sec=> pairs.push([cls,sec])));
  pairs.slice(0,8).forEach(([cls,section])=>{
    const subjects = SUBJECTS.filter(()=>Math.random()>0.15).map(subject=>({
      subject, work: rand(workBank[subject]) || 'No work assigned today',
    })).filter(s=>s.work);
    entries.push({ id: uid('DD'), cls, section, date: todayStr(), subjects });
  });
  return entries;
}
function seedWeeklyDiary(teachers, students){
  const workBank = {
    English:['Book report — 1 page, due Friday','Vocabulary project: 20 new words with sentences','Read one storybook chapter each night'],
    Urdu:['Mazmoon likhna: Mera School','Hafta war imla practice'],
    Mathematics:['Workbook Unit 3 — all exercises','Times tables test prep 1–12'],
    Science:['Prepare presentation on solar system','Science fair project — stage 1'],
    Islamiyat:['Memorize Surah Al-Ikhlas with translation',''],
    'Social Studies':['Project: family tree chart','Map work — label all provinces'],
    Computer:['Typing practice 15 mins/day','Research project on internet safety'],
  };
  const entries=[];
  const pairs=[];
  CLASSES.slice(2,8).forEach(cls=> SECTIONS.forEach(sec=> pairs.push([cls,sec])));
  pairs.slice(0,6).forEach(([cls,section])=>{
    const subjects = SUBJECTS.filter(()=>Math.random()>0.35).map(subject=>({
      subject, work: rand(workBank[subject]) || 'No work assigned this week',
    })).filter(s=>s.work);
    entries.push({ id: uid('WD'), cls, section, weekOf: todayStr(), dueDate: fmtDate(new Date(Date.now()+6*86400000)), subjects });
  });
  return entries;
}

function seedMarksFor(students, cls, section, maxMarks){
  const marks={};
  students.filter(s=>s.cls===cls && s.section===section).forEach(s=>{
    marks[s.id] = randInt(Math.round(maxMarks*0.45), maxMarks);
  });
  return marks;
}
function avgOf(marksObj){
  const vals = Object.values(marksObj);
  return vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : 0;
}
function seedTests(students){
  const items=[];
  CLASSES.slice(3,8).forEach(cls=>{
    const section = rand(SECTIONS);
    const marks = students? seedMarksFor(students, cls, section, 20) : {};
    items.push({
      id: uid('DT'), cls, section, subject: rand(SUBJECTS),
      date: fmtDate(new Date(Date.now()-randInt(0,4)*86400000)),
      maxMarks: 20, marks, avgMarks: avgOf(marks) || randInt(11,19),
      status: rand(['graded','graded','pending']),
    });
  });
  return items;
}
function seedWeeklyTests(students){
  const items=[];
  CLASSES.slice(2,8).forEach(cls=>{
    const section = rand(SECTIONS);
    const marks = students? seedMarksFor(students, cls, section, 50) : {};
    items.push({
      id: uid('WT'), cls, section, subject: rand(SUBJECTS),
      weekOf: fmtDate(new Date(Date.now()-randInt(0,6)*86400000)),
      maxMarks: 50, marks, avgMarks: avgOf(marks) || randInt(28,47),
      status: rand(['graded','graded','pending']),
    });
  });
  return items;
}

function seedAdmissionInquiries(){
  const statuses=['New','Follow-up','Visited','Admitted','Not Interested'];
  return Array.from({length:6}).map((_,i)=>({
    id: uid('AI'),
    childName: rand(FIRST_NAMES)+' '+rand(LAST_NAMES),
    parentName: rand(FIRST_NAMES)+' '+rand(LAST_NAMES),
    phone: '0300'+randInt(1000000,9999999),
    classInterested: rand(CLASSES),
    source: rand(['Walk-in','Referral','Facebook','Phone Call','Signboard']),
    status: statuses[i%statuses.length],
    date: fmtDate(new Date(Date.now()-randInt(0,20)*86400000)),
    followUpDate: fmtDate(new Date(Date.now()+randInt(1,10)*86400000)),
    notes: rand(['Interested in morning shift','Wants fee details','Asked about transport','Sibling already enrolled','—']),
  }));
}
function seedExpenses(){
  const cats=['Utility Bills','Stationery','Maintenance','Salaries','Transport Fuel','Miscellaneous'];
  return Array.from({length:4}).map(()=>({
    id: uid('EXP'), date: todayStr(), category: rand(cats), amount: randInt(2,25)*1000, note: rand(['Monthly bill','Routine purchase','Repair work','—']),
  }));
}
function seedTeacherAttendanceToday(teachers){
  const rec={};
  teachers.forEach(t=>{
    const r=Math.random();
    rec[t.id] = t.status==='On Leave' ? 'leave' : (r<0.88?'present': r<0.95?'late':'absent');
  });
  return rec;
}
const FEE_STRUCTURE_FIELDS = [
  ['tuitionFee','Tuition Fee'], ['admissionFee','Admission Fee'], ['registrationFee','Registration Fee'],
  ['computerFee','Computer Fee'], ['labFee','Lab Fee'], ['libraryFee','Library Fee'], ['examFee','Exam Fee'],
  ['transportFee','Transport Fee'], ['hostelFee','Hostel Fee'], ['otherCharges','Other Charges'],
];
function seedFeeStructures(){
  const tuitionScale = {'Reception':10000,'Mont-1':11000,'Mont-2':12000,'1st':13000,'2nd':14000,'3rd':15000,'4th':16000,'5th':17000,'6th':18000,'7th':19000};
  return CLASSES.map((cls,i)=>({
    id: uid('FS'),
    cls,
    tuitionFee: tuitionScale[cls] || 12000,
    admissionFee: 0,
    registrationFee: 0,
    computerFee: i>=3 ? 1000 : 0,
    labFee: i>=5 ? 800 : 0,
    libraryFee: 500,
    examFee: 1000,
    transportFee: 0,
    hostelFee: 0,
    otherCharges: 0,
    discount: 0,
    fine: 0,
    effectiveDate: '2026-07-01',
  }));
}
function feeStructureTotal(fs){
  return FEE_STRUCTURE_FIELDS.reduce((a,[k])=>a+(Number(fs[k])||0), 0) - (Number(fs.discount)||0) + (Number(fs.fine)||0);
}
function defaultFeePlanFor(cls){
  const fs = App.state.feeStructures.find(x=>x.cls===cls);
  return fs ? fs.id : null;
}
function feePlanFor(student){
  return App.state.feeStructures.find(fs=>fs.id===student.feePlanId) || App.state.feeStructures.find(fs=>fs.cls===student.cls) || null;
}
function effectiveMonthlyFee(student){
  const plan = feePlanFor(student);
  if(plan){
    const recurring = (plan.tuitionFee||0)+(plan.computerFee||0)+(plan.labFee||0)+(plan.libraryFee||0)+(plan.examFee||0)+(plan.transportFee||0)+(plan.hostelFee||0)+(plan.otherCharges||0) - (plan.discount||0);
    if(recurring>0) return recurring;
  }
  return student.monthlyFee;
}

function makeChallan(student, monthLabel, dueDate, forcePending){
  const status = forcePending ? 'pending' : student.feeStatus;
  const baseAmount = effectiveMonthlyFee(student);
  return {
    id: uid('FEE'),
    studentId: student.id,
    month: monthLabel,
    amount: baseAmount,
    discount: Math.random()>0.85 ? Math.round(baseAmount*0.1):0,
    fine: status==='pending' && Math.random()>0.6 ? 500:0,
    status,
    dueDate,
    paidDate: status==='paid' ? dueDate.slice(0,8)+pad(randInt(2,9)) : null,
    challanNo: 'CH-'+randInt(10000,99999),
    paidAmount: status==='paid' ? (baseAmount - (Math.random()>0.85?Math.round(baseAmount*0.1):0) + (status==='pending'&&Math.random()>0.6?500:0)) : 0,
    receivedBy: status==='paid' ? 'Admin' : null,
    feeType: 'Monthly Tuition',
    paymentMethod: status==='paid' ? rand(PAYMENT_METHODS) : null,
    receiptNo: status==='paid' ? 'RCT-'+randInt(100000,999999) : null,
    payments: [],
  };
}
function feeTotal(f){ return f.amount - f.discount + f.fine; }
function feeBalance(f){ return Math.max(0, feeTotal(f) - (f.paidAmount||0)); }
function seedFees(students){
  return students.map(s=>{
    const f = makeChallan(s,'July 2026','2026-07-10', false);
    if(f.status==='paid'){ f.paidAmount = feeTotal(f); f.receivedBy = rand(['Admin','Accounts Office','Mr. Kamran Aziz']); }
    return f;
  });
}

function seedNotices(){
  return [
    {id:uid('N'), title:'Summer Break Schedule Announced', date:'2026-07-14', audience:'All', body:'School will remain closed from Aug 1–10 for summer break. Regular classes resume Aug 11.'},
    {id:uid('N'), title:'Parent-Teacher Meeting — Class 5-8', date:'2026-07-10', audience:'Parents', body:'PTM scheduled for Saturday 10 AM to 1 PM in respective classrooms.'},
    {id:uid('N'), title:'Annual Sports Day Registration Open', date:'2026-07-05', audience:'All', body:'Students interested in athletics/sports events can register with their class teacher by July 20.'},
  ];
}

function seedWhatsapp(students){
  const templates=[
    (s)=>({to:s.parentName, phone:s.guardianPhone, type:'Fee Reminder', msg:`Dear parent, ${s.name}'s fee of ${money(s.monthlyFee)} for July is due on 10th July. Please pay at your earliest convenience. – Leads School System`}),
    (s)=>({to:s.parentName, phone:s.guardianPhone, type:'Attendance Alert', msg:`${s.name} was marked absent today (${niceDate(todayStr())}). Please contact the school office if unexpected.`}),
    (s)=>({to:s.parentName, phone:s.guardianPhone, type:'Homework Notification', msg:`New homework assigned for ${s.cls}-${s.section}: due in 2 days. Please check the parent portal.`}),
    (s)=>({to:s.parentName, phone:s.guardianPhone, type:'Late Arrival Alert', msg:`${s.name} arrived late today at school. Repeated lateness may lead to a formal notice.`}),
  ];
  const logs=[];
  students.slice(0,10).forEach(s=>{
    const t=rand(templates)(s);
    logs.push({id:uid('WA'), ...t, time: `${randInt(1,11)}:${pad(randInt(0,59))} ${rand(['AM','PM'])}`, status: rand(['Delivered','Delivered','Delivered','Read','Pending'])});
  });
  return logs;
}

function minToTimeStr(mins){
  mins = ((mins%1440)+1440)%1440;
  let h = Math.floor(mins/60), m = mins%60;
  const ampm = h>=12?'PM':'AM';
  let h12 = h%12; if(h12===0) h12=12;
  return `${h12}:${pad(m)} ${ampm}`;
}
function timeStrTo12h(t){
  const [h,m] = (t||'08:00').split(':').map(Number);
  return minToTimeStr(h*60+m);
}
function getPeriods(){
  const ss = (App.state && App.state.schoolSettings) || {arrivalTime:'08:00', departureTime:'14:00'};
  const [ah,am] = (ss.arrivalTime||'08:00').split(':').map(Number);
  const [dh,dm] = (ss.departureTime||'14:00').split(':').map(Number);
  let startMin = ah*60+(am||0), endMin = dh*60+(dm||0);
  if(endMin<=startMin) endMin = startMin+360;
  const numPeriods = 6, breakAfter = 3, breakLen = 20;
  const totalTeachingMin = (endMin-startMin) - breakLen;
  const periodLen = Math.max(25, Math.floor(totalTeachingMin/numPeriods));
  const periods = [];
  let cursor = startMin;
  for(let i=0;i<numPeriods;i++){
    if(i===breakAfter) cursor += breakLen;
    const s = cursor; cursor += periodLen;
    periods.push(`P${i+1} · ${minToTimeStr(s)}–${minToTimeStr(cursor)}`);
  }
  return periods;
}
const WEEKDAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DATA_VERSION = 3; // bumped when seed data structurally changes (e.g. real roster import, fee structures) so old saved sessions auto-refresh

function seedTimetable(teacher){
  const grid = {};
  WEEKDAYS.forEach(day=>{
    grid[day] = getPeriods().map((p,i)=>{
      if(i===2) return {period:p, free:true};
      return {period:p, cls: rand(teacher.classes), subject: teacher.subject};
    });
  });
  return grid;
}

function seedLessonPlans(teacher){
  const topics = ['Introduction & Recap','Core Concept Explanation','Guided Practice','Group Activity','Worksheet & Assessment','Revision & Q&A'];
  const list=[];
  for(let i=0;i<6;i++){
    const d = new Date(Date.now() + (i-2)*86400000);
    list.push({
      id: uid('LP'), date: fmtDate(d), cls: rand(teacher.classes), subject: teacher.subject,
      topic: rand(topics), objective: 'Students will be able to understand and apply the concept independently.',
      resources: rand(['Textbook Ch.4, whiteboard','Worksheet + projector','Lab kit, group activity sheets','Flashcards, textbook']),
      status: i<3 ? 'completed' : 'planned',
    });
  }
  return list.sort((a,b)=>a.date.localeCompare(b.date));
}

function seedRoboticProjects(){
  return [
    {id:uid('RP'), title:'Line-Follower Robot', cls:'7th-A', members:['Hamza','Zain','Areeba'], status:'In Progress', deadline:fmtDate(new Date(Date.now()+9*86400000)), progress:60},
    {id:uid('RP'), title:'Smart Dustbin (Ultrasonic)', cls:'6th-A', members:['Talha','Noor'], status:'Testing', deadline:fmtDate(new Date(Date.now()+3*86400000)), progress:85},
    {id:uid('RP'), title:'Obstacle-Avoiding Car', cls:'5th-A', members:['Danish','Laiba','Omar'], status:'Idea', deadline:fmtDate(new Date(Date.now()+18*86400000)), progress:15},
    {id:uid('RP'), title:'Robotic Arm — Claw Pickup', cls:'4th-A', members:['Fahad','Hira'], status:'Completed', deadline:fmtDate(new Date(Date.now()-5*86400000)), progress:100},
  ];
}

function seedActivityLog(teacher){
  const weeks = [];
  for(let i=0;i<3;i++){
    const start = new Date(Date.now() - (i+1)*7*86400000);
    weeks.push({
      id: uid('AC'), weekOf: fmtDate(start),
      lessonsCovered: randInt(8,14)+' lessons across '+teacher.classes.join(', '),
      homeworkGiven: randInt(3,6)+' assignments',
      testsConducted: randInt(1,3)+' daily tests',
      studentPerformance: rand(['Above average, most students engaged well','Mixed — a few students need extra support','Strong performance across both sections']),
      activitiesCompleted: rand(['Group project presentations','Worksheet review session','Lab activity + quiz','Peer learning circle']),
      problemsFaced: rand(['None this week','A few students missing textbooks','Projector unavailable on Tuesday','None']),
      requirements: rand(['More worksheets for revision','Extra lab time next week','None']),
      status: i===0 ? 'pending' : 'reviewed',
      principalRemarks: i===0 ? '' : rand(['Good progress, keep it up.','Please share test scores next time.','Well documented, thank you.']),
    });
  }
  return weeks;
}

function seedTeacherMonthlyAttendance(){
  const days=[];
  const now = new Date(2026,6,1); // July 2026
  const totalDays = 17; // up to "today" July 17
  for(let d=1; d<=totalDays; d++){
    const date = new Date(2026,6,d);
    const dow = date.getDay();
    if(dow===0) continue; // Sunday off
    const r = Math.random();
    days.push({date: fmtDate(date), status: r<0.88?'present': r<0.94?'late':'leave'});
  }
  return days;
}


/* ---------------- App State & Storage ---------------- */
const App = {
  state:{
    role:null, userName:null,
    view:'dashboard',
    students:[], teachers:[], attendanceToday:{}, lateComers:[], dailyDiary:[], weeklyDiary:[], tests:[], weeklyTests:[], notebookToday:{}, fees:[], notices:[], whatsapp:[],
    lessonPlans:[], roboticProjects:[], subjectChanges:[], teacherMonthlyAttendance:[], timetable:{}, activityLog:[], attendanceInCharge:{}, feeMonths:['July 2026'], senderNumber:'',
    schoolSettings:{arrivalTime:'08:00', departureTime:'14:00', address:'Zeenat Campus, Karachi, Pakistan'},
    feeStructures:[],
    admissionInquiries:[], expenses:[], teacherAttendanceToday:{},
    loaded:false,
  },

  async init(){
    this.renderRoleGrid();
    this.state.role = ROLES[0].id;
    this.highlightRole();
    try{
      const s = await window.storage.get('lss_students', false).catch(()=>null);
      if(s && s.value){
        const data = JSON.parse(s.value);
        if(data.dataVersion === DATA_VERSION){
          Object.assign(this.state, data);
          this.state.loaded=true;
        }
        // else: older/incompatible session — fall through to a fresh reseed below
      }
    }catch(e){ /* not found, will seed */ }
    if(!this.state.loaded){
      this.seedAll();
    } else {
      // backward-compat patch for sessions saved before newer features were added
      if(!this.state.attendanceInCharge || !Object.keys(this.state.attendanceInCharge).length) this.state.attendanceInCharge = seedAttendanceInCharge(this.state.teachers);
      if(!this.state.timetable || !Object.keys(this.state.timetable).length) this.state.timetable = seedTimetable(this.state.teachers[0]);
      if(!this.state.lessonPlans) this.state.lessonPlans=[];
      if(!this.state.roboticProjects) this.state.roboticProjects=[];
      if(!this.state.activityLog) this.state.activityLog=[];
      if(!this.state.subjectChanges) this.state.subjectChanges=[];
      if(!this.state.teacherMonthlyAttendance) this.state.teacherMonthlyAttendance=seedTeacherMonthlyAttendance();
      if(!this.state.feeMonths || !this.state.feeMonths.length) this.state.feeMonths=['July 2026'];
      if(this.state.senderNumber===undefined) this.state.senderNumber='';
      if(!this.state.schoolSettings) this.state.schoolSettings={arrivalTime:'08:00', departureTime:'14:00', address:'Zeenat Campus, Karachi, Pakistan'};
      if(!this.state.schoolSettings.address) this.state.schoolSettings.address='Zeenat Campus, Karachi, Pakistan';
      if(!this.state.feeStructures) this.state.feeStructures=seedFeeStructures();
      this.state.students.forEach(s=>{ if(!s.feePlanId) s.feePlanId=defaultFeePlanFor(s.cls); });
      if(!this.state.dailyDiary) this.state.dailyDiary = seedDailyDiary(this.state.teachers, this.state.students);
      if(!this.state.weeklyDiary) this.state.weeklyDiary = seedWeeklyDiary(this.state.teachers, this.state.students);
      if(!this.state.weeklyTests) this.state.weeklyTests = seedWeeklyTests(this.state.students);
      if(!this.state.notebookToday) this.state.notebookToday = {};
      if(!this.state.tests || !this.state.tests.length || this.state.tests[0].marks===undefined) this.state.tests = seedTests(this.state.students);
      if(!this.state.admissionInquiries) this.state.admissionInquiries = seedAdmissionInquiries();
      if(!this.state.expenses) this.state.expenses = seedExpenses();
      if(!this.state.teacherAttendanceToday || !Object.keys(this.state.teacherAttendanceToday).length) this.state.teacherAttendanceToday = seedTeacherAttendanceToday(this.state.teachers);
      this.state.teachers.forEach(t=>{ if(!t.password) t.password='demo1234'; if(!t.employeeId) t.employeeId='EMP-'+t.id.slice(-5).toUpperCase(); });
      this.state.fees.forEach(f=>{ if(!f.payments) f.payments=[]; if(f.paidAmount===undefined) f.paidAmount = f.status==='paid' ? (f.amount-f.discount+f.fine) : 0; if(!f.feeType) f.feeType='Monthly Tuition'; });
    }
    document.getElementById('lvStudents').textContent = this.state.students.length;
    document.getElementById('lvTeachers').textContent = this.state.teachers.length;
    document.getElementById('lvClasses').textContent = CLASSES.length*SECTIONS.length;
  },

  seedAll(){
    const students = seedStudents();
    const feeStructures = seedFeeStructures();
    students.forEach(s=>{ const fs = feeStructures.find(x=>x.cls===s.cls); s.feePlanId = fs ? fs.id : null; });
    const teachers = seedTeachers();
    const demoTeacher = teachers[0]; // "you" when logged in as Teacher
    Object.assign(this.state, {
      students, teachers,
      attendanceToday: seedAttendanceToday(students),
      lateComers: seedLateComers(students),
      dailyDiary: seedDailyDiary(teachers, students),
      weeklyDiary: seedWeeklyDiary(teachers, students),
      tests: seedTests(students),
      weeklyTests: seedWeeklyTests(students),
      notebookToday: {},
      fees: seedFees(students),
      notices: seedNotices(),
      whatsapp: seedWhatsapp(students),
      timetable: seedTimetable(demoTeacher),
      lessonPlans: seedLessonPlans(demoTeacher),
      roboticProjects: seedRoboticProjects(),
      activityLog: seedActivityLog(demoTeacher),
      admissionInquiries: seedAdmissionInquiries(),
      expenses: seedExpenses(),
      teacherAttendanceToday: seedTeacherAttendanceToday(teachers),
      subjectChanges: [],
      teacherMonthlyAttendance: seedTeacherMonthlyAttendance(),
      attendanceInCharge: seedAttendanceInCharge(teachers),
      feeMonths: ['July 2026'],
      feeStructures,
      dataVersion: DATA_VERSION,
    });
  },

  async persist(){
    try{
      const {role,userName,view,...data} = this.state;
      await window.storage.set('lss_students', JSON.stringify(data), false);
    }catch(e){ console.warn('storage save failed', e); }
  },

  renderRoleGrid(){
    const g = document.getElementById('roleGrid');
    g.innerHTML = ROLES.map(r=>`<button class="role-btn" data-role="${r.id}" onclick="App.pickRole('${r.id}')"><span class="dot"></span>${r.icon} ${r.label}</button>`).join('');
  },
  pickRole(id){
    this.state.role=id;
    this.highlightRole();
    document.getElementById('loginUser').value = id+'.zeenat';
  },
  highlightRole(){
    document.querySelectorAll('.role-btn').forEach(b=>b.classList.toggle('active', b.dataset.role===this.state.role));
  },

  login(){
    const roleObj = ROLES.find(r=>r.id===this.state.role);
    const uname = document.getElementById('loginUser').value.trim();
    this.state.userName = uname ? uname.split('.')[0].replace(/^\w/,c=>c.toUpperCase()) : roleObj.label;
    document.getElementById('loginScreen').style.display='none';
    document.getElementById('app').classList.add('active');
    document.getElementById('userAvatar').textContent = initials(roleObj.label);
    document.getElementById('topAvatar').textContent = initials(roleObj.label);
    document.getElementById('userName').textContent = this.state.userName;
    document.getElementById('userRole').textContent = roleObj.label;
    this.buildNav();
    this.go('dashboard');
    this.toast('Welcome back, '+this.state.userName+' 👋');
  },
  logout(){
    document.getElementById('loginScreen').style.display='flex';
    document.getElementById('app').classList.remove('active');
  },

  buildNav(){
    const sections = NAV[this.state.role] || NAV.admin;
    const el = document.getElementById('navContainer');
    el.innerHTML = sections.map(s=>`
      <div class="nav-section">
        <div class="nav-label">${s.sec}</div>
        ${s.items.map(([id,ic,label])=>`<button class="nav-item" data-view="${id}" onclick="App.go('${id}')"><span class="ic">${ic}</span>${label}</button>`).join('')}
      </div>`).join('');
  },

  go(view){
    this.state.view=view;
    document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
    this.trail();
    const titles = {
      dashboard:['Dashboard','Overview of today at a glance'],
      students:['Students','Manage admissions & student profiles'],
      teachers:['Teachers','Staff profiles, attendance & activity'],
      attendance:['Attendance','Mark and review daily attendance'],
      latecomers:['Late Comers','Track late arrivals & escalation'],
      homework:['Homework','Assignments across classes'],
      tests:['Daily Tests','Quick tests & performance'],
      exams:['Exams & Results','Marks entry and result cards'],
      fees:['Fee Management','Challans, payments & receipts'],
      whatsapp:['WhatsApp Automation','Simulated message delivery log'],
      birthdays:['Birthdays','Automated birthday wishes'],
      notices:['Notices','School-wide announcements'],
      reports:['Reports','Export & analyze school data'],
      library:['Library','Book issue & return records'],
      timetable:['Time Table','Weekly schedule & subject changes'],
      lessonplanner:['Lesson Planner','Plan topics, objectives & resources'],
      dailydiary:["Daily Diary",'Every subject, one page per day'],
      weeklydiary:['Weekly Diary','Larger assignments due later this week'],
      notebookcheck:['Notebook Check','Mark every student — like attendance'],
      weeklytests:['Weekly Tests','Create weekly tests & enter marks'],
      weeklytestreport:['Weekly Test Report','Performance trend by week'],
      progressreports:['Progress Reports','Weekly & monthly student summaries'],
      roboticproject:['Robotic Project','STEM & robotics club tracker'],
      activitysubmission:['Weekly Activity Submission','Submit your weekly teaching report'],
      myattendance:['My Monthly Attendance','Your attendance record for July'],
      messagecenter:['Send Messages','Absent alerts, fee reminders & broadcasts'],
      schoolsettings:['School Settings','WhatsApp number, arrival & departure time'],
      feestructure:['Fee Structure','Define class-wise fee plans'],
      feeassignment:['Student Fee Assignment','Assign a fee plan to every student'],
      duelist:['Due List','Search, filter & export outstanding fees'],
      studentprofile:['Student Profile','360° view — attendance, tests, fees & more'],
      admissioninquiry:['Admission Inquiry','Prospective students & follow-ups'],
      teacherattendance:['Teacher Attendance','Mark daily staff attendance'],
      smsmanagement:['SMS / WhatsApp Management','Templates, defaulter reminders & delivery log'],
    };
    const [t,sub] = titles[view] || ['Dashboard',''];
    document.getElementById('pageTitle').textContent=t;
    document.getElementById('pagePath').textContent=sub;
    Views[view] ? Views[view]() : Views.dashboard();
    this.refreshBadges();
    window.scrollTo(0,0);
  },

  refreshBadges(){
    const upcoming = this.state.students.filter(s=>daysUntilBirthday(s.dob)<=7).length;
    const bd = document.getElementById('bdayDot');
    if(bd) bd.style.display = upcoming>0 ? 'block' : 'none';
  },

  trail(){
    const t=document.getElementById('trail');
    t.style.width='70%';
    setTimeout(()=>{t.style.width='100%'; setTimeout(()=>{t.style.width='0%';},250);},150);
  },

  toast(msg, icon){
    const wrap=document.getElementById('toastWrap');
    const el=document.createElement('div');
    el.className='toast';
    el.innerHTML = `<span class="tic">${icon||'✓'}</span>${msg}`;
    wrap.appendChild(el);
    setTimeout(()=>{el.style.opacity='0'; el.style.transform='translateX(30px)'; el.style.transition='.3s'; setTimeout(()=>el.remove(),300);},2800);
  },

  openModal(html){
    document.getElementById('modalBox').innerHTML=html;
    document.getElementById('modalOverlay').classList.add('active');
  },
  closeModal(){
    document.getElementById('modalOverlay').classList.remove('active');
  },

  student(id){ return this.state.students.find(s=>s.id===id); },
  teacher(id){ return this.state.teachers.find(s=>s.id===id); },
};
document.getElementById('modalOverlay').addEventListener('click', e=>{ if(e.target.id==='modalOverlay') App.closeModal(); });

/* ---------------- Small SVG helpers ---------------- */
function flameRing(pct, size=66, color='var(--orange-600)'){
  const r=(size-8)/2, c=2*Math.PI*r, off=c*(1-pct/100);
  return `<div class="flame-ring" style="width:${size}px;height:${size}px;">
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--orange-100)" stroke-width="7"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"/>
    </svg>
    <div class="fr-label">${pct}%</div>
  </div>`;
}

/* ================= VIEWS ================= */
const Views = {};

Views.dashboard = function(){
  const st = App.state;
  const total = st.students.length;
  const presentToday = Object.values(st.attendanceToday).filter(v=>v==='present').length;
  const lateToday = Object.values(st.attendanceToday).filter(v=>v==='late').length;
  const absentToday = Object.values(st.attendanceToday).filter(v=>v==='absent').length;
  const attPct = total? Math.round((presentToday/total)*100):0;
  const currentMonth = st.feeMonths[st.feeMonths.length-1];
  const monthFees = st.fees.filter(f=>f.month===currentMonth);
  const collectedThisMonth = monthFees.filter(f=>f.status==='paid').reduce((a,f)=>a+(f.paidAmount||0),0);
  const defaulterFees = monthFees.filter(f=>f.status==='pending');
  const pendingFees = defaulterFees.reduce((a,f)=>a+feeBalance(f),0);
  const defaulterCount = defaulterFees.length;
  const pendingHW = st.weeklyDiary.filter(h=>h.status==='open').length;
  const c = document.getElementById('content');
  const canSeeFees = ['admin','principal','viceprincipal','accountant'].includes(st.role);
  const isTeacher = st.role==='teacher';
  const dt = st.teachers[0];
  const lessonsThisWeek = (st.lessonPlans||[]).length;
  const pendingActivity = (st.activityLog||[]).filter(a=>a.status==='pending').length;

  c.innerHTML = `
  <div class="grid stat-cards" style="margin-bottom:20px;">
    ${isTeacher ? statCard('📋','Lesson Plans', lessonsThisWeek, 'Planned across your classes','flat','') : statCard('📊','Total Students', total, `${CLASSES.length} classes · ${SECTIONS.length} section${SECTIONS.length>1?'s':''}`, 'up','+3 this month')}
    ${isTeacher ? statCard('🗓️','Classes Today', dt?dt.classes.length:0, 'On your timetable today','flat','') : statCard('👨‍🏫','Teachers', st.teachers.length, `${st.teachers.filter(t=>t.status==='Active').length} active`,'flat','stable')}
    ${statCard('📅',"Today's Attendance", attPct+'%', `${presentToday} present · ${absentToday} absent · ${lateToday} late`, attPct>90?'up':'down', attPct+'% present')}
    ${canSeeFees ? statCard('💰','Monthly Fee Collection', money(collectedThisMonth), `${currentMonth} · ${money(pendingFees)} pending`,'up','on track') : isTeacher ? statCard('📤','Activity Submission', pendingActivity>0?'Due':'Up to date', pendingActivity>0?"This week's report pending":'All caught up','flat','') : statCard('📝','Pending Homework', pendingHW, 'Awaiting teacher review','flat','')}
    ${canSeeFees ? statCard('❌','Fee Defaulters', defaulterCount, defaulterCount? money(pendingFees)+' outstanding' : 'No one behind — nice!', defaulterCount?'down':'up', defaulterCount?'needs follow-up':'clear') : ''}
  </div>

  <div class="grid" style="grid-template-columns:repeat(auto-fit, minmax(260px,1fr)); gap:16px; margin-bottom:20px;">
    <div class="card">
      <div class="card-head"><div><div class="section-title">📈 Attendance — last 7 days</div><div class="section-sub" style="margin-bottom:0;">Present vs Absent vs Late</div></div></div>
      <canvas id="attChart" height="90"></canvas>
    </div>
    ${canSeeFees ? `
    <div class="card">
      <div class="card-head"><div class="section-title">📈 Fee Collection</div></div>
      <canvas id="feeChart" height="140"></canvas>
    </div>
    <div class="card">
      <div class="card-head"><div><div class="section-title">📈 Fee Defaulters by Class</div><div class="section-sub" style="margin-bottom:0;">${currentMonth}</div></div></div>
      <canvas id="defaulterChart" height="140"></canvas>
    </div>` : `<div class="card">
      <div class="card-head"><div class="section-title">📈 Homework Status</div></div>
      <canvas id="hwChart" height="140"></canvas>
    </div>`}
  </div>

  <div class="grid two-col">
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">🔔 Notifications</div><div class="section-sub" style="margin-bottom:0;">Things that need your attention today</div></div>
      </div>
      ${notificationsFeed()}
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="card">
        <div class="card-head"><div class="section-title">🎂 Birthdays This Week</div></div>
        ${birthdayMini()}
      </div>
      <div class="card">
        <div class="card-head"><div class="section-title">Quick Stats</div></div>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:13px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--slate)">Pending homework reviews</span><b>${pendingHW}</b></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--slate)">Late arrivals today</span><b>${st.lateComers.filter(l=>l.date===todayStr()).length}</b></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--slate)">Teacher activity pending</span><b>${st.teachers.filter(t=>!t.weeklyActivitySubmitted).length}</b></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--slate)">WhatsApp messages sent</span><b>${st.whatsapp.length}</b></div>
        </div>
      </div>
    </div>
  </div>
  `;

  new Chart(document.getElementById('attChart'), {
    type:'bar',
    data:{ labels:['Mon','Tue','Wed','Thu','Fri','Sat','Today'],
      datasets:[
        {label:'Present', data:[88,91,85,93,89,0,attPct], backgroundColor:'#ea580c', borderRadius:6},
        {label:'Late', data:[6,4,8,3,7,0,Math.round(lateToday/total*100)||0], backgroundColor:'#eab308', borderRadius:6},
        {label:'Absent', data:[6,5,7,4,4,0,Math.round(absentToday/total*100)||0], backgroundColor:'#fed7aa', borderRadius:6},
      ]},
    options:{plugins:{legend:{position:'bottom', labels:{boxWidth:10,font:{size:11}}}}, scales:{x:{grid:{display:false}}, y:{grid:{color:'#f0e4d8'}, ticks:{callback:v=>v+'%'}}}, responsive:true}
  });
  if(canSeeFees){
    new Chart(document.getElementById('feeChart'), {
      type:'doughnut',
      data:{ labels:['Collected','Pending'], datasets:[{data:[collectedThisMonth, pendingFees], backgroundColor:['#ea580c','#ffedd5'], borderWidth:0}]},
      options:{plugins:{legend:{position:'bottom', labels:{boxWidth:10,font:{size:11}}}}, cutout:'68%'}
    });
    const byClass = {};
    defaulterFees.forEach(f=>{ const s=App.student(f.studentId); if(!s) return; byClass[s.cls]=(byClass[s.cls]||0)+1; });
    const classLabels = CLASSES.filter(cl=>byClass[cl]);
    new Chart(document.getElementById('defaulterChart'), {
      type:'bar',
      data:{ labels: classLabels.length?classLabels:['No defaulters'], datasets:[{label:'Defaulters', data: classLabels.length?classLabels.map(cl=>byClass[cl]):[0], backgroundColor:'#dc2626', borderRadius:6}]},
      options:{plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}}, y:{grid:{color:'#f0e4d8'}, ticks:{stepSize:1}}}, responsive:true}
    });
  } else {
    const reviewed = st.weeklyDiary.filter(h=>h.status==='reviewed').length;
    new Chart(document.getElementById('hwChart'), {
      type:'doughnut',
      data:{ labels:['Reviewed','Open'], datasets:[{data:[reviewed, st.weeklyDiary.length-reviewed], backgroundColor:['#ea580c','#ffedd5'], borderWidth:0}]},
      options:{plugins:{legend:{position:'bottom', labels:{boxWidth:10,font:{size:11}}}}, cutout:'68%'}
    });
  }
};

function statCard(icon,label,value,sub,trend,deltaTxt){
  return `<div class="card stat-card">
    <div class="top-row">
      <div><div class="label">${label}</div></div>
      <div class="icon-wrap" style="background:var(--orange-100);">${icon}</div>
    </div>
    <div class="value">${value}</div>
    <div style="font-size:11.5px; color:var(--slate);">${sub}</div>
  </div>`;
}

function notificationsFeed(){
  const st = App.state;
  const role = st.role;
  const canSeeFees = ['admin','principal','viceprincipal','accountant'].includes(role);
  const items = [];

  if(canSeeFees){
    const currentMonth = st.feeMonths[st.feeMonths.length-1];
    const defaulters = st.fees.filter(f=>f.month===currentMonth && f.status==='pending');
    if(defaulters.length) items.push({icon:'❌', text:`${defaulters.length} student${defaulters.length!==1?'s':''} with pending fees this month`, sub: money(defaulters.reduce((a,f)=>a+feeBalance(f),0))+' outstanding', go:'fees'});
  }
  const absentToday = st.students.filter(s=>st.attendanceToday[s.id]==='absent');
  if(absentToday.length) items.push({icon:'🚫', text:`${absentToday.length} student${absentToday.length!==1?'s':''} absent today`, sub:'Tap to review attendance', go:'attendance'});

  const lateToday = st.lateComers.filter(l=>l.date===todayStr());
  if(lateToday.length) items.push({icon:'⏰', text:`${lateToday.length} late arrival${lateToday.length!==1?'s':''} today`, sub:'Check escalation rules', go:'latecomers'});

  const upcomingBdays = st.students.filter(s=>daysUntilBirthday(s.dob)<=7).length;
  if(upcomingBdays) items.push({icon:'🎂', text:`${upcomingBdays} birthday${upcomingBdays!==1?'s':''} coming up in 7 days`, sub:'Send an early wish', go:'birthdays'});

  const unmarkedNotebooks = st.students.filter(s=>!st.notebookToday[s.id]).length;
  if(unmarkedNotebooks && (role==='teacher'||canSeeFees)) items.push({icon:'📓', text:`${unmarkedNotebooks} notebook${unmarkedNotebooks!==1?'s':''} still need checking today`, sub:'Notebook Check', go:'notebookcheck'});

  const pendingHW = st.weeklyDiary.filter(h=>h.status==='open').length;
  if(pendingHW) items.push({icon:'📝', text:`${pendingHW} weekly diary item${pendingHW!==1?'s':''} awaiting review`, sub:'Weekly Diary', go:'weeklydiary'});

  const staffPending = st.teachers.filter(t=>!t.weeklyActivitySubmitted).length;
  if(staffPending && canSeeFees) items.push({icon:'📤', text:`${staffPending} teacher${staffPending!==1?'s':''} haven't submitted weekly activity`, sub:'Follow up', go:'teachers'});

  (st.notices||[]).slice(0,2).forEach(n=>{ items.push({icon:'🔔', text:n.title, sub:niceDate(n.date), go:'notices'}); });

  if(!items.length) return `<div class="empty-state" style="padding:24px;"><div class="em-ic">✅</div><h3>All clear</h3><p>Nothing needs your attention right now.</p></div>`;

  return `<div style="display:flex; flex-direction:column; gap:2px;">
    ${items.slice(0,7).map(n=>`
      <div style="display:flex; gap:12px; padding:10px 4px; border-bottom:1px solid var(--line); cursor:pointer;" onclick="App.go('${n.go}')">
        <div style="width:32px;height:32px;border-radius:9px;background:var(--orange-50); display:flex;align-items:center;justify-content:center; flex-shrink:0;">${n.icon}</div>
        <div><div style="font-size:13px; font-weight:600;">${n.text}</div><div style="font-size:11.5px; color:var(--slate);">${n.sub}</div></div>
      </div>`).join('')}
  </div>`;
}

function daysUntilBirthday(dob){
  const parts = (dob||'2018-01-01').split('-').map(Number);
  const m = parts[1], d = parts[2];
  const today = new Date(); today.setHours(0,0,0,0);
  let next = new Date(today.getFullYear(), (m||1)-1, d||1);
  next.setHours(0,0,0,0);
  if(next < today) next = new Date(today.getFullYear()+1, (m||1)-1, d||1);
  return Math.round((next-today)/86400000);
}
function birthdayMini(){
  const upcoming = App.state.students
    .map(s=>({s, days: daysUntilBirthday(s.dob)}))
    .filter(x=>x.days<=7)
    .sort((a,b)=>a.days-b.days)
    .slice(0,4);
  if(!upcoming.length) return `<div class="empty-state" style="padding:20px;"><div class="em-ic">🎈</div><p>No birthdays in the next 7 days</p></div>`;
  return upcoming.map(({s,days})=>`
    <div style="display:flex; align-items:center; gap:10px; padding:8px 2px; border-bottom:1px solid var(--line);">
      <div class="avatar" style="background:var(--gold);">${initials(s.name)}</div>
      <div style="flex:1;"><div style="font-size:13px; font-weight:600;">${s.name}</div><div style="font-size:11.5px; color:var(--slate);">${s.cls}-${s.section} · ${days===0?'🎉 Today!':days===1?'Tomorrow':'in '+days+' days'}</div></div>
      <button class="btn btn-sm btn-outline" onclick="sendBirthdayWish('${s.id}')">${days===0?'Send wish':'Remind parent'}</button>
    </div>`).join('');
}
function sendBirthdayWish(id){
  const s = App.student(id);
  const days = daysUntilBirthday(s.dob);
  const msg = days===0
    ? `🎉 Happy Birthday ${s.name}! Wishing you a wonderful year ahead from all of us at Leads School System.`
    : `🎂 Reminder: ${s.name}'s birthday is coming up on ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Number(s.dob.split('-')[1])-1]} ${Number(s.dob.split('-')[2])} (in ${days} day${days!==1?'s':''}). We're looking forward to celebrating with ${s.name.split(' ')[0]}!`;
  const type = days===0?'Birthday Wish':'Birthday Reminder';
  if(!openWhatsAppDirect(s.guardianPhone, msg, type, s.parentName)) return;
  App.toast((days===0?'Opening WhatsApp to wish ':'Opening WhatsApp to remind ')+s.parentName,'🎂');
}

/* ---------- Students ---------- */
Views.students = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
    <div class="card">
      <div class="card-head">
        <div>
          <div class="section-title">All Students (${st.students.length})</div>
          <div class="section-sub" style="margin-bottom:0;">Admissions, profiles & records</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-outline" onclick="openImportCSV('students')">⬆ Import CSV</button>
          <button class="btn btn-sm btn-orange" onclick="openAddStudent()">+ New Admission</button>
        </div>
      </div>
      <div class="searchbar"><span>🔍</span><input id="studSearch" placeholder="Search by name, roll no, admission no..." oninput="Views.students()"></div>
      <div class="tag-input-row" id="classFilterRow"></div>
      <div style="overflow-x:auto;">
      <table>
        <thead><tr><th>Student</th><th>Class</th><th>Roll No</th><th>Guardian</th><th>Fee Status</th><th>Blood Grp</th><th></th></tr></thead>
        <tbody id="studentRows"></tbody>
      </table>
      </div>
    </div>
  `;
  const filterRow = document.getElementById('classFilterRow');
  const activeFilter = App._classFilter || 'All';
  filterRow.innerHTML = ['All',...CLASSES].map(cl=>`<button class="chip ${cl===activeFilter?'active':''}" onclick="App._classFilter='${cl}'; Views.students();">${cl}</button>`).join('');

  const q = (document.getElementById('studSearch')?.value||'').toLowerCase();
  let list = st.students.filter(s=>
    (activeFilter==='All' || s.cls===activeFilter) &&
    (!q || s.name.toLowerCase().includes(q) || String(s.roll).includes(q) || s.admissionNo.toLowerCase().includes(q))
  );
  document.getElementById('studentRows').innerHTML = list.length ? list.map(s=>`
    <tr class="hoverable">
      <td><div style="display:flex; align-items:center; gap:10px;"><div class="avatar" style="background:var(--orange-500); width:30px;height:30px;font-size:11px;">${initials(s.name)}</div><div><div style="font-weight:600;">${s.name}</div><div style="font-size:11px;color:var(--slate);">${s.admissionNo}</div></div></div></td>
      <td>${s.cls}-${s.section}</td>
      <td style="font-family:var(--font-mono);">${s.roll}</td>
      <td>${s.parentName}<br><span style="font-size:11px;color:var(--slate);">${s.guardianPhone}</span></td>
      <td>${pill(s.feeStatus==='paid'?'green':'red', s.feeStatus==='paid'?'Paid':'Pending')}</td>
      <td>${s.bloodGroup}</td>
      <td><button class="btn btn-sm btn-outline" onclick="viewStudent('${s.id}')">View</button> <button class="btn btn-sm btn-outline" onclick="App._profileStudentId='${s.id}'; App.go('studentprofile');">📋 Profile</button></td>
    </tr>`).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">🔍</div><h3>No students found</h3><p>Try a different search or filter</p></div></td></tr>`;
};

function pill(color,text){return `<span class="pill ${color}">${text}</span>`;}

function viewStudent(id){
  const s = App.student(id);
  App.openModal(`
    <div class="modal-head"><h3>Student Profile</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div style="display:flex; gap:16px; align-items:center; margin-bottom:18px;">
        <div class="avatar" style="width:56px;height:56px;font-size:18px; background:var(--orange-500);">${initials(s.name)}</div>
        <div><div style="font-weight:700; font-size:17px;">${s.name}</div><div style="color:var(--slate); font-size:13px;">${s.cls}-${s.section} · Roll #${s.roll} · ${s.admissionNo}</div></div>
      </div>
      <div class="form-grid" style="font-size:13px;">
        ${infoRow('Gender', s.gender)} ${infoRow('Date of Birth', s.dob)}
        ${infoRow('Blood Group', s.bloodGroup)} ${infoRow('Medical', s.medical)}
        ${infoRow('Parent/Guardian', s.parentName)} ${infoRow('Phone', s.guardianPhone)}
        ${infoRow('Address', s.address, true)}
        ${infoRow('Monthly Fee', money(s.monthlyFee))} ${infoRow('Fee Status', s.feeStatus==='paid'?'Paid':'Pending')}
      </div>
      <div style="margin-top:16px; padding:14px; background:var(--orange-50); border-radius:10px; display:flex; align-items:center; justify-content:space-between;">
        <div style="font-size:12.5px;"><b>Digital ID Card</b><br><span style="color:var(--slate);">QR-linked identity for gate & library</span></div>
        <div style="width:44px;height:44px;background:repeating-linear-gradient(45deg,#1c1917,#1c1917 3px,#fff 3px,#fff 6px); border-radius:6px;"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button>
      <button class="btn btn-sm btn-outline" onclick="App.closeModal(); App._profileStudentId='${s.id}'; App.go('studentprofile');">📋 Full Profile</button>
      <button class="btn btn-sm btn-orange" onclick="App.toast('ID card sent to printer 🖨️')">Print ID Card</button>
    </div>
  `);
}
function infoRow(label,val,full){return `<div class="${full?'full':''}"><div style="color:var(--slate); font-size:11px; text-transform:uppercase; letter-spacing:.04em; margin-bottom:2px;">${label}</div><div style="font-weight:600;">${val}</div></div>`;}

/* ---------- Student Profile (360 view) ---------- */
Views.studentprofile = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const id = App._profileStudentId || (st.students[0] && st.students[0].id);
  const s = App.student(id);
  if(!s){ c.innerHTML = `<div class="empty-state"><div class="em-ic">🎒</div><h3>No student selected</h3><p>Open a student from the Students list.</p></div>`; return; }

  const attStatus = st.attendanceToday[s.id] || 'unmarked';
  const lateRecords = st.lateComers.filter(l=>l.studentId===s.id);
  const dailyTestScores = st.tests.filter(t=>t.cls===s.cls && t.section===s.section && t.marks && t.marks[s.id]!==undefined)
    .map(t=>({subject:t.subject, score:t.marks[s.id], max:t.maxMarks, date:t.date}));
  const weeklyTestScores = st.weeklyTests.filter(t=>t.cls===s.cls && t.section===s.section && t.marks && t.marks[s.id]!==undefined)
    .map(t=>({subject:t.subject, score:t.marks[s.id], max:t.maxMarks, date:t.weekOf}));
  const studentFees = st.fees.filter(f=>f.studentId===s.id);
  const pendingFees = studentFees.filter(f=>f.status==='pending');
  const examPct = randSeeded(s.id);

  c.innerHTML = `
  <div class="card" style="margin-bottom:16px; display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
    <div class="avatar" style="width:60px;height:60px;font-size:20px; background:var(--orange-500);">${initials(s.name)}</div>
    <div style="flex:1; min-width:200px;">
      <div style="font-weight:800; font-size:18px; font-family:var(--font-display);">${s.name}</div>
      <div style="color:var(--slate); font-size:13px;">${s.cls}-${s.section} · Roll #${s.roll} · ${s.admissionNo} · ${s.gender}</div>
    </div>
    <div style="display:flex; gap:8px;">
      ${waButton(s.guardianPhone, `Dear ${s.parentName}, this is a quick update from Leads School System regarding ${s.name}.`, 'Message Parent')}
      <button class="btn btn-sm btn-outline" onclick="App.toast('ID card sent to printer 🖨️')">Print ID Card</button>
    </div>
  </div>

  <div class="grid stat-cards" style="margin-bottom:16px;">
    ${statCard('✅',"Today's Attendance", attStatus==='unmarked'?'Not marked':attStatus.charAt(0).toUpperCase()+attStatus.slice(1), 'Class attendance status','flat','')}
    ${statCard('⏰','Late Arrivals', lateRecords.length, 'Logged this term','flat','')}
    ${statCard('🏆','Term Exam', examPct+'%', 'Grade '+gradeOf(examPct),'flat','')}
    ${statCard('💰','Fee Status', pendingFees.length?'Pending':'Paid', pendingFees.length? pendingFees.length+' month(s) due':'All caught up','flat','')}
  </div>

  <div class="grid two-col" style="margin-bottom:16px;">
    <div class="card">
      <div class="section-title" style="margin-bottom:10px;">👤 Personal & Guardian Info</div>
      <div class="form-grid" style="font-size:13px;">
        ${infoRow('Date of Birth', s.dob)} ${infoRow('Blood Group', s.bloodGroup)}
        ${infoRow('Medical Notes', s.medical)} ${infoRow('Fee Type', money(s.monthlyFee)+'/mo')}
        ${infoRow('Parent/Guardian', s.parentName)} ${infoRow('Guardian Phone', s.guardianPhone)}
        ${infoRow('Address', s.address, true)}
      </div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px;">⏰ Late Arrival History</div>
      ${lateRecords.length ? `<table><thead><tr><th>Date</th><th>Arrival</th><th>Late By</th><th>Reason</th></tr></thead><tbody>
        ${lateRecords.map(l=>`<tr><td>${niceDate(l.date)}</td><td>${l.arrival}</td><td>${pill('red',l.lateMinutes+' min')}</td><td style="font-size:12px;">${l.reason}</td></tr>`).join('')}
      </tbody></table>` : `<div class="empty-state" style="padding:20px;"><div class="em-ic">✅</div><p>No late arrivals on record</p></div>`}
    </div>
  </div>

  <div class="grid two-col" style="margin-bottom:16px;">
    <div class="card">
      <div class="section-title" style="margin-bottom:10px;">🧪 Test Scores</div>
      <div style="font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; margin-bottom:6px;">Daily Tests</div>
      ${dailyTestScores.length ? dailyTestScores.map(t=>`<div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid var(--line); font-size:12.5px;"><span>${t.subject} · ${niceDate(t.date)}</span><b>${t.score}/${t.max}</b></div>`).join('') : `<div style="font-size:12px; color:var(--slate-light); margin-bottom:10px;">No daily test scores yet</div>`}
      <div style="font-size:11.5px; font-weight:700; color:var(--slate); text-transform:uppercase; margin:10px 0 6px;">Weekly Tests</div>
      ${weeklyTestScores.length ? weeklyTestScores.map(t=>`<div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid var(--line); font-size:12.5px;"><span>${t.subject} · ${niceDate(t.date)}</span><b>${t.score}/${t.max}</b></div>`).join('') : `<div style="font-size:12px; color:var(--slate-light);">No weekly test scores yet</div>`}
    </div>
    <div>${resultCard(s)}</div>
  </div>

  <div class="card">
    <div class="card-head">
      <div><div class="section-title" style="margin-bottom:0;">💰 Fee History</div><div class="section-sub">Monthly Fee: <b style="color:var(--ink);">${money(s.monthlyFee)}</b></div></div>
      <button class="btn btn-sm btn-outline" onclick="openSetMonthlyFee('${s.id}')">💵 Edit Monthly Fee</button>
    </div>
    <table>
      <thead><tr><th>Month</th><th>Amount</th><th>Balance</th><th>Status</th><th></th></tr></thead>
      <tbody>
      ${studentFees.length ? studentFees.map(f=>`
        <tr class="hoverable">
          <td>${f.month}</td><td>${money(feeTotal(f))}</td><td>${money(feeBalance(f))}</td>
          <td>${f.status==='paid'?pill('green','Paid'):pill('red','Pending')}</td>
          <td><button class="btn btn-sm btn-outline" onclick="viewChallan('${f.id}')">📄 Challan</button>${f.status==='paid'?` <button class="btn btn-sm btn-outline" onclick="viewReceipt('${f.id}')">🧾 Receipt</button>`:''}</td>
        </tr>`).join('') : `<tr><td colspan="5"><div class="empty-state"><div class="em-ic">💰</div><p>No fee records yet</p></div></td></tr>`}
      </tbody>
    </table>
  </div>
  `;
};


function openAddStudent(){
  App.openModal(`
    <div class="modal-head"><h3>New Admission</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field full"><label>Student Name</label><input id="nsName" placeholder="Full name"></div>
        <div class="field"><label>Class</label><select id="nsClass">${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Section</label><select id="nsSection">${SECTIONS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Gender</label><select id="nsGender"><option>Male</option><option>Female</option></select></div>
        <div class="field"><label>Date of Birth</label><input id="nsDob" type="date" value="2018-01-01"></div>
        <div class="field"><label>Blood Group</label><select id="nsBlood">${['O+','A+','B+','AB+','O-','A-'].map(b=>`<option>${b}</option>`).join('')}</select></div>
        <div class="field full"><label>Parent / Guardian Name</label><input id="nsParent" placeholder="Guardian name"></div>
        <div class="field"><label>Guardian Phone</label><input id="nsPhone" placeholder="03xx-xxxxxxx"></div>
        <div class="field"><label>Monthly Fee (PKR)</label><input id="nsFee" type="number" placeholder="15000"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitNewStudent()">Save Admission</button>
    </div>
  `);
}
function submitNewStudent(){
  const name = document.getElementById('nsName').value.trim();
  if(!name){ App.toast('Please enter a student name','⚠️'); return; }
  const cls = document.getElementById('nsClass').value, section=document.getElementById('nsSection').value;
  const siblings = App.state.students.filter(s=>s.cls===cls && s.section===section);
  const student = {
    id: uid('STU'), name, cls, section, roll: siblings.length+1,
    admissionNo: 'LSS-'+(2400+App.state.students.length+1),
    gender: document.getElementById('nsGender').value,
    bloodGroup: document.getElementById('nsBlood').value,
    dob: document.getElementById('nsDob').value || '2018-01-01',
    parentName: document.getElementById('nsParent').value || 'N/A',
    guardianPhone: document.getElementById('nsPhone').value || 'N/A',
    address:'—', medical:'None',
    feeStatus:'pending',
    monthlyFee: Number(document.getElementById('nsFee').value)||15000,
  };
  App.state.students.push(student);
  App.state.attendanceToday[student.id]='present';
  App.state.fees.push({id:uid('FEE'), studentId:student.id, month:'July 2026', amount:student.monthlyFee, discount:0, fine:0, status:'pending', dueDate:'2026-07-10', paidDate:null, challanNo:'CH-'+randInt(10000,99999)});
  App.state.whatsapp.unshift({id:uid('WA'), to:student.parentName, phone:student.guardianPhone, type:'Admission Confirmation', msg:`Dear ${student.parentName}, ${student.name}'s admission to ${cls}-${section} at Leads School System is confirmed. Welcome to our campus!`, time:'Just now', status:'Delivered'});
  App.persist();
  App.closeModal();
  App.toast('Admission saved & WhatsApp confirmation sent ✅');
  Views.students();
}

/* ---------- Teachers ---------- */
Views.teachers = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">All Teachers (${st.teachers.length})</div><div class="section-sub" style="margin-bottom:0;">Profiles, activity & performance</div></div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-outline" onclick="openImportCSV('teachers')">⬆ Import CSV</button>
          <button class="btn btn-sm btn-orange" onclick="openAddTeacher()">+ Add Teacher</button>
        </div>
      </div>
      <div style="overflow-x:auto;">
      <table>
        <thead><tr><th>Teacher</th><th>Subject</th><th>Classes</th><th>Experience</th><th>Weekly Activity</th><th>Status</th><th></th></tr></thead>
        <tbody>
        ${st.teachers.map(t=>`
          <tr class="hoverable">
            <td><div style="display:flex; align-items:center; gap:10px;"><div class="avatar" style="background:var(--orange-500); width:30px;height:30px;font-size:11px;">${initials(t.name)}</div><div><div style="font-weight:600;">${t.name}</div><div style="font-size:11px;color:var(--slate);">${t.qualification}</div></div></div></td>
            <td>${t.subject}</td>
            <td style="font-size:12px;">${t.classes.join(', ')}</td>
            <td>${t.experience}</td>
            <td>${t.weeklyActivitySubmitted? pill('green','Submitted') : pill('yellow','Pending')}</td>
            <td>${t.status==='Active'? pill('green','Active') : pill('gray','On Leave')}</td>
            <td><button class="btn btn-sm btn-outline" onclick="App.toast('Opening ${t.name.split(' ')[0]}\\'s full profile')">View</button> ${App.state.role==='admin' ? `<button class="btn btn-sm btn-outline" onclick="openChangeTeacherPassword('${t.id}')">🔑 Password</button>` : ''}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>
  `;
};
function openAddTeacher(){
  App.openModal(`
    <div class="modal-head"><h3>Add Teacher</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field full"><label>Teacher Name</label><input id="ntName" placeholder="e.g. Mrs. Ayesha Farooq"></div>
        <div class="field"><label>Subject</label><select id="ntSubject">${SUBJECTS.map(s=>`<option>${s}</option>`).join('')}</select></div>
        <div class="field"><label>Qualification</label><input id="ntQual" placeholder="e.g. M.Ed"></div>
        <div class="field"><label>Classes (comma separated)</label><input id="ntClasses" placeholder="e.g. Class 5 A, Class 6 B"></div>
        <div class="field"><label>Experience</label><input id="ntExp" placeholder="e.g. 4 yrs"></div>
        <div class="field"><label>Phone</label><input id="ntPhone" placeholder="03xx-xxxxxxx"></div>
        <div class="field"><label>Salary (PKR)</label><input id="ntSalary" type="number" placeholder="55000"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitNewTeacher()">Save Teacher</button>
    </div>`);
}
function submitNewTeacher(){
  const name = document.getElementById('ntName').value.trim();
  if(!name){ App.toast('Please enter a teacher name','⚠️'); return; }
  const classes = document.getElementById('ntClasses').value.split(',').map(s=>s.trim()).filter(Boolean);
  App.state.teachers.push({
    id: uid('TCH'), name, subject: document.getElementById('ntSubject').value,
    classes: classes.length?classes:['Unassigned'],
    qualification: document.getElementById('ntQual').value.trim()||'—',
    experience: document.getElementById('ntExp').value.trim()||'—',
    phone: document.getElementById('ntPhone').value.trim()||'—',
    salary: Number(document.getElementById('ntSalary').value)||0,
    status:'Active', weeklyActivitySubmitted:false,
    password:'demo1234', employeeId:'EMP-'+(1000+App.state.teachers.length),
  });
  App.persist();
  App.closeModal();
  App.toast('Teacher added ✅');
  Views.teachers();
}
function openChangeTeacherPassword(id){
  if(App.state.role!=='admin'){ App.toast('Only Super Admin can change teacher passwords','🔒'); return; }
  const t = App.teacher(id);
  App.openModal(`
    <div class="modal-head"><h3>Change Password — ${t.name}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="field"><label>Employee ID</label><input value="${t.employeeId}" disabled style="background:var(--orange-50);"></div>
      <div class="field"><label>New Password</label><input id="tpNewPass" type="text" placeholder="Enter new password" value="${t.password||''}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitChangeTeacherPassword('${id}')">Save Password</button>
    </div>`);
}
function submitChangeTeacherPassword(id){
  const t = App.teacher(id);
  const newPass = document.getElementById('tpNewPass').value.trim();
  if(!newPass){ App.toast('Enter a password','⚠️'); return; }
  t.password = newPass;
  App.persist();
  App.closeModal();
  App.toast(`Password updated for ${t.name} 🔑`);
}

/* ---------- Admission Inquiry ---------- */
Views.admissioninquiry = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Admission Inquiries (${st.admissionInquiries.length})</div><div class="section-sub" style="margin-bottom:0;">Prospective families before formal admission</div></div>
      <button class="btn btn-sm btn-orange" onclick="openAddInquiry()">+ New Inquiry</button>
    </div>
    <table>
      <thead><tr><th>Child</th><th>Parent</th><th>Class Interested</th><th>Source</th><th>Status</th><th>Follow-up</th><th></th></tr></thead>
      <tbody>
      ${st.admissionInquiries.map(inq=>`
        <tr class="hoverable">
          <td>${inq.childName}</td>
          <td>${inq.parentName}<br><span style="font-size:11px; color:var(--slate);">${inq.phone}</span></td>
          <td>${inq.classInterested}</td>
          <td>${pill('gray', inq.source)}</td>
          <td>${pill(inq.status==='Admitted'?'green':inq.status==='Not Interested'?'red':inq.status==='Visited'?'blue':'yellow', inq.status)}</td>
          <td>${niceDate(inq.followUpDate)}</td>
          <td style="white-space:nowrap;">
            ${waButton(inq.phone, `Dear ${inq.parentName}, thank you for your interest in Leads School System for ${inq.childName}. We'd love to schedule a campus visit — please let us know a convenient time.`, 'Text')}
            <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="convertInquiryToAdmission('${inq.id}')">🎓 Convert</button>
          </td>
        </tr>`).join('')}
      ${!st.admissionInquiries.length ? `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">📞</div><p>No inquiries logged yet</p></div></td></tr>` : ''}
      </tbody>
    </table>
  </div>`;
};
function openAddInquiry(){
  App.openModal(`
    <div class="modal-head"><h3>New Admission Inquiry</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Child's Name</label><input id="aiChild" placeholder="Full name"></div>
        <div class="field"><label>Parent's Name</label><input id="aiParent" placeholder="Full name"></div>
        <div class="field"><label>Phone</label><input id="aiPhone" placeholder="03xx-xxxxxxx"></div>
        <div class="field"><label>Class Interested</label><select id="aiClass">${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Source</label><select id="aiSource"><option>Walk-in</option><option>Referral</option><option>Facebook</option><option>Phone Call</option><option>Signboard</option></select></div>
        <div class="field"><label>Follow-up Date</label><input id="aiFollowup" type="date" value="${fmtDate(new Date(Date.now()+3*86400000))}"></div>
        <div class="field full"><label>Notes</label><input id="aiNotes" placeholder="Anything worth remembering"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitInquiry()">Save Inquiry</button>
    </div>`);
}
function submitInquiry(){
  const childName = document.getElementById('aiChild').value.trim();
  if(!childName){ App.toast("Enter the child's name",'⚠️'); return; }
  App.state.admissionInquiries.unshift({
    id: uid('AI'), childName, parentName: document.getElementById('aiParent').value.trim()||'—',
    phone: document.getElementById('aiPhone').value.trim()||'—',
    classInterested: document.getElementById('aiClass').value, source: document.getElementById('aiSource').value,
    status:'New', date: todayStr(), followUpDate: document.getElementById('aiFollowup').value,
    notes: document.getElementById('aiNotes').value.trim()||'—',
  });
  App.persist();
  App.closeModal();
  App.toast('Inquiry logged ✅');
  Views.admissioninquiry();
}
function convertInquiryToAdmission(id){
  const inq = App.state.admissionInquiries.find(x=>x.id===id);
  if(!inq) return;
  inq.status='Admitted';
  App.persist();
  App.toast(inq.childName+' marked Admitted — opening New Admission form 🎓');
  setTimeout(()=>{
    openAddStudent();
    setTimeout(()=>{
      const nameEl=document.getElementById('nsName'), parentEl=document.getElementById('nsParent'), phoneEl=document.getElementById('nsPhone'), clsEl=document.getElementById('nsClass');
      if(nameEl) nameEl.value = inq.childName;
      if(parentEl) parentEl.value = inq.parentName;
      if(phoneEl) phoneEl.value = inq.phone;
      if(clsEl) clsEl.value = inq.classInterested;
    }, 50);
  }, 300);
}


/* ---------- CSV Import (Students & Teachers) ---------- */
const CSV_TEMPLATES = {
  students: {
    headers: ['name','cls','section','gender','dob','bloodGroup','parentName','guardianPhone','monthlyFee'],
    sample: [
      ['Ali Raza','Class 4','A','Male','2016-03-12','O+','Kamran Raza','03001234567','18000'],
      ['Sara Khan','Class 4','A','Female','2016-07-25','A+','Nadia Khan','03007654321','18000'],
    ],
  },
  teachers: {
    headers: ['name','subject','classes','qualification','experience','phone','salary'],
    sample: [
      ['Ms. Hina Tariq','English','Class 3 A;Class 3 B','B.Ed','3 yrs','03211234567','45000'],
    ],
  },
};
function openImportCSV(kind){
  const tpl = CSV_TEMPLATES[kind];
  App._csvKind = kind;
  App.openModal(`
    <div class="modal-head"><h3>Import ${kind==='students'?'Students':'Teachers'} via CSV</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div style="font-size:12.5px; color:var(--slate); margin-bottom:12px;">
        CSV should have a header row with these columns:<br>
        <code style="font-family:var(--font-mono); font-size:11px; background:var(--orange-50); padding:2px 6px; border-radius:5px;">${tpl.headers.join(', ')}</code>
        ${kind==='teachers' ? '<br><span style="font-size:11px;">Separate multiple classes with a semicolon, e.g. "Class 5 A;Class 6 B"</span>' : ''}
      </div>
      <button class="btn btn-sm btn-outline" style="margin-bottom:14px;" onclick="downloadSampleCSV('${kind}')">⬇ Download Sample CSV</button>
      <div style="border:2px dashed var(--line); border-radius:10px; padding:20px; text-align:center;">
        <div style="font-size:26px; margin-bottom:8px;">📄</div>
        <input type="file" id="csvFileInput" accept=".csv" style="font-size:12.5px;">
      </div>
      <div id="csvPreview" style="margin-top:14px; font-size:12.5px; color:var(--slate);"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="processCSVImport()">Import</button>
    </div>`);
  document.getElementById('csvFileInput').addEventListener('change', handleCSVFileSelect);
}
function downloadSampleCSV(kind){
  const tpl = CSV_TEMPLATES[kind];
  const rows = [tpl.headers, ...tpl.sample];
  const csv = rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  try{
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = kind+'-sample.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    App.toast('Sample CSV downloaded ⬇');
  }catch(e){ App.toast('Could not download — copy the column names shown above','⚠️'); }
}
function handleCSVFileSelect(e){
  const file = e.target.files[0];
  if(!file) return;
  Papa.parse(file, {
    header:true, skipEmptyLines:true,
    complete: (res)=>{
      App._csvParsed = res.data;
      document.getElementById('csvPreview').innerHTML = `<b>${res.data.length} row(s)</b> ready to import. First row: <code style="font-family:var(--font-mono); font-size:11px;">${JSON.stringify(res.data[0]||{})}</code>`;
    },
    error: ()=>{ App.toast('Could not read that CSV file','⚠️'); }
  });
}
function processCSVImport(){
  const kind = App._csvKind;
  const rows = App._csvParsed;
  if(!rows || !rows.length){ App.toast('Choose a CSV file first','⚠️'); return; }
  let count = 0;
  if(kind==='students'){
    rows.forEach(r=>{
      const name = (r.name||'').trim();
      if(!name) return;
      const cls = (r.cls||CLASSES[0]).trim();
      const section = (r.section||'A').trim();
      const siblings = App.state.students.filter(s=>s.cls===cls && s.section===section);
      const student = {
        id: uid('STU'), name, cls, section, roll: siblings.length+1,
        admissionNo: 'LSS-'+(2400+App.state.students.length+1),
        gender: (r.gender||'Male').trim(),
        bloodGroup: (r.bloodGroup||'O+').trim(),
        dob: (r.dob||'2018-01-01').trim(),
        parentName: (r.parentName||'N/A').trim(),
        guardianPhone: (r.guardianPhone||'N/A').trim(),
        address:'—', medical:'None', feeStatus:'pending',
        monthlyFee: Number(r.monthlyFee)||15000,
      };
      App.state.students.push(student);
      App.state.attendanceToday[student.id]='unmarked';
      const currentMonth = App.state.feeMonths[App.state.feeMonths.length-1];
      App.state.fees.push(makeChallan(student, currentMonth, '2026-07-10', true));
      count++;
    });
    App.toast(`Imported ${count} student${count!==1?'s':''} from CSV ✅`);
    App.persist();
    App.closeModal();
    Views.students();
  } else {
    rows.forEach(r=>{
      const name = (r.name||'').trim();
      if(!name) return;
      const classes = (r.classes||'').split(';').map(s=>s.trim()).filter(Boolean);
      App.state.teachers.push({
        id: uid('TCH'), name,
        subject: (r.subject||SUBJECTS[0]).trim(),
        classes: classes.length?classes:['Unassigned'],
        qualification: (r.qualification||'—').trim(),
        experience: (r.experience||'—').trim(),
        phone: (r.phone||'—').trim(),
        salary: Number(r.salary)||0,
        status:'Active', weeklyActivitySubmitted:false,
      });
      count++;
    });
    App.toast(`Imported ${count} teacher${count!==1?'s':''} from CSV ✅`);
    App.persist();
    App.closeModal();
    Views.teachers();
  }
}

/* ---------- Attendance ---------- */
Views.attendance = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const cls = App._attClass || CLASSES[2];
  const sec = App._attSection || 'A';
  const students = st.students.filter(s=>s.cls===cls && s.section===sec);
  const present = students.filter(s=>st.attendanceToday[s.id]==='present').length;
  const unmarkedCount = students.filter(s=>!st.attendanceToday[s.id] || st.attendanceToday[s.id]==='unmarked').length;
  const pct = students.length? Math.round(present/students.length*100):0;
  const inChargeId = st.attendanceInCharge[cls+'-'+sec];
  const inCharge = App.teacher(inChargeId);
  const canReassign = ['admin','principal','viceprincipal'].includes(st.role);

  c.innerHTML = `
  <div class="grid two-col">
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">Mark Attendance — ${niceDate(todayStr())}</div><div class="section-sub" style="margin-bottom:0;">Every student must be marked — tap a status to update</div></div>
      </div>
      <div style="display:flex; gap:10px; margin-bottom:10px; flex-wrap:wrap; align-items:center;">
        <select id="attClassSel" onchange="App._attClass=this.value; Views.attendance();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:13px;">${CLASSES.map(cl=>`<option ${cl===cls?'selected':''}>${cl}</option>`).join('')}</select>
        <select id="attSecSel" onchange="App._attSection=this.value; Views.attendance();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:13px;">${SECTIONS.map(se=>`<option ${se===sec?'selected':''}>${se}</option>`).join('')}</select>
        <button class="btn btn-sm btn-outline" onclick="markAllPresent('${cls}','${sec}')">✓ Mark All Present</button>
        <button class="btn btn-sm btn-outline" onclick="sendClassAbsentTexts('${cls}','${sec}')">✉️ Text Absentees</button>
      </div>
      ${!st.senderNumber ? `<div style="font-size:11.5px; color:var(--slate); margin-bottom:10px;">💡 Set your sending number in <a href="#" onclick="App.go('messagecenter'); return false;" style="color:var(--orange-600); font-weight:600;">Send Messages</a> so texts show who they're from.</div>` : ''}
      <div style="display:flex; gap:8px; align-items:center; background:var(--orange-50); border-radius:9px; padding:8px 10px; margin-bottom:12px;">
        <span style="font-size:16px;">📇</span>
        <input id="barcodeScanInput" placeholder="Scan student ID card / barcode (or type Admission No) and press Enter" style="flex:1; border:1.5px solid var(--line); border-radius:7px; padding:7px 10px; font-size:12.5px;" onkeydown="if(event.key==='Enter') scanStudentAttendance(this.value); ">
      </div>
      <div style="display:flex; align-items:center; justify-content:space-between; background:var(--orange-50); border-radius:9px; padding:9px 12px; margin-bottom:12px; font-size:12.5px;">
        <div><b>Attendance in-charge:</b> ${inCharge ? inCharge.name : 'Not assigned'}</div>
        ${canReassign ? `<button class="btn-sm btn-outline" style="padding:4px 10px; border-radius:6px;" onclick="openReassignIncharge('${cls}','${sec}')">Reassign</button>` : ''}
      </div>
      ${unmarkedCount>0 ? `<div style="background:var(--warn-bg); color:#a16207; border-radius:9px; padding:9px 12px; margin-bottom:12px; font-size:12.5px; font-weight:600;">⚠️ ${unmarkedCount} student${unmarkedCount>1?'s':''} not yet marked for today</div>` : ''}
      <div style="display:flex; flex-direction:column; gap:6px; max-height:460px; overflow-y:auto;">
      ${students.length ? students.map(s=>{
        const status = st.attendanceToday[s.id]||'unmarked';
        return `<div style="display:flex; align-items:center; gap:10px; padding:9px 8px; border-radius:9px; border:1px solid ${status==='unmarked'?'var(--warn)':'var(--line)'};">
          <div class="avatar" style="width:30px;height:30px;font-size:11px; background:var(--orange-500);">${initials(s.name)}</div>
          <div style="flex:1;"><div style="font-size:13px; font-weight:600;">${s.name}</div><div style="font-size:11px; color:var(--slate);">Roll #${s.roll}</div></div>
          <div style="display:flex; gap:4px;">
            ${['present','late','absent','leave'].map(opt=>`<button class="btn-sm" style="border:1.5px solid ${status===opt?attColor(opt):'var(--line)'}; background:${status===opt?attColor(opt):'#fff'}; color:${status===opt?'#fff':'var(--slate)'}; border-radius:7px; padding:5px 9px; font-size:11px; font-weight:700;" onclick="setAttendance('${s.id}','${opt}')">${attLabel(opt)}</button>`).join('')}
            <button class="btn-sm btn-outline" title="Send text to parent" style="padding:5px 8px; border-radius:7px; font-size:11px;" onclick="sendAttendanceText('${s.id}')">✉️</button>
          </div>
        </div>`;
      }).join('') : `<div class="empty-state"><div class="em-ic">🎒</div><h3>No students in this section</h3></div>`}
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="card" style="text-align:center;">
        ${flameRing(pct,88)}
        <div style="margin-top:10px; font-size:13px; color:var(--slate);">Present today — ${cls}-${sec}</div>
      </div>
      <div class="card">
        <div class="section-title" style="margin-bottom:10px;">Campus-wide Today</div>
        ${attSummaryRow('present', st)}
        ${attSummaryRow('late', st)}
        ${attSummaryRow('absent', st)}
        ${attSummaryRow('leave', st)}
        ${attSummaryRow('unmarked', st)}
      </div>
      <div class="card">
        <div class="section-title" style="margin-bottom:8px;">This Week</div>
        <div class="section-sub">Overall attendance trend</div>
        <canvas id="weekAtt" height="140"></canvas>
      </div>
    </div>
  </div>`;

  new Chart(document.getElementById('weekAtt'), {
    type:'line',
    data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Today'], datasets:[{data:[88,91,85,93,89,0,pct], borderColor:'#ea580c', backgroundColor:'rgba(234,88,12,.08)', fill:true, tension:.35, pointRadius:3}]},
    options:{plugins:{legend:{display:false}}, scales:{y:{min:60,max:100, ticks:{callback:v=>v+'%'}}, x:{grid:{display:false}}}}
  });
};
function attColor(s){return {present:'#16a34a', late:'#eab308', absent:'#dc2626', leave:'#0ea5e9', unmarked:'#a8a29e'}[s];}
function attLabel(s){return {present:'P', late:'L', absent:'A', leave:'Lv'}[s];}
function attSummaryRow(status, st){
  const count = status==='unmarked'
    ? st.students.filter(s=>!st.attendanceToday[s.id] || st.attendanceToday[s.id]==='unmarked').length
    : Object.values(st.attendanceToday).filter(v=>v===status).length;
  const total = st.students.length;
  const pct = total? Math.round(count/total*100):0;
  return `<div style="margin-bottom:10px;">
    <div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:4px;"><span style="text-transform:capitalize; color:var(--slate);">${status==='unmarked'?'Not Marked':status}</span><b>${count} students</b></div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%; background:${attColor(status)};"></div></div>
  </div>`;
}
function setAttendance(id, status){
  const prevStatus = App.state.attendanceToday[id];
  App.state.attendanceToday[id]=status;
  if(status==='absent' && prevStatus!=='absent'){
    const s = App.student(id);
    openWhatsAppDirect(s.guardianPhone, absentMsgFor(s), 'Absent Alert', s.parentName);
    App.toast('Marked absent — opening WhatsApp to notify '+s.parentName,'📵');
  }
  App.persist();
  Views.attendance();
}
function absentMsgFor(s){
  return `Dear ${s.parentName}, your child ${s.name} is absent school today. Kindly ensure regular attendance.`;
}
function feeReminderMessage(student, amount, month, dueDateStr){
  const monthName = (month||'').split(' ')[0] || month || 'this month';
  let dueBit = '10 '+monthName;
  if(dueDateStr){
    const d = new Date(dueDateStr+'T00:00:00');
    if(!isNaN(d)) dueBit = d.getDate()+' '+['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()];
  }
  return `Dear Parent,\nYour child ${student.name} has an outstanding fee of PKR ${Math.round(amount).toLocaleString('en-PK')} for ${monthName}.\nPlease submit before ${dueBit}.\nThank you.\nSchool Administration`;
}
function attendanceMsgFor(s, status){
  const texts = {
    absent: absentMsgFor(s),
    late: `Dear parent, ${s.name} (${s.cls}-${s.section}) arrived late to school today (${niceDate(todayStr())}). Please ensure timely arrival going forward.`,
    leave: `Dear parent, ${s.name} (${s.cls}-${s.section}) has been marked on leave today (${niceDate(todayStr())}). Thank you for informing the school.`,
    present: `Dear parent, this is a quick update that ${s.name} (${s.cls}-${s.section}) is present at school today.`,
    unmarked: `Dear parent, this is a reminder from Leads School System regarding ${s.name} (${s.cls}-${s.section}).`,
  };
  return texts[status] || texts.unmarked;
}
function sendAttendanceText(id){
  const s = App.student(id);
  const status = App.state.attendanceToday[id] || 'unmarked';
  const type = status==='absent'?'Absent Alert':status==='late'?'Late Arrival Alert':'Attendance Update';
  if(!openWhatsAppDirect(s.guardianPhone, attendanceMsgFor(s,status), type, s.parentName)) return;
  App.toast('Opening WhatsApp with '+s.parentName,'✉️');
}
function sendClassAbsentTexts(cls, sec){
  const st = App.state;
  const absentees = st.students.filter(s=>s.cls===cls && s.section===sec && st.attendanceToday[s.id]==='absent');
  if(!absentees.length){ App.toast('No absent students in '+cls+'-'+sec+' today','ℹ️'); return; }
  openBatchSend('Absent Alerts — '+cls+'-'+sec, absentees.map(s=>({name:s.parentName, phone:s.guardianPhone, message:attendanceMsgFor(s,'absent')})), 'Absent Alert');
}
function markAllPresent(cls, sec){
  App.state.students.filter(s=>s.cls===cls && s.section===sec).forEach(s=>{
    if(!App.state.attendanceToday[s.id] || App.state.attendanceToday[s.id]==='unmarked') App.state.attendanceToday[s.id]='present';
  });
  App.persist();
  App.toast('Remaining students marked present ✓');
  Views.attendance();
}
function scanStudentAttendance(code){
  code = (code||'').trim();
  if(!code) return;
  const st = App.state;
  const s = st.students.find(x=>x.admissionNo.toLowerCase()===code.toLowerCase() || x.id===code);
  if(!s){ App.toast('No student found for "'+code+'"','⚠️'); const inp=document.getElementById('barcodeScanInput'); if(inp) inp.value=''; return; }
  st.attendanceToday[s.id]='present';
  App.persist();
  App.toast('📇 '+s.name+' ('+s.cls+'-'+s.section+') marked present via scan ✅');
  App._attClass = s.cls; App._attSection = s.section;
  Views.attendance();
  setTimeout(()=>{ const inp=document.getElementById('barcodeScanInput'); if(inp) inp.focus(); }, 60);
}
function openReassignIncharge(cls, sec){
  const st = App.state;
  App.openModal(`
    <div class="modal-head"><h3>Reassign Attendance In-Charge</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="field"><label>${cls}-${sec} — Select Teacher</label>
        <select id="reassignTeacher">${st.teachers.map(t=>`<option value="${t.id}" ${st.attendanceInCharge[cls+'-'+sec]===t.id?'selected':''}>${t.name} (${t.subject})</option>`).join('')}</select>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitReassignIncharge('${cls}','${sec}')">Save</button>
    </div>`);
}
function submitReassignIncharge(cls, sec){
  const tid = document.getElementById('reassignTeacher').value;
  App.state.attendanceInCharge[cls+'-'+sec] = tid;
  App.persist();
  App.closeModal();
  App.toast('Attendance in-charge updated ✅');
  Views.attendance();
}

/* ---------- Teacher Attendance ---------- */
Views.teacherattendance = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const present = st.teachers.filter(t=>st.teacherAttendanceToday[t.id]==='present').length;
  const pct = st.teachers.length ? Math.round(present/st.teachers.length*100) : 0;
  c.innerHTML = `
  <div class="grid two-col">
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">Teacher Attendance — ${niceDate(todayStr())}</div><div class="section-sub" style="margin-bottom:0;">Tap a status, or scan an employee card</div></div>
      </div>
      <div style="display:flex; gap:8px; align-items:center; background:var(--orange-50); border-radius:9px; padding:8px 10px; margin-bottom:12px;">
        <span style="font-size:16px;">📇</span>
        <input id="teacherBarcodeInput" placeholder="Scan employee ID card (or type Employee ID) and press Enter" style="flex:1; border:1.5px solid var(--line); border-radius:7px; padding:7px 10px; font-size:12.5px;" onkeydown="if(event.key==='Enter') scanTeacherAttendance(this.value);">
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; max-height:460px; overflow-y:auto;">
      ${st.teachers.map(t=>{
        const status = st.teacherAttendanceToday[t.id] || 'unmarked';
        return `<div style="display:flex; align-items:center; gap:10px; padding:9px 8px; border-radius:9px; border:1px solid ${status==='unmarked'?'var(--warn)':'var(--line)'};">
          <div class="avatar" style="width:30px;height:30px;font-size:11px; background:var(--orange-500);">${initials(t.name)}</div>
          <div style="flex:1;"><div style="font-size:13px; font-weight:600;">${t.name}</div><div style="font-size:11px; color:var(--slate);">${t.employeeId} · ${t.subject}</div></div>
          <div style="display:flex; gap:4px;">
            ${['present','late','absent','leave'].map(opt=>`<button class="btn-sm" style="border:1.5px solid ${status===opt?attColor(opt):'var(--line)'}; background:${status===opt?attColor(opt):'#fff'}; color:${status===opt?'#fff':'var(--slate)'}; border-radius:7px; padding:5px 9px; font-size:11px; font-weight:700;" onclick="setTeacherAttendance('${t.id}','${opt}')">${attLabel(opt)}</button>`).join('')}
          </div>
        </div>`;
      }).join('')}
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="card" style="text-align:center;">
        ${flameRing(pct,88)}
        <div style="margin-top:10px; font-size:13px; color:var(--slate);">Present today — Staff</div>
      </div>
      <div class="card">
        <div class="section-title" style="margin-bottom:10px;">Today's Summary</div>
        ${['present','late','absent','leave'].map(opt=>{
          const count = st.teachers.filter(t=>st.teacherAttendanceToday[t.id]===opt).length;
          const p = st.teachers.length? Math.round(count/st.teachers.length*100):0;
          return `<div style="margin-bottom:10px;"><div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:4px;"><span style="text-transform:capitalize; color:var(--slate);">${opt}</span><b>${count} teachers</b></div><div class="progress-track"><div class="progress-fill" style="width:${p}%; background:${attColor(opt)};"></div></div></div>`;
        }).join('')}
      </div>
    </div>
  </div>`;
};
function setTeacherAttendance(id, status){
  App.state.teacherAttendanceToday[id]=status;
  App.persist();
  Views.teacherattendance();
}
function scanTeacherAttendance(code){
  code = (code||'').trim();
  if(!code) return;
  const t = App.state.teachers.find(x=>x.employeeId.toLowerCase()===code.toLowerCase() || x.id===code);
  if(!t){ App.toast('No teacher found for "'+code+'"','⚠️'); const inp=document.getElementById('teacherBarcodeInput'); if(inp) inp.value=''; return; }
  App.state.teacherAttendanceToday[t.id]='present';
  App.persist();
  App.toast('📇 '+t.name+' marked present via scan ✅');
  Views.teacherattendance();
  setTimeout(()=>{ const inp=document.getElementById('teacherBarcodeInput'); if(inp) inp.focus(); }, 60);
}

/* ---------- Late Comers ---------- */
Views.latecomers = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const arrivalDisp = timeStrTo12h(st.schoolSettings.arrivalTime);
  c.innerHTML = `
  <div class="grid two-col">
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">Late Arrivals — ${niceDate(todayStr())}</div><div class="section-sub" style="margin-bottom:0;">Auto-detected after ${arrivalDisp} gate time</div></div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-outline" onclick="App.toast('Scan a student barcode/card below 🔍')">📷 Barcode Scan</button>
          <button class="btn btn-sm btn-orange" onclick="logLateArrival()">+ Log Arrival</button>
        </div>
      </div>
      <div class="searchbar" style="margin-bottom:14px;">
        <span>📷</span>
        <input id="barcodeLateInput" placeholder="Scan student barcode / ID card or type admission no, then press Enter" onkeydown="if(event.key==='Enter'){ scanLateArrival(this.value); this.value=''; }">
      </div>
      <table>
        <thead><tr><th>Student</th><th>Arrival</th><th>Late By</th><th>Reason</th><th>This Month</th><th>Escalation</th><th></th></tr></thead>
        <tbody>
        ${st.lateComers.map(l=>{
          const s = App.student(l.studentId);
          if(!s) return '';
          const esc = l.countThisMonth>=10?['red','Discipline Report']:l.countThisMonth>=8?['orange','Meeting Request']:l.countThisMonth>=5?['yellow','Parent + Principal Alert']:l.countThisMonth>=3?['blue','Warning']:['gray','—'];
          const msg = `Dear ${s.parentName}, ${s.name} (${s.cls}-${s.section}) arrived late to school today at ${l.arrival}. This is late arrival #${l.countThisMonth} this month. Please ensure timely arrival going forward.`;
          return `<tr class="hoverable">
            <td><div style="display:flex; align-items:center; gap:10px;"><div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--orange-500);">${initials(s.name)}</div><div style="font-weight:600; font-size:13px;">${s.name}<br><span style="font-size:11px; color:var(--slate); font-weight:400;">${s.cls}-${s.section}</span></div></div></td>
            <td style="font-family:var(--font-mono);">${l.arrival}</td>
            <td>${pill('red', l.lateMinutes+' min')}</td>
            <td style="font-size:12.5px;">${l.reason}</td>
            <td style="text-align:center; font-weight:700;">${l.countThisMonth}</td>
            <td>${pill(esc[0], esc[1])}</td>
            <td>${waButton(s.guardianPhone, msg, 'Text')}</td>
          </tr>`;
        }).join('')}
        </tbody>
      </table>
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="card">
        <div class="section-title" style="margin-bottom:10px;">Escalation Rules</div>
        <div style="display:flex; flex-direction:column; gap:8px; font-size:12.5px;">
          <div style="display:flex; justify-content:space-between;"><span>3 late arrivals</span>${pill('blue','Warning')}</div>
          <div style="display:flex; justify-content:space-between;"><span>5 late arrivals</span>${pill('yellow','Parent + Principal Alert')}</div>
          <div style="display:flex; justify-content:space-between;"><span>8 late arrivals</span>${pill('orange','Meeting Request')}</div>
          <div style="display:flex; justify-content:space-between;"><span>10 late arrivals</span>${pill('red','Discipline Report')}</div>
        </div>
      </div>
      <div class="card">
        <div class="section-title" style="margin-bottom:8px;">Top Late Students (This Month)</div>
        ${st.lateComers.slice().sort((a,b)=>b.countThisMonth-a.countThisMonth).slice(0,5).map(l=>{
          const s = App.student(l.studentId);
          return s ? `<div style="display:flex; justify-content:space-between; padding:7px 0; border-bottom:1px solid var(--line); font-size:12.5px;"><span>${s.name}</span><b>${l.countThisMonth}×</b></div>` : '';
        }).join('')}
      </div>
    </div>
  </div>`;
};
function logLateArrival(){
  const s = rand(App.state.students);
  const [ah,am] = App.state.schoolSettings.arrivalTime.split(':').map(Number);
  const arrivalMin = ah*60+am+randInt(5,55);
  const rec = {id:uid('LC'), studentId:s.id, date:todayStr(), arrival:minToTimeStr(arrivalMin), lateMinutes:randInt(5,40), reason:'Not given', teacherRemarks:'—', countThisMonth: randInt(1,6)};
  App.state.lateComers.unshift(rec);
  App.state.whatsapp.unshift({id:uid('WA'), to:s.parentName, phone:s.guardianPhone, from:App.state.senderNumber||undefined, type:'Late Arrival Alert', msg:`${s.name} arrived late to school today at ${rec.arrival}. Please ensure timely arrival going forward.`, time:'Just now', status:'Delivered'});
  App.persist();
  App.toast('Late arrival logged — WhatsApp sent instantly ⚡');
  Views.latecomers();
}
function scanLateArrival(code){
  code = (code||'').trim();
  if(!code){ return; }
  const s = App.state.students.find(x=>x.admissionNo.toLowerCase()===code.toLowerCase() || x.id===code);
  if(!s){ App.toast('No student found for that barcode/ID','⚠️'); return; }
  const existing = App.state.lateComers.find(l=>l.studentId===s.id && l.date===todayStr());
  if(existing){ App.toast(s.name+' already logged late today','ℹ️'); return; }
  const [ah,am] = App.state.schoolSettings.arrivalTime.split(':').map(Number);
  const nowMin = ah*60+am+randInt(3,45);
  const rec = {id:uid('LC'), studentId:s.id, date:todayStr(), arrival:minToTimeStr(nowMin), lateMinutes: nowMin-(ah*60+am), reason:'Barcode scan', teacherRemarks:'—', countThisMonth: randInt(1,6)};
  App.state.lateComers.unshift(rec);
  App.state.whatsapp.unshift({id:uid('WA'), to:s.parentName, phone:s.guardianPhone, from:App.state.senderNumber||undefined, type:'Late Arrival Alert', msg:`${s.name} scanned in late today at ${rec.arrival}. Please ensure timely arrival going forward.`, time:'Just now', status:'Delivered'});
  App.persist();
  App.toast(s.name+' scanned in — marked late & parent texted 📷');
  Views.latecomers();
}


Views.dailydiary = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const list = st.dailyDiary.slice().sort((a,b)=>b.date.localeCompare(a.date));
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Daily Diary (${list.length})</div><div class="section-sub" style="margin-bottom:0;">Every subject, one page per day</div></div>
      <button class="btn btn-sm btn-orange" onclick="openAddDailyDiary()">+ New Diary Page</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
    ${list.length ? list.map(d=>`
      <div style="border:1px solid var(--line); border-radius:12px; padding:14px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div><div style="font-weight:700; font-size:13.5px;">${d.cls}-${d.section}</div><div style="font-size:11.5px; color:var(--slate);">${niceDate(d.date)}</div></div>
          <div style="display:flex; align-items:center; gap:8px;">
            ${pill('orange', (d.subjects||[]).length+' subjects')}
            <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="openWhatsAppRoster('${d.cls}','${d.section}', ${JSON.stringify('Diary update for {student} ('+d.cls+'-'+d.section+', '+niceDate(d.date)+'): '+(d.subjects||[]).map(s=>s.subject+' — '+s.work).join('; ')+'.').replace(/"/g,'&quot;')}, 'Diary')">💬 WhatsApp</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:8px;">
        ${(d.subjects||[]).length ? d.subjects.map(s=>`
          <div style="background:var(--orange-50); border-radius:8px; padding:8px 10px;">
            <div style="font-size:11px; font-weight:700; color:var(--orange-700); text-transform:uppercase; letter-spacing:.03em;">${s.subject}</div>
            <div style="font-size:12px; margin-top:2px;">${s.work}</div>
          </div>`).join('') : `<div style="font-size:12px; color:var(--slate-light);">No work assigned that day</div>`}
        </div>
      </div>`).join('') : `<div class="empty-state"><div class="em-ic">📔</div><h3>No daily diary pages yet</h3></div>`}
    </div>
  </div>`;
};
function openAddDailyDiary(){
  App.openModal(`
    <div class="modal-head"><h3>New Daily Diary Page</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid" style="margin-bottom:14px;">
        <div class="field"><label>Class</label><select id="ddClass">${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Section</label><select id="ddSection">${SECTIONS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field full"><label>Date</label><input id="ddDate" type="date" value="${todayStr()}"></div>
      </div>
      <div style="font-size:12.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.04em; margin-bottom:8px;">Work assigned per subject</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${SUBJECTS.map(s=>`<div style="display:flex; align-items:center; gap:10px;">
          <div style="width:110px; font-size:12.5px; font-weight:600; flex-shrink:0;">${s}</div>
          <input class="ddSubjectInput" data-subject="${s}" placeholder="Leave blank if nothing assigned in ${s} today" style="flex:1; padding:9px 12px; border:1.5px solid var(--line); border-radius:8px; font-size:13px;">
        </div>`).join('')}
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitDailyDiary()">Save Diary Page & Notify Parents</button>
    </div>`);
}
function submitDailyDiary(){
  const cls = document.getElementById('ddClass').value, section = document.getElementById('ddSection').value, date = document.getElementById('ddDate').value;
  const subjects = [...document.querySelectorAll('.ddSubjectInput')].map(inp=>({subject:inp.dataset.subject, work:inp.value.trim()})).filter(s=>s.work);
  if(!subjects.length){ App.toast('Add work for at least one subject','⚠️'); return; }
  App.state.dailyDiary.unshift({id:uid('DD'), cls, section, date, subjects});
  App.state.whatsapp.unshift({id:uid('WA'), to:'All Parents', phone:cls+'-'+section, from:App.state.senderNumber||undefined, type:'Diary Notification', msg:`Daily diary updated for ${cls}-${section} (${niceDate(date)}): ${subjects.map(s=>s.subject+' — '+s.work).join('; ')}.`, time:'Just now', status:'Delivered'});
  App.persist();
  App.closeModal();
  App.toast('Diary page saved — parents notified 📤');
  Views.dailydiary();
}

/* ---------- Weekly Diary (multi-subject, one page per week — same format as Daily Diary) ---------- */
Views.weeklydiary = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const list = st.weeklyDiary.slice().sort((a,b)=>b.weekOf.localeCompare(a.weekOf));
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Weekly Diary (${list.length})</div><div class="section-sub" style="margin-bottom:0;">Every subject, one page per week</div></div>
      <button class="btn btn-sm btn-orange" onclick="openAddWeeklyDiary()">+ New Diary Page</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
    ${list.length ? list.map(d=>`
      <div style="border:1px solid var(--line); border-radius:12px; padding:14px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div><div style="font-weight:700; font-size:13.5px;">${d.cls}-${d.section}</div><div style="font-size:11.5px; color:var(--slate);">Week of ${niceDate(d.weekOf)} · Due ${niceDate(d.dueDate)}</div></div>
          <div style="display:flex; align-items:center; gap:8px;">
            ${pill('orange', (d.subjects||[]).length+' subjects')}
            <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="openWhatsAppRoster('${d.cls}','${d.section}', ${JSON.stringify('Weekly diary for {student} ('+d.cls+'-'+d.section+', due '+niceDate(d.dueDate)+'): '+(d.subjects||[]).map(s=>s.subject+' — '+s.work).join('; ')+'.').replace(/"/g,'&quot;')}, 'Diary')">💬 WhatsApp</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:8px;">
        ${(d.subjects||[]).length ? d.subjects.map(s=>`
          <div style="background:var(--orange-50); border-radius:8px; padding:8px 10px;">
            <div style="font-size:11px; font-weight:700; color:var(--orange-700); text-transform:uppercase; letter-spacing:.03em;">${s.subject}</div>
            <div style="font-size:12px; margin-top:2px;">${s.work}</div>
          </div>`).join('') : `<div style="font-size:12px; color:var(--slate-light);">No work assigned this week</div>`}
        </div>
      </div>`).join('') : `<div class="empty-state"><div class="em-ic">📅</div><h3>No weekly diary pages yet</h3></div>`}
    </div>
  </div>`;
};
function openAddWeeklyDiary(){
  App.openModal(`
    <div class="modal-head"><h3>New Weekly Diary Page</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid" style="margin-bottom:14px;">
        <div class="field"><label>Class</label><select id="wdClass">${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Section</label><select id="wdSection">${SECTIONS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field full"><label>Due Date</label><input id="wdDue" type="date" value="${fmtDate(new Date(Date.now()+6*86400000))}"></div>
      </div>
      <div style="font-size:12.5px; font-weight:700; color:var(--slate); text-transform:uppercase; letter-spacing:.04em; margin-bottom:8px;">Work assigned per subject</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${SUBJECTS.map(s=>`<div style="display:flex; align-items:center; gap:10px;">
          <div style="width:110px; font-size:12.5px; font-weight:600; flex-shrink:0;">${s}</div>
          <input class="wdSubjectInput" data-subject="${s}" placeholder="Leave blank if nothing assigned in ${s} this week" style="flex:1; padding:9px 12px; border:1.5px solid var(--line); border-radius:8px; font-size:13px;">
        </div>`).join('')}
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitWeeklyDiary()">Save Diary Page & Notify Parents</button>
    </div>`);
}
function submitWeeklyDiary(){
  const cls=document.getElementById('wdClass').value, section=document.getElementById('wdSection').value, dueDate = document.getElementById('wdDue').value;
  const subjects = [...document.querySelectorAll('.wdSubjectInput')].map(inp=>({subject:inp.dataset.subject, work:inp.value.trim()})).filter(s=>s.work);
  if(!subjects.length){ App.toast('Add work for at least one subject','⚠️'); return; }
  App.state.weeklyDiary.unshift({id:uid('WD'), cls, section, weekOf:todayStr(), dueDate, subjects});
  App.state.whatsapp.unshift({id:uid('WA'), to:'All Parents', phone:cls+'-'+section, from:App.state.senderNumber||undefined, type:'Weekly Diary Notification', msg:`Weekly diary for ${cls}-${section} (due ${niceDate(dueDate)}): ${subjects.map(s=>s.subject+' — '+s.work).join('; ')}.`, time:'Just now', status:'Delivered'});
  App.persist();
  App.closeModal();
  App.toast('Weekly diary saved — parents notified 📤');
  Views.weeklydiary();
}


/* ---------- Notebook Check (standalone, attendance-style) ---------- */
Views.notebookcheck = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const cls = App._nbClass || CLASSES[2];
  const sec = App._nbSection || 'A';
  const students = st.students.filter(s=>s.cls===cls && s.section===sec);
  const done = students.filter(s=>st.notebookToday[s.id]==='done').length;
  const unmarkedCount = students.filter(s=>!st.notebookToday[s.id]).length;
  const pct = students.length? Math.round(done/students.length*100):0;
  const opts = [['done','✓ Done','var(--success)'],['needs_improvement','~ Needs Improvement','var(--gold)'],['not_done','✕ Not Done','var(--danger)']];

  c.innerHTML = `
  <div class="grid two-col">
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">Notebook Check — ${niceDate(todayStr())}</div><div class="section-sub" style="margin-bottom:0;">Just like attendance — mark every student</div></div>
      </div>
      <div style="display:flex; gap:10px; margin-bottom:10px; flex-wrap:wrap; align-items:center;">
        <select onchange="App._nbClass=this.value; Views.notebookcheck();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:13px;">${CLASSES.map(cl=>`<option ${cl===cls?'selected':''}>${cl}</option>`).join('')}</select>
        <select onchange="App._nbSection=this.value; Views.notebookcheck();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:13px;">${SECTIONS.map(se=>`<option ${se===sec?'selected':''}>${se}</option>`).join('')}</select>
        <button class="btn btn-sm btn-outline" onclick="markAllNotebooksDone('${cls}','${sec}')">✓ Mark All Done</button>
      </div>
      ${unmarkedCount>0 ? `<div style="background:var(--warn-bg); color:#a16207; border-radius:9px; padding:9px 12px; margin-bottom:12px; font-size:12.5px; font-weight:600;">⚠️ ${unmarkedCount} student${unmarkedCount>1?'s':''} not yet checked today</div>` : ''}
      <div style="display:flex; flex-direction:column; gap:6px; max-height:460px; overflow-y:auto;">
      ${students.length ? students.map(s=>{
        const status = st.notebookToday[s.id];
        const statusLabel = status==='done'?'Notebook checked — well done!':status==='needs_improvement'?'notebook needs improvement':status==='not_done'?'notebook was not done':'notebook not yet checked';
        const nbMsg = `Dear ${s.parentName}, regarding ${s.name}'s notebook today: ${statusLabel}.`;
        return `<div style="display:flex; align-items:center; gap:10px; padding:9px 8px; border-radius:9px; border:1px solid ${status?'var(--line)':'var(--warn)'};">
          <div class="avatar" style="width:30px;height:30px;font-size:11px; background:var(--orange-500);">${initials(s.name)}</div>
          <div style="flex:1;"><div style="font-size:13px; font-weight:600;">${s.name}</div><div style="font-size:11px; color:var(--slate);">Roll #${s.roll}</div></div>
          <div style="display:flex; gap:4px; align-items:center;">
            ${opts.map(([val,label,color])=>`<button class="btn-sm" style="border:1.5px solid ${status===val?color:'var(--line)'}; background:${status===val?color:'#fff'}; color:${status===val?'#fff':'var(--slate)'}; border-radius:7px; padding:5px 8px; font-size:10.5px; font-weight:700;" onclick="setNotebookToday('${s.id}','${val}')">${label}</button>`).join('')}
            ${waButton(s.guardianPhone, nbMsg, 'Text')}
          </div>
        </div>`;
      }).join('') : `<div class="empty-state"><div class="em-ic">🎒</div><h3>No students in this section</h3></div>`}
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="card" style="text-align:center;">
        ${flameRing(pct,88)}
        <div style="margin-top:10px; font-size:13px; color:var(--slate);">Notebooks done — ${cls}-${sec}</div>
      </div>
      <div class="card">
        <div class="section-title" style="margin-bottom:10px;">Campus-wide Today</div>
        ${nbSummaryRow('done', st, 'Done')}
        ${nbSummaryRow('needs_improvement', st, 'Needs Improvement')}
        ${nbSummaryRow('not_done', st, 'Not Done')}
        ${nbSummaryRow('unmarked', st, 'Not Checked Yet')}
      </div>
    </div>
  </div>`;
};
function nbSummaryRow(status, st, label){
  const count = status==='unmarked'
    ? st.students.filter(s=>!st.notebookToday[s.id]).length
    : st.students.filter(s=>st.notebookToday[s.id]===status).length;
  const total = st.students.length;
  const pct = total? Math.round(count/total*100):0;
  const color = {done:'var(--success)', needs_improvement:'var(--gold)', not_done:'var(--danger)', unmarked:'#a8a29e'}[status];
  return `<div style="margin-bottom:10px;">
    <div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:4px;"><span style="color:var(--slate);">${label}</span><b>${count} students</b></div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%; background:${color};"></div></div>
  </div>`;
}
function setNotebookToday(studentId, status){
  App.state.notebookToday[studentId]=status;
  App.persist();
  Views.notebookcheck();
}
function markAllNotebooksDone(cls, sec){
  App.state.students.filter(s=>s.cls===cls && s.section===sec).forEach(s=>{
    if(!App.state.notebookToday[s.id]) App.state.notebookToday[s.id]='done';
  });
  App.persist();
  App.toast('Remaining notebooks marked done ✓');
  Views.notebookcheck();
}

function testTable(list, emptyMsg, weekly){
  return `<table>
      <thead><tr><th>Class</th><th>Subject</th><th>${weekly?'Week Of':'Date'}</th><th>Max Marks</th><th>Class Average</th><th>Status</th><th></th></tr></thead>
      <tbody>
      ${list.length ? list.map(t=>`
        <tr class="hoverable">
          <td>${t.cls}-${t.section}</td><td>${t.subject}</td><td>${niceDate(weekly?t.weekOf:t.date)}</td><td>${t.maxMarks}</td>
          <td><div style="display:flex; align-items:center; gap:8px;"><div class="progress-track" style="width:70px;"><div class="progress-fill" style="width:${Math.round(t.avgMarks/t.maxMarks*100)}%;"></div></div><span style="font-size:11.5px;">${t.avgMarks}/${t.maxMarks}</span></div></td>
          <td>${t.status==='graded'?pill('green','Graded'):pill('yellow','Pending')}</td>
          <td><button class="btn btn-sm btn-outline" onclick="openEnterMarks('${t.id}','${weekly?'weekly':'daily'}')">Enter Marks</button></td>
        </tr>`).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">🧪</div><p>${emptyMsg}</p></div></td></tr>`}
      </tbody>
    </table>`;
}
Views.tests = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Daily Tests (${st.tests.length})</div><div class="section-sub" style="margin-bottom:0;">Quick assessments & performance</div></div>
      <button class="btn btn-sm btn-orange" onclick="openCreateTest('daily')">+ Create Test</button>
    </div>
    ${testTable(st.tests, 'No daily tests yet', false)}
  </div>`;
};
Views.weeklytests = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Weekly Tests (${st.weeklyTests.length})</div><div class="section-sub" style="margin-bottom:0;">Bigger weekly assessments & performance</div></div>
      <button class="btn btn-sm btn-orange" onclick="openCreateTest('weekly')">+ Create Weekly Test</button>
    </div>
    ${testTable(st.weeklyTests, 'No weekly tests yet', true)}
  </div>`;
};
function openCreateTest(kind){
  App._testKind = kind;
  App.openModal(`
    <div class="modal-head"><h3>Create ${kind==='weekly'?'Weekly':'Daily'} Test</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Class</label><select id="ctClass">${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Section</label><select id="ctSection">${SECTIONS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Subject</label><select id="ctSubject">${SUBJECTS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>${kind==='weekly'?'Week Of':'Date'}</label><input id="ctDate" type="date" value="${todayStr()}"></div>
        <div class="field"><label>Max Marks</label><input id="ctMax" type="number" value="${kind==='weekly'?50:20}"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitCreateTest()">Create & Enter Marks</button>
    </div>`);
}
function submitCreateTest(){
  const kind = App._testKind;
  const cls=document.getElementById('ctClass').value, section=document.getElementById('ctSection').value, subject=document.getElementById('ctSubject').value;
  const date = document.getElementById('ctDate').value;
  const maxMarks = Number(document.getElementById('ctMax').value)||(kind==='weekly'?50:20);
  const rec = kind==='weekly'
    ? {id:uid('WT'), cls, section, subject, weekOf:date, maxMarks, marks:{}, avgMarks:0, status:'pending'}
    : {id:uid('DT'), cls, section, subject, date, maxMarks, marks:{}, avgMarks:0, status:'pending'};
  (kind==='weekly' ? App.state.weeklyTests : App.state.tests).unshift(rec);
  App.persist();
  App.toast('Test created — now enter marks 🧪');
  openEnterMarks(rec.id, kind);
}
function openEnterMarks(testId, kind){
  const list = kind==='weekly' ? App.state.weeklyTests : App.state.tests;
  const t = list.find(x=>x.id===testId);
  if(!t) return;
  if(!t.marks) t.marks={};
  const roster = App.state.students.filter(s=>s.cls===t.cls && s.section===t.section);
  App.openModal(`
    <div class="modal-head"><h3>Enter Marks — ${t.cls}-${t.section}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div style="font-size:12.5px; color:var(--slate); margin-bottom:12px;">${t.subject} · ${niceDate(kind==='weekly'?t.weekOf:t.date)} · Out of ${t.maxMarks}</div>
      <div style="display:flex; flex-direction:column; gap:6px; max-height:420px; overflow-y:auto;">
      ${roster.length ? roster.map(s=>`
        <div style="display:flex; align-items:center; gap:10px; padding:8px; border-radius:9px; border:1px solid var(--line);">
          <div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--orange-500);">${initials(s.name)}</div>
          <div style="flex:1;"><div style="font-size:12.5px; font-weight:600;">${s.name}</div><div style="font-size:10.5px; color:var(--slate);">Roll #${s.roll}</div></div>
          <input type="number" min="0" max="${t.maxMarks}" value="${t.marks[s.id]??''}" data-student="${s.id}" class="marksInput" style="width:70px; padding:6px 8px; border:1.5px solid var(--line); border-radius:7px; font-size:13px; text-align:center;" placeholder="/${t.maxMarks}">
          ${waButton(s.guardianPhone, `Dear ${s.parentName}, ${s.name} scored ${t.marks[s.id]??'—'}/${t.maxMarks} in the ${kind==='weekly'?'weekly':'daily'} ${t.subject} test.`, 'Text')}
        </div>`).join('') : `<div class="empty-state"><div class="em-ic">🎒</div><h3>No students in this section</h3></div>`}
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="saveMarks('${testId}','${kind}')">Save Marks</button>
    </div>`);
}
function saveMarks(testId, kind){
  const list = kind==='weekly' ? App.state.weeklyTests : App.state.tests;
  const t = list.find(x=>x.id===testId);
  if(!t) return;
  if(!t.marks) t.marks={};
  document.querySelectorAll('.marksInput').forEach(inp=>{
    const v = inp.value.trim();
    if(v!=='') t.marks[inp.dataset.student] = Math.min(t.maxMarks, Math.max(0, Number(v)));
  });
  t.avgMarks = avgOf(t.marks);
  t.status = Object.keys(t.marks).length ? 'graded' : 'pending';
  App.persist();
  App.closeModal();
  App.toast('Marks saved ✅');
  (kind==='weekly' ? Views.weeklytests : Views.tests)();
}

/* ---------- Exams / Result Card ---------- */
Views.exams = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const chosenId = App._resultStudent || st.students[0]?.id;
  const s = App.student(chosenId);
  c.innerHTML = `
  <div class="grid two-col">
    <div class="card">
      <div class="card-head"><div class="section-title">Merit List — Term Exam</div></div>
      <table>
        <thead><tr><th>#</th><th>Student</th><th>Class</th><th>Total %</th><th>Grade</th></tr></thead>
        <tbody>
        ${st.students.slice(0,10).map((st2,i)=>{
          const pct = randSeeded(st2.id);
          return `<tr class="hoverable" style="cursor:pointer;" onclick="App._resultStudent='${st2.id}'; Views.exams();">
            <td style="font-weight:700; color:var(--orange-600);">${i+1}</td>
            <td>${st2.name}</td><td>${st2.cls}-${st2.section}</td>
            <td style="font-family:var(--font-mono);">${pct}%</td>
            <td>${pill(pct>=85?'green':pct>=70?'blue':'yellow', gradeOf(pct))}</td>
          </tr>`;
        }).join('')}
        </tbody>
      </table>
    </div>
    <div>
      <div class="section-title" style="margin-bottom:12px;">Result Card Preview</div>
      ${s ? resultCard(s) : ''}
      <div style="text-align:center; margin-top:14px;">
        <button class="btn btn-sm btn-orange" onclick="App.toast('Result card exported as PDF 📄')">Export PDF</button>
        ${s ? waButton(s.guardianPhone, `Dear ${s.parentName}, ${s.name}'s term result is out: ${randSeeded(s.id)}% (Grade ${gradeOf(randSeeded(s.id))}). Check the parent portal for the full result card.`, 'Share via WhatsApp') : ''}
      </div>
    </div>
  </div>`;
};
function randSeeded(id){ return 60+(hashCode(id)%36); }
function timetableSubject(cls,section,day,periodIdx){ return SUBJECTS[hashCode(cls+section+day+periodIdx)%SUBJECTS.length]; }
function gradeOf(pct){ return pct>=90?'A+':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D'; }
function resultCard(s){
  const pct = randSeeded(s.id);
  const marks = SUBJECTS.slice(0,6).map(sub=>({sub, max:100, got: Math.min(100,pct+randInt(-8,8))}));
  const total = marks.reduce((a,m)=>a+m.got,0), maxTotal=marks.length*100;
  return `<div class="result-card">
    <div class="rc-watermark">🔥</div>
    <div class="rc-head">
      <img src="data:image/png;base64,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fVo6V+wpUJ122mnMmzePv/zlLxx55JG1SmS7GQhNUBmjkgY6W9QHRnXLdyRnvLubawANBoO0adOGnj177mqytyhgxbBtDSjb4eB1awzJZt600hh+k8c+noXScMfvbkvkidWwq7/+7a9s2rQJrTV3/v5Ob+Kbpkk0Gt0pCrvuYh81ahRt2rTx1MFp06axcuXKBtXB5Ah3KaVncF+2bBllZWXewmwm+0PjYNSEWvrub9VVVxszvCerhRPfmFjrey4brbufC3IrVqzgs88+8+5DXZbVt29fzj33XLTWbN26lb/+9a+14re01oz//e8x/QHuee0Lp/O1rl36uKU2tHB7Adshn6+lkWu3IwPce3niiSfSr18/brjhBk477TRPPXQfwskxbnX397BHEDETNqwGbQn1SVpaGjk5ORQUFFBUVETbtm1p36497dq3o127dhQVFZGfn09+fj6xWIwePXqwbdu2+hbGngSa7q4KYgEoK+bRSJn4Q7pF9ZrNIwlBv8nqreU8++U8jh1zPIOGHOIsDCERplON4IknnkAIwTHHHMNxxx9Xq3TxpEmTWL58eaOhCWNPH1vLDuN6ExuLboeaFBf3O65h21WNWlIl9DovN6HfX12HgPvA69u3L6ZpelkA9QGQ1poP3v+A6upqQqEQAGPGjCEzM5OKioqd9nPH7D//+Q8nn3xyg+dz66238sorr2DbNo8//jjXXXcdrVu39h7anbt05corLucff/8HXy1cz8iebaiqjmEKUTtxubnpjlaE7RiA1ae43OabFgUsP7WDzXdtQ05oCkcccYRHct54441a5o1rrrmGTZs2MWXKFLZv375Tqe6kuVlt4tRId7QmIYTWmrS0NHr37k2bNm1o27Yt7dq187Y2bdqQn59PTk4OaWlpu75Cv5+cnJy6gJVc3s7fQoOrAQIQrgYisSrQEqGcZpSe8Uw33+SxlCIYDPHPiVOJWIrxd/yuFkCYpslf/vIXtm3bhpTSqyrq2m0Ann322XrBxy3zEgwGOfGkEz3vYCwW45133mn0IeO+XzeJ2I11+iGM7ruq+w6wePFir0qC1ppOnTrRrl07Vq9e3SBgSSlZu3YtX331FccffzyxWIzCwkJGjx7NO++8s1MFC/fv999/nw0bNtC2bdta6rkbMzdgwADOPPNMr/7Wo48+ykMPPeTdO601t//ud/zfs88x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Aa38BpalkbtZRNIpw+1XR/3lHfnlivUL9Svn9hfjJtgt8rB3Ti2A04W9YwLAZGOe08mTJ3v5rnfddRf3339/rdjENm3asGjRIjIyMry54H4fnMT83r17U1VV5dboK0lgVImZZHTfDLQDtJRSaK056qijuOmmmxg6dCitW7eudYLRaLSWjcC1Z0WjURbMX8DkLybz8ccfc9ddd3npEMcccwzPP/988iRzL7x7wlNY0gKgpQHaZLSaWx7dHp6+Zkvop6KP1koLvZt2ZFspTF+Qv30+g5jS/D5RQsa2nViSqVOneraSm2++mazsrJ3YlWmaTJkyhS+//NI7bkZGBtnZ2bXUucLCQg477DAyMjJq9dVzVab6vG7J/zfWrr4psVv1MaTmisWqr8/iroCq7u831Lor+fh17WHufXDn6p133snJJ5/M5s2b2bRpExs3bmTz5s1s3ryZLVu2UF5ezrZt2/i/f/8fjz72aL11stzfM02T22+/nVNPPRXDMHjvvff4+uuvGTlypLdYTdPk/nvu4dTTT+fxz7/nntOGEolFMKXYrckckILN5dVq3pbtEvhOnjfBffDbLQRYHRLYsEuGdd1113kpZ6+99hp33313rdCmWCzGZZddRmZmJrZts379erTWXo03V6Xs2bMn3377rQtYq1xscNt6RRJqYTucyqNeaL1bNta1RYETvJjMsNwJEo1GOfroo2sV/xs5cqTnIRw1alSt3ntaa3dAcoAewDT2rj19Q5RWLNq2baMQYuH0NZuHxKJRbUinsUmT1mCiamTQNFhfVsW/psxn5FGjOOzwEdi2hWE6C+fee+9FKUXXrl356U9/ulNtJZcOp6Wl8cILL1BcXExeXh45OTlkZWWRkZFR72JIXqi7YhBNCStoLDp+X0h9nuaWOH5j6TcABQUFXrme+qSyspIdO3Z4D+eGxs1lFyeddBLDhg1jxowZANx999189NFH3gPEtm1OOfVUhg4bxl8/+45rj+hLftAgZqsm14RRWmP6g8xbX0JpZYSAlF9HnfXXEknPbgf2AQnty67PE+leW2ZmptfwQ2vNI4884s1XV90PBAJcdtll3tr45S9/yccff8zNN9/MnXfe6TlkEnF2SgghgQWek9llOQLmusvTBaDPPvuM7du3e08qv9+P3++ntLSUzz//nN/97ndccMEFxC3HsBkKhTwDW1pa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">
      <div><div style="font-weight:800; font-size:15px;">Leads School System</div><div style="font-size:11px; opacity:.85;">Zeenat Campus · Term Result Card</div></div>
    </div>
    <div class="rc-body">
      <div class="form-grid" style="font-size:12px; margin-bottom:14px;">
        ${infoRow('Student', s.name)} ${infoRow('Roll No', s.roll)}
        ${infoRow('Class', s.cls+'-'+s.section)} ${infoRow('Admission No', s.admissionNo)}
      </div>
      <table style="margin-bottom:10px;">
        <thead><tr><th>Subject</th><th>Max</th><th>Obtained</th></tr></thead>
        <tbody>${marks.map(m=>`<tr><td>${m.sub}</td><td>${m.max}</td><td style="font-weight:700;">${m.got}</td></tr>`).join('')}</tbody>
      </table>
      <div class="grid" style="grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:10px;">
        <div style="text-align:center; background:var(--orange-50); border-radius:9px; padding:8px;"><div style="font-size:10px; color:var(--slate);">TOTAL</div><div style="font-weight:700; font-family:var(--font-mono);">${total}/${maxTotal}</div></div>
        <div style="text-align:center; background:var(--orange-50); border-radius:9px; padding:8px;"><div style="font-size:10px; color:var(--slate);">PERCENTAGE</div><div style="font-weight:700; font-family:var(--font-mono);">${pct}%</div></div>
        <div style="text-align:center; background:var(--orange-50); border-radius:9px; padding:8px;"><div style="font-size:10px; color:var(--slate);">GRADE</div><div style="font-weight:700;">${gradeOf(pct)}</div></div>
      </div>
      <div style="font-size:11.5px; color:var(--slate); font-style:italic;">Teacher's remarks: ${pct>=85?'Excellent performance, keep it up!':pct>=70?'Good effort, room to grow.':'Needs more focus and practice.'}</div>
    </div>
  </div>`;
}

/* ---------- Time Table (+ Modify Subject) ---------- */
Views.timetable = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const tt = st.timetable || {};
  c.innerHTML = `
  <div class="card" style="margin-bottom:16px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
    <div style="font-size:13px; color:var(--slate);">Your weekly teaching schedule. Need to swap a subject on a specific day? Use Modify Subject.</div>
    <button class="btn btn-sm btn-orange" onclick="openModifySubject()">🔁 Modify Subject</button>
  </div>
  <div class="card" style="overflow-x:auto;">
    <table>
      <thead><tr><th>Period</th>${WEEKDAYS.map(d=>`<th>${d}</th>`).join('')}</tr></thead>
      <tbody>
      ${getPeriods().map((p,i)=>`
        <tr class="hoverable">
          <td style="font-weight:700; font-size:11.5px; white-space:nowrap;">${p}</td>
          ${WEEKDAYS.map(d=>{
            const cell = (tt[d]||[])[i];
            if(!cell) return '<td>—</td>';
            if(cell.free) return `<td><span class="pill gray">Break</span></td>`;
            return `<td><div style="font-weight:600; font-size:12.5px;">${cell.subject}</div><div style="font-size:11px; color:var(--slate);">${cell.cls}</div></td>`;
          }).join('')}
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  ${st.subjectChanges.length ? `
  <div class="card" style="margin-top:16px;">
    <div class="section-title" style="margin-bottom:10px;">Subject Change Log</div>
    <table>
      <thead><tr><th>Date</th><th>Day/Period</th><th>Class</th><th>Old Subject</th><th>New Subject</th><th>Reason</th></tr></thead>
      <tbody>
      ${st.subjectChanges.map(sc=>`<tr><td>${niceDate(sc.effectiveDate)}</td><td>${sc.day} · ${sc.period}</td><td>${sc.cls}</td><td>${pill('gray',sc.oldSubject)}</td><td>${pill('orange',sc.newSubject)}</td><td style="font-size:12px;">${sc.reason}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>` : ''}
  `;
};
function openModifySubject(){
  const st = App.state;
  const tt = st.timetable || {};
  App.openModal(`
    <div class="modal-head"><h3>Modify Subject</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Day</label><select id="msDay">${WEEKDAYS.map(d=>`<option>${d}</option>`).join('')}</select></div>
        <div class="field"><label>Period</label><select id="msPeriod">${getPeriods().map((p,i)=>`<option value="${i}">${p}</option>`).join('')}</select></div>
        <div class="field"><label>Effective Date</label><input id="msDate" type="date" value="${todayStr()}"></div>
        <div class="field"><label>New Subject</label><select id="msSubject">${SUBJECTS.map(s=>`<option>${s}</option>`).join('')}</select></div>
        <div class="field full"><label>Reason (optional)</label><input id="msReason" placeholder="e.g. Covering for another teacher"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitModifySubject()">Save Change</button>
    </div>`);
}
function submitModifySubject(){
  const st = App.state;
  const day = document.getElementById('msDay').value;
  const periodIdx = Number(document.getElementById('msPeriod').value);
  const newSubject = document.getElementById('msSubject').value;
  const effectiveDate = document.getElementById('msDate').value;
  const reason = document.getElementById('msReason').value.trim() || '—';
  const cell = (st.timetable[day]||[])[periodIdx];
  if(!cell || cell.free){ App.toast('That period is a break — pick a teaching period','⚠️'); return; }
  const oldSubject = cell.subject;
  cell.subject = newSubject;
  st.subjectChanges.unshift({id:uid('SC'), day, period:getPeriods()[periodIdx], cls:cell.cls, oldSubject, newSubject, effectiveDate, reason});
  App.persist();
  App.closeModal();
  App.toast('Subject updated for '+day+' 🔁');
  Views.timetable();
}

/* ---------- Lesson Planner ---------- */
Views.lessonplanner = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Lesson Plans (${st.lessonPlans.length})</div><div class="section-sub" style="margin-bottom:0;">Topics, objectives & resources by date</div></div>
      <button class="btn btn-sm btn-orange" onclick="openAddLessonPlan()">+ New Lesson Plan</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
    ${st.lessonPlans.map(lp=>`
      <div style="border:1px solid var(--line); border-radius:12px; padding:14px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
          <div><div style="font-weight:700; font-size:13.5px;">${lp.topic}</div><div style="font-size:11.5px; color:var(--slate);">${lp.cls} · ${lp.subject} · ${niceDate(lp.date)}</div></div>
          ${lp.status==='completed'?pill('green','Completed'):pill('yellow','Planned')}
        </div>
        <div style="font-size:12.5px; color:var(--slate); margin-bottom:4px;"><b style="color:var(--ink);">Objective:</b> ${lp.objective}</div>
        <div style="font-size:12.5px; color:var(--slate);"><b style="color:var(--ink);">Resources:</b> ${lp.resources}</div>
      </div>`).join('')}
    ${!st.lessonPlans.length ? `<div class="empty-state"><div class="em-ic">📋</div><h3>No lesson plans yet</h3></div>` : ''}
    </div>
  </div>`;
};
function openAddLessonPlan(){
  const dt = App.state.teachers[0];
  App.openModal(`
    <div class="modal-head"><h3>New Lesson Plan</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Class</label><select id="lpClass">${(dt?dt.classes:CLASSES).map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Subject</label><select id="lpSubject">${SUBJECTS.map(s=>`<option ${dt&&s===dt.subject?'selected':''}>${s}</option>`).join('')}</select></div>
        <div class="field"><label>Date</label><input id="lpDate" type="date" value="${todayStr()}"></div>
        <div class="field"><label>Resources</label><input id="lpResources" placeholder="e.g. Textbook, whiteboard"></div>
        <div class="field full"><label>Topic</label><input id="lpTopic" placeholder="e.g. Introduction to Fractions"></div>
        <div class="field full"><label>Learning Objective</label><textarea id="lpObjective" rows="3" style="width:100%; padding:11px 13px; border:1.5px solid var(--line); border-radius:9px; font-size:14px;" placeholder="What should students be able to do by the end of the lesson?"></textarea></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitLessonPlan()">Save Lesson Plan</button>
    </div>`);
}
function submitLessonPlan(){
  const topic = document.getElementById('lpTopic').value.trim() || 'Untitled Lesson';
  App.state.lessonPlans.unshift({
    id:uid('LP'), date:document.getElementById('lpDate').value, cls:document.getElementById('lpClass').value,
    subject:document.getElementById('lpSubject').value, topic,
    objective: document.getElementById('lpObjective').value.trim() || 'Students will understand and apply the concept.',
    resources: document.getElementById('lpResources').value.trim() || 'Textbook, whiteboard',
    status:'planned',
  });
  App.persist();
  App.closeModal();
  App.toast('Lesson plan saved 📋');
  Views.lessonplanner();
}

/* ---------- Weekly Test Report ---------- */
Views.weeklytestreport = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const byClass = {};
  st.weeklyTests.forEach(t=>{ const k=t.cls+'-'+t.section; (byClass[k]=byClass[k]||[]).push(t); });
  c.innerHTML = `
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title" style="margin-bottom:10px;">Weekly Test Performance by Class</div>
    <canvas id="wtrChart" height="90"></canvas>
  </div>
  <div class="card">
    <div class="section-title" style="margin-bottom:10px;">This Week's Tests</div>
    <table>
      <thead><tr><th>Class</th><th>Subject</th><th>Week Of</th><th>Average</th><th>Status</th></tr></thead>
      <tbody>
      ${st.weeklyTests.length ? st.weeklyTests.map(t=>`
        <tr class="hoverable">
          <td>${t.cls}-${t.section}</td><td>${t.subject}</td><td>${niceDate(t.weekOf)}</td>
          <td><div style="display:flex; align-items:center; gap:8px;"><div class="progress-track" style="width:70px;"><div class="progress-fill" style="width:${Math.round(t.avgMarks/t.maxMarks*100)}%;"></div></div><span style="font-size:11.5px;">${Math.round(t.avgMarks/t.maxMarks*100)}%</span></div></td>
          <td>${t.status==='graded'?pill('green','Graded'):pill('yellow','Pending')}</td>
        </tr>`).join('') : `<tr><td colspan="5"><div class="empty-state"><div class="em-ic">🧪</div><p>No weekly tests yet</p></div></td></tr>`}
      </tbody>
    </table>
  </div>`;
  const labels = Object.keys(byClass);
  new Chart(document.getElementById('wtrChart'), {
    type:'bar',
    data:{labels, datasets:[{label:'Avg %', data:labels.map(k=>{ const arr=byClass[k]; return Math.round(arr.reduce((a,t)=>a+t.avgMarks/t.maxMarks*100,0)/arr.length); }), backgroundColor:'#ea580c', borderRadius:6}]},
    options:{plugins:{legend:{display:false}}, scales:{y:{min:0,max:100,ticks:{callback:v=>v+'%'}}, x:{grid:{display:false}}}}
  });
};

/* ---------- Robotic Project ---------- */
Views.roboticproject = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Robotics & STEM Projects (${st.roboticProjects.length})</div><div class="section-sub" style="margin-bottom:0;">Club project tracker</div></div>
      <button class="btn btn-sm btn-orange" onclick="openAddRoboticProject()">+ New Project</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
    ${st.roboticProjects.map(p=>`
      <div style="border:1px solid var(--line); border-radius:12px; padding:14px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
          <div><div style="font-weight:700; font-size:13.5px;">${p.title}</div><div style="font-size:11.5px; color:var(--slate);">${p.cls} · Team: ${p.members.join(', ')} · Due ${niceDate(p.deadline)}</div></div>
          ${pill(p.status==='Completed'?'green':p.status==='Testing'?'blue':p.status==='In Progress'?'yellow':'gray', p.status)}
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${p.progress}%;"></div></div>
        <div style="font-size:11px; color:var(--slate); margin-top:4px; text-align:right;">${p.progress}% complete</div>
      </div>`).join('')}
    </div>
  </div>`;
};
function openAddRoboticProject(){
  App.openModal(`
    <div class="modal-head"><h3>New Robotics Project</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field full"><label>Project Title</label><input id="rpTitle" placeholder="e.g. Line-Following Robot"></div>
        <div class="field"><label>Class</label><select id="rpClass">${CLASSES.slice(5).map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Deadline</label><input id="rpDeadline" type="date" value="${fmtDate(new Date(Date.now()+14*86400000))}"></div>
        <div class="field full"><label>Team Members (comma separated)</label><input id="rpMembers" placeholder="e.g. Hamza, Zain, Areeba"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitRoboticProject()">Save Project</button>
    </div>`);
}
function submitRoboticProject(){
  const title = document.getElementById('rpTitle').value.trim() || 'Untitled Project';
  const members = document.getElementById('rpMembers').value.split(',').map(s=>s.trim()).filter(Boolean);
  App.state.roboticProjects.unshift({id:uid('RP'), title, cls:document.getElementById('rpClass').value, members: members.length?members:['Unassigned'], status:'Idea', deadline:document.getElementById('rpDeadline').value, progress:5});
  App.persist();
  App.closeModal();
  App.toast('Robotics project added 🤖');
  Views.roboticproject();
}

/* ---------- Weekly Activity Submission ---------- */
Views.activitysubmission = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const hasPending = st.activityLog.some(a=>a.status==='pending');
  c.innerHTML = `
  <div class="card" style="margin-bottom:16px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
    <div style="font-size:13px; color:var(--slate);">Submit a short report of your week — lessons covered, homework given, tests conducted, and anything the Principal should know.</div>
    <button class="btn btn-sm btn-orange" onclick="openSubmitActivity()">+ Submit This Week</button>
  </div>
  <div style="display:flex; flex-direction:column; gap:12px;">
  ${st.activityLog.map(a=>`
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">Week of ${niceDate(a.weekOf)}</div></div>
        ${a.status==='reviewed'?pill('green','Reviewed'):pill('yellow','Pending Review')}
      </div>
      <div class="form-grid" style="font-size:12.5px;">
        ${infoRow('Lessons Covered', a.lessonsCovered)}
        ${infoRow('Homework Given', a.homeworkGiven)}
        ${infoRow('Tests Conducted', a.testsConducted)}
        ${infoRow('Student Performance', a.studentPerformance, true)}
        ${infoRow('Activities Completed', a.activitiesCompleted, true)}
        ${infoRow('Problems Faced', a.problemsFaced)}
        ${infoRow('Requirements', a.requirements)}
      </div>
      ${a.principalRemarks ? `<div style="margin-top:10px; padding:10px 12px; background:var(--orange-50); border-radius:9px; font-size:12.5px;"><b>Principal's remarks:</b> ${a.principalRemarks}</div>` : ''}
    </div>`).join('')}
  </div>`;
};
function openSubmitActivity(){
  const dt = App.state.teachers[0];
  App.openModal(`
    <div class="modal-head"><h3>Weekly Activity Submission</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field full"><label>Lessons Covered</label><input id="asLessons" placeholder="e.g. 10 lessons across ${dt?dt.classes.join(', '):'your classes'}"></div>
        <div class="field"><label>Homework Given</label><input id="asHomework" placeholder="e.g. 4 assignments"></div>
        <div class="field"><label>Tests Conducted</label><input id="asTests" placeholder="e.g. 2 daily tests"></div>
        <div class="field full"><label>Student Performance</label><input id="asPerf" placeholder="Brief note on how students are doing"></div>
        <div class="field full"><label>Activities Completed</label><input id="asActivities" placeholder="e.g. Group project presentations"></div>
        <div class="field"><label>Problems Faced</label><input id="asProblems" placeholder="e.g. None this week"></div>
        <div class="field"><label>Requirements</label><input id="asReq" placeholder="e.g. More worksheets"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitActivity()">Submit to Principal</button>
    </div>`);
}
function submitActivity(){
  App.state.activityLog.unshift({
    id:uid('AC'), weekOf: todayStr(),
    lessonsCovered: document.getElementById('asLessons').value.trim() || '—',
    homeworkGiven: document.getElementById('asHomework').value.trim() || '—',
    testsConducted: document.getElementById('asTests').value.trim() || '—',
    studentPerformance: document.getElementById('asPerf').value.trim() || '—',
    activitiesCompleted: document.getElementById('asActivities').value.trim() || '—',
    problemsFaced: document.getElementById('asProblems').value.trim() || 'None',
    requirements: document.getElementById('asReq').value.trim() || 'None',
    status:'pending', principalRemarks:'',
  });
  App.persist();
  App.closeModal();
  App.toast('Weekly activity submitted to Principal ✅');
  Views.activitysubmission();
}

/* ---------- My Monthly Attendance (Teacher) ---------- */
Views.myattendance = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const days = st.teacherMonthlyAttendance || [];
  const present = days.filter(d=>d.status==='present').length;
  const late = days.filter(d=>d.status==='late').length;
  const leave = days.filter(d=>d.status==='leave').length;
  const pct = days.length? Math.round(present/days.length*100):0;
  c.innerHTML = `
  <div class="grid two-col">
    <div class="card">
      <div class="section-title" style="margin-bottom:10px;">July 2026 — Day by Day</div>
      <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:6px;">
        ${days.map(d=>`<div style="text-align:center; padding:8px 4px; border-radius:8px; background:${d.status==='present'?'var(--success-bg)':d.status==='late'?'var(--warn-bg)':'var(--info-bg)'};">
          <div style="font-size:10px; color:var(--slate);">${niceDate(d.date).split(' ').slice(1).join(' ')}</div>
          <div style="font-size:11px; font-weight:700; text-transform:capitalize; color:${d.status==='present'?'var(--success)':d.status==='late'?'#a16207':'var(--info)'};">${d.status}</div>
        </div>`).join('')}
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="card" style="text-align:center;">
        ${flameRing(pct,88)}
        <div style="margin-top:10px; font-size:13px; color:var(--slate);">Attendance this month</div>
      </div>
      <div class="card">
        <div class="section-title" style="margin-bottom:10px;">Summary</div>
        <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--line); font-size:13px;"><span>Present</span><b>${present} days</b></div>
        <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--line); font-size:13px;"><span>Late</span><b>${late} days</b></div>
        <div style="display:flex; justify-content:space-between; padding:6px 0; font-size:13px;"><span>Leave</span><b>${leave} days</b></div>
      </div>
    </div>
  </div>`;
};

/* ---------- Fees ---------- */
function barcodeBlock(size){
  size = size||44;
  return `<div style="width:${size}px;height:${size}px;background:repeating-linear-gradient(90deg,#1c1917,#1c1917 2px,#fff 2px,#fff 4px); border-radius:4px; flex-shrink:0;"></div>`;
}
function qrBlock(size, data){
  // Decorative QR-style pattern (deterministic from `data`) — not a scannable code, since generating a
  // real one needs an external library/API. Visually communicates "this receipt has a QR code" for print layout.
  size = size||56;
  const cells = 7;
  const h = hashCode(String(data||'QR'));
  let rects = '';
  for(let r=0;r<cells;r++){
    for(let cIdx=0;cIdx<cells;cIdx++){
      const on = (h >> ((r*cells+cIdx)%30)) & 1;
      const isFinder = (r<2&&cIdx<2)||(r<2&&cIdx>cells-3)||(r>cells-3&&cIdx<2);
      if(on || isFinder) rects += `<rect x="${cIdx}" y="${r}" width="1" height="1" fill="#1c1917"/>`;
    }
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${cells} ${cells}" style="flex-shrink:0; background:#fff; border:1px solid var(--line); border-radius:4px;">${rects}</svg>`;
}
Views.fees = function(){
  const c = document.getElementById('content');
  const st = App.state;
  if(!['admin','principal','viceprincipal','accountant','parent'].includes(st.role)){
    c.innerHTML = `<div class="empty-state"><div class="em-ic">🔒</div><h3>Restricted area</h3><p>Fee collection data is only visible to Super Admin, Principal, Vice Principal and Accountant.</p></div>`;
    return;
  }
  const isParent = st.role==='parent';
  const canGenerate = ['admin','principal','viceprincipal','accountant'].includes(st.role);
  const currentMonth = st.feeMonths[st.feeMonths.length-1];
  const scopedFees = isParent ? st.fees.filter(f=>f.studentId===st.students[0]?.id) : st.fees.filter(f=>f.month===currentMonth);
  const collected = scopedFees.filter(f=>f.status==='paid').reduce((a,f)=>a+f.amount-f.discount,0);
  const pending = scopedFees.filter(f=>f.status==='pending').reduce((a,f)=>a+f.amount+f.fine,0);
  const todayIncome = st.fees.reduce((a,f)=>a + (f.payments||[]).filter(p=>p.date===todayStr()).reduce((x,p)=>x+p.amount,0), 0);
  const todayExpense = st.expenses.filter(e=>e.date===todayStr()).reduce((a,e)=>a+e.amount,0);
  const unpaidCount = st.fees.filter(f=>f.status==='pending').length;
  const filterClass = App._feeClassFilter || 'All';
  const filteredFees = filterClass==='All' ? scopedFees : scopedFees.filter(f=>{ const s=App.student(f.studentId); return s && s.cls===filterClass; });
  const feeTab = App._feeTab || 'challans';

  c.innerHTML = `
  ${canGenerate && !isParent ? `<div class="grid stat-cards" style="margin-bottom:14px;">
    ${statCard('💵',"Today's Income", money(todayIncome), 'Payments received today','up','')}
    ${statCard('📤',"Today's Expense", money(todayExpense), 'Logged today','down','')}
    ${statCard('🧾','Unpaid Invoices', unpaidCount, 'Across all months','down','')}
    ${statCard('⚖️','Balance Today', money(todayIncome-todayExpense), 'Income − Expense','flat','')}
  </div>` : ''}
  <div class="grid stat-cards" style="margin-bottom:18px;">
    ${isParent ? statCard('💰','Amount Due', money(pending), pending>0?'Due 10th of the month':'All caught up','flat','') : statCard('💰',`Collected (${currentMonth})`, money(collected),'From '+scopedFees.filter(f=>f.status==='paid').length+' students','up','')}
    ${isParent ? statCard('✅','Amount Paid', money(collected),'This term so far','up','') : statCard('⏳','Pending', money(pending), scopedFees.filter(f=>f.status==='pending').length+' students due','down','')}
    ${statCard('🎁','Discounts Given', money(scopedFees.reduce((a,f)=>a+f.discount,0)),'Scholarships & waivers','flat','')}
    ${statCard('⚠️','Fines Applied', money(scopedFees.reduce((a,f)=>a+f.fine,0)),'Late payment charges','flat','')}
  </div>
  ${canGenerate ? `<div class="card" style="margin-bottom:16px; display:flex; flex-wrap:wrap; gap:8px;">
    <button class="btn btn-sm btn-orange" onclick="generateNextMonthChallans()">📅 Generate Next Month Challans</button>
    <button class="btn btn-sm btn-outline" onclick="openBulkMonthlyFee()">💵 Set Monthly Fee (by Class)</button>
    <button class="btn btn-sm btn-outline" onclick="openCustomFeeGenerator()">➕ Custom Fee</button>
    <button class="btn btn-sm btn-outline" onclick="openLogExpense()">📤 Log Expense</button>
    <button class="btn btn-sm btn-outline" onclick="quickPayAll('${filterClass}')">⚡ Pay All ${filterClass==='All'?'(this view)':'— '+filterClass}</button>
    <button class="btn btn-sm btn-outline" onclick="generateClassReceipts('${filterClass}')">🖨️ Generate Fee Slips (Class-wise)</button>
  </div>` : ''}
  ${!isParent ? `<div class="tag-input-row" style="margin-bottom:14px;">
    <button class="chip ${feeTab==='challans'?'active':''}" onclick="App._feeTab='challans'; Views.fees();">🧾 Challans</button>
    <button class="chip ${feeTab==='history'?'active':''}" onclick="App._feeTab='history'; Views.fees();">📜 Paid History</button>
    <button class="chip ${feeTab==='duereport'?'active':''}" onclick="App._feeTab='duereport'; Views.fees();">📋 Due Report</button>
  </div>` : ''}
  <div id="feeTabContent"></div>
  `;
  const tabHost = document.getElementById('feeTabContent');
  if(isParent || feeTab==='challans'){
    tabHost.innerHTML = renderFeeChallansTable(filteredFees, filterClass, isParent);
  } else if(feeTab==='history'){
    tabHost.innerHTML = renderPaidHistory(filterClass);
  } else if(feeTab==='duereport'){
    tabHost.innerHTML = renderDueReport(filterClass);
  }
};
function renderPaidHistory(filterClass){
  const st = App.state;
  const rows = [];
  st.fees.forEach(f=>{
    const s = App.student(f.studentId);
    if(!s) return;
    if(filterClass!=='All' && s.cls!==filterClass) return;
    (f.payments||[]).forEach(p=>{
      rows.push({date:p.date, name:s.name, cls:s.cls, section:s.section, amount:p.amount, receivedBy:p.receivedBy||'Admin', challanNo:f.challanNo, month:f.month});
    });
  });
  rows.sort((a,b)=> b.date.localeCompare(a.date));
  const total = rows.reduce((a,r)=>a+r.amount,0);
  return `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">📜 Paid History${filterClass!=='All'?' — '+filterClass:''}</div><div class="section-sub" style="margin-bottom:0;">${rows.length} payment${rows.length!==1?'s':''} · ${money(total)} total collected</div></div>
      <button class="btn btn-sm btn-outline" onclick="printPaidHistory('${filterClass}')">🖨️ Print</button>
    </div>
    <table>
      <thead><tr><th>Date</th><th>Student</th><th>Class</th><th>Month</th><th>Challan</th><th>Amount</th><th>Received By</th></tr></thead>
      <tbody>
      ${rows.length ? rows.slice(0,80).map(r=>`
        <tr class="hoverable">
          <td>${niceDate(r.date)}</td><td>${r.name}</td><td>${r.cls}-${r.section}</td><td>${r.month}</td>
          <td style="font-family:var(--font-mono); font-size:12px;">${r.challanNo}</td>
          <td style="font-weight:700; color:var(--success);">${money(r.amount)}</td>
          <td>${r.receivedBy}</td>
        </tr>`).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">📜</div><p>No payments recorded yet</p></div></td></tr>`}
      </tbody>
    </table>
  </div>`;
}
function printPaidHistory(filterClass){
  const st = App.state;
  const rows = [];
  st.fees.forEach(f=>{
    const s = App.student(f.studentId);
    if(!s) return;
    if(filterClass!=='All' && s.cls!==filterClass) return;
    (f.payments||[]).forEach(p=>{ rows.push({date:p.date, name:s.name, cls:s.cls, section:s.section, amount:p.amount, receivedBy:p.receivedBy||'Admin', challanNo:f.challanNo}); });
  });
  rows.sort((a,b)=> b.date.localeCompare(a.date));
  const total = rows.reduce((a,r)=>a+r.amount,0);
  App.openModal(`
    <div class="modal-head no-print"><h3>Print Paid History</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; border-bottom:2px solid var(--orange-600); padding-bottom:10px;">
          <img src="{{EMBLEM}}" style="height:34px;">
          <div><div style="font-weight:800;">Leads School System — Paid History${filterClass!=='All'?' — '+filterClass:''}</div><div style="font-size:11px; color:var(--slate);">Generated ${niceDate(todayStr())}</div></div>
        </div>
        <table style="font-size:12px;">
          <thead><tr><th>Date</th><th>Student</th><th>Class</th><th>Challan</th><th>Amount</th><th>Received By</th></tr></thead>
          <tbody>${rows.map(r=>`<tr><td>${niceDate(r.date)}</td><td>${r.name}</td><td>${r.cls}-${r.section}</td><td>${r.challanNo}</td><td>${money(r.amount)}</td><td>${r.receivedBy}</td></tr>`).join('')}</tbody>
        </table>
        <div style="margin-top:10px; font-weight:700; text-align:right;">Total: ${money(total)}</div>
      </div>
    </div>
    <div class="modal-foot no-print"><button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button><button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print / Save as PDF</button></div>`);
}
function daysOverdue(dueDate){
  const due = new Date(dueDate+'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.round((today-due)/86400000);
}
function renderDueReport(filterClass){
  const st = App.state;
  const dueList = st.fees.filter(f=>feeBalance(f)>0).map(f=>{
    const s = App.student(f.studentId);
    return s ? {f, s, overdue: daysOverdue(f.dueDate)} : null;
  }).filter(Boolean).filter(x=>filterClass==='All' || x.s.cls===filterClass)
    .sort((a,b)=> b.overdue-a.overdue);
  const totalDue = dueList.reduce((a,x)=>a+feeBalance(x.f),0);
  return `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">📋 Due Report${filterClass!=='All'?' — '+filterClass:''}</div><div class="section-sub" style="margin-bottom:0;">${dueList.length} student${dueList.length!==1?'s':''} owing ${money(totalDue)}</div></div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-sm btn-outline" onclick="printDueReport('${filterClass}')">🖨️ Print</button>
        ${dueList.length ? `<button class="btn btn-sm btn-orange" onclick='sendDueReportReminders(${JSON.stringify(filterClass)})'>📤 Remind All</button>` : ''}
      </div>
    </div>
    <table>
      <thead><tr><th>Student</th><th>Class</th><th>Month</th><th>Balance</th><th>Due Date</th><th>Overdue</th><th></th></tr></thead>
      <tbody>
      ${dueList.length ? dueList.map(({f,s,overdue})=>`
        <tr class="hoverable">
          <td>${s.name}</td><td>${s.cls}-${s.section}</td><td>${f.month}</td>
          <td style="font-weight:700; color:var(--danger);">${money(feeBalance(f))}</td>
          <td>${niceDate(f.dueDate)}</td>
          <td>${overdue>0?pill('red',overdue+'d overdue'):pill('yellow','due soon')}</td>
          <td style="white-space:nowrap;">
            <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="openTakePayment('${f.id}')">💳</button>
            ${waButton(s.guardianPhone, feeReminderMessage(s, feeBalance(f), f.month, f.dueDate), '')}
          </td>
        </tr>`).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">🎉</div><p>No outstanding dues${filterClass!=='All'?' in '+filterClass:''}</p></div></td></tr>`}
      </tbody>
    </table>
  </div>`;
}
function printDueReport(filterClass){
  const st = App.state;
  const dueList = st.fees.filter(f=>feeBalance(f)>0).map(f=>{
    const s = App.student(f.studentId);
    return s ? {f, s, overdue: daysOverdue(f.dueDate)} : null;
  }).filter(Boolean).filter(x=>filterClass==='All' || x.s.cls===filterClass).sort((a,b)=> b.overdue-a.overdue);
  const totalDue = dueList.reduce((a,x)=>a+feeBalance(x.f),0);
  App.openModal(`
    <div class="modal-head no-print"><h3>Print Due Report</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; border-bottom:2px solid var(--orange-600); padding-bottom:10px;">
          <img src="{{EMBLEM}}" style="height:34px;">
          <div><div style="font-weight:800;">Leads School System — Due Report${filterClass!=='All'?' — '+filterClass:''}</div><div style="font-size:11px; color:var(--slate);">Generated ${niceDate(todayStr())}</div></div>
        </div>
        <table style="font-size:12px;">
          <thead><tr><th>Student</th><th>Class</th><th>Month</th><th>Balance</th><th>Due Date</th><th>Overdue</th></tr></thead>
          <tbody>${dueList.map(({f,s,overdue})=>`<tr><td>${s.name}</td><td>${s.cls}-${s.section}</td><td>${f.month}</td><td>${money(feeBalance(f))}</td><td>${niceDate(f.dueDate)}</td><td>${overdue>0?overdue+'d':'—'}</td></tr>`).join('')}</tbody>
        </table>
        <div style="margin-top:10px; font-weight:700; text-align:right;">Total Outstanding: ${money(totalDue)}</div>
      </div>
    </div>
    <div class="modal-foot no-print"><button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button><button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print / Save as PDF</button></div>`);
}
function sendDueReportReminders(filterClass){
  const st = App.state;
  const dueList = st.fees.filter(f=>feeBalance(f)>0).map(f=>{
    const s = App.student(f.studentId);
    return s ? {f,s} : null;
  }).filter(Boolean).filter(x=>filterClass==='All' || x.s.cls===filterClass);
  if(!dueList.length){ App.toast('No outstanding dues to remind','ℹ️'); return; }
  openBatchSend('Due Reminders'+(filterClass!=='All'?' — '+filterClass:''),
    dueList.map(({f,s})=>({name:s.parentName, phone:s.guardianPhone, message:feeReminderMessage(s, feeBalance(f), f.month, f.dueDate)})),
    'Fee Defaulter Reminder');
}
function renderFeeChallansTable(filteredFees, filterClass, isParent){
  const st = App.state;
  return `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">${isParent?"Your Child's Fee Details":'Fee Challans — '+st.feeMonths[st.feeMonths.length-1]}</div><div class="section-sub" style="margin-bottom:0;">All amounts in PKR</div></div>
    </div>
    ${!isParent ? `<div class="tag-input-row">${['All',...CLASSES].map(cl=>`<button class="chip ${cl===filterClass?'active':''}" onclick="App._feeClassFilter='${cl}'; Views.fees();">${cl}</button>`).join('')}</div>` : ''}
    ${!isParent && st.feeMonths.length>1 ? `<div style="font-size:11.5px; color:var(--slate); margin-bottom:10px;">Showing latest month · ${st.feeMonths.length} months generated so far (${st.feeMonths.join(', ')})</div>` : ''}
    <table>
      <thead><tr><th>Student</th><th>Fee Type</th><th>Amount</th><th>Balance</th><th>Due Date</th><th>Status</th><th></th></tr></thead>
      <tbody>
      ${filteredFees.slice(0,40).map(f=>{
        const s = App.student(f.studentId); if(!s) return '';
        return `<tr class="hoverable">
          <td>${s.name}<br><span style="font-size:11px; color:var(--slate);">${s.cls}-${s.section}</span></td>
          <td style="font-size:12px;">${f.feeType||'Monthly Tuition'}</td>
          <td>${money(feeTotal(f))}</td>
          <td style="font-weight:700; color:${feeBalance(f)>0?'var(--danger)':'var(--success)'};">${money(feeBalance(f))}</td>
          <td>${niceDate(f.dueDate)}</td>
          <td>${f.status==='paid'?pill('green','Paid'):feeBalance(f)<feeTotal(f)?pill('yellow','Partial'):pill('red','Unpaid')}</td>
          <td style="white-space:nowrap;">
            <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="viewChallan('${f.id}')">📄</button>
            ${f.status==='paid' ? `<button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="viewReceipt('${f.id}')">🧾</button>` : ''}
            ${isParent ? (f.status==='pending' ? `<button class="btn-sm btn-orange" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="App.toast('Redirecting to online payment gateway 💳')">Pay Now</button>` : '') : ''}
            ${!isParent && feeBalance(f)>0 ? `<button class="btn-sm btn-orange" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="openTakePayment('${f.id}')">💳 Payment</button>` : ''}
            ${!isParent ? waButton(s.guardianPhone, feeBalance(f)>0 ? feeReminderMessage(s, feeBalance(f), f.month, f.dueDate) : `Dear ${s.parentName}, thank you — ${s.name}'s fee is fully paid.`, '') : ''}
            ${!isParent ? `<button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="editFeeVoucher('${f.id}')">✏️</button> <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="openSetMonthlyFee('${s.id}')" title="Edit recurring monthly fee">💵</button> <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px; color:var(--danger);" onclick="deleteFeeVoucher('${f.id}')">🗑️</button>` : ''}
          </td>
        </tr>`;
      }).join('')}
      ${!filteredFees.length ? `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">💰</div><p>No challans for this view yet</p></div></td></tr>` : ''}
      </tbody>
    </table>
  </div>`;
}
function sendPaymentThankYou(f, s, amountPaid, receivedBy){
  const st = App.state;
  st.whatsapp.unshift({id:uid('WA'), to:s.parentName, phone:s.guardianPhone, from:st.senderNumber||undefined, type:'Payment Confirmation', msg:`Thank you for fee submission. ${s.name} has paid amount PKR ${amountPaid.toLocaleString('en-PK')} on ${niceDate(todayStr())}, received by ${receivedBy||'Admin'}.`, time:'Just now', status:'Delivered'});
}
function openTakePayment(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  const s = App.student(f.studentId);
  if(!f||!s) return;
  const due = f.amount;
  const balance = feeBalance(f);
  App.openModal(`
    <div class="modal-head"><h3>💳 Fee Collection — ${s.name}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid" style="font-size:12.5px; margin-bottom:14px;">
        ${infoRow('Receipt No.', '(auto on save)')} ${infoRow('Student', s.name)}
        ${infoRow('Class', s.cls)} ${infoRow('Section', s.section)}
        ${infoRow('Month', f.month)} ${infoRow('Due Amount', money(due))}
        ${infoRow('Discount', money(f.discount))} ${infoRow('Fine', money(f.fine))}
      </div>
      <div style="background:var(--orange-50); border-radius:9px; padding:10px 12px; margin-bottom:14px; display:flex; justify-content:space-between; font-size:13px;">
        <span>Total (Due + Fine − Discount)</span><b id="payTotalDisplay">${money(feeTotal(f))}</b>
      </div>
      <div class="form-grid">
        <div class="field"><label>Amount Paid (PKR)</label><input id="payAmount" type="number" value="${balance}" min="1" max="${balance}" oninput="updatePayBalance('${feeId}')"></div>
        <div class="field"><label>Remaining Balance</label><input id="payBalanceDisplay" value="${money(0)}" disabled style="background:var(--orange-50); font-weight:700;"></div>
        <div class="field"><label>Payment Method</label><select id="payMethod" onchange="togglePayMethodFields()">${PAYMENT_METHODS.map(m=>`<option>${m}</option>`).join('')}</select></div>
        <div class="field"><label>Payment Date</label><input id="payDate" type="date" value="${todayStr()}"></div>
        <div class="field" id="payBankRow" style="display:none;"><label>Bank Name</label><input id="payBank" placeholder="e.g. HBL, Meezan"></div>
        <div class="field" id="payTxnRow" style="display:none;"><label>Transaction ID</label><input id="payTxnId" placeholder="e.g. TXN123456"></div>
        <div class="field"><label>Received By</label><input id="payReceivedBy" placeholder="e.g. Admin, Accountant name" value="Admin"></div>
        <div class="field full"><label>Notes</label><input id="payNotes" placeholder="Optional note"></div>
      </div>
      <div style="font-size:11.5px; color:var(--slate); margin-top:6px;">Paying less than the balance records a <b>partial payment</b> — the remaining balance stays on this voucher.</div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitFeePayment('${feeId}')">Confirm Payment</button>
    </div>`);
  updatePayBalance(feeId);
  togglePayMethodFields();
}
function updatePayBalance(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  const amountEl = document.getElementById('payAmount');
  const balEl = document.getElementById('payBalanceDisplay');
  if(!f||!amountEl||!balEl) return;
  const paid = Math.max(0, Number(amountEl.value)||0);
  const remaining = Math.max(0, feeBalance(f)-paid);
  balEl.value = money(remaining);
}
function togglePayMethodFields(){
  const method = document.getElementById('payMethod')?.value;
  const needsBank = ['Bank Transfer','Online Payment','Cheque'].includes(method);
  const needsTxn = ['Bank Transfer','Debit Card','Credit Card','Online Payment'].includes(method);
  const bankRow = document.getElementById('payBankRow'), txnRow = document.getElementById('payTxnRow');
  if(bankRow) bankRow.style.display = needsBank ? 'block' : 'none';
  if(txnRow) txnRow.style.display = needsTxn ? 'block' : 'none';
}
function submitFeePayment(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  const s = App.student(f.studentId);
  const amount = Math.min(feeBalance(f), Math.max(1, Number(document.getElementById('payAmount').value)||0));
  const receivedBy = document.getElementById('payReceivedBy').value.trim()||'Admin';
  const method = document.getElementById('payMethod').value;
  const bankName = document.getElementById('payBank')?.value.trim()||'';
  const transactionId = document.getElementById('payTxnId')?.value.trim()||'';
  const paymentDate = document.getElementById('payDate').value||todayStr();
  const notes = document.getElementById('payNotes').value.trim()||'';
  const receiptNo = 'RCT-'+randInt(100000,999999);
  if(!f.payments) f.payments=[];
  f.payments.push({date:paymentDate, amount, receivedBy, method, bankName, transactionId, notes, receiptNo});
  f.paidAmount = (f.paidAmount||0) + amount;
  f.receivedBy = receivedBy;
  f.paymentMethod = method;
  f.bankName = bankName;
  f.transactionId = transactionId;
  f.receiptNo = receiptNo;
  if(feeBalance(f)<=0){ f.status='paid'; f.paidDate=paymentDate; s.feeStatus='paid'; }
  sendPaymentThankYou(f, s, amount, receivedBy);
  App.persist();
  App.closeModal();
  App.toast(feeBalance(f)<=0 ? 'Payment complete — receipt ready 🧾' : `Partial payment recorded. Balance: ${money(feeBalance(f))}`);
  Views.fees();
}
function quickPayAll(clsFilter){
  const st = App.state;
  const targets = st.fees.filter(f=>{
    if(f.status==='paid') return false;
    const s = App.student(f.studentId);
    return s && (clsFilter==='All' || s.cls===clsFilter) && f.month===st.feeMonths[st.feeMonths.length-1];
  });
  if(!targets.length){ App.toast('Nothing pending to pay in this view','ℹ️'); return; }
  targets.forEach(f=>{
    const s = App.student(f.studentId);
    const balance = feeBalance(f);
    if(!f.payments) f.payments=[];
    f.payments.push({date:todayStr(), amount:balance, receivedBy:'Admin'});
    f.paidAmount = (f.paidAmount||0)+balance;
    f.status='paid'; f.paidDate=todayStr(); f.receivedBy='Admin';
    s.feeStatus='paid';
    sendPaymentThankYou(f, s, balance, 'Admin');
  });
  App.persist();
  App.toast(`${targets.length} voucher${targets.length!==1?'s':''} marked fully paid ⚡`);
  Views.fees();
}
function nextMonthLabel(label){
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const [monthName, year] = label.split(' ');
  let idx = months.indexOf(monthName);
  let y = Number(year);
  idx++; if(idx>11){idx=0; y++;}
  return {label: months[idx]+' '+y, monthNum: idx+1, year: y};
}
function generateNextMonthChallans(){
  const st = App.state;
  const currentMonth = st.feeMonths[st.feeMonths.length-1];
  const {label, monthNum, year} = nextMonthLabel(currentMonth);
  if(st.feeMonths.includes(label)){ App.toast(label+' challans already generated ✓','ℹ️'); return; }
  const dueDate = `${year}-${pad(monthNum)}-10`;
  st.students.forEach(s=>{
    st.fees.push(makeChallan(s, label, dueDate, true));
    s.feeStatus='pending';
  });
  st.feeMonths.push(label);
  st.whatsapp.unshift({id:uid('WA'), to:'All Parents', phone:'Broadcast', from:st.senderNumber||undefined, type:'Fee Reminder', msg:`New fee challans for ${label} have been generated. Amount is due by the 10th. Please check the parent portal for your child's challan.`, time:'Just now', status:'Delivered'});
  App.persist();
  App.toast(label+' challans generated for all students 📅');
  Views.fees();
}
function openCustomFeeGenerator(){
  App.openModal(`
    <div class="modal-head"><h3>Custom Fee Generator</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field full"><label>Fee Type</label><input id="cfType" placeholder="e.g. Annual Charges, Admission Fee, Exam Fee, Transport Fee"></div>
        <div class="field"><label>Class</label><select id="cfClass"><option value="All">All Classes</option>${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Amount (PKR)</label><input id="cfAmount" type="number" placeholder="e.g. 5000"></div>
        <div class="field full"><label>Due Date</label><input id="cfDue" type="date" value="${fmtDate(new Date(Date.now()+10*86400000))}"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitCustomFee()">Generate Vouchers</button>
    </div>`);
}
function submitCustomFee(){
  const st = App.state;
  const feeType = document.getElementById('cfType').value.trim() || 'Custom Fee';
  const cls = document.getElementById('cfClass').value;
  const amount = Number(document.getElementById('cfAmount').value)||0;
  const dueDate = document.getElementById('cfDue').value;
  if(!amount){ App.toast('Enter an amount','⚠️'); return; }
  const targets = st.students.filter(s=>cls==='All' || s.cls===cls);
  targets.forEach(s=>{
    st.fees.push({
      id: uid('FEE'), studentId:s.id, month: st.feeMonths[st.feeMonths.length-1], amount, discount:0, fine:0,
      status:'pending', dueDate, paidDate:null, challanNo:'CH-'+randInt(10000,99999),
      paidAmount:0, receivedBy:null, feeType, payments:[],
    });
  });
  App.persist();
  App.closeModal();
  App.toast(`${feeType} voucher generated for ${targets.length} student${targets.length!==1?'s':''} ➕`);
  Views.fees();
}
function openLogExpense(){
  App.openModal(`
    <div class="modal-head"><h3>Log Expense</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Category</label><select id="expCategory"><option>Utility Bills</option><option>Stationery</option><option>Maintenance</option><option>Salaries</option><option>Transport Fuel</option><option>Miscellaneous</option></select></div>
        <div class="field"><label>Amount (PKR)</label><input id="expAmount" type="number" placeholder="e.g. 5000"></div>
        <div class="field full"><label>Note</label><input id="expNote" placeholder="Brief description"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitExpense()">Log Expense</button>
    </div>`);
}
function submitExpense(){
  const amount = Number(document.getElementById('expAmount').value)||0;
  if(!amount){ App.toast('Enter an amount','⚠️'); return; }
  App.state.expenses.unshift({id:uid('EXP'), date:todayStr(), category:document.getElementById('expCategory').value, amount, note:document.getElementById('expNote').value.trim()||'—'});
  App.persist();
  App.closeModal();
  App.toast('Expense logged 📤');
  Views.fees();
}
function editFeeVoucher(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  App.openModal(`
    <div class="modal-head"><h3>Edit Voucher — ${f.challanNo}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Amount</label><input id="efAmount" type="number" value="${f.amount}"></div>
        <div class="field"><label>Discount</label><input id="efDiscount" type="number" value="${f.discount}"></div>
        <div class="field"><label>Fine</label><input id="efFine" type="number" value="${f.fine}"></div>
        <div class="field"><label>Due Date</label><input id="efDue" type="date" value="${f.dueDate}"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitEditFeeVoucher('${feeId}')">Save</button>
    </div>`);
}
function submitEditFeeVoucher(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  f.amount = Number(document.getElementById('efAmount').value)||f.amount;
  f.discount = Number(document.getElementById('efDiscount').value)||0;
  f.fine = Number(document.getElementById('efFine').value)||0;
  f.dueDate = document.getElementById('efDue').value;
  if(feeBalance(f)<=0 && f.paidAmount>0){ f.status='paid'; } else if(feeBalance(f)>0){ f.status='pending'; }
  App.persist();
  App.closeModal();
  App.toast('Voucher updated ✏️');
  Views.fees();
}
function deleteFeeVoucher(feeId){
  if(!confirm('Delete this fee voucher? This cannot be undone.')) return;
  App.state.fees = App.state.fees.filter(x=>x.id!==feeId);
  App.persist();
  App.toast('Voucher deleted 🗑️');
  Views.fees();
}
function openSetMonthlyFee(studentId){
  const s = App.student(studentId);
  if(!s) return;
  App.openModal(`
    <div class="modal-head"><h3>Monthly Fee — ${s.name}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div style="font-size:12.5px; color:var(--slate); margin-bottom:12px;">This is the recurring base amount used whenever a new month's challan is generated for ${s.name.split(' ')[0]}. It won't change challans already created — edit those individually via ✏️ on the voucher.</div>
      <div class="field"><label>Monthly Fee (PKR)</label><input id="smfAmount" type="number" value="${s.monthlyFee}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitSetMonthlyFee('${studentId}')">Save</button>
    </div>`);
}
function submitSetMonthlyFee(studentId){
  const s = App.student(studentId);
  const val = Number(document.getElementById('smfAmount').value);
  if(!val || val<0){ App.toast('Enter a valid amount','⚠️'); return; }
  s.monthlyFee = val;
  App.persist();
  App.closeModal();
  App.toast(`Monthly fee updated to ${money(val)} for ${s.name} ✅`);
  if(App._profileStudentId===studentId) Views.studentprofile(); else Views.fees();
}
function openBulkMonthlyFee(){
  App.openModal(`
    <div class="modal-head"><h3>Set Monthly Fee — By Class</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div style="font-size:12.5px; color:var(--slate); margin-bottom:12px;">Updates the recurring base fee for every student in a class at once. Only affects future challans — existing ones are untouched.</div>
      <div class="form-grid">
        <div class="field"><label>Class</label><select id="bmfClass">${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="field"><label>New Monthly Fee (PKR)</label><input id="bmfAmount" type="number" placeholder="e.g. 15000"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitBulkMonthlyFee()">Apply to Class</button>
    </div>`);
}
function submitBulkMonthlyFee(){
  const cls = document.getElementById('bmfClass').value;
  const val = Number(document.getElementById('bmfAmount').value);
  if(!val || val<0){ App.toast('Enter a valid amount','⚠️'); return; }
  const affected = App.state.students.filter(s=>s.cls===cls);
  affected.forEach(s=>{ s.monthlyFee = val; });
  App.persist();
  App.closeModal();
  App.toast(`Monthly fee set to ${money(val)} for ${affected.length} student${affected.length!==1?'s':''} in ${cls} ✅`);
  Views.fees();
}

/* ---------- Fee Structure (CRUD) ---------- */
Views.feestructure = function(){
  const c = document.getElementById('content');
  const st = App.state;
  if(!['admin','principal','viceprincipal','accountant'].includes(st.role)){
    c.innerHTML = `<div class="empty-state"><div class="em-ic">🔒</div><h3>Restricted area</h3><p>Fee structures can only be managed by school administration.</p></div>`;
    return;
  }
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Fee Structures (${st.feeStructures.length})</div><div class="section-sub" style="margin-bottom:0;">One structure per class — used when assigning fee plans and generating challans</div></div>
      <button class="btn btn-sm btn-orange" onclick="openFeeStructureForm()">+ New Structure</button>
    </div>
    <div style="overflow-x:auto;">
    <table>
      <thead><tr><th>Class</th><th>Tuition</th><th>Other Charges</th><th>Discount</th><th>Fine</th><th>Total</th><th>Effective</th><th></th></tr></thead>
      <tbody>
      ${st.feeStructures.map(fs=>{
        const otherSum = feeStructureTotal(fs) - fs.tuitionFee + fs.discount - fs.fine;
        return `<tr class="hoverable">
          <td style="font-weight:700;">${fs.cls}</td>
          <td>${money(fs.tuitionFee)}</td>
          <td>${money(otherSum)}</td>
          <td>${fs.discount?pill('green',money(fs.discount)):'—'}</td>
          <td>${fs.fine?pill('red',money(fs.fine)):'—'}</td>
          <td style="font-weight:700;">${money(feeStructureTotal(fs))}</td>
          <td style="font-size:12px;">${niceDate(fs.effectiveDate)}</td>
          <td style="white-space:nowrap;"><button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px;" onclick="openFeeStructureForm('${fs.id}')">✏️ Edit</button> <button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px; color:var(--danger);" onclick="deleteFeeStructure('${fs.id}')">🗑️</button></td>
        </tr>`;
      }).join('')}
      ${!st.feeStructures.length ? `<tr><td colspan="8"><div class="empty-state"><div class="em-ic">🧾</div><p>No fee structures yet</p></div></td></tr>` : ''}
      </tbody>
    </table>
    </div>
  </div>`;
};
function openFeeStructureForm(id){
  const st = App.state;
  const editing = id ? st.feeStructures.find(x=>x.id===id) : null;
  const usedClasses = st.feeStructures.filter(x=>x.id!==id).map(x=>x.cls);
  App._editingFeeStructureId = id||null;
  App.openModal(`
    <div class="modal-head"><h3>${editing?'Edit':'New'} Fee Structure</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="field"><label>Class</label><select id="fsClass">${CLASSES.map(c=>`<option ${editing&&editing.cls===c?'selected':''} ${!editing&&usedClasses.includes(c)?'disabled':''}>${c}</option>`).join('')}</select></div>
        <div class="field"><label>Effective Date</label><input id="fsEffective" type="date" value="${editing?editing.effectiveDate:todayStr()}"></div>
        ${FEE_STRUCTURE_FIELDS.map(([k,label])=>`<div class="field"><label>${label}</label><input id="fs_${k}" type="number" value="${editing?editing[k]:0}"></div>`).join('')}
        <div class="field"><label>Discount</label><input id="fs_discount" type="number" value="${editing?editing.discount:0}"></div>
        <div class="field"><label>Fine</label><input id="fs_fine" type="number" value="${editing?editing.fine:0}"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitFeeStructure()">Save Structure</button>
    </div>`);
}
function submitFeeStructure(){
  const st = App.state;
  const id = App._editingFeeStructureId;
  const cls = document.getElementById('fsClass').value;
  const data = { cls, effectiveDate: document.getElementById('fsEffective').value || todayStr(), discount: Number(document.getElementById('fs_discount').value)||0, fine: Number(document.getElementById('fs_fine').value)||0 };
  FEE_STRUCTURE_FIELDS.forEach(([k])=>{ data[k] = Number(document.getElementById('fs_'+k).value)||0; });
  if(id){
    const fs = st.feeStructures.find(x=>x.id===id);
    Object.assign(fs, data);
  } else {
    if(st.feeStructures.some(x=>x.cls===cls)){ App.toast('That class already has a fee structure — edit it instead','⚠️'); return; }
    st.feeStructures.push({id:uid('FS'), ...data});
  }
  App.persist();
  App.closeModal();
  App.toast('Fee structure saved ✅');
  Views.feestructure();
}
function deleteFeeStructure(id){
  if(!confirm('Delete this fee structure? Students assigned to it will fall back to their individual monthly fee.')) return;
  App.state.feeStructures = App.state.feeStructures.filter(x=>x.id!==id);
  App.state.students.forEach(s=>{ if(s.feePlanId===id) s.feePlanId=null; });
  App.persist();
  App.toast('Fee structure deleted 🗑️');
  Views.feestructure();
}

/* ---------- Student Fee Assignment ---------- */
Views.feeassignment = function(){
  const c = document.getElementById('content');
  const st = App.state;
  if(!['admin','principal','viceprincipal','accountant'].includes(st.role)){
    c.innerHTML = `<div class="empty-state"><div class="em-ic">🔒</div><h3>Restricted area</h3><p>Fee assignment can only be managed by school administration.</p></div>`;
    return;
  }
  const filterClass = App._faClassFilter || 'All';
  const list = filterClass==='All' ? st.students : st.students.filter(s=>s.cls===filterClass);
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Student Fee Assignment (${list.length})</div><div class="section-sub" style="margin-bottom:0;">Assign each student to a fee plan</div></div>
    </div>
    <div class="tag-input-row">${['All',...CLASSES].map(cl=>`<button class="chip ${cl===filterClass?'active':''}" onclick="App._faClassFilter='${cl}'; Views.feeassignment();">${cl}</button>`).join('')}</div>
    ${filterClass!=='All' ? `<div style="margin-bottom:12px;"><select id="faBulkPlan" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:12.5px;">${st.feeStructures.map(fs=>`<option value="${fs.id}">${fs.cls} — ${money(feeStructureTotal(fs))}</option>`).join('')}</select> <button class="btn btn-sm btn-outline" onclick="bulkAssignFeePlan('${filterClass}')">Apply to all in ${filterClass}</button></div>` : ''}
    <div style="overflow-x:auto;">
    <table>
      <thead><tr><th></th><th>Admission No</th><th>Roll</th><th>Student Name</th><th>Father Name</th><th>Class</th><th>Section</th><th>Fee Plan</th></tr></thead>
      <tbody>
      ${list.map(s=>{
        const plan = feePlanFor(s);
        return `<tr class="hoverable">
          <td><div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--orange-500);">${initials(s.name)}</div></td>
          <td style="font-family:var(--font-mono); font-size:12px;">${s.admissionNo}</td>
          <td>${s.roll}</td>
          <td>${s.name}</td>
          <td style="font-size:12.5px;">${s.parentName}</td>
          <td>${s.cls}</td>
          <td>${s.section}</td>
          <td>
            <select onchange="assignFeePlan('${s.id}', this.value)" style="padding:6px 8px; border:1.5px solid var(--line); border-radius:7px; font-size:12px;">
              <option value="">— None —</option>
              ${st.feeStructures.map(fs=>`<option value="${fs.id}" ${plan&&plan.id===fs.id?'selected':''}>${fs.cls} — ${money(feeStructureTotal(fs))}</option>`).join('')}
            </select>
          </td>
        </tr>`;
      }).join('')}
      ${!list.length ? `<tr><td colspan="8"><div class="empty-state"><div class="em-ic">🎒</div><p>No students in this view</p></div></td></tr>` : ''}
      </tbody>
    </table>
    </div>
  </div>`;
};
function assignFeePlan(studentId, planId){
  const s = App.student(studentId);
  s.feePlanId = planId || null;
  App.persist();
  App.toast('Fee plan updated for '+s.name+' ✅');
}
function bulkAssignFeePlan(cls){
  const planId = document.getElementById('faBulkPlan').value;
  const affected = App.state.students.filter(s=>s.cls===cls);
  affected.forEach(s=>{ s.feePlanId = planId; });
  App.persist();
  App.toast(`Assigned to ${affected.length} student${affected.length!==1?'s':''} in ${cls} ✅`);
  Views.feeassignment();
}

/* ---------- Due List ---------- */
function dueListData(){
  const st = App.state;
  const search = (App._dlSearch||'').toLowerCase();
  const clsF = App._dlClass || 'All';
  const secF = App._dlSection || 'All';
  const monthF = App._dlMonth || 'All';
  const byStudent = {};
  st.fees.filter(f=>f.status==='pending' && (monthF==='All'||f.month===monthF)).forEach(f=>{
    (byStudent[f.studentId]=byStudent[f.studentId]||[]).push(f);
  });
  const rows = [];
  Object.keys(byStudent).forEach(sid=>{
    const s = App.student(sid); if(!s) return;
    if(clsF!=='All' && s.cls!==clsF) return;
    if(secF!=='All' && s.section!==secF) return;
    if(search && !s.name.toLowerCase().includes(search) && !(s.parentName||'').toLowerCase().includes(search)) return;
    const dues = byStudent[sid];
    const dueAmount = dues.reduce((a,f)=>a+feeBalance(f),0);
    const paidRecords = st.fees.filter(f=>f.studentId===sid && f.status==='paid' && f.paidDate).sort((a,b)=>b.paidDate.localeCompare(a.paidDate));
    rows.push({
      student:s, dueAmount, dueMonths:dues.length,
      lastPayment: paidRecords.length ? niceDate(paidRecords[0].paidDate) : 'Never',
    });
  });
  return rows.sort((a,b)=>b.dueAmount-a.dueAmount);
}
Views.duelist = function(){
  const c = document.getElementById('content');
  const st = App.state;
  if(!['admin','principal','viceprincipal','accountant'].includes(st.role)){
    c.innerHTML = `<div class="empty-state"><div class="em-ic">🔒</div><h3>Restricted area</h3><p>The Due List is only visible to school administration.</p></div>`;
    return;
  }
  const rows = dueListData();
  const totalDue = rows.reduce((a,r)=>a+r.dueAmount,0);
  c.innerHTML = `
  <div class="card" style="margin-bottom:14px;">
    <div class="searchbar" style="margin-bottom:10px;"><span>🔍</span><input id="dlSearchInput" placeholder="Search by student or parent name..." value="${App._dlSearch||''}" oninput="App._dlSearch=this.value; Views.duelist();"></div>
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <select onchange="App._dlClass=this.value; Views.duelist();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:12.5px;">
        <option value="All">All Classes</option>${CLASSES.map(cl=>`<option ${cl===(App._dlClass||'All')?'selected':''}>${cl}</option>`).join('')}
      </select>
      <select onchange="App._dlSection=this.value; Views.duelist();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:12.5px;">
        <option value="All">All Sections</option>${SECTIONS.map(se=>`<option ${se===(App._dlSection||'All')?'selected':''}>${se}</option>`).join('')}
      </select>
      <select onchange="App._dlMonth=this.value; Views.duelist();" style="padding:8px 10px; border:1.5px solid var(--line); border-radius:8px; font-size:12.5px;">
        <option value="All">All Months</option>${st.feeMonths.map(m=>`<option ${m===(App._dlMonth||'All')?'selected':''}>${m}</option>`).join('')}
      </select>
      <button class="btn btn-sm btn-outline" onclick="exportDueListExcel()">⬇ Export Excel</button>
      <button class="btn btn-sm btn-outline" onclick="printDueList()">🖨️ Export PDF</button>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="section-title">Due Students (${rows.length})</div><div class="section-sub" style="margin-bottom:0;">${money(totalDue)} total outstanding</div></div>
    <table>
      <thead><tr><th>Student</th><th>Father Name</th><th>Phone</th><th>Due Amount</th><th>Last Payment</th><th>Due Months</th><th></th></tr></thead>
      <tbody>
      ${rows.length ? rows.map(r=>`
        <tr class="hoverable">
          <td>${r.student.name}<br><span style="font-size:11px; color:var(--slate);">${r.student.cls}-${r.student.section}</span></td>
          <td style="font-size:12.5px;">${r.student.parentName}</td>
          <td style="font-family:var(--font-mono); font-size:12px;">${r.student.guardianPhone}</td>
          <td style="font-weight:700; color:var(--danger);">${money(r.dueAmount)}</td>
          <td style="font-size:12px;">${r.lastPayment}</td>
          <td>${pill('red', r.dueMonths+' month'+(r.dueMonths!==1?'s':''))}</td>
          <td>${waButton(r.student.guardianPhone, feeReminderMessage(r.student, r.dueAmount, App._dlMonth&&App._dlMonth!=='All'?App._dlMonth:st.feeMonths[st.feeMonths.length-1]), 'Remind')}</td>
        </tr>`).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="em-ic">🎉</div><p>No dues match this filter</p></div></td></tr>`}
      </tbody>
    </table>
  </div>`;
};
function exportDueListExcel(){
  const rows = dueListData();
  const header = ['Student Name','Father Name','Phone','Class','Section','Due Amount','Last Payment','Due Months'];
  const csvRows = [header, ...rows.map(r=>[r.student.name, r.student.parentName, r.student.guardianPhone, r.student.cls, r.student.section, r.dueAmount, r.lastPayment, r.dueMonths])];
  const csv = csvRows.map(row=>row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  try{
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'due-list.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    App.toast('Due list exported ⬇');
  }catch(e){ App.toast('Export failed','⚠️'); }
}
function printDueList(){
  const rows = dueListData();
  const totalDue = rows.reduce((a,r)=>a+r.dueAmount,0);
  App.openModal(`
    <div class="modal-head no-print"><h3>Print Due List</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; padding-bottom:10px; border-bottom:2px solid var(--orange-600);">
          ${barcodeBlock(36)}
          <div><div style="font-weight:800;">Leads School System — Due List</div><div style="font-size:11px; color:var(--slate);">Generated ${niceDate(todayStr())} · ${money(totalDue)} total outstanding</div></div>
        </div>
        <table style="width:100%; font-size:11.5px;">
          <thead><tr><th>Student</th><th>Father Name</th><th>Phone</th><th>Class</th><th>Due</th><th>Last Payment</th></tr></thead>
          <tbody>${rows.map(r=>`<tr><td>${r.student.name}</td><td>${r.student.parentName}</td><td>${r.student.guardianPhone}</td><td>${r.student.cls}-${r.student.section}</td><td>${money(r.dueAmount)}</td><td>${r.lastPayment}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
    <div class="modal-foot no-print"><button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button><button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print / Save as PDF</button></div>`);
}


function generateClassReceipts(clsFilter){
  const st = App.state;
  const currentMonth = st.feeMonths[st.feeMonths.length-1];
  const targets = st.fees.filter(f=>{
    const s = App.student(f.studentId);
    return s && f.month===currentMonth && (clsFilter==='All' || s.cls===clsFilter);
  });
  if(!targets.length){ App.toast('No vouchers found for this class','ℹ️'); return; }
  App.openModal(`
    <div class="modal-head no-print"><h3>Fee Slips — ${clsFilter} (${targets.length})</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        ${targets.map(f=>{ const s=App.student(f.studentId); return s ? feeSlipMarkup(f,s,'Student Copy') : ''; }).join('')}
      </div>
    </div>
    <div class="modal-foot no-print">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button>
      <button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print All / Save as PDF</button>
    </div>`);
}
function viewChallan(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  const s = App.student(f.studentId);
  if(!f||!s) return;
  const copy = (tag)=>`
    <div class="challan-copy">
      <span class="cc-tag">${tag}</span>
      <div class="cc-head"><img src="data:image/png;base64,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fVo6V+wpUJ122mnMmzePv/zlLxx55JG1SmS7GQhNUBmjkgY6W9QHRnXLdyRnvLubawANBoO0adOGnj177mqytyhgxbBtDSjb4eB1awzJZt600hh+k8c+noXScMfvbkvkidWwq7/+7a9s2rQJrTV3/v5Ob+Kbpkk0Gt0pCrvuYh81ahRt2rTx1MFp06axcuXKBtXB5Ah3KaVncF+2bBllZWXewmwm+0PjYNSEWvrub9VVVxszvCerhRPfmFjrey4brbufC3IrVqzgs88+8+5DXZbVt29fzj33XLTWbN26lb/+9a+14re01oz//e8x/QHuee0Lp/O1rl36uKU2tHB7Adshn6+lkWu3IwPce3niiSfSr18/brjhBk477TRPPXQfwskxbnX397BHEDETNqwGbQn1SVpaGjk5ORQUFFBUVETbtm1p36497dq3o127dhQVFZGfn09+fj6xWIwePXqwbdu2+hbGngSa7q4KYgEoK+bRSJn4Q7pF9ZrNIwlBv8nqreU8++U8jh1zPIOGHOIsDCERplON4IknnkAIwTHHHMNxxx9Xq3TxpEmTWL58eaOhCWNPH1vLDuN6ExuLboeaFBf3O65h21WNWlIl9DovN6HfX12HgPvA69u3L6ZpelkA9QGQ1poP3v+A6upqQqEQAGPGjCEzM5OKioqd9nPH7D//+Q8nn3xyg+dz66238sorr2DbNo8//jjXXXcdrVu39h7anbt05corLucff/8HXy1cz8iebaiqjmEKUTtxubnpjlaE7RiA1ae43OabFgUsP7WDzXdtQ05oCkcccYRHct54441a5o1rrrmGTZs2MWXKFLZv375Tqe6kuVlt4tRId7QmIYTWmrS0NHr37k2bNm1o27Yt7dq187Y2bdqQn59PTk4OaWlpu75Cv5+cnJy6gJVc3s7fQoOrAQIQrgYisSrQEqGcZpSe8Uw33+SxlCIYDPHPiVOJWIrxd/yuFkCYpslf/vIXtm3bhpTSqyrq2m0Ann322XrBxy3zEgwGOfGkEz3vYCwW45133mn0IeO+XzeJ2I11+iGM7ruq+w6wePFir0qC1ppOnTrRrl07Vq9e3SBgSSlZu3YtX331FccffzyxWIzCwkJGjx7NO++8s1MFC/fv999/nw0bNtC2bdta6rkbMzdgwADOPPNMr/7Wo48+ykMPPeTdO601t//ud/zfs88x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Aa38BpalkbtZRNIpw+1XR/3lHfnlivUL9Svn9hfjJtgt8rB3Ti2A04W9YwLAZGOe08mTJ3v5rnfddRf3339/rdjENm3asGjRIjIyMry54H4fnMT83r17U1VV5dboK0lgVImZZHTfDLQDtJRSaK056qijuOmmmxg6dCitW7eudYLRaLSWjcC1Z0WjURbMX8DkLybz8ccfc9ddd3npEMcccwzPP/988iRzL7x7wlNY0gKgpQHaZLSaWx7dHp6+Zkvop6KP1koLvZt2ZFspTF+Qv30+g5jS/D5RQsa2nViSqVOneraSm2++mazsrJ3YlWmaTJkyhS+//NI7bkZGBtnZ2bXUucLCQg477DAyMjJq9dVzVab6vG7J/zfWrr4psVv1MaTmisWqr8/iroCq7u831Lor+fh17WHufXDn6p133snJJ5/M5s2b2bRpExs3bmTz5s1s3ryZLVu2UF5ezrZt2/i/f/8fjz72aL11stzfM02T22+/nVNPPRXDMHjvvff4+uuvGTlypLdYTdPk/nvu4dTTT+fxz7/nntOGEolFMKXYrckckILN5dVq3pbtEvhOnjfBffDbLQRYHRLYsEuGdd1113kpZ6+99hp33313rdCmWCzGZZddRmZmJrZts379erTWXo03V6Xs2bMn3377rQtYq1xscNt6RRJqYTucyqNeaL1bNta1RYETvJjMsNwJEo1GOfroo2sV/xs5cqTnIRw1alSt3ntaa3dAcoAewDT2rj19Q5RWLNq2baMQYuH0NZuHxKJRbUinsUmT1mCiamTQNFhfVsW/psxn5FGjOOzwEdi2hWE6C+fee+9FKUXXrl356U9/ulNtJZcOp6Wl8cILL1BcXExeXh45OTlkZWWRkZFR72JIXqi7YhBNCStoLDp+X0h9nuaWOH5j6TcABQUFXrme+qSyspIdO3Z4D+eGxs1lFyeddBLDhg1jxowZANx999189NFH3gPEtm1OOfVUhg4bxl8/+45rj+hLftAgZqsm14RRWmP6g8xbX0JpZYSAlF9HnfXXEknPbgf2AQnty67PE+leW2ZmptfwQ2vNI4884s1XV90PBAJcdtll3tr45S9/yccff8zNN9/MnXfe6TlkEnF2SgghgQWek9llOQLmusvTBaDPPvuM7du3e08qv9+P3++ntLSUzz//nN/97ndccMEFxC3HsBkKhTwDW1pa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"><div><div style="font-weight:800; font-size:14px;">Leads School System</div><div style="font-size:10.5px; color:var(--slate);">Zeenat Campus · Fee Challan</div></div></div>
      <div class="form-grid" style="font-size:11.5px; margin-bottom:8px;">
        ${infoRow('Student', s.name)} ${infoRow('Challan No', f.challanNo)}
        ${infoRow('Class', s.cls+'-'+s.section)} ${infoRow('Month', f.month)}
        ${infoRow('Admission No', s.admissionNo)} ${infoRow('Due Date', niceDate(f.dueDate))}
      </div>
      <div class="challan-row"><span>Tuition Fee</span><span>${money(f.amount)}</span></div>
      ${f.discount?`<div class="challan-row"><span>Discount</span><span>-${money(f.discount)}</span></div>`:''}
      ${f.fine?`<div class="challan-row"><span>Late Fine</span><span>+${money(f.fine)}</span></div>`:''}
      <div class="challan-row total"><span>Total Payable</span><span>${money(f.amount-f.discount+f.fine)}</span></div>
      <div style="margin-top:10px; font-size:10.5px; color:var(--slate);">Status: <b style="color:${f.status==='paid'?'var(--success)':'var(--danger)'}; text-transform:uppercase;">${f.status}</b>${f.paidDate?' · Paid on '+niceDate(f.paidDate):''}</div>
      <div style="margin-top:8px; font-size:10px; color:var(--slate-light);">Pay via bank transfer, campus office, or the parent portal online gateway. Keep this challan for your records.</div>
    </div>`;
  App.openModal(`
    <div class="modal-head no-print"><h3>Fee Challan</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        ${copy('Bank Copy')}
        ${copy('School Copy')}
        ${copy('Student Copy')}
      </div>
    </div>
    <div class="modal-foot no-print">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button>
      <button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>`);
}

/* ---------- WhatsApp send helpers (opens the WhatsApp Desktop/mobile app with parent number + message prefilled) ---------- */
function feeSlipMarkup(f, s, tag){
  return `
    <div class="challan-copy">
      <span class="cc-tag">${tag}</span>
      <div class="cc-head" style="display:flex; align-items:center; gap:10px;">
        ${barcodeBlock(36)}
        <div><div style="font-weight:800; font-size:14px;">Leads School System</div><div style="font-size:10.5px; color:var(--slate);">Zeenat Campus · ${f.feeType||'Fee Voucher'}</div></div>
      </div>
      <div class="form-grid" style="font-size:11.5px; margin-bottom:8px;">
        ${infoRow('Student', s.name)} ${infoRow('Challan No', f.challanNo)}
        ${infoRow('Class', s.cls+'-'+s.section)} ${infoRow('Month', f.month)}
        ${infoRow('Admission No', s.admissionNo)} ${infoRow('Due Date', niceDate(f.dueDate))}
      </div>
      <div class="challan-row"><span>${f.feeType||'Tuition Fee'}</span><span>${money(f.amount)}</span></div>
      ${f.discount?`<div class="challan-row"><span>Discount</span><span>-${money(f.discount)}</span></div>`:''}
      ${f.fine?`<div class="challan-row"><span>Late Fine</span><span>+${money(f.fine)}</span></div>`:''}
      <div class="challan-row total"><span>Total Payable</span><span>${money(feeTotal(f))}</span></div>
      <div style="margin-top:10px; font-size:10.5px; color:var(--slate);">Status: <b style="color:${f.status==='paid'?'var(--success)':'var(--danger)'}; text-transform:uppercase;">${f.status}</b>${f.paidDate?' · Paid on '+niceDate(f.paidDate):''}</div>
    </div>`;
}
function viewReceipt(feeId){
  const f = App.state.fees.find(x=>x.id===feeId);
  const s = App.student(f.studentId);
  if(!f||!s) return;
  const ss = App.state.schoolSettings;
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const ledger = months.map((m,i)=>{
    const rec = App.state.fees.find(x=>x.studentId===s.id && x.month.startsWith(m));
    return {month:m.slice(0,3), status: rec ? rec.status : (i<6?'—':'—')};
  });
  const copy = (tag)=>`
    <div class="challan-copy">
      <span class="cc-tag">${tag}</span>
      <div class="cc-head" style="display:flex; align-items:center; gap:10px;">
        ${barcodeBlock(36)}
        <div style="flex:1;"><div style="font-weight:800; font-size:14px;">Leads School System</div><div style="font-size:10.5px; color:var(--slate);">${ss.address||'Zeenat Campus, Karachi, Pakistan'}</div></div>
        ${qrBlock(44, f.receiptNo||f.challanNo)}
      </div>
      <div class="form-grid" style="font-size:11.5px; margin-bottom:8px;">
        ${infoRow('Receipt No', f.receiptNo||'—')} ${infoRow('Date', niceDate(f.paidDate||todayStr()))}
        ${infoRow('Student', s.name)} ${infoRow('Admission No', s.admissionNo)}
        ${infoRow('Class', s.cls+'-'+s.section)} ${infoRow('Month', f.month)}
        ${infoRow('Total', money(feeTotal(f)))} ${infoRow('Discount', money(f.discount))}
        ${infoRow('Fine', money(f.fine))} ${infoRow('Amount Paid', money(f.paidAmount||0))}
        ${infoRow('Balance', money(feeBalance(f)))} ${infoRow('Payment Method', f.paymentMethod||'Cash')}
        ${f.bankName ? infoRow('Bank', f.bankName) : ''} ${f.transactionId ? infoRow('Transaction ID', f.transactionId) : ''}
        ${infoRow('Received By', f.receivedBy||'Admin')}
      </div>
      <div style="font-size:10px; font-weight:700; color:var(--slate); text-transform:uppercase; margin-bottom:4px;">12-Month Ledger</div>
      <div style="display:grid; grid-template-columns:repeat(6,1fr); gap:3px; margin-bottom:10px;">
        ${ledger.map(l=>`<div style="text-align:center; padding:4px 2px; border-radius:5px; font-size:9px; background:${l.status==='paid'?'var(--success-bg)':l.status==='pending'?'var(--danger-bg)':'#f5f5f4'}; color:${l.status==='paid'?'var(--success)':l.status==='pending'?'var(--danger)':'var(--slate-light)'};">${l.month}</div>`).join('')}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:16px;">
        <div style="font-size:10px; color:var(--slate-light); max-width:60%;">Thank you for your payment. This receipt is valid proof of payment for the month indicated above.</div>
        <div style="text-align:center;"><div style="border-top:1px solid var(--ink); width:110px; margin-bottom:3px;"></div><div style="font-size:9px; color:var(--slate);">Authorized Signature</div></div>
      </div>
    </div>`;
  App.openModal(`
    <div class="modal-head no-print"><h3>Payment Receipt</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        ${copy('Bank Copy')}
        ${copy('School Copy')}
        ${copy('Student Copy')}
      </div>
    </div>
    <div class="modal-foot no-print">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button>
      <button class="btn btn-sm btn-outline" onclick="window.print()" title="Choose your printer in the dialog">🖨️ Print</button>
      <button class="btn btn-sm btn-orange" onclick="window.print()" title="Choose 'Save as PDF' in the print dialog">⬇ Download PDF</button>
    </div>`);
}

function escAttr(str){
  return String(str==null?'':str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function waNumber(phone){
  if(!phone) return '';
  let num = String(phone).replace(/[^\d+]/g,'').replace(/^\+/,'');
  if(!num) return '';
  if(num.startsWith('0')) num = '92'+num.slice(1);
  else if(!num.startsWith('92') && num.length===10) num = '92'+num;
  return num;
}
function waButton(phone, message, label){
  if(!phone || phone==='N/A' || !waNumber(phone)){
    return `<span style="font-size:11px; color:var(--slate-light);">No phone on file</span>`;
  }
  return `<button class="btn-sm btn-outline" style="padding:5px 9px; border-radius:7px; font-size:11px; white-space:nowrap;" data-phone="${escAttr(phone)}" data-msg="${escAttr(message)}" onclick="sendWhatsAppBtn(this)">💬 ${label||'WhatsApp'}</button>`;
}
function openWhatsAppDirect(phone, message, type, to){
  const num = waNumber(phone);
  if(!num){ App.toast('No valid phone number on file','⚠️'); return false; }
  window.open(`whatsapp://send?phone=${num}&text=${encodeURIComponent(message)}`, '_self');
  App.state.whatsapp.unshift({id:uid('WA'), to:to||'Parent/Guardian', phone, from:App.state.senderNumber||undefined, type:type||'WhatsApp Send', msg:message, time:'Just now', status:'Opened WhatsApp'});
  App.persist();
  return true;
}

/* ---------- Batch Send (multi-recipient, one WhatsApp chat at a time) ---------- */
// Real simultaneous bulk-sending isn't possible this way — each link only opens
// one chat in the WhatsApp Desktop/mobile app, and there's no API for silently firing many at once. This walks the list for you
// instead: one click per recipient, auto-advancing, so a big batch goes fast without you
// hunting for each parent's number yourself.
function openBatchSend(title, recipients, type){
  const clean = (recipients||[]).filter(r=>r && r.phone && waNumber(r.phone));
  const skippedNoPhone = (recipients||[]).length - clean.length;
  App._batchTitle = title;
  App._batchType = type || 'WhatsApp Send';
  App._batchQueue = clean.map(r=>({name:r.name, phone:r.phone, message:r.message, status:'pending'}));
  if(skippedNoPhone>0) App.toast(skippedNoPhone+' recipient(s) skipped — no phone on file','⚠️');
  if(!App._batchQueue.length){ App.toast('No valid recipients to send to','⚠️'); return; }
  renderBatchSendModal();
}
function renderBatchSendModal(){
  const queue = App._batchQueue || [];
  const done = queue.filter(r=>r.status!=='pending').length;
  const sent = queue.filter(r=>r.status==='sent').length;
  const next = queue.find(r=>r.status==='pending');
  const pct = queue.length ? Math.round(done/queue.length*100) : 0;
  App.openModal(`
    <div class="modal-head"><h3>📤 ${App._batchTitle} (${done}/${queue.length})</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="progress-track" style="margin-bottom:14px;"><div class="progress-fill" style="width:${pct}%;"></div></div>
      ${next ? `
        <div style="text-align:center; padding:16px 0; background:var(--orange-50); border-radius:12px; margin-bottom:14px;">
          <div class="avatar" style="width:50px;height:50px;font-size:16px; margin:0 auto 10px; background:var(--orange-500);">${initials(next.name)}</div>
          <div style="font-weight:700; font-size:15px;">${next.name}</div>
          <div style="font-size:12px; color:var(--slate); margin-bottom:14px; font-family:var(--font-mono);">${next.phone}</div>
          <button class="btn btn-orange" onclick="sendBatchNext()">💬 Open WhatsApp &amp; Send</button>
          <div style="margin-top:10px;"><button class="btn-sm btn-ghost" onclick="skipBatchNext()">Skip this one →</button></div>
        </div>
      ` : `<div class="empty-state" style="padding:20px;"><div class="em-ic">✅</div><h3>Batch complete</h3><p>Sent to ${sent} of ${queue.length} recipients.</p></div>`}
      <div style="max-height:200px; overflow-y:auto; border-top:1px solid var(--line); padding-top:10px;">
      ${queue.map(r=>`<div style="display:flex; justify-content:space-between; align-items:center; padding:5px 2px; font-size:12px;"><span>${r.name}</span>${r.status==='sent'?pill('green','Sent'):r.status==='skipped'?pill('gray','Skipped'):pill('yellow','Pending')}</div>`).join('')}
      </div>
    </div>
    <div class="modal-foot"><button class="btn btn-sm btn-outline" onclick="App.closeModal()">${next?'Close & Finish Later':'Done'}</button></div>
  `);
}
function sendBatchNext(){
  const queue = App._batchQueue||[];
  const next = queue.find(r=>r.status==='pending');
  if(!next) return;
  openWhatsAppDirect(next.phone, next.message, App._batchType, next.name);
  next.status = 'sent';
  renderBatchSendModal();
}
function skipBatchNext(){
  const queue = App._batchQueue||[];
  const next = queue.find(r=>r.status==='pending');
  if(!next) return;
  next.status = 'skipped';
  renderBatchSendModal();
}

function sendWhatsAppBtn(btn){
  const phone = btn.dataset.phone;
  const message = btn.dataset.msg;
  if(!openWhatsAppDirect(phone, message)) return;
  App.toast('Opening WhatsApp with '+phone+' 💬');
}
function openWhatsAppRoster(cls, section, message, title){
  const roster = App.state.students.filter(s=>s.cls===cls && s.section===section);
  App.openModal(`
    <div class="modal-head"><h3>${title||'Send via WhatsApp'} — ${cls}-${section}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:12px;">
        <div style="font-size:12px; color:var(--slate);">Send one at a time below, or batch through the whole class.</div>
        ${roster.length ? `<button class="btn-sm btn-orange" id="batchSendAllBtn" style="white-space:nowrap;">📤 Batch Send to All</button>` : ''}
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; max-height:420px; overflow-y:auto;">
      ${roster.length ? roster.map(s=>`
        <div style="display:flex; align-items:center; gap:10px; padding:8px; border-radius:9px; border:1px solid var(--line);">
          <div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--orange-500);">${initials(s.name)}</div>
          <div style="flex:1;"><div style="font-size:12.5px; font-weight:600;">${s.name}</div><div style="font-size:10.5px; color:var(--slate);">${s.parentName}</div></div>
          ${waButton(s.guardianPhone, message.replace('{parent}', s.parentName).replace('{student}', s.name), 'Text')}
        </div>`).join('') : `<div class="empty-state"><div class="em-ic">🎒</div><h3>No students in this section</h3></div>`}
      </div>
    </div>
    <div class="modal-foot"><button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button></div>`);
  const batchBtn = document.getElementById('batchSendAllBtn');
  if(batchBtn){
    batchBtn.onclick = function(){
      App.closeModal();
      openBatchSend((title||'Send via WhatsApp')+' — '+cls+'-'+section,
        roster.map(s=>({name:s.parentName, phone:s.guardianPhone, message:message.replace('{parent}', s.parentName).replace('{student}', s.name)})),
        'WhatsApp Send');
    };
  }
}

/* ---------- School Settings (Super Admin only) ---------- */
Views.schoolsettings = function(){
  const c = document.getElementById('content');
  const st = App.state;
  if(st.role!=='admin'){
    c.innerHTML = `<div class="empty-state"><div class="em-ic">🔒</div><h3>Restricted area</h3><p>School Settings can only be changed by the Super Admin.</p></div>`;
    return;
  }
  const ss = st.schoolSettings;
  c.innerHTML = `
  <div class="card" style="margin-bottom:16px; max-width:520px;">
    <div class="section-title" style="margin-bottom:4px;">🏫 School Address</div>
    <div class="section-sub">Printed on fee receipts and challans.</div>
    <div class="field"><label>Address</label><input id="ssAddress" placeholder="e.g. Zeenat Colony, Karachi, Pakistan" value="${ss.address||'Zeenat Campus, Karachi, Pakistan'}"></div>
  </div>
  <div class="card" style="margin-bottom:16px; max-width:520px;">
    <div class="section-title" style="margin-bottom:4px;">📱 School WhatsApp Number</div>
    <div class="section-sub">The owner's number used to send texts to parents. Shown as "Sent From" on every message.</div>
    <div class="field"><label>WhatsApp Number</label><input id="ssWhatsapp" placeholder="e.g. 0300-1234567" value="${st.senderNumber||''}"></div>
    ${st.senderNumber ? `<div style="font-size:12px; color:var(--success); margin-bottom:10px;">✓ Currently set to ${st.senderNumber}</div>` : `<div style="font-size:12px; color:var(--slate); margin-bottom:10px;">Not set yet.</div>`}
  </div>
  <div class="card" style="margin-bottom:16px; max-width:520px;">
    <div class="section-title" style="margin-bottom:4px;">🕐 School Arrival &amp; Departure Time</div>
    <div class="section-sub">Used to build the timetable's period slots and to mark students late in Late Comer.</div>
    <div class="form-grid">
      <div class="field"><label>Arrival Time (gate opens / school starts)</label><input id="ssArrival" type="time" value="${ss.arrivalTime}"></div>
      <div class="field"><label>Departure Time (school ends)</label><input id="ssDeparture" type="time" value="${ss.departureTime}"></div>
    </div>
    <div style="font-size:12px; color:var(--slate); margin-top:6px;">Currently: ${timeStrTo12h(ss.arrivalTime)} – ${timeStrTo12h(ss.departureTime)}</div>
  </div>
  <button class="btn btn-sm btn-orange" onclick="saveSchoolSettings()">Save Settings</button>
  `;
};
function saveSchoolSettings(){
  const st = App.state;
  st.senderNumber = document.getElementById('ssWhatsapp').value.trim();
  st.schoolSettings.address = document.getElementById('ssAddress').value.trim() || 'Zeenat Campus, Karachi, Pakistan';
  st.schoolSettings.arrivalTime = document.getElementById('ssArrival').value || '08:00';
  st.schoolSettings.departureTime = document.getElementById('ssDeparture').value || '14:00';
  // regenerate every teacher's timetable to line up with the new school hours
  st.teachers.forEach(t=>{ st.timetable[t.id] = undefined; });
  st.timetable = seedTimetable(st.teachers[0]);
  App.persist();
  App.toast('School settings saved ✅ Timetable periods updated.');
  Views.schoolsettings();
}

/* ---------- Messaging Center ---------- */
Views.messagecenter = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const absentToday = st.students.filter(s=>st.attendanceToday[s.id]==='absent');
  const pendingFeeStudents = st.students.filter(s=>s.feeStatus==='pending');
  const currentMonth = st.feeMonths[st.feeMonths.length-1];

  c.innerHTML = `
  <div class="card" style="margin-bottom:16px;">
    <div class="section-title" style="margin-bottom:4px;">📱 Your Sending Number</div>
    <div class="section-sub">The WhatsApp/SMS number messages are sent from. Shown on every message in the log.</div>
    <div style="display:flex; gap:10px; max-width:420px;">
      <input id="senderNumberInput" placeholder="e.g. 0300-1234567" value="${st.senderNumber||''}" style="flex:1; padding:11px 13px; border:1.5px solid var(--line); border-radius:9px; font-size:14.5px; background:var(--cream);">
      <button class="btn btn-sm btn-orange" onclick="saveSenderNumber()">Save</button>
    </div>
    ${st.senderNumber ? `<div style="margin-top:8px; font-size:12px; color:var(--success);">✓ Messages will show as sent from ${st.senderNumber}</div>` : `<div style="margin-top:8px; font-size:12px; color:var(--slate);">No number set yet — messages will send without a "from" number.</div>`}
  </div>

  <div class="grid two-col" style="margin-bottom:16px;">
    <div class="card">
      <div class="card-head">
        <div><div class="section-title">🚫 Absent Students Today</div><div class="section-sub" style="margin-bottom:0;">${absentToday.length} student${absentToday.length!==1?'s':''} marked absent — ${niceDate(todayStr())}</div></div>
        ${absentToday.length ? `<button class="btn btn-sm btn-orange" onclick="sendAbsentAlertsBulk()">Send to All</button>` : ''}
      </div>
      ${absentToday.length ? `<div style="display:flex; flex-direction:column; gap:6px; max-height:280px; overflow-y:auto;">
        ${absentToday.map(s=>`
          <div style="display:flex; align-items:center; gap:10px; padding:8px; border:1px solid var(--line); border-radius:9px;">
            <div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--danger);">${initials(s.name)}</div>
            <div style="flex:1;"><div style="font-size:12.5px; font-weight:600;">${s.name}</div><div style="font-size:11px; color:var(--slate);">${s.cls}-${s.section} · ${s.parentName}</div></div>
            <button class="btn-sm btn-outline" style="padding:5px 10px; border-radius:7px; font-size:11px;" onclick="sendAbsentAlertOne('${s.id}')">Send</button>
          </div>`).join('')}
      </div>` : `<div class="empty-state" style="padding:24px;"><div class="em-ic">✅</div><p>No absentees today</p></div>`}
    </div>

    <div class="card">
      <div class="card-head">
        <div><div class="section-title">💰 Fee Reminders</div><div class="section-sub" style="margin-bottom:0;">${pendingFeeStudents.length} student${pendingFeeStudents.length!==1?'s':''} pending — ${currentMonth}</div></div>
        ${pendingFeeStudents.length ? `<button class="btn btn-sm btn-orange" onclick="sendFeeRemindersBulk()">Send to All</button>` : ''}
      </div>
      ${pendingFeeStudents.length ? `<div style="display:flex; flex-direction:column; gap:6px; max-height:280px; overflow-y:auto;">
        ${pendingFeeStudents.map(s=>`
          <div style="display:flex; align-items:center; gap:10px; padding:8px; border:1px solid var(--line); border-radius:9px;">
            <div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--gold);">${initials(s.name)}</div>
            <div style="flex:1;"><div style="font-size:12.5px; font-weight:600;">${s.name}</div><div style="font-size:11px; color:var(--slate);">${s.cls}-${s.section} · ${money(s.monthlyFee)}</div></div>
            <button class="btn-sm btn-outline" style="padding:5px 10px; border-radius:7px; font-size:11px;" onclick="sendFeeReminderOne('${s.id}')">Send</button>
          </div>`).join('')}
      </div>` : `<div class="empty-state" style="padding:24px;"><div class="em-ic">🎉</div><p>No pending fees</p></div>`}
    </div>
  </div>

  <div class="card">
    <div class="card-head"><div><div class="section-title">✏️ Custom Reminder / Broadcast</div><div class="section-sub" style="margin-bottom:0;">Write your own message and choose who receives it</div></div></div>
    <div class="form-grid">
      <div class="field"><label>Send To</label>
        <select id="mcAudience" onchange="document.getElementById('mcClassRow').style.display=this.value==='class'?'block':'none'">
          <option value="all">All Parents</option>
          <option value="class">Specific Class</option>
          <option value="staff">All Teachers</option>
        </select>
      </div>
      <div class="field" id="mcClassRow" style="display:none;"><label>Class</label>
        <select id="mcClass">${CLASSES.map(cl=>SECTIONS.map(se=>`<option value="${cl}|${se}">${cl}-${se}</option>`).join('')).join('')}</select>
      </div>
      <div class="field full"><label>Message</label><textarea id="mcMessage" rows="3" style="width:100%; padding:11px 13px; border:1.5px solid var(--line); border-radius:9px; font-size:14px;" placeholder="e.g. Reminder: PTA meeting this Saturday at 10 AM."></textarea></div>
    </div>
    <button class="btn btn-sm btn-orange" onclick="sendCustomReminder()">📤 Send Reminder</button>
  </div>
`;
};
function saveSenderNumber(){
  const val = document.getElementById('senderNumberInput').value.trim();
  App.state.senderNumber = val;
  App.persist();
  App.toast(val? 'Sender number saved ✅' : 'Sender number cleared');
  Views.messagecenter();
}
function sendAbsentAlertOne(id){
  const s = App.student(id);
  if(!openWhatsAppDirect(s.guardianPhone, absentMsgFor(s), 'Absent Alert', s.parentName)) return;
  App.toast('Opening WhatsApp with '+s.parentName,'🚫');
}
function sendAbsentAlertsBulk(){
  const st = App.state;
  const absentToday = st.students.filter(s=>st.attendanceToday[s.id]==='absent');
  openBatchSend('Absent Alerts', absentToday.map(s=>({name:s.parentName, phone:s.guardianPhone, message:absentMsgFor(s)})), 'Absent Alert');
}
function sendFeeReminderOne(id){
  const s = App.student(id);
  const st = App.state;
  const currentMonth = st.feeMonths[st.feeMonths.length-1];
  const f = st.fees.find(x=>x.studentId===id && x.month===currentMonth && x.status==='pending');
  const msg = feeReminderMessage(s, f?feeBalance(f):s.monthlyFee, currentMonth, f?f.dueDate:null);
  if(!openWhatsAppDirect(s.guardianPhone, msg, 'Fee Reminder', s.parentName)) return;
  App.toast('Opening WhatsApp with '+s.parentName,'💰');
}
function sendFeeRemindersBulk(){
  const st = App.state;
  const currentMonth = st.feeMonths[st.feeMonths.length-1];
  const pending = st.students.filter(s=>s.feeStatus==='pending');
  const msgFor = s => {
    const f = st.fees.find(x=>x.studentId===s.id && x.month===currentMonth && x.status==='pending');
    return feeReminderMessage(s, f?feeBalance(f):s.monthlyFee, currentMonth, f?f.dueDate:null);
  };
  openBatchSend('Fee Reminders', pending.map(s=>({name:s.parentName, phone:s.guardianPhone, message:msgFor(s)})), 'Fee Reminder');
}
function sendCustomReminder(){
  const st = App.state;
  const audience = document.getElementById('mcAudience').value;
  const msg = document.getElementById('mcMessage').value.trim();
  if(!msg){ App.toast('Write a message first','⚠️'); return; }
  let title = 'Reminder — All Parents', recipients = [];
  if(audience==='class'){
    const [cls,section] = document.getElementById('mcClass').value.split('|');
    title = `Reminder — ${cls}-${section}`;
    recipients = st.students.filter(s=>s.cls===cls && s.section===section).map(s=>({name:s.parentName, phone:s.guardianPhone, message:msg}));
  } else if(audience==='staff'){
    title = 'Reminder — All Teachers';
    recipients = st.teachers.map(t=>({name:t.name, phone:t.phone, message:msg}));
  } else {
    recipients = st.students.map(s=>({name:s.parentName, phone:s.guardianPhone, message:msg}));
  }
  document.getElementById('mcMessage').value='';
  openBatchSend(title, recipients, 'Reminder');
}

/* ---------- WhatsApp Automation ---------- */
/* ---------- SMS / WhatsApp Management ---------- */
const FEE_REMINDER_TEMPLATES = [
  "This is a courteous reminder that your monthly fee is now due. We also note that there is an outstanding balance from the previous billing period.",
  "This is a second reminder that your child's school fee remains unpaid. Please clear the outstanding balance at the earliest to avoid a late fee.",
  "Final notice: your child's fee is significantly overdue. Please settle the balance within 3 days to avoid further action, including possible suspension of classes.",
];
Views.smsmanagement = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const typeCounts = {};
  st.whatsapp.forEach(w=>{ typeCounts[w.type] = (typeCounts[w.type]||0)+1; });
  c.innerHTML = `
  <div class="grid stat-cards" style="margin-bottom:16px;">
    ${statCard('📨','Total Sent', st.whatsapp.length, 'All message types','flat','')}
    ${statCard('🚫','Absent Alerts', typeCounts['Absent Alert']||0, 'Auto-sent on absence','flat','')}
    ${statCard('💰','Fee Reminders', (typeCounts['Fee Reminder']||0)+(typeCounts['Fee Defaulter Reminder']||0), 'Manual + auto','flat','')}
    ${statCard('🧾','Payment Receipts', typeCounts['Payment Confirmation']||0, 'Sent on payment','flat','')}
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div class="section-title" style="margin-bottom:10px;">📋 Message Templates</div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <div style="border:1px solid var(--line); border-radius:9px; padding:10px 12px;"><b style="font-size:12px;">🚫 Absent Alert (automatic)</b><div style="font-size:12.5px; color:var(--slate); margin-top:4px;">"Dear [Parent Name], your child [Student Name] is absent school today. Kindly ensure regular attendance."</div></div>
      <div style="border:1px solid var(--line); border-radius:9px; padding:10px 12px;"><b style="font-size:12px;">💰 Fee Reminder — 1st Notice</b><div style="font-size:12.5px; color:var(--slate); margin-top:4px;">"${FEE_REMINDER_TEMPLATES[0]}"</div></div>
      <div style="border:1px solid var(--line); border-radius:9px; padding:10px 12px;"><b style="font-size:12px;">💰 Fee Reminder — 2nd Notice</b><div style="font-size:12.5px; color:var(--slate); margin-top:4px;">"${FEE_REMINDER_TEMPLATES[1]}"</div></div>
      <div style="border:1px solid var(--line); border-radius:9px; padding:10px 12px;"><b style="font-size:12px;">💰 Fee Reminder — 3rd / Final Notice</b><div style="font-size:12.5px; color:var(--slate); margin-top:4px;">"${FEE_REMINDER_TEMPLATES[2]}"</div></div>
      <div style="border:1px solid var(--line); border-radius:9px; padding:10px 12px;"><b style="font-size:12px;">🧾 Payment Confirmation (automatic)</b><div style="font-size:12.5px; color:var(--slate); margin-top:4px;">"Thank you for fee submission. [Student Name] has paid amount PKR [Amount] on [Date], received by [Staff Name]."</div></div>
    </div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div class="card-head"><div><div class="section-title">📢 Fee Defaulter Reminders — Class-wise</div><div class="section-sub" style="margin-bottom:0;">Send an escalating reminder to every student in a class who still owes fees</div></div></div>
    <div class="form-grid">
      <div class="field"><label>Class</label><select id="smsClass"><option value="All">All Classes</option>${CLASSES.map(c=>`<option>${c}</option>`).join('')}</select></div>
      <div class="field"><label>Reminder Stage</label><select id="smsStage"><option value="0">1st Reminder</option><option value="1">2nd Reminder</option><option value="2">3rd / Final Notice</option></select></div>
    </div>
    <button class="btn btn-sm btn-orange" onclick="sendDefaulterReminders()">📤 Send Reminders</button>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div class="card-head"><div><div class="section-title">🔔 Send Notice</div><div class="section-sub" style="margin-bottom:0;">To all parents, or a specific class</div></div></div>
    <div class="form-grid">
      <div class="field"><label>Audience</label><select id="smsNoticeAudience" onchange="document.getElementById('smsNoticeClassRow').style.display=this.value==='class'?'block':'none'"><option value="all">All Parents</option><option value="class">Specific Class</option></select></div>
      <div class="field" id="smsNoticeClassRow" style="display:none;"><label>Class</label><select id="smsNoticeClass">${CLASSES.map(cl=>SECTIONS.map(se=>`<option value="${cl}|${se}">${cl}-${se}</option>`).join('')).join('')}</select></div>
      <div class="field full"><label>Notice Text</label><textarea id="smsNoticeText" rows="3" style="width:100%; padding:11px 13px; border:1.5px solid var(--line); border-radius:9px; font-size:14px;" placeholder="e.g. School will remain closed tomorrow due to weather."></textarea></div>
    </div>
    <button class="btn btn-sm btn-orange" onclick="sendSmsNotice()">📤 Send Notice</button>
  </div>

  <div class="card">
    <div class="card-head"><div class="section-title">Delivery Log (${st.whatsapp.length})</div></div>
    <table>
      <thead><tr><th>To</th><th>Type</th><th>Message</th><th>Sent From</th><th>Time</th><th>Status</th></tr></thead>
      <tbody>
      ${st.whatsapp.slice(0,40).map(w=>`
        <tr class="hoverable">
          <td>${w.to}<br><span style="font-size:11px; color:var(--slate); font-family:var(--font-mono);">${w.phone}</span></td>
          <td>${pill('orange', w.type)}</td>
          <td style="max-width:300px; font-size:12.5px;">${w.msg}</td>
          <td style="font-size:11.5px; font-family:var(--font-mono); color:var(--slate);">${w.from || '—'}</td>
          <td style="font-size:12px;">${w.time}</td>
          <td>${w.status==='Delivered'||w.status==='Opened WhatsApp'?pill('green','✓✓ Delivered'):pill('yellow','Pending')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
};
function sendDefaulterReminders(){
  const st = App.state;
  const cls = document.getElementById('smsClass').value;
  const stage = Number(document.getElementById('smsStage').value);
  const template = FEE_REMINDER_TEMPLATES[stage];
  const defaulters = st.students.filter(s=>s.feeStatus==='pending' && (cls==='All' || s.cls===cls));
  if(!defaulters.length){ App.toast('No fee defaulters found for that class','ℹ️'); return; }
  const stageLabel = ['1st Reminder','2nd Reminder','3rd / Final Notice'][stage];
  openBatchSend(`Fee Defaulters — ${cls} (${stageLabel})`, defaulters.map(s=>({name:s.parentName, phone:s.guardianPhone, message:`Dear ${s.parentName}, regarding ${s.name} (${s.cls}-${s.section}): ${template}`})), 'Fee Defaulter Reminder');
}
function sendSmsNotice(){
  const st = App.state;
  const audience = document.getElementById('smsNoticeAudience').value;
  const msg = document.getElementById('smsNoticeText').value.trim();
  if(!msg){ App.toast('Write a notice first','⚠️'); return; }
  let title='School Notice — All Parents', recipients=st.students.map(s=>({name:s.parentName, phone:s.guardianPhone, message:msg}));
  if(audience==='class'){
    const [cls,section] = document.getElementById('smsNoticeClass').value.split('|');
    title = `School Notice — ${cls}-${section}`;
    recipients = st.students.filter(s=>s.cls===cls && s.section===section).map(s=>({name:s.parentName, phone:s.guardianPhone, message:msg}));
  }
  document.getElementById('smsNoticeText').value='';
  openBatchSend(title, recipients, 'School Notice');
}

Views.whatsapp = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card" style="margin-bottom:16px; background:linear-gradient(135deg,var(--orange-50),#fff); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
    <div style="font-size:13px; color:var(--slate); max-width:560px;"><b style="color:var(--ink);">Simulation layer.</b> This log shows exactly what would be sent through the WhatsApp Business API — admission confirmations, fee reminders, attendance alerts, homework and result notifications, birthday wishes, and broadcasts.</div>
    <div style="display:flex; gap:8px;">
      <button class="btn btn-sm btn-outline" onclick="App.go('messagecenter')">📣 Messaging Center</button>
      <button class="btn btn-sm btn-orange" onclick="sendBroadcast()">+ Send Broadcast</button>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="section-title">Message Log (${st.whatsapp.length})</div></div>
    <table>
      <thead><tr><th>To</th><th>Type</th><th>Message</th><th>Sent From</th><th>Time</th><th>Status</th></tr></thead>
      <tbody>
      ${st.whatsapp.slice(0,30).map(w=>`
        <tr class="hoverable">
          <td>${w.to}<br><span style="font-size:11px; color:var(--slate); font-family:var(--font-mono);">${w.phone}</span></td>
          <td>${pill('orange', w.type)}</td>
          <td style="max-width:320px; font-size:12.5px;">${w.msg}</td>
          <td style="font-size:11.5px; font-family:var(--font-mono); color:var(--slate);">${w.from || '—'}</td>
          <td style="font-size:12px;">${w.time}</td>
          <td>${w.status==='Delivered'?pill('green','✓✓ Delivered'):w.status==='Read'?pill('blue','✓✓ Read'):pill('yellow','Pending')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
};
function sendBroadcast(){
  App.state.whatsapp.unshift({id:uid('WA'), to:'All Parents & Staff', phone:'Broadcast', from: App.state.senderNumber||undefined, type:'Broadcast', msg:'📢 School will remain closed tomorrow due to heavy rainfall. Stay safe!', time:'Just now', status:'Delivered'});
  App.persist();
  App.toast('Broadcast sent to all parents & staff 📢');
  Views.whatsapp();
}

/* ---------- Birthdays ---------- */
Views.birthdays = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const withBday = st.students.map(s=>({...s, days: daysUntilBirthday(s.dob), month:Number(s.dob.split('-')[1]), day:Number(s.dob.split('-')[2])}));
  const today = withBday.filter(s=>s.days===0);
  const nextWeek = withBday.filter(s=>s.days>0 && s.days<=7).sort((a,b)=>a.days-b.days);
  const now = new Date();
  const thisMonth = withBday.filter(s=>s.month===now.getMonth()+1).sort((a,b)=>a.day-b.day);
  c.innerHTML = `
  ${nextWeek.length ? `<div class="card" style="margin-bottom:16px; background:linear-gradient(135deg,var(--orange-50),#fff); border:1.5px solid var(--orange-200,var(--orange-100));">
    <div style="font-size:13px;"><b>🔔 Reminder:</b> ${nextWeek.length} student${nextWeek.length!==1?'s have':' has'} a birthday coming up in the next 7 days. Send an early heads-up so parents can plan ahead.</div>
  </div>` : ''}
  <div class="grid two-col" style="margin-bottom:16px;">
    <div class="card">
      <div class="section-title" style="margin-bottom:10px;">Today — ${niceDate(todayStr())}</div>
      ${today.length ? today.map(s=>`<div style="text-align:center; padding:20px 0;"><div style="font-size:40px;">🎉</div><div style="font-weight:700; margin:8px 0 2px;">${s.name}</div><div style="font-size:12px; color:var(--slate); margin-bottom:12px;">${s.cls}-${s.section}</div><button class="btn btn-sm btn-orange" onclick="sendBirthdayWish('${s.id}')">Send WhatsApp Wish</button></div>`).join('') : `<div class="empty-state"><div class="em-ic">📅</div><h3>No birthdays today</h3></div>`}
    </div>
    <div class="card">
      <div class="card-head"><div><div class="section-title">📆 Coming Up — Next 7 Days</div><div class="section-sub" style="margin-bottom:0;">Get ahead of it with an early reminder</div></div></div>
      <table>
        <thead><tr><th>Student</th><th>Class</th><th>When</th><th></th></tr></thead>
        <tbody>
        ${nextWeek.map(s=>`
          <tr class="hoverable">
            <td>${s.name}</td><td>${s.cls}-${s.section}</td>
            <td>${pill('orange', s.days===1?'Tomorrow':'in '+s.days+' days')}</td>
            <td><button class="btn btn-sm btn-outline" onclick="sendBirthdayWish('${s.id}')">Send Reminder</button></td>
          </tr>`).join('')}
        ${!nextWeek.length ? `<tr><td colspan="4"><div class="empty-state"><div class="em-ic">🎈</div><p>Nothing in the next 7 days</p></div></td></tr>` : ''}
        </tbody>
      </table>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div><div class="section-title">🎂 Birthdays This Month</div><div class="section-sub" style="margin-bottom:0;">Full month view</div></div></div>
    <table>
      <thead><tr><th>Student</th><th>Class</th><th>Date</th><th></th></tr></thead>
      <tbody>
      ${thisMonth.map(s=>`
        <tr class="hoverable">
          <td>${s.name}</td><td>${s.cls}-${s.section}</td>
          <td>${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][s.month-1]} ${s.day}</td>
          <td><button class="btn btn-sm btn-outline" onclick="sendBirthdayWish('${s.id}')">${s.days===0?'Send Wish':'Send Reminder'}</button></td>
        </tr>`).join('')}
      ${!thisMonth.length ? `<tr><td colspan="4"><div class="empty-state"><div class="em-ic">🎈</div><p>No birthdays this month</p></div></td></tr>` : ''}
      </tbody>
    </table>
  </div>`;
};

/* ---------- Notices ---------- */
Views.notices = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Notices & Circulars</div><div class="section-sub" style="margin-bottom:0;">School-wide announcements</div></div>
      <button class="btn btn-sm btn-orange" onclick="openAddNotice()">+ New Notice</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
    ${st.notices.map(n=>`
      <div style="border:1px solid var(--line); border-radius:12px; padding:16px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <div style="font-weight:700; font-size:14px;">${n.title}</div>
          ${pill('orange', n.audience)}
        </div>
        <div style="font-size:13px; color:var(--slate); margin-bottom:6px;">${n.body}</div>
        <div style="font-size:11.5px; color:var(--slate-light);">${niceDate(n.date)}</div>
      </div>`).join('')}
    </div>
  </div>`;
};
function openAddNotice(){
  App.openModal(`
    <div class="modal-head"><h3>New Notice</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="field"><label>Title</label><input id="nTitle" placeholder="Notice title"></div>
      <div class="field"><label>Audience</label><select id="nAudience"><option>All</option><option>Parents</option><option>Teachers</option><option>Students</option></select></div>
      <div class="field"><label>Message</label><textarea id="nBody" rows="4" style="width:100%; padding:11px 13px; border:1.5px solid var(--line); border-radius:9px; font-size:14px;" placeholder="Write the notice..."></textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Cancel</button>
      <button class="btn btn-sm btn-orange" onclick="submitNotice()">Publish & Send WhatsApp</button>
    </div>`);
}
function submitNotice(){
  const title = document.getElementById('nTitle').value.trim() || 'Untitled Notice';
  const audience = document.getElementById('nAudience').value;
  const body = document.getElementById('nBody').value.trim() || '—';
  App.state.notices.unshift({id:uid('N'), title, date:todayStr(), audience, body});
  App.state.whatsapp.unshift({id:uid('WA'), to:audience, phone:'Broadcast', type:'School Circular', msg:`${title}: ${body}`, time:'Just now', status:'Delivered'});
  App.persist();
  App.closeModal();
  App.toast('Notice published & sent via WhatsApp 📢');
  Views.notices();
}

/* ---------- Reports ---------- */
Views.reports = function(){
  const c = document.getElementById('content');
  const st = App.state;
  c.innerHTML = `
  <div class="card" style="margin-bottom:14px;"><div class="section-title" style="margin-bottom:2px;">💰 Fee Collection Reports</div><div class="section-sub" style="margin-bottom:0;">Real data from your fee records — Print/PDF or Export Excel</div></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fit, minmax(230px,1fr)); margin-bottom:18px; gap:12px;">
    ${FEE_REPORT_TYPES.map(r=>`
      <div class="card" style="display:flex; align-items:center; justify-content:space-between;">
        <div><div style="font-weight:700; font-size:13.5px;">${r.label}</div><div style="font-size:11.5px; color:var(--slate);">${r.sub}</div></div>
        <button class="btn btn-sm btn-outline" onclick="openFeeReport('${r.id}')">View</button>
      </div>`).join('')}
  </div>
  <div class="grid" style="grid-template-columns:repeat(3,1fr); margin-bottom:18px;">
    ${['Attendance','Homework','Late Comer','Teacher Activity'].map(r=>`
      <div class="card" style="display:flex; align-items:center; justify-content:space-between;">
        <div><div style="font-weight:700; font-size:13.5px;">${r} Report</div><div style="font-size:11.5px; color:var(--slate);">PDF · Excel · Print</div></div>
        <button class="btn btn-sm btn-outline" onclick="App.toast('${r} report generated & ready to download 📄')">Generate</button>
      </div>`).join('')}
  </div>
  <div class="card">
    <div class="section-title" style="margin-bottom:10px;">Student Performance — Class Averages</div>
    <canvas id="perfChart" height="90"></canvas>
  </div>`;
  new Chart(document.getElementById('perfChart'), {
    type:'bar',
    data:{labels:CLASSES, datasets:[{label:'Avg %', data:CLASSES.map(()=>randInt(65,92)), backgroundColor:'#ea580c', borderRadius:6}]},
    options:{plugins:{legend:{display:false}}, scales:{y:{min:0,max:100,ticks:{callback:v=>v+'%'}}, x:{grid:{display:false}}}}
  });
};
const FEE_REPORT_TYPES = [
  {id:'daily', label:'Daily Collection Report', sub:"Today's payments"},
  {id:'monthly', label:'Monthly Collection Report', sub:'Current month totals'},
  {id:'yearly', label:'Yearly Collection Report', sub:'2026 totals by month'},
  {id:'classwise', label:'Class Wise Collection', sub:'Collected vs pending per class'},
  {id:'ledger', label:'Student Ledger', sub:'Full payment history, one student'},
  {id:'outstanding', label:'Outstanding Report', sub:'Every unpaid balance'},
  {id:'discount', label:'Discount Report', sub:'Discounts given, all vouchers'},
  {id:'fine', label:'Fine Report', sub:'Fines applied, all vouchers'},
];
function feeReportRows(type, extra){
  const st = App.state;
  if(type==='daily'){
    const rows=[];
    st.fees.forEach(f=>(f.payments||[]).forEach(p=>{ if(p.date===todayStr()){ const s=App.student(f.studentId); if(s) rows.push([s.name, s.cls+'-'+s.section, p.method||'Cash', money(p.amount), p.receivedBy||'Admin']); } }));
    return {header:['Student','Class','Method','Amount','Received By'], rows, title:'Daily Collection — '+niceDate(todayStr())};
  }
  if(type==='monthly'){
    const month = st.feeMonths[st.feeMonths.length-1];
    const rows = st.fees.filter(f=>f.month===month).map(f=>{ const s=App.student(f.studentId); return s?[s.name, s.cls+'-'+s.section, money(feeTotal(f)), money(f.paidAmount||0), money(feeBalance(f)), f.status]:null; }).filter(Boolean);
    return {header:['Student','Class','Total','Paid','Balance','Status'], rows, title:'Monthly Collection — '+month};
  }
  if(type==='yearly'){
    const rows = st.feeMonths.map(m=>{
      const monthFees = st.fees.filter(f=>f.month===m);
      const collected = monthFees.reduce((a,f)=>a+(f.paidAmount||0),0);
      const pending = monthFees.reduce((a,f)=>a+feeBalance(f),0);
      return [m, monthFees.length, money(collected), money(pending)];
    });
    return {header:['Month','Vouchers','Collected','Pending'], rows, title:'Yearly Collection — 2026'};
  }
  if(type==='classwise'){
    const month = st.feeMonths[st.feeMonths.length-1];
    const rows = CLASSES.map(cls=>{
      const clsFees = st.fees.filter(f=>f.month===month && App.student(f.studentId)?.cls===cls);
      const collected = clsFees.reduce((a,f)=>a+(f.paidAmount||0),0);
      const pending = clsFees.reduce((a,f)=>a+feeBalance(f),0);
      return [cls, clsFees.length, money(collected), money(pending)];
    });
    return {header:['Class','Students','Collected','Pending'], rows, title:'Class Wise Collection — '+month};
  }
  if(type==='ledger'){
    const s = extra || st.students[0];
    const rows = st.fees.filter(f=>f.studentId===s.id).map(f=>[f.month, money(feeTotal(f)), money(f.paidAmount||0), money(feeBalance(f)), f.status]);
    return {header:['Month','Total','Paid','Balance','Status'], rows, title:'Student Ledger — '+s.name};
  }
  if(type==='outstanding'){
    const rows = st.fees.filter(f=>f.status==='pending').map(f=>{ const s=App.student(f.studentId); return s?[s.name, s.cls+'-'+s.section, f.month, money(feeBalance(f))]:null; }).filter(Boolean);
    return {header:['Student','Class','Month','Balance'], rows, title:'Outstanding Report — All Months'};
  }
  if(type==='discount'){
    const rows = st.fees.filter(f=>f.discount>0).map(f=>{ const s=App.student(f.studentId); return s?[s.name, s.cls+'-'+s.section, f.month, money(f.discount)]:null; }).filter(Boolean);
    return {header:['Student','Class','Month','Discount'], rows, title:'Discount Report — All Vouchers'};
  }
  if(type==='fine'){
    const rows = st.fees.filter(f=>f.fine>0).map(f=>{ const s=App.student(f.studentId); return s?[s.name, s.cls+'-'+s.section, f.month, money(f.fine)]:null; }).filter(Boolean);
    return {header:['Student','Class','Month','Fine'], rows, title:'Fine Report — All Vouchers'};
  }
  return {header:[], rows:[], title:'Report'};
}
function openFeeReport(type){
  const {header, rows, title} = feeReportRows(type);
  App._lastFeeReport = {type, header, rows, title};
  App.openModal(`
    <div class="modal-head no-print"><h3>${title}</h3><button class="close-x" onclick="App.closeModal()">✕</button></div>
    <div class="modal-body">
      <div id="printArea">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; padding-bottom:10px; border-bottom:2px solid var(--orange-600);">
          ${barcodeBlock(36)}
          <div><div style="font-weight:800;">Leads School System</div><div style="font-size:11px; color:var(--slate);">${title} · Generated ${niceDate(todayStr())}</div></div>
        </div>
        <table style="width:100%; font-size:12px;">
          <thead><tr>${header.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${rows.length ? rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${header.length}" style="text-align:center; padding:20px; color:var(--slate);">No data for this report</td></tr>`}</tbody>
        </table>
      </div>
    </div>
    <div class="modal-foot no-print">
      <button class="btn btn-sm btn-outline" onclick="App.closeModal()">Close</button>
      <button class="btn btn-sm btn-outline" onclick="exportFeeReportExcel()">⬇ Excel</button>
      <button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print / PDF</button>
    </div>`);
}
function exportFeeReportExcel(){
  const r = App._lastFeeReport;
  if(!r) return;
  const csvRows = [r.header, ...r.rows];
  const csv = csvRows.map(row=>row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  try{
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = r.type+'-report.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    App.toast('Report exported ⬇');
  }catch(e){ App.toast('Export failed','⚠️'); }
}

/* ---------- Progress Reports (Weekly & Monthly) ---------- */
Views.progressreports = function(){
  const c = document.getElementById('content');
  const st = App.state;
  const isParent = st.role==='parent';
  const isStudent = st.role==='student';
  const period = App._prPeriod || 'weekly';
  const chosenId = (isParent||isStudent) ? st.students[0]?.id : (App._prStudent || st.students[0]?.id);
  const s = App.student(chosenId);
  c.innerHTML = `
  <div class="grid two-col">
    ${(!isParent && !isStudent) ? `
    <div class="card">
      <div class="card-head"><div class="section-title">Select Student</div></div>
      <div class="searchbar"><span>🔍</span><input id="prSearch" placeholder="Search students..." oninput="Views.progressreports()"></div>
      <div style="display:flex; flex-direction:column; gap:4px; max-height:440px; overflow-y:auto;">
      ${st.students.filter(x=>{
        const q=(document.getElementById('prSearch')?.value||'').toLowerCase();
        return !q || x.name.toLowerCase().includes(q);
      }).slice(0,40).map(x=>`
        <div onclick="App._prStudent='${x.id}'; Views.progressreports();" style="cursor:pointer; display:flex; align-items:center; gap:10px; padding:8px; border-radius:9px; background:${x.id===chosenId?'var(--orange-50)':'transparent'};">
          <div class="avatar" style="width:28px;height:28px;font-size:10px; background:var(--orange-500);">${initials(x.name)}</div>
          <div><div style="font-size:12.5px; font-weight:600;">${x.name}</div><div style="font-size:10.5px; color:var(--slate);">${x.cls}-${x.section}</div></div>
        </div>`).join('')}
      </div>
    </div>` : ''}
    <div style="${(!isParent && !isStudent) ? '' : 'grid-column:1/-1;'}">
      <div style="display:flex; justify-content:${(!isParent&&!isStudent)?'flex-start':'center'}; gap:8px; margin-bottom:12px;">
        <button class="chip ${period==='weekly'?'active':''}" onclick="App._prPeriod='weekly'; Views.progressreports();">Weekly Report</button>
        <button class="chip ${period==='monthly'?'active':''}" onclick="App._prPeriod='monthly'; Views.progressreports();">Monthly Report</button>
      </div>
      ${s ? progressReportCard(s, period) : `<div class="empty-state"><div class="em-ic">📄</div><h3>No student selected</h3></div>`}
      ${s ? `<div style="text-align:center; margin-top:14px;">
        <button class="btn btn-sm btn-orange" onclick="window.print()">🖨️ Print / Save as PDF</button>
        ${waButton(s.guardianPhone, `Dear ${s.parentName}, ${s.name}'s ${period} progress report is ready. Please check the parent portal or ask the school office for a printed copy.`, 'Share via WhatsApp')}
      </div>` : ''}
    </div>
  </div>`;
};
function progressReportCard(s, period){
  const st = App.state;
  const seed = s.id+period;
  const attendancePct = 78 + (hashCode(seed+'att')%20);
  const presentDays = period==='weekly' ? Math.round(6*attendancePct/100) : Math.round(24*attendancePct/100);
  const totalDays = period==='weekly' ? 6 : 24;
  const diaryDone = 70 + (hashCode(seed+'diary')%28);
  const testAvg = 55 + (hashCode(seed+'test')%40);
  const notebookPct = 60 + (hashCode(seed+'nb')%35);
  const lateCount = st.lateComers.filter(l=>l.studentId===s.id).length;
  const disciplinePct = Math.max(50, 100 - lateCount*8 - (hashCode(seed+'disc')%15));
  const participation = ['Excellent','Very Good','Good','Satisfactory'][hashCode(seed+'part')%4];
  const overall = Math.round((attendancePct+diaryDone+testAvg+notebookPct+disciplinePct)/5);
  const remark = overall>=85 ? 'An outstanding period — keep up the excellent work!' : overall>=70 ? 'Solid, consistent progress. A little more focus on tests would help.' : 'Needs more consistency — please encourage daily revision and timely diary completion at home.';
  return `<div class="result-card" style="max-width:680px;">
    <div class="rc-watermark">🔥</div>
    <div class="rc-head">
      <img src="data:image/png;base64,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fVo6V+wpUJ122mnMmzePv/zlLxx55JG1SmS7GQhNUBmjkgY6W9QHRnXLdyRnvLubawANBoO0adOGnj177mqytyhgxbBtDSjb4eB1awzJZt600hh+k8c+noXScMfvbkvkidWwq7/+7a9s2rQJrTV3/v5Ob+Kbpkk0Gt0pCrvuYh81ahRt2rTx1MFp06axcuXKBtXB5Ah3KaVncF+2bBllZWXewmwm+0PjYNSEWvrub9VVVxszvCerhRPfmFjrey4brbufC3IrVqzgs88+8+5DXZbVt29fzj33XLTWbN26lb/+9a+14re01oz//e8x/QHuee0Lp/O1rl36uKU2tHB7Adshn6+lkWu3IwPce3niiSfSr18/brjhBk477TRPPXQfwskxbnX397BHEDETNqwGbQn1SVpaGjk5ORQUFFBUVETbtm1p36497dq3o127dhQVFZGfn09+fj6xWIwePXqwbdu2+hbGngSa7q4KYgEoK+bRSJn4Q7pF9ZrNIwlBv8nqreU8++U8jh1zPIOGHOIsDCERplON4IknnkAIwTHHHMNxxx9Xq3TxpEmTWL58eaOhCWNPH1vLDuN6ExuLboeaFBf3O65h21WNWlIl9DovN6HfX12HgPvA69u3L6ZpelkA9QGQ1poP3v+A6upqQqEQAGPGjCEzM5OKioqd9nPH7D//+Q8nn3xyg+dz66238sorr2DbNo8//jjXXXcdrVu39h7anbt05corLucff/8HXy1cz8iebaiqjmEKUTtxubnpjlaE7RiA1ae43OabFgUsP7WDzXdtQ05oCkcccYRHct54441a5o1rrrmGTZs2MWXKFLZv375Tqe6kuVlt4tRId7QmIYTWmrS0NHr37k2bNm1o27Yt7dq187Y2bdqQn59PTk4OaWlpu75Cv5+cnJy6gJVc3s7fQoOrAQIQrgYisSrQEqGcZpSe8Uw33+SxlCIYDPHPiVOJWIrxd/yuFkCYpslf/vIXtm3bhpTSqyrq2m0Ann322XrBxy3zEgwGOfGkEz3vYCwW45133mn0IeO+XzeJ2I11+iGM7ruq+w6wePFir0qC1ppOnTrRrl07Vq9e3SBgSSlZu3YtX331FccffzyxWIzCwkJGjx7NO++8s1MFC/fv999/nw0bNtC2bdta6rkbMzdgwADOPPNMr/7Wo48+ykMPPeTdO601t//ud/zfs88x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Aa38BpalkbtZRNIpw+1XR/3lHfnlivUL9Svn9hfjJtgt8rB3Ti2A04W9YwLAZGOe08mTJ3v5rnfddRf3339/rdjENm3asGjRIjIyMry54H4fnMT83r17U1VV5dboK0lgVImZZHTfDLQDtJRSaK056qijuOmmmxg6dCitW7eudYLRaLSWjcC1Z0WjURbMX8DkLybz8ccfc9ddd3npEMcccwzPP/988iRzL7x7wlNY0gKgpQHaZLSaWx7dHp6+Zkvop6KP1koLvZt2ZFspTF+Qv30+g5jS/D5RQsa2nViSqVOneraSm2++mazsrJ3YlWmaTJkyhS+//NI7bkZGBtnZ2bXUucLCQg477DAyMjJq9dVzVab6vG7J/zfWrr4psVv1MaTmisWqr8/iroCq7u831Lor+fh17WHufXDn6p133snJJ5/M5s2b2bRpExs3bmTz5s1s3ryZLVu2UF5ezrZt2/i/f/8fjz72aL11stzfM02T22+/nVNPPRXDMHjvvff4+uuvGTlypLdYTdPk/nvu4dTTT+fxz7/nntOGEolFMKXYrckckILN5dVq3pbtEvhOnjfBffDbLQRYHRLYsEuGdd1113kpZ6+99hp33313rdCmWCzGZZddRmZmJrZts379erTWXo03V6Xs2bMn3377rQtYq1xscNt6RRJqYTucyqNeaL1bNta1RYETvJjMsNwJEo1GOfroo2sV/xs5cqTnIRw1alSt3ntaa3dAcoAewDT2rj19Q5RWLNq2baMQYuH0NZuHxKJRbUinsUmT1mCiamTQNFhfVsW/psxn5FGjOOzwEdi2hWE6C+fee+9FKUXXrl356U9/ulNtJZcOp6Wl8cILL1BcXExeXh45OTlkZWWRkZFR72JIXqi7YhBNCStoLDp+X0h9nuaWOH5j6TcABQUFXrme+qSyspIdO3Z4D+eGxs1lFyeddBLDhg1jxowZANx999189NFH3gPEtm1OOfVUhg4bxl8/+45rj+hLftAgZqsm14RRWmP6g8xbX0JpZYSAlF9HnfXXEknPbgf2AQnty67PE+leW2ZmptfwQ2vNI4884s1XV90PBAJcdtll3tr45S9/yccff8zNN9/MnXfe6TlkEnF2SgghgQWek9llOQLmusvTBaDPPvuM7du3e08qv9+P3++ntLSUzz//nN/97ndccMEFxC3HsBkKhTwDW1pa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">
      <div><div style="font-weight:800; font-size:15px;">Leads School System</div><div style="font-size:11px; opacity:.85;">Zeenat Campus · ${period==='weekly'?'Weekly':'Monthly'} Progress Report</div></div>
    </div>
    <div class="rc-body">
      <div class="form-grid" style="font-size:12px; margin-bottom:14px;">
        ${infoRow('Student', s.name)} ${infoRow('Roll No', s.roll)}
        ${infoRow('Class', s.cls+'-'+s.section)} ${infoRow('Period', period==='weekly' ? 'Week of '+niceDate(todayStr()) : 'July 2026')}
      </div>
      <div class="grid" style="grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:14px;">
        ${prMetric('Attendance', attendancePct, presentDays+'/'+totalDays+' days')}
        ${prMetric('Diary Completion', diaryDone, 'Homework & diary')}
        ${prMetric('Test Average', testAvg, 'Daily & weekly tests')}
        ${prMetric('Notebook Checking', notebookPct, 'Done on time')}
        ${prMetric('Discipline', disciplinePct, lateCount+' late arrival(s)')}
        ${prMetric('Overall', overall, 'Composite score')}
      </div>
      <div class="form-grid" style="font-size:12px; margin-bottom:10px;">
        ${infoRow('Participation', participation)}
        ${infoRow('Late Arrivals', lateCount+' this period')}
      </div>
      <div style="font-size:11.5px; color:var(--slate); font-style:italic; padding-top:8px; border-top:1px solid var(--line);">Teacher's remarks: ${remark}</div>
    </div>
  </div>`;
}
function prMetric(label, pct, sub){
  const color = pct>=80?'var(--success)':pct>=60?'var(--gold)':'var(--danger)';
  return `<div style="text-align:center; background:var(--orange-50); border-radius:9px; padding:10px 6px;">
    <div style="font-size:10px; color:var(--slate); text-transform:uppercase; letter-spacing:.03em;">${label}</div>
    <div style="font-weight:700; font-family:var(--font-mono); font-size:16px; color:${color};">${pct}%</div>
    <div style="font-size:9.5px; color:var(--slate-light);">${sub}</div>
  </div>`;
}

Views.library = function(){
  const c = document.getElementById('content');
  const books = [
    {title:'English Grammar in Use', author:'Raymond Murphy', total:12, issued:5},
    {title:'Mathematics for Class 6', author:'Punjab Textbook Board', total:20, issued:14},
    {title:'Urdu Qaida', author:'Various', total:30, issued:9},
    {title:'The Story of Pakistan', author:'K.K. Aziz', total:8, issued:3},
    {title:'General Science Vol. 2', author:'Various', total:15, issued:11},
  ];
  c.innerHTML = `
  <div class="card">
    <div class="card-head">
      <div><div class="section-title">Library — Book Records</div><div class="section-sub" style="margin-bottom:0;">Issue, return & fine tracking</div></div>
      <button class="btn btn-sm btn-orange" onclick="App.toast('Issue book form would open here')">+ Issue Book</button>
    </div>
    <table>
      <thead><tr><th>Title</th><th>Author</th><th>Total Copies</th><th>Issued</th><th>Available</th></tr></thead>
      <tbody>
      ${books.map(b=>`<tr class="hoverable"><td>${b.title}</td><td>${b.author}</td><td>${b.total}</td><td>${b.issued}</td><td>${pill(b.total-b.issued>3?'green':'yellow', b.total-b.issued+' free')}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>`;
};

/* ---------------- Boot ---------------- */
App.init();