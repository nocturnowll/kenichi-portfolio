import Link from 'next/link'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  download?: boolean
  external?: boolean
}

export function Button({ href, children, variant = 'primary', download, external }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200'
  const styles = {
    primary: `${base} bg-[var(--color-brand-orange)] text-white hover:bg-[var(--color-brand-orange-muted)]`,
    ghost: `${base} border border-[var(--color-brand-muted)] text-[var(--color-brand-text)] hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]`,
  }
  if (external || download) {
    return (
      <a href={href} className={styles[variant]} download={download} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }
  return <Link href={href} className={styles[variant]}>{children}</Link>
}
