'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const logos = [
  { src: `${BASE}/photos/companies/confiction.png`, alt: 'Confiction Labs' },
  { src: `${BASE}/photos/companies/bigmall.png`,    alt: 'BIG Mall' },
  { src: `${BASE}/photos/companies/contentmogul.png`, alt: 'Content Mogul' },
  { src: `${BASE}/photos/companies/fugo.png`,       alt: 'FUGO Hotels' },
]

export function Community() {
  return (
    <section
      className="snap-section"
      id="community"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px 56px 52px',
        backgroundColor: '#080B12',
      }}
    >
      {/* Polaroids — dominant right visual */}
      <div style={{
        position: 'absolute', right: '-3%', top: '5%',
        width: '58%', height: '90%', zIndex: 0,
      }}>
        <Image
          src={`${BASE}/photos/polaroids.png`}
          alt="Community moments"
          fill
          style={{ objectFit: 'contain', objectPosition: 'right center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080B12 0%, transparent 25%, transparent 72%, #080B12 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #080B12 0%, transparent 12%, transparent 72%, #080B12 100%)' }} />
      </div>

      {/* Left — the story */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '480px' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '24px',
          }}
        >
          Confiction Labs · 2022–2025
        </motion.p>

        {/* Headline */}
        <div style={{ overflow: 'hidden', marginBottom: '6px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--color-text)',
            }}
          >
            The Community
          </motion.h2>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.06 }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--color-accent)',
            }}
          >
            Architect.
          </motion.h2>
        </div>

        {/* The hero stat — proof */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          style={{ marginBottom: '28px' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 76px)',
            letterSpacing: '-0.04em', lineHeight: 0.9,
            color: 'var(--color-text)', marginBottom: '6px',
          }}>
            110,590
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '14px',
            color: 'var(--color-muted)', lineHeight: 1.5,
          }}>
            downloads in 72 hours — 130 countries — Steam #1
          </p>
        </motion.div>

        {/* Supporting stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            display: 'flex', gap: '0',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '20px',
          }}
        >
          {[
            { n: '15K+',  l: 'Discord members' },
            { n: '$6.5M', l: 'fundraise' },
            { n: '67%',   l: 'D1 retention' },
          ].map(({ n, l }, i) => (
            <div
              key={l}
              style={{
                flex: 1,
                paddingRight: i < 2 ? '20px' : 0,
                borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                paddingLeft: i > 0 ? '20px' : 0,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(18px, 2vw, 26px)',
                letterSpacing: '-0.03em', color: 'var(--color-text)',
                marginBottom: '3px',
              }}>{n}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '11px',
                color: 'var(--color-muted)', lineHeight: 1.4,
              }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Company logos — bottom */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          position: 'relative', zIndex: 1,
          borderTop: '1px solid oklch(16% 0.008 265)',
          paddingTop: '24px',
          display: 'flex', alignItems: 'center', gap: '36px', flexWrap: 'wrap',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '10px',
          color: 'var(--color-muted)', letterSpacing: '0.16em',
          textTransform: 'uppercase', flexShrink: 0, opacity: 0.5,
        }}>
          Experience at
        </p>
        {logos.map(({ src, alt }) => (
          <div key={alt} style={{ position: 'relative', width: 72, height: 24, opacity: 0.45 }}>
            <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
