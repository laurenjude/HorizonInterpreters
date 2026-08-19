import { Phone, Video, Users, ArrowRight } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import SectionHeading from './SectionHeading'
import PremiumCard from './PremiumCard'

const SERVICES = [
  {
    icon: Phone,
    title: 'Telephone Interpreting',
    description:
      'Connect with a qualified interpreter over the phone within minutes. All 47 languages, 10 minute minimum. Ideal for quick consultations and client calls.',
    price: '£0.55',
    unit: '/min',
  },
  {
    icon: Video,
    title: 'Video Interpreting',
    description:
      'Face to face interpreting over video call using Microsoft Teams. See your interpreter in real time for more personal, nuanced communication.',
    price: '£1.10',
    unit: '/min',
  },
  {
    icon: Users,
    title: 'Face to Face Interpreting',
    description:
      'An interpreter physically present at your meeting, court hearing, or appointment across Cardiff, Newport, Bristol, Swansea, London, and Birmingham.',
    price: '£40',
    unit: '/hour',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-section">
      <div className="container-x">
        <SectionHeading
          number="01"
          label="Services"
          title="Three ways to reach a qualified interpreter"
          aside="Every route is staffed by vetted linguists who understand the setting, not just the language."
        />

        <div className="auto-grid">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollFadeIn key={service.title} delay={i * 90} className="h-full">
                <PremiumCard bodyClassName="flex flex-col p-[clamp(1.625rem,3vw,2.125rem)]">
                  <div className="grid place-items-center w-14 h-14 rounded-2xl bg-teal-light mb-6 transition-all duration-[380ms] ease-premium group-hover:-translate-y-0.5 group-hover:-rotate-6 group-hover:bg-teal-tint">
                    <Icon className="text-teal-mid" size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-heading text-h3 font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="flex-1 text-[0.969rem] leading-[1.68] text-text-light mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-5 border-t border-border-soft">
                    <p className="font-heading text-[1.063rem] font-semibold text-teal-dark">
                      From {service.price}
                      <span className="text-sm font-normal text-[#8B9AA2]">{service.unit}</span>
                    </p>
                    <span className="grid place-items-center w-[2.125rem] h-[2.125rem] shrink-0 rounded-full bg-teal-light text-teal-dark transition-all duration-[260ms] ease-premium group-hover:translate-x-1 group-hover:bg-teal group-hover:text-white">
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </PremiumCard>
              </ScrollFadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
