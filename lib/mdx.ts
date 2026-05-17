import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/work')

export type CaseStudyMeta = {
  slug: string
  title: string
  role: string
  company: string
  period: string
  anchor: string
  heroImage: string
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getCaseStudy(slug: string): { meta: CaseStudyMeta; content: string } {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: { slug, ...data } as CaseStudyMeta, content }
}
