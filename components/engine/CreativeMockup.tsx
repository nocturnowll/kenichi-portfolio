'use client'
import { motion } from 'framer-motion'

interface CreativeMockupProps {
  id: 'big-mall' | 'fugo-hotels' | 'content-mogul' | 'mermade-hair'
  title: string
  subtitle: string
  device: 'browser' | 'phone'
}

export function CreativeMockup({ id, title, subtitle, device }: CreativeMockupProps) {
  const isBrowser = device === 'browser'

  return (
    <div className="w-full h-full flex flex-col">
      {/* Device Header Info */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-4">
        <div>
          <span className="font-mono text-[8px] text-[var(--color-green)] uppercase tracking-wider block mb-1">
            [ Visual Asset Scaffold ]
          </span>
          <h4 className="font-display font-bold text-base text-white tracking-tight">{title}</h4>
          <p className="font-mono text-[10px] text-[var(--color-muted)]">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-[var(--color-border)] text-white/50 uppercase">
            {device}
          </span>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 flex items-center justify-center p-2 min-h-[380px]">
        {isBrowser ? (
          /* Sleek Brutalist Browser Frame */
          <div className="w-full max-w-[560px] aspect-[16/10] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg flex flex-col overflow-hidden shadow-2xl relative">
            {/* Browser chrome bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
              </div>
              <div className="w-48 h-4 rounded bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                <span className="font-mono text-[8px] text-white/30 truncate px-2">
                  https://design.kenichi.dev/{id}
                </span>
              </div>
              <div className="w-4" />
            </div>

            {/* Browser Content Canvas */}
            <div className="flex-1 p-4 flex flex-col justify-between relative bg-dot-grid overflow-hidden">
              {id === 'content-mogul' ? (
                /* Content Mogul Landing Page Scaffold */
                <div className="flex flex-col h-full justify-between gap-4">
                  {/* Hero banner wireframe */}
                  <div className="text-left flex flex-col gap-2">
                    <div className="w-20 h-3 bg-[var(--color-orange)]/15 border border-[var(--color-orange)]/30 rounded" />
                    <div className="h-6 w-3/4 bg-white/10 rounded border border-white/5" />
                    <div className="h-4 w-1/2 bg-white/5 rounded" />
                  </div>
                  {/* Form conversion block */}
                  <div className="flex gap-2">
                    <div className="flex-1 h-9 rounded bg-[var(--color-surface)] border border-[var(--color-border)] px-3 flex items-center">
                      <div className="h-2.5 w-24 bg-white/20 rounded" />
                    </div>
                    <div className="w-24 h-9 bg-[var(--color-orange)] text-[var(--color-bg)] rounded flex items-center justify-center font-mono text-[9px] font-bold border border-[var(--color-orange)]">
                      CTA ACTION
                    </div>
                  </div>
                  {/* Grid blocks */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-[var(--color-border)] p-2 bg-[var(--color-surface)] rounded flex flex-col gap-1.5">
                        <div className="h-3 w-8 bg-[var(--color-green)]/20 rounded" />
                        <div className="h-2 w-full bg-white/5 rounded" />
                        <div className="h-2 w-2/3 bg-white/5 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Mermade Hair E-Commerce Scaffold */
                <div className="flex flex-col h-full justify-between gap-4">
                  <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-2">
                    <div className="w-16 h-3 bg-white/20 rounded" />
                    <div className="flex gap-2">
                      <div className="w-8 h-2 bg-white/10 rounded" />
                      <div className="w-8 h-2 bg-white/10 rounded" />
                    </div>
                  </div>
                  {/* Hero Product Spotlight */}
                  <div className="flex-1 grid grid-cols-2 gap-4 items-center">
                    <div className="flex flex-col gap-2">
                      <div className="h-5 w-full bg-white/10 rounded" />
                      <div className="h-2 w-3/4 bg-white/5 rounded" />
                      <div className="h-6 w-20 bg-[var(--color-green)] rounded" />
                    </div>
                    <div className="h-full border border-dashed border-[var(--color-green)]/30 rounded-lg flex items-center justify-center bg-[var(--color-surface)] relative">
                      <span className="font-mono text-[8px] text-[var(--color-green)] uppercase tracking-wider">[ Product Image ]</span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-green)]/5 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              )}
              {/* Technical background grids overlay */}
              <div className="absolute inset-0 border border-dashed border-[var(--color-border)]/40 pointer-events-none rounded m-2" />
            </div>
          </div>
        ) : (
          /* Sleek Brutalist Phone Frame */
          <div className="w-[240px] aspect-[9/19] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl p-2 relative">
            {/* Phone speaker/notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] z-20 flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-white/15" />
            </div>

            {/* Inner display screen wrapper */}
            <div className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] overflow-hidden flex flex-col relative pt-8 pb-4 px-3">
              {id === 'big-mall' ? (
                /* BIG Mall Loyalty App Wireframe Scaffold */
                <div className="flex flex-col h-full justify-between gap-3">
                  {/* Search Bar */}
                  <div className="h-7 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center px-3 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                    <div className="h-2 w-24 bg-white/10 rounded" />
                  </div>
                  
                  {/* Points Loyalty Card (Orange themed) */}
                  <div className="rounded-xl border border-[var(--color-orange)]/40 bg-gradient-to-br from-[var(--color-orange)]/5 to-[var(--color-orange)]/20 p-3 flex flex-col justify-between h-28 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-[7px] text-[var(--color-orange)] uppercase tracking-wider">BIG MALL MEMBERSHIP</span>
                        <div className="h-2 w-16 bg-white/20 rounded mt-1" />
                      </div>
                      <div className="w-4 h-4 rounded bg-white/10" />
                    </div>
                    <div>
                      <span className="font-display font-extrabold text-xl text-white">4,850 pts</span>
                      <p className="font-mono text-[7px] text-white/40 uppercase mt-0.5">Expires Dec 2026</p>
                    </div>
                    {/* Tiny grid lines */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 border border-dashed border-[var(--color-orange)]/30 rounded-full" />
                  </div>

                  {/* Deals Header */}
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-16 bg-white/20 rounded" />
                    <div className="h-2 w-8 bg-[var(--color-orange)]/30 rounded" />
                  </div>

                  {/* Deals Scroll Panel */}
                  <div className="flex-1 grid grid-cols-2 gap-2 overflow-hidden">
                    {[1, 2].map((i) => (
                      <div key={i} className="border border-[var(--color-border)] rounded-lg p-1.5 bg-[var(--color-bg)] flex flex-col gap-1.5 justify-between">
                        <div className="h-10 border border-dashed border-white/10 rounded flex items-center justify-center bg-[var(--color-surface)]">
                          <span className="font-mono text-[6px] text-white/30">[ Gift ]</span>
                        </div>
                        <div className="h-2 w-12 bg-white/20 rounded" />
                        <div className="h-4 w-full bg-[var(--color-orange)] rounded flex items-center justify-center">
                          <span className="font-mono text-[6px] font-bold text-[var(--color-bg)]">REDEEM</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* FUGO Hotels Booking App Wireframe Scaffold */
                <div className="flex flex-col h-full justify-between gap-3">
                  {/* Location Selector */}
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[6px] text-[var(--color-green)] uppercase tracking-wider">SELECT HOTEL</span>
                    <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-between px-3">
                      <div className="h-2 w-28 bg-white/20 rounded" />
                      <span className="text-[8px] text-[var(--color-green)]">↓</span>
                    </div>
                  </div>

                  {/* Room Showcase Hero Card */}
                  <div className="rounded-xl border border-[var(--color-border)] p-1.5 bg-[var(--color-bg)] flex flex-col gap-2 flex-1">
                    <div className="h-24 border border-dashed border-[var(--color-green)]/30 rounded-lg flex items-center justify-center bg-[var(--color-surface)] relative overflow-hidden">
                      <span className="font-mono text-[7px] text-[var(--color-green)] uppercase tracking-widest">[ Suite Mockup ]</span>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg)]/80" />
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <div>
                        <div className="h-2.5 w-20 bg-white/20 rounded" />
                        <div className="h-2 w-12 bg-white/10 rounded mt-1" />
                      </div>
                      <span className="font-mono text-[8px] font-bold text-[var(--color-green)]">Rp 1.2M/n</span>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="h-9 rounded bg-[var(--color-green)] text-[var(--color-bg)] font-mono text-[9px] font-bold flex items-center justify-center border border-[var(--color-green)] transition-transform duration-300 hover:scale-[1.02]">
                    CONFIRM BOOKING
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
