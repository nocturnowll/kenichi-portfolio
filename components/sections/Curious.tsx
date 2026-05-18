'use client';

import { motion } from 'framer-motion';

const roles = [
  {
    company: 'BIG Mall',
    location: 'Samarinda',
    title: 'Marketing Strategist',
    period: 'Dec 2020 - Jul 2022',
    outcome: '15% YoY footfall increase. Events at scale.',
  },
  {
    company: 'RevoU',
    location: 'Remote',
    title: 'Full Stack Digital Marketing',
    period: '2021',
    outcome: 'Performance marketing. Real budgets. Real results.',
  },
  {
    company: 'Content Mogul',
    location: 'Singapore',
    title: 'Media Buyer',
    period: 'May - Jul 2021',
    outcome: 'Meta campaigns for international DTC brands.',
  },
  {
    company: 'FUGO Hotels',
    location: 'Samarinda',
    title: 'IT Coordinator',
    period: 'Feb - Jun 2022',
    outcome: 'Hotel tech stack. Channel manager. Booking engine.',
  },
];

export function Curious() {
  return (
    <section
      id="curious"
      className="snap-section"
      style={{
        background: 'var(--color-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Ambient glow - bottom left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '55%',
          height: '55%',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, oklch(64% 0.155 42 / 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
            }}
          >
            02 &middot; Chapter One
          </motion.p>

          {/* Headline - masked reveal */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                lineHeight: 1.05,
                color: 'var(--color-text)',
                whiteSpace: 'pre-line',
              }}
            >
              {'Curious\n& Hungry'}
            </motion.h2>
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              lineHeight: 1.7,
              color: 'var(--color-muted)',
              maxWidth: '42ch',
            }}
          >
            I&apos;ve never stayed in one lane. BIG Mall taught me campaigns.
            RevoU taught me performance. Content Mogul taught me international
            clients. FUGO taught me systems. I collect skills. Other people
            collect titles.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.4 }}
            style={{ display: 'flex', gap: '2.5rem' }}
          >
            {[
              { value: '4', label: 'Roles in 20 months' },
              { value: '∞', label: 'Things tried' },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    color: 'var(--color-accent)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN - 2x2 role cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {/* Company + location */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--color-accent)',
                  }}
                >
                  {role.company}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {role.location}
                </span>
              </div>

              {/* Role title */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: 'var(--color-text)',
                  lineHeight: 1.3,
                }}
              >
                {role.title}
              </p>

              {/* Period */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.67rem',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.05em',
                }}
              >
                {role.period}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'var(--color-border)',
                  margin: '0.25rem 0',
                }}
              />

              {/* Outcome */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.5,
                }}
              >
                {role.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
