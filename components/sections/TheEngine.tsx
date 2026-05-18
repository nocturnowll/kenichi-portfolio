'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Terminal } from '@/components/engine/Terminal'
import { SESSION_JOB_HUNTER, SESSION_CRM } from '@/lib/terminal-sessions'

const MONO = "'IBM Plex Mono','Geist Mono',monospace"

const systems = [
  { name: 'member-crm',     desc: 'AI inbox — WhatsApp + Instagram. Claude-backed. 384 members.', status: 'live' },
  { name: 'booking-engine', desc: 'Class booking + payment. Replaced commercial tool.', status: 'live' },
  { name: 'pos-system',     desc: 'F&B POS — QR ordering, loyalty, owner dashboard.', status: 'live' },
  { name: 'ops-tracker',    desc: 'Real-time sales + production. Every transaction.', status: 'live' },
  { name: 'job-hunter',     desc: 'Scrapes 3 boards every 8h. Scores. Telegrams. Running.', status: 'live' },
]

export function TheEngine() {
  const [session, setSession] = useState(0)
  return (
    <section className="snap-section engine-edge" id="the-engine" style={{ display: 'flex', alignItems: 'center', padding: '100px 56px 80px', backgroundColor: '#06090F' }}>

      {/* Matrix dots */}
      <div className="matrix-dots" />

      {/* Gemini orb — center, behind everything */}
      <div className="gemini-orb" style={{ width: '75vw', height: '75vw', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

      {/* Secondary orb — smaller, offset, creates depth */}
      <div className="gemini-orb" style={{ width: '35vw', height: '35vw', top: '20%', right: '10%', animationDelay: '-7s', animationDuration: '10s', opacity: 0.15 }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1300px' }}>
        {/* Headline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: '56px' }}>
          <p style={{ fontFamily: MONO, fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(64% 0.155 42)', marginBottom: '20px' }}>05 · The Engine</p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2 initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1.0, color: 'oklch(92% 0.006 70)' }}>
              when tools don&apos;t fit,{' '}<span style={{ color: 'oklch(64% 0.155 42)' }}>I build them.</span>
            </motion.h2>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px' }}>
          {/* Left — terminal */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              {['job-hunter', 'crm scoring'].map((label, i) => (
                <button key={label} onClick={() => setSession(i)} style={{ fontFamily: MONO, fontSize: '12px', padding: '6px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: session === i ? 'oklch(64% 0.155 42)' : 'oklch(14% 0.008 265)', color: session === i ? 'white' : 'oklch(42% 0.008 265)' }}>
                  {label}
                </button>
              ))}
            </div>
            <Terminal session={[SESSION_JOB_HUNTER, SESSION_CRM][session]} />

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'oklch(16% 0.008 265)', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
              {[['5', 'systems'], ['110K+', 'users'], ['8h', 'cadence'], ['0', 'non-AI']].map(([v, l]) => (
                <div key={l} style={{ backgroundColor: '#06090F', padding: '16px 12px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', letterSpacing: '-0.03em', color: 'oklch(64% 0.155 42)', marginBottom: '3px' }}>{v}</p>
                  <p style={{ fontFamily: MONO, fontSize: '11px', color: 'oklch(38% 0.008 265)' }}>{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — systems */}
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }} style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(35% 0.008 265)', marginBottom: '20px' }}>
              5 systems · production
            </motion.p>
            {systems.map(({ name, desc, status }, i) => (
              <motion.div key={name} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 + i * 0.07 }} style={{ padding: '18px 0', borderBottom: '1px solid oklch(14% 0.008 265)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: MONO, fontSize: '13px', fontWeight: 500, color: 'oklch(64% 0.155 42)' }}>{name}</span>
                  <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '40px', backgroundColor: 'oklch(60% 0.14 150 / 0.12)', color: 'oklch(62% 0.14 150)', fontFamily: MONO, fontWeight: 600 }}>{status}</span>
                </div>
                <p style={{ fontFamily: MONO, fontSize: '12px', lineHeight: 1.55, color: 'oklch(40% 0.008 265)' }}>{desc}</p>
              </motion.div>
            ))}
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} style={{ fontFamily: MONO, fontSize: '11px', color: 'oklch(22% 0.005 265)', marginTop: '20px' }}>
              Claude · Supabase · Next.js · GitHub Actions · Vercel
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
