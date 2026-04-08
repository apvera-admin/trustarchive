import Link from 'next/link';
import { Shield, FileText, Users, Briefcase, BookOpen, CheckSquare, Bot, Check, Lock, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Features — TrustArchive',
  description: 'Every module a trustee needs: fiduciary accounting, document archive, beneficiary management, rules engine, local AI with RAG, and cryptographic audit trail.',
};

export default function FeaturesPage() {
  return (
    <div>
      {/* Page Hero */}
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Complete Feature Set
            </span>
            <h1>Everything a Trustee Needs.<br /><span className="accent">Nothing You Don&apos;t.</span></h1>
            <p>Six integrated modules designed specifically for private trust administration. No bloat, no SaaS features, no cloud dependency.</p>
          </div>
        </div>
      </div>

      {/* Module overview grid */}
      <section className="section section-bordered">
        <div className="container">
          <div className="features-grid">
            {[
              { icon: <FileText size={18} />, title: 'Document Archive', desc: 'Upload, organize, and generate trust documents. Bidirectional entity linking connects documents to assets, beneficiaries, and obligations. Cryptographic sealing on every file.' },
              { icon: <BookOpen size={18} />, title: 'Fiduciary Accounting', desc: 'Full double-entry bookkeeping with principal and income separation. Bank statement import via CSV, OFX, QFX, and QBO. Auto-allocation rules engine with staging inbox and approval workflow.' },
              { icon: <Users size={18} />, title: 'Beneficiary Management', desc: 'Complete beneficiary profiles with full distribution history, payment method tracking, and per-beneficiary reporting. Role designations for income, remainder, and contingent beneficiaries.' },
              { icon: <CheckSquare size={18} />, title: 'Rules Engine', desc: '21 seed templates covering common trust compliance scenarios. Event-condition-action pattern with approval workflows, recurring obligation schedules, and overdue alerts.' },
              { icon: <Bot size={18} />, title: 'Local AI Assistant', desc: 'Ollama-powered inference running entirely on your device. 12 read-only tools that query your ledger, assets, beneficiaries, and obligations. Document Intelligence via RAG searches across uploaded trust documents.' },
              { icon: <Shield size={18} />, title: 'Audit Trail', desc: 'Every action logged, timestamped, and cryptographically sealed in an immutable hash chain. Export to CSV for court filings, mediations, or beneficiary accounting.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiduciary Accounting deep-dive */}
      <div className="container">
        <div className="feature-detail">
          <div>
            <div className="feature-detail-label">
              <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}><BookOpen size={18} /></div>
              <span>Fiduciary Accounting</span>
            </div>
            <h2>Trust Accounting Built for Fiduciaries, Not Adapted from General Bookkeeping</h2>
            <p>Most accounting software treats trust accounting as a footnote. TrustArchive is built from the ground up around principal and income separation, fiduciary-standard chart of accounts, and reports that a court or co-trustee can actually read.</p>
            <ul className="check-list">
              {[
                'Separate principal and income pools with dual-balance tracking',
                'Bank statement import: CSV, OFX, QFX, QBO with auto-allocation rules',
                'Staging inbox: review, allocate, and approve imported transactions before posting',
                'Entity interest tracking with basis ledger — LLC, LP, corporation ownership',
                'Precious metals, cryptocurrency, and pegged currency asset types',
                'Distribution approval workflow for co-trustee or attorney sign-off',
              ].map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
            </ul>
          </div>
          <div><LedgerPanel /></div>
        </div>

        {/* Multi-trust deep-dive */}
        <div className="feature-detail flip">
          <div>
            <div className="feature-detail-label">
              <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}><Briefcase size={18} /></div>
              <span>Multi-Trust &amp; Operator Profiles</span>
            </div>
            <h2>One Application. Multiple Trusts. Role-Based Access for Every Operator.</h2>
            <p>TrustArchive supports managing a full portfolio of trusts from a single encrypted database. Each trust is fully isolated. Each operator sees only what their role permits.</p>
            <ul className="check-list">
              {[
                'Trust switcher and portfolio dashboard across all trusts',
                'Operator roles: trustee, co-trustee, grantor, attorney, beneficiary',
                'Per-trust permission flags: read, write, export, manage users',
                'All data scoped by trust — no cross-contamination between trust files',
                'PIN-based operator authentication after master password unlock',
              ].map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
            </ul>
          </div>
          <div><MultiTrustPanel /></div>
        </div>

        {/* Rules Engine deep-dive */}
        <div className="feature-detail">
          <div>
            <div className="feature-detail-label">
              <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}><CheckSquare size={18} /></div>
              <span>Rules Engine</span>
            </div>
            <h2>Codify Your Trust Instrument Into Enforceable Rules</h2>
            <p>The Rules Engine lets trustees translate trust instrument provisions into active compliance logic. Set distribution caps, recurring accounting deadlines, required beneficiary notices, and approval gates — then let TrustArchive track them.</p>
            <ul className="check-list">
              {[
                '21 seed templates covering the most common trust compliance scenarios',
                'Event-condition-action pattern: define what triggers a rule and what happens',
                'Approval workflows: require co-trustee or attorney sign-off before actions post',
                'Recurring obligation schedules: annual, quarterly, monthly, or on-event',
                'Full rule history with enable/disable audit trail',
              ].map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
            </ul>
          </div>
          <div><RulesPanel /></div>
        </div>

        {/* AI Assistant deep-dive */}
        <div className="feature-detail flip">
          <div>
            <div className="feature-detail-label">
              <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}><Bot size={18} /></div>
              <span>Local AI Assistant</span>
            </div>
            <h2>Private AI That Queries Your Encrypted Data — On Device, Offline</h2>
            <p>The Agent Assistant runs entirely on your local hardware using Ollama. No API calls to OpenAI, Anthropic, or any external server. Document Intelligence adds RAG search across your uploaded trust documents using local embeddings.</p>
            <ul className="check-list">
              {[
                'Ollama-powered inference — default model Qwen 2.5 7B, runs on standard hardware',
                '12 read-only tools: query ledger balances, distributions, assets, obligations, beneficiaries',
                'Document Intelligence: semantic search across uploaded trust documents via local embeddings',
                'Three-layer memory: conversation history, trust context, and cross-session recall',
                'Works completely offline after initial model download',
              ].map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
            </ul>
          </div>
          <div><AIPanel /></div>
        </div>

        {/* Document Archive deep-dive */}
        <div className="feature-detail">
          <div>
            <div className="feature-detail-label">
              <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}><FileText size={18} /></div>
              <span>Document Archive &amp; Generation</span>
            </div>
            <h2>Store, Generate, and Seal Every Trust Document</h2>
            <p>A centralized document vault with bidirectional links to every entity in your trust. Generate formal documents from 20 built-in templates, export to PDF or DOCX, and every file is cryptographically sealed at rest.</p>
            <ul className="check-list">
              {[
                'Upload and organize trust deeds, amendments, correspondence, and financial statements',
                '20 seed templates: certifications of trust, distribution letters, accounting reports, and more',
                'Bidirectional entity linking — connect documents to assets, beneficiaries, and obligations',
                'Folder hierarchy plus tags for flexible organization',
                'PDF and DOCX export for any generated document',
              ].map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
            </ul>
          </div>
          <div><DocumentPanel /></div>
        </div>

        {/* Audit Trail deep-dive */}
        <div className="feature-detail flip" style={{ borderBottom: 'none' }}>
          <div>
            <div className="feature-detail-label">
              <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}><Shield size={18} /></div>
              <span>Audit Trail</span>
            </div>
            <h2>Cryptographically Sealed, Immutable Record</h2>
            <p>Every action taken in TrustArchive — every login, document access, transaction, and rule change — is logged, timestamped, and cryptographically sealed. The audit log cannot be altered after the fact.</p>
            <ul className="check-list">
              {[
                'Immutable log of every user action with timestamp and operator identity',
                'Cryptographic hash chain — any tampering is immediately detectable',
                'Filter by user, date range, or action type',
                'Export to CSV for court filings, mediations, or beneficiary accounting',
                'Full-session audit logs including login and lock events',
              ].map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
            </ul>
          </div>
          <div><AuditPanel /></div>
        </div>
      </div>

      {/* Roadmap callout */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div className="section-header">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
              <AlertCircle size={18} color="var(--warn)" />
              <span className="section-label" style={{ marginBottom: 0 }}>Active Roadmap</span>
            </div>
            <h2>More Coming. No Extra Charge.</h2>
            <p>Every roadmap feature ships to your plan tier at no additional cost. No surprise upsells, no feature unlocks to purchase.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 800, margin: '0 auto' }}>
            <ul className="check-list">
              {[
                'ACTEC Formal Account report',
                'Tax prep summary for K-1 prep',
                'Distribution approval workflow',
                'Lot-level securities tracking',
                'PDF bank statement OCR',
                'Administration task management',
              ].map(item => (
                <li key={item} style={{ color: 'var(--text-2)' }}>
                  <Check size={14} style={{ color: 'var(--warn)', flexShrink: 0, marginTop: 2 }} /> {item}
                </li>
              ))}
            </ul>
            <ul className="check-list">
              {[
                'State court accounting formats (CA, NY, TX, NV)',
                'eSignature integration (opt-in)',
                'Consolidated cross-trust reporting (Family Office)',
                'Investment performance TWR / IRR (Family Office)',
                'Property management module',
                'Alternative asset tracking',
              ].map(item => (
                <li key={item} style={{ color: 'var(--text-2)' }}>
                  <Check size={14} style={{ color: 'var(--warn)', flexShrink: 0, marginTop: 2 }} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: 13, color: 'var(--text-3)', textAlign: 'center', marginTop: 32 }}>
            Roadmap features are included in your plan tier when they ship. Family Office features are exclusive to the Family Office plan.<br />
            <Link href="/pricing" style={{ color: 'var(--accent)' }}>See which features are on which plan →</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take Control<br />of Your Trust?</h2>
          <p>No cloud. No accounts. No compromises.</p>
          <div className="cta-actions">
            <Link href="/pricing" className="btn-primary lg"><Shield size={16} /> View Plans &amp; Pricing</Link>
            <Link href="/contact" className="btn-secondary lg">Ask a Question</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function DocumentPanel() {
  return (
    <div className="feature-panel">
      <div className="feature-panel-header">
        <span className="feature-panel-title">Document Archive</span>
        <span style={{ fontSize: 11, color: 'var(--accent)', background: 'var(--accent-dim)', padding: '2px 8px', borderRadius: 4 }}>3 documents</span>
      </div>
      {[
        { name: 'TMA Legacy Trust Deed', type: 'Trust Deed', date: 'Mar 19, 2026', status: 'Sealed' },
        { name: 'Certification of Trust', type: 'Generated', date: 'Mar 20, 2026', status: 'Exported' },
        { name: 'Q1 Distribution Letter', type: 'Generated', date: 'Apr 1, 2026', status: 'Draft' },
      ].map(({ name, type, date, status }) => (
        <div key={name} className="audit-row">
          <div className="audit-icon"><FileText size={12} /></div>
          <div className="audit-content">
            <div className="audit-user" style={{ fontSize: 12 }}>{name}</div>
            <div className="audit-action" style={{ fontSize: 11 }}>{type} · {date}</div>
          </div>
          <span className="mockup-status" style={{ fontSize: 9, padding: '2px 7px', borderRadius: 4, background: status === 'Sealed' ? 'var(--accent-dim)' : 'var(--bg-surface-3)', color: status === 'Sealed' ? 'var(--accent)' : 'var(--text-3)' }}>{status}</span>
        </div>
      ))}
    </div>
  );
}

function LedgerPanel() {
  return (
    <div className="feature-panel">
      <div className="feature-panel-header">
        <span className="feature-panel-title">Fiduciary Ledger</span>
        <span style={{ fontSize: 11, color: 'var(--text-2)' }}>Double-entry</span>
      </div>
      {[
        { account: 'Principal Balance', value: '$2,180,000' },
        { account: 'Income Balance', value: '$58,240' },
        { account: 'Net Trust Value', value: '$2,238,240' },
      ].map(({ account, value }) => (
        <div key={account} className="audit-row">
          <div className="audit-content">
            <div className="audit-action">{account}</div>
          </div>
          <div className="audit-user" style={{ fontSize: 13, color: 'var(--accent)' }}>{value}</div>
        </div>
      ))}
      <div style={{ marginTop: 12, padding: '10px 12px', background: 'var(--bg-surface-3)', borderRadius: 6 }}>
        <div style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 6 }}>Balance Trend (12 months)</div>
        <svg width="100%" height="40" viewBox="0 0 260 40" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 35 C40 33 80 28 120 20 C160 12 200 8 260 5" stroke="#2DD4BF" strokeWidth="2" fill="none" />
          <path d="M0 35 C40 33 80 28 120 20 C160 12 200 8 260 5 L260 40 L0 40 Z" fill="url(#lg)" />
        </svg>
      </div>
    </div>
  );
}

function MultiTrustPanel() {
  return (
    <div className="feature-panel">
      <div className="feature-panel-header">
        <span className="feature-panel-title">Trust Portfolio</span>
        <span style={{ fontSize: 11, color: 'var(--text-2)' }}>3 trusts</span>
      </div>
      {[
        { name: 'TMA Legacy Trust', type: 'Irrevocable', role: 'Trustee' },
        { name: 'Henderson Family Trust', type: 'Revocable', role: 'Co-Trustee' },
        { name: 'Riverside Land Trust', type: 'Land Trust', role: 'Trustee' },
      ].map(({ name, type, role }) => (
        <div key={name} className="audit-row">
          <div className="audit-icon"><Briefcase size={12} /></div>
          <div className="audit-content">
            <div className="audit-user" style={{ fontSize: 12 }}>{name}</div>
            <div className="audit-action" style={{ fontSize: 11 }}>{type}</div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--accent)', background: 'var(--accent-dim)', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>{role}</span>
        </div>
      ))}
      <div style={{ marginTop: 12, padding: '8px 12px', background: 'var(--bg-surface-3)', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', flexShrink: 0 }} />
        <span style={{ fontSize: 11, color: 'var(--text-3)' }}>Lisa M. · Attorney · Read + Export access</span>
      </div>
    </div>
  );
}

function RulesPanel() {
  return (
    <div className="feature-panel">
      <div className="feature-panel-header">
        <span className="feature-panel-title">Obligations &amp; Rules</span>
        <span style={{ fontSize: 10, color: 'var(--success)', background: 'rgba(34,197,94,0.12)', padding: '2px 8px', borderRadius: 4 }}>All on track</span>
      </div>
      {[
        { rule: 'Annual Accounting Deadline', due: 'Due in 47 days', status: 'ok' },
        { rule: 'Income Distribution Cap', due: '$75,000 limit · $58,240 used', status: 'ok' },
        { rule: 'Unbalanced Category Alert', due: 'Monitoring active', status: 'ok' },
        { rule: 'Beneficiary Notice Required', due: 'Due in 12 days', status: 'warn' },
      ].map(({ rule, due, status }) => (
        <div key={rule} className="audit-row">
          <div className="audit-icon"><CheckSquare size={12} /></div>
          <div className="audit-content">
            <div className="audit-user" style={{ fontSize: 12 }}>{rule}</div>
            <div className="audit-action" style={{ fontSize: 11 }}>{due}</div>
          </div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: status === 'warn' ? 'var(--warn)' : 'var(--success)', flexShrink: 0 }} />
        </div>
      ))}
    </div>
  );
}

function AIPanel() {
  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="chat-header-left"><Bot size={13} color="var(--accent)" /><span className="chat-header-title">Agent Assistant</span></div>
        <div className="chat-status"><span className="chat-status-dot" />Local AI Active</div>
      </div>
      <div className="chat-body">
        <div className="chat-msg user">&quot;What&apos;s the total income earned this year?&quot;</div>
        <div className="chat-msg ai">Total income earned year-to-date is $86,400 — $62,000 in dividends, $18,400 in interest, and $6,000 in rental income from the Riverside property.</div>
        <div className="chat-msg user">&quot;Find the trust deed in my documents&quot;</div>
        <div className="chat-msg ai">Found it — TMA Legacy Trust Deed, uploaded March 19, 2026. It&apos;s also linked to the Henderson Family Trust asset record.</div>
      </div>
      <div className="chat-footer"><Lock size={10} />No external calls · Fully local · RAG search active</div>
    </div>
  );
}

function AuditPanel() {
  return (
    <div className="info-panel">
      <div className="info-panel-header">
        <span className="info-panel-title">Audit Trail</span>
        <span className="info-panel-badge">Sealed</span>
      </div>
      {[
        { icon: <Users size={12} />, user: 'John W.', action: 'Updated Beneficiary Record', time: '2:41 PM' },
        { icon: <FileText size={12} />, user: 'John W.', action: 'Generated Financial Statement', time: '2:05 PM' },
        { icon: <BookOpen size={12} />, user: 'Lisa M.', action: 'Made Distribution · $8,000', time: '12:06 PM' },
        { icon: <Lock size={12} />, user: 'System', action: 'Session sealed · hash recorded', time: '11:00 AM' },
      ].map(({ icon, user, action, time }) => (
        <div key={action} className="audit-row">
          <div className="audit-icon">{icon}</div>
          <div className="audit-content"><div className="audit-user">{user}</div><div className="audit-action">{action}</div></div>
          <div className="audit-time">{time}</div>
        </div>
      ))}
      <div className="panel-hash">SHA-256: 40909f16c8a6a6f4e6aa1e2c12475...</div>
    </div>
  );
}
