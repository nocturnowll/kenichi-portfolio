'use client'
import { motion } from 'framer-motion'

const MONO = "'Geist Mono', monospace"

const systems = [
  {
    id: 'member-crm',
    label: 'member-crm',
    description: 'AI inbox handles WhatsApp + Instagram. Scores leads, routes inquiries, never misses a message.',
    metric: '384 members',
    client: 'Agape Movement',
    stack: ['Claude', 'Supabase', 'n8n'],
  },
  {
    id: 'booking-engine',
    label: 'booking-engine',
    description: 'Full class scheduling, payments, waitlists. Replaced a commercial SaaS tool in week one.',
    metric: 'Rp 120M tracked',
    client: 'Agape Movement',
    stack: ['Next.js', 'Stripe', 'Supabase'],
  },
  {
    id: 'ichiecha-pos',
    label: 'ichiecha-pos',
    description: 'QR ordering, loyalty tracking, owner dashboard. Every transaction logged in real time.',
    metric: '3 channels live',
    client: 'IchiEcha',
    stack: ['Next.js', 'Supabase'],
  },
  {
    id: 'ops-tracker',
    label: 'ops-tracker',
    description: 'Sales and production data combined. Daily reports auto-sent to owner and partners.',
    metric: 'Daily auto-reports',
    client: 'IchiEcha',
    stack: ['Supabase', 'Claude', 'Telegram'],
  },
  {
    id: 'content-engine',
    label: 'content-engine',
    description: 'AI drafts captions from sales data, schedules posts across three channels automatically.',
    metric: '3× posting cadence',
    client: 'Agape + IchiEcha',
    stack: ['Claude', 'n8n'],
  },
]

function LiveDot({ delay = 0 }: { delay?: number }) {
  return (
    <div style={{ position: 'relative', width: 8, height: 8, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: 'oklch(65% 0.16 150)' }} />
      <motion.div
        animate={{ scale: [1, 2.2], opacity: [0.55, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay }}
        style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: 'oklch(65% 0.16 150)' }}
      />
    </div>
  )
}

export function TheEngine() {
  return (
    <section
      className="portfolio-section engine-edge"
      id="the-engine"
      style={{ backgroundColor: '#06090F', display: 'flex', alignItems: 'center', padding: '100px 64px 80px' }}
    >
      <div className="matrix-dots" />
      <div className="gemini-orb" style={{ width: '85vw', height: '85vw', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="gemini-orb" style={{ width: '28vw', height: '28vw', top: '12%', right: '6%', animationDelay: '-7s', animationDuration: '10s', opacity: 0.10 }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1280px' }}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(30px, 4.2vw, 60px)',
                letterSpacing: '-0.04em', lineHeight: 1.0,
                color: 'oklch(92% 0.006 70)',
              }}
            >
              When tools don&apos;t fit,{' '}
              <span style={{ color: 'var(--color-accent)' }}>I build them.</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Systems grid — 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {systems.map(({ id, label, description, metric, client, stack }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
              style={{
                backgroundColor: 'oklch(7.5% 0.005 265)',
                border: '1px solid oklch(15% 0.007 265)',
                borderRadius: '10px', padding: '22px',
                display: 'flex', flexDirection: 'column', gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <LiveDot delay={i * 0.25} />
                  <span style={{ fontFamily: MONO, fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)' }}>
                    {label}
                  </span>
                </div>
                <span style={{
                  fontFamily: MONO, fontSize: '9px',
                  padding: '2px 7px', borderRadius: '40px',
                  backgroundColor: 'oklch(65% 0.16 150 / 0.10)',
                  color: 'oklch(65% 0.16 150)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>live</span>
              </div>

              <p style={{ fontFamily: MONO, fontSize: '11px', lineHeight: 1.6, color: 'oklch(40% 0.007 265)', flexGrow: 1 }}>
                {description}
              </p>

              <div style={{
                paddingTop: '10px', borderTop: '1px solid oklch(12% 0.005 265)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              }}>
                <div>
                  <p style={{ fontFamily: MONO, fontSize: '10px', color: 'oklch(32% 0.006 265)', marginBottom: '2px' }}>{client}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', letterSpacing: '-0.02em', color: 'oklch(72% 0.006 70)' }}>{metric}</p>
                </div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: MONO, fontSize: '9px',
                      padding: '2px 5px', borderRadius: '3px',
                      backgroundColor: 'oklch(13% 0.007 265)',
                      color: 'oklch(35% 0.007 265)',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* 6th slot — summary */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
            style={{
              backgroundColor: 'oklch(64% 0.155 42 / 0.07)',
              border: '1px solid oklch(64% 0.155 42 / 0.15)',
              borderRadius: '10px', padding: '22px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <p style={{ fontFamily: MONO, fontSize: '10px', color: 'oklch(64% 0.155 42)', letterSpacing: '0.1em', marginBottom: '16px' }}>
              5 systems · production
            </p>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(24px, 2.8vw, 40px)',
              letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--color-accent)', marginBottom: '10px',
            }}>
              Solo.<br />Shipped.
            </p>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: 'oklch(28% 0.005 265)', lineHeight: 1.5 }}>
              Claude · Supabase<br />Next.js · n8n
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
