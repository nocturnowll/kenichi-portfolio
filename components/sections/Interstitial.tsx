'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Interstitial() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the transition container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Cover panels slide left and right
  const leftX = useTransform(scrollYProgress, [0.08, 0.72], ["0%", "-100%"])
  const rightX = useTransform(scrollYProgress, [0.08, 0.72], ["0%", "100%"])
  
  // Warp portal fades in and scales up
  const portalOpacity = useTransform(scrollYProgress, [0.2, 0.85], [0, 1])
  const portalScale = useTransform(scrollYProgress, [0.2, 0.85], [0.92, 1.05])
  const textOpacity = useTransform(scrollYProgress, [0.0, 0.45], [1, 0])

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-[var(--color-bg)]">
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Warp Portal Background Layer (Revealed behind) */}
        <motion.div 
          style={{ opacity: portalOpacity, scale: portalScale }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-[#04070C]"
        >
          {/* Glowing Green Radar Grid / Portal */}
          <div className="absolute inset-0 matrix-dots opacity-40" />
          <div 
            className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full filter blur-[120px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, var(--color-green) 0%, transparent 70%)'
            }}
          />
          
          {/* SVG Tech Outline Circle */}
          <div className="absolute flex items-center justify-center w-[300px] h-[300px] md:w-[480px] md:h-[480px]">
            {/* Spinning technical rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-[var(--color-green)]/15 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-dotted border-[var(--color-green)]/25 rounded-full"
            />
            <div className="absolute inset-20 border border-[var(--color-green)]/10 rounded-full" />
            
            {/* Tech Crosshairs */}
            <div className="absolute h-full w-[1px] bg-[var(--color-green)]/10" />
            <div className="absolute w-full h-[1px] bg-[var(--color-green)]/10" />
          </div>

          {/* Act II Title & Hook in background */}
          <div className="relative z-10 text-center px-6 max-w-xl">
            <span className="font-mono text-[10px] text-[var(--color-green)] tracking-[0.3em] font-bold uppercase block mb-4">
              [ ENTERING ACT II ]
            </span>
            <h2 className="font-display font-extrabold text-[clamp(32px,4.8vw,68px)] leading-[0.9] tracking-tighter text-white">
              The Creative & <br />
              <span className="text-[var(--color-green)]">Technical Engine.</span>
            </h2>
            <p className="font-body text-white/50 text-sm md:text-base font-light tracking-tight mt-6 max-w-md mx-auto leading-relaxed">
              Where aesthetics meet execution. Translating complex system logic into seamless, high-converting digital interfaces.
            </p>
            
            {/* Scroll Indicator */}
            <div className="mt-12 flex flex-col items-center gap-2">
              <span className="font-mono text-[8px] text-[var(--color-green)]/60 tracking-widest uppercase">Scroll to explore the lab</span>
              <div className="h-8 w-[1px] bg-gradient-to-b from-[var(--color-green)] to-transparent animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Sliding Cover Panels (Split Portal) */}
        {/* Left Cover */}
        <motion.div 
          style={{ x: leftX }}
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-[var(--color-bg)] border-r border-[var(--color-border)] overflow-hidden flex items-center justify-end z-20"
        >
          {/* We mirror the full centered text inside left panel but clip it */}
          <div className="w-[100vw] h-full flex items-center justify-center translate-x-[50vw]">
            <motion.div style={{ opacity: textOpacity }} className="text-center max-w-[680px] px-8">
              <p className="font-mono text-xs text-[var(--color-orange)] tracking-[0.25em] font-bold uppercase mb-4 opacity-50">
                Act II
              </p>
              <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,58px)] leading-[1.02] tracking-tighter text-white">
                I also build the tools <br />
                that run them.
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Cover */}
        <motion.div 
          style={{ x: rightX }}
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-[var(--color-bg)] border-l border-[var(--color-border)] overflow-hidden flex items-center justify-start z-20"
        >
          {/* We mirror the full centered text inside right panel but clip it */}
          <div className="w-[100vw] h-full flex items-center justify-center -translate-x-[50vw]">
            <motion.div style={{ opacity: textOpacity }} className="text-center max-w-[680px] px-8">
              <p className="font-mono text-xs text-[var(--color-orange)] tracking-[0.25em] font-bold uppercase mb-4 opacity-50">
                Act II
              </p>
              <h2 className="font-display font-extrabold text-[clamp(28px,4.5vw,58px)] leading-[1.02] tracking-tighter text-white">
                I also build the tools <br />
                that run them.
              </h2>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
