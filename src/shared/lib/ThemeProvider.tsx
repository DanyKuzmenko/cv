import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import theme from '@/app/theme'
import { ReactNode } from 'react'

export default function ThemeProvider({
                                        children,
                                      }: Readonly<{
  children: ReactNode
}>) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}