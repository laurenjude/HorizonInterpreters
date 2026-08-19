import { Scale, Heart, Building, Briefcase, ArrowRight } from 'lucide-react'
import DynamicHeroText from './DynamicHeroText'
import GlobeIllustration from './GlobeIllustration'
import MagneticButton from './MagneticButton'
import useCountUp from '../hooks/useCountUp'

const TRUST_BADGES = [
  { icon: Scale, label: 'Legal & Immigration' },
  { icon: Heart, label: 'NHS & Healthcare' },
  { icon: Building, label: 'Local Councils' },
  { icon: Briefcase, label: 'Corporate' },
]

function Stat({ target, decimals = 0, suffix, caption }) {
  const [ref, value] = useCountUp(target, { decimals })
  return (
    <div className="bg-white/[.82] px-[clamp(1.375rem,3vw,1.875rem)] py-[clamp(1.375rem,3vw,1.75rem)]">
      <p className="m-0 font-heading text-[clamp(1.938rem,4vw,2.375rem)] font-bold tracking-[-0.03em] text-navy">
        <span ref={ref}>{value}</span>
        {suffix && <span className="text-[0.62em]">{suffix}</span>}
      </p>
      <p className="mt-1.5 text-[0.813rem] tracking-[0.03em] text-text-light">{caption}</p>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-[clamp(7.625rem,16vw,11.5rem)] pb-[clamp(4rem,8vw,6rem)]">
      {/* ambient wash and ghost grid, both non interactive */}
      <div
        className="absolute -top-[11.25rem] -right-[8.75rem] w-[51.25rem] h-[51.25rem] rounded-full animate-glow pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(74,158,142,.16) 0%, rgba(74,158,142,.05) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-ghost pointer-events-none" aria-hidden="true" />

      <div className="relative container-x flex flex-wrap items-center gap-[clamp(2.125rem,5vw,3.5rem)]">
        <div className="flex-[1_1_27.5rem] min-w-0">
          {/* live availability pill: the cheapest credibility signal on the page */}
          <div className="hero-anim inline-flex flex-wrap items-center gap-2.5 rounded-full bg-white border border-border pl-3 pr-2 py-[7px] shadow-[0_6px_18px_-12px_rgba(14,26,34,.2)] mb-6">
            <span className="relative grid place-items-center w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-teal animate-ping2" />
              <span className="relative w-2 h-2 rounded-full bg-teal-mid" />
            </span>
            <span className="text-[0.781rem] font-medium text-[#3A4A54]">Interpreters available now</span>
            <span className="rounded-full bg-teal-light px-2.5 py-1 text-[0.688rem] font-medium tracking-[0.04em] text-teal-dark">
              8am to 8pm, 7 days
            </span>
          </div>

          <div className="hero-anim">
            <DynamicHeroText />
          </div>

          <p className="hero-anim hero-anim-subtitle max-w-[32.5rem] text-lead text-[#5F6F7A] text-pretty mb-8 mt-5">
            Horizon Interpreters provides professional telephone, video, and face to face
            interpreting across 47 languages. Specialising in East and Central African languages
            with UK wide coverage.
          </p>

          <div className="hero-anim hero-anim-buttons flex flex-wrap items-center gap-3 mb-9">
            <MagneticButton
              href="#contact"
              className="bg-teal-mid text-white px-[clamp(1.375rem,3vw,1.875rem)] py-[1.0625rem] text-[clamp(0.938rem,1.6vw,1rem)] shadow-cta hover:bg-teal-dark hover:shadow-cta-hover"
            >
              Book an Interpreter
              <ArrowRight size={17} className="transition-transform duration-[240ms] ease-premium group-hover:translate-x-1" />
            </MagneticButton>

            <a
              href="#services"
              className="inline-flex items-center gap-2.5 rounded-control bg-white border border-[#D9E5E1] px-[clamp(1.25rem,3vw,1.75rem)] py-4 font-heading font-semibold text-[clamp(0.938rem,1.6vw,1rem)] text-[#1D3A33] transition-all duration-[220ms] ease-premium hover:border-teal hover:bg-teal-light"
            >
              View Our Services
            </a>
          </div>

          <div className="hero-anim hero-anim-trust flex flex-wrap gap-2.5">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2.5 text-[0.813rem] text-[#4A5A64]"
              >
                <Icon size={14} className="text-teal shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-anim hero-anim-graphic flex-[1_1_22.5rem] min-w-0">
          <GlobeIllustration />
        </div>
      </div>

      {/* glass stat bar: only facts already on the site */}
      <div className="relative container-x mt-[clamp(3rem,7vw,4.5rem)]">
        <div className="auto-grid-stat rounded-[1.25rem] border border-border bg-border-soft overflow-hidden">
          <Stat target={47} caption="Languages covered" />
          <Stat target={3} caption="Ways to connect" />
          <Stat target={6} caption="Cities served in person" />
          <Stat target={2} suffix="hr" caption="Booking confirmation" />
        </div>
      </div>
    </section>
  )
}
