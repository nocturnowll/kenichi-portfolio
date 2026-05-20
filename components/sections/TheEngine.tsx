'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GeminiOrb } from '@/components/engine/GeminiOrb'
import { CreativeMockup } from '@/components/engine/CreativeMockup'

type TabType = 'creative' | 'automation'

interface CreativeProject {
  id: 'big-mall' | 'fugo-hotels' | 'content-mogul' | 'mermade-hair'
  title: string
  subtitle: string
  device: 'browser' | 'phone'
  tags: string[]
  desc: string
}

interface AutomationProject {
  id: 'member-crm' | 'booking-engine' | 'ichiecha-pos' | 'ops-tracker'
  label: string
  metric: string
  client: string
  stack: string[]
  desc: string
  logs: string[]
}

const creativeProjects: CreativeProject[] = [
  {
    id: 'big-mall',
    title: 'BIG Mall Samarinda',
    subtitle: 'Mobile UI/UX App Redesign (Figma) — 2021',
    device: 'phone',
    tags: ['UI/UX Design', 'QR Loyalty', 'Customer App'],
    desc: 'Created an editorial, user-centric mobile UI for Samarinda\'s premier shopping center. Engineered a bespoke digital QR points scoreboard, merchant discount loyalty feeds, and interactive map layouts.',
  },
  {
    id: 'fugo-hotels',
    title: 'FUGO Hotels App',
    subtitle: 'Hotel Booking & Reservation Interface — 2022',
    device: 'phone',
    tags: ['Product Design', 'Booking Funnel', 'Figma'],
    desc: 'Redesigned the guest booking experience for FUGO Hotels. Focused on dynamic room showcase sheets, calendar picker overlays, streamlined checkout routes, and localized guest preferences.',
  },
  {
    id: 'content-mogul',
    title: 'Content Mogul Engine',
    subtitle: 'Conversion-Focused Landing Pages — 2021',
    device: 'browser',
    tags: ['Web Design', 'Conversion Rate', 'Unbounce'],
    desc: 'Designed high-converting landing pages for marketing agencies. Built modular structures, bold typographic sections, and form funnels that increased average landing page signups by 24%.',
  },
  {
    id: 'mermade-hair',
    title: 'Mermade Hair Campaigns',
    subtitle: 'E-commerce Landing Page Redesign — 2022',
    device: 'browser',
    tags: ['E-Commerce', 'Landing Page', 'Figma & Web'],
    desc: 'Crafted visual landing pages optimized for heavy social media traffic campaigns. Emphasized product feature matrices, before-after image components, and sticky shopping drawer layouts.',
  },
]

