import { ShieldCheck } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'

/** Keep only credentials you genuinely hold. Delete the rest. */
const BADGES = [
  'NRPSI registered interpreters',
  'DPSI qualified',
  'Enhanced DBS checked',
  'GDPR compliant handling',
]

export default function Accreditations() {
  return (
    <section className="bg-teal-light py-[clamp(3.5rem,7vw,5rem)]">
      <div className="container-x">
        <ScrollFadeIn className="flex flex-wrap items-center justify-between gap-[clamp(1.5rem,4vw,3rem)]">
          <div className="flex-[1_1_18.75rem] min-w-0">
            <p className="font-heading text-eyebrow font-semibold uppercase text-teal-mid mb-3">
              Standards
            </p>
            <h2 className="font-heading text-[clamp(1.625rem,3.4vw,2.125rem)] leading-[1.14] tracking-[-0.03em] font-bold text-navy mb-3">
              Vetted, qualified, accountable
            </h2>
            <p className="max-w-[26.25rem] text-[0.969rem] leading-relaxed text-[#5F6F7A]">
              Every interpreter on our register is credential checked and bound by a professional
              code of conduct before taking a single booking.
            </p>
          </div>

          <div className="flex-[1_1_26.25rem] min-w-0 auto-grid-sm">
            {BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-2xl bg-white border border-[#DCE9E5] px-[1.125rem] py-4 transition-all duration-[240ms] ease-premium hover:-translate-y-0.5 hover:shadow-badge"
              >
                <ShieldCheck size={18} className="text-teal-mid shrink-0" />
                <span className="font-heading text-[0.844rem] font-semibold leading-snug text-navy">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
