export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-orange)] font-medium">
      {children}
    </span>
  )
}
