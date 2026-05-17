'use client'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kenichi-portfolio'

export function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px',
      backgroundColor: 'var(--color-bg)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <Link href="/" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '18px',
        color: 'var(--color-text)',
        textDecoration: 'none',
        letterSpacing: '-0.03em',
      }}>
        KE<span style={{ color: 'var(--color-accent)' }}>/</span>Y
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {[['#career', 'work'], ['#the-engine', 'engine'], ['#connect', 'connect']].map(([href, label]) => (
          <a key={href} href={href} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-muted)',
            textDecoration: 'none',
            fontWeight: 500,
          }}>{label}</a>
        ))}
        <a href={`${BASE}/resume/kenichi-yauwanta-growth-resume.pdf`} download style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontWeight: 600,
          padding: '8px 18px',
          borderRadius: '6px',
          backgroundColor: 'var(--color-accent)',
          color: 'white',
          textDecoration: 'none',
        }}>
          Resume ↓
        </a>
      </div>
    </nav>
  )
}
