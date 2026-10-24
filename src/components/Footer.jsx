import { useState } from 'react'
import { Mail, Phone, MapPin, Copy } from 'lucide-react'
import BridgeLogo from './BridgeLogo'

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Languages', href: '#languages' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const CONTACT = [
  { icon: Mail, value: 'bookings@horizoninterpreters.uk', href: 'mailto:bookings@horizoninterpreters.uk' },
  { icon: Phone, value: '+44 29 2271 5961', href: 'tel:+442922715961', copy: true },
  { icon: MapPin, value: 'United Kingdom, nationwide' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  return (
    <footer className="bg-navy-dark">
      <div className="h-0.5 bg-gradient-to-r from-teal-deep via-teal to-teal-deep" />

      <div
        className="container-x py-[clamp(2.75rem,6vw,4rem)] grid gap-[clamp(2rem,4vw,3rem)]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
      >
        <div>
          <BridgeLogo size="medium" dark />
          <p className="mt-4 text-[0.875rem] leading-relaxed text-[#8A98A0] max-w-[16rem]">
            Professional interpreting across 47 languages, with UK wide coverage.
          </p>
        </div>

        <div>
          <p className="font-heading text-[0.719rem] font-semibold uppercase tracking-[0.18em] text-white mb-5">
            Quick links
          </p>
          <ul className="m-0 p-0 list-none grid gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[0.875rem] text-[#8A98A0] transition-colors hover:text-teal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-[0.719rem] font-semibold uppercase tracking-[0.18em] text-white mb-5">
            Contact
          </p>
          <ul className="m-0 p-0 list-none grid gap-3 mb-6">
            {CONTACT.map(({ icon: Icon, value, href, copy: copyable }) => (
              <li key={value} className="flex items-center gap-2.5 text-[0.875rem] text-[#8A98A0]">
                <Icon size={16} className="text-teal shrink-0" />
                {href ? (
                  <a href={href} aria-label={copyable ? 'Call Horizon Interpreters' : undefined} className="text-[#8A98A0] transition-colors hover:text-teal break-words">
                    {value}
                  </a>
                ) : (
                  <span className="break-words">{value}</span>
                )}
                {copyable && (
                  <button
                    type="button"
                    onClick={() => { navigator.clipboard.writeText('+442922715961'); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
                    aria-label="Copy phone number"
                    className="ml-auto shrink-0 rounded p-1 text-[#7C8F98] hover:text-teal transition-colors"
                  >
                    {copied ? <span className="text-[0.688rem] font-medium text-teal">Copied</span> : <Copy size={14} />}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <a
            href="https://automationprimeafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 text-[0.75rem] text-teal transition-colors hover:text-teal-bright"
          >
            Powered by Automation Prime Africa
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-[0.75rem] text-[#5F6F7A]">
          © 2026 Horizon Interpreters LTD. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
