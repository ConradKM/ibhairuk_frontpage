import type { ReactNode } from 'react'
import { BOOKING_URL } from '../lib/constants'

// Every booking call-to-action goes through here, so pointing them all at the booking page
// is a one-line change in lib/constants.ts.
export default function BookButton({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  if (BOOKING_URL) {
    return (
      <a href={BOOKING_URL} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
