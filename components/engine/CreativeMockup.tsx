'use client'
import { motion } from 'framer-motion'

interface CreativeMockupProps {
  id: 'big-mall' | 'fugo-hotels' | 'content-mogul' | 'mermade-hair'
  title: string
  subtitle: string
  device: 'browser' | 'phone'
}

interface ProjectSpec {
  specType: string
  colors: string[]
  typeDisplay: string
  typeBody: string
  gridSystem: string
  interaction: string
  rationale: string
}

const PROJECT_SPECS: Record<string, ProjectSpec> = {
  'big-mall': {
    specType: 'Mobile App Wireframe · Design Token v1.2',
    colors: ['#ff5e00', '#1c1c24', '#0c0f17', '#ffffff'],
    typeDisplay: 'Syne (Display Bold / Tracking Tight)',
    typeBody: 'Inter Mono (Spacings Wide / HSL Token)',
    gridSystem: '4-Column Flexible Fluid Grid (8px Margins)',
    interaction: 'Instant QR Scan Scorecard / Sliding Loyalty Deal Triggers',
    rationale: 'Kenichi designed the BIG Mall Samarinda loyalty app to capture high GTM retention. Replaced standard generic lists with a dark-mode brutalist, gamified points ticker overlay that makes redeeming discounts instant and highly tactile.'
  },
  'fugo-hotels': {
    specType: 'Mobile Interface Scaffold · Token Spec v2.1',
    colors: ['#00ff66', '#1c1c24', '#08080c', '#ffffff'],
    typeDisplay: 'Outfit (Display Semi-Bold / Lettering Condensed)',
    typeBody: 'IBM Plex Mono (600 / System Native)',
    gridSystem: 'Fluid Stack Flex Layout (16px Corner Blur)',
    interaction: 'Bottom-drawer room picker / Direct transactional booking overlays',
    rationale: 'Focused on optimizing FUGO Hotels booking flow. Created responsive layouts with interactive modal overlays, custom date ranges, and highly-visible rate tiers that drove checkout completion.'
  },
  'content-mogul': {
    specType: 'Conversion Landing Page · Modular System v3.0',
    colors: ['#ff5e00', '#ffffff', '#12121c', '#333344'],
    typeDisplay: 'Space Grotesk (Heavy Display / Tracking Tight)',
    typeBody: 'Satoshi (Body Regular / Leading Loose)',
    gridSystem: '12-Column Editorial Grid / Adaptive Margins',
    interaction: 'Sticky lead form overlays / Dynamic scroll state triggers',
    rationale: 'Designed high-converting modular landing pages for marketing agencies. Utilized high-contrast orange tokens and clean input sheets to elevate sign-up response rates.'
  },
  'mermade-hair': {
    specType: 'E-Commerce Landing Page · Scaffold v1.0',
    colors: ['#00ff66', '#ffffff', '#0a0a0f', '#222232'],
    typeDisplay: 'Cabinet Grotesk (Editorial Display / tracking-tight)',
    typeBody: 'Plus Jakarta Sans (Body light)',
    gridSystem: 'Grid Masonry Responsive Layout / Custom Breakpoints',
    interaction: 'Before-After image overlay slider / Instant drawer carts',
    rationale: 'Crafted mobile-optimized landing pages for heavy e-commerce social campaigns. Emphasized clean grid systems, high-contrast action elements, and tactile checkout triggers.'
  }
}

