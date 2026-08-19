import ScrollFadeIn from './ScrollFadeIn'

/**
 * Replace each entry with { name, src } and swap the placeholder span for
 * <img src={logo.src} alt={logo.name} className="max-h-8 w-auto opacity-70" />.
 * Only display marks you are permitted to use.
 */
const LOGOS = [
  { name: 'Client logo 1' },
  { name: 'Client logo 2' },
  { name: 'Client logo 3' },
  { name: 'Client logo 4' },
  { name: 'Client logo 5' },
]

export default function TrustLogos() {
  return (
    <section className="bg-white border-y border-[#E9EFED] py-[clamp(2.5rem,6vw,3.625rem)]">
      <div className="container-x">
        <ScrollFadeIn>
          <p className="text-center font-heading text-eyebrow font-semibold uppercase text-text-muted mb-6">
            Working with organisations across the UK
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={80} className="auto-grid-sm items-center">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="grid place-items-center h-[3.875rem] rounded-xl border border-dashed border-[#DCE7E3] bg-[#FBFDFC] transition-all duration-[260ms] ease-premium hover:-translate-y-0.5 hover:border-[#B6D6CD] hover:bg-[#F4FAF8]"
            >
              <span className="font-heading text-[0.844rem] font-semibold tracking-[0.06em] text-[#A9B6BC] text-center px-2.5">
                {logo.name}
              </span>
            </div>
          ))}
        </ScrollFadeIn>
      </div>
    </section>
  )
}
