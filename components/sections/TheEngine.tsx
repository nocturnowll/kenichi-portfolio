'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Terminal } from '@/components/engine/Terminal'
import { StatCounters } from '@/components/engine/StatCounters'
import { StackPills } from '@/components/engine/StackPills'
import { SESSION_JOB_HUNTER, SESSION_CRM } from '@/lib/terminal-sessions'

export function TheEngine() {
  const [session, setSession] = useState(0)
  const sessions = [SESSION_JOB_HUNTER, SESSION_CRM]

  return (
    <section
      id="the-engine"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--color-brand-bg) 0%, #0d1117 8%, #0d1117 92%, var(--color-brand-bg) 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#4d5a6e 1px, transparent 1px), linear-gradient(90deg, #4d5a6e 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#4d5a6e', fontFamily: 'var(--font-body)' }}>the engine</span>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#ffffff', lineHeight: '1.1' }} className="text-4xl md:text-6xl mt-4">
            I don&apos;t just run the playbook.<br />
            <span style={{ color: 'var(--color-brand-orange)' }}>I build what runs the playbook.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl">
          <div className="flex gap-3 mb-4">
            {['job-hunter', 'crm scoring'].map((label, i) => (
              <button
                key={label}
                onClick={() => setSession(i)}
                className="text-xs px-3 py-1.5 rounded transition-colors"
                style={{
                  backgroundColor: session === i ? 'var(--color-brand-orange)' : 'transparent',
                  color: session === i ? '#ffffff' : '#4d5a6e',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <Terminal session={sessions[session]} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <StatCounters />
        </motion.div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: '#4d5a6e', fontFamily: 'var(--font-body)' }}>built with</p>
          <StackPills />
        </div>

        <p className="text-xs" style={{ color: '#2d3748', fontFamily: 'var(--font-mono)' }}>
          This site was built with Claude Code · Deployed via GitHub Actions · Hosted on GitHub Pages
        </p>
      </div>
    </section>
  )
}
