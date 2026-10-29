// Shared waitlist rules. Safe to import from client and server code — no secrets here.

export const REF_STORAGE_KEY = 'ta_ref';
const REF_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const BIGGEST_PAIN_MAX = 1000;

export const TRUSTS_MANAGED_OPTIONS = [
  'Just one',
  '2 to 5',
  '6 or more',
  'I manage trusts for clients',
];

export const CURRENT_METHOD_OPTIONS = [
  'Spreadsheet',
  'Pen and paper',
  'Other software',
  'My attorney or CPA handles it',
  'Nothing formal yet',
];

// Returns the ref value if it is safe to keep, otherwise null.
export function sanitizeRef(value) {
  return typeof value === 'string' && REF_PATTERN.test(value) ? value : null;
}

export function isUuid(value) {
  return typeof value === 'string' && UUID_PATTERN.test(value);
}

function optionOrNull(value, allowed) {
  if (value === undefined || value === null || value === '') return { ok: true, value: null };
  return allowed.includes(value) ? { ok: true, value } : { ok: false };
}

// Validates a survey submission. Only the known survey fields are ever returned.
export function validateSurvey(body) {
  if (!body || typeof body !== 'object' || !isUuid(body.id)) return { ok: false };

  const trusts = optionOrNull(body.trusts_managed, TRUSTS_MANAGED_OPTIONS);
  const method = optionOrNull(body.current_method, CURRENT_METHOD_OPTIONS);
  if (!trusts.ok || !method.ok) return { ok: false };

  let pain = null;
  if (body.biggest_pain !== undefined && body.biggest_pain !== null) {
    if (typeof body.biggest_pain !== 'string' || body.biggest_pain.length > BIGGEST_PAIN_MAX) return { ok: false };
    pain = body.biggest_pain.trim() || null;
  }

  let founding = null;
  if (body.founding_interest !== undefined && body.founding_interest !== null) {
    if (typeof body.founding_interest !== 'boolean') return { ok: false };
    founding = body.founding_interest;
  }

  return {
    ok: true,
    id: body.id.toLowerCase(),
    fields: {
      trusts_managed: trusts.value,
      current_method: method.value,
      biggest_pain: pain,
      founding_interest: founding,
    },
  };
}
