export type ProjectType = {
  url: string
  image: string
  name: string
  frameworks: string[]
  status: 'easy' | 'middle' | 'hard'
  year: number
}