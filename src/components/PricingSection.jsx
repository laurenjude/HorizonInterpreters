import { Check, Scale } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const PLANS = [
  {
    name: "Telephone",
    price: "£0.55",
    unit: "per minute",
    features: [
      "All 47 languages available",
      "10-minute minimum",
      "Standard rate: £0.65/min",
      "Introductory: £0.55/min (first 100 mins)",
      "Instant connection",
    ],
    cta: "primary-outline",
    highlighted: false,
  },
  {
    name: "Video",
    price: "£1.10",
    unit: "per minute",
    features: [
      "All 47 languages available",
      "10-minute minimum",
      "Via Microsoft Teams",
      "Visual communication",
      "Screen sharing available",
    ],
    cta: "primary-solid",
    highlighted: true,
  },
  {
    name: "Face-to-Face",
    price: "£40",
    unit: "per hour",
    features: [
      "Cardiff, Newport, Bristol, Swansea",
      "London & Birmingham available",
      "1-hour minimum",
      "Travel: 45p/mile or train fare",
      "Court, medical, business settings",
    ],
    cta: "primary-outline",
    highlighted: false,
  },
];

export default function PricingSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="font-heading font-bold text-navy text-3xl lg:text-4xl uppercase mb-3">
            Transparent Pricing
          </h2>
          <p className="text-text-light text-base">
            Clear rates with no hidden fees
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-start mb-14">
          {PLANS.map((plan, i) => (
            <ScrollFadeIn
              key={plan.name}
              delay={i * 100}>
              <div
                className={`pricing-card bg-white rounded-xl border p-8 h-full flex flex-col relative ${
                  plan.highlighted
                    ? "border-teal border-t-4 shadow-lg"
                    : "border-border shadow-sm"
                }`}>
                {plan.name === "Video" && (
                  <div className="absolute -top-3 right-4 bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-navy text-xl mb-4">
                  {plan.name}
                </h3>
                <p className="text-text-light text-xs mb-1">From</p>
                <p className="text-teal font-heading font-bold text-4xl mb-1">
                  {plan.price}
                </p>
                <p className="text-text-light text-sm mb-6">{plan.unit}</p>
                <hr className="border-border mb-6" />
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text">
                      <Check
                        size={16}
                        className="text-teal mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className={`text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                    plan.cta === "primary-solid"
                      ? "bg-teal hover:bg-teal-dark text-white"
                      : "border-2 border-teal text-teal hover:bg-teal-light"
                  }`}>
                  Book Now
                </a>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn>
          <div className="bg-teal-light border border-teal rounded-xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <Scale
                className="text-teal"
                size={26}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-navy text-lg mb-2">
                Asylum &amp; Immigration Bundle
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                120 telephone minutes for £72 (£0.60/min). Valid for one month.
                Includes free written confirmation email after every call for
                your Legal Aid file. Designed specifically for solicitors
                handling asylum and immigration cases.
              </p>
            </div>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Enquire About This Bundle
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
