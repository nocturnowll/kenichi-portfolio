'use client'
import { useCountUp } from '@/lib/hooks/useCountUp'

const stats = [
  { value: 5, label: 'production systems built solo' },
  { value: 110000, suffix: '+', label: 'users reached via community & partnerships' },
  { value: 8, suffix: 'h', label: 'job scraper cadence — running right now' },
  { value: 0, label: 'lines of code written without AI assistance' },
]

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp(stat.value, 1500)
  const display = stat.value === 0 ? '0' : `${count.toLocaleString()}${stat.suffix ?? ''}`
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="pt-6" style={{ borderTop: '1px solid #1e2d3d' }}>
      <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-orange)' }} className="text-4xl md:text-5xl mb-2">{display}</p>
      <p className="text-sm" style={{ color: '#4d5a6e', fontFamily: 'var(--font-body)' }}>{stat.label}</p>
    </div>
  )
}

export function StatCounters() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map(s => <StatItem key={s.label} stat={s} />)}
    </div>
  )
}
