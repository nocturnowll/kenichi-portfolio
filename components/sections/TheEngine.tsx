'use client'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { useState } from 'react'
import { Terminal } from '@/components/engine/Terminal'
import { SESSION_JOB_HUNTER, SESSION_CRM } from '@/lib/terminal-sessions'

const MONO = "'IBM Plex Mono', 'Geist Mono', monospace"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inV = (delay = 0): Partial<HTMLMotionProps<any>> => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

const systems = [
  { name: 'member-crm', desc: 'AI inbox for WhatsApp and Instagram. Claude-backed responses, auto-routing, 384 members.' },
  { name: 'booking-engine', desc: 'End-to-end class booking and payment. Replaced a commercial tool. Live.' },
  { name: 'pos-system', desc: 'Multi-tenant F&B POS. QR ordering, loyalty tracking, owner dashboard. Live.' },
  { name: 'ops-tracker', desc: 'Real-time sales and production tracking. Every transaction, every channel.' },
  { name: 'job-hunter', desc: 'Scrapes 3 job boards every 8h, AI-scores matches, sends Telegram digest. Running now.' },
]

const TABS = ['job-hunter', 'crm scoring'] as const

export function TheEngine() {
  const [session, setSession] = useState(0)

  return (
    <section
      className="snap-section"
      id="the-engine"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 48px 80px',
        backgroundColor: 'oklch(7% 0.005 265)',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, oklch(55% 0.005 265) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ambient gradient orb */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.10), transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: '1300px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          margin: '0 auto',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          {...inV(0)}
          style={{
            fontFamily: MONO,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '20px',
          }}
        >
          05 · The Engine
        </motion.p>

        {/* Headline — masked reveal */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'oklch(92% 0.006 70)',
                margin: 0,
              }}
            >
              when tools don&apos;t fit,
            </motion.h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              <span style={{ color: 'var(--color-accent)' }}>I build them.</span>
            </motion.h2>
          </div>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* Left column — Terminal + stats */}
          <motion.div {...inV(0.1)}>
            {/* Tab buttons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              {TABS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setSession(i)}
                  style={{
                    fontFamily: MONO,
                    fontSize: '12px',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s, color 0.2s',
                    backgroundColor:
                      session === i
                        ? 'var(--color-accent)'
                        : 'oklch(18% 0.008 265)',
                    color:
                      session === i ? 'oklch(8% 0.004 265)' : 'oklch(42% 0.008 265)',
                    fontWeight: session === i ? 600 : 400,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Terminal */}
            <Terminal session={[SESSION_JOB_HUNTER, SESSION_CRM][session]} />

            {/* Stats row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1px',
                backgroundColor: 'var(--color-border)',
                borderRadius: '10px',
                overflow: 'hidden',
                marginTop: '20px',
              }}
            >
              {(
                [
                  ['5', 'systems built'],
                  ['110K+', 'users reached'],
                  ['8h', 'scraper cadence'],
                  ['0', 'non-AI lines'],
                ] as [string, string][]
              ).map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: 'oklch(10% 0.006 265)',
                    padding: '16px 12px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '22px',
                      letterSpacing: '-0.03em',
                      color: 'var(--color-accent)',
                      margin: '0 0 4px',
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: '10px',
                      color: 'oklch(40% 0.008 265)',
                      margin: '4px 0 0',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Systems list */}
          <div>
            <motion.p
              {...inV(0.08)}
              style={{
                fontFamily: MONO,
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'oklch(38% 0.008 265)',
                marginBottom: '20px',
              }}
            >
              5 systems in production
            </motion.p>

            {systems.map((s, i) => (
              <motion.div
                key={s.name}
                {...inV(0.12 + i * 0.07)}
                style={{
                  padding: '20px 0',
                  borderBottom: '1px solid oklch(18% 0.008 265)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--color-accent)',
                    }}
                  >
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: '10px',
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: '40px',
                      backgroundColor: 'oklch(60% 0.14 150 / 0.15)',
                      color: 'oklch(62% 0.14 150)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    live
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: '13px',
                    lineHeight: 1.65,
                    color: 'oklch(42% 0.008 265)',
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}

            {/* Footer line */}
            <motion.p
              {...inV(0.55)}
              style={{
                fontFamily: MONO,
                fontSize: '11px',
                color: 'oklch(26% 0.005 265)',
                marginTop: '24px',
                letterSpacing: '0.04em',
              }}
            >
              Built with Claude Code · GitHub Actions · Vercel · Supabase
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
