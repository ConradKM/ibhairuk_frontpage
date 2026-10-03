import { useCallback, useState } from 'react'
import AnimatedText from '../components/AnimatedText'
import Container from '../components/Container'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import { GALLERY, galleryUrl } from '../content/gallery'
import { useColumnCount } from '../lib/useColumnCount'
import { eyebrow, script, serifCaps } from '../lib/styles'

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const close = useCallback(() => setOpenIndex(null), [])
  const columnCount = useColumnCount()

  const columns = Array.from({ length: columnCount }, (_, c) =>
    GALLERY.map((photo, index) => ({ photo, index })).filter(({ index }) => index % columnCount === c),
  )

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <div className="text-center">
          <p className={eyebrow}>Locs by Iyoni</p>
          <h1 className="mt-4 leading-none">
            <span className={`${serifCaps} text-4xl sm:text-6xl`}>
              <AnimatedText text="The" />
            </span>{' '}
            <span className={`${script} text-7xl sm:text-8xl`}>
              <AnimatedText text="Gallery" delay={150} />
            </span>
          </h1>
        </div>

        {/* Masonry: photos keep their own shape. They're dealt into columns left to right,
            so the list order in content/gallery.ts reads across the rows. */}
        <div className="mt-14 flex gap-1.5 sm:mt-20">
          {columns.map((column, c) => (
            <div key={c} className="flex min-w-0 flex-1 flex-col gap-1.5">
              {column.map(({ photo, index }) => (
                <Reveal key={photo.file} delay={c * 90}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`Open photo: ${photo.caption}`}
                    className="group relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <img
                      src={galleryUrl(photo)}
                      alt={photo.caption}
                      loading="lazy"
                      className="block w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 p-4 text-left text-[11px] tracking-[0.25em] text-white uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {photo.caption}
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </Container>

      {openIndex !== null && (
        <Lightbox photos={GALLERY} index={openIndex} onChange={setOpenIndex} onClose={close} />
      )}
    </div>
  )
}
