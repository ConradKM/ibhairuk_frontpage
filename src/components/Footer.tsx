import { Link } from 'react-router-dom'
import {
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  PHONE,
  PHONE_LINK,
} from '../content/business'
import { CURRENT_YEAR } from '../lib/constants'
import { eyebrow } from '../lib/styles'
import Container from './Container'
import { InstagramIcon, PhoneIcon, PinIcon } from './icons'
import Logo from './Logo'

const linkClass = 'transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="w-[170px]" />
            <p className="mt-5 text-xs tracking-[0.3em] text-muted uppercase">
              Loctician · {LOCATION}
            </p>
            <nav className="mt-8 flex gap-6 text-xs tracking-[0.25em] text-muted uppercase">
              <Link to="/" className={linkClass}>
                Home
              </Link>
              <Link to="/faqs" className={linkClass}>
                FAQs
              </Link>
              <Link to="/gallery" className={linkClass}>
                Gallery
              </Link>
            </nav>
          </div>

          <div>
            <h3 className={eyebrow}>Business hours</h3>
            <dl className="mt-5 space-y-2 text-sm tracking-[0.08em]">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-6 uppercase">
                  <dt className="text-white/70">{h.days}</dt>
                  <dd className={h.time === 'Closed' ? 'font-semibold' : 'text-white/70'}>
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className={eyebrow}>Contact</h3>
            <ul className="mt-5 space-y-4 text-sm tracking-[0.08em] text-white/70">
              <li>
                <a href={INSTAGRAM_URL} className={`inline-flex items-center gap-3 ${linkClass}`}>
                  <InstagramIcon />@{INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={PHONE_LINK} className={`inline-flex items-center gap-3 ${linkClass}`}>
                  <PhoneIcon />
                  {PHONE}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <PinIcon />
                {LOCATION} — address sent by email
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs tracking-[0.15em] text-faint uppercase">
          © {CURRENT_YEAR} IBHairUK. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
