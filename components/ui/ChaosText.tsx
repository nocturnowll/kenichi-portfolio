'use client'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

interface ChaosTextProps {
  text?: string
  className?: string
}

export function ChaosText({ text = 'c*#!os', className = '' }: ChaosTextProps) {
  const characters = text.split('')
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.span
      className={`inline-flex cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-flex' }}
    >
      {characters.map((char, index) => {
        // Generate pseudo-random scatter coordinates that are consistent per character
        const seedX = Math.sin(index * 45) * 50
        const seedY = Math.cos(index * 75) * 50
        const seedRotate = Math.sin(index * 90) * 45

        return (
          <motion.span
            key={index}
            className="inline-block origin-center"
            animate={{
              x: isHovered ? seedX : 0,
              y: isHovered ? seedY : 0,
              rotate: isHovered ? seedRotate : 0,
              color: isHovered ? 'var(--color-green)' : 'var(--color-orange)',
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 12,
              mass: 0.8,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
