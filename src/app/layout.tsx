import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

import { MenuProvider } from '@/contexts/MenuContext'

import 'wipe.css'
import '@/styles/styles.scss'

const quicksand = Quicksand({
  variable: '--font-quicksand',
  weight: ['300', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thainá Alonso Portfólio',
  description: 'Thainá Alonso Portfólio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={quicksand.variable}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  )
}
