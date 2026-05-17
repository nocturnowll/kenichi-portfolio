'use client'
import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export function About() {
  return (
    <section style={{
      padding: '96px 48px',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        maxWidth: '1200px',
      }}>
        <motion.div {...inView(0)}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '12px',
            fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-accent)',
            marginBottom: '24px',
          }}>About</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.95,
            letterSpacing: '-0.04em', color: 'var(--color-text)',
            marginBottom: '32px',
          }}>
            halo!
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              "I've spent 5+ years building the community and partnership engines that make products grow — and lately, the AI systems that run the businesses behind them.",
              "At Confiction Labs, I ran community and creator partnerships for RIFTSTORM's global alpha playtest. Those two functions drove the numbers: 110K+ downloads, 67% Day-1 retention, #1 in category.",
              "Since 2025, I've been running a Pilates franchise in Samarinda from scratch — hitting Rp 120M/month ($7,500 USD) in 90 days. When the tools I needed didn't exist, I built them with Claude Code.",
              "Based in Indonesia. Async-first. Available globally."
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)', fontSize: '16px',
                lineHeight: 1.7, color: i === 3 ? 'var(--color-accent)' : 'var(--color-muted)',
                fontWeight: i === 3 ? 500 : 400,
              }}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div {...inView(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingTop: '60px' }}>
          {[
            { num: '5+', label: 'years in community & growth' },
            { num: '15K+', label: 'Discord members built from near-zero' },
            { num: '7+', label: 'global creator partnerships across US, EU, SEA' },
            { num: '$6.5M', label: 'funding round contributed to' },
            { num: 'Rp 120M', label: 'monthly revenue in 90 days from zero' },
            { num: '5', label: 'AI-powered systems built solo' },
          ].map(({ num, label }, i) => (
            <motion.div
              key={num}
              {...inView(0.15 + i * 0.06)}
              style={{
                display: 'flex', alignItems: 'baseline', gap: '24px',
                padding: '20px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '28px', letterSpacing: '-0.03em',
                color: 'var(--color-accent)', minWidth: '90px',
              }}>{num}</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--color-muted)', lineHeight: 1.5,
              }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
