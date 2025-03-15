import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Delicias da Rafa',
  description: 'Cestas de café da manhã especiais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="/delicias-logo.jpg"
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
