import { Container } from '@mui/material'

export function HomePage() {
  return (
    <Container
      sx={{
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent);',
          height: '100vh'
      }}
    ></Container>
  )
}
