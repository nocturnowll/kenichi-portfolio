'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Terminal } from '@/components/engine/Terminal'
import { SESSION_JOB_HUNTER, SESSION_CRM } from '@/lib/terminal-sessions'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

const systems = [
  { name: 'crm-agent', desc: 'AI CRM for Agape Movement — Claude-backed WhatsApp + Instagram inbox.' },
  { name: 'booking-agent', desc: 'End-to-end booking + payment replacing a commercial tool. 384 members.' },
  { name: 'fnb-agent', desc: 'Multi-tenant F&B POS. QR ordering, loyalty, owner dashboard. Live at IchiEcha.' },
  { name: 'ichiecha-ops', desc: 'Real-time sales + production tracking. Every transaction, every channel.' },
  { name: 'job-hunter', desc: 'Scrapes 3 job boards every 8h, scores against profile, sends Telegram digest. Running now.' },
]

export function TheEngine() {
  const [session, setSession] = useState(0)
  return (
    <section className="snap-section" id="the-engine" style={{
      display: 'flex', alignItems: 'center', padding: '100px 48px 80px',
      backgroundColor: 'oklch(7% 0.005 265)',
    }}>
      {/* Grid texture */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(oklch(25% 0.005 265) 1px, transparent 1px), linear-gradient(90deg, oklch(25% 0.005 265) 1px, transparent 1px)',
        backgroundSize: '48px 48px', opacity: 0.35, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1300px', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div {...inV(0)} style={{ marginBottom: '56px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '16px' }}>The Engine</p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.8vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '800px', color: 'oklch(92% 0.006 70)' }}
            >
              I don&apos;t just run the playbook.{' '}
              <span style={{ color: 'var(--color-accent)' }}>I build what runs the playbook.</span>
            </motion.h2>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px' }}>
          <motion.div {...inV(0.1)}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              {['job-hunter', 'crm scoring'].map((label, i) => (
                <button key={label} onClick={() => setSession(i)} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px', padding: '6px 14px',
                  borderRadius: '6px', border: 'none', cursor: 'pointer',
                  backgroundColor: session === i ? 'var(--color-accent)' : 'oklch(18% 0.008 265)',
                  color: session === i ? 'white' : 'oklch(42% 0.008 265)',
                }}>{label}</button>
              ))}
            </div>
            <Terminal session={[SESSION_JOB_HUNTER, SESSION_CRM][session]} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'oklch(20% 0.008 265)', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
              {[['5', 'systems'], ['110K+', 'users'], ['8h', 'cadence'], ['0', 'non-AI']].map(([v, l]) => (
                <div key={l} style={{ backgroundColor: 'oklch(10% 0.006 265)', padding: '16px 12px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', letterSpacing: '-0.03em', color: 'var(--color-accent)', marginBottom: '2px' }}>{v}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'oklch(42% 0.008 265)' }}>{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <motion.p {...inV(0.08)} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(38% 0.008 265)', marginBottom: '20px' }}>5 systems in production</motion.p>
            {systems.map((s, i) => (
              <motion.div key={s.name} {...inV(0.12 + i * 0.07)} style={{ padding: '20px 0', borderBottom: '1px solid oklch(18% 0.008 265)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, color: 'var(--color-accent)' }}>{s.name}</span>
                  <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '40px', backgroundColor: 'oklch(60% 0.14 150 / 0.15)', color: 'oklch(62% 0.14 150)', fontWeight: 600 }}>live</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'oklch(42% 0.008 265)' }}>{s.desc}</p>
              </motion.div>
            ))}
            <motion.p {...inV(0.55)} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'oklch(26% 0.005 265)', marginTop: '20px' }}>
              Built with Claude Code · GitHub Actions · Vercel · Supabase
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
