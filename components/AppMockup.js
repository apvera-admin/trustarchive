'use client';
import { useState, useEffect } from 'react';
import { Monitor, FileText, Users, Briefcase, BookOpen, CheckSquare, Lock } from 'lucide-react';

const TEAL = '#2DD4BF'; // matches var(--accent) from globals.css

const NAV = [
  { id: 'overview',      label: 'Overview',      icon: Monitor },
  { id: 'documents',     label: 'Documents',     icon: FileText },
  { id: 'beneficiaries', label: 'Beneficiaries', icon: Users },
  { id: 'assets',        label: 'Assets',        icon: Briefcase },
  { id: 'ledger',        label: 'Ledger',        icon: BookOpen },
  { id: 'obligations',   label: 'Obligations',   icon: CheckSquare },
];

function Badge({ status }) {
  const map = {
    'On Track': { bg: 'rgba(45,212,191,0.15)',  color: TEAL },
    'Pending':  { bg: 'rgba(255,190,60,0.15)',  color: '#fbbe3c' },
    'Current':  { bg: 'rgba(255,190,60,0.15)',  color: '#fbbe3c' },
    'Filed':    { bg: 'rgba(45,212,191,0.15)',  color: TEAL },
    'Due Soon': { bg: 'rgba(255,190,60,0.15)',  color: '#fbbe3c' },
    'Exported': { bg: 'rgba(255,255,255,0.08)', color: '#888' },
  };
  const c = map[status] || { bg: 'rgba(255,255,255,0.08)', color: '#888' };
  return (
    <span style={{
      background: c.bg, color: c.color,
      fontSize: 10, fontWeight: 600,
      padding: '2px 8px', borderRadius: 4,
      letterSpacing: '0.02em', whiteSpace: 'nowrap',
    }}>{status}</span>
  );
}

// ── Panel: Overview ──────────────────────────────────────────────────────────
function OverviewPanel() {
  const [count, setCount] = useState(0);
  const [val,   setVal]   = useState(0);

  useEffect(() => {
    let frame;
    let start = null;
    const run = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 800, 1);
      setCount(Math.round(p * 3));
      setVal(Math.round(p * 2400000));
      if (p < 1) frame = requestAnimationFrame(run);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, []);

  const rows = [
    ['Annual Accounting Due',   'On Track'],
    ['Q4 Distribution Report',  'Pending'],
    ['Trust Agreement Updated', 'Current'],
  ];

  return (
    <div style={{ animation: 'ta-slide 0.25s ease' }}>
      {/* Stat cards */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        {[
          { label: 'BENEFICIARIES',   val: count, fmt: v => v,                          accent: false },
          { label: 'NET TRUST VALUE', val: val,   fmt: v => '$' + (v / 1e6).toFixed(1) + 'M', accent: true },
        ].map(s => (
          <div key={s.label} style={{
            flex: 1,
            background: 'var(--bg-surface-3)',
            border: '1px solid var(--border)',
            borderRadius: 8, padding: '10px 12px',
          }}>
            <div style={{ fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.08em', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: s.accent ? TEAL : 'var(--text-1)' }}>
              {s.fmt(s.val)}
            </div>
          </div>
        ))}
      </div>

      {/* Row list */}
      {rows.map(([label, status], i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 0', borderBottom: '1px solid var(--border)',
        }}>
          <span style={{ fontSize: 11, color: 'var(--text-2)' }}>{label}</span>
          <Badge status={status} />
        </div>
      ))}
    </div>
  );
}

// ── Panel: Documents ─────────────────────────────────────────────────────────
function DocumentsPanel() {
  const docs = [
    ['TMA Legacy Trust Agreement.pdf', 'Mar 12 2024', '2.4 MB', 'Filed'],
    ['Annual Accounting 2023.pdf',      'Jan 8 2024',  '1.1 MB', 'Filed'],
    ['Q4 Distribution Report.pdf',      'Apr 3 2024',  '840 KB', 'Pending'],
    ['Amendment No. 2.pdf',             'Nov 15 2023', '310 KB', 'Filed'],
  ];
  return (
    <div style={{ animation: 'ta-slide 0.25s ease' }}>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 10 }}>4 documents · 4.65 MB total</div>
      {docs.map(([name, date, size, status], i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '7px 0', borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{
              width: 26, height: 26,
              background: 'var(--bg-surface-3)',
              borderRadius: 5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FileText size={12} color="var(--text-3)" />
            </div>
            <div>
              <div style={{ fontSize: 10.5, color: 'var(--text-1)', fontWeight: 500 }}>{name}</div>
              <div style={{ fontSize: 9.5, color: 'var(--text-3)', marginTop: 1 }}>{date} · {size}</div>
            </div>
          </div>
          <Badge status={status} />
        </div>
      ))}
    </div>
  );
}

// ── Panel: Beneficiaries ─────────────────────────────────────────────────────
function BeneficiariesPanel() {
  const people = [
    ['Margaret A. Thornton', 'Primary Beneficiary', '60%', 160],
    ['James R. Thornton',    'Beneficiary',         '25%', 220],
    ['Claire W. Thornton',   'Beneficiary',         '15%', 280],
  ];
  return (
    <div style={{ animation: 'ta-slide 0.25s ease' }}>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 10 }}>3 beneficiaries</div>
      {people.map(([name, role, share, hue], i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 0', borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: `hsl(${hue},40%,22%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, color: `hsl(${hue},60%,65%)`,
              flexShrink: 0,
            }}>
              {name.split(' ').slice(0, 2).map(n => n[0]).join('')}
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-1)', fontWeight: 500 }}>{name}</div>
              <div style={{ fontSize: 9.5, color: 'var(--text-3)' }}>{role}</div>
            </div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: TEAL }}>{share}</div>
        </div>
      ))}
    </div>
  );
}

