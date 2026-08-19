import { useRef } from 'react'

/**
 * Gradient hairline border plus a spotlight that follows the cursor.
 * Feeds --mx / --my to .card-premium::before in premium.css.
 */
export default function PremiumCard({ children, className = '', bodyClassName = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`card-premium group h-full ${className}`}>
      <div className={`card-premium__body ${bodyClassName}`}>{children}</div>
    </div>
  )
}
