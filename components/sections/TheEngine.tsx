'use client'
import { motion } from 'framer-motion'

const MONO = "'Geist Mono','IBM Plex Mono',monospace"

const systems = [
  {
    id: 'member-crm',
    label: 'member-crm',
    description: 'AI inbox handles WhatsApp + Instagram. Scores leads. Routes inquiries. Never misses a message.',
    metric: '384 members',
    for: 'Agape Movement',
    stack: ['Claude', 'Supabase', 'n8n'],
  },
  {
    id: 'booking-engine',
    label: 'booking-engine',
    description: 'Full class scheduling, payments, waitlists. Replaced a commercial tool in week one.',
    metric: 'Rp 120M tracked',
    for: 'Agape Movement',
    stack: ['Next.js', 'Stripe', 'Supabase'],
  },
  {
    id: 'ichiecha-pos',
    label: 'ichiecha-pos',
    description: 'QR ordering, loyalty tracking, owner dashboard. Every transaction logged in real time.',
    metric: '3 channels live',
    for: 'IchiEcha',
    stack: ['Next.js', 'Supabase', 'Vercel'],
  },
  {
    id: 'ops-tracker',
    label: 'ops-tracker',
    description: 'Sales + production data combined. Daily reports auto-sent to owner and partners.',
    metric: 'Daily auto-reports',
    for: 'IchiEcha',
    stack: ['Supabase', 'Claude', 'Telegram'],
  },
  {
    id: 'content-engine',
    label: 'content-engine',
    description: 'AI drafts captions and post schedules from sales data. Publishes across three channels.',
    metric: '3× posting cadence',
    for: 'Agape + IchiEcha',
    stack: ['Claude', 'n8n', 'Buffer'],
  },
]

function PulseRing({ delay = 0 }: { delay?: number }) {
  return (
    <div style={{ position: 'relative', width: 10, height: 10, flexShrink: 0 }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        backgroundColor: 'oklch(62% 0.14 150)',
      }} />
      <motion.div
        animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay }}
        style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          backgroundColor: 'oklch(62% 0.14 150)',
        }}
      />
    </div>
  )
}

export function TheEngine() {
  return (
    <section
      className="snap-section engine-edge"
      id="the-engine"
      style={{ display: 'flex', alignItems: 'center', padding: '80px 56px', backgroundColor: '#06090F' }}
    >
      <div className="matrix-dots" />

      {/* Gemini orb — center background */}
      <div className="gemini-orb" style={{ width: '80vw', height: '80vw', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="gemini-orb" style={{ width: '30vw', height: '30vw', top: '15%', right: '8%', animationDelay: '-7s', animationDuration: '10s', opacity: 0.12 }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1300px' }}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '52px' }}
        >
          <p style={{ fontFamily: MONO, fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(64% 0.155 42)', marginBottom: '18px' }}>
            05 · The Engine
          </p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 54px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'oklch(92% 0.006 70)',
              }}
            >
              when tools don&apos;t fit,{' '}
              <span style={{ color: 'oklch(64% 0.155 42)' }}>I build them.</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Systems grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
          {systems.map(({ id, label, description, metric, for: forClient, stack }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{
                backgroundColor: 'oklch(8% 0.006 265)',
                border: '1px solid oklch(16% 0.008 265)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                /* skip the 6th cell if 5 items in 3-column grid */
                gridColumn: i === 4 ? 'span 1' : 'auto',
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PulseRing delay={i * 0.3} />
                  <span style={{
                    fontFamily: MONO,
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'oklch(64% 0.155 42)',
                    letterSpacing: '0.02em',
                  }}>{label}</span>
                </div>
                <span style={{
                  fontFamily: MONO,
                  fontSize: '9px',
                  padding: '3px 8px',
                  borderRadius: '40px',
                  backgroundColor: 'oklch(62% 0.14 150 / 0.10)',
                  color: 'oklch(62% 0.14 150)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>live</span>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: MONO,
                fontSize: '11px',
                lineHeight: 1.6,
                color: 'oklch(42% 0.008 265)',
                flexGrow: 1,
              }}>{description}</p>

              {/* Footer */}
              <div style={{
                paddingTop: '12px',
                borderTop: '1px solid oklch(13% 0.006 265)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div>
                  <p style={{ fontFamily: MONO, fontSize: '11px', color: 'oklch(55% 0.008 265)', marginBottom: '2px' }}>
                    {forClient}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', letterSpacing: '-0.02em', color: 'oklch(75% 0.006 70)' }}>
                    {metric}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: MONO,
                      fontSize: '9px',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: 'oklch(14% 0.008 265)',
                      color: 'oklch(38% 0.008 265)',
                      letterSpacing: '0.06em',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* 6th cell — summary card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.45 }}
            style={{
              backgroundColor: 'oklch(64% 0.155 42 / 0.08)',
              border: '1px solid oklch(64% 0.155 42 / 0.18)',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <p style={{ fontFamily: MONO, fontSize: '11px', color: 'oklch(64% 0.155 42)', marginBottom: '12px', letterSpacing: '0.08em' }}>
              5 systems · production
            </p>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 3vw, 44px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: 'oklch(64% 0.155 42)',
                marginBottom: '8px',
              }}>Solo.<br />Shipped.</p>
              <p style={{ fontFamily: MONO, fontSize: '11px', color: 'oklch(40% 0.008 265)', lineHeight: 1.5 }}>
                Every system built alone,<br />running in production.
              </p>
            </div>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: 'oklch(28% 0.005 265)', marginTop: '16px' }}>
              Claude · Supabase · Next.js · n8n
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
