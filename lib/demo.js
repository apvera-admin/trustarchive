// Shared demo-request rules. Safe to import from client and server code — no secrets here.

// The evergreen demo video's embed URL (Vimeo, Wistia, or YouTube unlisted).
// While empty, /demo/next shows a placeholder and points people to the follow-up call.
export const DEMO_VIDEO_URL = '';
export const DEMO_VIDEO_LENGTH = '12 min';

// Booking page for the follow-up call after watching the demo.
export const FOLLOW_UP_BOOKING_URL = 'https://calendar.app.google/NKLvEYmgeRACmBjc8';

// Set by /api/demo when the form is submitted. /demo/next only shows the
// video to visitors who have it (or who arrive with a valid request id).
export const DEMO_ACCESS_COOKIE = 'ta_demo';

export const hasDemoVideo = () => Boolean(DEMO_VIDEO_URL);

export const ROLE_OPTIONS = [
  'Estate attorney',
  'CPA',
  'Professional trustee',
  'Family office',
  'Other',
];

export const TRUSTS_OPTIONS = ['1–10', '11–25', '26–100', '100+'];

export const SEATS_OPTIONS = ['1–2', '3–5', '6–10', '10+'];

export const DEMO_TIERS = ['professional', 'practice', 'family_office'];

// "family_office" -> "Family Office"; anything not a firm tier -> ''.
export function tierLabel(tier) {
  if (!DEMO_TIERS.includes(tier)) return '';
  return tier.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
