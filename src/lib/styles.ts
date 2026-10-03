// Shared class strings so buttons and headings stay identical across pages.

const btnBase =
  'inline-flex cursor-pointer items-center justify-center px-7 py-3.5 text-xs font-semibold tracking-[0.25em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

export const btnPrimary = `${btnBase} bg-white text-ink hover:bg-white/80`

export const btnGhost = `${btnBase} border border-white/40 text-white hover:border-white hover:bg-white/10`

export const eyebrow = 'text-[11px] font-semibold tracking-[0.35em] text-muted uppercase'

// A serif word in capitals with a script word laid over it, echoing the brand graphics
// ("BOOKING Policies", "BEFORE YOUR appointment").
export const serifCaps = 'font-serif font-light tracking-[0.18em] uppercase'

export const script = 'font-script font-normal normal-case tracking-normal'

export const body = 'text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8'
