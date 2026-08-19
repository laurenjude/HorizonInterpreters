import { useRef } from 'react'

/**
 * Leans a few px toward the cursor, with a light sweep on hover.
 * Skipped on touch and under reduced motion.
 */
export default function MagneticButton({
  as: Tag = 'a',
  children,
  className = '',
  sheenClass = 'sheen',
  strength = 5,
  ...props
}) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    el.style.transform = `translate(${dx * strength}px, ${dy * strength * 0.6}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'none'
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-control font-heading font-semibold transition-[background,box-shadow,transform] duration-[260ms] ease-premium ${className}`}
      {...props}
    >
      <span className="relative z-[1] inline-flex items-center gap-2.5">{children}</span>
      <span className={sheenClass} aria-hidden="true" />
    </Tag>
  )
}
