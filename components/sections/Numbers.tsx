'use client'
import { motion } from 'framer-motion'

const stats = [
  { n: '110,590', label: 'downloads', sub: '72 hours · 130 countries' },
  { n: '#1', label: 'in category', sub: 'Steam · launch day' },
  { n: '$6.5M', label: 'raised', sub: 'fundraise supported' },
  { n: '67%', label: 'D1 retention', sub: '33% D7 · peak 1,270 CCU' },
]

export function Numbers() {
  return (
    <section className="snap-section" id="numbers" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 56px', backgroundColor: '#080B12' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.07), transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '64px' }}>
          RIFTSTORM · Confiction Labs · Global Alpha Launch
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'var(--color-border)', borderRadius: '16px', overflow: 'hidden' }}>
          {stats.map(({ n, label, sub }, i) => (
            <motion.div key={n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ backgroundColor: '#080B12', padding: '48px 36px 40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px, 5.5vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.9, color: 'var(--color-text)', marginBottom: '12px' }}>{n}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--color-accent)', marginBottom: '6px' }}>{label}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)' }}>{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
