'use client'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12" style={{ background: 'linear-gradient(to bottom, rgba(17,17,17,0.95), transparent)' }}>
      <Link href="/" className="text-xl text-[var(--color-brand-text)] tracking-tight hover:text-[var(--color-brand-orange)] transition-colors" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
        KE<span style={{ color: 'var(--color-brand-orange)' }}>/</span>Y
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm text-[var(--color-brand-muted)]">
        <a href="#career" className="hover:text-[var(--color-brand-text)] transition-colors">career</a>
        <a href="#the-work" className="hover:text-[var(--color-brand-text)] transition-colors">the work</a>
        <a href="#the-engine" className="hover:text-[var(--color-brand-text)] transition-colors">the engine</a>
        <a href="#connect" className="hover:text-[var(--color-brand-text)] transition-colors">connect</a>
        <a
          href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`}
          download
          className="border border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] px-4 py-1.5 rounded-full text-xs hover:bg-[var(--color-brand-orange)] hover:text-white transition-all"
        >
          Resume ↓
        </a>
      </div>
    </nav>
  )
}
