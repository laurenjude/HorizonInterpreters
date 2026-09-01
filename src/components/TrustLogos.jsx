import { Scale, Shield, Cross, Home, Crown } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'

const LOGOS = [
  { name: 'Whitmore & Clarke Solicitors', mark: 'Whitmore & Clarke', sub: 'Solicitors', Icon: Scale },
  { name: 'Barrington Legal Group', mark: 'BLG', sub: 'Barrington Legal Group', Icon: Shield },
  { name: 'NHS Greater London Trust', mark: 'NHS', sub: 'Greater London Trust', Icon: Cross },
  { name: 'Meridian Housing Association', mark: 'Meridian', sub: 'Housing Association', Icon: Home },
  { name: 'Crown Prosecution Service', mark: 'CPS', sub: 'Crown Prosecution Service', Icon: Crown },
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
          {LOGOS.map(({ name, mark, sub, Icon }) => (
            <div
              key={name}
              className="grid place-items-center h-[3.875rem] rounded-xl border border-dashed border-[#DCE7E3] bg-[#FBFDFC] transition-all duration-[260ms] ease-premium hover:-translate-y-0.5 hover:border-[#B6D6CD] hover:bg-[#F4FAF8]"
            >
              <div className="flex items-center gap-2 px-2.5 max-w-full" role="img" aria-label={name}>
                <Icon size={22} strokeWidth={1.8} className="shrink-0 text-[#3A4A54]" aria-hidden="true" />
                <span className="min-w-0 leading-tight text-left">
                  <span className="block font-heading text-[0.75rem] font-semibold tracking-[0.01em] text-[#3A4A54] truncate">
                    {mark}
                  </span>
                  <span className="block text-[0.594rem] tracking-[0.02em] text-[#8B9AA2] truncate">
                    {sub}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </ScrollFadeIn>
      </div>
    </section>
  )
}
