// Shared demo-request rules. Safe to import from client and server code — no secrets here.

// Set this to the evergreen demo video's embed URL (Vimeo, Wistia, or YouTube
// unlisted) once it exists. While empty, /demo/next offers a live walkthrough.
export const DEMO_VIDEO_URL = '';
export const DEMO_VIDEO_LENGTH = '12 min';

// Booking pages. When the video goes live, point QA_BOOKING_URL at a separate
// 20-minute "Demo Q&A" booking page.
export const LIVE_DEMO_BOOKING_URL = 'https://calendar.app.google/NKLvEYmgeRACmBjc8';
export const QA_BOOKING_URL = LIVE_DEMO_BOOKING_URL;

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
