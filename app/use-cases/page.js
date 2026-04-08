import Link from 'next/link';
import { Shield, Users, Briefcase, BookOpen, Check } from 'lucide-react';

export const metadata = {
  title: 'Who Uses TrustArchive — Use Cases',
  description: 'TrustArchive is built for individual trustees, estate attorneys, CPAs, and family offices who need private, offline-first trust administration software.',
};

const personas = [
  {
    slug: 'individual-trustee',
    tag: 'Individual Trustee',
    icon: <Users size={22} />,
    headline: 'You Are the Trustee.',
    subheadline: 'Not a Professional. Not a Firm. Just Someone Who Needs to Do This Right.',
    body: 'A parent, sibling, or spouse named as trustee often has no accounting background and no appetite for expensive professional software. But the obligation is real — distributions must be recorded, documents must be kept, and accountability must be demonstrable.',
    scenario: {
      title: 'Scenario',
      text: 'Margaret was named sole trustee of her late mother\'s irrevocable trust. The trust has three adult beneficiaries, a rental property, investment accounts, and annual distribution requirements. Her attorney told her to keep good records. She needed software that would actually help her do that — without sending her family\'s financial data to a cloud server she\'d never agreed to.',
    },
    howItHelps: [
      'Single encrypted database on her laptop — no accounts, no cloud',
      'Fiduciary-standard accounting separates principal and income automatically',
      'Document vault stores the trust deed, amendments, and correspondence',
      'Distribution letters generated from templates in minutes',
      'Annual accounting reports her attorney can actually read',
      'Local AI answers questions about balances and compliance in plain English',
    ],
    plan: 'Individual',
    planDesc: '$699/year · 1 trust',
    planHref: '/pricing',
    gold: false,
  },
  {
    slug: 'estate-attorney',
    tag: 'Estate Attorney',
    icon: <Briefcase size={22} />,
    headline: 'You Administer Trusts for Clients.',
    subheadline: 'And You Need Software That Matches the Standard of Care You Provide.',
    body: 'An estate attorney or CPA serving as professional trustee or trust advisor manages sensitive financial and family information across multiple client files. Generic accounting software was not built for trust law. Cloud-based tools create liability questions your clients did not sign up for.',
    scenario: {
      title: 'Scenario',
      text: 'David is an estate planning attorney who serves as trustee or co-trustee for fourteen client trusts. He needed to move off a spreadsheet-based system that could not produce formal accountings, and he was not willing to put client financial data into a SaaS platform his engagement letters had not disclosed. He needed something that could produce court-ready reports and keep every client\'s data completely isolated.',
    },
    howItHelps: [
      'Multi-trust portfolio — each client trust fully isolated in its own data scope',
      'Role-based operator profiles — add paralegals or co-trustees with scoped permissions',
      'Bank statement import eliminates manual data entry across all trust accounts',
      'ACTEC-format formal account reports when ready (on roadmap)',
      'Distribution approval workflow for co-trustee sign-off before posting',
      'Audit trail exportable to CSV for court filings or beneficiary accountings',
    ],
    plan: 'Professional',
    planDesc: '$2,500/year · up to 25 trusts',
    planHref: '/pricing',
    gold: false,
  },
  {
    slug: 'trust-company',
    tag: 'Trust Company / Firm',
    icon: <BookOpen size={22} />,
    headline: 'You Run a Trust Practice.',
    subheadline: 'At Scale. With Staff. With Compliance Obligations.',
    body: 'A trust company, corporate trustee, or large estate law firm administering dozens to hundreds of trusts needs software that scales without sending every client\'s data to a vendor\'s cloud infrastructure. The Practice tier removes all trust limits while keeping every file local and encrypted.',
    scenario: {
      title: 'Scenario',
      text: 'Carson and Associates manages trust administration for 60 active trusts across a team of four attorneys and two paralegals. They needed a system with proper role separation, a defensible audit trail for each file, and the ability to produce state-specific court accounting formats. They also needed to be able to tell clients with confidence that their data never left the firm\'s machines.',
    },
    howItHelps: [
      'Unlimited trusts — no per-trust pricing, no tier upgrades as caseload grows',
      'Operator profiles with per-trust permission flags for each staff member',
      'State court accounting formats for CA, NY, TX, NV when ready (on roadmap)',
      'Multi-party distribution approval committee workflow (on roadmap)',
      'Property management module for trusts holding real estate (on roadmap)',
      'Alternative asset tracking for PE, hedge fund, and capital call positions (on roadmap)',
    ],
    plan: 'Practice',
    planDesc: '$4,900/year · unlimited trusts',
    planHref: '/pricing',
    gold: false,
  },
  {
    slug: 'family-office',
    tag: 'Family Office',
    icon: <Shield size={22} />,
    headline: 'You Manage Wealth Across an Entire Family.',
    subheadline: 'Multiple Trusts. Multiple Branches. One Consolidated View.',
    body: 'A family office managing wealth across multiple family branches needs more than per-trust administration. The investment performance, distribution history, and net worth picture spans many entities. The Family Office tier adds consolidated cross-trust analytics built for the controller or CFO who needs the full picture in one place.',
    scenario: {
      title: 'Scenario',
      text: 'The Whitmore family has eight trusts across three generations — an irrevocable dynasty trust, several testamentary trusts for adult children, and two special needs trusts for grandchildren. Their family office controller needed one system that could show total family net worth, aggregate distribution history, and investment performance across all trusts, while keeping each trust\'s records isolated for individual beneficiary accounting purposes.',
    },
    howItHelps: [
      'Consolidated cross-trust reporting — family-wide net worth and distribution view (Family Office tier)',
      'Investment performance TWR / IRR across the full portfolio (Family Office tier)',
      'Each trust remains fully isolated for individual beneficiary accountings',
      'Up to 10 machine activations for the controller and advisory team',
      'White-glove onboarding call to configure the full portfolio structure',
      'Priority support with a dedicated escalation path',
    ],
    plan: 'Family Office',
    planDesc: '$9,600/year · unlimited trusts + premium',
    planHref: '/pricing',
    gold: true,
  },
];

