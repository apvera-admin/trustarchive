import { Shield, Check, PlayCircle } from 'lucide-react';
import DemoForm from './DemoForm';
import StepBar from './StepBar';
import { hasDemoVideo, tierLabel, DEMO_VIDEO_LENGTH } from '../../lib/demo';

export const metadata = {
  title: 'See the Demo — TrustArchive',
  description: 'See TrustArchive in action for your firm. Tell us about your practice, then see the full application running with a real trust structure.',
};

export default function DemoPage({ searchParams }) {
  const tier = typeof searchParams?.tier === 'string' ? searchParams.tier : '';
  const tierName = tierLabel(tier);
  const video = hasDemoVideo();

  const nextSteps = video
    ? [
        `Watch the full demo right away — about ${DEMO_VIDEO_LENGTH}, at your own pace`,
        'Book a short Q&A call for anything the demo didn’t answer',
        'We size the right plan and seats for your firm',
      ]
    : [
        'Pick a time for a 30-minute live screen share',
        'We prepare using your firm’s details, so the call is about your trusts',
        'On the call we answer questions and size the right plan and seats',
      ];

  return (
    <div style={{ paddingTop: 60 }}>
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <PlayCircle size={11} /> {video ? 'Watch Anytime' : 'Live Walkthrough'}
          </span>
          <h1>See TrustArchive for Your Firm</h1>
          <p style={{ maxWidth: 560, margin: '0 auto' }}>
            {video
              ? 'Three quick steps: tell us about your firm, watch the demo, then book a Q&A call if you want one.'
              : 'Three quick steps: tell us about your firm, pick a time, and we’ll walk you through the full application live.'}
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
                  'Encrypted firm sync across your team',
                  'ACTEC court-ready reports and the audit trail',
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
                  If TrustArchive is not the right fit for your practice we will tell you upfront.
                </p>
              </div>
            </div>
            <DemoForm tier={tierName ? tier : ''} tierName={tierName} />
          </div>
        </div>
      </section>
    </div>
  );
}
