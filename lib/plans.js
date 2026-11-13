// The one source for plan names, prices, limits, and features. The pricing page,
// the audience landing pages, and the homepage all read from here, so a price
// change is made once.

export const PLANS = [
  {
    tier: 'Individual',
    slug: 'individual',
    audience: 'individual',
    price: '$999',
    period: '/ year',
    limit: '1 trust',
    desc: 'For personal trustees managing a single family trust.',
    features: [
      'Full fiduciary accounting',
      'Document management & generation',
      'Local AI assistant (fully offline)',
      'Cryptographic audit trail',
      'Rules engine & obligations',
      'Encrypted local storage',
    ],
  },
  {
    tier: 'Solo',
    slug: 'solo',
    audience: 'individual',
    price: '$1,799',
    period: '/ year',
    limit: 'Up to 5 trusts',
    desc: 'For private trustees and solo practitioners managing a small trust portfolio.',
    features: [
      'Everything in Individual',
      'Multi-trust portfolio switcher',
      'Recurring distributions',
      'Assisted rule creation (AI)',
      'Document Intelligence — RAG',
    ],
  },
  {
    tier: 'Professional',
    slug: 'professional',
    audience: 'firm',
    price: '$3,499',
    period: '/ year base',
    perSeat: '$150',
    baseSeats: 2,
    limit: 'Up to 25 trusts',
    desc: 'For estate attorneys and CPAs with active client trust files.',
    features: [
      'Everything in Solo',
      'Encrypted firm sync — multi-user',
      'ACTEC court-ready reports (roadmap)',
      'Tax prep summary — K-1 prep',
      'Distribution approval workflow',
      'Lot-level securities tracking',
      'eSignature integration (opt-in)',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Practice',
    slug: 'practice',
    audience: 'firm',
    price: '$5,499',
    period: '/ year base',
    perSeat: '$125',
    baseSeats: 5,
    limit: 'Unlimited trusts',
    desc: 'For firms requiring unlimited scale and advanced tools.',
    features: [
      'Everything in Professional',
      'State court accounting formats',
      'Alternative asset tracking',
      'Distribution approval committee',
    ],
  },
  {
    tier: 'Family Office',
    slug: 'family_office',
    audience: 'firm',
    price: '$9,999',
    period: '/ year base',
    perSeat: '$200',
    baseSeats: 5,
    limit: 'Unlimited trusts + premium',
    desc: 'For family offices managing wealth across multiple family branches.',
    features: [
      'Everything in Practice',
      'Consolidated cross-trust reporting',
      'Investment performance TWR / IRR',
      'Cross-trust distribution summary',
      'Priority support & escalation',
      'White-glove onboarding call',
    ],
    gold: true,
  },
];

export const plansFor = audience => PLANS.filter(p => p.audience === audience);
export const planBySlug = slug => PLANS.find(p => p.slug === slug);

// "$3,499 + $150/seat" or "$999/yr" — used in table headers and summaries.
export function shortPrice(plan) {
  return plan.perSeat ? `${plan.price} + ${plan.perSeat}/seat` : `${plan.price}/yr`;
}

// Where each plan's button goes while TrustArchive is pre-launch:
// individuals join the waitlist, firms see the demo.
export function planCta(plan) {
  return plan.audience === 'firm'
    ? { label: 'See the Demo', href: `/demo?tier=${plan.slug}` }
    : { label: 'Join the Waitlist', href: `/waitlist?tier=${plan.slug}` };
}

// Pricing questions. `for` decides which landing page shows them; 'all' shows everywhere.
export const PRICING_FAQS = [
  { for: 'all', q: 'What happens when my annual subscription renews?', a: 'Your subscription renews automatically each year. You\'ll receive email reminders 30 days and 7 days before your renewal date. Cancel any time before renewal in your billing portal — access continues until the end of your paid period.' },
  { for: 'individual', q: 'Is there a free trial?', a: 'TrustArchive is launching soon. At launch, Individual and Solo will include a 30-day free trial of the full application with all features your plan includes — your card is charged only at the end of the trial period, and you can cancel any time before day 30. For now, join the waitlist and we\'ll email you the moment it\'s available.' },
  { for: 'firm', q: 'How do firm plans get started?', a: 'Professional, Practice, and Family Office start with a demo. Tell us about your firm on the demo page, watch the walkthrough, then book a follow-up call and we\'ll help you size the plan and set up your team.' },
  { for: 'firm', q: 'How does per-seat pricing work?', a: 'Firm plans include a base price that covers a set number of seats — 2 for Professional, 5 for Practice and Family Office. Each additional seat beyond the base is billed at the per-seat rate for your tier ($150, $125, or $200 per seat per year). Seats map to operators in your firm. You can add or remove seats at any time and Stripe prorates the change automatically.' },
  { for: 'individual', q: 'Do I need an internet connection?', a: 'No. Individual and Solo run entirely offline after activation. Your trust data never leaves your computer.' },
  { for: 'firm', q: 'Does TrustArchive require an internet connection?', a: 'Firm plans use encrypted firm sync to keep data current across your team. Sync needs an internet connection, but data is encrypted on each device before it leaves, and the app keeps working locally if you go offline.' },
  { for: 'individual', q: 'What is the difference between Individual and Solo?', a: 'Individual covers one trust. Solo covers up to five, and adds a portfolio switcher to move between them and recurring distributions. Solo is the right fit for private trustees and solo attorneys or CPAs.' },
  { for: 'firm', q: 'What is the difference between Professional and Practice?', a: 'Professional covers up to 25 trusts with 2 seats included. Practice removes the trust limit, includes 5 seats, and adds state court accounting formats, alternative asset tracking, and a distribution approval committee as they ship. Firms that grow past 25 trusts move to Practice.' },
  { for: 'firm', q: 'What is the difference between Practice and Family Office?', a: 'Both support unlimited trusts and unlimited seats. Family Office adds consolidated cross-trust reporting, investment performance analytics (TWR/IRR), a family-wide distribution dashboard, priority support, and a white-glove onboarding call — built for family offices managing wealth across multiple family branches.' },
  { for: 'all', q: 'What operating systems are supported?', a: 'Windows 10/11 and macOS 12 (Monterey) or later. Both are included with your license.' },
  { for: 'all', q: 'Is my data backed up?', a: 'TrustArchive stores all data locally and syncs encrypted data for firm-tier users. We recommend backing up your encrypted database file to an external drive regularly. The application includes an export function to facilitate this.' },
];

export const faqsFor = audience => PRICING_FAQS.filter(f => f.for === 'all' || f.for === audience);
