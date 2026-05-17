import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Kenichi Yauwanta — Growth Operator & Builder',
  description: '110,000 users. 130 countries. 72 hours. Community and partnerships. Growth operator based in Indonesia, open to remote roles.',
  openGraph: {
    title: 'KE/Y — Kenichi Yauwanta',
    description: 'Growth operator & builder. Open to remote roles globally.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
