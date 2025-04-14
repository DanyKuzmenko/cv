import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/widgets/header'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Резюме Кузьменко Даниил',
  description: 'Резюме Кузьменко Даниил Frontend разработчик',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AppRouterCacheProvider>
        <Header />
        {children}
      </AppRouterCacheProvider>

      </body>
    </html>
  )
}
