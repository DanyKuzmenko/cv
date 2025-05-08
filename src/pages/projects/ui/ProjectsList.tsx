import { Grid } from '@mui/material'
import { ProjectCard } from '@/pages/projects/ui/ProjectCard'
import { projects } from '@/pages/projects/model/data'

export function ProjectsList() {
  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
      {projects.map(project => (
        <Grid key={project.name} size={1}>
          <ProjectCard {...project}  />
        </Grid>
      ))}
    </Grid>
  )
}