# YachtCocoa Demo

A modern React e-commerce demo storefront for **YachtCocoa** — premium artisan cocoa and chocolate.

## Features

- **Home page** with hero, featured products, and brand highlights
- **Product catalog** with category filtering (bars, truffles, gifts, drinking chocolate)
- **Product detail** pages with quantity selector and related products
- **Shopping cart** with quantity controls and free-shipping threshold
- **Checkout flow** with demo order confirmation
- **Responsive design** — mobile, tablet, and desktop

## Tech Stack

- React 19 + TypeScript
- Vite 6
- React Router 7
- Tailwind CSS 4
- Lucide React icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) after running `npm run dev`.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout
│   ├── products/     # ProductCard, ProductGrid
│   └── ui/           # Button and shared UI
├── context/          # Cart state management
├── data/             # Mock product catalog
├── pages/            # Route pages
└── types/            # TypeScript interfaces
```

## Demo Notes

This is a frontend-only demo. Product data is mocked locally and checkout does not process real payments.
