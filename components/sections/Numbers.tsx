'use client'
import { motion } from 'framer-motion'

export function Numbers() {
  return (
    <section
      className="snap-section"
      id="numbers"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 56px',
        backgroundColor: '#080B12',
        overflow: 'hidden',
      }}
    >
      {/* Hero number — watermark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <motion.span
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(140px, 22vw, 320px)',
            letterSpacing: '-0.06em',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px oklch(93% 0.006 70 / 0.06)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          110,590
        </motion.span>
      </div>

      {/* Content — layered over watermark */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '20px',
          }}
        >
          RIFTSTORM · Confiction Labs · Global Alpha Launch
        </motion.p>

        {/* The headline stat */}
        <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
          <motion.p
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(52px, 8vw, 112px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--color-text)',
            }}
          >
            110,590
          </motion.p>
        </div>

        <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
          <motion.p
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 56px)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--color-accent)',
            }}
          >
            downloads in 72 hours.
          </motion.p>
        </div>

        {/* Supporting context — horizontal strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'flex',
            gap: '0',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '28px',
            maxWidth: '700px',
          }}
        >
          {[
            { n: '130', ctx: 'countries reached' },
            { n: '#1', ctx: 'Steam · launch day' },
            { n: '$6.5M', ctx: 'fundraise supported' },
            { n: '67%', ctx: 'D1 retention' },
          ].map(({ n, ctx }, i) => (
            <div
              key={ctx}
              style={{
                flex: 1,
                paddingRight: i < 3 ? '32px' : 0,
                borderRight: i < 3 ? '1px solid var(--color-border)' : 'none',
                paddingLeft: i > 0 ? '32px' : 0,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(20px, 2.2vw, 30px)',
                letterSpacing: '-0.03em',
                color: 'var(--color-text)',
                marginBottom: '4px',
              }}>{n}</p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: 'var(--color-muted)',
                lineHeight: 1.4,
              }}>{ctx}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
