'use client'
import { useTypewriter } from '@/lib/hooks/useTypewriter'
import type { TypewriterLine } from '@/lib/hooks/useTypewriter'

export function Terminal({ session }: { session: TypewriterLine[] }) {
  const { displayText, isComplete } = useTypewriter(session, 25)

  return (
    <div style={{
      borderRadius: '10px', overflow: 'hidden',
      border: '1px solid var(--color-engine-border)',
      backgroundColor: 'oklch(8% 0.005 265)',
      fontFamily: 'var(--font-mono)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '12px 16px',
        borderBottom: '1px solid var(--color-engine-border)',
        backgroundColor: 'oklch(10% 0.006 265)',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28c840', display: 'inline-block' }} />
        <span style={{ marginLeft: 12, fontSize: 12, color: 'var(--color-engine-dim)', fontFamily: 'var(--font-mono)' }}>job-hunter — zsh</span>
      </div>
      <div style={{ padding: '20px', minHeight: 200 }}>
        <pre style={{
          fontSize: 13, lineHeight: 1.65, whiteSpace: 'pre-wrap',
          color: 'var(--color-engine-text)', margin: 0,
          fontFamily: 'var(--font-mono)',
        }}>
          {displayText.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {line.startsWith('✓')
                ? <span style={{ color: 'var(--color-engine-green)' }}>{line}</span>
                : line.startsWith('$')
                  ? <span style={{ color: 'var(--color-engine-amber)' }}>{line}</span>
                  : line}
            </span>
          ))}
          {!isComplete && (
            <span style={{
              display: 'inline-block', width: 8, height: 14, marginLeft: 2,
              backgroundColor: 'var(--color-engine-text)',
              animation: 'blink 1s step-end infinite',
            }} />
          )}
        </pre>
      </div>
    </div>
  )
}
