import { Gift, Heart, Sparkles } from 'lucide-react'
import { getGiftPacks } from '../data/products'
import { GiftCustomizer } from '../components/gifts/GiftCustomizer'

export function GiftPackPage() {
  const giftPacks = getGiftPacks()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-plum-950 via-navy-900 to-navy-950">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-plum-800/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Heart className="h-4 w-4 fill-gold-500 text-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Gift Packs for Loved Ones
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold text-cream-50 sm:text-5xl lg:text-6xl text-balance">
            Surprise someone special with a{' '}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              personalised
            </span>{' '}
            gift
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-200/85 sm:text-lg">
            Upload your favourite photo — we print it on the gift cover, hand-wrap it
            in beautiful paper, and deliver a surprise your loved one will never forget.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: 'Photo Printed on Cover' },
              { icon: Gift, label: 'Hand-Wrapped Surprise' },
              { icon: Heart, label: 'Personal Message Tag' },
            ].map((step) => (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm"
              >
                <step.icon className="h-5 w-5 text-gold-400" />
                <p className="text-xs font-semibold text-cream-100">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customizer */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <GiftCustomizer giftPacks={giftPacks} />
      </section>
    </div>
  )
}
