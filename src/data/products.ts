import type { CategoryInfo, Product } from '../types'

export const categories: CategoryInfo[] = [
  {
    id: 'bars',
    label: 'Chocolate Bars',
    description: 'Rich bars crafted with premium cacao and natural ingredients',
  },
  {
    id: 'truffles',
    label: 'Specialty',
    description: 'Unique flavour combinations for the discerning palate',
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Sail Dark',
    description: 'Intense dark chocolate with deep cocoa notes and a smooth finish.',
    longDescription:
      'Our signature dark chocolate bar is crafted from premium cacao for a bold, velvety experience. Rich cocoa flavour with a clean, satisfying finish — perfect for true dark chocolate lovers.',
    price: 18,
    category: 'bars',
    image: '/product/dark.png',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 128,
    origin: 'Venezuela',
    weight: '80g',
  },
  {
    id: '2',
    name: 'Harbor White Chocolate',
    description: 'Silky white chocolate with creamy vanilla and a gentle sweetness.',
    longDescription:
      'Luxuriously smooth white chocolate made with the finest cocoa butter. Delicate vanilla notes and a melt-in-your-mouth texture make this a refined everyday indulgence.',
    price: 16,
    category: 'bars',
    image: '/product/whitecho.png',
    rating: 4.7,
    reviews: 94,
    origin: 'Ecuador',
    weight: '80g',
  },
  {
    id: '3',
    name: 'Marcona Almond Crunch',
    description: 'Milk chocolate studded with toasted Marcona almonds.',
    longDescription:
      'Creamy milk chocolate meets buttery Marcona almonds in every bite. A satisfying crunch paired with balanced sweetness — inspired by Mediterranean confectionery traditions.',
    price: 20,
    category: 'bars',
    image: '/product/almond.png',
    badge: 'Limited',
    rating: 4.8,
    reviews: 73,
    origin: 'Spain',
    weight: '90g',
  },
  {
    id: '4',
    name: 'Medjool Date Delight',
    description: 'Chocolate infused with sweet Medjool dates and warm spices.',
    longDescription:
      'A distinctive blend of fine chocolate and naturally sweet Medjool dates. Warm, caramel-like notes with a soft chew — a modern twist on a timeless pairing.',
    price: 22,
    category: 'truffles',
    image: '/product/DateChoco.png',
    badge: 'New',
    rating: 4.9,
    reviews: 56,
    origin: 'Morocco',
    weight: '85g',
  },
  {
    id: '5',
    name: 'Salted Peanut Praline',
    description: 'Creamy chocolate with roasted peanuts and a touch of sea salt.',
    longDescription:
      'Roasted peanuts folded into smooth chocolate with a whisper of sea salt. A classic combination elevated with premium ingredients and artisan craftsmanship.',
    price: 18,
    category: 'bars',
    image: '/product/peanut.png',
    badge: 'Popular',
    rating: 4.8,
    reviews: 89,
    origin: 'Colombia',
    weight: '85g',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}
