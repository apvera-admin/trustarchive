-- Waitlist signups (system of record). Notion is a best-effort mirror.
-- Written only by server-side API routes using the service role key.

create table if not exists public.waitlist (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  email               text not null,
  name                text,
  firm                text,
  plan_interest       text,
  source              text,          -- sanitized ?ref= value at signup
  trusts_managed      text,
  current_method      text,
  biggest_pain        text,
  founding_interest   boolean,
  survey_completed_at timestamptz,
  notion_page_id      text
);

-- RLS on with no policies: the anon/authenticated keys get no access.
-- The service role bypasses RLS, so only the server can read or write.
alter table public.waitlist enable row level security;
