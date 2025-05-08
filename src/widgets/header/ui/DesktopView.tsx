import AppLogo from '@/shared/ui/AppLogo'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { pages } from '@/widgets/header/model/pages'

export default function DesktopView() {
  return (
    <Box sx={{
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}>
      <AppLogo />

      <Box sx={{ mx: { xs: 'unset', md: 'auto' }, display: 'flex', gap: 4 }}>
        {pages.map(({ label, href }) => (
          <Link key={label} href={href}>
            <Typography variant={'button'}>
              {label}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  )
}