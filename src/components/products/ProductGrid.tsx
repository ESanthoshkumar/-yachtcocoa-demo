import type { Product } from '../../types'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  emptyMessage?: string
}

export function ProductGrid({ products, emptyMessage = 'No products found.' }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-xl text-navy-700/60">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
