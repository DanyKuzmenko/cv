import { Container } from '@mui/material'
import { ReactNode } from 'react'

export default function AppLayout({
                                    children,
                                  }: Readonly<{
  children: ReactNode
}>) {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent);',
        height: '100vh',
        width: '100vw',
        pt: 10,
      }}
    >
      <Container maxWidth={'lg'}>
        {children}
      </Container>
    </Container>
  )
}