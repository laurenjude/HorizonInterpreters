import { useEffect, useRef, useState } from 'react'

/**
 * Counts 0 -> target once the element scrolls into view. Fires once.
 *   const [ref, value] = useCountUp(47)
 *   const [ref, value] = useCountUp(0.55, { decimals: 2 })
 */
export default function useCountUp(target, { decimals = 0, duration = 1250 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState((0).toFixed(decimals))
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target.toFixed(decimals))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return
        fired.current = true
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration)
          setValue((target * (1 - Math.pow(1 - p, 3))).toFixed(decimals))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals, duration])

  return [ref, value]
}
