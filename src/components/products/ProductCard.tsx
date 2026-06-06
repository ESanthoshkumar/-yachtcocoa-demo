import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import type { Product } from '../../types'
import { useCart } from '../../context/CartContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-cream-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-gold-500/30">
      <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-gold-600">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-navy-700/50">({product.reviews})</span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-2 font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 flex-1 text-sm leading-relaxed text-navy-700/70 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-navy-900">
            ${product.price}
          </span>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:bg-gold-600 hover:text-navy-900"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