const automationProjects: AutomationProject[] = [
  {
    id: 'member-crm',
    label: 'lead-scorer-crm',
    client: 'Agape Movement',
    metric: '384 members synced',
    stack: ['Claude AI', 'n8n', 'WhatsApp API'],
    desc: 'AI inbox routing agent that intercepts incoming customer enquiries on WhatsApp, parses lead intent levels, routes priorities, and updates pipeline states automatically.',
    logs: [
      'SYSTEM: Initiating Claude lead-scoring parser...',
      'WEBHOOK: Incoming WhatsApp payload received from +62 811-554-XXX',
      'AI_AGENT: Analyzing message query text: "Hi, I\'d like to join the 10am Reformer session today."',
      'AI_AGENT: Sentiment analyzed. Target intent level: [HIGH]',
      'DATABASE: Querying member database. Match found (ID: M-384).',
      'PIPELINE: Updating Hubspot card to [Hot Lead - Active Booking Interest]',
      'SYSTEM: Auto-drafting response... "Hi Ken, we have 1 Reformer bed left. Click here to confirm..."',
      'DISPATCH: WhatsApp message auto-sent successfully.',
    ],
  },
  {
    id: 'booking-engine',
    label: 'scheduling-payments',
    client: 'Agape Movement',
    metric: 'Rp 120M/mo tracked',
    stack: ['Next.js', 'Stripe API', 'Supabase'],
    desc: 'Custom-built class scheduler, credit balances, and billing tracker. Replaced expensive commercial SaaS booking software, optimizing transaction margins by 4.2%.',
    logs: [
      'SYSTEM: Cron: Checking class schedules for upcoming Samarinda Studio...',
      'GATEWAY: Stripe Webhook event received [payment_intent.succeeded]',
      'DATABASE: Fetching member ledger (UID: usr_agp_9901)',
      'LEDGER: Depositing 10 Class Credits. Current balance: 18 Credits.',
      'DISPATCH: Dispatching dynamic PDF booking invoice to mail server.',
      'WEBSOCKET: Broadcasting updated seating availability to mobile interface.',
      'SUCCESS: Transaction logged. POS drawer reconciled.',
    ],
  },
  {
    id: 'ichiecha-pos',
    label: 'table-pos-ordering',
    client: 'IchiEcha',
    metric: '3 terminal layers live',
    stack: ['Next.js', 'Supabase', 'WebSockets'],
    desc: 'Tailored QR ordering and checkout portal for brick-and-mortar operations. Direct kitchen display integration, active table session logs, and daily sales summary generation.',
    logs: [
      'POS: New table checkout session initialized [Table 07]',
      'ORDER: 1x Iced Cappuccino, 1x Almond Croissant, 1x Truffle Fries',
      'WEBSOCKET: Broadcasting order event payload to kitchen screen...',
      'DATABASE: Writing ledger entry to Supabase main tables...',
      'AI: Registering product seasonality scores. Match: Breakfast peak combo.',
      'PRINT: Dispatching receipts. Thermal printer prints order voucher.',
    ],
  },
  {
    id: 'ops-tracker',
    label: 'ops-telegram-bot',
    client: 'IchiEcha / Agape',
    metric: 'Daily auto-reports',
    stack: ['Claude AI', 'Supabase', 'Telegram Bot'],
    desc: 'Business intelligence scripts that compile net revenues, transaction volumes, and hourly peaks, prompting Claude to draft daily performance logs directly to stakeholders via Telegram.',
    logs: [
      'SYSTEM: Triggering End-of-Day operations reporter at 22:00 WITA',
      'DATABASE: Calculating total net revenue: Rp 4,280,000',
      'DATABASE: Transaction count: 87. Peak sales window: 14:00 - 16:30.',
      'AI: Summarizing insights... "Sales up 14% vs last Wednesday. Matcha latte lead items."',
      'TELEGRAM: Compiling report payload. Dispatching to Telegram Group ID: -402919XX',
      'SUCCESS: Daily operational brief delivered to business partners.',
    ],
  },
]

