'use client'
import { motion } from 'framer-motion'
import { CollageGrid } from '@/components/collage/CollageGrid'
import { SectionLabel } from '@/components/ui/SectionLabel'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const photos = [
  { src: `${BASE}/photos/halo.jpg`, alt: 'Kenichi', rotation: -3, width: 220, x: 0, y: 0 },
  { src: `${BASE}/photos/polaroids.png`, alt: 'Moments', rotation: 2, width: 200, x: 38, y: 60 },
  { src: `${BASE}/photos/about-default.png`, alt: 'Kenny', rotation: -1, width: 180, x: 68, y: 15 },
]

export function About() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>about</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-orange)' }} className="text-6xl md:text-7xl mt-4 mb-8">
            halo!
          </h2>
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>
            <p>
              I&apos;m Kenny. I&apos;ve spent 5+ years building the community and
              partnership engines that make products grow — and lately, the
              AI systems that run the businesses behind them.
            </p>
            <p>
              At Confiction Labs, I ran community and creator partnerships for{' '}
              <span style={{ color: 'var(--color-brand-text)' }}>RIFTSTORM&apos;s global alpha launch</span>.
              Those two functions drove the numbers: 110K+ downloads, 130 countries,{' '}
              <span style={{ color: 'var(--color-brand-text)' }}>72 hours</span>.
              I also contributed to the{' '}
              <span style={{ color: 'var(--color-brand-text)' }}>$6.5M fundraising deck</span>{' '}
              alongside the founding team.
            </p>
            <p>
              Since 2025, I&apos;ve been operating a Pilates franchise in Samarinda
              from zero to <span style={{ color: 'var(--color-brand-text)' }}>Rp 120M/month</span>.
              When the tools didn&apos;t exist, I built them.
            </p>
            <p className="text-sm">
              Based in Indonesia. Work async-first. Available globally.
            </p>
          </div>
        </motion.div>

        <div className="hidden md:block">
          <CollageGrid photos={photos} height={420} />
        </div>
      </div>
    </section>
  )
}
