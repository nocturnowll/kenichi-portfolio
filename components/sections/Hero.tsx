'use client'
import { motion } from 'framer-motion'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const words = ['Kenichi', 'Edbert', 'Yauwanta']

export function Hero() {
  return (
    <section className="snap-section" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 48px 72px' }}>
      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', right: '-10%',
        width: '55vw', height: '55vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.16), transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '28px',
          }}
        >
          Growth Operator — Indonesia — Open to Remote Roles
        </motion.p>

        {/* Name — masked line reveals */}
        {words.map((word, i) => (
          <div key={word} style={{ overflow: 'hidden', marginBottom: i < 2 ? '4px' : '44px' }}>
            <motion.span
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 + i * 0.13 }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(52px, 9.5vw, 130px)', lineHeight: 0.92,
                letterSpacing: '-0.04em',
                color: i === 2 ? 'transparent' : 'var(--color-text)',
                WebkitTextStroke: i === 2 ? '1.5px var(--color-text)' : 'none',
              }}
            >{word}</motion.span>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.4vw, 17px)',
              lineHeight: 1.7, color: 'var(--color-muted)', maxWidth: '420px',
            }}
          >
            Built the community and partnerships that drove 110,000+ people
            across 130 countries in 72 hours. Contributed to a $6.5M raise.
            Operating a Pilates franchise at Rp&nbsp;120M/month — and building the
            AI systems that run it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82 }}
            style={{ display: 'flex', gap: '12px', paddingTop: '4px' }}
          >
            <a href="#career" style={{
              padding: '13px 26px', borderRadius: '40px',
              backgroundColor: 'var(--color-accent)', color: 'white',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
            }}>See the work ↓</a>
            <a href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`} download style={{
              padding: '13px 26px', borderRadius: '40px',
              border: '1px solid var(--color-border)', color: 'var(--color-text)',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px',
              textDecoration: 'none', backgroundColor: 'transparent',
            }}>Download resume</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
