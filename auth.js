/* Auth + dữ liệu người dùng bằng Supabase.
   Khóa publishable được phép nằm ở front-end (dữ liệu được bảo vệ bởi Row Level Security).
   TUYỆT ĐỐI không đặt khóa secret / service_role vào file này. */
const SUPABASE_URL = 'https://dbdvlxvnvzctldszprjl.supabase.co'; // dạng https://xxxxxxxx.supabase.co
const SUPABASE_KEY = 'sb_publishable_gTEjQ1xhZkeMJyS_kGSnmQ_hsXV-Vc4';

const sb = SUPABASE_URL.startsWith('https://') ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
if (!sb) console.error('Chưa cấu hình SUPABASE_URL trong auth.js');

const Auth = (() => {
  const PAID = ['yearly', 'yearly2']; // các gói trả phí
  const need = () => { if (!sb) throw new Error('Hệ thống chưa được cấu hình kết nối. Hãy điền SUPABASE_URL trong auth.js.'); };
  const vi = e => {
    const m = (e && e.message || '').toLowerCase();
    if (m.includes('invalid login')) return 'Email hoặc mật khẩu chưa đúng. Hãy kiểm tra lại.';
    if (m.includes('already registered')) return 'Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.';
    if (m.includes('not confirmed')) return 'Email chưa được xác nhận. Hãy kiểm tra hộp thư của bạn.';
    if (m.includes('rate limit') || m.includes('too many')) return 'Bạn thao tác quá nhanh. Hãy đợi một lát rồi thử lại.';
    if (m.includes('password')) return 'Mật khẩu chưa đủ mạnh. Hãy dùng ít nhất 8 ký tự.';
    if (m.includes('fetch')) return 'Không kết nối được máy chủ. Hãy kiểm tra mạng và thử lại.';
    return 'Có lỗi xảy ra. Hãy thử lại sau.';
  };

  // Lấy người dùng hiện tại + gói học từ bảng profiles
  async function load() {
    if (!sb) return null;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return null;
    const { data: p } = await sb.from('profiles').select('full_name, plan, plan_expires_at').eq('id', session.user.id).maybeSingle();
    const active = p && PAID.includes(p.plan) && (!p.plan_expires_at || new Date(p.plan_expires_at) > new Date());
    return {
      name: (p && p.full_name) || (session.user.user_metadata && session.user.user_metadata.full_name) || session.user.email,
      email: session.user.email,
      plan: active ? p.plan : 'free'
    };
  }

  return {
    current: load,
    isPaid: u => !!u && PAID.includes(u.plan),
    planName: p => ({ yearly: 'Gói năm', yearly2: 'Gói năm nâng cao' }[p] || 'Miễn phí'),
    async register({ name, email, password }) {
      need();
      const { data, error } = await sb.auth.signUp({ email: email.trim(), password, options: { data: { full_name: name.trim() } } });
      if (error) throw new Error(vi(error));
      if (!data.session) throw new Error('Tài khoản đã được tạo. Hãy kiểm tra email để xác nhận, sau đó quay lại đăng nhập.');
    },
    async login({ email, password }) {
      need();
      const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
      if (error) throw new Error(vi(error));
    },
    // DEMO: gọi hàm SQL demo_activate_plan (xem supabase_setup.sql). Giá do server quyết định theo mã gói. Khi dùng cổng thanh toán thật, bỏ hàm này:
    // server sẽ nâng gói sau khi cổng thanh toán xác nhận.
    async upgrade(plan) {
      need();
      const { error } = await sb.rpc('demo_activate_plan', { p_plan: plan });
      if (error) throw new Error(vi(error));
    },
    async logout() { if (sb) await sb.auth.signOut(); location.href = 'login.html'; },
    async requireGuest() { if (await load()) { location.replace('dashboard.html'); return true; } return false; },
    async requireUser() { const u = await load(); if (!u) location.replace('login.html'); return u; }
  };
})();

/* Helpers dùng chung cho form */
function setError(input, msg) {
  const box = input.closest('.field').querySelector('.err');
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  box.textContent = msg || '';
}
function bindPasswordToggle() {
  document.querySelectorAll('.pw button').forEach(b => b.addEventListener('click', () => {
    const input = b.parentElement.querySelector('input');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    b.textContent = show ? 'Ẩn' : 'Hiện';
    b.setAttribute('aria-pressed', show);
  }));
}
const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
