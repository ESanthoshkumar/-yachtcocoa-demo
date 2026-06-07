import { Gift, Heart } from 'lucide-react'
import type { GiftCustomization } from '../../types'
import { giftWrapOptions } from '../../data/giftWrap'

interface GiftPreviewProps {
  gift: GiftCustomization
  packName?: string
}

export function GiftPreview({ gift, packName = 'Gift Pack' }: GiftPreviewProps) {
  const wrap = giftWrapOptions.find((w) => w.id === gift.wrapStyle) ?? giftWrapOptions[0]

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
        Live Preview
      </p>

      <div className="relative w-full max-w-xs">
        {/* Ribbon bow */}
        <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
          <div className={`h-8 w-16 rounded-full bg-gradient-to-b ${wrap.ribbon} shadow-md`} />
          <div className={`absolute left-1/2 top-2 h-10 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b ${wrap.ribbon}`} />
        </div>

        {/* Gift box */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${wrap.paper} p-3 shadow-2xl ring-1 ring-white/10`}
        >
          {/* Vertical ribbon */}
          <div className={`absolute inset-y-0 left-1/2 w-5 -translate-x-1/2 bg-gradient-to-b ${wrap.ribbon} opacity-90`} />

          {/* Lid with photo */}
          <div className="relative overflow-hidden rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            {gift.photoUrl ? (
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[200px] overflow-hidden rounded-lg border-2 border-white/30 shadow-inner">
                <img
                  src={gift.photoUrl}
                  alt="Your photo on gift cover"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : (
              <div className="mx-auto flex aspect-[4/3] w-full max-w-[200px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/5">
                <Gift className="h-8 w-8 text-white/40" />
                <p className="mt-2 text-center text-[10px] text-white/50">
                  Your photo will print here
                </p>
              </div>
            )}

            {gift.recipientName && (
              <p className="mt-3 text-center font-display text-sm font-semibold text-cream-50">
                For {gift.recipientName}
              </p>
            )}

            {gift.message && (
              <p className="mt-2 line-clamp-2 text-center text-[11px] italic text-cream-200/80">
                &ldquo;{gift.message}&rdquo;
              </p>
            )}
          </div>

          {/* Box base */}
          <div className="mt-2 rounded-xl bg-black/20 px-4 py-3 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
              Yacht Cocoa
            </p>
            <p className="mt-0.5 text-xs text-cream-100/80">{packName}</p>
          </div>
        </div>

        {/* Surprise tag */}
        <div className="absolute -right-2 bottom-8 rotate-6 rounded-lg border border-gold-500/30 bg-cream-50 px-3 py-2 shadow-lg">
          <div className="flex items-center gap-1.5">
            <Heart className="h-3 w-3 fill-gold-500 text-gold-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy-900">
              Surprise!
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-xs text-center text-xs text-navy-700/60">
        Your photo is professionally printed on the gift cover and hand-wrapped for a
        beautiful surprise reveal.
      </p>
    </div>
  )
}
