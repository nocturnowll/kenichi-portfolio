'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Hero() {
  return (
    <section
      className="portfolio-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 64px 80px',
        backgroundColor: '#080B12',
      }}
    >
      {/* Headshot — true full-bleed background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src={`${BASE}/photos/hero.png`}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        {/* Left gradient — protects text */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, #080B12 0%, #080B12 38%, oklch(9% 0.006 265 / 0.75) 62%, transparent 100%)',
        }} />
        {/* Bottom gradient — grounds the layout */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #080B12 0%, #080B12 18%, transparent 52%)',
        }} />
      </div>

      {/* Ambient glow — behind name */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '5%', left: '-8%',
        width: '55vw', height: '55vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.09), transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Name — stacked, large */}
        {[
          { word: 'Kenichi',  ghost: false },
          { word: 'Edbert',   ghost: false },
          { word: 'Yauwanta', ghost: true  },
        ].map(({ word, ghost }, i) => (
          <div
            key={word}
            style={{ overflow: 'hidden', lineHeight: 0.88, marginBottom: i < 2 ? '3px' : '36px' }}
          >
            <motion.span
              initial={{ y: '112%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.08 + i * 0.13, ease: 'easeOut' }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(60px, 10.5vw, 148px)',
                letterSpacing: '-0.045em',
                color: ghost ? 'transparent' : 'var(--color-text)',
                WebkitTextStroke: ghost ? '1.5px oklch(93% 0.006 70 / 0.45)' : 'none',
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(16px, 1.5vw, 22px)',
            letterSpacing: '-0.01em',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          <span style={{ color: 'var(--color-muted)' }}>Marketing by trade. </span>
          <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Systems by obsession.</span>
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            letterSpacing: '0.12em',
            marginBottom: '44px',
            opacity: 0.55,
          }}
        >
          Samarinda, Indonesia · Remote-first
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82, ease: 'easeOut' }}
        >
          <a
            href="#community"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px', borderRadius: '40px',
              backgroundColor: 'var(--color-accent)', color: '#080B12',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px',
              textDecoration: 'none', letterSpacing: '-0.01em',
            }}
          >
            See the work
            <span style={{ display: 'inline-block' }}>↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
