import { ProjectsList } from '@/pages/projects/ui/ProjectsList'
import { Box, Typography } from '@mui/material'

export function ProjectsPage() {
  return (
    <main>
      <Box component="section" sx={{ my: 6, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography
          variant={'h2'}
          component={'h1'}
          sx={{
            fontSize: {
              xs: '1.875rem',
              sm: '2rem',
              md: '2.5rem',
            },
            maxWidth: { xs: '358px', sm: 'unset' },
            width: '100%',
            mx: 'auto'
          }}
        >Проекты:</Typography>

        <ProjectsList />
      </Box>
    </main>
  )
}