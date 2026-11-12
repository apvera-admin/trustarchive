import Link from 'next/link';
import { Check, Clock, PlayCircle, Calendar, Mail, Users, Tag } from 'lucide-react';
import StepBar from '../StepBar';
import { hasDemoVideo, DEMO_VIDEO_URL, DEMO_VIDEO_LENGTH, LIVE_DEMO_BOOKING_URL, QA_BOOKING_URL } from '../../../lib/demo';

export const metadata = {
  title: 'Your Demo — TrustArchive',
  description: 'Next step for your TrustArchive demo.',
  robots: { index: false, follow: false },
};

function BookingFrame({ title, subtitle, src }) {
  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <div style={{ background: 'var(--bg-surface-2)', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>{subtitle}</div>
      </div>
      <iframe
        src={src}
        title={title}
        style={{ width: '100%', height: 620, border: 'none', display: 'block', background: '#ffffff' }}
        frameBorder="0"
        scrolling="yes"
      />
    </div>
  );
}

export default function DemoNextPage() {
  const video = hasDemoVideo();

  const afterSteps = [
    { icon: <Mail size={16} />, title: 'Confirmation email', desc: 'You’ll get a calendar invite as soon as you book, plus an email with a link back to this page.' },
    { icon: <Users size={16} />, title: 'We prepare', desc: 'We review your firm details so the call is about your trusts, not a generic pitch.' },
    { icon: <Clock size={16} />, title: video ? 'Q&A call' : 'Live walkthrough', desc: video ? '20 minutes for your questions, and we size the right plan and seats.' : '30-minute screen share, then we size the right plan and seats.' },
    { icon: <Tag size={16} />, title: 'Founding-member pricing', desc: 'Ask us about founding-member pricing for firms that join before launch.' },
  ];

  return (
    <div style={{ paddingTop: 60 }}>
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <Check size={11} /> Details received
          </span>
          <h1>{video ? 'Watch the Demo' : 'Pick a Time for Your Walkthrough'}</h1>
          <p style={{ maxWidth: 560, margin: '0 auto' }}>
            {video
              ? `Thanks — the full demo is below (about ${DEMO_VIDEO_LENGTH}). When you’re done, book a short Q&A call for anything it didn’t answer.`
              : 'Thanks — last step. Choose a 30-minute slot below and we’ll show you the full application running with a real trust structure.'}
          </p>
          <StepBar current={2} />
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          {video ? (
            <>
              <div className="demo-video" style={{ marginBottom: 56 }}>
                <iframe src={DEMO_VIDEO_URL} title="TrustArchive demo" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                <Calendar size={12} /> Step 3 of 3
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>Have questions? Book a Q&amp;A call</h2>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
                20 minutes, for questions after you&apos;ve watched. We&apos;ll also help you pick the right plan and number of seats.
              </p>
              <BookingFrame title="TrustArchive Demo Q&A — 20 min" subtitle="Pick a time that works for you" src={QA_BOOKING_URL} />
            </>
          ) : (
            <BookingFrame title="TrustArchive Product Walk-Through — 30 min" subtitle="Pick a time that works for you" src={LIVE_DEMO_BOOKING_URL} />
          )}

          <div style={{ marginTop: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
              <PlayCircle size={14} color="var(--accent)" /> What happens next
            </div>
            <div className="demo-next-list">
              {afterSteps.map(({ icon, title, desc }) => (
                <div key={title} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 20 }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 10 }}>{icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <p className="small-note" style={{ marginTop: 24 }}>
              Can&apos;t find a time that works? <Link href="/contact" style={{ color: 'var(--accent)' }}>Send us a message</Link> and we&apos;ll set one up.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
