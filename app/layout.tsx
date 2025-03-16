import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Delicias da Rafa',
  description: 'Cestas de café da manhã especiais',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/icon.png',
        sizes: '192x192',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
    },
  },
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
          rel="preload"
          href="/delicias-logo.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
