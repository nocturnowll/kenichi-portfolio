'use client'
import { motion } from 'framer-motion'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const stats = [
  { n: '15K+', l: 'Discord members' },
  { n: '7+', l: 'global creator partnerships' },
  { n: '$6.5M', l: 'fundraising round' },
  { n: '67%', l: 'Day-1 retention' },
  { n: 'Rp 120M', l: '/month from zero' },
  { n: '5', l: 'AI systems in production' },
]

export function About() {
  return (
    <section className="snap-section" id="about" style={{
      display: 'flex', alignItems: 'center', padding: '100px 48px 80px',
    }}>
      {/* Glow bottom-left */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-10%', left: '-15%',
        width: '50vw', height: '50vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.10), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', maxWidth: '1300px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div>
          <motion.p {...inV(0)} style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '24px',
          }}>About</motion.p>

          <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
            <motion.h2
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(44px, 5.5vw, 72px)', lineHeight: 0.95,
                letterSpacing: '-0.04em', color: 'var(--color-text)',
              }}
            >halo!</motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              "I've spent 5+ years building the community and partnership engines that make products grow — and lately, the AI systems that run the businesses behind them.",
              "At Confiction Labs, I ran community and creator partnerships for RIFTSTORM's global alpha launch. Those two functions drove the numbers: 110K+ downloads, 130 countries, 72 hours.",
              "Since 2025, operating a Pilates franchise from scratch. Hit Rp 120M/month in 90 days. When the tools didn't exist, I built them.",
            ].map((p, i) => (
              <motion.p key={i} {...inV(0.1 + i * 0.08)} style={{
                fontFamily: 'var(--font-body)', fontSize: '16px',
                lineHeight: 1.75, color: 'var(--color-muted)',
              }}>{p}</motion.p>
            ))}
            <motion.p {...inV(0.35)} style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
              color: 'var(--color-accent)', letterSpacing: '0.02em',
            }}>Based in Indonesia — async-first — available globally.</motion.p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', alignContent: 'center', backgroundColor: 'var(--color-border)', borderRadius: '16px', overflow: 'hidden' }}>
          {stats.map(({ n, l }, i) => (
            <motion.div key={n} {...inV(0.05 + i * 0.06)} style={{
              backgroundColor: 'var(--color-surface)', padding: '32px 28px',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.04em',
                color: 'var(--color-accent)', marginBottom: '6px',
              }}>{n}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.4 }}>{l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
