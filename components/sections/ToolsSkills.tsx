'use client'

import { motion } from 'framer-motion'

const columns = [
  {
    label: 'growth.',
    items: [
      'Meta Ads / Google Ads',
      'Mixpanel',
      'Google Analytics',
      'ROAS · CAC · LTV',
      'Lifecycle Marketing',
      'Pre-launch Campaigns',
      'Conversion Optimisation',
    ],
  },
  {
    label: 'community.',
    items: [
      'Discord',
      'Telegram',
      'Hootsuite',
      'Creator Partnerships',
      'Engagement Loops',
      'Moderation Systems',
      'AMAs · Events',
      'Community Strategy',
    ],
  },
  {
    label: 'ops.',
    items: [
      'Notion',
      'Figma',
      'Mailchimp',
      'Brevo',
      'CRM Design',
      'Project Management',
      'Remote-first Async',
      'Process Design',
    ],
  },
  {
    label: 'built with.',
    items: [
      'Claude Code (Sonnet 4.6)',
      'GitHub Actions',
      'Next.js 16',
      'Supabase + pgvector',
      'Vercel',
      'Inngest',
      'Fonnte API',
      'Telegram Bot API',
    ],
  },
]

export function ToolsSkills() {
  return (
    <section
      id="tools"
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 clamp(24px, 6vw, 96px)',
        gap: '3rem',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* Eyebrow + Headline */}
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1rem',
          }}
        >
          06 · Tools &amp; Skills
        </motion.p>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 1,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            The stack.
          </motion.h2>
        </div>
      </div>

      {/* Four domain columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(24px, 4vw, 48px)',
        }}
      >
        {columns.map((col, colIndex) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 + colIndex * 0.08 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1rem',
              }}
            >
              {col.label}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {col.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--color-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Shipping stack footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.5 }}
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: 'var(--color-border)', whiteSpace: 'nowrap' }}>
            -- shipping with
          </span>
          <span style={{ flex: 1, borderBottom: '1px solid var(--color-border)', minWidth: '2rem' }} />
          <span>
            Next.js 16 · Supabase · Postgres + RLS · Claude API · Vercel / GitHub Actions
          </span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: 'var(--color-border)', whiteSpace: 'nowrap' }}>
            -- languages
          </span>
          <span style={{ flex: 1, borderBottom: '1px solid var(--color-border)', minWidth: '2rem' }} />
          <span>
            Bahasa Indonesia (native) · English (professional) · 中文 (conversational)
          </span>
        </div>
      </motion.div>
    </section>
  )
}
