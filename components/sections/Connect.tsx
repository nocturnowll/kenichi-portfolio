'use client'
import { motion } from 'framer-motion'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

export function Connect() {
  return (
    <section className="snap-section" id="connect" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '100px 48px', textAlign: 'center',
    }}>
      {/* Center glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.12), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <motion.p {...inV(0)} style={{
          fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '32px',
        }}>Connect</motion.p>

        <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
          <motion.h2
            initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 5.5vw, 80px)', lineHeight: 0.95,
              letterSpacing: '-0.04em', color: 'var(--color-text)',
            }}
          >
            Looking for a Growth Lead or Founding GTM hire?
          </motion.h2>
        </div>

        <motion.p {...inV(0.2)} style={{
          fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.65,
          color: 'var(--color-muted)', marginBottom: '48px',
        }}>
          Based in Samarinda, Indonesia. Remote-only. Async-first. $5,000/month USD floor.
          Targeting Seed to Series B startups.
        </motion.p>

        <motion.div {...inV(0.3)} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a href="mailto:kenichiedbert@gmail.com" style={{
            padding: '16px 36px', borderRadius: '40px',
            backgroundColor: 'var(--color-accent)', color: 'white',
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
          }}>Email Kenny</a>
          <a href="https://linkedin.com/in/kenichiedberty" target="_blank" rel="noopener noreferrer" style={{
            padding: '16px 36px', borderRadius: '40px',
            border: '1px solid var(--color-border)', color: 'var(--color-text)',
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
          }}>LinkedIn</a>
        </motion.div>

        <motion.div {...inV(0.4)} style={{
          paddingTop: '40px', borderTop: '1px solid var(--color-border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.03em', color: 'var(--color-text)' }}>
            KE<span style={{ color: 'var(--color-accent)' }}>/</span>Y
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-muted)' }}>Kenichi Edbert Yauwanta · 2026</span>
        </motion.div>
      </div>
    </section>
  )
}
