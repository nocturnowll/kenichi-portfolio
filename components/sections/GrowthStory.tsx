'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export function GrowthStory() {
  return (
    <section id="career" style={{
      padding: '96px 48px',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <motion.p {...inView(0)} style={{
        fontFamily: 'var(--font-body)', fontSize: '12px',
        fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: 'var(--color-accent)',
        marginBottom: '64px',
      }}>Career</motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1200px' }}>
        {/* Left: The story */}
        <div>
          <motion.div {...inView(0.05)} style={{
            fontFamily: 'var(--font-body)', fontSize: '13px',
            color: 'var(--color-muted)', marginBottom: '16px',
            display: 'flex', gap: '24px',
          }}>
            <span>Confiction Labs · Singapore</span>
            <span>Jan 2022 – Jan 2025</span>
          </motion.div>

          <motion.h3 {...inView(0.1)} style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.05,
            letterSpacing: '-0.03em', color: 'var(--color-text)',
            marginBottom: '32px',
          }}>
            Community and creator partnerships
            for a gaming product that hit{' '}
            <span style={{ color: 'var(--color-accent)' }}>#1 in category</span>
            {' '}across 130 countries — in 72 hours.
          </motion.h3>

          <motion.div {...inView(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {[
              'Built the Discord from near-zero to 15,000+ members through tournaments, AMAs, giveaways, and creator collabs.',
              'Directed 7+ global creator partnerships across US, EU, and SEA — driving discovery in markets with no prior presence.',
              'Contributed to the $6.5M fundraising deck alongside the founders and C-suite. Community traction and retention data were part of the investor story.',
              'Represented the brand at PAX East, PAX West, Gamescom, and Token 2049.',
            ].map((text, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)', fontSize: '15px',
                lineHeight: 1.65, color: 'var(--color-muted)',
                paddingLeft: '16px',
                borderLeft: '2px solid var(--color-border)',
              }}>{text}</p>
            ))}
          </motion.div>

          <motion.div {...inView(0.2)}>
            <Link href="/work/confiction-labs" style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              fontWeight: 600, color: 'var(--color-accent)',
              textDecoration: 'none',
            }}>
              Full case study →
            </Link>
          </motion.div>
        </div>

        {/* Right: Metrics as statements */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingTop: '56px' }}>
          {[
            { value: '110,590', unit: 'downloads', context: 'across 130 countries, 72 hours' },
            { value: '#1', unit: 'in category', context: 'on launch day' },
            { value: '67%', unit: 'Day-1 retention', context: '33% Day-7 · peak 1,270 CCU' },
            { value: '15K+', unit: 'community members', context: 'Discord and social, sustained' },
          ].map(({ value, unit, context }, i) => (
            <motion.div key={value} {...inView(0.1 + i * 0.07)} style={{
              padding: '28px 0',
              borderBottom: '1px solid var(--color-border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(32px, 3.5vw, 44px)', letterSpacing: '-0.04em',
                  color: 'var(--color-text)',
                }}>{value}</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '15px',
                  fontWeight: 600, color: 'var(--color-accent)',
                }}>{unit}</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--color-muted)',
              }}>{context}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy line */}
      <motion.div {...inView(0.3)} style={{
        marginTop: '80px', paddingTop: '48px',
        borderTop: '1px solid var(--color-border)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-0.02em',
          color: 'var(--color-muted)',
        }}>
          &ldquo;marketing without community is just c
          <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase' }}>H</span>
          aos&rdquo;
        </p>
      </motion.div>
    </section>
  )
}
