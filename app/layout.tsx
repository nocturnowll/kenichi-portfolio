import type { Metadata } from 'next'
import './globals.css'
import { RailNav }      from '@/components/RailNav'
import { CustomCursor } from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'Kenichi Yauwanta — Marketing by trade. Systems by obsession.',
  description: '110,000 users. 130 countries. 72 hours. Growth operator and builder based in Indonesia, open to remote roles.',
  openGraph: {
    title: 'KE/Y — Kenichi Yauwanta',
    description: 'Marketing by trade. Systems by obsession.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
        <CustomCursor />
        <RailNav />
        {children}
      </body>
    </html>
  )
}
