import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impulsa - Tu aliado financiero',
  description: 'Descubre nuestros productos financieros diseñados para impulsar tu crecimiento económico.'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
