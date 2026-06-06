import { Link } from 'react-router-dom'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
}

const sizes = {
  sm: { img: 'h-11 w-11', tagline: 'text-[10px]' },
  md: { img: 'h-14 w-14', tagline: 'text-xs' },
  lg: { img: 'h-24 w-24', tagline: 'text-sm' },
}

export function Logo({ size = 'sm', showTagline = false }: LogoProps) {
  const s = sizes[size]

  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Yacht Cocoa"
        className={`${s.img} shrink-0 rounded-lg object-cover shadow-md ring-1 ring-gold-500/20 transition-transform group-hover:scale-105`}
      />
      {showTagline && (
        <div className="hidden sm:block">
          <p className="font-display text-lg font-semibold leading-tight text-navy-900">
            Yacht <span className="text-gold-600">Cocoa</span>
          </p>
          <p className={`${s.tagline} text-navy-700/60`}>
            Premium artisan cocoa & chocolate
          </p>
        </div>
      )}
    </Link>
  )
}
