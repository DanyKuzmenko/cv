import { Box, Typography } from '@mui/material'
import meImage from '@/widgets/heroBlock/assets/me.png'
import Image from 'next/image'

export function HeroBlock() {
  return (
    <Box sx={{
      mt: { xs: 4, sm: 6, md: 10 },
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 4, sm: 'unset' },
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Box>
        <Typography
          variant={'h3'}
          component={'p'}
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.5rem',
              md: '1.875rem',
            },
          }}
        >Привет!</Typography>
        <Typography
          variant={'h2'}
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '1.875rem',
              md: '2rem',
            },
          }}
        >Я Кузьменко Даниил</Typography>
        <Typography
          variant={'h1'}
          sx={{
            fontSize: {
              xs: '1.875rem',
              sm: '2rem',
              md: '2.5rem',
            },
          }}
        >Frontend разработчик</Typography>
      </Box>
      <Box sx={{
        position: 'relative',
        width: { xs: 200, md: 400 },
        height: { xs: 200, md: 400 },
        borderRadius: '100%',
        overflow: 'hidden',
      }}>
        <Image
          src={meImage}
          alt={'Кузьменко Даниил'}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 200px, 400px"
        />
      </Box>
    </Box>
  )
}