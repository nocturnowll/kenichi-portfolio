import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Kenichi Yauwanta — Growth Operator & Builder',
  description: '110,000 users. 130 countries. 72 hours. Community and partnerships that drove a product to #1 in category globally. Growth operator based in Indonesia, open to remote roles.',
  openGraph: {
    title: 'KE/Y — Kenichi Yauwanta',
    description: 'Growth operator & builder. Open to remote roles globally.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen" style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand-text)', fontFamily: 'var(--font-body)' }}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
