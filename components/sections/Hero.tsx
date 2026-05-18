'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Hero() {
  return (
    <section className="snap-section" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 56px 72px', backgroundColor: '#080B12' }}>
      {/* Headshot — right side, fades into dark */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', zIndex: 0 }}>
        <Image src={`${BASE}/photos/hero.png`} alt="Kenichi Yauwanta" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080B12 0%, #080B12 10%, transparent 55%, #080B12 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080B12 0%, transparent 40%)' }} />
      </div>

      {/* Soft amber glow — behind name */}
      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.12), transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '24px' }}>
          Growth · Community · Builder — Open to Remote
        </motion.p>

        {/* Name — line by line masked reveal */}
        {['Kenichi', 'Edbert', 'Yauwanta'].map((word, i) => (
          <div key={word} style={{ overflow: 'hidden', lineHeight: 0.9, marginBottom: i < 2 ? '2px' : '48px' }}>
            <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.13 }} style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(56px, 10vw, 136px)', letterSpacing: '-0.04em', color: i === 2 ? 'transparent' : 'var(--color-text)', WebkitTextStroke: i === 2 ? '1.5px var(--color-text)' : 'none' }}>
              {word}
            </motion.span>
          </div>
        ))}

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.68 }} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="#community" style={{ padding: '13px 28px', borderRadius: '40px', backgroundColor: 'var(--color-accent)', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>See the work ↓</a>
          <a href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`} download style={{ padding: '13px 28px', borderRadius: '40px', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', backgroundColor: 'transparent' }}>Resume ↓</a>
        </motion.div>
      </div>
    </section>
  )
}
