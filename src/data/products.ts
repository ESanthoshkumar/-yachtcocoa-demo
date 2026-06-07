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
  {
    id: 'gifts',
    label: 'Gift Packs',
    description: 'Personalised gift packs with photo print and surprise wrapping',
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
  {
    id: 'gift-1',
    name: 'Sweet Surprise Pack',
    description: 'Two artisan bars in a photo-printed, hand-wrapped surprise box.',
    longDescription:
      'A thoughtful gift for someone special. Choose two of our finest bars, upload a cherished photo, and we print it on the cover and wrap it beautifully for a delightful surprise reveal.',
    price: 45,
    category: 'gifts',
    image: '/product/dark.png',
    badge: 'For Loved Ones',
    rating: 5.0,
    reviews: 67,
    origin: 'Assorted',
    weight: '160g',
    includes: [
      '2 artisan chocolate bars of your choice',
      'Your photo printed on the gift cover',
      'Hand-wrapped surprise box with ribbon',
      'Personal message gift tag',
    ],
  },
  {
    id: 'gift-2',
    name: 'Love & Cocoa Box',
    description: 'Three bars with photo cover print and premium surprise wrapping.',
    longDescription:
      'Our most popular gift for partners, parents, and dear friends. Three premium bars nestled in an elegant box — your photo printed on the lid, wrapped in your chosen style for an unforgettable unboxing moment.',
    price: 68,
    category: 'gifts',
    image: '/product/almond.png',
    badge: 'Most Gifted',
    rating: 5.0,
    reviews: 94,
    origin: 'Assorted',
    weight: '250g',
    includes: [
      '3 premium chocolate bars',
      'Photo printed on gift cover',
      'Choice of 3 wrapping styles',
      'Surprise ribbon & gift tag',
      'Complimentary greeting card',
    ],
  },
  {
    id: 'gift-3',
    name: 'Grand Gesture Set',
    description: 'The complete collection with luxury wrap and photo cover print.',
    longDescription:
      'The ultimate expression of love. All five Yacht Cocoa creations presented in a luxury gift box with your photo beautifully printed on the cover, finished with premium wrapping for a grand surprise.',
    price: 95,
    category: 'gifts',
    image: '/product/DateChoco.png',
    badge: 'Premium',
    rating: 5.0,
    reviews: 41,
    origin: 'Assorted',
    weight: '450g',
    includes: [
      'All 5 artisan chocolate varieties',
      'Large-format photo print on cover',
      'Premium festive or navy wrapping',
      'Handwritten-style message card',
      'Luxury surprise unboxing experience',
    ],
  },
]

export function getGiftPacks(): Product[] {
  return products.filter((p) => p.category === 'gifts')
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}
