'use client'
import { motion } from 'framer-motion'

interface PlaceholderProps {
  width?: string | number
  height?: string | number
  label: string
  dims?: string
  theme?: 'orange' | 'green'
  aspectRatio?: string
  className?: string
}

export function Placeholder({
  width = '100%',
  height = '100%',
  label,
  dims = '1200 × 800',
  theme = 'orange',
  aspectRatio,
  className = '',
}: PlaceholderProps) {
  const accentColor = theme === 'orange' ? 'var(--color-orange)' : 'var(--color-green)'
  const fadeAccent = theme === 'orange' ? 'rgba(232, 93, 38, 0.04)' : 'rgba(0, 223, 137, 0.04)'
  const borderAccent = theme === 'orange' ? 'rgba(232, 93, 38, 0.2)' : 'rgba(0, 223, 137, 0.2)'

  return (
    <div
      className={`relative overflow-hidden border border-dashed rounded-lg flex flex-col items-center justify-center p-6 select-none transition-all duration-300 ${className}`}
      style={{
        width,
        height,
        aspectRatio,
        backgroundColor: 'var(--color-surface)',
        borderColor: borderAccent,
      }}
    >
      {/* Dynamic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${accentColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Cyber Corner Marks */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: accentColor }} />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: accentColor }} />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: accentColor }} />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: accentColor }} />

      {/* Center Technical Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-6 h-[1px]" style={{ backgroundColor: borderAccent }} />
        <div className="h-6 w-[1px]" style={{ backgroundColor: borderAccent }} />
      </div>

      {/* Dynamic Ambient Backglow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-40 h-40 rounded-full filter blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${fadeAccent} 0%, transparent 70%)`
        }}
      />

      {/* Text Elements */}
      <div className="relative z-10 text-center flex flex-col gap-1.5 pointer-events-none">
        <span 
          className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium"
          style={{ color: accentColor }}
        >
          Image Asset Placeholder
        </span>
        <h4 className="font-display font-bold text-sm tracking-tight text-white/90">
          {label}
        </h4>
        <span className="font-mono text-[10px] text-white/40 tracking-wider">
          [{dims}]
        </span>
      </div>
    </div>
  )
}
