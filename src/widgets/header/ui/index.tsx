import { AppBar, Button, Container, Toolbar, Box } from '@mui/material'

const pages = [
  { label: 'Обо мне', href: '/about-me' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Опыт работы', href: '/work-experience' },
]

export function Header() {
  return (
    <AppBar
      position={'fixed'}
      enableColorOnDark
      sx={{
        boxShadow: 0,
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        mt: '24px',
      }}
    >
      <Container maxWidth={'lg'}>
        <Toolbar
          variant='dense'
          disableGutters
          sx={{
            backdropFilter: 'blur(24px)',
            border: '1px solid hsla(220, 20%, 25%, 0.6)',
            borderRadius: '8px',
            boxShadow:
              'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px;',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ label }) => (
              <Button key={label} variant='text' color='info'>
                {label}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  )
}
