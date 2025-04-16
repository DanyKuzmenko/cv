import { AppBar, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material'

const pages = [{label: 'Обо мне', href: '/about-me'}, {label: 'Проекты', href: '/projects'}, {label: 'Ценности', href: '/interests'}]

export function Header() {
  return (
   <AppBar position={'static'}>
     <Container maxWidth={'xl'}>
        <Toolbar>
          <Box>
            {pages.map((page) => (
              <Button key={page.label}>
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
     </Container>
   </AppBar>
  )
}
