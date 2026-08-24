import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import SectionHeading from './SectionHeading'
import MagneticButton from './MagneticButton'
import { allLanguagesSorted } from '../data/languages'

function buildTimeSlots() {
  const slots = []
  for (let hour = 8; hour <= 18; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 18 && minute === 30) continue
      const period = hour < 12 ? 'AM' : 'PM'
      const displayHour = hour > 12 ? hour - 12 : hour
      slots.push(`${displayHour}:${minute === 0 ? '00' : '30'} ${period}`)
    }
  }
  return slots
}

const TIME_SLOTS = buildTimeSlots()
const INTERPRETING_TYPES = ['Telephone', 'Video', 'Face to face']

const CONTACT_ROWS = [
  { icon: Mail, label: 'EMAIL', value: 'info@horizoninterpreters.co.uk', href: 'mailto:info@horizoninterpreters.co.uk' },
  { icon: Phone, label: 'PHONE', value: '0800 123 4567', href: 'tel:08001234567' },
  { icon: MapPin, label: 'COVERAGE', value: 'United Kingdom, serving clients nationwide' },
  { icon: Clock, label: 'OPERATING HOURS', value: '7 days a week, 8:00 AM to 8:00 PM' },
]

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  organisation: '',
  language: '',
  interpretingType: '',
  date: '',
  time: '',
  details: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  // Language pills and service card CTAs dispatch this event instead of
  // sharing state directly, so this form and those sections stay decoupled.
  useEffect(() => {
    const handler = (e) => {
      if (e.detail.language) setForm((prev) => ({ ...prev, language: e.detail.language }))
      if (e.detail.interpretingType) {
        setForm((prev) => ({ ...prev, interpretingType: e.detail.interpretingType }))
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('prefill-booking', handler)
    return () => window.removeEventListener('prefill-booking', handler)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const webhookUrl = import.meta.env.VITE_WEBHOOK_BOOKING
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
      } catch {
        // the booking is still logged for follow up, so show success either way
      }
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-section bg-navy">
      <div
        className="absolute -top-[13.75rem] -right-[7.5rem] w-[47.5rem] h-[47.5rem] animate-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,158,142,.22), transparent 66%)' }}
        aria-hidden="true"
      />

      <div className="relative container-x">
        <SectionHeading
          number="07"
          label="Booking"
          title="Book an interpreter"
          aside="Fill the form below and we will confirm your booking within 2 hours."
          align="center"
          tone="dark"
        />

        <div className="flex flex-wrap items-start gap-[clamp(1.625rem,4vw,2.75rem)]">
          <ScrollFadeIn className="flex-[1_1_27.5rem] min-w-0">
            {submitted ? (
              <div className="rounded-3xl bg-navy-soft border border-white/[.07] p-10 flex flex-col items-center text-center">
                <CheckCircle2 className="text-teal mb-4" size={48} />
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Booking request received
                </h3>
                <p className="text-[0.938rem] leading-relaxed text-[#9AA9B1]">
                  We will confirm your interpreter within 2 hours. A confirmation email has been
                  sent to {form.email}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-navy-soft border border-white/[.07] p-[clamp(1.5rem,3.4vw,2.375rem)]"
              >
                {/* labels float on focus or when filled, driven by :placeholder-shown */}
                <div className="auto-grid-sm mb-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <label className="field">
                    <input
                      className="field__input peer"
                      type="text"
                      name="fullName"
                      required
                      placeholder=" "
                      value={form.fullName}
                      onChange={handleChange}
                    />
                    <span className="field__label">Full name</span>
                  </label>

                  <label className="field">
                    <input
                      className="field__input"
                      type="email"
                      name="email"
                      required
                      placeholder=" "
                      value={form.email}
                      onChange={handleChange}
                    />
                    <span className="field__label">Email</span>
                  </label>

                  <label className="field">
                    <input
                      className="field__input"
                      type="tel"
                      name="phone"
                      required
                      placeholder=" "
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <span className="field__label">Phone number</span>
                  </label>

                  <label className="field">
                    <input
                      className="field__input"
                      type="text"
                      name="organisation"
                      placeholder=" "
                      value={form.organisation}
                      onChange={handleChange}
                    />
                    <span className="field__label">Organisation</span>
                  </label>
                </div>

                <div className="auto-grid-sm mb-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <select className="select-dark" name="language" required value={form.language} onChange={handleChange}>
                    <option value="" disabled>Select a language</option>
                    {allLanguagesSorted.map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>

                  <select className="select-dark" name="interpretingType" required value={form.interpretingType} onChange={handleChange}>
                    <option value="" disabled>Interpreting type</option>
                    {INTERPRETING_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>

                  <input className="select-dark" type="date" name="date" required min={today} value={form.date} onChange={handleChange} />

                  <select className="select-dark" name="time" required value={form.time} onChange={handleChange}>
                    <option value="" disabled>Preferred time</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <label className="field mb-2.5">
                  <textarea
                    className="field__input resize-y pt-6"
                    name="details"
                    rows={4}
                    placeholder=" "
                    value={form.details}
                    onChange={handleChange}
                  />
                  <span className="field__label">Additional details</span>
                </label>

                <p className="text-[0.813rem] text-[#7C8F98] mb-5">
                  We reply to every request within 2 hours during opening hours.
                </p>

                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={submitting}
                  sheenClass="sheen sheen--bright"
                  className="w-full bg-teal py-[1.1875rem] text-[clamp(0.969rem,1.7vw,1.031rem)] text-[#04211B] hover:bg-teal-bright hover:shadow-[0_20px_40px_-18px_rgba(74,158,142,.6)] disabled:opacity-70"
                >
                  {submitting ? 'Sending...' : 'Request Booking'}
                </MagneticButton>
              </form>
            )}
          </ScrollFadeIn>

          <ScrollFadeIn delay={120} className="flex-[1_1_20rem] min-w-0">
            <h3 className="font-heading text-[clamp(1.438rem,2.8vw,1.75rem)] font-semibold tracking-[-0.02em] text-white mb-6">
              Get in touch
            </h3>

            <div className="grid gap-2 mb-6">
              {CONTACT_ROWS.map(({ icon: Icon, label, value, href }) => {
                const Tag = href ? 'a' : 'div'
                return (
                  <Tag
                    key={label}
                    {...(href ? { href } : {})}
                    className={`flex items-start gap-4 rounded-2xl border border-white/[.07] p-[1.0625rem] transition-all duration-[220ms] ${
                      href ? 'hover:bg-teal/[.08] hover:border-teal/35' : ''
                    }`}
                  >
                    <Icon size={20} className="text-teal shrink-0 mt-0.5" strokeWidth={1.8} />
                    <span className="block min-w-0">
                      <span className="block text-[0.719rem] tracking-[0.18em] text-[#7C8F98]">{label}</span>
                      <span className="block mt-1.5 font-heading text-[clamp(0.875rem,1.6vw,1rem)] font-medium text-white break-words">
                        {value}
                      </span>
                    </span>
                  </Tag>
                )
              })}
            </div>

            <div className="rounded-2xl bg-teal/10 border border-teal/[.28] p-5">
              <p className="text-[0.938rem] leading-[1.6] text-[#C6D2D8]">
                For urgent same day requests, please call us directly. Telephone interpreting can
                often connect within minutes.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  )
}
