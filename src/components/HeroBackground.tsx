import { useEffect, useRef } from 'react'
import { HERO_IMAGES } from '../content/home'

const SECONDS_PER_PHOTO = 16

/**
 * The Home page backdrop: a strip of photos drifting sideways across the full width of the
 * screen. It stays pinned behind the page and fades to black as you scroll down, so the
 * sections below sit on plain black.
 */
export default function HeroBackground() {
  const shadeRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.8))
      if (shadeRef.current) shadeRef.current.style.opacity = String(progress)
      // No point animating photos nobody can see.
      if (stripRef.current) stripRef.current.style.animationPlayState = progress >= 1 ? 'paused' : 'running'
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // The strip is the photo list twice over; sliding it left by half loops seamlessly.
  const strip = [...HERO_IMAGES, ...HERO_IMAGES]

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden bg-ink">
      <div
        ref={stripRef}
        className="flex h-full w-max animate-marquee"
        // Time per photo, not per loop, so adding photos doesn't speed the strip up.
        style={{ animationDuration: `${HERO_IMAGES.length * SECONDS_PER_PHOTO}s` }}
      >
        {strip.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="mr-1 h-full w-[72vw] shrink-0 object-cover sm:w-[42vw] lg:w-[26vw]"
          />
        ))}
      </div>
      {/* Always-on tint so the white logo reads over bright photos. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/45 to-ink/80" />
      <div ref={shadeRef} className="absolute inset-0 bg-ink opacity-0" />
    </div>
  )
}
