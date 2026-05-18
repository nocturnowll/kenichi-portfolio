'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Operator() {
  return (
    <section
      className="portfolio-section"
      id="the-work"
      style={{ backgroundColor: '#080B12', display: 'flex', alignItems: 'stretch' }}
    >
      {/* Left — the number story */}
      <div style={{
        flex: '0 0 52%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '100px 64px 80px',
        position: 'relative', zIndex: 1,
      }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px', letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)', marginBottom: '36px',
            opacity: 0.6,
          }}
        >
          Agape Movement · 2025 – Present
        </motion.p>

        {/* The headline number */}
        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <motion.p
            initial={{ y: '106%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(56px, 8.5vw, 120px)',
              letterSpacing: '-0.045em', lineHeight: 0.88,
              color: 'var(--color-accent)',
            }}
          >
            Rp 120M
          </motion.p>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
          <motion.p
            initial={{ y: '106%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.08, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(28px, 3.8vw, 52px)',
              letterSpacing: '-0.04em', lineHeight: 1.0,
              color: 'var(--color-text)',
            }}
          >
            per month.
            <br />
            90 days from zero.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: '15px',
            lineHeight: 1.65, color: 'var(--color-muted)',
            maxWidth: '360px', marginBottom: '36px',
          }}
        >
          Operating partner and marketing lead for a Pilates franchise in Samarinda.
          Built the GTM, the community, and the software it runs on — from zero.
        </motion.p>

        {/* Micro-stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '32px' }}
        >
          {[
            { n: 'Rp 50M+', l: 'pre-launch' },
            { n: '384',     l: 'members' },
            { n: '3',       l: 'AI systems built' },
          ].map(({ n, l }) => (
            <div key={l}>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '22px', letterSpacing: '-0.03em',
                color: 'var(--color-text)', marginBottom: '2px',
              }}>{n}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '11px',
                color: 'var(--color-muted)',
              }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — studio photo, true full-bleed to edge */}
      <div style={{ flex: '0 0 48%', position: 'relative' }}>
        <Image
          src={`${BASE}/photos/work-7.png`}
          alt="Agape Movement Samarinda"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Blend into left panel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #080B12 0%, transparent 22%)',
        }} />
        {/* Top fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, #080B12 0%, transparent 18%)',
        }} />
      </div>
    </section>
  )
}
