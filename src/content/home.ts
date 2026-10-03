// Pictures used on the Home page.

// The strip of photos that scrolls sideways behind the logo, in order (files in public/hero/).
// 5 and 6 are the same client, so they're kept apart.
export const HERO_IMAGES = [
  'hero-1.jpg',
  'hero-5.jpg',
  'hero-2.jpg',
  'hero-7.jpg',
  'hero-3.jpg',
  'hero-6.jpg',
  'hero-4.jpg',
].map((file) => `/hero/${file}`)

// The photo beside "Meet Iyoni" (in public/images/).
export const IYONI_IMAGE = { src: '/images/iyoni.svg', alt: 'Iyoni, loctician at IBHairUK' }
