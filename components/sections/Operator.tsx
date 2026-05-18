'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Operator() {
  return (
    <section className="snap-section" id="the-work" style={{ display: 'flex', alignItems: 'stretch', backgroundColor: '#080B12', overflow: 'hidden' }}>
      {/* Left — the number */}
      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 56px', position: 'relative', zIndex: 1 }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '24px' }}>
          The Builder · 2025 — Present
        </motion.p>

        <div style={{ overflow: 'hidden', marginBottom: '24px' }}>
          <motion.p initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(52px, 7vw, 100px)', letterSpacing: '-0.04em', lineHeight: 0.9, color: 'var(--color-accent)' }}>
            Rp 120M
          </motion.p>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '36px' }}>
          <motion.p initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.1 }} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--color-text)' }}>
            per month.<br />90 days from zero.
          </motion.p>
        </div>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7, color: 'var(--color-muted)', maxWidth: '380px', marginBottom: '32px' }}>
          Operating partner and marketing lead for a Pilates franchise in Samarinda.
          Built the GTM, the community, and the software it runs on — from scratch.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }} style={{ display: 'flex', gap: '32px' }}>
          {[['Rp 50M+', 'pre-launch campaign'], ['384', 'members'], ['3', 'AI systems built']].map(([n, l]) => (
            <div key={l}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', letterSpacing: '-0.03em', color: 'var(--color-text)' }}>{n}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-muted)', marginTop: '2px' }}>{l}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} style={{ marginTop: '36px' }}>
          <Link href="/work/agape-movement" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none' }}>Full case study →</Link>
        </motion.div>
      </div>

      {/* Right — studio photo */}
      <div style={{ flex: '0 0 50%', position: 'relative' }}>
        <Image src={`${BASE}/photos/work-7.png`} alt="Agape Movement studio" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080B12 0%, transparent 30%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #080B12 100%)' }} />
        <div style={{ position: 'absolute', bottom: '36px', right: '36px', zIndex: 1 }}>
          <div style={{ position: 'relative', width: 100, height: 36 }}>
            <Image src={`${BASE}/photos/companies/agape.png`} alt="Agape Movement" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
