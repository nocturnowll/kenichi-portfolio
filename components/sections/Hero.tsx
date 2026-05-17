'use client'
import { motion } from 'framer-motion'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '120px 48px 72px',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent mark */}
      <div aria-hidden style={{
        position: 'absolute', top: 64, right: 48,
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(180px, 25vw, 320px)',
        lineHeight: 1,
        color: 'var(--color-accent-tint)',
        letterSpacing: '-0.06em',
        userSelect: 'none',
        zIndex: 0,
      }}>72h</div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeUp(0)}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '28px',
          }}>
            Growth Operator — Indonesia — Open to Remote Roles
          </p>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 8vw, 110px)',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          color: 'var(--color-text)',
          marginBottom: '40px',
          maxWidth: '900px',
        }}>
          Kenichi<br />Edbert<br />Yauwanta
        </motion.h1>

        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(18px, 2.2vw, 26px)',
          lineHeight: 1.5,
          color: 'var(--color-muted)',
          maxWidth: '620px',
          marginBottom: '48px',
        }}>
          Built the community and partnerships that drove 110,000+ people
          across 130 countries in 72 hours. Contributed to a $6.5M raise.
          Now operating a Pilates franchise at Rp&nbsp;120M/month — and building
          the AI systems that run it.
        </motion.p>

        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#career" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px',
            backgroundColor: 'var(--color-accent)',
            color: 'white',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '15px',
            textDecoration: 'none',
            borderRadius: '8px',
          }}>
            See the work ↓
          </a>
          <a href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`} download style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px',
            border: '1.5px solid var(--color-border)',
            color: 'var(--color-text)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '15px',
            textDecoration: 'none',
            borderRadius: '8px',
            backgroundColor: 'transparent',
          }}>
            Download resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
