export const CURRENCY_SYMBOL = '₹'

export const FREE_SHIPPING_MIN = 75

export function formatPrice(amount: number): string {
  return `${CURRENCY_SYMBOL}${Number.isInteger(amount) ? amount : amount.toFixed(2)}`
}

export function formatPriceFixed(amount: number): string {
  return `${CURRENCY_SYMBOL}${amount.toFixed(2)}`
}
