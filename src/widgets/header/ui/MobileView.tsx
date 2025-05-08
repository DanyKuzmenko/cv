'use client'

import AppLogo from '@/shared/ui/AppLogo'
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Link from 'next/link'
import { useState } from 'react'
import { pages } from '@/widgets/header/model/pages'


export default function MobileView() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <Box sx={{
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}>
      <AppLogo />

      <IconButton onClick={openDrawer} sx={{ mr: 1 }}>
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
              <Link key={label} href={href} onClick={closeDrawer}>
                <Typography variant={'button'}>
                  {label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}