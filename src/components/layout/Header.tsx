import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { to: '/products', label: 'Shop' },
  { to: '/products?category=bars', label: 'Bars' },
  { to: '/products?category=gifts', label: 'Gifts' },
  { to: '/products?category=drinking', label: 'Drinking' },
]

export function Header() {
  const { itemCount } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/80 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-gold-500 transition-colors group-hover:bg-navy-800">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 3L4 19h16L12 3zm0 6.5l3.5 6.5H8.5L12 9.5z" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-navy-900">
            Yacht<span className="text-gold-600">Cocoa</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-gold-600'
                    : 'text-navy-700 hover:text-gold-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-cream-200"
            aria-label={`Cart with ${itemCount} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-semibold text-navy-900">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-cream-200 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-cream-200 bg-cream-50 px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-navy-700 hover:text-gold-600"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
