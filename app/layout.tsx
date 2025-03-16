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
  description: 'Cestas de café da manhã especiais e personalizadas',
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
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
