import ScrollFadeIn from "./ScrollFadeIn";
import { specialistLanguages, additionalLanguages } from "../data/languages";

export default function LanguagesSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="languages"
      className="bg-teal-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="font-heading font-bold text-navy text-3xl lg:text-4xl uppercase mb-3">
            47 Languages. One Call Away.
          </h2>
          <p className="text-text-light text-base">
            Specialising in East and Central African languages with
            comprehensive global coverage
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="bg-teal text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
              Specialists
            </span>
            <h3 className="font-heading font-bold text-navy text-lg">
              East &amp; Central African Specialists
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {specialistLanguages.map((lang) => (
              <span
                key={lang}
                className="language-pill bg-white border-2 border-teal text-teal font-semibold rounded-full px-5 py-2 text-sm">
                {lang}
              </span>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h3 className="font-heading font-bold text-navy text-lg text-center mb-6">
            Additional Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {additionalLanguages.map((lang) => (
              <span
                key={lang}
                className="language-pill bg-gray-100 text-text rounded-full px-3.5 py-1.5 text-xs">
                {lang}
              </span>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn className="text-center mt-12">
          <p className="text-text-light text-sm">
            Don&apos;t see your language?{" "}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-teal font-semibold hover:underline">
              Contact us
            </a>{" "}
            we may be able to help.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
