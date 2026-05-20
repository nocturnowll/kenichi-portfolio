'use client'

import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'hero',        label: 'Intro' },
  { id: 'community',   label: 'Community' },
  { id: 'the-work',    label: 'Builder' },
  { id: 'the-engine',  label: 'Engine' },
  { id: 'connect',     label: 'Connect' },
]

export function RailNav() {
  const [activeId, setActiveId] = useState<string>('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const entries = new Map<string, number>()

    observerRef.current = new IntersectionObserver(
      (intersectionEntries) => {
        for (const entry of intersectionEntries) {
          const sectionId = entry.target.id ?? ''
          entries.set(sectionId, entry.intersectionRatio)
        }

        let bestId = activeId
        let bestRatio = -1
        entries.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestRatio > 0.15) {
          setActiveId(bestId)
        }
      },
      { 
        rootMargin: '-30% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    )

    const observer = observerRef.current

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id)
      if (el) {
        observer.observe(el)
      }
    }

    return () => observer.disconnect()
  }, [activeId])

  function handleClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-7 top-1/2 -translate-y-1/2 z-50 xl:flex hidden flex-col gap-[18px] items-end select-none"
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id
        const key = section.id === '' ? 'hero' : section.id

        return (
          <button
            key={key}
            onClick={() => handleClick(section.id)}
            aria-label={`Go to ${section.label}`}
            className="flex items-center gap-2 bg-transparent border-0 cursor-pointer p-0 outline-none group"
          >
            <span
              className={`font-mono text-[9px] tracking-[0.14em] uppercase transition-all duration-300 ease-out whitespace-nowrap select-none ${
                isActive
                  ? 'text-[var(--color-accent)] opacity-100 translate-x-0'
                  : 'text-[var(--color-muted)] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'
              }`}
            >
              {section.label}
            </span>
            <div
              className={`h-[1.5px] rounded-[2px] shrink-0 transition-all duration-300 ease-out ${
                isActive
                  ? 'w-7 bg-[var(--color-accent)]'
                  : 'w-3 bg-white/20 group-hover:bg-white/60 group-hover:w-4'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}

