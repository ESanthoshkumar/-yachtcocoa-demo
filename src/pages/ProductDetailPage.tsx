import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import { getProductById, products } from '../data/products'
import { useCart } from '../context/CartContext'
import { ProductGrid } from '../components/products/ProductGrid'
import { Button } from '../components/ui/Button'
import { formatPrice } from '../utils/currency'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProductById(id) : undefined
  const { addItem, isInCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (product?.category === 'gifts') {
    return <Navigate to="/gifts" replace />
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-3xl font-bold text-navy-900">
          Product not found
        </h1>
        <Link to="/products" className="mt-6 inline-block text-gold-600 hover:underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const item = product

  const related = products
    .filter((p) => p.category === item.category && p.id !== item.id)
    .slice(0, 4)

  function handleAdd() {
    addItem(item, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700/70 transition-colors hover:text-gold-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-cream-200">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gold-600">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-navy-700/50">
              ({product.reviews} reviews)
            </span>
          </div>

          <h1 className="mt-3 font-display text-4xl font-bold text-navy-900 sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-navy-700/80">
            {product.longDescription}
          </p>

          <div className="mt-6 flex gap-6 text-sm text-navy-700/60">
            <span>
              <strong className="text-navy-900">Origin:</strong> {product.origin}
            </span>
            <span>
              <strong className="text-navy-900">Weight:</strong> {product.weight}
            </span>
          </div>

          <p className="mt-8 font-display text-4xl font-bold text-navy-900">
            {formatPrice(product.price)}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-cream-200 bg-white">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center text-navy-700 transition-colors hover:text-gold-600"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center text-navy-700 transition-colors hover:text-gold-600"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button size="lg" onClick={handleAdd} className="flex-1 sm:flex-none">
              <ShoppingBag className="h-4 w-4" />
              {added ? 'Added!' : isInCart(item.id) ? 'Add More' : 'Add to Cart'}
            </Button>
          </div>

          <Link
            to="/cart"
            className="mt-4 text-center text-sm font-medium text-gold-600 hover:underline sm:text-left"
          >
            View cart
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            You may also like
          </h2>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </div>
  )
}
