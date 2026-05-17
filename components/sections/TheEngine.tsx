'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Terminal } from '@/components/engine/Terminal'
import { SESSION_JOB_HUNTER, SESSION_CRM } from '@/lib/terminal-sessions'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const systems = [
  { name: 'crm-agent', desc: 'AI-powered WhatsApp + Instagram CRM for Agape Movement. Claude-backed member follow-up, auto-routing, booking context.' },
  { name: 'booking-agent', desc: 'End-to-end class booking + payment system replacing a commercial third-party tool. 384 members, live.' },
  { name: 'fnb-agent', desc: 'Multi-tenant F&B POS — QR ordering, loyalty tracking, owner dashboard. Deployed at IchiEcha.' },
  { name: 'ichiecha-ops', desc: 'Real-time sales + production tracking. Logs every transaction, ingredient usage, revenue by channel.' },
  { name: 'job-hunter', desc: 'Automated job discovery — scrapes 3 boards every 8h, scores against profile, sends Telegram digest. Running right now.' },
]

export function TheEngine() {
  const [session, setSession] = useState(0)
  const sessions = [SESSION_JOB_HUNTER, SESSION_CRM]

  return (
    <section id="the-engine" className="engine-section" style={{ padding: '96px 48px' }}>
      <motion.div {...inView(0)} style={{ marginBottom: '64px' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '12px',
          fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--color-accent)',
          marginBottom: '16px',
        }}>The Engine</p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '-0.03em',
          color: 'oklch(93% 0.008 70)', maxWidth: '700px', lineHeight: 1.05,
        }}>
          I don&apos;t just run the playbook.{' '}
          <span style={{ color: 'var(--color-accent)' }}>I build what runs the playbook.</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', maxWidth: '1200px' }}>
        {/* Left: Terminal */}
        <motion.div {...inView(0.1)}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            {['job-hunter', 'crm scoring'].map((label, i) => (
              <button key={label} onClick={() => setSession(i)} style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                padding: '6px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                backgroundColor: session === i ? 'var(--color-accent)' : 'var(--color-engine-border)',
                color: session === i ? 'white' : 'var(--color-engine-dim)',
              }}>{label}</button>
            ))}
          </div>
          <Terminal session={sessions[session]} />

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', backgroundColor: 'var(--color-engine-border)',
            marginTop: '24px', borderRadius: '8px', overflow: 'hidden',
          }}>
            {[
              ['5', 'systems built'],
              ['110K+', 'users reached'],
              ['8h', 'scraper cadence'],
              ['0', 'non-AI lines'],
            ].map(([val, lab]) => (
              <div key={lab} style={{ backgroundColor: 'oklch(14% 0.008 265)', padding: '16px 12px' }}>
                <p style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '24px', letterSpacing: '-0.03em',
                  color: 'var(--color-accent)', marginBottom: '2px',
                }}>{val}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-engine-dim)' }}>{lab}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Systems list */}
        <motion.div {...inView(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--color-engine-dim)', marginBottom: '24px',
          }}>5 systems in production</p>

          {systems.map((s, i) => (
            <motion.div key={s.name} {...inView(0.2 + i * 0.06)} style={{
              padding: '24px 0',
              borderBottom: '1px solid var(--color-engine-border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500,
                  color: 'var(--color-accent)',
                }}>{s.name}</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '10px',
                  padding: '2px 8px', borderRadius: '4px',
                  backgroundColor: 'oklch(60% 0.14 150 / 0.15)',
                  color: 'oklch(65% 0.14 150)',
                  fontWeight: 500,
                }}>live</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                lineHeight: 1.6, color: 'var(--color-engine-dim)',
              }}>{s.desc}</p>
            </motion.div>
          ))}

          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'oklch(28% 0.005 265)', marginTop: '24px',
          }}>
            Built with Claude Code · GitHub Actions · Vercel · Supabase
          </p>
        </motion.div>
      </div>
    </section>
  )
}
