import type { Metadata } from 'next'
import { Inter, Splash } from 'next/font/google'

import { MenuProvider } from '@/contexts/MenuContext'

import 'wipe.css'
import '@/styles/styles.scss'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const splash = Splash({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-splash',
})

export const metadata: Metadata = {
  title: 'Nabilis',
  description: 'Thainá Alonso Portfólio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' className={`${inter.variable} ${splash.variable}`}>
      <body className={inter.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  )
}
