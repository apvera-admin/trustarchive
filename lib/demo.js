// Shared demo-request rules. Safe to import from client and server code — no secrets here.

// One demo per audience. Set `videoUrl` to the video's embed URL (Vimeo, Wistia,
// or YouTube unlisted) once it exists. While empty, the demo page shows a
// placeholder and points people to the follow-up call.
export const AUDIENCES = {
  firm: {
    label: 'Firms',
    videoUrl: '',
    videoLength: '12 min',
    bookingUrl: 'https://calendar.app.google/NKLvEYmgeRACmBjc8',
    intro: 'See how TrustArchive runs trust administration across your firm — trust accounting reports, role-based access, and encrypted sync for your team.',
  },
  individual: {
    label: 'Individuals',
    videoUrl: '',
    videoLength: '10 min',
    bookingUrl: 'https://calendar.app.google/NKLvEYmgeRACmBjc8',
    intro: 'See how TrustArchive keeps your trust accounting, documents, and records in order — fully private, on your own computer.',
  },
};

export const isAudience = value => Object.hasOwn(AUDIENCES, value);
export const hasDemoVideo = audience => Boolean(AUDIENCES[audience]?.videoUrl);

// Set by /api/demo when the form is submitted. The demo pages only show the
// video to visitors who have it (or who arrive with a valid request id).
export const DEMO_ACCESS_COOKIE = 'ta_demo';

// Each role sends people to one demo. 'Other' is decided by trust count.
export const ROLES = [
  { label: 'Trustee of my own family trust', audience: 'individual' },
  { label: 'Private trustee for a few trusts', audience: 'individual' },
  { label: 'Solo attorney or CPA', audience: 'individual' },
  { label: 'Attorney or CPA at a firm', audience: 'firm' },
  { label: 'Professional or corporate trustee', audience: 'firm' },
  { label: 'Family office', audience: 'firm' },
  { label: 'Other', audience: null },
];
export const ROLE_OPTIONS = ROLES.map(r => r.label);

export const TRUSTS_OPTIONS = ['1', '2–5', '6–25', '26–100', '100+'];
const SMALL_TRUST_COUNTS = ['1', '2–5'];

export const SEATS_OPTIONS = ['Just me', '2–5', '6–10', '10+'];

// Which demo a role (and, for 'Other', trust count) is sent to.
export function audienceFor(role, trustsManaged) {
  const match = ROLES.find(r => r.label === role);
  if (match?.audience) return match.audience;
  return SMALL_TRUST_COUNTS.includes(trustsManaged) ? 'individual' : 'firm';
}

export const DEMO_TIERS = ['individual', 'solo', 'professional', 'practice', 'family_office'];

// "family_office" -> "Family Office"; anything not a known tier -> ''.
export function tierLabel(tier) {
  if (!DEMO_TIERS.includes(tier)) return '';
  return tier.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
