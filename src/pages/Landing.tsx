import { Link } from 'react-router-dom'
import AnimatedText from '../components/AnimatedText'
import BookButton from '../components/BookButton'
import Container from '../components/Container'
import HeroBackground from '../components/HeroBackground'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import { LOCATION } from '../content/business'
import { GALLERY, galleryUrl } from '../content/gallery'
import { IYONI_IMAGE } from '../content/home'
import { SERVICE_CATEGORIES } from '../content/services'
import { body, btnGhost, btnPrimary, eyebrow, script, serifCaps } from '../lib/styles'

const galleryPreview = GALLERY.slice(0, 6)

export default function Landing() {
  return (
    <div>
      <HeroBackground />

      {/* Hero */}
      <section className="relative z-10 flex h-svh min-h-[560px] flex-col items-center justify-center px-4 text-center">
        <h1 className="w-full max-w-[860px] animate-fade-in [animation-duration:1.4s]">
          <Logo className="mx-auto w-[88vw] max-w-[860px]" />
        </h1>
        <p className="mt-6 text-[11px] tracking-[0.4em] text-white/85 uppercase sm:mt-8 sm:text-sm">
          <AnimatedText text={`Loctician · ${LOCATION}`} delay={500} />
        </p>
        <div
          className="mt-10 animate-fade-in [animation-delay:1s] [animation-duration:1s] sm:mt-12"
        >
          <BookButton className={btnPrimary}>Book appointment</BookButton>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-3 text-[10px] tracking-[0.4em] text-white/60 uppercase">
          Scroll
          <span className="block h-10 w-px animate-scroll-cue bg-white/60" />
        </div>
      </section>

      {/* Meet Iyoni */}
      <section className="relative z-10 py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <Reveal>
              <img
                src={IYONI_IMAGE.src}
                alt={IYONI_IMAGE.alt}
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>

            <div>
              <h2 className="leading-none">
                <span className={`${script} text-7xl sm:text-8xl`}>
                  <AnimatedText text="Meet" />
                </span>{' '}
                <span className={`${serifCaps} ml-2 text-4xl text-white/55 sm:ml-3 sm:text-5xl`}>
                  <AnimatedText text="Iyoni" delay={250} />
                </span>
              </h2>

              <Reveal delay={150} className={`mt-8 space-y-5 ${body}`}>
                <p className="text-xs font-semibold tracking-[0.3em] text-white uppercase">
                  Welcome to IBHairUK.
                </p>
                <p>
                  Hey! I’m Iyoni, your trusted loctician. Thank you for choosing me to be your
                  stylist. I’m located in {LOCATION}, and here at IBHairUK I’m dedicated to
                  delivering exceptional care and expertise tailored to your unique hair needs.
                </p>
                <p>
                  Please read the{' '}
                  <Link to="/faqs" className="underline underline-offset-4 hover:text-white">
                    FAQs
                  </Link>{' '}
                  in their entirety before booking to ensure your appointment goes smoothly. I
                  look forward to meeting you all.
                </p>
                <p className={`${script} pt-2 text-right text-3xl text-white sm:text-4xl`}>
                  Your favourite Loctician xx
                </p>
              </Reveal>

              <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
                <BookButton className={btnPrimary}>Book appointment</BookButton>
                <Link to="/faqs" className={btnGhost}>
                  Read the FAQs
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="relative z-10 border-t border-white/10 py-24 sm:py-32">
        <Container>
          <div className="text-center">
            <p className={eyebrow}>What I offer</p>
            <h2 className="mt-4 leading-none">
              <span className={`${serifCaps} text-4xl sm:text-6xl`}>
                <AnimatedText text="The" />
              </span>{' '}
              <span className={`${script} text-6xl sm:text-8xl`}>
                <AnimatedText text="Services" delay={150} />
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((category, i) => (
              <Reveal key={category.title} delay={(i % 2) * 120}>
                <h3 className="border-b border-white/20 pb-3 text-xs font-semibold tracking-[0.3em] uppercase">
                  {category.title}
                </h3>
                <ul className="mt-2">
                  {category.services.map((service) => (
                    <li key={service.name} className="py-3">
                      <div className="flex items-baseline gap-3 text-[15px]">
                        <span className="text-white/90">{service.name}</span>
                        <span className="h-px flex-1 translate-y-[-4px] border-b border-dotted border-white/25" />
                        <span className="font-serif text-lg text-white">{service.price}</span>
                      </div>
                      {service.note && (
                        <p className="mt-1 text-xs tracking-[0.05em] text-faint">{service.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="text-sm text-muted">
              Full descriptions and add-ons are shown when you book.
            </p>
            <div className="mt-8">
              <BookButton className={btnPrimary}>Book appointment</BookButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Gallery preview */}
      <section className="relative z-10 border-t border-white/10 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <h2 className="leading-none">
              <span className={`${serifCaps} text-4xl sm:text-6xl`}>
                <AnimatedText text="Recent" />
              </span>{' '}
              <span className={`${script} text-6xl sm:text-8xl`}>
                <AnimatedText text="work" delay={150} />
              </span>
            </h2>
            <Link to="/gallery" className={btnGhost}>
              View the gallery
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-1 sm:grid-cols-3">
            {galleryPreview.map((photo, i) => (
              <Reveal key={photo.file} delay={(i % 3) * 100}>
                <Link to="/gallery" className="group relative block overflow-hidden">
                  <img
                    src={galleryUrl(photo)}
                    alt={photo.caption}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
