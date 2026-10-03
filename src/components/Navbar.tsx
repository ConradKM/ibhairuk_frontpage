import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useScrollLock } from '../lib/useScrollLock'
import BookButton from './BookButton'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/gallery', label: 'Gallery' },
]

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-xs tracking-[0.25em] uppercase transition-colors ${
    isActive ? 'text-white' : 'text-white/60 hover:text-white'
  }`

const bookClasses =
  'inline-flex cursor-pointer items-center bg-white px-3.5 py-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase transition-colors hover:bg-white/80 sm:px-5 sm:py-2.5 sm:text-xs'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Over the Home page photos the bar starts see-through; everywhere else it's solid. No blur
  // while the menu is open: backdrop-filter would trap the fixed menu panel inside the bar.
  const solid = scrolled || pathname !== '/'
  const barClasses = open
    ? 'border-white/10 bg-ink'
    : solid
      ? 'border-white/10 bg-ink/90 backdrop-blur-md'
      : 'border-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${barClasses}`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <NavLink to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="w-[108px] sm:w-[140px]" />
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClasses} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <BookButton className={bookClasses} onClick={() => setOpen(false)}>
            Book Iyoni
          </BookButton>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 animate-fade-in bg-ink md:hidden">
          <nav className="flex flex-col items-center gap-2 pt-16">
            {links.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${80 + i * 70}ms` }}
                className={({ isActive }) =>
                  `animate-fade-in py-3 font-serif text-4xl font-light tracking-[0.18em] uppercase ${
                    isActive ? 'text-white' : 'text-white/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
