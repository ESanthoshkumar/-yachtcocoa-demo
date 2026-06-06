import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, getProductsByCategory } from '../data/products'
import { ProductGrid } from '../components/products/ProductGrid'
export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') ?? 'all'

  const filteredProducts = useMemo(
    () => getProductsByCategory(activeCategory),
    [activeCategory]
  )

  const activeLabel =
    categories.find((c) => c.id === activeCategory)?.label ?? 'All Products'

  function setCategory(category: string) {
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          Our Collection
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-navy-900 sm:text-5xl">
          {activeLabel}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-700/70">
          Discover our range of artisan cocoa and chocolate, each piece telling
          a story of origin and craft.
        </p>
      </div>

      {/* Category filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setCategory('all')}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-navy-900 text-cream-50'
              : 'bg-cream-200 text-navy-700 hover:bg-cream-200/80'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-navy-900 text-cream-50'
                : 'bg-cream-200 text-navy-700 hover:bg-cream-200/80'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No products in this category yet."
        />
      </div>
    </div>
  )
}
