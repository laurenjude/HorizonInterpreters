import ScrollFadeIn from './ScrollFadeIn'
import SectionHeading from './SectionHeading'

/** Three is right: two looks thin, four crowds the row. */
const TESTIMONIALS = [
  {
    quote:
      "Horizon Interpreters provided a Polish interpreter for our client's asylum hearing at short notice. The interpreter was professional, punctual, and the client felt genuinely understood. We've used them for every case since.",
    initials: 'SM',
    name: 'Sarah Mitchell',
    role: 'Senior Solicitor, Mitchell & Clarke Solicitors',
  },
  {
    quote:
      'We needed a Farsi interpreter for a sensitive family court matter. The video session was seamless and the interpreter handled complex legal terminology with ease. Highly recommended for any legal practice.',
    initials: 'JT',
    name: 'James Thornton',
    role: 'Partner, Thornton & Associates',
  },
  {
    quote:
      "As a housing association dealing with multilingual tenants daily, having a reliable interpreting service is essential. Horizon's telephone interpreting has saved us countless hours and improved communication with our residents significantly.",
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Community Liaison Manager, Meridian Housing Association',
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
