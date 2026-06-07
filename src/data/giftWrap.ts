import type { GiftWrapOption } from '../types'

export const giftWrapOptions: GiftWrapOption[] = [
  {
    id: 'navy',
    label: 'Classic Navy',
    description: 'Navy lacquer box with gold satin ribbon',
    ribbon: 'from-gold-400 to-gold-600',
    paper: 'from-navy-900 to-navy-800',
  },
  {
    id: 'rose',
    label: 'Blush Rose',
    description: 'Soft rose paper with cream silk ribbon',
    ribbon: 'from-cream-100 to-cream-200',
    paper: 'from-plum-800 to-plum-900',
  },
  {
    id: 'festive',
    label: 'Festive Gold',
    description: 'Gold foil wrap with burgundy velvet bow',
    ribbon: 'from-cocoa-800 to-cocoa-900',
    paper: 'from-gold-500 to-gold-600',
  },
]
