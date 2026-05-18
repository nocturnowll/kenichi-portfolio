'use client'

import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: '',            label: 'Intro' },
  { id: 'community',   label: 'Community' },
  { id: 'the-work',    label: 'Builder' },
  { id: 'the-engine',  label: 'Engine' },
  { id: 'connect',     label: 'Connect' },
]

export function RailNav() {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const entries = new Map<string, number>()

    observerRef.current = new IntersectionObserver(
      (intersectionEntries) => {
        for (const entry of intersectionEntries) {
          const sectionId = entry.target.getAttribute('data-rail-id') ?? ''
          entries.set(sectionId, entry.intersectionRatio)
        }

        let bestId = ''
        let bestRatio = -1
        entries.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestRatio > 0) setActiveId(bestId)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    const observer = observerRef.current

    for (const section of SECTIONS) {
      if (section.id === '') {
        const heroEl = document.querySelector('.snap-section')
        if (heroEl) {
          heroEl.setAttribute('data-rail-id', '')
          observer.observe(heroEl)
        }
      } else {
        const el = document.getElementById(section.id)
        if (el) {
          el.setAttribute('data-rail-id', section.id)
          observer.observe(el)
        }
      }
    }

    return () => observer.disconnect()
  }, [])

  function handleClick(id: string) {
    if (id === '') {
      document.querySelector('.snap-container')?.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      aria-label="Page sections"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        alignItems: 'flex-end',
      }}
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id
        const key = section.id === '' ? 'hero' : section.id

        return (
          <button
            key={key}
            onClick={() => handleClick(section.id)}
            aria-label={`Go to ${section.label}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: isActive ? 'var(--color-accent)' : 'var(--color-muted)',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.25s ease, color 0.25s ease',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}>
              {section.label}
            </span>
            <div style={{
              width: isActive ? '28px' : '12px',
              height: '1.5px',
              backgroundColor: isActive ? 'var(--color-accent)' : 'oklch(35% 0.008 265)',
              borderRadius: '2px',
              transition: 'width 0.3s ease, background-color 0.3s ease',
              flexShrink: 0,
            }} />
          </button>
        )
      })}
    </nav>
  )
}
