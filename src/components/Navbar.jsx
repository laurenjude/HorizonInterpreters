import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import BridgeLogo from './BridgeLogo'
import MagneticButton from './MagneticButton'
import useScrollPosition from '../hooks/useScrollPosition'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Languages', href: '#languages' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const scrolled = useScrollPosition(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // active link driven by state rather than by toggling classes on DOM nodes
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-20% 0px -45% 0px', threshold: 0.05 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={`fixed top-0.5 left-0 right-0 z-[110] backdrop-blur-[14px] backdrop-saturate-[180%] border-b transition-all duration-[320ms] ease-premium ${
          scrolled
            ? 'py-[11px] bg-light/90 border-border shadow-nav'
            : 'py-[18px] bg-light/[.74] border-transparent'
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-6">
          <a href="#top" className="shrink-0" aria-label="Horizon Interpreters, home">
            <BridgeLogo size="small" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-[9px] px-3.5 py-2.5 text-[0.906rem] font-medium transition-colors duration-[180ms] ${
                  active === link.href
                    ? 'text-navy bg-teal/10'
                    : 'text-[#3A4A54] hover:text-navy hover:bg-teal/[.08]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <MagneticButton
            href="#contact"
            strength={4}
            className="hidden lg:inline-flex bg-teal-mid text-white px-[1.3125rem] py-[0.8125rem] text-[0.875rem] whitespace-nowrap shadow-[0_10px_24px_-12px_rgba(31,92,82,.55)] hover:bg-teal-dark"
          >
            Book an Interpreter
            <ArrowRight size={15} className="transition-transform duration-[240ms] ease-premium group-hover:translate-x-1" />
          </MagneticButton>

          <button
            type="button"
            className="lg:hidden grid place-items-center w-[2.875rem] h-[2.875rem] shrink-0 rounded-xl border border-[#DCE7E3] bg-white text-navy"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* light panel rather than a full navy takeover: less jarring, stays on brand */}
      {menuOpen && (
        <div className="fixed inset-0 z-[105] bg-light lg:hidden pt-28 px-gutter">
          <div className="grid gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3.5 py-4 font-heading text-[1.0625rem] font-medium text-navy hover:bg-teal/[.08]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2.5 rounded-xl bg-teal-mid px-4 py-[1.0625rem] text-center font-heading font-semibold text-white"
            >
              Book an Interpreter
            </a>
            <a href="tel:+447448220738" className="px-4 py-4 text-center text-[0.938rem] text-text-light">
              or call +44 7448 220738
            </a>
          </div>
        </div>
      )}
    </>
  )
}
