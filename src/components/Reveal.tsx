import type { ReactNode } from 'react'
import { useInView } from '../lib/useInView'

/** Fades its children up into place the first time they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,translate] duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
