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
      sx={{ boxShadow: 0, bgColor: 'transparent', backgroundImage: 'none' }}
    >
      <Container maxWidth={'lg'}>
        <Toolbar
          sx={{
            backdropFilter: 'blur(24px)',
            border: '1px solid hsla(220, 20%, 25%, 0.6)',
            borderRadius: '8px',
            backgroundColor: '5 7 10',
            boxShadow:
              'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px;',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.label} variant='text' color='info'>
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
