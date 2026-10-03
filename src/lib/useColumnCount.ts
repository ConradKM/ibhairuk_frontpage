import { useEffect, useState } from 'react'

const WIDE = '(min-width: 64rem)' // Tailwind's lg breakpoint

/** 3 columns on wide screens, 2 otherwise — kept in step with the window size. */
export function useColumnCount() {
  const [count, setCount] = useState(() => (window.matchMedia(WIDE).matches ? 3 : 2))

  useEffect(() => {
    const query = window.matchMedia(WIDE)
    const onChange = () => setCount(query.matches ? 3 : 2)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return count
}
