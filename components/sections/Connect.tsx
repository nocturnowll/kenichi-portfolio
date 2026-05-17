'use client'
import { motion } from 'framer-motion'

export function Connect() {
  return (
    <section id="connect" style={{ padding: '96px 48px 80px' }}>
      <div style={{ maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '12px',
            fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-accent)',
            marginBottom: '24px',
          }}>Connect</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end' }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 60px)', letterSpacing: '-0.04em',
                color: 'var(--color-text)', lineHeight: 1.0,
                marginBottom: '32px',
              }}>
                Looking for a Growth Lead or Founding GTM hire?
              </h2>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="mailto:kenichiedbert@gmail.com" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '8px',
                  backgroundColor: 'var(--color-accent)', color: 'white',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px',
                  textDecoration: 'none',
                }}>
                  Email Kenny
                </a>
                <a href="https://linkedin.com/in/kenichiedberty" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '8px',
                  border: '1.5px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px',
                  textDecoration: 'none',
                }}>
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                ['Location', 'Samarinda, Indonesia (WIB, UTC+8)'],
                ['Availability', 'Remote-only · async-first'],
                ['Floor', '$5,000/month USD'],
                ['Targets', 'Growth Lead · Founding Growth · Head of Growth'],
                ['Stage', 'Seed to Series B preferred'],
              ].map(([label, value]) => (
                <div key={label} style={{
                  display: 'flex', gap: '24px', alignItems: 'baseline',
                  paddingBottom: '16px', borderBottom: '1px solid var(--color-border)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '12px',
                    fontWeight: 600, color: 'var(--color-muted)',
                    minWidth: '100px', letterSpacing: '0.02em',
                  }}>{label}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '14px',
                    color: 'var(--color-text)',
                  }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div style={{
          marginTop: '80px', paddingTop: '32px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '20px', letterSpacing: '-0.03em', color: 'var(--color-text)',
          }}>KE<span style={{ color: 'var(--color-accent)' }}>/</span>Y</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-muted)' }}>
            Kenichi Edbert Yauwanta · 2026
          </span>
        </div>
      </div>
    </section>
  )
}
