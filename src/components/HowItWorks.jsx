import { useEffect, useRef } from 'react'
import { Calendar, CheckCircle, MessageCircle } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import SectionHeading from './SectionHeading'

const STEPS = [
  {
    icon: Calendar,
    step: 'STEP 01',
    title: 'Submit a booking',
    description:
      'Tell us the language, the date and time, and whether you need telephone, video, or face to face interpreting.',
  },
  {
    icon: CheckCircle,
    step: 'STEP 02',
    title: 'We confirm your interpreter',
    description:
      'We match you with a qualified interpreter and send confirmation with all the details, often within minutes by phone.',
  },
  {
    icon: MessageCircle,
    step: 'STEP 03',
    title: 'The session takes place',
    description:
      'Your interpreter joins the call, video, or meeting. Afterwards you receive documentation and an invoice. Simple.',
  },
]

export default function HowItWorks() {
  const lineRef = useRef(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('drawn')
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how" className="py-section">
      <div className="container-x">
        <SectionHeading
          number="03"
          label="Process"
          title="From booking to delivery in three simple steps"
        />

        <div
          className="relative grid gap-[clamp(1.875rem,4vw,2rem)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          {/* connector fills left to right on entry, hidden once the steps stack */}
          <div ref={lineRef} className="process-line" aria-hidden="true">
            <div className="process-line__fill" />
          </div>

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollFadeIn key={step.title} delay={i * 110}>
                <div className="relative text-center">
                  <div className="relative z-10 grid place-items-center w-14 h-14 mx-auto mb-6 rounded-full bg-teal-mid shadow-[0_0_0_8px_#F7FAF9,0_14px_28px_-14px_rgba(31,92,82,.6)]">
                    <Icon className="text-white" size={24} strokeWidth={1.8} />
                  </div>
                  <p className="font-heading text-[0.719rem] font-semibold tracking-[0.22em] text-teal mb-2">
                    {step.step}
                  </p>
                  <h3 className="font-heading text-[clamp(1.188rem,2.1vw,1.375rem)] font-semibold tracking-[-0.02em] text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-[20.625rem] text-[0.969rem] leading-[1.68] text-text-light">
                    {step.description}
                  </p>
                </div>
              </ScrollFadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
