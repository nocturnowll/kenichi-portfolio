'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const logos = [
  { src: `${BASE}/photos/companies/confiction.png`,    alt: 'Confiction Labs' },
  { src: `${BASE}/photos/companies/bigmall.png`,       alt: 'BIG Mall' },
  { src: `${BASE}/photos/companies/contentmogul.png`,  alt: 'Content Mogul' },
  { src: `${BASE}/photos/companies/fugo.png`,          alt: 'FUGO Hotels' },
]

export function Community() {
  return (
    <section
      className="portfolio-section"
      id="community"
      style={{ backgroundColor: '#080B12', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
    >
      {/* Polaroids — true full-bleed background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src={`${BASE}/photos/polaroids.png`}
          alt="Community moments"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* Atmospheric overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,11,18,0.15) 0%, rgba(8,11,18,0.55) 50%, rgba(8,11,18,0.97) 85%, #080B12 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(8,11,18,0.65) 0%, transparent 55%)',
        }} />
      </div>

      {/* Content — floats over the photo */}
      <div style={{ position: 'relative', zIndex: 1, padding: '80px 64px 60px' }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px', letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)', marginBottom: '28px',
            opacity: 0.7,
          }}
        >
          Confiction Labs · 2022 – 2025
        </motion.p>

        {/* Headline */}
        <div style={{ overflow: 'hidden', marginBottom: '2px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 5.5vw, 80px)',
              letterSpacing: '-0.04em', lineHeight: 0.92,
              color: 'var(--color-text)',
            }}
          >
            The Community
          </motion.h2>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '48px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.07, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 5.5vw, 80px)',
              letterSpacing: '-0.04em', lineHeight: 0.92,
              color: 'var(--color-text)',
            }}
          >
            Architect.
          </motion.h2>
        </div>

        {/* The proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(44px, 6.5vw, 96px)',
            letterSpacing: '-0.04em', lineHeight: 0.88,
            color: 'var(--color-accent)',
            marginBottom: '10px',
          }}>
            110,590
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '15px',
            color: 'var(--color-muted)', letterSpacing: '-0.01em',
          }}>
            downloads — 72 hours — 130 countries — Steam #1
          </p>
        </motion.div>

        {/* Supporting stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          style={{
            display: 'flex', gap: '0',
            borderTop: '1px solid oklch(25% 0.008 265 / 0.6)',
            paddingTop: '24px', marginBottom: '36px',
            maxWidth: '520px',
          }}
        >
          {[
            { n: '15K+',  l: 'Discord members' },
            { n: '$6.5M', l: 'fundraise supported' },
            { n: '67%',   l: 'D1 retention' },
          ].map(({ n, l }, i) => (
            <div key={l} style={{
              flex: 1,
              paddingRight: i < 2 ? '24px' : 0,
              borderRight: i < 2 ? '1px solid oklch(22% 0.008 265 / 0.5)' : 'none',
              paddingLeft: i > 0 ? '24px' : 0,
            }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(20px, 2.2vw, 30px)',
                letterSpacing: '-0.03em', color: 'var(--color-text)',
                marginBottom: '3px',
              }}>{n}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '11px',
                color: 'var(--color-muted)',
              }}>{l}</p>
            </div>
          ))}
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'var(--color-muted)', letterSpacing: '0.16em',
            textTransform: 'uppercase', opacity: 0.45, flexShrink: 0,
          }}>Worked at</span>
          {logos.map(({ src, alt }) => (
            <div key={alt} style={{ position: 'relative', width: 64, height: 20, opacity: 0.35 }}>
              <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
