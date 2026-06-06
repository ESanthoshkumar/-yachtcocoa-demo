export type Category = 'bars' | 'truffles' | 'gifts' | 'drinking'

export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  category: Category
  image: string
  badge?: string
  rating: number
  reviews: number
  origin: string
  weight: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CategoryInfo {
  id: Category
  label: string
  description: string
}
