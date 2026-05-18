'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Hero() {
  return (
    <section
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 56px 72px',
        backgroundColor: '#080B12',
      }}
    >
      {/* Headshot — right half, fades into dark */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '52%', zIndex: 0 }}>
        <Image
          src={`${BASE}/photos/hero.png`}
          alt="Kenichi Yauwanta"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080B12 0%, #080B12 8%, transparent 50%, #080B12 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080B12 0%, transparent 45%)' }} />
      </div>

      {/* Soft amber glow behind name */}
      <div style={{
        position: 'absolute', bottom: '8%', left: '-5%',
        width: '48vw', height: '48vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.11), transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Name — line by line masked reveal */}
        {['Kenichi', 'Edbert', 'Yauwanta'].map((word, i) => (
          <div key={word} style={{ overflow: 'hidden', lineHeight: 0.9, marginBottom: i < 2 ? '2px' : '32px' }}>
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: 'easeOut' }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(52px, 9.5vw, 130px)',
                letterSpacing: '-0.04em',
                color: i === 2 ? 'transparent' : 'var(--color-text)',
                WebkitTextStroke: i === 2 ? '1.5px oklch(93% 0.006 70 / 0.55)' : 'none',
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.6vw, 20px)',
            fontWeight: 500,
            color: 'var(--color-muted)',
            marginBottom: '6px',
            letterSpacing: '-0.01em',
          }}
        >
          Marketing by trade.{' '}
          <span style={{ color: 'var(--color-text)' }}>Systems by obsession.</span>
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.68 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            marginBottom: '40px',
            opacity: 0.6,
          }}
        >
          Samarinda, Indonesia · Remote-first
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.76 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <a
            href="#community"
            style={{
              padding: '12px 26px', borderRadius: '40px',
              backgroundColor: 'var(--color-accent)', color: 'white',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            See the work ↓
          </a>
          <a
            href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`}
            download
            style={{
              padding: '12px 26px', borderRadius: '40px',
              border: '1px solid var(--color-border)', color: 'var(--color-muted)',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px',
              textDecoration: 'none', backgroundColor: 'transparent',
            }}
          >
            Resume ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
