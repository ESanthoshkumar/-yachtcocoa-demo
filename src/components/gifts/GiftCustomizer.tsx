import { useRef, useState } from 'react'
import { Camera, Gift, ShoppingBag, Upload } from 'lucide-react'
import type { GiftCustomization, GiftWrapStyle, Product } from '../../types'
import { giftWrapOptions } from '../../data/giftWrap'
import { useCart } from '../../context/CartContext'
import { GiftPreview } from './GiftPreview'
import { Button } from '../ui/Button'
import { formatPrice } from '../../utils/currency'

interface GiftCustomizerProps {
  giftPacks: Product[]
}

const defaultGift: GiftCustomization = {
  recipientName: '',
  message: '',
  photoUrl: null,
  wrapStyle: 'navy',
}

export function GiftCustomizer({ giftPacks }: GiftCustomizerProps) {
  const { addItem } = useCart()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedPack, setSelectedPack] = useState(giftPacks[0])
  const [gift, setGift] = useState<GiftCustomization>(defaultGift)
  const [added, setAdded] = useState(false)
  const [photoName, setPhotoName] = useState('')

  function updateGift<K extends keyof GiftCustomization>(
    key: K,
    value: GiftCustomization[K]
  ) {
    setGift((prev) => ({ ...prev, [key]: value }))
  }

  function handlePhotoUpload(file: File | undefined) {
    if (!file || !file.type.startsWith('image/')) return
    setPhotoName(file.name)
    const reader = new FileReader()
    reader.onload = (e) => {
      updateGift('photoUrl', e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  function handleAddToCart() {
    addItem(selectedPack, 1, gift)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  const canAdd = gift.recipientName.trim().length > 0 && gift.photoUrl

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-8">
        {/* Pack selection */}
        <fieldset className="space-y-4">
          <legend className="flex items-center gap-2 font-display text-xl font-semibold text-navy-900">
            <Gift className="h-5 w-5 text-gold-600" />
            Choose Your Gift Pack
          </legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {giftPacks.map((pack) => (
              <button
                key={pack.id}
                type="button"
                onClick={() => setSelectedPack(pack)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  selectedPack.id === pack.id
                    ? 'border-gold-500 bg-gold-500/10 shadow-md ring-2 ring-gold-500/30'
                    : 'border-cream-200 bg-white hover:border-gold-500/40'
                }`}
              >
                <p className="font-display text-sm font-semibold text-navy-900">
                  {pack.name}
                </p>
                <p className="mt-1 text-lg font-bold text-gold-600">{formatPrice(pack.price)}</p>
              </button>
            ))}
          </div>
          {selectedPack.includes && (
            <ul className="space-y-1.5 rounded-xl bg-cream-100 px-4 py-3 text-sm text-navy-700/80">
              {selectedPack.includes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </fieldset>

        {/* Recipient */}
        <fieldset className="space-y-4">
          <legend className="font-display text-xl font-semibold text-navy-900">
            Who is this for?
          </legend>
          <input
            type="text"
            placeholder="Loved one's name (e.g. Mom, Sarah, Dad)"
            value={gift.recipientName}
            onChange={(e) => updateGift('recipientName', e.target.value)}
            className="w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
          <textarea
            placeholder="Write a personal message for the gift tag..."
            value={gift.message}
            onChange={(e) => updateGift('message', e.target.value)}
            rows={3}
            className="w-full resize-none rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </fieldset>

        {/* Photo upload */}
        <fieldset className="space-y-4">
          <legend className="flex items-center gap-2 font-display text-xl font-semibold text-navy-900">
            <Camera className="h-5 w-5 text-gold-600" />
            Upload a Photo
          </legend>
          <p className="text-sm text-navy-700/70">
            Your photo will be printed on the gift cover — a personal touch your
            loved one will cherish.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handlePhotoUpload(e.target.files?.[0])}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gold-500/40 bg-cream-50 px-6 py-8 transition-colors hover:border-gold-500 hover:bg-gold-500/5"
          >
            <Upload className="h-6 w-6 text-gold-600" />
            <div className="text-left">
              <p className="text-sm font-semibold text-navy-900">
                {photoName || 'Choose a photo to print'}
              </p>
              <p className="text-xs text-navy-700/60">JPG, PNG — max 10 MB</p>
            </div>
          </button>
          {gift.photoUrl && (
            <div className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3">
              <img
                src={gift.photoUrl}
                alt="Uploaded"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <p className="text-sm font-medium text-green-800">
                Photo ready to print on cover
              </p>
            </div>
          )}
        </fieldset>

        {/* Wrap style */}
        <fieldset className="space-y-4">
          <legend className="font-display text-xl font-semibold text-navy-900">
            Surprise Wrapping
          </legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {giftWrapOptions.map((wrap) => (
              <button
                key={wrap.id}
                type="button"
                onClick={() => updateGift('wrapStyle', wrap.id as GiftWrapStyle)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  gift.wrapStyle === wrap.id
                    ? 'border-gold-500 bg-gold-500/10 ring-2 ring-gold-500/30'
                    : 'border-cream-200 bg-white hover:border-gold-500/40'
                }`}
              >
                <div
                  className={`mb-3 h-8 rounded-lg bg-gradient-to-br ${wrap.paper}`}
                />
                <p className="text-sm font-semibold text-navy-900">{wrap.label}</p>
                <p className="mt-1 text-xs text-navy-700/60">{wrap.description}</p>
              </button>
            ))}
          </div>
        </fieldset>

        <Button
          size="lg"
          className="w-full"
          onClick={handleAddToCart}
          disabled={!canAdd}
        >
          <ShoppingBag className="h-4 w-4" />
          {added ? 'Added to Cart!' : `Add Gift Pack — ${formatPrice(selectedPack.price)}`}
        </Button>
        {!canAdd && (
          <p className="text-center text-xs text-navy-700/50">
            Add a recipient name and photo to continue
          </p>
        )}
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
          <GiftPreview gift={gift} packName={selectedPack.name} />
        </div>
      </div>
    </div>
  )
}
