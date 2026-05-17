'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

const cards = [
  {
    slug: 'agape-movement', tag: 'Operations',
    company: 'Agape Movement Samarinda', period: 'Mar 2025 – Present',
    headline: 'Rp 120M/month in 90 days from zero.',
    body: 'Pre-launch founders campaign: Rp 50M before opening day. 384 members. Sold-out week one. Built bespoke AI CRM and booking system that runs the operation.',
    stats: [['Rp 300M+', '90-day revenue'], ['384', 'members'], ['Rp 50M+', 'pre-launch']],
  },
  {
    slug: 'ichiecha', tag: 'F&B Launch',
    company: 'IchiEcha', period: '2025 – Present',
    headline: 'Dubai Chewy Cookies. 3 channels. 77% gross margin.',
    body: 'Channel strategy, GrabFood onboarding, pricing. Built ichiecha-ops — real-time sales and production tracking reporting daily by channel.',
    stats: [['3', 'channels live'], ['77%', 'gross margin'], ['0', 'tools that fit']],
  },
]

export function OperatorStory() {
  return (
    <section className="snap-section" id="the-work" style={{
      display: 'flex', alignItems: 'center', padding: '100px 48px 80px',
    }}>
      {/* Glow top-right */}
      <div aria-hidden style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '45vw', height: '45vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.10), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1300px', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div {...inV(0)} style={{ marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '16px',
          }}>The Work</p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.03em',
                color: 'var(--color-text)', lineHeight: 1.05, maxWidth: '640px',
              }}
            >Growth translates to real businesses, not just startups.</motion.h2>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {cards.map((c, i) => (
            <motion.div key={c.slug} {...inV(0.1 + i * 0.1)} style={{
              backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
              borderRadius: '16px', padding: '40px',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: '40px',
                    backgroundColor: 'oklch(60% 0.155 42 / 0.15)', color: 'var(--color-accent)',
                  }}>{c.tag}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)' }}>{c.period}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '12px' }}>{c.company}</p>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(20px, 2vw, 27px)', letterSpacing: '-0.03em',
                  color: 'var(--color-text)', lineHeight: 1.15,
                }}>{c.headline}</h3>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: 'var(--color-muted)' }}>{c.body}</p>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
                backgroundColor: 'var(--color-border)', borderRadius: '10px', overflow: 'hidden',
              }}>
                {c.stats.map(([val, lab]) => (
                  <div key={lab} style={{ backgroundColor: 'var(--color-surface-2)', padding: '16px 14px' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.03em', color: 'var(--color-accent)', marginBottom: '2px' }}>{val}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.4 }}>{lab}</p>
                  </div>
                ))}
              </div>
              <Link href={`/work/${c.slug}`} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none', marginTop: 'auto' }}>
                Read case study →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
