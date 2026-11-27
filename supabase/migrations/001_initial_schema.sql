-- NetUp Pilot Database Schema
-- Run this migration in your Supabase SQL Editor or via Supabase CLI.

create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  startup_stage text not null,
  sector text not null,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_email_idx on public.waitlist (lower(email));
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

create table if not exists public.partner_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text not null,
  partner_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists partner_inquiries_created_at_idx on public.partner_inquiries (created_at desc);

-- Enable Row Level Security
alter table public.waitlist enable row level security;
alter table public.partner_inquiries enable row level security;

-- Allow public anonymous inserts from the marketing site, while keeping reads private
drop policy if exists "Allow public waitlist insert" on public.waitlist;
create policy "Allow public waitlist insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow public partner inquiry insert" on public.partner_inquiries;
create policy "Allow public partner inquiry insert"
  on public.partner_inquiries
  for insert
  to anon, authenticated
  with check (true);
