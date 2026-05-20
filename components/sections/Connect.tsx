'use client'
import { motion } from 'framer-motion'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Connect() {
  return (
    <section
      className="portfolio-section min-h-screen py-24 px-6 md:px-16 flex flex-col justify-center bg-[#080B12] relative overflow-hidden"
      id="connect"
    >
      {/* Soft glow */}
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(ellipse, oklch(60% 0.155 42 / 0.08), transparent 70%)',
      }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-8 opacity-50 font-bold"
        >
          Open to opportunities
        </motion.p>

        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: 'easeOut' }}
            className="font-display font-extrabold text-[clamp(36px,6vw,88px)] tracking-tighter leading-[0.92] text-[var(--color-text)]"
          >
            Looking for a
            <br />
            <span style={{ WebkitTextStroke: '1.5px oklch(93% 0.006 70 / 0.45)', color: 'transparent' }}>
              Growth Lead?
            </span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          className="font-body text-base md:text-lg leading-relaxed text-[var(--color-muted)] max-w-lg mb-12"
        >
          Seed to Series B. Remote-only. Targeting founding-team growth hires
          where the brief is "figure it out" and the budget is "prove it first."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 md:gap-6 mb-24"
        >
          <a
            href="mailto:kenichiedbert@gmail.com"
            className="px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-[#080B12] font-body font-bold text-sm tracking-tight hover:scale-105 transition-transform duration-300"
          >
            Get in touch
          </a>
          <a
            href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`}
            download
            className="px-8 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] font-body font-medium text-sm hover:text-white hover:border-white/40 transition-colors duration-300"
          >
            Download resume
          </a>
          <a
            href="https://linkedin.com/in/kenichiedberty"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] font-body font-medium text-sm hover:text-white hover:border-white/40 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </motion.div>

        <div className="pt-8 border-t border-[var(--color-border)] flex justify-between items-center mt-auto">
          <span className="font-display font-extrabold text-lg tracking-tight text-[var(--color-text)]">
            KE<span className="text-[var(--color-accent)]">/</span>Y
          </span>
          <span className="font-mono text-[10px] text-[var(--color-muted)] opacity-40 uppercase tracking-widest">
            Kenichi Edbert Yauwanta · 2026
          </span>
        </div>
      </div>
    </section>
  )
}
