import { useEffect, useState } from 'react'

/** 2px teal bar pinned above the navbar. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[120]" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-teal-deep to-teal shadow-[0_0_12px_rgba(74,158,142,.6)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
