/* Leads School System — Supabase persistence bridge */
(function () {
  const SUPABASE_URL = 'https://kepxnnapnbiimgdctelp.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__UVi7mxdZLknPrOmYszJPw_hj_X6ml2';
  const KEY = 'main';

  function init() {
    if (!window.supabase) {
      console.error('Supabase SDK was not loaded.');
      return;
    }

    window.lssSupabase = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

    // Compatibility layer for the existing LSS application.
    // The app already calls window.storage.get/set; these calls now persist
    // the complete application state in Supabase instead of browser storage.
    window.storage = {
      async get(key) {
        if (key !== 'lss_students') return null;
        const { data, error } = await window.lssSupabase
          .from('lss_app_state')
          .select('data')
          .eq('id', KEY)
          .maybeSingle();
        if (error) throw error;
        return data ? { value: JSON.stringify(data.data || {}) } : null;
      },

      async set(key, value) {
        if (key !== 'lss_students') return;
        let parsed = {};
        try { parsed = JSON.parse(value); } catch (_) {}
        const { error } = await window.lssSupabase
          .from('lss_app_state')
          .upsert({
            id: KEY,
            data: parsed,
            updated_at: new Date().toISOString()
          });
        if (error) throw error;
        return { ok: true };
      }
    };

    window.LSS_SUPABASE_CONNECTED = true;
    console.log('LSS: Supabase persistence connected.');
  }

  if (window.supabase) init();
  else window.addEventListener('load', init, { once: true });
})();
