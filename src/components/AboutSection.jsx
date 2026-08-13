import ScrollFadeIn from './ScrollFadeIn'
import BridgeLogo from './BridgeLogo'

export default function AboutSection() {
  return (
    <section id="about" className="bg-light py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollFadeIn>
          <div className="bg-navy rounded-2xl p-16 flex items-center justify-center">
            <BridgeLogo size="large" dark />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={150}>
          <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-3">About Us</p>
          <h2 className="font-heading font-bold text-navy text-3xl lg:text-4xl mb-6">
            Professional Interpreting You Can Rely On
          </h2>
          <p className="text-text-light text-base leading-relaxed">
            Horizon Interpreters was founded to bridge the communication gap for communities and
            professionals across the United Kingdom. We specialise in East and Central African
            languages where qualified interpreters are scarce and the need is greatest. Our
            interpreters are not just linguists. They understand the cultural context behind
            every conversation, whether it is a legal consultation, a medical appointment, or a
            business meeting. We work with solicitors, healthcare providers, local councils, and
            private organisations to ensure that language is never a barrier to understanding,
            justice, or care. Every booking is confirmed promptly, every session is delivered
            professionally, and every client receives the documentation they need.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