// ── Panel: Assets ────────────────────────────────────────────────────────────
function AssetsPanel() {
  const assets = [
    ['Real Property — 412 Hillcrest Dr', 'Real Estate', '$1,200,000'],
    ['Fidelity Brokerage Acct',           'Investment',  '$870,000'],
    ['Life Insurance Policy',             'Insurance',   '$250,000'],
    ['Bank of America Checking',          'Cash',        '$80,000'],
  ];
  return (
    <div style={{ animation: 'ta-slide 0.25s ease' }}>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 10 }}>
        Total: <span style={{ color: TEAL, fontWeight: 600 }}>$2,400,000</span>
      </div>
      {assets.map(([name, type, value], i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '7px 0', borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-1)', fontWeight: 500 }}>{name}</div>
            <div style={{ fontSize: 9.5, color: 'var(--text-3)' }}>{type}</div>
          </div>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-1)' }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

// ── Panel: Ledger ────────────────────────────────────────────────────────────
function LedgerPanel() {
  const entries = [
    ['Apr 15', 'Q1 Distribution — Margaret', '-$12,500', 'debit'],
    ['Apr 1',  'Dividend Income — Fidelity', '+$3,240',  'credit'],
    ['Mar 28', 'Property Tax Payment',       '-$4,800',  'debit'],
    ['Mar 15', 'Q1 Distribution — James',    '-$5,200',  'debit'],
    ['Mar 1',  'Interest Income',            '+$1,120',  'credit'],
  ];
  return (
    <div style={{ animation: 'ta-slide 0.25s ease' }}>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 10 }}>
        YTD Net: <span style={{ color: '#fbbe3c', fontWeight: 600 }}>-$18,140</span>
      </div>
      {entries.map(([date, desc, amt, type], i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '6px 0', borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 9.5, color: 'var(--text-3)', minWidth: 34 }}>{date}</span>
            <span style={{ fontSize: 10.5, color: 'var(--text-2)' }}>{desc}</span>
          </div>
          <span style={{
            fontSize: 11, fontWeight: 600,
            color: type === 'credit' ? TEAL : '#ff7070',
          }}>{amt}</span>
        </div>
      ))}
    </div>
  );
}

// ── Panel: Obligations ───────────────────────────────────────────────────────
function ObligationsPanel() {
  const items = [
    ['File Annual Accounting — 2024',       'Jun 1, 2024',  'On Track'],
    ['Q2 Distribution — All Beneficiaries', 'Jul 15, 2024', 'Due Soon'],
    ['Property Insurance Renewal',          'Aug 30, 2024', 'On Track'],
    ['CPA Review — Tax Filing',             'Apr 15, 2025', 'On Track'],
  ];
  return (
    <div style={{ animation: 'ta-slide 0.25s ease' }}>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 10 }}>4 open obligations</div>
      {items.map(([task, due, status], i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          padding: '7px 0', borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-1)', fontWeight: 500 }}>{task}</div>
            <div style={{ fontSize: 9.5, color: 'var(--text-3)', marginTop: 2 }}>Due {due}</div>
          </div>
          <Badge status={status} />
        </div>
      ))}
    </div>
  );
}

const PANELS = {
  overview:      OverviewPanel,
  documents:     DocumentsPanel,
  beneficiaries: BeneficiariesPanel,
  assets:        AssetsPanel,
  ledger:        LedgerPanel,
  obligations:   ObligationsPanel,
};

const TITLES = {
  overview:      'Trust Overview',
  documents:     'Documents',
  beneficiaries: 'Beneficiaries',
  assets:        'Assets',
  ledger:        'Ledger',
  obligations:   'Obligations',
};

// ── Main export ──────────────────────────────────────────────────────────────
export default function AppMockup() {
  const [active, setActive] = useState('overview');
const [paused, setPaused] = useState(false);

const NAV_IDS = NAV.map(n => n.id);

useEffect(() => {
  if (paused) return;
  const timer = setInterval(() => {
    setActive(cur => {
      const i = NAV_IDS.indexOf(cur);
      return NAV_IDS[(i + 1) % NAV_IDS.length];
    });
  }, 3500);
  return () => clearInterval(timer);
}, [paused]);
  const Panel = PANELS[active];

  return (
    <>
      <style>{`
        @keyframes ta-slide {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="app-mockup">
        {/* Title bar */}
        <div className="mockup-bar">
          <span className="mockup-dot" style={{ background: '#ef4444' }} />
          <span className="mockup-dot" style={{ background: '#f59e0b' }} />
          <span className="mockup-dot" style={{ background: '#22c55e' }} />
          <span className="mockup-title">TrustArchive — TMA Legacy Trust</span>
        </div>

        <div className="mockup-body">
          {/* Sidebar */}
          <div className="mockup-sidebar">
            {NAV.map(({ id, label, icon: Icon }) => (
              <div
                key={id}
                onClick={() => { setActive(id); setPaused(true); }}
                className={`mockup-nav-item${active === id ? ' active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <Icon size={12} />
                {label}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="mockup-content">
            <div className="mockup-section-title">{TITLES[active]}</div>
            <Panel key={active} />
          </div>
        </div>

        {/* Footer */}
        <div className="mockup-encrypt" style={{ margin: '0 10px 10px', borderRadius: 6 }}>
          <Lock size={10} />
          Encrypted &amp; Local — No External Calls
        </div>
      </div>
    </>
  );
}