export function CreativeMockup({ id, title, subtitle, device }: CreativeMockupProps) {
  const isBrowser = device === 'browser'
  const spec = PROJECT_SPECS[id] || PROJECT_SPECS['big-mall']

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Device Header Info */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-4 select-none">
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

      {/* Grid: Left Device Mockup, Right Design Technical Specs */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch min-h-[380px]">
        
        {/* Device Container (Left) */}
        <div className="md:col-span-6 flex items-center justify-center p-4 bg-[var(--color-bg)]/30 rounded-xl border border-[var(--color-border)]/40 relative overflow-hidden">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[size:16px_16px]"
               style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)` }} />
          
          {isBrowser ? (
            /* Sleek Brutalist Browser Frame */
            <div className="w-full max-w-[420px] aspect-[16/10] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg flex flex-col overflow-hidden shadow-2xl relative">
              {/* Browser chrome bar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="flex items-center gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                </div>
                <div className="w-32 h-3 bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center rounded">
                  <span className="font-mono text-[6px] text-white/20 truncate px-1.5">
                    design.kenichi.dev/{id}
                  </span>
                </div>
                <div className="w-4" />
              </div>

              {/* Browser Content Canvas */}
              <div className="flex-1 p-3 flex flex-col justify-between relative bg-dot-grid overflow-hidden">
                {id === 'content-mogul' ? (
                  /* Content Mogul Landing Page Scaffold */
                  <div className="flex flex-col h-full justify-between gap-3">
                    {/* Hero banner wireframe */}
                    <div className="text-left flex flex-col gap-1.5 shrink-0">
                      <div className="w-16 h-2.5 bg-[var(--color-orange)]/15 border border-[var(--color-orange)]/30 rounded" />
                      <div className="h-4 w-11/12 bg-white/10 rounded border border-white/5" />
                      <div className="h-2 w-2/3 bg-white/5 rounded" />
                    </div>
                    {/* Form conversion block */}
                    <div className="flex gap-2 shrink-0">
                      <div className="flex-1 h-7 rounded bg-[var(--color-surface)] border border-[var(--color-border)] px-2 flex items-center">
                        <div className="h-1.5 w-16 bg-white/20 rounded" />
                      </div>
                      <div className="w-16 h-7 bg-[var(--color-orange)] text-[var(--color-bg)] rounded flex items-center justify-center font-mono text-[7px] font-bold border border-[var(--color-orange)]">
                        SEND
                      </div>
                    </div>
                    {/* Grid blocks */}
                    <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-[var(--color-border)] p-1.5 bg-[var(--color-surface)] rounded flex flex-col justify-between min-h-0">
                          <div className="h-2 w-6 bg-[var(--color-orange)]/20 rounded" />
                          <div className="h-1.5 w-full bg-white/5 rounded mt-1" />
                          <div className="h-1.5 w-2/3 bg-white/5 rounded mt-0.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Mermade Hair E-Commerce Scaffold */
                  <div className="flex flex-col h-full justify-between gap-3">
                    <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-1.5 shrink-0">
                      <div className="w-12 h-2 bg-white/20 rounded" />
                      <div className="flex gap-1.5">
                        <div className="w-6 h-1.5 bg-white/10 rounded" />
                        <div className="w-6 h-1.5 bg-white/10 rounded" />
                      </div>
                    </div>
                    {/* Hero Product Spotlight */}
                    <div className="flex-1 grid grid-cols-2 gap-3 items-stretch min-h-0">
                      <div className="flex flex-col gap-1.5 justify-center">
                        <div className="h-3 w-full bg-white/10 rounded" />
                        <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                        <div className="h-5 w-16 bg-[var(--color-green)] rounded mt-1" />
                      </div>
                      <div className="border border-dashed border-[var(--color-green)]/30 rounded-lg flex items-center justify-center bg-[var(--color-surface)] relative overflow-hidden">
                        <span className="font-mono text-[6px] text-[var(--color-green)] uppercase tracking-wider block">[ Product ]</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-green)]/5 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )}
                {/* Technical background grids overlay */}
                <div className="absolute inset-0 border border-dashed border-[var(--color-border)]/40 pointer-events-none rounded m-1.5" />
              </div>
            </div>
          ) : (
            /* Sleek Brutalist Phone Frame */
            <div className="w-[230px] h-[450px] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl p-2 relative shrink-0">
              {/* Phone speaker/notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] z-20 flex items-center justify-center">
                <div className="w-6 h-1 rounded-full bg-white/15" />
              </div>

              {/* Inner display screen wrapper */}
              <div className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] overflow-hidden flex flex-col relative pt-7 pb-3 px-3">
                {id === 'big-mall' ? (
                  /* BIG Mall Loyalty App Wireframe Scaffold */
                  <div className="flex flex-col h-full justify-between gap-3">
                    {/* Search Bar */}
                    <div className="h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center px-2.5 gap-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full border border-white/20" />
                      <div className="h-1.5 w-20 bg-white/10 rounded" />
                    </div>
                    
                    {/* Points Loyalty Card (Orange themed) */}
                    <div className="rounded-xl border border-[var(--color-orange)]/40 bg-gradient-to-br from-[var(--color-orange)]/5 to-[var(--color-orange)]/15 p-2.5 flex flex-col justify-between h-24 relative overflow-hidden shrink-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-mono text-[6px] text-[var(--color-orange)] uppercase tracking-wider block">BIG MALL MEMBERSHIP</span>
                          <div className="h-1.5 w-16 bg-white/20 rounded mt-0.5" />
                        </div>
                        <div className="w-3 h-3 rounded bg-white/10" />
                      </div>
                      <div>
                        <span className="font-display font-extrabold text-base text-white">4,850 pts</span>
                        <p className="font-mono text-[6px] text-white/40 uppercase mt-0.5">Expires Dec 2026</p>
                      </div>
                      {/* Tiny grid lines */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 border border-dashed border-[var(--color-orange)]/30 rounded-full" />
                    </div>

                    {/* Deals Header */}
                    <div className="flex justify-between items-center shrink-0">
                      <span className="font-mono text-[7px] text-white/50 uppercase">Exclusive Rewards</span>
                      <span className="font-mono text-[6px] text-[var(--color-orange)] uppercase">View All</span>
                    </div>

                    {/* Deals Scroll Panel */}
                    <div className="flex-1 grid grid-cols-2 gap-2 overflow-hidden min-h-0">
                      {[1, 2].map((i) => (
                        <div key={i} className="border border-[var(--color-border)] rounded-lg p-1.5 bg-[var(--color-bg)] flex flex-col gap-1 justify-between min-h-0">
                          <div className="flex-1 border border-dashed border-white/10 rounded flex items-center justify-center bg-[var(--color-surface)]">
                            <span className="font-mono text-[6px] text-white/30">[ Gift ]</span>
                          </div>
                          <div className="h-1.5 w-10 bg-white/20 rounded" />
                          <div className="h-4 w-full bg-[var(--color-orange)] rounded flex items-center justify-center shrink-0">
                            <span className="font-mono text-[5px] font-bold text-[var(--color-bg)]">REDEEM</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* FUGO Hotels Booking App Wireframe Scaffold */
                  <div className="flex flex-col h-full justify-between gap-3">
                    {/* Location Selector */}
                    <div className="flex flex-col gap-1 shrink-0">
                      <span className="font-mono text-[6px] text-[var(--color-green)] uppercase tracking-wider block">SELECT HOTEL</span>
                      <div className="h-6 rounded border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-between px-2">
                        <div className="h-1.5 w-24 bg-white/20 rounded" />
                        <span className="text-[6px] text-[var(--color-green)]">↓</span>
                      </div>
                    </div>

                    {/* Room Showcase Hero Card */}
                    <div className="rounded-xl border border-[var(--color-border)] p-1.5 bg-[var(--color-bg)] flex flex-col gap-1.5 flex-1 min-h-0">
                      <div className="flex-1 border border-dashed border-[var(--color-green)]/35 rounded-lg flex items-center justify-center bg-[var(--color-surface)] relative overflow-hidden">
                        <span className="font-mono text-[7px] text-[var(--color-green)] uppercase tracking-widest">[ Suite Mockup ]</span>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg)]/80" />
                      </div>
                      <div className="flex justify-between items-center px-1 shrink-0">
                        <div>
                          <div className="h-2 w-16 bg-white/20 rounded" />
                          <div className="h-1.5 w-10 bg-white/10 rounded mt-0.5" />
                        </div>
                        <span className="font-mono text-[7px] font-bold text-[var(--color-green)]">Rp 1.2M/n</span>
                      </div>
                    </div>

                    {/* Booking CTA Button */}
                    <div className="h-7 rounded bg-[var(--color-green)] text-[var(--color-bg)] font-mono text-[8px] font-bold flex items-center justify-center border border-[var(--color-green)] shrink-0 transition-transform duration-300 hover:scale-[1.02]">
                      CONFIRM BOOKING
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sleek Technical Design Spec Panel */}
        <div className="md:col-span-6 border border-[var(--color-border)] bg-[#030509]/60 rounded-xl p-5 flex flex-col justify-between font-mono text-[9px] text-white/70 relative">
          {/* Subtle Corner Markers */}
          <div className="absolute top-2 left-2 text-white/10 select-none">+</div>
          <div className="absolute top-2 right-2 text-white/10 select-none">+</div>
          <div className="absolute bottom-2 left-2 text-white/10 select-none">+</div>
          <div className="absolute bottom-2 right-2 text-white/10 select-none">+</div>

          <div className="flex flex-col gap-4">
            <div className="border-b border-[var(--color-border)]/40 pb-2 mb-1 flex justify-between items-center">
              <span className="font-bold text-[8px] text-[var(--color-green)] uppercase tracking-wider">
                [ SPEC_SCHEMA_REFS ]
              </span>
              <span className="text-[var(--color-muted)] text-[7px] uppercase tracking-widest animate-pulse">ACTIVE_COMPILE</span>
            </div>

            {/* Spec Row 1 */}
            <div className="flex flex-col gap-1">
              <span className="text-[7px] text-[var(--color-muted)] uppercase tracking-wider">Asset Class Type</span>
              <span className="text-white font-medium">{spec.specType}</span>
            </div>

            {/* Spec Row 2: Color System Swatches */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[7px] text-[var(--color-muted)] uppercase tracking-wider">Color Palette Tokens</span>
              <div className="flex flex-wrap items-center gap-2">
                {spec.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-1 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-sm">
                    <span 
                      className="w-2.5 h-2.5 rounded-full border border-white/20 shrink-0" 
                      style={{ backgroundColor: c }} 
                    />
                    <span className="text-[6px] text-white/50">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec Row 3 */}
            <div className="flex flex-col gap-1">
              <span className="text-[7px] text-[var(--color-muted)] uppercase tracking-wider">Typography System</span>
              <div className="flex flex-col gap-0.5 text-white">
                <div>DISP: <span className="text-[var(--color-orange)]">{spec.typeDisplay}</span></div>
                <div>BODY: <span className="text-white/60">{spec.typeBody}</span></div>
              </div>
            </div>

            {/* Spec Row 4 */}
            <div className="flex flex-col gap-1">
              <span className="text-[7px] text-[var(--color-muted)] uppercase tracking-wider">Grid Hierarchy</span>
              <span className="text-white">{spec.gridSystem}</span>
            </div>

            {/* Spec Row 5 */}
            <div className="flex flex-col gap-1">
              <span className="text-[7px] text-[var(--color-muted)] uppercase tracking-wider">Interaction Mechanics</span>
              <span className="text-white">{spec.interaction}</span>
            </div>
          </div>

          {/* Aesthetic Decision Rationale block */}
          <div className="border-t border-[var(--color-border)]/40 pt-4 mt-4">
            <span className="text-[7px] text-[var(--color-muted)] uppercase tracking-wider block mb-1">
              DESIGN_RATIONALE
            </span>
            <p className="font-body text-[10px] leading-relaxed text-white/60 font-light italic">
              &ldquo;{spec.rationale}&rdquo;
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
