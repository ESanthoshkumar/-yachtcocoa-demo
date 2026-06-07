import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, CreditCard, Lock } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { giftWrapOptions } from '../data/giftWrap'
import { Button } from '../components/ui/Button'
import { formatPriceFixed, FREE_SHIPPING_MIN } from '../utils/currency'

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [loading, setLoading] = useState(false)

  const shipping = subtotal > FREE_SHIPPING_MIN ? 0 : 8
  const total = subtotal + shipping

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-bold text-navy-900">
          Nothing to checkout
        </h1>
        <Link to="/products" className="mt-6 inline-block text-gold-600 hover:underline">
          Browse products
        </Link>
      </div>
    )
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('success')
      clearCart()
    }, 1500)
  }

  if (step === 'success') {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-navy-900">
          Order Confirmed!
        </h1>
        <p className="mt-3 text-navy-700/70">
          Thank you for your order. A confirmation email has been sent to your
          inbox. Your artisan treats are on their way.
        </p>
        <p className="mt-2 text-sm text-navy-700/50">
          Order #YC-{Math.random().toString(36).substring(2, 8).toUpperCase()}
        </p>
        <Button size="lg" className="mt-8" onClick={() => navigate('/products')}>
          Continue Shopping
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/cart"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700/70 transition-colors hover:text-gold-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to cart
      </Link>

      <h1 className="mt-6 font-display text-4xl font-bold text-navy-900">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="font-display text-xl font-semibold text-navy-900">
              Contact Information
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="First name"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
              <input
                required
                type="text"
                placeholder="Last name"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-xl font-semibold text-navy-900">
              Shipping Address
            </legend>
            <input
              required
              type="text"
              placeholder="Street address"
              className="w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                required
                type="text"
                placeholder="City"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
              <input
                required
                type="text"
                placeholder="State"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
              <input
                required
                type="text"
                placeholder="ZIP code"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="flex items-center gap-2 font-display text-xl font-semibold text-navy-900">
              <CreditCard className="h-5 w-5" />
              Payment
            </legend>
            <input
              required
              type="text"
              placeholder="Card number"
              className="w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="MM / YY"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
              <input
                required
                type="text"
                placeholder="CVC"
                className="rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
              />
            </div>
            <p className="flex items-center gap-1.5 text-xs text-navy-700/50">
              <Lock className="h-3.5 w-3.5" />
              Demo checkout — no real payment is processed.
            </p>
          </fieldset>
        </div>

        <div className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cream-200 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Order Summary
          </h2>

          <ul className="mt-6 space-y-4">
            {items.map(({ cartItemId, product, quantity, gift }) => {
              const wrap = gift
                ? giftWrapOptions.find((w) => w.id === gift.wrapStyle)
                : null

              return (
                <li key={cartItemId} className="text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-700/70">
                      {product.name} × {quantity}
                    </span>
                    <span className="font-medium text-navy-900">
                      {formatPriceFixed(product.price * quantity)}
                    </span>
                  </div>
                  {gift && (
                    <div className="mt-1.5 space-y-0.5 text-xs text-navy-700/50">
                      <p>Gift for {gift.recipientName}</p>
                      {wrap && <p>{wrap.label} wrap · photo on cover</p>}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mt-6 space-y-2 border-t border-cream-200 pt-4 text-sm">
            <div className="flex justify-between text-navy-700/70">
              <span>Subtotal</span>
              <span>{formatPriceFixed(subtotal)}</span>
            </div>
            <div className="flex justify-between text-navy-700/70">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatPriceFixed(shipping)}</span>
            </div>
            <div className="flex justify-between font-display text-lg font-semibold text-navy-900">
              <span>Total</span>
              <span>{formatPriceFixed(total)}</span>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-6 w-full"
            disabled={loading}
          >
            {loading ? 'Processing...' : `Place Order — ${formatPriceFixed(total)}`}
          </Button>
        </div>
      </form>
    </div>
  )
}
