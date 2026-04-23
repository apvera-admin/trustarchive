'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Download, Lock, FileText, Users, BookOpen, ArrowRight, Check } from 'lucide-react';

export default function ResourcesPage() {
  const [form, setForm] = useState({ name: '', email: '', firm: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [autoSubmitted, setAutoSubmitted] = useState(false);

useEffect(() => {
  if (typeof window !== 'undefined' && window.location.search.includes('downloaded=true')) {
    setSubmitted(true);
  }
}, []);
  
  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/whitepaper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please email us at sales@trustarchive.co');
      }
    } catch {
      setError('Something went wrong. Please email us at sales@trustarchive.co');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 60 }}>

      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', padding: '100px 0 80px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span className="tag"><FileText size={11} /> White Paper</span>
                <span style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>Free Download</span>
              </div>
              <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
                The Cloud Liability Problem in Trust Administration
              </h1>
              <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
                Why storing client trust data in cloud software creates undisclosed fiduciary exposure and what professional trustees need to do about it.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'var(--text-2)' }}>The four specific liability risks most trustees are not managing</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'var(--text-2)' }}>Why SOC 2 compliance does not satisfy your confidentiality duty</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'var(--text-2)' }}>A practical framework for auditing your current technology stack</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'var(--text-2)' }}>What your engagement letter probably is not disclosing</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Lock size={12} color="var(--text-3)" />
                <span style={{ fontSize: 12, color: 'var(--text-3)' }}>We send the PDF immediately.</span>
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-lg)', padding: '48px 40px', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Download size={22} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Check Your Inbox</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
                    The white paper is on its way to <strong>{form.email}</strong>. It should arrive within a minute.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Link href="/features" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--bg-surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: 13, color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                      See how TrustArchive works <ArrowRight size={13} />
                    </Link>
                    <Link href="/pricing" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--bg-surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: 13, color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                      View pricing and plans <ArrowRight size={13} />
                    </Link>
                    <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--bg-surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: 13, color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                      Ask us a question <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', padding: '40px', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
                  <div style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                    <div style={{ width: 44, height: 52, background: 'var(--bg-surface-3)', border: '1px solid var(--border-md)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <FileText size={20} color="var(--accent)" />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)', marginBottom: 3 }}>Cloud_Liability_WhitePaper.pdf</div>
                      <div style={{ fontSize: 11, color: 'var(--text-3)' }}>TrustArchive · 5 pages · Free</div>
                    </div>
                    <div style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 600, color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', padding: '3px 10px', borderRadius: 99 }}>PDF</div>
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Get the White Paper</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 24, lineHeight: 1.6 }}>
                    Enter your details and we will send the PDF directly to your inbox.
                  </p>

                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" type="text" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Work Email</label>
                    <input className="form-input" type="email" placeholder="you@yourfirm.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Firm or Organization <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>(optional)</span></label>
                    <input className="form-input" type="text" placeholder="Law firm, CPA firm, trust company..." value={form.firm} onChange={e => setForm({ ...form, firm: e.target.value })} />
                  </div>

                  {error && (
                    <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', padding: '10px 14px', fontSize: 13, color: 'var(--danger)', marginBottom: 16 }}>
                      {error}
                    </div>
                  )}

                  <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14, opacity: loading ? 0.7 : 1 }}>
                    <Download size={15} />
                    {loading ? 'Sending...' : 'Send Me the White Paper'}
                  </button>

                  <p style={{ fontSize: 11, color: 'var(--text-3)', textAlign: 'center', marginTop: 14, lineHeight: 1.6 }}>
                    No marketing emails. We send the PDF and that is it.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who This Is For</span>
            <h2>Written for Professional Trustees,<br />Not General Audiences</h2>
            <p>A focused analysis of a specific liability gap that affects professional trustees who use modern cloud software.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Users size={18} /></div>
              <h3>Estate Attorneys</h3>
              <p>Serving as trustee or trust advisor for multiple client files using cloud-based practice management software.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BookOpen size={18} /></div>
              <h3>Trust CPAs</h3>
              <p>Managing fiduciary accounting for trust clients with beneficiary financial data stored in third-party systems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={18} /></div>
              <h3>Corporate Trustees</h3>
              <p>Trust companies and bank trust departments that have adopted cloud platforms for case management or accounting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>See the Alternative<br />to Cloud Trust Software</h2>
          <p>TrustArchive runs entirely on your machine. No cloud. No vendor access. No exposure.</p>
          <div className="cta-actions">
            <Link href="/features" className="btn-primary lg"><Shield size={16} /> See How It Works</Link>
            <Link href="/pricing" className="btn-secondary lg">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
