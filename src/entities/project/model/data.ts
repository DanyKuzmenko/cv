import { ProjectType } from '@/entities/project/model/types'

export const projects: ProjectType[] = [
  {
    id: 1,
    routeName: 'movies',
    url: 'https://movies-explorer-frontend-eight.vercel.app/',
    image: '/movies.png',
    name: 'Movies',
    frameworks: ['React'],
    status: 'easy',
    year: 2022
  },
  {
    id: 2,
    routeName: 'russian-travel',
    url: 'https://danykuzmenko.github.io/russian-travel/',
    image: '/russianTravel.png',
    name: 'Russian travel',
    frameworks: ['html', 'css'],
    status: 'easy',
    year: 2022
  },
]