export function TheEngine() {
  const [activeTab, setActiveTab] = useState<TabType>('creative')
  const [activeCreativeId, setActiveCreativeId] = useState<string>('big-mall')
  const [activeAutomationId, setActiveAutomationId] = useState<string>('member-crm')

  // Terminal log streaming state
  const [terminalLogs, setTerminalLogs] = useState<string[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamIndex, setStreamIndex] = useState(0)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  const activeCreative = creativeProjects.find((p) => p.id === activeCreativeId) || creativeProjects[0]
  const activeAutomation = automationProjects.find((p) => p.id === activeAutomationId) || automationProjects[0]

  // Restart terminal log stream whenever project changes or on run
  const triggerTerminalStream = (projLogs: string[]) => {
    setIsStreaming(true)
    setStreamIndex(0)
    setTerminalLogs(['[SYSTEM]: Initializing connection...', '[SYSTEM]: Fetching automation script...'])
  }

  useEffect(() => {
    if (activeTab === 'automation') {
      triggerTerminalStream(activeAutomation.logs)
    }
  }, [activeAutomationId, activeTab])

  useEffect(() => {
    if (!isStreaming) return
    const projLogs = activeAutomation.logs
    if (streamIndex < projLogs.length) {
      const timer = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${projLogs[streamIndex]}`])
        setStreamIndex((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsStreaming(false)
    }
  }, [streamIndex, isStreaming, activeAutomationId])

  useEffect(() => {
    // Scroll terminal to bottom
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [terminalLogs])

  return (
    <section className="portfolio-section min-h-screen py-24 px-6 md:px-20 lg:px-24 bg-[#04060b] relative overflow-hidden" id="the-engine">
      {/* Background digital gridlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[size:30px_30px]" 
           style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)` }} />
      <div className="matrix-dots opacity-30" />

      {/* Decorative warp portal bounds */}
      <div className="absolute bottom-[-10vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full filter blur-[150px] bg-[var(--color-green)] opacity-5 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="font-mono text-xs text-[var(--color-green)] tracking-[0.25em] font-bold uppercase">Act II — The Creative & Technical Engine</span>
          <div className="h-[1px] w-12 bg-[var(--color-green)]/35" />
          <span className="font-mono text-[9px] text-[var(--color-green)] tracking-widest uppercase animate-pulse">[ Live Systems ]</span>
        </div>

        {/* Section Title */}
        <div className="mb-14 text-left">
          <h2 className="font-display font-extrabold text-[clamp(32px,4.5vw,68px)] leading-[0.9] tracking-tighter text-white">
            When tools don&apos;t exist, <br />
            <span className="text-[var(--color-green)]">I engineer them.</span>
          </h2>
          <p className="font-body text-white/50 text-sm md:text-base font-light tracking-tight mt-4 max-w-xl leading-relaxed">
            Bridging pixel-perfect creative interfaces (2020-2022) with advanced system automation, custom full-stack engines, and production APIs (2023-Present).
          </p>
        </div>

        {/* Control Board Console Tabs */}
        <div className="flex border-b border-[var(--color-border)] mb-10 w-full md:w-auto overflow-x-auto md:overflow-visible scrollbar-none">
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] font-bold border-t-2 border-x transition-all duration-300 ${
              activeTab === 'creative'
                ? 'border-t-[var(--color-orange)] border-x-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-orange)]'
                : 'border-t-transparent border-x-transparent text-white/40 hover:text-white/80'
            }`}
          >
            [ Tab 01: Creative Lab ]
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] font-bold border-t-2 border-x transition-all duration-300 ${
              activeTab === 'automation'
                ? 'border-t-[var(--color-green)] border-x-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-green)]'
                : 'border-t-transparent border-x-transparent text-white/40 hover:text-white/80'
            }`}
          >
            [ Tab 02: Automation Lab ]
          </button>
        </div>

        {/* Control Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT SIDE PANEL: Control Selector Items */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {activeTab === 'creative' ? (
              /* Tab 01 Content list */
              <div className="flex flex-col gap-3">
                {creativeProjects.map((p) => {
                  const isSel = p.id === activeCreativeId
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveCreativeId(p.id)}
                      className={`text-left p-5 border rounded-xl flex flex-col gap-2 relative overflow-hidden transition-all duration-300 ${
                        isSel
                          ? 'border-[var(--color-orange)] bg-[var(--color-surface)] shadow-lg'
                          : 'border-[var(--color-border)] bg-[var(--color-bg)]/40 hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-display font-bold text-base text-white tracking-tight">{p.title}</span>
                        <span className={`font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSel ? 'bg-[var(--color-orange)]/10 text-[var(--color-orange)]' : 'bg-white/5 text-white/40'
                        }`}>
                          {p.device}
                        </span>
                      </div>
                      <p className={`font-mono text-[9px] ${isSel ? 'text-white/70' : 'text-[var(--color-muted)]'}`}>
                        {p.subtitle}
                      </p>
                      <p className="font-body text-[11px] leading-relaxed text-white/50 mt-1">
                        {p.desc}
                      </p>
                      {/* Technical visual pills */}
                      <div className="flex gap-1.5 flex-wrap mt-2">
                        {p.tags.map((t) => (
                          <span key={t} className="font-mono text-[8px] px-2 py-0.5 rounded-sm bg-white/5 text-white/30">
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* Active sidebar light dot */}
                      {isSel && (
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-orange)]" />
                      )}
                    </button>
                  )
                })}
              </div>
            ) : (
              /* Tab 02 Content list */
              <div className="flex flex-col gap-3">
                {automationProjects.map((p) => {
                  const isSel = p.id === activeAutomationId
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveAutomationId(p.id)}
                      className={`text-left p-5 border rounded-xl flex flex-col gap-2 relative overflow-hidden transition-all duration-300 ${
                        isSel
                          ? 'border-[var(--color-green)] bg-[var(--color-surface)] shadow-lg'
                          : 'border-[var(--color-border)] bg-[var(--color-bg)]/40 hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <span className={`h-1.5 w-1.5 rounded-full ${isSel ? 'bg-[var(--color-green)] animate-pulse' : 'bg-white/30'}`} />
                          <span className="font-mono text-[10px] text-[var(--color-green)] font-semibold tracking-wider">
                            {p.label}
                          </span>
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-white/40">
                          {p.client}
                        </span>
                      </div>
                      <span className="font-display font-extrabold text-sm text-white tracking-tight">
                        {p.metric}
                      </span>
                      <p className="font-body text-[11px] leading-relaxed text-white/50 mt-1">
                        {p.desc}
                      </p>
                      {/* Technical tools list */}
                      <div className="flex gap-1.5 flex-wrap mt-2">
                        {p.stack.map((s) => (
                          <span key={s} className={`font-mono text-[8px] px-2 py-0.5 rounded-sm ${
                            isSel ? 'bg-[var(--color-green)]/10 text-[var(--color-green)]/80' : 'bg-white/5 text-white/30'
                          }`}>
                            {s}
                          </span>
                        ))}
                      </div>
                      {/* Active sidebar light dot */}
                      {isSel && (
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-green)]" />
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* RIGHT SIDE PANEL: Workspace Preview Screen */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 p-4 sm:p-6 border border-[var(--color-border)] rounded-2xl bg-[var(--color-surface)] relative overflow-visible lg:overflow-hidden flex flex-col justify-between shadow-2xl lg:min-h-[580px] h-auto w-full">
              
              {/* Technical background overlay grids */}
              <div className="absolute inset-0 border border-dashed border-[var(--color-border)]/40 pointer-events-none rounded-2xl m-3" />

              {activeTab === 'creative' ? (
                /* Tab 1: Render high-end Creative Mockup wireframes */
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCreativeId}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full flex flex-col"
                  >
                    <CreativeMockup
                      id={activeCreative.id}
                      title={activeCreative.title}
                      subtitle={activeCreative.subtitle}
                      device={activeCreative.device}
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                /* Tab 2: Render fluid molten GeminiOrb & streaming terminal dashboard */
                <div className="w-full h-full flex flex-col lg:flex-row gap-6 items-center justify-between">
                  {/* Left: Beautiful Gemini gooey orb panel */}
                  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-2 relative">
                    <GeminiOrb />
                    <span className="font-mono text-[7px] text-[var(--color-green)] uppercase tracking-[0.2em] mt-4 block">
                      [ Creative-Technical Fusion ]
                    </span>
                  </div>

                  {/* Right: Simulated interactive terminal logs */}
                  <div className="w-full lg:w-1/2 flex flex-col h-[300px] md:h-[380px] border border-[var(--color-border)] bg-[#030509] rounded-xl overflow-hidden shadow-xl">
                    {/* Terminal Window Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <div className="w-2 h-2 rounded-full bg-green-500/60" />
                      </div>
                      <span className="font-mono text-[8px] text-[var(--color-green)] uppercase tracking-widest font-bold">
                        automation-terminal
                      </span>
                      <button
                        onClick={() => triggerTerminalStream(activeAutomation.logs)}
                        disabled={isStreaming}
                        className="font-mono text-[7px] px-2 py-0.5 rounded border border-[var(--color-green)]/30 text-[var(--color-green)] uppercase hover:bg-[var(--color-green)]/10 disabled:opacity-40 transition-all duration-200"
                      >
                        {isStreaming ? 'Running...' : 'Run Pipeline'}
                      </button>
                    </div>

                    {/* Terminal Display Logs Canvas */}
                    <div className="flex-1 p-4 font-mono text-[9px] leading-relaxed text-white/70 overflow-y-auto flex flex-col gap-2 scrollbar-none select-text">
                      {terminalLogs.map((log, index) => {
                        const isSystem = log.includes('[SYSTEM]')
                        let colorClass = 'text-white/60'
                        if (isSystem) colorClass = 'text-[var(--color-muted)] font-bold'
                        else if (log.includes('AI_AGENT')) colorClass = 'text-[var(--color-orange)]'
                        else if (log.includes('SUCCESS') || log.includes('DATABASE')) colorClass = 'text-[var(--color-green)]'
                        else if (log.includes('WEBHOOK') || log.includes('GATEWAY')) colorClass = 'text-yellow-400/80'

                        return (
                          <div key={index} className={`${colorClass} whitespace-pre-wrap break-all border-b border-white/[0.02] pb-1`}>
                            {log}
                          </div>
                        )
                      })}
                      
                      {/* Active cursor blinking line */}
                      {isStreaming && (
                        <div className="flex items-center gap-1 text-[var(--color-green)] font-bold mt-1 animate-pulse">
                          <span>$ executing pipelines...</span>
                          <span className="w-1 h-3 bg-[var(--color-green)] animate-blink" />
                        </div>
                      )}
                      
                      <div ref={terminalEndRef} />
                    </div>
                  </div>
                </div>
              )}

              {/* Technical coordinate grids */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-[var(--color-border)] select-none">
                <span className="font-mono text-[8px] text-[var(--color-muted)]">
                  COORD_REF: FX-2026-X
                </span>
                <span className="font-mono text-[8px] text-[var(--color-muted)] uppercase">
                  Systems Engine v4.0.0
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
