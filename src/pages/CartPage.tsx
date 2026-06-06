import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Button } from '../components/ui/Button'

export function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart()
  const shipping = subtotal > 75 ? 0 : 8
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream-200">
          <ShoppingBag className="h-8 w-8 text-navy-700/40" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-navy-900">
          Your cart is empty
        </h1>
        <p className="mt-3 text-navy-700/70">
          Discover our artisan collection and find something special.
        </p>
        <Link to="/products" className="mt-8">
          <Button size="lg">
            Start Shopping
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-navy-900">
        Shopping Cart
      </h1>
      <p className="mt-2 text-navy-700/70">
        {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-cream-200 sm:gap-6 sm:p-6"
            >
              <Link
                to={`/products/${product.id}`}
                className="h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link
                      to={`/products/${product.id}`}
                      className="font-display text-lg font-semibold text-navy-900 hover:text-gold-600"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-0.5 text-sm text-navy-700/60">
                      {product.weight} · {product.origin}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="text-navy-700/40 transition-colors hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center rounded-full border border-cream-200">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center text-navy-700 hover:text-gold-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center text-navy-700 hover:text-gold-600"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-display text-lg font-semibold text-navy-900">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cream-200 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-navy-700/70">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-navy-700/70">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {subtotal < 75 && (
              <p className="text-xs text-gold-600">
                Add ${(75 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
            <div className="border-t border-cream-200 pt-3">
              <div className="flex justify-between font-display text-lg font-semibold text-navy-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Link to="/checkout" className="mt-6 block">
            <Button size="lg" className="w-full">
              Proceed to Checkout
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <Link
            to="/products"
            className="mt-4 block text-center text-sm font-medium text-gold-600 hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
