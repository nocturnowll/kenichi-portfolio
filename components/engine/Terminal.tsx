'use client'
import { useTypewriter } from '@/lib/hooks/useTypewriter'
import type { TypewriterLine } from '@/lib/hooks/useTypewriter'

export function Terminal({ session }: { session: TypewriterLine[] }) {
  const { displayText, isComplete } = useTypewriter(session, 28)

  return (
    <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#0a0e14', border: '1px solid #1e2d3d', fontFamily: 'var(--font-mono)' }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid #1e2d3d', backgroundColor: '#0d1117' }}>
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
        <span className="ml-4 text-xs" style={{ color: '#4d5a6e' }}>job-hunter — zsh</span>
      </div>
      <div className="p-5" style={{ minHeight: 200 }}>
        <pre className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: '#a6b3c5' }}>
          {displayText.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line.startsWith('✓') ? <span style={{ color: '#28c840' }}>{line}</span>
                : line.startsWith('→') ? <span style={{ color: '#a6b3c5' }}>{line}</span>
                : line.startsWith('$') ? <span style={{ color: '#e3b341' }}>{line}</span>
                : line}
            </span>
          ))}
          {!isComplete && <span className="inline-block w-2 h-4 ml-0.5 animate-blink" style={{ backgroundColor: '#a6b3c5' }} />}
        </pre>
      </div>
    </div>
  )
}
