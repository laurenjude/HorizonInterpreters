import ScrollFadeIn from './ScrollFadeIn'
import useCountUp from '../hooks/useCountUp'
import { specialistLanguages, additionalLanguages } from '../data/languages'

/** split in two so the rows can scroll in opposite directions */
const half = Math.ceil(additionalLanguages.length / 2)
const rowA = additionalLanguages.slice(0, half)
const rowB = additionalLanguages.slice(half)

function MarqueeRow({ items, animation }) {
  // doubled so the -50% loop is seamless
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-track ${animation}`}>
      {doubled.map((lang, i) => (
        <span
          key={`${lang}-${i}`}
          className="whitespace-nowrap rounded-full bg-white border border-[#DDEAE6] px-[1.1875rem] py-2.5 text-[0.906rem] text-[#4A5A64]"
        >
          {lang}
        </span>
      ))}
    </div>
  )
}

export default function LanguagesSection() {
  const [countRef, count] = useCountUp(47)

  return (
    <section id="languages" className="py-[clamp(4.125rem,8.5vw,6.5rem)] bg-gradient-to-b from-[#F1F7F5] to-teal-light">
      <div className="container-x">
        <ScrollFadeIn className="max-w-[41.25rem] mx-auto text-center mb-[clamp(1.875rem,4vw,2.875rem)]">
          <p className="font-heading text-eyebrow font-semibold uppercase text-teal-mid mb-3.5">
            02 / Languages
          </p>
          <h2 className="font-heading text-h2 font-bold text-navy mb-3.5">
            <span ref={countRef}>{count}</span> languages. One call away.
          </h2>
          <p className="text-lead text-[#5F6F7A]">
            Specialising in East and Central African languages with comprehensive global coverage.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="flex flex-wrap items-center justify-center gap-3 mb-[clamp(1.625rem,4vw,2.75rem)]">
          <span className="rounded-full bg-navy px-4 py-2 font-heading text-[0.688rem] font-semibold tracking-[0.16em] text-white">
            SPECIALISTS
          </span>
          <span className="font-heading text-[clamp(1.125rem,2.2vw,1.375rem)] font-semibold tracking-[-0.02em] text-navy">
            East &amp; Central African
          </span>
        </ScrollFadeIn>

        <ScrollFadeIn className="flex flex-wrap justify-center gap-3 mb-[clamp(2.5rem,6vw,3.75rem)]">
          {specialistLanguages.map((lang) => (
            <span
              key={lang}
              className="rounded-full bg-white border-[1.5px] border-teal px-[clamp(1.25rem,2.6vw,1.75rem)] py-3.5 font-heading text-[clamp(0.906rem,1.6vw,1rem)] font-semibold text-teal-dark transition-all duration-[220ms] ease-premium hover:-translate-y-[3px] hover:bg-navy hover:border-navy hover:text-teal-bright hover:shadow-[0_14px_26px_-14px_rgba(31,92,82,.55)]"
            >
              {lang}
            </span>
          ))}
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-center font-heading text-[clamp(1.063rem,1.9vw,1.188rem)] font-semibold text-navy mb-5">
            Additional languages
          </p>
          {/* two rows drifting opposite ways, paused on hover */}
          <div className="marquee-mask">
            <MarqueeRow items={rowA} animation="animate-marquee" />
            <MarqueeRow items={rowB} animation="animate-marquee-slow" />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn className="text-center mt-7">
          <p className="text-[0.969rem] text-[#5F6F7A]">
            Don&apos;t see your language?{' '}
            <a href="#contact" className="font-medium text-teal-dark border-b border-teal/40 hover:text-teal-deep">
              Contact us
            </a>{' '}
            and we may still be able to help.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
