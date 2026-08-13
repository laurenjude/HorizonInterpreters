import { Phone, Video, Users } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'

const SERVICES = [
  {
    icon: Phone,
    title: 'Telephone Interpreting',
    description:
      'Connect with a qualified interpreter over the phone within minutes. Available for all 47 languages with a 10-minute minimum. Ideal for quick consultations, appointment scheduling, and client calls.',
    rate: 'From £0.55/min',
  },
  {
    icon: Video,
    title: 'Video Interpreting',
    description:
      'Face-to-face interpreting over video call using Microsoft Teams. See your interpreter in real time for a more personal and nuanced communication experience. 10-minute minimum.',
    rate: 'From £1.10/min',
  },
  {
    icon: Users,
    title: 'Face-to-Face Interpreting',
    description:
      'An interpreter physically present at your meeting, court hearing, medical appointment, or business engagement. Available across Cardiff, Newport, Bristol, Swansea, London, and Birmingham.',
    rate: 'From £40/hour',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="font-heading font-bold text-navy text-3xl lg:text-4xl uppercase mb-3">
            Our Services
          </h2>
          <p className="text-text-light text-base">Three ways to access professional interpreting</p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollFadeIn key={service.title} delay={i * 100}>
                <div className="h-full bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-8">
                  <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mb-6">
                    <Icon className="text-teal" size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">{service.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-5">{service.description}</p>
                  <p className="text-teal font-bold">{service.rate}</p>
                </div>
              </ScrollFadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
