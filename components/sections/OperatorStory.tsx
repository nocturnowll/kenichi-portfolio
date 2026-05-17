'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

const cards = [
  {
    slug: 'agape-movement',
    role: 'Operating Partner & Marketing Lead',
    company: 'Agape Movement Samarinda',
    period: 'Mar 2025 – Present',
    headline: 'Zero to Rp 120M/month in 90 days.',
    body: 'Pre-launch campaign: Rp 50M before opening day. 384 members. Sold-out classes in week one. Built the CRM and booking infrastructure that runs it.',
    photo: `${BASE}/photos/companies/agape.png`,
    photoAlt: 'Agape Movement',
    rotation: -2,
    bg: true,
  },
  {
    slug: 'ichiecha',
    role: 'Co-founder support',
    company: 'IchiEcha',
    period: '2025 – Present',
    headline: 'F&B brand launched from scratch.',
    body: 'Dubai Chewy Cookies across walk-in, online, and GrabFood. Built the sales and loyalty tracking system that runs it daily.',
    photo: `${BASE}/photos/companies/contentmogul.png`,
    photoAlt: 'IchiEcha',
    rotation: 3,
    bg: false,
  },
]

export function OperatorStory() {
  return (
    <section id="the-work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>the work</SectionLabel>
        <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)' }} className="text-3xl md:text-4xl mt-4 mb-16 max-w-2xl">
          Growth isn&apos;t just startup-land. It translates to real businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-sm overflow-hidden"
              style={{ backgroundColor: 'var(--color-brand-surface)' }}
            >
              <div className="relative h-48 flex items-center justify-center p-8" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
                <div className="relative w-40 h-16">
                  <Image src={card.photo} alt={card.photoAlt} fill className="object-contain opacity-80" />
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs mb-1" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>
                  {card.role} · {card.period}
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>{card.company}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)' }} className="text-2xl mb-3">{card.headline}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>{card.body}</p>
                <Link href={`/work/${card.slug}`} style={{ color: 'var(--color-brand-orange)' }} className="text-sm hover:underline">
                  Read case study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
