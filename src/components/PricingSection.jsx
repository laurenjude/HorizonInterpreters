import { Check, Scale } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import SectionHeading from './SectionHeading'
import MagneticButton from './MagneticButton'
import useCountUp from '../hooks/useCountUp'

const PLANS = [
  {
    name: 'Telephone',
    amount: 1.5,
    decimals: 2,
    unit: 'per minute',
    features: [
      'All 47 languages available',
      '10 minute minimum',
      'Standard rate £1.50/min',
      'Introductory £1.50/min for first 100 mins',
      'Instant connection',
    ],
    highlighted: false,
  },
  {
    name: 'Video',
    amount: 2,
    decimals: 2,
    unit: 'per minute',
    features: [
      'All 47 languages available',
      '10 minute minimum',
      'Via Microsoft Teams',
      'Visual communication',
      'Screen sharing available',
    ],
    highlighted: true,
  },
  {
    name: 'Face to Face',
    amount: 50,
    decimals: 2,
    unit: 'per hour',
    features: [
      'Cardiff, Newport, Bristol, Swansea',
      'London and Birmingham available',
      '1 hour minimum',
      'Travel at 45p per mile or train fare',
      'Court, medical, business settings',
    ],
    highlighted: false,
  },
]

function PlanCard({ plan }) {
  const [priceRef, price] = useCountUp(plan.amount, { decimals: plan.decimals })

  if (plan.highlighted) {
    // contrast, not just a teal border, is what makes "most popular" read premium
    return (
      <div className="card-lift relative overflow-hidden rounded-card bg-navy px-[clamp(1.5rem,2.8vw,2rem)] pt-[clamp(2.25rem,4vw,2.75rem)] pb-[clamp(1.875rem,3.4vw,2.375rem)] shadow-feature">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[26.25rem] h-80 animate-glow pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(74,158,142,.4), transparent 68%)' }}
          aria-hidden="true"
        />
        <span className="absolute top-4 right-4 rounded-full bg-teal px-3.5 py-[7px] font-heading text-[0.656rem] font-semibold tracking-[0.12em] text-[#04211B]">
          MOST POPULAR
        </span>

        <p className="relative font-heading text-xl font-semibold text-white mb-5">{plan.name}</p>
        <p className="relative text-[0.813rem] uppercase tracking-[0.08em] text-[#7C8F98]">From</p>
        <p className="relative font-heading text-price font-bold text-teal-bright mt-1.5 mb-0.5">
          £<span ref={priceRef}>{price}</span>
        </p>
        <p className="relative text-[0.906rem] text-[#9AA9B1] mb-6">{plan.unit}</p>
        <div className="relative h-px bg-white/10 mb-6" />

        <ul className="relative m-0 mb-7 p-0 list-none grid gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-[0.938rem] text-[#D3DDE2]">
              <Check size={16} className="text-teal mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <MagneticButton
          href="#contact"
          sheenClass="sheen sheen--bright"
          className="relative w-full bg-teal py-4 text-[0.969rem] text-[#04211B] hover:bg-teal-bright"
        >
          Book Now
        </MagneticButton>
      </div>
    )
  }

  return (
    <div className="card-lift rounded-card bg-white border border-border px-[clamp(1.5rem,2.8vw,2rem)] py-[clamp(1.875rem,3.4vw,2.375rem)]">
      <p className="font-heading text-xl font-semibold text-navy mb-5">{plan.name}</p>
      <p className="text-[0.813rem] uppercase tracking-[0.08em] text-text-muted">From</p>
      <p className="font-heading text-price font-bold text-teal-dark mt-1.5 mb-0.5">
        £<span ref={priceRef}>{price}</span>
      </p>
      <p className="text-[0.906rem] text-text-light mb-6">{plan.unit}</p>
      <div className="h-px bg-border-soft mb-6" />

      <ul className="m-0 mb-7 p-0 list-none grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[0.938rem] text-[#3E4E58]">
            <Check size={16} className="text-teal mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="block rounded-xl border-[1.5px] border-teal py-[0.9375rem] text-center font-heading text-[0.969rem] font-semibold text-teal-dark transition-colors duration-[220ms] hover:bg-teal-light"
      >
        Book Now
      </a>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-section bg-light-alt">
      <div className="container-x">
        <SectionHeading
          number="04"
          label="Pricing"
          title="Transparent pricing"
          aside="Clear rates with no hidden fees."
          align="center"
        />

        <div className="auto-grid items-start mb-[clamp(2.5rem,5vw,3.5rem)]">
          {PLANS.map((plan, i) => (
            <ScrollFadeIn key={plan.name} delay={i * 90} className="h-full">
              <PlanCard plan={plan} />
            </ScrollFadeIn>
          ))}
        </div>

        {/* the bundle is the most commercially specific thing on the page, so it gets
            its own full width band rather than sitting as a fourth card */}
        <ScrollFadeIn>
          <div className="rounded-card bg-white border border-[#DCE9E5] p-[clamp(1.5rem,3vw,2.25rem)] flex flex-wrap items-center gap-[clamp(1.25rem,3vw,2rem)]">
            <div className="grid place-items-center w-14 h-14 shrink-0 rounded-2xl bg-teal-light">
              <Scale className="text-teal-mid" size={26} strokeWidth={1.8} />
            </div>
            <div className="flex-[1_1_20rem] min-w-0">
              <p className="font-heading text-[1.125rem] font-semibold text-navy mb-2">
                Asylum &amp; Immigration Bundle
              </p>
              <p className="text-[0.938rem] leading-[1.65] text-text-light text-pretty">
                120 telephone minutes for £72, which works out at £0.60 per minute, valid for one
                month. Includes a free written confirmation email after every call for your Legal
                Aid file. Designed for solicitors handling asylum and immigration cases.
              </p>
            </div>
            <MagneticButton
              href="#contact"
              className="bg-teal-mid text-white px-6 py-[0.9375rem] text-[0.938rem] whitespace-nowrap shadow-[0_14px_30px_-14px_rgba(31,92,82,.6)] hover:bg-teal-dark"
            >
              Enquire About This Bundle
            </MagneticButton>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
