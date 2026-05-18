'use client'
import { motion } from 'framer-motion'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Connect() {
  return (
    <section
      className="portfolio-section"
      id="connect"
      style={{
        backgroundColor: '#080B12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 64px',
      }}
    >
      {/* Soft glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '55vw', height: '55vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', width: '100%' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--color-muted)', marginBottom: '36px',
            opacity: 0.5,
          }}
        >
          Open to opportunities
        </motion.p>

        <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 88px)',
              letterSpacing: '-0.045em', lineHeight: 0.92,
              color: 'var(--color-text)',
            }}
          >
            Looking for a
            <br />
            <span style={{ WebkitTextStroke: '1.5px oklch(93% 0.006 70 / 0.45)', color: 'transparent' }}>
              Growth Lead?
            </span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: '16px',
            lineHeight: 1.65, color: 'var(--color-muted)',
            maxWidth: '480px', marginBottom: '52px',
          }}
        >
          Seed to Series B. Remote-only. Targeting founding-team growth hires
          where the brief is "figure it out" and the budget is "prove it first."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '96px' }}
        >
          <a
            href="mailto:kenichiedbert@gmail.com"
            style={{
              padding: '14px 32px', borderRadius: '40px',
              backgroundColor: 'var(--color-accent)', color: '#080B12',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px',
              textDecoration: 'none', letterSpacing: '-0.01em',
            }}
          >
            Get in touch
          </a>
          <a
            href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`}
            download
            style={{
              padding: '14px 32px', borderRadius: '40px',
              border: '1px solid var(--color-border)', color: 'var(--color-muted)',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Download resume
          </a>
          <a
            href="https://linkedin.com/in/kenichiedberty"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 32px', borderRadius: '40px',
              border: '1px solid var(--color-border)', color: 'var(--color-muted)',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
        </motion.div>

        <div style={{
          paddingTop: '32px', borderTop: '1px solid oklch(16% 0.008 265)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '18px', letterSpacing: '-0.03em', color: 'var(--color-text)',
          }}>
            KE<span style={{ color: 'var(--color-accent)' }}>/</span>Y
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-muted)', opacity: 0.4 }}>
            Kenichi Edbert Yauwanta · 2026
          </span>
        </div>
      </div>
    </section>
  )
}
