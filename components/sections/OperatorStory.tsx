'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

export function OperatorStory() {
  return (
    <section className="snap-section" id="the-work" style={{
      display: 'flex', alignItems: 'center', padding: '100px 48px 80px',
    }}>
      {/* Glow top-right */}
      <div aria-hidden style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '45vw', height: '45vw', borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.10), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1300px', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div {...inV(0)} style={{ marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--color-accent)', marginBottom: '16px',
          }}>Chapter Three · 2025 — Present</p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '-0.03em',
                color: 'var(--color-text)', lineHeight: 1.05, maxWidth: '700px',
              }}
            >The Builder</motion.h2>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Left: Agape full card */}
          <motion.div {...inV(0.1)} style={{
            backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: '16px', padding: '40px',
            display: 'flex', flexDirection: 'column', gap: '20px',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: '40px',
                  backgroundColor: 'oklch(60% 0.155 42 / 0.15)', color: 'var(--color-accent)',
                }}>Operations</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)' }}>Mar 2025 – Present</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '12px' }}>
                Agape Movement Samarinda
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(20px, 2vw, 28px)', letterSpacing: '-0.03em',
                color: 'var(--color-text)', lineHeight: 1.15,
              }}>Rp 120M/month in 90 days from zero.</h3>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.7, color: 'var(--color-muted)' }}>
              Pre-launch founders campaign: Rp 50M before opening day. 384 members. Sold-out week one.
              Built bespoke AI CRM and booking system that runs the full operation.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
              backgroundColor: 'var(--color-border)', borderRadius: '10px', overflow: 'hidden',
            }}>
              {[['Rp 300M+', '90-day revenue'], ['384', 'members'], ['Rp 50M+', 'pre-launch']].map(([val, lab]) => (
                <div key={lab} style={{ backgroundColor: 'var(--color-surface-2)', padding: '16px 14px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.03em', color: 'var(--color-accent)', marginBottom: '2px' }}>{val}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.4 }}>{lab}</p>
                </div>
              ))}
            </div>

            <Link href="/work/agape-movement" style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
              color: 'var(--color-accent)', textDecoration: 'none', marginTop: 'auto',
            }}>
              Read case study →
            </Link>
          </motion.div>

          {/* Right: story text + IchiEcha as supporting mention */}
          <motion.div {...inV(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                "Joined as operating partner and marketing lead for a new Pilates franchise in Samarinda. Built the marketing system from zero — pre-launch campaign, community GTM, studio ops.",
                "Same instinct I applied at Confiction Labs. Different room. No playbook. Same outcome: something that actually runs.",
              ].map((p, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-body)', fontSize: '16px',
                  lineHeight: 1.75, color: 'var(--color-muted)',
                }}>{p}</p>
              ))}
            </div>

            {/* IchiEcha as a supporting beat, not a case study */}
            <motion.div {...inV(0.25)} style={{
              padding: '28px 32px',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              backgroundColor: 'oklch(14% 0.008 265)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: '12px',
              }}>Also —</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px',
                lineHeight: 1.7, color: 'var(--color-muted)',
              }}>
                Applied the same method at a co-founded F&B brand: launched across three channels,
                built the sales and production tracking system that runs it daily.
                Different industry. Same builder instinct.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
