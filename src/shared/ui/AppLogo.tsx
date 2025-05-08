import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/public/logo.png'
import { Box } from '@mui/material'

export default function AppLogo() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 32, md: 40 },
        height: { xs: 32, md: 40 },
        ml: { xs: 1.5, md: 2 },
        borderRadius: '100%',
        overflow: 'hidden',
      }}
    >
      <Link
        href={'/'}
      >
        <Image src={logoImage} alt={'Логотип'} fill />
      </Link>
    </Box>
  )
}