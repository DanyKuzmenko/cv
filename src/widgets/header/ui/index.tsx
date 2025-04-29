'use client'

import { AppBar, Container, Toolbar, Box, IconButton, Drawer, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useState } from 'react'

const pages = [
  { label: 'Обо мне', href: '/about-me' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Опыт работы', href: '/work-experience' },
]

export function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <AppBar
      position={'fixed'}
      enableColorOnDark
      sx={{
        boxShadow: 0,
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        mt: 3,
      }}
    >
      <Container maxWidth={'lg'}>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            backdropFilter: 'blur(24px)',
            border: '1px solid hsla(220, 20%, 25%, 0.6)',
            borderRadius: '8px',
            boxShadow:
              'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px;',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: { xs: 'unset', md: 'auto' }, gap: 4 }}>
            {pages.map(({ label, href }) => (
              <Link key={label} href={href} color="inherit" underline={'none'} variant={'button'}>
                {label}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton onClick={openDrawer}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor={'top'} open={isDrawerOpen} onClose={closeDrawer}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={closeDrawer}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {pages.map(({ label, href }) => (
                    <Link key={label} href={href} color="inherit" underline={'none'} variant={'button'}>{label}</Link>
                  ))}
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
