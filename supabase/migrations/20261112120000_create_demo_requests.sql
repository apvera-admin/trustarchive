-- Firm demo requests (system of record). Notion is a best-effort mirror.
-- Written only by server-side API routes using the service role key.

create table if not exists public.demo_requests (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  email           text not null,
  name            text not null,
  firm            text not null,
  role            text,
  trusts_managed  text,
  seats           text,
  plan_interest   text,
  source          text,          -- sanitized ?ref= value at request time
  notion_page_id  text
);

-- RLS on with no policies: the anon/authenticated keys get no access.
-- The service role bypasses RLS, so only the server can read or write.
alter table public.demo_requests enable row level security;
