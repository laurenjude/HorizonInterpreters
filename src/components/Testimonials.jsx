import ScrollFadeIn from './ScrollFadeIn'
import SectionHeading from './SectionHeading'

/** Replace with real quotes. Three is right: two looks thin, four crowds the row. */
const TESTIMONIALS = [
  {
    quote:
      'Placeholder quote. Replace with a real client comment about how quickly a booking was covered and how the session went. Two or three sentences works best.',
    initials: 'AB',
    name: 'Client name',
    role: 'Role, organisation',
  },
  {
    quote:
      'Placeholder quote. A line about a specific language or setting is more persuasive than general praise, so name the situation if the client is happy for you to.',
    initials: 'CD',
    name: 'Client name',
    role: 'Role, organisation',
  },
  {
    quote:
      'Placeholder quote. Ending on the outcome for the person who needed the interpreter is the strongest note to finish on.',
    initials: 'EF',
    name: 'Client name',
    role: 'Role, organisation',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section">
      <div className="container-x">
        <SectionHeading number="05" label="Clients" title="What our clients say" align="center" />

        <div className="auto-grid">
          {TESTIMONIALS.map((t, i) => (
            <ScrollFadeIn key={t.initials} delay={i * 90} className="h-full">
              <figure className="card-lift m-0 h-full flex flex-col rounded-card bg-white border border-border p-[clamp(1.5rem,3.2vw,2.125rem)]">
                <svg width="30" height="24" viewBox="0 0 30 24" fill="#DCEEE8" className="mb-4 shrink-0" aria-hidden="true">
                  <path d="M0 24V13.2C0 5.9 4.2 1.4 11.4 0l1.5 4.2C8.6 5.4 6.3 7.9 6.3 11h4.8v13H0zm18 0V13.2C18 5.9 22.2 1.4 29.4 0l1.5 4.2C26.6 5.4 24.3 7.9 24.3 11h4.8v13H18z" />
                </svg>

                <blockquote className="m-0 mb-6 flex-1 text-lead text-[#3E4E58] text-pretty">
                  {t.quote}
                </blockquote>

                <figcaption className="flex items-center gap-3 pt-5 border-t border-border-soft">
                  <span className="grid place-items-center w-[2.625rem] h-[2.625rem] shrink-0 rounded-full bg-teal-light font-heading text-sm font-semibold text-teal-dark">
                    {t.initials}
                  </span>
                  <span className="block min-w-0">
                    <span className="block font-heading text-[0.938rem] font-semibold text-navy">{t.name}</span>
                    <span className="block mt-0.5 text-[0.844rem] text-[#7B8992]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
