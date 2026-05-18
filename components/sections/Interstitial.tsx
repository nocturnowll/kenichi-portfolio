'use client'
import { motion } from 'framer-motion'

export function Interstitial() {
  return (
    <section
      className="portfolio-section"
      style={{
        backgroundColor: '#05080E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 64px',
      }}
    >
      {/* Very subtle vignette */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, oklch(4% 0.004 265 / 0.7) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '680px' }}>
        {/* Chapter marker */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px', letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)', marginBottom: '40px',
            opacity: 0.4,
          }}
        >
          Act II
        </motion.p>

        {/* The reveal line */}
        <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 58px)',
              letterSpacing: '-0.04em', lineHeight: 1.05,
              color: 'var(--color-text)',
            }}
          >
            I also build the tools
            <br />
            that run them.
          </motion.h2>
        </div>

        {/* Amber rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          style={{
            height: '1px',
            width: '48px',
            margin: '0 auto',
            backgroundColor: 'var(--color-accent)',
            transformOrigin: 'left',
          }}
        />
      </div>
    </section>
  )
}
