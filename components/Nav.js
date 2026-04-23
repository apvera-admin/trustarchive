'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    ['Features',  '/features'],
    ['Pricing',   '/pricing'],
    ['Use Cases', '/use-cases'],
    ['Blog',      '/blog'],
    ['Resources', '/resources'],
    ['Security',  '/security'],
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid var(--border)',
      background: 'rgba(9,9,14,0.85)', backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.svg" alt="TrustArchive" style={{ height: 48, width: 'auto' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
          {links.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className="nav-link" style={{
                color: active ? 'var(--accent)' : 'var(--text-2)',
                background: active ? 'var(--accent-dim)' : 'transparent',
              }}>
                {label}
              </Link>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href="/contact" className="btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>Contact</Link>
          <Link href="/pricing" className="btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>Get License</Link>
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            style={{ background: 'none', border: 'none', color: 'var(--text-2)', display: 'none', cursor: 'pointer', padding: 4 }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)', padding: '16px 32px 24px' }}>
          {[['Home', '/'], ...links, ['Contact', '/contact']].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500,
              color: pathname === href ? 'var(--accent)' : 'var(--text-2)',
              borderBottom: '1px solid var(--border)', textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 20 }}>
            <Link href="/pricing" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get License</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
