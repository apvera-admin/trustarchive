-- Demo requests now come from individuals as well as firms.
-- audience decides which demo video they see: 'firm' or 'individual'.
alter table public.demo_requests add column if not exists audience text;
update public.demo_requests set audience = 'firm' where audience is null;
alter table public.demo_requests alter column firm drop not null;
