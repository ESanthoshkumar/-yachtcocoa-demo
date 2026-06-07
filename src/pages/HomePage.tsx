import { Link } from 'react-router-dom'
import { ArrowRight, Award, Leaf, Ship, Sparkles } from 'lucide-react'
import { products } from '../data/products'
import { ProductGrid } from '../components/products/ProductGrid'
import { Button } from '../components/ui/Button'
import { HeroSection } from '../components/home/HeroSection'

export function HomePage() {
  const featured = products.filter((p) => p.badge).slice(0, 4)

  return (
    <div>
      <HeroSection />

      {/* Features */}
      <section className="relative -mt-8 border-b border-cream-200 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-3 sm:gap-8 sm:px-6 lg:px-8">
          {[
            {
              icon: Leaf,
              title: 'Ethically Sourced',
              desc: 'Direct-trade cacao from sustainable farms worldwide.',
            },
            {
              icon: Award,
              title: 'Award Winning',
              desc: 'Recognised by the International Chocolate Awards.',
            },
            {
              icon: Ship,
              title: 'Small Batch',
              desc: 'Every bar and truffle crafted in limited quantities.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-cream-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lg"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/5 transition-transform duration-300 group-hover:scale-150" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-gold-500 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-gold-600">
              <Sparkles className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Curated Selection
              </p>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 max-w-md text-sm text-navy-700/60">
              Handpicked favourites from our collection — each one a testament to
              craftsmanship.
            </p>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-1.5 rounded-full border border-cream-200 bg-white px-5 py-2.5 text-sm font-semibold text-gold-600 shadow-sm transition-all hover:border-gold-500/30 hover:text-gold-500 sm:flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          <ProductGrid products={featured} />
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/product/DateChoco.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/70" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-24 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
              Limited Edition
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream-50 sm:text-4xl lg:text-5xl">
              Medjool Date Delight
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream-200/85">
              Our newest creation — fine chocolate blended with sweet Medjool
              dates for a warm, unforgettable taste.
            </p>
          </div>
          <Link to="/products/4" className="shrink-0">
            <Button size="lg" variant="secondary" className="shadow-lg shadow-gold-500/25">
              Shop Now — $22
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
