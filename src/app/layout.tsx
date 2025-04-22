import type { Metadata } from 'next'

import './globals.css'

import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Impulsa',
  description: 'The best fintech for startups'
}

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  )
}
