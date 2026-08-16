/* LSS Supabase persistence bridge — keeps the original UI unchanged. */
(function () {
  const SUPABASE_URL = 'https://kepxnnapnbiimgdctelp.supabase.co';
  const SUPABASE_KEY = 'sb_publishable__UVi7mxdZLknPrOmYszJPw_hj_X6ml2';

  let client = null;
  function getClient() {
    if (client) return client;
    if (!window.supabase || typeof window.supabase.createClient !== 'function') {
      throw new Error('Supabase SDK is not loaded.');
    }
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    return client;
  }

  window.storage = {
    async get(key) {
      if (key !== 'lss_students') return null;
      const { data, error } = await getClient()
        .from('lss_app_state')
        .select('data')
        .eq('id', 'main')
        .maybeSingle();
      if (error) throw error;
      if (!data || !data.data) return null;
      return { value: JSON.stringify(data.data) };
    },
    async set(key, value) {
      if (key !== 'lss_students') return;
      const parsed = typeof value === 'string' ? JSON.parse(value) : value;
      const { error } = await getClient()
        .from('lss_app_state')
        .upsert({ id: 'main', data: parsed, updated_at: new Date().toISOString() }, { onConflict: 'id' });
      if (error) throw error;
      return { ok: true };
    },
    async delete(key) {
      if (key !== 'lss_students') return;
      const { error } = await getClient().from('lss_app_state').delete().eq('id', 'main');
      if (error) throw error;
      return { ok: true };
    }
  };
})();
