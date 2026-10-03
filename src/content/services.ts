// The service menu on the Home page, taken from the Acuity booking page. Keep prices in step
// with Acuity when they change.

export type Service = {
  name: string
  price: string
  note?: string
}

export type ServiceCategory = {
  title: string
  services: Service[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Loc services',
    services: [
      { name: 'Retwist', price: '£55' },
      { name: 'Retwist & style', price: '£70' },
      { name: 'Water & oil retwist', price: '£55', note: 'No gel or wax' },
      { name: 'Water & oil retwist & style', price: '£70' },
    ],
  },
  {
    title: 'Detox & washes',
    services: [
      { name: 'Wash + standard retwist', price: '£70' },
      { name: 'Wash + retwist & style', price: '£80' },
      { name: 'ACV detox + retwist', price: '£90' },
      { name: 'ACV detox + retwist & style', price: '£105' },
      { name: 'ACV detox (only)', price: '£65' },
    ],
  },
  {
    title: 'Starter locs',
    services: [
      { name: 'Large starter locs', price: '£95' },
      { name: 'Medium starter locs', price: '£105' },
      { name: 'Smedium starter locs', price: '£120' },
    ],
  },
  {
    title: 'Styles & extras',
    services: [
      { name: 'Signature miracle knot installation', price: '£120' },
      { name: 'Miracle knot takedown', price: 'from £60', note: 'Contact me before booking' },
      { name: 'Invisible locs', price: '£90' },
      { name: 'Invisible locs (for loc’d hair)', price: '£90' },
      { name: 'Criss cross barrel + curly buns', price: '£75' },
    ],
  },
  {
    title: 'Specialist loc services',
    services: [
      { name: 'Full head of repairs', price: '£50', note: 'Hourly rate — contact me before booking' },
      { name: 'High top reconstruction', price: '£60', note: 'Hourly rate — contact me before booking' },
    ],
  },
  {
    title: 'Consultation',
    services: [
      { name: 'In-person consultation', price: '£20', note: '20 minutes — contact me first to confirm a date' },
    ],
  },
]
