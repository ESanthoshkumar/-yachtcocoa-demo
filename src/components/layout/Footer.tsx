import { Link } from 'react-router-dom'
import { Anchor, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Anchor className="h-5 w-5 text-gold-500" />
              <span className="font-display text-2xl font-semibold text-cream-50">
                Yacht<span className="text-gold-500">Cocoa</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/80">
              Artisan cocoa and chocolate, crafted with the precision of a
              seasoned captain and the warmth of a harbour at dusk.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-cream-200 transition-colors hover:text-gold-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream-200 transition-colors hover:text-gold-500"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Shop
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-200/80">
              <li>
                <Link to="/products" className="hover:text-gold-500">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=bars" className="hover:text-gold-500">
                  Chocolate Bars
                </Link>
              </li>
              <li>
                <Link to="/products?category=truffles" className="hover:text-gold-500">
                  Truffles
                </Link>
              </li>
              <li>
                <Link to="/products?category=gifts" className="hover:text-gold-500">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-200/80">
              <li><a href="#" className="hover:text-gold-500">Our Story</a></li>
              <li><a href="#" className="hover:text-gold-500">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold-500">Contact</a></li>
              <li><a href="#" className="hover:text-gold-500">Shipping</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 sm:flex-row">
          <p className="text-xs text-cream-200/60">
            &copy; {new Date().getFullYear()} YachtCocoa. Demo storefront.
          </p>
          <p className="text-xs text-cream-200/60">
            Crafted with care for the discerning palate.
          </p>
        </div>
      </div>
    </footer>
  )
}
