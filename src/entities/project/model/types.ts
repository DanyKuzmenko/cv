export type ProjectType = {
  id: number
  routeName: string
  url: string
  image: string
  name: string
  frameworks: string[]
  status: 'easy' | 'middle' | 'hard'
  year: number
}