const notForSection = [
  'Cloud-first teams that require real-time remote collaboration',
  'Organizations that need brokerage API integrations and live price feeds',
  'Users managing statutory trust structures with state-specific automated compliance requirements',
  'Tax preparation firms looking for a W-2 or 1040 filing tool',
];

export default function UseCasesPage() {
  return (
    <div>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Users size={11} /> Who It&apos;s For
            </span>
            <h1>Built for One Job.<br /><span className="accent">Trust Administration.</span></h1>
            <p>TrustArchive is not general accounting software adapted for trusts. It was designed from the ground up for trustees who need accurate records, defensible accountability, and complete data privacy.</p>
          </div>
        </div>
      </div>

      {/* Quick navigation */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {personas.map(({ slug, tag }) => (
              <Link
                key={slug}
                href={'#' + slug}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px 24px',
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--text-2)',
                  borderRight: '1px solid var(--border)',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Persona sections */}
      {personas.map(({ slug, tag, icon, headline, subheadline, body, scenario, howItHelps, plan, planDesc, planHref, gold }, index) => (
        <section
          key={slug}
          id={slug}
          className={'section section-bordered' + (index % 2 === 1 ? ' section-alt' : '')}
        >
          <div className="container">

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
              <div style={{
                width: 48, height: 48,
                background: gold ? 'rgba(212,160,23,0.12)' : 'var(--accent-dim)',
                border: '1px solid ' + (gold ? 'rgba(212,160,23,0.3)' : 'var(--accent-border)'),
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: gold ? '#D4A017' : 'var(--accent)',
                flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 700,
                  color: gold ? '#D4A017' : 'var(--accent)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  marginBottom: 4,
                }}>{tag}</div>
                <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>{headline}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 24, fontWeight: 500 }}>{subheadline}</p>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 32 }}>{body}</p>

                <div style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-md)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 24px',
                  marginBottom: 32,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{scenario.title}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{scenario.text}</p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: gold ? 'rgba(212,160,23,0.08)' : 'var(--accent-dim)',
                  border: '1px solid ' + (gold ? 'rgba(212,160,23,0.3)' : 'var(--accent-border)'),
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 20px',
                }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: gold ? '#D4A017' : 'var(--accent)', marginBottom: 2 }}>Recommended plan</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)' }}>
                      {plan} <span style={{ fontWeight: 400, color: 'var(--text-2)', fontSize: 13 }}>— {planDesc}</span>
                    </div>
                  </div>
                  <Link href={planHref} style={{ fontSize: 13, fontWeight: 600, color: gold ? '#D4A017' : 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    See plan &rarr;
                  </Link>
                </div>
              </div>

              <div>
                <div style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-md)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>How TrustArchive helps</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {howItHelps.map(item => {
                      const isRoadmap = item.indexOf('roadmap') !== -1;
                      return (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.6 }}>
                          <Check
                            size={14}
                            style={{
                              color: isRoadmap ? 'var(--warn)' : (gold ? '#D4A017' : 'var(--accent)'),
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          />
                          <span style={{ color: isRoadmap ? 'var(--text-3)' : 'var(--text-2)' }}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: 12, color: 'var(--text-3)', margin: 0 }}>
                      Items marked in amber are on the active roadmap and included in your plan when they ship — no additional charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Not a fit section */}
      <section className="section section-bordered">
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="section-header">
              <h2>When TrustArchive Is Not the Right Fit</h2>
              <p>We would rather you know this upfront than discover it after purchasing.</p>
            </div>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-md)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 32px',
            }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {notForSection.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--text-3)', flexShrink: 0, fontSize: 18, lineHeight: 1 }}>x</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-3)', textAlign: 'center', marginTop: 20, lineHeight: 1.7 }}>
              If you are unsure whether TrustArchive fits your situation,{' '}
              <Link href="/contact" style={{ color: 'var(--accent)' }}>ask us directly</Link>.
              We will tell you honestly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Recognize Yourself<br />in One of These?</h2>
          <p>Start a free 30-day trial. No charge until day 30. Cancel any time.</p>
          <div className="cta-actions">
            <Link href="/pricing" className="btn-primary lg"><Shield size={16} /> See Plans &amp; Pricing</Link>
            <Link href="/contact" className="btn-secondary lg">Talk to Us First</Link>
          </div>
          <p className="cta-note">No accounts required to trial · Your data never leaves your machine</p>
        </div>
      </section>
    </div>
  );
}
