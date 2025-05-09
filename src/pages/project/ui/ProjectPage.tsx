import { Box, Typography } from '@mui/material'
import { projects } from '@/entities/project'
import { redirect } from 'next/navigation'

export async function ProjectPage({
                                    params,
                                  }: {
  params: Promise<{ routeName: string }>
}) {
  const { routeName } = await params

  const currentProject = projects.find((project) => project.routeName === routeName)

  if (!currentProject) {
    redirect('/')
  }

  return (
    <Box>
      <Typography>{routeName}</Typography>
    </Box>
  )
}