import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Check, Clock, PlayCircle, Calendar, Users, Tag, ExternalLink } from 'lucide-react';
import StepBar from '../StepBar';
import { isUuid } from '../../../lib/waitlist';
import { demoRequestExists } from '../../../lib/supabase';
import {
  hasDemoVideo,
  DEMO_VIDEO_URL,
  DEMO_VIDEO_LENGTH,
  FOLLOW_UP_BOOKING_URL,
  DEMO_ACCESS_COOKIE,
} from '../../../lib/demo';

export const metadata = {
  title: 'Your Demo — TrustArchive',
  description: 'Your TrustArchive demo.',
  robots: { index: false, follow: false },
};

// The demo is gated behind the /demo form. Access comes from the cookie the
// form sets, or from the request id in the follow-up email (for other devices).
async function hasAccess(id) {
  if (cookies().get(DEMO_ACCESS_COOKIE)) return true;
  if (!isUuid(id)) return false;
  try {
    return await demoRequestExists(id.toLowerCase());
  } catch (error) {
    console.error('[demo] Access check failed:', error.message);
    return false;
  }
}

export default async function DemoNextPage({ searchParams }) {
  if (!(await hasAccess(searchParams?.id))) redirect('/demo');

  const video = hasDemoVideo();

  const afterSteps = [
    { icon: <PlayCircle size={16} />, title: 'Watch the demo', desc: video ? `About ${DEMO_VIDEO_LENGTH}. Pause, rewind, share it with your partners.` : 'The recorded demo is almost ready. We’ll email you the moment it’s live.' },
    { icon: <Calendar size={16} />, title: 'Book a follow-up call', desc: 'Pick a time below. You’ll get a calendar invite right away.' },
    { icon: <Users size={16} />, title: 'We prepare', desc: 'We review your firm details so the call is about your trusts, not a generic pitch.' },
    { icon: <Tag size={16} />, title: 'Plan and pricing', desc: 'We size the right plan and seats, and cover founding-member pricing for firms that join before launch.' },
  ];

  return (
    <div style={{ paddingTop: 60 }}>
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <Check size={11} /> Demo unlocked
          </span>
          <h1>Your TrustArchive Demo</h1>
          <p style={{ maxWidth: 560, margin: '0 auto' }}>
            {video
              ? `Watch the full demo below — about ${DEMO_VIDEO_LENGTH}. When you’re done, book a follow-up call for anything it didn’t answer.`
              : 'Thanks for your details. Book a follow-up call below and we’ll walk you through TrustArchive.'}
          </p>
          <StepBar current={2} />
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          {/* ── Step 2: the demo ── */}
          {video ? (
            <div className="demo-video">
              <iframe src={DEMO_VIDEO_URL} title="TrustArchive demo" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            </div>
          ) : (
            <div className="demo-video" style={{ aspectRatio: 'auto', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-surface)' }}>
              <div style={{ textAlign: 'center', padding: 24, maxWidth: 440 }}>
                <PlayCircle size={40} color="var(--accent)" style={{ marginBottom: 16 }} />
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The recorded demo is almost ready</div>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                  We&apos;ll email you the moment it&apos;s live. Want to see it sooner? Book a call below and we&apos;ll walk you through it live.
                </p>
              </div>
            </div>
          )}

          {/* ── Step 3: follow-up call ── */}
          <div id="book" style={{ marginTop: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
              <Clock size={12} /> Step 3 of 3
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>Book a follow-up call</h2>
            <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
              {video
                ? 'For questions after you’ve watched. We’ll also help you pick the right plan and number of seats.'
                : 'We’ll walk you through TrustArchive live, answer your questions, and help you pick the right plan and number of seats.'}
            </p>
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg-surface-2)', padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>TrustArchive Follow-up Call</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>Pick a time that works for you</div>
                </div>
                <a href={FOLLOW_UP_BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                  Open in a new tab <ExternalLink size={12} />
                </a>
              </div>
              <iframe
                src={FOLLOW_UP_BOOKING_URL}
                title="Book a follow-up call"
                style={{ width: '100%', height: 620, border: 'none', display: 'block', background: '#ffffff' }}
                frameBorder="0"
                scrolling="yes"
              />
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 16 }}>How it works</div>
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
