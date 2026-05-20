'use client'
import { motion } from 'framer-motion'
import { Placeholder } from '@/components/ui/Placeholder'
import { ChaosText } from '@/components/ui/ChaosText'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

export function Community() {
  return (
    <section className="portfolio-section min-h-screen py-20 px-6 md:px-16 flex flex-col justify-center bg-[var(--color-bg)] relative overflow-hidden" id="community">
      {/* Background Decorative Elements */}
      <div className="matrix-dots opacity-40" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Tracker Marker */}
        <motion.p {...inV(0)} className="font-mono text-xs text-[var(--color-orange)] tracking-[0.25em] font-bold uppercase mb-12">
          Act I — The Growth & Community Layer
        </motion.p>

        {/* main grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Content & Stats */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display font-extrabold text-[clamp(36px,5.2vw,72px)] leading-[0.95] tracking-tighter text-white"
              >
                The Community <br />
                <span className="text-[var(--color-orange)]">Architect.</span>
              </motion.h2>
            </div>

            <motion.p {...inV(0.1)} className="font-body text-white/60 text-lg leading-relaxed max-w-xl">
              I led the global GTM strategy and built Discord communities from the ground up.
              By establishing highly optimized viral loops, AMAs, and partnerships, we drove unprecedented launch velocity across 130 countries.
            </motion.p>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8 mt-4 max-w-xl">
              {[
                { value: '110K+', label: 'Playtest downloads', desc: 'Sustained global push' },
                { value: '15,000+', label: 'Discord community', desc: 'AMAs, events & creator loops' },
                { value: '$6.5M', label: 'Fundraising supported', desc: 'Traction-led storytelling' },
                { value: '67%', label: 'Day 1 retention', desc: 'Peak 1,270 concurrents' },
              ].map((m, i) => (
                <motion.div key={m.label} {...inV(0.15 + i * 0.08)} className="flex flex-col border-l border-[var(--color-border)] pl-4">
                  <span className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight">{m.value}</span>
                  <span className="font-body text-xs font-semibold text-[var(--color-orange)] mt-0.5">{m.label}</span>
                  <span className="font-mono text-[9px] text-[var(--color-muted)] mt-1">{m.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel: Staggered Mason Wong Editorial Collage */}
          <div className="lg:col-span-6 relative flex flex-col gap-6 select-none mt-8 lg:mt-0">
            {/* Background wireframe cross grid */}
            <div className="absolute inset-0 border border-dashed border-[var(--color-border)]/60 rounded-2xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              
              {/* Image 1: Main Event Portrait */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-1 border border-[var(--color-border)] p-1 bg-[var(--color-surface)] rounded-xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]"
              >
                <Placeholder 
                  label="Community PAX East Live Demo" 
                  dims="600 × 800" 
                  theme="orange"
                  aspectRatio="3/4"
                />
              </motion.div>

              <div className="flex flex-col gap-6 justify-between">
                {/* Image 2: Widescreen Campaign Screen */}
                <motion.div 
                  initial={{ opacity: 0, x: 20, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="border border-[var(--color-border)] p-1 bg-[var(--color-surface)] rounded-xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]"
                >
                  <Placeholder 
                    label="GTM Discord Live Launch Dashboard" 
                    dims="600 × 400" 
                    theme="orange"
                    aspectRatio="3/2"
                  />
                </motion.div>

                {/* Image 3: Small Square Event */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: -1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.28 }}
                  className="border border-[var(--color-border)] p-1 bg-[var(--color-surface)] rounded-xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]"
                >
                  <Placeholder 
                    label="Creator Campaign Panel" 
                    dims="600 × 400" 
                    theme="orange"
                    aspectRatio="3/2"
                  />
                </motion.div>
              </div>

            </div>
          </div>

        </div>

        {/* Philosophy Banner section featuring ChaosText */}
        <motion.div 
          {...inV(0.35)}
          className="w-full border-t border-[var(--color-border)] pt-16 mt-20 flex flex-col items-center justify-center text-center relative"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">Core Philosophy</p>
          <div className="flex flex-wrap items-center justify-center font-display font-extrabold text-[clamp(24px,4vw,60px)] leading-none tracking-tighter text-white/80">
            <span>&ldquo;marketing without community is just&nbsp;</span>
            <ChaosText text="c*#!os" className="text-[var(--color-orange)]" />
            <span>&rdquo;</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
