export interface ModelProfileData {
  id: string
  name: string
  images: string[]
  height: number
  weight: number
  measurements: string
  experience: string
  categories: string[]
  portfolio?: string
  availability: string
  bio: string
}

export interface Model {
  id: string
  name: string
  image: string
  height: number
  categories: string[]
  experience: string
}
