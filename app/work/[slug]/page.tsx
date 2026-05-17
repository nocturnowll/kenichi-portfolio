import { getAllSlugs, getCaseStudy } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { meta } = getCaseStudy(slug)
  return { title: `${meta.title} — KE/Y`, description: meta.anchor }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { meta, content } = getCaseStudy(slug)

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
      <Link href="/" className="text-sm hover:underline mb-12 inline-block transition-colors" style={{ color: 'var(--color-brand-muted)' }}>
        ← Back to KE/Y
      </Link>

      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--color-brand-orange)', fontFamily: 'var(--font-body)' }}>{meta.role}</p>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)' }} className="text-5xl md:text-6xl mb-4">{meta.title}</h1>
        <p style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>{meta.company} · {meta.period}</p>
        <p className="text-sm mt-2" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-mono)' }}>{meta.anchor}</p>
      </div>

      <article className="prose prose-invert max-w-none" style={{ '--tw-prose-body': 'var(--color-brand-muted)', '--tw-prose-headings': 'var(--color-brand-text)', '--tw-prose-bold': 'var(--color-brand-text)', fontFamily: 'var(--font-body)' } as React.CSSProperties}>
        <MDXRemote source={content} />
      </article>

      <div className="mt-20 pt-8 text-center" style={{ borderTop: '1px solid var(--color-brand-surface)' }}>
        <p className="mb-6" style={{ color: 'var(--color-brand-muted)', fontFamily: 'var(--font-body)' }}>Hiring for a Growth Lead or Founding GTM role?</p>
        <a
          href="mailto:kenichiedbert@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors"
          style={{ backgroundColor: 'var(--color-brand-orange)', color: '#ffffff' }}
        >
          Reach out →
        </a>
      </div>
    </main>
  )
}
