'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const logos = [
  { src: `${BASE}/photos/companies/confiction.png`, alt: 'Confiction Labs', label: '2022–2025' },
  { src: `${BASE}/photos/companies/bigmall.png`, alt: 'BIG Mall', label: '2020–2022' },
  { src: `${BASE}/photos/companies/contentmogul.png`, alt: 'Content Mogul', label: '2021' },
  { src: `${BASE}/photos/companies/fugo.png`, alt: 'FUGO Hotels', label: '2022' },
]

export function Community() {
  return (
    <section className="snap-section" id="community" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '100px 56px 56px', backgroundColor: '#080B12' }}>

      {/* Polaroids — dominant right-side visual */}
      <div style={{ position: 'absolute', right: '-2%', top: '8%', width: '56%', height: '84%', zIndex: 0 }}>
        <Image src={`${BASE}/photos/polaroids.png`} alt="Community moments" fill style={{ objectFit: 'contain', objectPosition: 'right center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080B12 0%, transparent 30%, transparent 70%, #080B12 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #080B12 100%)' }} />
      </div>

      {/* Content — left side */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '540px' }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '28px' }}>
          Community & Growth · 2022–2025
        </motion.p>

        <div style={{ overflow: 'hidden', marginBottom: '10px' }}>
          <motion.h2 initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '-0.04em', lineHeight: 0.95, color: 'var(--color-text)' }}>
            The Community<br />Architect.
          </motion.h2>
        </div>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7, color: 'var(--color-muted)', maxWidth: '400px', marginBottom: '40px' }}>
          Three years building something people actually showed up for.
          The community didn&apos;t grow because of a strategy deck.
          It grew because someone stayed in the room.
        </motion.p>

        {/* Big numbers inline */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          {[['15,000+', 'members'], ['130', 'countries'], ['#1', 'Steam · 72h']].map(([n, l]) => (
            <div key={l}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.04em', color: 'var(--color-accent)', lineHeight: 1 }}>{n}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginTop: '4px' }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Company logos row — bottom */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--color-border)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', flexShrink: 0 }}>Experience at</p>
        {logos.map(({ src, alt, label }) => (
          <div key={alt} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.6 }}>
            <div style={{ position: 'relative', width: 80, height: 28 }}>
              <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-muted)' }}>{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
