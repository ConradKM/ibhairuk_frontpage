# ibhairuk_frontpage

Website for IBHairUK — Iyoni, loctician in West London. Three pages (Home, FAQs, Gallery),
built to be browsed mostly on phones from Instagram. Same stack as
[comaz-frontpage](../comaz-frontpage).

## Stack

- React + TypeScript, built with Vite
- Tailwind CSS v4
- React Router

## Running

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

```bash
npm run lint       # oxlint
npm run typecheck  # tsc -b
npm run build      # production build
```

## Project structure

```text
public/
├── hero/         photos that scroll behind the logo on the Home page
├── gallery/      photos for the Gallery page
└── images/       logo and the "Meet Iyoni" photo
src/
├── content/      everything you'd want to edit — FAQs, gallery captions, services, hours
├── components/   Navbar, Footer, Lightbox, FAQ dropdown, animations
├── pages/        Landing.tsx, FAQs.tsx, Gallery.tsx
└── lib/          booking link, shared styles, small hooks
```

## Editing the content

Everything lives in `src/content/` — no need to touch the pages.

| To change…                         | Edit                                                              |
| ---------------------------------- | ----------------------------------------------------------------- |
| FAQ questions, answers, sections   | [`src/content/faqs.ts`](src/content/faqs.ts)                      |
| Gallery photos and captions        | add the file to `public/gallery/`, then list it in [`src/content/gallery.ts`](src/content/gallery.ts) |
| Home page scrolling photos         | add files to `public/hero/`, then list them in [`src/content/home.ts`](src/content/home.ts) |
| Meet Iyoni photo                   | [`src/content/home.ts`](src/content/home.ts)                      |
| Services and prices                | [`src/content/services.ts`](src/content/services.ts)              |
| Opening hours, phone, Instagram    | [`src/content/business.ts`](src/content/business.ts)              |

## Notes for whoever edits this next

- **The Home page scrolling photos are real; everything else is a placeholder** (grey `.svg`
  files). Swap in real `.jpg`/`.webp` photos and update the file names in `src/content/`. The
  originals for the scrolling photos are in `images/sliding_window/`. Keep them around 1600px on the long edge so the site
  stays fast on mobile data.
- **Booking buttons don't link anywhere yet.** Set `BOOKING_URL` in
  [`src/lib/constants.ts`](src/lib/constants.ts) and every "Book Iyoni" / "Book appointment"
  button picks it up.
- Prices in `services.ts` are copied from the Acuity booking page — keep them in step.
- Opening hours in the FAQs and footer both come from `business.ts`, so they can't drift apart.
- It's a single-page app: when hosting, rewrite unknown paths to `index.html` so `/faqs` and
  `/gallery` work on refresh.
- `full_logo.png` in the root is the original logo; the site uses the cropped
  `public/images/logo.png`.
