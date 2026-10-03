import { useEffect, useRef } from 'react'
import { galleryUrl, type GalleryPhoto } from '../content/gallery'
import { useScrollLock } from '../lib/useScrollLock'
import { ChevronIcon, CloseIcon } from './icons'

const navButton =
  'absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center text-white/70 transition-colors hover:text-white sm:flex'

/** A photo opened full screen, with its caption. Arrows, swipes and Esc all work. */
export default function Lightbox({
  photos,
  index,
  onChange,
  onClose,
}: {
  photos: GalleryPhoto[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)
  const photo = photos[index]
  const count = photos.length

  const prev = () => onChange((index - 1 + count) % count)
  const next = () => onChange((index + 1) % count)

  useScrollLock(true)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => opener?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, count, onChange, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      className="fixed inset-0 z-[100] flex animate-fade-in flex-col bg-ink/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 50) {
          if (dx > 0) prev()
          else next()
        }
      }}
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-4 sm:h-20 sm:px-6">
        <span className="text-xs tracking-[0.3em] text-white/60">
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center text-white/80 hover:text-white"
        >
          <CloseIcon className="h-7 w-7" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <img
          key={photo.file}
          src={galleryUrl(photo)}
          alt={photo.caption}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full animate-fade-in object-contain"
        />
        <button
          type="button"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className={`${navButton} left-4`}
        >
          <ChevronIcon direction="left" className="h-8 w-8" />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className={`${navButton} right-4`}
        >
          <ChevronIcon direction="right" className="h-8 w-8" />
        </button>
      </div>

      <p className="shrink-0 px-6 pt-5 pb-8 text-center text-xs tracking-[0.3em] text-white/85 uppercase sm:pb-10">
        {photo.caption}
      </p>
    </div>
  )
}
