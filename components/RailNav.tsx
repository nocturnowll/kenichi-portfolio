'use client'

import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: '',           num: '00', label: 'Hero' },
  { id: 'about',      num: '01', label: 'halo!' },
  { id: 'curious',    num: '02', label: 'Curious' },
  { id: 'career',     num: '03', label: 'Community' },
  { id: 'the-work',   num: '04', label: 'Builder' },
  { id: 'the-engine', num: '05', label: 'Engine' },
  { id: 'tools',      num: '06', label: 'Tools' },
  { id: 'connect',    num: '07', label: 'Connect' },
]

export function RailNav() {
  const [activeId, setActiveId] = useState<string>('')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
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

        if (bestRatio > 0) {
          setActiveId(bestId)
        }
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

    return () => {
      observer.disconnect()
    }
  }, [])

  function handleClick(id: string) {
    if (id === '') {
      const container = document.querySelector('.snap-container')
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        left: '32px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
      aria-label="Page sections"
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id
        const isHovered = hoveredId === section.id

        const barWidth = isActive ? '36px' : isHovered ? '18px' : '16px'
        const barColor = isActive
          ? 'var(--color-accent)'
          : isHovered
          ? 'var(--color-text)'
          : 'var(--color-muted)'

        const textColor = isActive
          ? 'var(--color-accent)'
          : isHovered
          ? 'var(--color-text)'
          : 'var(--color-muted)'

        return (
          <div
            key={section.id === '' ? 'hero' : section.id}
            onClick={() => handleClick(section.id)}
            onMouseEnter={() => setHoveredId(section.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
            aria-label={`Go to ${section.label}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleClick(section.id)
              }
            }}
          >
            <div
              style={{
                width: barWidth,
                height: '1px',
                background: barColor,
                transition: 'width 0.3s ease, background 0.3s ease',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: textColor,
                transition: 'opacity 0.2s ease, color 0.3s ease',
                whiteSpace: 'nowrap',
                userSelect: 'none',
              }}
            >
              {section.num}
              <span
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                  pointerEvents: 'none',
                }}
              >
                {' · '}{section.label}
              </span>
            </span>
          </div>
        )
      })}
    </nav>
  )
}
