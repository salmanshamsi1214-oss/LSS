/* LSS Supabase persistence bridge
   Keeps the existing UI intact while replacing browser-only window.storage
   persistence with the LSS Supabase database.
*/
(function () {
  const SUPABASE_URL = 'https://kepxnnapnbiimgdctelp.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__UVi7mxdZLknPrOmYszJPw_hj_X6ml2';
  const KEY = 'main';

  function client() {
    if (!window.supabase) throw new Error('Supabase SDK is not loaded');
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  }

  const db = client();

  window.storage = {
    async get(key) {
      if (key !== 'lss_students') return null;
      const { data, error } = await db.from('lss_app_state').select('data').eq('id', KEY).maybeSingle();
      if (error) throw error;
      return { value: data ? JSON.stringify(data.data || {}) : null };
    },
    async set(key, value) {
      if (key !== 'lss_students') return { ok: true };
      const parsed = typeof value === 'string' ? JSON.parse(value) : value;
      const { error } = await db.from('lss_app_state').upsert({ id: KEY, data: parsed }, { onConflict: 'id' });
      if (error) throw error;
      return { ok: true };
    },
    async delete(key) {
      if (key !== 'lss_students') return { ok: true };
      const { error } = await db.from('lss_app_state').delete().eq('id', KEY);
      if (error) throw error;
      return { ok: true };
    }
  };

  window.LSS_SUPABASE = db;
  window.LSS_SUPABASE_CONNECTED = true;
  console.log('LSS: Supabase database persistence enabled');
})();
