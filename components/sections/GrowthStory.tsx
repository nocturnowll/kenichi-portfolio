'use client'
import { motion } from 'framer-motion'
import { CollageGrid } from '@/components/collage/CollageGrid'
import { SectionLabel } from '@/components/ui/SectionLabel'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const photos = [
  { src: `${BASE}/photos/work-1.png`, alt: 'Conference', rotation: -4, width: 270, x: 0, y: 0 },
  { src: `${BASE}/photos/work-2.png`, alt: 'Community event', rotation: 3, width: 230, x: 32, y: 90 },
  { src: `${BASE}/photos/work-3.png`, alt: 'Brand presence', rotation: -2, width: 200, x: 62, y: 20 },
  { src: `${BASE}/photos/work-4.png`, alt: 'Team', rotation: 4, width: 180, x: 14, y: 260 },
]

const metrics = [
  { value: '110k+', label: 'downloads at launch' },
  { value: '130', label: 'countries in 72 hours' },
  { value: '$6.5M', label: 'fundraising round' },
  { value: '67%', label: 'Day 1 retention' },
]

export function GrowthStory() {
  return (
    <section id="career" className="py-24 px-6 md:px-12" style={{ backgroundColor: 'var(--color-brand-surface)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel>career</SectionLabel>
        <div className="mt-8 grid md:grid-cols-2 gap-16 items-start">
          <CollageGrid photos={photos} height={520} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm mb-2" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>
                Growth &amp; Marketing Lead · Confiction Labs · Singapore<br />
                Jan 2022 - Jan 2025
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)', lineHeight: '1.15' }} className="text-4xl md:text-5xl">
                Ran community and partnerships for a gaming product that hit{' '}
                <span style={{ color: 'var(--color-brand-orange)' }}>#1 in category</span>{' '}
                across 130 countries — in 72 hours.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="border p-4 rounded-sm" style={{ borderColor: 'var(--color-brand-surface)', backgroundColor: 'var(--color-brand-bg)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-orange)' }} className="text-3xl">{m.value}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>{m.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 pl-4" style={{ borderColor: 'var(--color-brand-orange)' }}>
              <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-muted)' }} className="text-xl italic">
                &ldquo;marketing without community is just c
                <span style={{ color: 'var(--color-brand-orange)', fontWeight: 700, fontStyle: 'normal', textTransform: 'uppercase' }}>H</span>
                aos&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
