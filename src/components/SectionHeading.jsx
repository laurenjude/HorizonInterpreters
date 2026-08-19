import ScrollFadeIn from './ScrollFadeIn'

/**
 * The single biggest lift on the page. Replaces the centred uppercase h2 with a
 * numbered eyebrow and a tight display headline.
 */
export default function SectionHeading({
  number,
  label,
  title,
  aside,
  align = 'left',
  tone = 'light',
}) {
  const heading = tone === 'dark' ? 'text-white' : 'text-navy'
  const body = tone === 'dark' ? 'text-white/60' : 'text-text-light'
  const eyebrow = tone === 'dark' ? 'text-teal' : 'text-teal'

  if (align === 'center') {
    return (
      <ScrollFadeIn className="max-w-[39rem] mx-auto text-center mb-[clamp(2.125rem,5vw,3.5rem)]">
        <p className={`font-heading text-eyebrow font-semibold uppercase mb-3.5 ${eyebrow}`}>
          {number} / {label}
        </p>
        <h2 className={`font-heading text-h2 font-bold text-balance ${heading}`}>{title}</h2>
        {aside && <p className={`text-lead mt-3.5 ${body}`}>{aside}</p>}
      </ScrollFadeIn>
    )
  }

  return (
    <ScrollFadeIn className="flex flex-wrap items-end justify-between gap-[clamp(1.25rem,4vw,2.5rem)] mb-[clamp(2.125rem,5vw,3.25rem)]">
      <div className="flex-[1_1_26rem] min-w-0">
        <p className={`flex items-center gap-3 font-heading text-eyebrow font-semibold uppercase mb-3.5 ${eyebrow}`}>
          <span className="w-[1.625rem] h-[1.5px] bg-teal shrink-0" />
          {number} / {label}
        </p>
        <h2 className={`font-heading text-h2 font-bold text-balance ${heading}`}>{title}</h2>
      </div>
      {aside && <p className={`flex-[0_1_20.625rem] text-[0.969rem] leading-relaxed ${body}`}>{aside}</p>}
    </ScrollFadeIn>
  )
}
