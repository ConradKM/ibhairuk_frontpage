import { useInView } from '../lib/useInView'

/**
 * Slides each word up from behind a mask, one after another, when the text scrolls into
 * view. Screen readers get the plain text.
 */
export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 70,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const [ref, inView] = useInView<HTMLSpanElement>()
  const words = text.split(' ')

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          // The mask is a clip-path, not overflow:hidden: overflow would move the word's
          // baseline to its bottom edge, so words in different fonts on one line wouldn't
          // line up. The clip is loose on every side but the bottom so script flourishes
          // and descenders aren't cut off.
          <span key={i} className="inline-block [clip-path:inset(-1em_-0.5em_-0.3em_-0.5em)]">
            <span
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
              className={`inline-block transition-[translate,opacity] duration-900 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              {word}
            </span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    </span>
  )
}
