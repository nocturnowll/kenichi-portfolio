import type { Metadata } from 'next'
import { Bricolage_Grotesque, Onest, Geist_Mono } from 'next/font/google'
import './globals.css'
import { RailNav }      from '@/components/RailNav'
import { CustomCursor } from '@/components/ui/CustomCursor'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

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
    <html lang="en" className={`${bricolage.variable} ${onest.variable} ${geistMono.variable}`}>
      <body style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
        <CustomCursor />
        <RailNav />
        {children}
      </body>
    </html>
  )
}

