'use client'
import { motion } from 'framer-motion'
import { Placeholder } from '@/components/ui/Placeholder'

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
})

export function Operator() {
  return (
    <section className="portfolio-section min-h-screen py-24 px-6 md:px-20 lg:px-24 flex flex-col justify-center bg-[var(--color-bg)] relative overflow-hidden" id="the-work">
      {/* Grid cross lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[size:40px_40px]" 
           style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)` }} />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Track Marker */}
        <motion.p {...inV(0)} className="font-mono text-xs text-[var(--color-orange)] tracking-[0.25em] font-bold uppercase mb-12">
          Act I — Local Business Operator
        </motion.p>

        {/* main grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: The Numbers Story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display font-extrabold text-[clamp(44px,6.8vw,110px)] leading-[0.88] tracking-tighter text-[var(--color-orange)]"
              >
                Rp 120M
              </motion.h2>
            </div>
            
            <div className="overflow-hidden">
              <motion.h3 
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="font-display font-bold text-[clamp(28px,3.8vw,52px)] leading-[1.0] tracking-tighter text-white"
              >
                per month. <br />
                90 days from zero.
              </motion.h3>
            </div>

            <motion.p {...inV(0.18)} className="font-body text-white/60 text-lg leading-relaxed max-w-xl">
              I built and operated the Samarinda branch of a fitness/Pilates studio franchise. 
              Ownership extended from localized GTM ads and equipment procurement to coding the bespoke CRM and POS that run it end-to-end.
            </motion.p>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-8 mt-4 max-w-xl">
              {[
                { label: 'Pre-launch sales', value: 'Rp 50M+' },
                { label: 'Studio members', value: '384' },
                { label: 'Custom CRM scripts', value: '3 live' },
              ].map((m, i) => (
                <motion.div key={m.label} {...inV(0.25 + i * 0.08)}>
                  <p className="font-display font-bold text-lg md:text-xl text-white tracking-tight">{m.value}</p>
                  <p className="font-mono text-[9px] text-[var(--color-muted)] uppercase tracking-wider mt-1">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel: Overlapping Collage of Studio Visuals & CRM Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative w-full h-[380px] sm:h-[420px] select-none"
          >
            {/* Background Wireframe Grid */}
            <div className="absolute inset-0 border border-dashed border-[var(--color-border)]/50 rounded-2xl pointer-events-none animate-pulse" />

            {/* Base Image: Agape Studio Pilates Room */}
            <motion.div
              initial={{ x: 20, y: 20, rotate: 1 }}
              whileInView={{ x: 0, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              className="absolute bottom-4 right-4 w-[85%] p-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.01]"
            >
              <Placeholder 
                label="Agape Movement Samarinda Studio" 
                dims="800 × 600" 
                theme="orange"
                aspectRatio="4/3"
              />
              <div className="absolute top-4 right-4 flex gap-1.5 pointer-events-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)] animate-ping" />
                <span className="font-mono text-[8px] text-[var(--color-orange)] tracking-widest uppercase">Studio Feed</span>
              </div>
            </motion.div>

            {/* Overlapping Card: Custom CRM Booking UI */}
            <motion.div
              initial={{ x: -20, y: -20, rotate: -2 }}
              whileInView={{ x: 0, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 left-6 w-[60%] p-1.5 bg-[var(--color-surface)] border border-[var(--color-orange)]/60 rounded-xl shadow-xl transition-all duration-300 hover:rotate-0 hover:scale-[1.03]"
            >
              <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-2.5 flex flex-col gap-2 font-mono text-[8px]">
                {/* CRM Header */}
                <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-1.5 mb-0.5">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)]" />
                    <span className="font-bold text-[7px] text-[var(--color-orange)] tracking-wider">ICHIECHA_CRM v2.4</span>
                  </div>
                  <span className="text-white/40">ACTIVE</span>
                </div>
                
                {/* Mini chart or dashboard numbers */}
                <div className="flex justify-between items-end h-8 gap-1 pt-1">
                  <div className="flex-1 bg-[var(--color-orange)]/25 h-[40%] rounded-sm" />
                  <div className="flex-1 bg-[var(--color-orange)]/45 h-[65%] rounded-sm" />
                  <div className="flex-1 bg-[var(--color-orange)]/60 h-[50%] rounded-sm" />
                  <div className="flex-1 bg-[var(--color-orange)] h-[90%] rounded-sm animate-pulse" />
                </div>
                
                <div className="flex justify-between text-[6px] text-white/50 border-t border-[var(--color-border)] pt-1">
                  <span>OMSET KPI</span>
                  <span className="text-white font-bold text-[7px]">Rp 120M / Mo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
