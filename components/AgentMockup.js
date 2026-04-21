'use client';
import { useState, useEffect, useRef } from 'react';
import { Bot, Lock } from 'lucide-react';

const TEAL = '#2DD4BF';

const CONVO = [
  { role: 'user',  text: 'How much has been distributed this year?', delay: 800 },
  { role: 'agent', text: '$58,240 across 3 beneficiaries YTD. Margaret received the largest share — $32,000 in March.', delay: 2400 },
  { role: 'user',  text: 'Is the K-1 filing on track?', delay: 5600 },
  { role: 'agent', text: 'Due April 30 — 9 days from now. I\'d recommend exporting the income summary this week to give your CPA time to review.', delay: 7400 },
  { role: 'user',  text: 'What\'s the current principal balance?', delay: 11200 },
  { role: 'agent', text: 'Principal balance is $2,180,000 as of today. Income balance is $58,240. Net trust value: $2,238,240.', delay: 13000 },
];

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 3, alignItems: 'center', padding: '4px 2px' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 5, height: 5, borderRadius: '50%',
          background: TEAL,
          animation: `ta-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  );
}

export default function AgentMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing,       setTyping]       = useState(false);
  const [cycle,        setCycle]        = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    setVisibleCount(0);
    setTyping(false);

    const timers = [];

    CONVO.forEach((msg, i) => {
      if (msg.role === 'agent') {
        timers.push(setTimeout(() => setTyping(true), msg.delay - 1000));
      }
      timers.push(setTimeout(() => {
        setTyping(false);
        setVisibleCount(i + 1);
      }, msg.delay));
    });

    const lastDelay = CONVO[CONVO.length - 1].delay;
    timers.push(setTimeout(() => setCycle(c => c + 1), lastDelay + 3500));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleCount, typing]);

  return (
    <>
      <style>{`
        @keyframes ta-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
        @keyframes ta-msg {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-md)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        userSelect: 'none',
      }}>

        <div style={{
          background: 'var(--bg-surface-2)',
          padding: '12px 16px',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Bot size={14} color={TEAL} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>Agent Assistant</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
            <span style={{ fontSize: 11, color: '#22c55e' }}>Local AI · Offline</span>
          </div>
        </div>

        <div style={{
          padding: '8px 16px',
          borderBottom: '1px solid var(--border)',
          background: 'rgba(45,212,191,0.04)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <Lock size={9} color={TEAL} />
          <span style={{ fontSize: 10, color: 'var(--text-3)' }}>
            TMA Legacy Trust · Querying encrypted local database
          </span>
        </div>

        <div
          ref={scrollRef}
          style={{
            padding: '16px',
            minHeight: 260,
            maxHeight: 320,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            scrollbarWidth: 'none',
          }}
        >
          <div style={{ alignSelf: 'flex-start', maxWidth: '88%' }}>
            <div style={{
              padding: '9px 13px',
              borderRadius: '10px 10px 10px 2px',
              background: 'var(--bg-surface-3)',
              border: '1px solid var(--border)',
              fontSize: 13, lineHeight: 1.55, color: 'var(--text-1)',
            }}>
              Hello. I have read-only access to your trust data — balances, distributions, obligations, and documents. What do you need?
            </div>
          </div>

          {CONVO.slice(0, visibleCount).map((msg, i) => (
            <div key={`${cycle}-${i}`} style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '88%',
              animation: 'ta-msg 0.3s ease',
            }}>
              <div style={{
                padding: '9px 13px',
                borderRadius: msg.role === 'user' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
                background: msg.role === 'user' ? 'rgba(45,212,191,0.12)' : 'var(--bg-surface-3)',
                border: msg.role === 'user' ? '1px solid rgba(45,212,191,0.28)' : '1px solid var(--border)',
                fontSize: 13, lineHeight: 1.55, color: 'var(--text-1)',
                fontWeight: msg.role === 'agent' ? 400 : 500,
              }}>
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div style={{ alignSelf: 'flex-start', animation: 'ta-msg 0.25s ease' }}>
              <div style={{
                padding: '8px 13px',
                borderRadius: '10px 10px 10px 2px',
                background: 'var(--bg-surface-3)',
                border: '1px solid var(--border)',
              }}>
                <TypingDots />
              </div>
            </div>
          )}
        </div>

        <div style={{
          padding: '10px 14px',
          borderTop: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            flex: 1,
            background: 'var(--bg-surface-3)',
            border: '1px solid var(--border-md)',
            borderRadius: 8, padding: '8px 12px',
            fontSize: 12, color: 'var(--text-3)',
          }}>
            Ask about your trust…
          </div>
          <div style={{
            width: 30, height: 30, background: TEAL,
            borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
        </div>

      </div>
    </>
  );
}
