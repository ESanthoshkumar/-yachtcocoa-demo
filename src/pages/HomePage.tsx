import { Link } from 'react-router-dom'
import { ArrowRight, Award, Leaf, Ship, Sparkles } from 'lucide-react'
import { products } from '../data/products'
import { ProductGrid } from '../components/products/ProductGrid'
import { Button } from '../components/ui/Button'

const heroProduct = products[3]

export function HomePage() {
  const featured = products.filter((p) => p.badge).slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden hero-mesh">
        {/* Background imagery */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
          />
          <img
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-soft-light"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-cocoa-900/80 via-navy-900/60 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-gold-500/10" />
        <div className="absolute inset-0 hero-shimmer pointer-events-none" />

        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-1/4 h-96 w-96 rounded-full bg-cocoa-700/30 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-gold-400/10 blur-2xl" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  Artisan Cocoa & Chocolate
                </span>
              </div>

              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] text-cream-50 sm:text-6xl lg:text-7xl">
                Savour the voyage of{' '}
                <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  exceptional
                </span>{' '}
                flavour
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream-200/85 sm:text-lg lg:mx-0">
                Single-origin bars, hand-rolled truffles, and velvety drinking
                chocolate — crafted for those who appreciate the finer things.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link to="/products">
                  <Button size="lg" variant="secondary">
                    Explore Collection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/products?category=gifts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold-500/40 bg-white/5 text-cream-50 backdrop-blur-sm hover:border-gold-400 hover:bg-gold-500/20 hover:text-cream-50"
                  >
                    Gift Sets
                  </Button>
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-12 flex justify-center gap-8 border-t border-white/10 pt-8 lg:justify-start lg:gap-12">
                {[
                  { value: '8+', label: 'Artisan Products' },
                  { value: '4.9', label: 'Avg. Rating' },
                  { value: '100%', label: 'Ethically Sourced' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-gold-400">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-cream-200/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — product showcase */}
            <div className="relative hidden lg:block">
              <div className="hero-float relative mx-auto w-full max-w-md">
                <div className="hero-glow overflow-hidden rounded-3xl border border-gold-500/20 bg-white/5 p-2 backdrop-blur-md">
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="rounded-full bg-gold-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                      {heroProduct.badge}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-cream-50">
                      {heroProduct.name}
                    </h3>
                    <p className="mt-1 text-sm text-cream-200/70">
                      {heroProduct.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-display text-2xl font-bold text-gold-400">
                        ${heroProduct.price}
                      </span>
                      <Link to={`/products/${heroProduct.id}`}>
                        <Button size="sm" variant="secondary">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="hero-float-delayed absolute -left-8 top-8 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                <img
                  src={products[2].image}
                  alt=""
                  className="h-20 w-20 rounded-xl object-cover"
                />
              </div>
              <div className="hero-float absolute -right-4 bottom-16 rounded-2xl border border-gold-500/20 bg-navy-900/60 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                  Free Shipping
                </p>
                <p className="text-sm font-medium text-cream-50">Orders over $75</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* Features */}
      <section className="relative border-b border-cream-200 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
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
              className="group rounded-2xl border border-cream-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-navy-800 text-gold-500 shadow-md transition-transform group-hover:scale-110">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-700/70">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Curated Selection
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-1 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500 sm:flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10">
          <ProductGrid products={featured} />
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1920&h=600&q=80"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
              Limited Edition
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-cream-50 sm:text-4xl">
              The Captain&apos;s Selection
            </h2>
            <p className="mt-3 max-w-md text-cream-200/80">
              Our signature gift set — the perfect introduction to the
              YachtCocoa experience.
            </p>
          </div>
          <Link to="/products/5">
            <Button size="lg" variant="secondary">
              Shop Gift Set — $120
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
