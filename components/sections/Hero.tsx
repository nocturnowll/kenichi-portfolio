'use client'
import { motion } from 'framer-motion'
import { Placeholder } from '@/components/ui/Placeholder'

export function Hero() {
  return (
    <section id="hero" className="portfolio-section min-h-screen relative flex flex-col justify-between px-6 py-12 md:px-16 md:py-20 bg-[var(--color-bg)] overflow-hidden">
      {/* Subtle Background Glow */}
      <div 
        className="absolute top-1/4 left-0 w-[50vw] h-[50vw] rounded-full filter blur-[120px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)'
        }}
      />

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center my-auto relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Left Column: Bold Asymmetric Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Header Mark */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-mono text-xs text-[var(--color-orange)] tracking-[0.25em] font-bold">KE/Y</span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
            <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest">Growth Operator</span>
          </motion.div>

          {/* Hook Statements */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-display font-extrabold leading-[0.9] tracking-tighter text-[clamp(44px,6.8vw,88px)] text-[var(--color-orange)]"
              >
                110,000 users <br className="hidden md:inline" />
                in 2 weeks.
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                className="font-display font-extrabold leading-[0.95] tracking-tighter text-[clamp(32px,5.2vw,64px)] text-white/90"
              >
                #1 on Steam in 72 hours.
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="font-body text-white/60 text-lg md:text-2xl font-light tracking-tight mt-2 max-w-xl leading-relaxed"
              >
                Then I built the systems that kept them.
              </motion.p>
            </div>
          </div>

          {/* Info Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-8 items-center border-t border-[var(--color-border)] pt-8 mt-4"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] mb-1">Positioning</p>
              <p className="font-body text-sm font-medium text-white/80">Growth Lead & Founding GTM</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-muted)] mb-1">Based In</p>
              <p className="font-body text-sm font-medium text-white/80">Indonesia (WIB, UTC+8)</p>
            </div>
            
            {/* CTA Trigger */}
            <div className="ml-auto">
              <a
                href="#community"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-xs bg-[var(--color-orange)] text-[var(--color-bg)] transition-transform duration-300 hover:scale-105"
              >
                See the work
                <span className="text-[10px]">↓</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Editorial Portrait Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]">
            <Placeholder
              label="Kenichi Yauwanta (GTM / G1)"
              dims="600 × 800"
              theme="orange"
              aspectRatio="3/4"
            />
            {/* Decorative Corner Grid lines */}
            <div className="absolute -top-4 -left-4 w-8 h-8 opacity-20 pointer-events-none" 
                 style={{ 
                   backgroundImage: `linear-gradient(to right, var(--color-orange) 1px, transparent 1px), linear-gradient(to bottom, var(--color-orange) 1px, transparent 1px)`,
                   backgroundSize: '8px 8px'
                 }} 
            />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-20 pointer-events-none" 
                 style={{ 
                   backgroundImage: `linear-gradient(to right, var(--color-orange) 1px, transparent 1px), linear-gradient(to bottom, var(--color-orange) 1px, transparent 1px)`,
                   backgroundSize: '8px 8px'
                 }} 
            />
          </div>
        </motion.div>
      </div>

      {/* Infinite Metric Marquee (Marquee Banner Ticker) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full border-t border-b border-[var(--color-border)] py-3 mt-auto relative z-10 bg-[var(--color-bg)]/80 backdrop-blur-sm"
      >
        <div className="marquee-container">
          <div className="marquee-content font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-orange)]">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex gap-10">
                <span>110k Playtest Users</span>
                <span className="text-white/20">/</span>
                <span>#1 on Steam</span>
                <span className="text-white/20">/</span>
                <span>Rp 120M / Month omset</span>
                <span className="text-white/20">/</span>
                <span>5 Automation sandboxes</span>
                <span className="text-white/20">/</span>
                <span>UI/UX Designer</span>
                <span className="text-white/20">/</span>
                <span>Solo Builder</span>
                <span className="text-white/20">/</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
