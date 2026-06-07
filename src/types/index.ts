export type Category = 'bars' | 'truffles' | 'gifts' | 'drinking'

export type GiftWrapStyle = 'navy' | 'rose' | 'festive'

export interface GiftCustomization {
  recipientName: string
  message: string
  photoUrl: string | null
  wrapStyle: GiftWrapStyle
}

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
  includes?: string[]
}

export interface CartItem {
  cartItemId: string
  product: Product
  quantity: number
  gift?: GiftCustomization
}

export interface CategoryInfo {
  id: Category
  label: string
  description: string
}

export interface GiftWrapOption {
  id: GiftWrapStyle
  label: string
  description: string
  ribbon: string
  paper: string
}
