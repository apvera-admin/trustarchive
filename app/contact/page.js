'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Shield, Check, Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', org: '', reason: 'Purchase a license', message: '' });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please email us directly at sales@trustarchive.co');
    }
  } catch {
    alert('Something went wrong. Please email us directly at sales@trustarchive.co');
  }
};

  return (
    <>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Get In Touch
            </span>
            <h1>Contact TrustArchive</h1>
            <p>Questions about licensing, implementation, or how TrustArchive fits your situation. We respond within one business day.</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>
                We're here to help you make the right decision.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 36 }}>
                TrustArchive is a specialized tool. We'd rather you fully understand what it does — and what it doesn't do — before you purchase. Ask us anything.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                {[
                  { icon: <Mail size={16} />, title: 'Purchase a License', desc: 'Ready to buy or want to discuss which plan fits your situation.' },
                  { icon: <MessageSquare size={16} />, title: 'Pre-Sales Questions', desc: 'Ask about features, compatibility, or how TrustArchive handles your specific trust structure.' },
                  { icon: <Clock size={16} />, title: 'Response Time', desc: 'We respond to all inquiries within one business day.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{title}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>What makes TrustArchive different:</div>
                <ul className="check-list">
                  {[
                    'Runs entirely on your machine — no SaaS, no cloud',
                    'Designed specifically for trust administration, not adapted from generic accounting software',
                    'Cryptographic audit trail built in from the ground up',
                    'Local AI that never sends data externally',
                  ].map(item => <li key={item}><Check size={14} /> {item}</li>)}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-lg)', padding: 48, textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', margin: '0 auto 20px' }}>
                    <Check size={22} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Message Sent</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    Thanks for reaching out. We'll reply within one business day.
                  </p>
                  <Link href="/" className="btn-primary" style={{ marginTop: 24, justifyContent: 'center' }}>
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', padding: 36 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 28 }}>Send us a message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Your full name"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="you@example.com"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Organization / Firm (optional)</label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Law firm, family office, or individual"
                        value={form.org}
                        onChange={e => setForm({ ...form, org: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Reason for contact</label>
                      <select
                        className="form-input form-select"
                        value={form.reason}
                        onChange={e => setForm({ ...form, reason: e.target.value })}
                      >
                        <option>Purchase a license</option>
                        <option>Pre-sales question</option>
                        <option>Technical question</option>
                        <option>Perpetual license inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Tell us about your situation — how many trusts, what type of trustee, any specific questions..."
                        required
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 13 }}>
                      <Shield size={15} /> Send Message
                    </button>
                    <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', marginTop: 14 }}>
                      We respond within one business day. Your message is not stored in any cloud.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK A DEMO ── */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>

            {/* Left — Info */}
            <div>
              <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
                <Clock size={11} /> Book a Demo
              </span>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16 }}>
                See TrustArchive Live
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 28 }}>
                Pick a time for a 30-minute screen share. We will show you the full application running with a real trust structure.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  'How the encrypted local database works in practice',
                  'The fiduciary ledger with principal and income separation',
                  'Document archive, rules engine, and audit trail',
                  'Local AI assistant querying trust data on-device',
                  'Which plan fits your situation and how the trial works',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Check size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-md)', padding: '16px 20px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Good to know</div>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                  No sales pressure. If TrustArchive is not the right fit for your practice we will tell you upfront. No follow-up sequence if you decide it is not for you.
                </p>
              </div>
            </div>

            {/* Right — Calendar */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg-surface-2)', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>TrustArchive Product Walk-Through — 30 min</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>Pick a time that works for you</div>
              </div>
              <iframe
                src="https://calendar.app.google/NKLvEYmgeRACmBjc8"
                style={{ width: '100%', height: 580, border: 'none', display: 'block', background: '#ffffff' }}
                frameBorder="0"
                scrolling="yes"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
