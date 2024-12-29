import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { MenuProvider } from '@/contexts/MenuContext'

import 'wipe.css'
import '@/styles/styles.scss'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

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
    <html lang="pt-br">
      <body className={inter.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  )
}
