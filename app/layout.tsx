import type { Metadata } from 'next'
import { Header } from '@/widgets/header'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import ThemeProvider from '@/shared/lib/ThemeProvider'
import { ReactNode } from 'react'
import { CssBaseline } from '@mui/material'
import AppLayout from '@/shared/ui/AppLayout'

export const metadata: Metadata = {
  title: 'Резюме Кузьменко Даниил',
  description: 'Резюме Кузьменко Даниил Frontend разработчик',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru" className={roboto.variable}>
    <body>
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeProvider>
        <CssBaseline />
        <AppLayout>
          <Header />
          {children}
        </AppLayout>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  )
}
