'use client'
import { motion } from 'framer-motion'

export function Connect() {
  return (
    <section id="connect" className="py-28 px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-brand-orange)', fontFamily: 'var(--font-body)' }}>connect</span>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)' }} className="text-4xl md:text-5xl mt-4">
          Looking for a Growth Lead<br />or Founding GTM hire?
        </h2>
        <p style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>
          Based in Indonesia. Available for remote roles globally. Async-first.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="mailto:kenichiedbert@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors"
            style={{ backgroundColor: 'var(--color-brand-orange)', color: '#ffffff' }}
          >
            Email Kenny
          </a>
          <a
            href="https://linkedin.com/in/kenichiedberty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors"
            style={{ border: '1px solid var(--color-brand-muted)', color: 'var(--color-brand-text)' }}
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs pt-8" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>
          KE/Y · Kenichi Edbert Yauwanta · 2026
        </p>
      </motion.div>
    </section>
  )
}
