import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import { ProjectType } from '@/entities/project'
import Link from 'next/link'

export function ProjectCard(project: ProjectType) {
  return (
    <Card sx={{ maxWidth: { xs: '358px' }, mx: 'auto' }}>
      <CardActionArea LinkComponent={Link} href={`/project/${project.routeName}`}>
        <CardMedia sx={{ height: { xs: '202px', md: '210px' } }} image={project.image} title={project.name}>
          <Chip
            sx={{ position: 'absolute', top: '12px', right: '12px' }}
            label={project.status}
            size={'small'}
            color={'success'}
          />
        </CardMedia>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant={'h5'} component={'h3'}>{project.name}
            </Typography>

            <Chip label={project.year} variant={'outlined'} size={'small'} />
          </Box>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {project.frameworks.map((framework, index) => (
              <Grid key={index}>
                <Chip label={framework} variant={'outlined'} size={'small'} color={'primary'} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
