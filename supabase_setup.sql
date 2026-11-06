-- Chạy toàn bộ file này trong Supabase → SQL Editor → New query → Run.
-- Chạy lại nhiều lần vẫn an toàn.

create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text not null default '',
  plan text not null default 'free' check (plan in ('free','yearly')),
  plan_expires_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  amount integer not null,
  status text not null default 'pending',
  provider text,
  provider_ref text,
  created_at timestamptz default now()
);

-- Row Level Security: mỗi người chỉ đọc được dữ liệu của chính mình, không ai tự sửa được cột plan từ trình duyệt
alter table profiles enable row level security;
alter table payments enable row level security;
drop policy if exists "read own profile" on profiles;
create policy "read own profile" on profiles for select using (auth.uid() = id);
drop policy if exists "read own payments" on payments;
create policy "read own payments" on payments for select using (auth.uid() = user_id);

-- Tự tạo hồ sơ khi có người đăng ký
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''));
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute function handle_new_user();

-- ===== CHỈ DÙNG ĐỂ THỬ NGHIỆM =====
-- Cho phép người đã đăng nhập tự bấm "thanh toán" để lên gói năm (vì chưa có cổng thanh toán thật).
-- Hàm này khiến ai cũng tự nâng gói được: PHẢI XÓA khi tích hợp VNPay/MoMo/PayOS:
--   drop function demo_activate_yearly();
create or replace function demo_activate_yearly() returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  update profiles set plan = 'yearly', plan_expires_at = now() + interval '1 year' where id = auth.uid();
  insert into payments (user_id, amount, status, provider) values (auth.uid(), 2000000, 'demo', 'demo');
end $$;
revoke all on function demo_activate_yearly() from public;
grant execute on function demo_activate_yearly() to authenticated;
