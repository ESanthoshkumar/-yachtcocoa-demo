import type { CategoryInfo, Product } from '../types'

export const categories: CategoryInfo[] = [
  {
    id: 'bars',
    label: 'Chocolate Bars',
    description: 'Single-origin bars with exceptional terroir',
  },
  {
    id: 'truffles',
    label: 'Truffles',
    description: 'Hand-rolled confections with rare fillings',
  },
  {
    id: 'gifts',
    label: 'Gift Sets',
    description: 'Curated collections for every occasion',
  },
  {
    id: 'drinking',
    label: 'Drinking Chocolate',
    description: 'Velvety sipping chocolate for quiet moments',
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Sail 85%',
    description: 'Deep dark chocolate with notes of espresso and sea salt.',
    longDescription:
      'Crafted from Venezuelan Criollo beans, this 85% dark bar delivers an intense, velvety experience. Hints of espresso and a whisper of Atlantic sea salt evoke evenings on the open water.',
    price: 18,
    category: 'bars',
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=600&q=80',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 128,
    origin: 'Venezuela',
    weight: '80g',
  },
  {
    id: '2',
    name: 'Harbor Milk 42%',
    description: 'Creamy milk chocolate with caramel and toasted almond.',
    longDescription:
      'A smooth 42% milk chocolate enriched with house-made caramel and toasted Marcona almonds. Balanced sweetness meets a gentle maritime breeze of vanilla.',
    price: 16,
    category: 'bars',
    image: 'https://images.unsplash.com/photo-1577735543554-b77ab63447bb?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 94,
    origin: 'Ecuador',
    weight: '80g',
  },
  {
    id: '3',
    name: 'Golden Truffle Collection',
    description: 'Twelve hand-rolled truffles in a lacquered gift box.',
    longDescription:
      'An assortment of twelve truffles featuring champagne ganache, salted caramel, raspberry rose, and dark rum. Each piece is finished with edible gold leaf.',
    price: 68,
    category: 'truffles',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=600&q=80',
    badge: 'Limited',
    rating: 5.0,
    reviews: 56,
    origin: 'Belgium',
    weight: '240g',
  },
  {
    id: '4',
    name: 'Sea Salt Caramel Truffles',
    description: 'Six truffles with Fleur de Sel and burnt caramel.',
    longDescription:
      'Rich dark chocolate shells encase a flowing centre of burnt caramel infused with Fleur de Sel from Brittany. A study in contrast — sweet, salty, sublime.',
    price: 32,
    category: 'truffles',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 73,
    origin: 'France',
    weight: '120g',
  },
  {
    id: '5',
    name: 'Captain\'s Selection',
    description: 'Premium gift set with bars, truffles, and drinking chocolate.',
    longDescription:
      'Our signature gift set includes two chocolate bars, eight truffles, and a tin of drinking chocolate — all presented in a navy lacquer box with gold embossing.',
    price: 120,
    category: 'gifts',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    badge: 'Gift Favorite',
    rating: 4.9,
    reviews: 41,
    origin: 'Assorted',
    weight: '680g',
  },
  {
    id: '6',
    name: 'Voyage Duo',
    description: 'Two bars and a tin of drinking chocolate in a gift pouch.',
    longDescription:
      'Perfect for first-time tasters. Includes our Midnight Sail 85% bar, Harbor Milk 42% bar, and a 200g tin of Classic Drinking Chocolate.',
    price: 54,
    category: 'gifts',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviews: 38,
    origin: 'Assorted',
    weight: '360g',
  },
  {
    id: '7',
    name: 'Classic Drinking Chocolate',
    description: 'Rich, velvety hot chocolate for slow mornings.',
    longDescription:
      'Stone-ground cocoa blended with organic cane sugar and a touch of Madagascar vanilla. Whisk into warm milk for a cup that feels like a harbour at dawn.',
    price: 28,
    category: 'drinking',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80',
    badge: 'New',
    rating: 4.8,
    reviews: 62,
    origin: 'Peru',
    weight: '300g',
  },
  {
    id: '8',
    name: 'Spiced Aztec Elixir',
    description: 'Drinking chocolate with cinnamon, chili, and orange zest.',
    longDescription:
      'Inspired by ancient Mesoamerican recipes. Peruvian cacao meets Ceylon cinnamon, a hint of ancho chili, and bright orange zest for a warming, complex sip.',
    price: 32,
    category: 'drinking',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 47,
    origin: 'Peru',
    weight: '300g',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}
