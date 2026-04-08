import Link from 'next/link';
import {
  Shield, FileText, Users, Briefcase, BookOpen, CheckSquare,
  Bot, Lock, Wifi, Monitor, CreditCard, Download, Check, X,
  Clock, Database
} from 'lucide-react';

export default function HomePage() {
  const pricingTiers = [
    { tier: 'Individual', price: '$699', limit: '1 trust', points: ['Full fiduciary accounting', 'Local AI assistant', 'Offline, encrypted', 'Audit trail'], ctaClass: 'secondary', gold: false, featured: false, badge: null },
    { tier: 'Solo', price: '$1,500', limit: 'Up to 5 trusts', points: ['All Individual features', 'Multi-trust portfolio', 'Recurring distributions', 'Document Intelligence'], ctaClass: 'secondary', gold: false, featured: false, badge: null },
    { tier: 'Professional', price: '$2,500', limit: 'Up to 25 trusts', points: ['All Solo features', 'ACTEC court-ready reports', 'K-1 prep summary', 'Distribution approval'], ctaClass: 'primary', gold: false, featured: true, badge: 'Most Popular' },
    { tier: 'Practice', price: '$4,900', limit: 'Unlimited trusts', points: ['All Professional features', 'Firm-scale tools', 'State court formats', 'Committee approvals'], ctaClass: 'secondary', gold: false, featured: false, badge: null },
    { tier: 'Family Office', price: '$9,600', limit: 'Unlimited + premium', points: ['All Practice features', 'Cross-trust reporting', 'TWR / IRR analytics', 'Priority onboarding'], ctaClass: 'secondary', gold: true, featured: false, badge: null },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="hero">
            <div>
              <div className="hero-badge">
                <span className="tag">
                  <Shield size={11} /> Fully Local · No Cloud
                </span>
              </div>
              <h1>
                Private Trust Administration.<br />
                <span>Fully Local.</span><br />
                Permanently Recorded.
              </h1>
              <p className="hero-sub">
                Fiduciary software that runs entirely on your machine. No cloud. No data exposure.
                Complete control over your trust data, accounting, and audit trail.
              </p>
              <div className="hero-actions">
                <Link href="/pricing" className="btn-primary lg">
                  <Shield size={15} /> Get License
                </Link>
                <Link href="/features" className="btn-secondary lg">View Features →</Link>
              </div>
              <div className="hero-trust">
                <span className="hero-trust-dot" />
                No accounts required · No internet connection needed · Instant activation
              </div>
            </div>

            <div className="app-mockup">
              <div className="mockup-bar">
                <span className="mockup-dot" style={{ background: '#ef4444' }} />
                <span className="mockup-dot" style={{ background: '#f59e0b' }} />
                <span className="mockup-dot" style={{ background: '#22c55e' }} />
                <span className="mockup-title">TrustArchive — TMA Legacy Trust</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  {[
                    { icon: <Monitor size={12} />, label: 'Overview', active: true },
                    { icon: <FileText size={12} />, label: 'Documents' },
                    { icon: <Users size={12} />, label: 'Beneficiaries' },
                    { icon: <Briefcase size={12} />, label: 'Assets' },
                    { icon: <BookOpen size={12} />, label: 'Ledger' },
                    { icon: <CheckSquare size={12} />, label: 'Obligations' },
                  ].map(({ icon, label, active }) => (
                    <div key={label} className={`mockup-nav-item${active ? ' active' : ''}`}>
                      {icon} {label}
                    </div>
                  ))}
                </div>
                <div className="mockup-content">
                  <div className="mockup-section-title">Trust Overview</div>
                  <div className="mockup-cards">
                    <div className="mockup-card">
                      <div className="mockup-card-label">Beneficiaries</div>
                      <div className="mockup-card-value">3</div>
                    </div>
                    <div className="mockup-card">
                      <div className="mockup-card-label">Net Trust Value</div>
                      <div className="mockup-card-value" style={{ fontSize: 14, color: 'var(--accent)' }}>$2.4M</div>
                    </div>
                  </div>
                  <div className="mockup-row">
                    <span>Annual Accounting Due</span>
                    <span className="mockup-status ok">On Track</span>
                  </div>
                  <div className="mockup-row">
                    <span>Q4 Distribution Report</span>
                    <span className="mockup-status neutral">Exported</span>
                  </div>
                  <div className="mockup-row">
                    <span>Trust Agreement Updated</span>
                    <span className="mockup-status ok">Current</span>
                  </div>
                  <div className="mockup-encrypt">
                    <Lock size={10} /> Encrypted &amp; Local — No External Calls
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            {[
              { icon: <Lock size={15} />, label: 'SQLCipher Encrypted at Rest' },
              { icon: <Wifi size={15} />, label: 'No Internet Required' },
              { icon: <Shield size={15} />, label: 'Cryptographic Audit Trail' },
              { icon: <Clock size={15} />, label: 'Double-Entry Fiduciary Accounting' },
              { icon: <Monitor size={15} />, label: 'Windows & macOS' },
            ].map(({ icon, label }) => (
              <div key={label} className="trust-item">{icon} {label}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="section section-bordered" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core System</span>
            <h2>A Complete Fiduciary System.<br />Not Just Software.</h2>
            <p>Every module a trustee needs to administer a trust correctly — built into one private, offline application.</p>
          </div>
          <div className="features-grid">
            {[
              { icon: <FileText size={18} />, title: 'Document Archive', desc: 'Store, organize, and generate trust documents. Full version history with cryptographic sealing on each file.' },
              { icon: <BookOpen size={18} />, title: 'Fiduciary Accounting', desc: 'Full double-entry bookkeeping. Principal and income tracking, journal entries, and financial reports built for trust law.' },
              { icon: <Users size={18} />, title: 'Beneficiaries', desc: 'Manage beneficiary records, distribution history, and per-beneficiary reporting with complete privacy.' },
              { icon: <CheckSquare size={18} />, title: 'Rules Engine', desc: 'Define and enforce trust compliance rules. Automated alerts for distribution caps, deadlines, and accounting obligations.' },
              { icon: <Bot size={18} />, title: 'Local AI Assistant', desc: 'Query your trust data in plain language. Runs entirely on-device — no API calls, no data leaves your machine.' },
              { icon: <Shield size={18} />, title: 'Audit Trail', desc: 'Every action logged, timestamped, and cryptographically sealed. A defensible record for fiduciary accountability.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/features" className="btn-secondary">See full feature details →</Link>
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section className="section section-bordered">
        <div className="container">
          <div className="split">
            <div className="split-text">
              <span className="section-label">AI Assistant</span>
              <h2>Private AI That Actually Knows Your Data</h2>
              <p>Unlike cloud-based AI tools, the TrustArchive assistant runs locally and queries your encrypted trust data directly. No API calls. No external processing. Your data never leaves your machine.</p>
              <ul className="check-list">
                {[
                  'Ask questions in plain language about your trust',
                  'Get instant answers on distributions, balances, and compliance',
                  'Runs on-device — sensitive data never touches a server',
                  'Works fully offline, no internet required',
                ].map(item => (
                  <li key={item}><Check size={15} /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="chat-panel">
              <div className="chat-header">
                <div className="chat-header-left">
                  <Bot size={14} color="var(--accent)" />
                  <span className="chat-header-title">Agent Assistant</span>
                </div>
                <div className="chat-status">
                  <span className="chat-status-dot" /> Local AI Active
                </div>
              </div>
              <div className="chat-body">
                <div className="chat-msg user">&quot;How much has been distributed this year?&quot;</div>
                <div className="chat-msg ai">$58,240 has been distributed year-to-date across 3 beneficiaries. The largest was $32,000 to the primary income beneficiary in March.</div>
                <div className="chat-msg user">&quot;Are we compliant with distribution requirements?&quot;</div>
                <div className="chat-msg ai">Yes. All mandatory distribution rules are currently satisfied. The annual accounting deadline is in 47 days.</div>
              </div>
              <div className="chat-footer">
                <Lock size={10} /> Querying encrypted local database · No external calls
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIT TRAIL ── */}
      <section className="section section-bordered">
        <div className="container">
          <div className="split reverse">
            <div className="split-text">
              <span className="section-label">Audit Trail</span>
              <h2>A Defensible Record of Every Action</h2>
              <p>Every action in TrustArchive is logged, timestamped, and cryptographically sealed. Built for trustees who need to demonstrate fiduciary accountability to beneficiaries, courts, or co-trustees.</p>
              <ul className="check-list">
                {[
                  'Every user action recorded with timestamp and operator identity',
                  'Cryptographically sealed — entries cannot be altered',
                  'Export to CSV for court or compliance review',
                  'Filter by user, date range, or action type',
                ].map(item => (
                  <li key={item}><Check size={15} /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="info-panel">
              <div className="info-panel-header">
                <span className="info-panel-title">Audit Trail Log</span>
                <span className="info-panel-badge">Cryptographically Sealed</span>
              </div>
              {[
                { icon: <Users size={13} />, user: 'John W.', action: 'Updated Beneficiary Record', time: '2:41 PM' },
                { icon: <FileText size={13} />, user: 'John W.', action: 'Edited Trust Agreement', time: '2:05 PM' },
                { icon: <BookOpen size={13} />, user: 'Lisa M.', action: 'Made Distribution to Beneficiary', time: '12:06 PM' },
                { icon: <Lock size={13} />, user: 'Lisa M.', action: 'Accessed Trust Vault · Encrypted', time: '11:42 AM' },
                { icon: <CheckSquare size={13} />, user: 'John W.', action: 'Set Rule: Annual Accounting Deadline', time: 'Yesterday' },
              ].map(({ icon, user, action, time }) => (
                <div key={action} className="audit-row">
                  <div className="audit-icon">{icon}</div>
                  <div className="audit-content">
                    <div className="audit-user">{user}</div>
                    <div className="audit-action">{action}</div>
                  </div>
                  <div className="audit-time">{time}</div>
                </div>
              ))}
              <div className="panel-hash">SHA-256: 40909f16c8a6a6f4e6aa1e2c12475656731d4b8f...</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACY ── */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Privacy &amp; Security</span>
            <h2>Your Data Should Not Live in the Cloud</h2>
            <p>Most &quot;secure&quot; trust software still stores your data on remote servers. Even with SOC 2 compliance, your information is transmitted over the internet and accessible through third-party infrastructure.</p>
          </div>
          <div className="privacy-compare">
            <div className="info-panel" style={{ borderColor: 'rgba(239,68,68,0.2)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--danger)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <X size={14} /> Typical Cloud Trust Software
              </div>
              <ul className="check-list">
                {['Stored on third-party infrastructure', 'Transmitted over the internet', 'Accessible through APIs and integrations', 'Subscription-dependent access to your own records'].map(item => (
                  <li key={item}><X size={15} style={{ color: 'var(--danger)' }} /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="info-panel" style={{ borderColor: 'var(--accent-border)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Shield size={14} /> TrustArchive
              </div>
              <ul className="check-list">
                {['Runs entirely on your local machine', 'No internet connection required after install', 'Fully encrypted at rest using SQLCipher', 'Your data never leaves your control — ever'].map(item => (
                  <li key={item}><Check size={15} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8" style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-2)' }}>
            This isn&apos;t &quot;secure cloud software.&quot; <strong style={{ color: 'var(--text-1)' }}>This is <span className="accent">true data ownership.</span></strong>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section-bordered" id="how">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2>Simple. Self-Contained. Under Your Control.</h2>
            <p>No accounts. No cloud setup. No external dependencies. TrustArchive runs entirely offline after a one-time install.</p>
          </div>
          <div className="steps">
            {[
              { num: '01', icon: <CreditCard size={16} />, title: 'Purchase Your License', desc: 'Secure your license key and receive immediate download access. No account creation required.' },
              { num: '02', icon: <Download size={16} />, title: 'Download & Install', desc: 'Install on Windows or macOS. No setup servers. No cloud configuration. No dependencies.' },
              { num: '03', icon: <Shield size={16} />, title: 'Activate Locally', desc: 'Enter your license key. Your system activates instantly — no internet required after this step.' },
              { num: '04', icon: <Database size={16} />, title: 'Run Fully Local', desc: 'Your trust data, accounting, documents, and AI all run securely on your machine. Permanently.' },
            ].map(({ num, icon, title, desc }) => (
              <div key={num} className="step">
                <div className="step-num">{num}</div>
                <div className="step-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="small-note">Runs entirely offline after install · Windows &amp; macOS · No accounts required</p>
        </div>
      </section>

      {/* ── NOT FOR EVERYONE ── */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <h2>Not Built for Everyone</h2>
            <p>TrustArchive is designed for a specific type of trustee. If that&apos;s not you, we&apos;d rather you know upfront.</p>
          </div>
          <div className="compare-grid">
            <div className="compare-col">
              <div className="compare-col-title" style={{ color: 'var(--text-2)' }}>TrustArchive is not designed for:</div>
              {['Firms that require cloud access or real-time remote collaboration', 'Teams dependent on third-party integrations and API syncing', 'Users looking for a lightweight or convenience-first tool'].map(item => (
                <div key={item} className="compare-item negative">
                  <X size={15} style={{ color: 'var(--text-3)' }} /> {item}
                </div>
              ))}
            </div>
            <div className="compare-divider" />
            <div className="compare-col">
              <div className="compare-col-title" style={{ color: 'var(--accent)' }}>Built for trustees who prioritize:</div>
              {['Complete control over sensitive trust and beneficiary data', 'Local-first, air-gapped, offline operation', 'Accurate, auditable fiduciary recordkeeping', 'Defensible audit trails for fiduciary accountability'].map(item => (
                <div key={item} className="compare-item positive">
                  <Check size={15} style={{ color: 'var(--accent)' }} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="nfe-footer">
            <p>This is not built for convenience. <span className="accent"><strong>It&apos;s built for control.</strong></span></p>
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="section section-bordered section-alt">
        <div className="pricing-wide">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Five Tiers. One Application.</h2>
            <p>From individual trustees to family offices. 30-day free trial on every plan.</p>
          </div>
          <div className="pricing-grid-5">
            {pricingTiers.map(({ tier, price, limit, points, ctaClass, featured, badge, gold }) => (
              <div key={tier} className={'pricing-card' + (featured ? ' featured' : '') + (gold ? ' pricing-card-fo' : '')}>
                {badge && <div className="pricing-badge-wrap"><span className="pricing-badge">{badge}</span></div>}
                <div className="pricing-tier">{tier}</div>
                <div className="pricing-price">{price}<span> / yr</span></div>
                <div style={{ fontSize: 11, color: gold ? '#D4A017' : 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>{limit}</div>
                <ul className="pricing-features">
                  {points.map(p => (
                    <li key={p}><Check size={13} /> {p}</li>
                  ))}
                </ul>
                <Link href="/pricing" className={'pricing-cta ' + ctaClass}>See plan details</Link>
              </div>
            ))}
          </div>
          <p className="small-note" style={{ marginTop: 20 }}>
            30-day free trial on all plans · Annual billing · <Link href="/pricing" style={{ color: 'var(--accent)' }}>See full feature comparison →</Link>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <h2>Take Full Control of Your<br />Trust Infrastructure</h2>
          <p>No cloud. No exposure. No compromises.<br />Your data stays on your machine — permanently and privately.</p>
          <div className="cta-actions">
            <Link href="/pricing" className="btn-primary lg"><Shield size={16} /> Get License</Link>
            <Link href="/contact" className="btn-secondary lg">Contact Us</Link>
          </div>
          <p className="cta-note">No accounts required · Instant activation · Your data never leaves your machine</p>
        </div>
      </section>
    </div>
  );
}
