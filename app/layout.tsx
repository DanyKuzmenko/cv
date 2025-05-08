import type { Metadata } from 'next'
import { Header } from '@/widgets/header'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import ThemeProvider from '@/shared/lib/ThemeProvider'
import { ReactNode } from 'react'
import { Box, CssBaseline } from '@mui/material'
import AppLayout from '@/shared/ui/AppLayout'
import './global.css'

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
    <Box component={'body'}>
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <ThemeProvider>
          <CssBaseline />
          <AppLayout>
            <Header />
            {children}
          </AppLayout>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </Box>
    </html>
  )
}
