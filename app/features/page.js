import Link from 'next/link';
import { Shield, FileText, Users, Briefcase, BookOpen, CheckSquare, Bot, Check, Lock } from 'lucide-react';

export const metadata = {
  title: 'Features — TrustArchive',
  description: 'Every module a trustee needs: document archive, fiduciary accounting, beneficiary management, rules engine, local AI, and cryptographic audit trail.',
};

const features = [
  {
    icon: <FileText size={20} />,
    label: 'Document Archive',
    title: 'Store, Generate & Seal Trust Documents',
    desc: 'A secure document vault for every file associated with your trust. Upload existing documents, generate new ones from templates, and every file is cryptographically sealed at rest using SQLCipher encryption.',
    points: [
      'Upload and organize trust deeds, amendments, correspondence, and financial statements',
      'Generate Certifications of Trust, distribution letters, and accounting reports',
      'Version history with tamper-evident sealing on each document',
      'Tag and categorize documents for fast retrieval',
      'Export documents as PDF at any time',
    ],
    panel: <DocumentPanel />,
  },
  {
    icon: <BookOpen size={20} />,
    label: 'Fiduciary Accounting',
    title: 'Double-Entry Trust Accounting Built for Fiduciaries',
    desc: 'Not general-purpose bookkeeping — this is purpose-built for trust accounting. Separate principal and income accounts, journal entries, distributions, and financial reports that meet fiduciary standards.',
    points: [
      'Full double-entry bookkeeping with trust-specific chart of accounts',
      'Separate principal and income tracking per trust law requirements',
      'Record journal entries, distributions, and asset acquisitions',
      'Generate balance sheets, income statements, and distribution reports',
      'Import transactions via CSV from bank or brokerage exports',
    ],
    panel: <LedgerPanel />,
    flip: true,
  },
  {
    icon: <Users size={20} />,
    label: 'Beneficiaries',
    title: 'Complete Beneficiary Management',
    desc: 'Maintain detailed records for every beneficiary with full distribution history, contact information, and per-beneficiary reporting — all stored locally and encrypted.',
    points: [
      'Track multiple beneficiaries with role designations (income, remainder, contingent)',
      'Full distribution history per beneficiary with timestamps',
      'Generate per-beneficiary accounting statements',
      'Store sensitive beneficiary data (SSN, banking details) with field-level encryption',
      'Multi-operator access with role-based permissions',
    ],
    panel: <BeneficiaryPanel />,
  },
  {
    icon: <CheckSquare size={20} />,
    label: 'Rules Engine',
    title: 'Automated Compliance and Obligation Tracking',
    desc: 'Define the rules your trust must follow and let TrustArchive track and alert you when action is required. Annual accounting deadlines, distribution caps, required notices — all monitored automatically.',
    points: [
      'Create compliance rules from built-in templates or from scratch',
      'Set recurring obligation schedules (annual, quarterly, on-event)',
      'Alerts and dashboard indicators for upcoming and overdue items',
      'Distribution cap enforcement with automatic flagging',
      'Full rule history with enable/disable audit trail',
    ],
    panel: <RulesPanel />,
    flip: true,
  },
  {
    icon: <Bot size={20} />,
    label: 'Local AI Assistant',
    title: 'Ask Questions in Plain Language — Privately',
    desc: 'The Agent Assistant is a local AI that queries your encrypted trust data on-device. No API calls to OpenAI, Anthropic, or anyone else. Your questions and answers never leave your machine.',
    points: [
      'Query distributions, balances, documents, and compliance status in plain English',
      'Runs entirely on your local hardware — no internet required',
      'No data sent to any external server, ever',
      'Context-aware: understands your trust structure, beneficiaries, and accounts',
      'Works offline after initial model download',
    ],
    panel: <AIPanel />,
  },
  {
    icon: <Shield size={20} />,
    label: 'Audit Trail',
    title: 'Cryptographically Sealed, Immutable Record',
    desc: 'Every action taken in TrustArchive — every login, document access, transaction, and rule change — is logged, timestamped, and cryptographically sealed. The audit log cannot be altered after the fact.',
    points: [
      'Immutable log of every user action with timestamp and operator identity',
      'Cryptographic hash chain — any tampering is immediately detectable',
      'Filter by user, date range, or action type',
      'Export to CSV for court filings, mediations, or beneficiary accounting',
      'Full-session audit logs including login and lock events',
    ],
    panel: <AuditPanel />,
    flip: true,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Complete Feature Set
            </span>
            <h1>Everything a Trustee Needs.<br /><span className="accent">Nothing You Don't.</span></h1>
            <p>Six integrated modules designed specifically for private trust administration. No bloat, no SaaS features, no cloud dependency.</p>
          </div>
        </div>
      </div>

      {/* Feature Details */}
      <div className="container">
        {features.map(({ icon, label, title, desc, points, panel, flip }, i) => (
          <div key={label} className={`feature-detail${flip ? ' flip' : ''}`}>
            <div>
              <div className="feature-detail-label">
                <div className="feature-icon" style={{ width: 32, height: 32, borderRadius: 8 }}>{icon}</div>
                <span>{label}</span>
              </div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <ul className="check-list">
                {points.map(pt => <li key={pt}><Check size={14} /> {pt}</li>)}
              </ul>
            </div>
            <div>{panel}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take Control<br />of Your Trust?</h2>
          <p>No cloud. No accounts. No compromises.</p>
          <div className="cta-actions">
            <Link href="/pricing" className="btn-primary lg"><Shield size={16} /> Get License</Link>
            <Link href="/contact" className="btn-secondary lg">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
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
        { account: 'Principal Balance', value: '$2,180,000', trend: '+' },
        { account: 'Income Balance', value: '$58,240', trend: '+' },
        { account: 'Net Trust Value', value: '$2,238,240', trend: '+' },
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

function BeneficiaryPanel() {
  return (
    <div className="feature-panel">
      <div className="feature-panel-header">
        <span className="feature-panel-title">Beneficiaries</span>
        <span style={{ fontSize: 11, color: 'var(--text-2)' }}>3 registered</span>
      </div>
      {[
        { name: 'Margaret T.', role: 'Primary Income Beneficiary', dist: '$32,000 YTD' },
        { name: 'Robert T.', role: 'Remainder Beneficiary', dist: '$18,240 YTD' },
        { name: 'Sarah T.', role: 'Contingent Beneficiary', dist: '$8,000 YTD' },
      ].map(({ name, role, dist }) => (
        <div key={name} className="audit-row">
          <div className="audit-icon"><Users size={12} /></div>
          <div className="audit-content">
            <div className="audit-user" style={{ fontSize: 12 }}>{name}</div>
            <div className="audit-action" style={{ fontSize: 11 }}>{role}</div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>{dist}</div>
        </div>
      ))}
    </div>
  );
}

function RulesPanel() {
  return (
    <div className="feature-panel">
      <div className="feature-panel-header">
        <span className="feature-panel-title">Obligations & Rules</span>
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
        <div className="chat-msg user">"What's the total income earned this year?"</div>
        <div className="chat-msg ai">Total income earned year-to-date is $86,400, consisting of $62,000 in dividends, $18,400 in interest, and $6,000 in rental income from the Riverside property.</div>
        <div className="chat-msg user">"When is the next required distribution?"</div>
        <div className="chat-msg ai">The next mandatory income distribution is due by June 30. Based on current income balance, the minimum required distribution is $12,800.</div>
      </div>
      <div className="chat-footer"><Lock size={10} />No external calls · Fully local</div>
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
