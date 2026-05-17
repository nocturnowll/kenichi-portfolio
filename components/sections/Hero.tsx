'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={`${BASE}/photos/hero.png`}
          alt="Kenichi Yauwanta"
          fill
          className="object-cover object-top opacity-25"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--color-brand-bg) 40%, var(--color-brand-bg)/70 70%, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)', lineHeight: '0.95' }} className="text-5xl md:text-7xl lg:text-8xl mb-6">
            110,000 users.<br />
            130 countries.<br />
            <span style={{ color: 'var(--color-brand-orange)' }}>72 hours.</span>
          </p>
        </motion.div>

        <motion.p
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-muted)' }}
          className="text-xl md:text-2xl italic mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
        >
          Community and partnerships. The two things that made it happen.
        </motion.p>

        <motion.p
          style={{ color: 'var(--color-brand-muted)' }}
          className="text-sm mb-10 tracking-wide"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
        >
          Kenichi Yauwanta · Growth operator & builder · Open to remote roles globally
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button href="#career" variant="primary">See my work ↓</Button>
          <Button href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`} variant="ghost" download>
            Download resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
