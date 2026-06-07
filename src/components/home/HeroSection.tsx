import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Volume2, VolumeX } from 'lucide-react'
import { products } from '../../data/products'
import { Button } from '../ui/Button'
import { formatPrice, FREE_SHIPPING_MIN } from '../../utils/currency'

const heroProduct = products[0]
const BANNER_VIDEO = '/bannerVideo.mp4'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1920&h=1080&q=80"
        >
          <source src={BANNER_VIDEO} type="video/mp4" />
        </video>
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-navy-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      <div className="absolute inset-0 hero-shimmer pointer-events-none" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-cocoa-700/25 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div className="hero-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-lg backdrop-blur-xl">
              <img
                src="/logo.png"
                alt="Yacht Cocoa"
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-gold-500/40"
              />
              <div className="text-left">
                <p className="font-display text-base font-semibold text-cream-50">
                  Yacht <span className="text-gold-400">Cocoa</span>
                </p>
                <p className="text-xs text-cream-200/70">
                  Premium artisan cocoa & chocolate
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Crafted at sea, savoured on shore
            </p>

            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.06] text-cream-50 sm:text-6xl lg:text-7xl text-balance">
              Savour the voyage of{' '}
              <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                exceptional
              </span>{' '}
              flavour
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream-200/90 sm:text-lg lg:mx-0">
              Single-origin bars, hand-rolled truffles, and velvety drinking
              chocolate — crafted for those who appreciate the finer things.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="shadow-lg shadow-gold-500/20">
                  Explore Collection
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/gifts">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-cream-50 backdrop-blur-sm hover:border-gold-400 hover:bg-gold-500/20 hover:text-cream-50"
                >
                  Gift Packs
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex justify-center gap-10 border-t border-white/10 pt-8 lg:justify-start lg:gap-14">
              {[
                { value: '5', label: 'Artisan Products' },
                { value: '4.9', label: 'Avg. Rating' },
                { value: '100%', label: 'Ethically Sourced' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-gold-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream-200/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product showcase */}
          <div className="relative hidden lg:block">
            <div className="hero-float hero-fade-up-delayed relative mx-auto w-full max-w-md">
              <div className="hero-glow overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2.5 shadow-2xl backdrop-blur-xl">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
                <div className="absolute inset-2.5 rounded-2xl bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                    {heroProduct.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-cream-50">
                    {heroProduct.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-cream-200/80">
                    {heroProduct.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-gold-400">
                        {formatPrice(heroProduct.price)}
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

            <div className="hero-float-delayed absolute -left-10 top-10 rounded-2xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur-xl">
              <img
                src={products[2].image}
                alt=""
                className="h-24 w-24 rounded-xl object-cover"
              />
            </div>
            <div className="hero-float absolute -right-6 bottom-20 rounded-2xl border border-gold-500/30 bg-navy-900/70 px-5 py-3.5 shadow-xl backdrop-blur-xl">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                Free Shipping
              </p>
                <p className="text-sm font-medium text-cream-50">Orders over {formatPrice(FREE_SHIPPING_MIN)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video controls & scroll hint */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-6">
        <button
          type="button"
          onClick={toggleMute}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cream-50 backdrop-blur-md transition-colors hover:bg-white/20"
          aria-label={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <div className="flex flex-col items-center gap-2 text-cream-200/50">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  )
}
