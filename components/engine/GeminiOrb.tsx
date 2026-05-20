'use client'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export function GeminiOrb() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Calculate cursor offset from center (-1 to 1)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setMousePos({ x: x * 40, y: y * 40 })
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex items-center justify-center cursor-pointer select-none"
    >
      {/* Invisible interactive background padder */}
      <div className="absolute inset-0 z-10" />

      {/* SVG Gooey Filter definition (hidden from view) */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0">
        <defs>
          <filter id="goo-fusion">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Gooey Liquid Canvas */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-visible"
        style={{ filter: 'url(#goo-fusion)' }}
      >
        {/* Core center pulse */}
        <motion.div 
          animate={{
            scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-[var(--color-orange)] to-[var(--color-green)] opacity-90 mix-blend-screen"
        />

        {/* Floating Blob A (Warm Orange) */}
        <motion.div
          animate={{
            x: [mousePos.x, -45 + mousePos.x * 0.7, 30 + mousePos.x, mousePos.x],
            y: [mousePos.y, 35 + mousePos.y * 0.7, -40 + mousePos.y, mousePos.y],
            scale: [1, 1.25, 0.85, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--color-orange)] mix-blend-screen"
        />

        {/* Floating Blob B (Digital Green) */}
        <motion.div
          animate={{
            x: [mousePos.x * -0.5, 50 - mousePos.x * 0.8, -25 - mousePos.x, mousePos.x * -0.5],
            y: [mousePos.y * -0.5, -45 - mousePos.y * 0.8, 35 - mousePos.y, mousePos.y * -0.5],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-green)] mix-blend-screen"
        />

        {/* Floating Blob C (Bright Core / Satellite) */}
        <motion.div
          animate={{
            x: [mousePos.x * 1.2, 20 + mousePos.x * 0.5, -40 + mousePos.x * 1.5, mousePos.x * 1.2],
            y: [-30 + mousePos.y * 1.2, -60 + mousePos.y * 0.5, 45 + mousePos.y * 1.5, -30 + mousePos.y * 1.2],
            scale: [0.7, 1.1, 0.6, 0.7],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
          className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full bg-[var(--color-green)]/80 mix-blend-screen"
        />

        {/* Floating Blob D (Orange satellite) */}
        <motion.div
          animate={{
            x: [-mousePos.x, -60 - mousePos.x * 0.4, 40 - mousePos.x * 1.2, -mousePos.x],
            y: [40 - mousePos.y, -30 - mousePos.y * 0.4, -40 - mousePos.y * 1.2, 40 - mousePos.y],
            scale: [0.6, 0.9, 0.7, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.1
          }}
          className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full bg-[var(--color-orange)]/80 mix-blend-screen"
        />
      </div>

      {/* Decorative Technical Ring overlay inside the interactable area */}
      <div className="absolute inset-0 rounded-full border border-dashed border-white/5 pointer-events-none" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-6 rounded-full border border-dotted border-[var(--color-green)]/15 pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-12 rounded-full border border-dashed border-[var(--color-orange)]/10 pointer-events-none"
      />

      {/* Center Label Indicator */}
      <div className="absolute z-20 flex flex-col items-center justify-center text-center pointer-events-none">
        <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest bg-[var(--color-bg)]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-border)] shadow-md">
          {isHovered ? 'Active Fusion' : 'Molten Orb'}
        </span>
      </div>
    </div>
  )
}
