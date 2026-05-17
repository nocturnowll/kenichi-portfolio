'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

const metrics = [
  { value: '110,590', unit: 'downloads', sub: '130 countries · 72 hours' },
  { value: '#1', unit: 'in category', sub: 'on launch day' },
  { value: '67%', unit: 'D1 retention', sub: '33% D7 · peak 1,270 CCU' },
  { value: '15K+', unit: 'community', sub: 'Discord + social, sustained' },
]

export function GrowthStory() {
  return (
    <section className="snap-section" id="career" style={{
      display: 'flex', alignItems: 'center', padding: '100px 48px 80px',
      backgroundColor: 'var(--color-surface)',
    }}>
      <div style={{ maxWidth: '1300px', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.p {...inV(0)} style={{
          fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--color-accent)', marginBottom: '48px',
        }}>Career — Confiction Labs · Singapore · 2022–2025</motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
              <motion.h2
                initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3.8vw, 52px)', lineHeight: 1.05,
                  letterSpacing: '-0.03em', color: 'var(--color-text)',
                }}
              >
                Community and creator partnerships for a gaming product that hit{' '}
                <span style={{ color: 'var(--color-accent)' }}>#1 in category</span>
                {' '}across 130 countries — in 72 hours.
              </motion.h2>
            </div>

            {[
              'Built Discord from near-zero to 15,000+ members. Tournaments, AMAs, giveaways, creator collabs.',
              'Directed 7+ global creator partnerships across US, EU, SEA — driving discovery in markets with no prior presence.',
              'Contributed to the $6.5M fundraising deck alongside founders and C-suite. Community metrics were part of the story.',
              'Conference presence: PAX East, PAX West, Gamescom, Token 2049.',
            ].map((t, i) => (
              <motion.p key={i} {...inV(0.1 + i * 0.07)} style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7,
                color: 'var(--color-muted)', marginBottom: '14px',
                paddingLeft: '16px', borderLeft: '2px solid var(--color-border)',
              }}>{t}</motion.p>
            ))}

            <motion.div {...inV(0.45)} style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 'clamp(18px, 2vw, 26px)', letterSpacing: '-0.02em',
                color: 'var(--color-muted)', marginBottom: '20px',
              }}>&ldquo;marketing without community is just c<span style={{ color: 'var(--color-accent)', textTransform: 'uppercase' }}>H</span>aos&rdquo;</p>
              <Link href="/work/confiction-labs" style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                color: 'var(--color-accent)', textDecoration: 'none',
              }}>Full case study →</Link>
            </motion.div>
          </div>

          <div>
            {metrics.map(({ value, unit, sub }, i) => (
              <motion.div key={value} {...inV(0.08 + i * 0.09)} style={{
                padding: '28px 0', borderBottom: '1px solid var(--color-border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '4px' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-0.04em',
                    color: 'var(--color-text)',
                  }}>{value}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600,
                    color: 'var(--color-accent)',
                  }}>{unit}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-muted)' }}>{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
