'use client'
import { motion } from 'framer-motion'

const stack = ['Claude Code', 'GitHub Actions', 'Next.js 16', 'Supabase', 'Vercel', 'Telegram API', 'Playwright', 'TypeScript', 'Framer Motion']

export function StackPills() {
  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.07 }}
          className="px-4 py-2 rounded-full text-sm cursor-default transition-colors"
          style={{ border: '1px solid #1e2d3d', color: '#a6b3c5', fontFamily: 'var(--font-mono)' }}
          onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-brand-orange)'; (e.target as HTMLElement).style.color = 'var(--color-brand-orange)' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#1e2d3d'; (e.target as HTMLElement).style.color = '#a6b3c5' }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  )
}
