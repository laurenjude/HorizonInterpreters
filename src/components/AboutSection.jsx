import ScrollFadeIn from './ScrollFadeIn'
import BridgeLogo from './BridgeLogo'

const PROMISES = [
  { title: 'Prompt confirmation', body: 'Every booking confirmed within 2 hours.' },
  { title: 'Cultural context', body: 'Interpreters briefed on the setting, not just the words.' },
  { title: 'Full documentation', body: 'Records and invoicing supplied after every session.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-section">
      <div className="container-x flex flex-wrap items-center gap-[clamp(2.25rem,5vw,4rem)]">
        <ScrollFadeIn className="flex-[1_1_21.25rem] min-w-0">
          <div className="card-lift relative overflow-hidden rounded-3xl bg-navy px-[clamp(1.625rem,4vw,2.5rem)] py-[clamp(3.25rem,7vw,4.75rem)] grid place-items-center shadow-[0_40px_70px_-34px_rgba(14,26,34,.6)]">
            <div
              className="absolute -top-36 -left-20 w-[26.25rem] h-[26.25rem] animate-glow pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(74,158,142,.32), transparent 68%)' }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
                backgroundSize: '38px 38px',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <BridgeLogo size="large" dark />
            </div>
          </div>
        </ScrollFadeIn>

        <div className="flex-[1_1_26.25rem] min-w-0">
          <ScrollFadeIn>
            <p className="flex items-center gap-3 font-heading text-eyebrow font-semibold uppercase text-teal mb-3.5">
              <span className="w-[1.625rem] h-[1.5px] bg-teal shrink-0" />
              06 / About us
            </p>
            <h2 className="font-heading text-[clamp(1.813rem,4.2vw,2.75rem)] leading-[1.11] tracking-[-0.03em] font-bold text-navy text-balance mb-6">
              Professional interpreting you can rely on
            </h2>
          </ScrollFadeIn>

          {/* one wall of text became two paragraphs plus three promises */}
          <ScrollFadeIn delay={80}>
            <p className="text-lead text-[#4E5E68] text-pretty mb-4">
              Horizon Interpreters was founded to bridge the communication gap for communities and
              professionals across the United Kingdom. We specialise in East and Central African
              languages, where qualified interpreters are scarce and the need is greatest.
            </p>
            <p className="text-lead text-[#4E5E68] text-pretty mb-8">
              Our interpreters are not just linguists. They understand the cultural context behind
              every conversation, whether it is a legal consultation, a medical appointment, or a
              business meeting. We work with solicitors, healthcare providers, local councils, and
              private organisations so that language is never a barrier to understanding, justice,
              or care.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn
            delay={140}
            className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
          >
            {PROMISES.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white border border-[#E9EFED] p-5">
                <p className="font-heading text-[0.969rem] font-semibold text-navy mb-1.5">{p.title}</p>
                <p className="text-[0.844rem] leading-[1.55] text-[#7B8992]">{p.body}</p>
              </div>
            ))}
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  )
}
