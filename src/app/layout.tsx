import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Menu from '@/components/ui/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'guik.tattoo',
  description: 'Tatuagens Geek',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
