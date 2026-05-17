'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const projects = [
  {
    slug: 'agape-movement',
    tag: 'Operations',
    company: 'Agape Movement Samarinda',
    period: 'Mar 2025 – Present',
    role: 'Operating Partner & Marketing Lead',
    headline: 'Rp 120M/month in 90 days from zero.',
    body: 'Pre-launch campaign: Rp 50M before opening day. 384 members. Sold-out classes in week one. Built the AI-powered CRM and booking system that runs the operation.',
    stats: [
      ['Rp 300M+', 'revenue in 90 days'],
      ['384', 'registered members'],
      ['Rp 50M+', 'pre-launch campaign'],
    ],
  },
  {
    slug: 'ichiecha',
    tag: 'F&B Launch',
    company: 'IchiEcha',
    period: '2025 – Present',
    role: 'Co-founder support',
    headline: 'Dubai Chewy Cookies. Three channels. 77% gross margin.',
    body: 'Channel strategy, GrabFood onboarding, pricing architecture. Built ichiecha-ops — real-time sales and production tracking that reports daily by channel.',
    stats: [
      ['3', 'distribution channels'],
      ['77%', 'gross margin on hero SKU'],
      ['0', 'off-the-shelf tools that fit'],
    ],
  },
]

export function OperatorStory() {
  return (
    <section id="the-work" style={{
      padding: '96px 48px',
      borderBottom: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-surface)',
    }}>
      <motion.div {...inView(0)} style={{ marginBottom: '64px' }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '12px',
          fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--color-accent)',
          marginBottom: '16px',
        }}>The Work</p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.03em',
          color: 'var(--color-text)', maxWidth: '600px', lineHeight: 1.1,
        }}>
          Growth translates to real businesses, not just startups.
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1200px' }}>
        {projects.map((p, i) => (
          <motion.div key={p.slug} {...inView(0.1 + i * 0.1)} style={{
            backgroundColor: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '40px',
            display: 'flex', flexDirection: 'column', gap: '24px',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px',
                  fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: '4px',
                  backgroundColor: 'var(--color-accent-tint)',
                  color: 'var(--color-accent)',
                }}>{p.tag}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-muted)' }}>{p.period}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-muted)', marginBottom: '12px' }}>
                {p.role} · {p.company}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(20px, 2vw, 26px)', letterSpacing: '-0.03em',
                color: 'var(--color-text)', lineHeight: 1.15,
              }}>{p.headline}</h3>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              lineHeight: 1.7, color: 'var(--color-muted)',
            }}>{p.body}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
              {p.stats.map(([val, lab]) => (
                <div key={lab} style={{ backgroundColor: 'var(--color-surface)', padding: '16px 12px' }}>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: '22px', letterSpacing: '-0.03em',
                    color: 'var(--color-accent)', marginBottom: '2px',
                  }}>{val}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.4 }}>{lab}</p>
                </div>
              ))}
            </div>

            <Link href={`/work/${p.slug}`} style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              fontWeight: 600, color: 'var(--color-accent)',
              textDecoration: 'none', marginTop: 'auto',
            }}>
              Read case study →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
