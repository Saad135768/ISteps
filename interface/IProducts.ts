export interface IProduct {
    id: string
    name: string
    category: string
    currency: string
    price: number
    bestseller: boolean
    featured: boolean
    details: boolean
    image: { src: string; alt: string }
    weight?: number
    thickness?: number
    description?: string
    recommendations?: { src: string; alt: string }[]
  }
  