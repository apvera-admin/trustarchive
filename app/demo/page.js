import { Shield, Check, PlayCircle } from 'lucide-react';
import DemoForm from './DemoForm';
import StepBar from './StepBar';
import { tierLabel, isAudience } from '../../lib/demo';
import { planBySlug } from '../../lib/plans';

export const metadata = {
  title: 'See the Demo — TrustArchive',
  description: 'See TrustArchive in action — for individual trustees, solo practitioners, and firms. Tell us how you work and watch the demo that fits.',
};

export default function DemoPage({ searchParams }) {
  const tier = typeof searchParams?.tier === 'string' ? searchParams.tier : '';
  const tierName = tierLabel(tier);
  // Which group of roles to list first: from ?for=, or from the plan they clicked.
  const lead = isAudience(searchParams?.for) ? searchParams.for : planBySlug(tier)?.audience || null;
  const nextSteps = [
    'Your demo opens right away — one for individual trustees, one for firms',
    'Watch it at your own pace',
    'Book a follow-up call on the same page for anything it didn’t answer',
  ];

  return (
    <div style={{ paddingTop: 60 }}>
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <PlayCircle size={11} /> Watch Anytime
          </span>
          <h1>See TrustArchive in Action</h1>
          <p style={{ maxWidth: 560, margin: '0 auto' }}>
            Whether you manage one family trust or hundreds for clients, tell us how you work and we&apos;ll
            show you the demo built for you.
          </p>
          <StepBar current={1} />
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>What you&apos;ll see</h2>
              <ul className="check-list" style={{ marginBottom: 32 }}>
                {[
                  'How the encrypted local database works in practice',
                  'The fiduciary ledger with principal and income separation',
                  'Document archive, rules engine, and obligations tracking',
                  'Trust accounting reports and the cryptographic audit trail',
                  'Local AI assistant querying trust data on-device',
                ].map(item => <li key={item}><Check size={14} /> {item}</li>)}
              </ul>

              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>What happens after you submit</div>
              <ol style={{ margin: '0 0 32px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {nextSteps.map(step => (
                  <li key={step} style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{step}</li>
                ))}
              </ol>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-md)', padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                  <Shield size={12} /> No sales pressure
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                  If TrustArchive is not the right fit for you, we will tell you upfront.
                </p>
              </div>
            </div>
            <DemoForm tier={tierName ? tier : ''} tierName={tierName} lead={lead} />
          </div>
        </div>
      </section>
    </div>
  );
}
