import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(node)
      }
    }, { threshold: 0.15, ...options })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
