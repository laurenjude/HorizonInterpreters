import { Calendar, CheckCircle, MessageCircle } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    icon: Calendar,
    iconClass: "icon-rotate",
    title: "Submit a Booking",
    description:
      "Fill our online form with the language you need, the date and time, and whether you need telephone, video, or face-to-face interpreting.",
  },
  {
    icon: CheckCircle,
    iconClass: "icon-pulse-scale",
    title: "We Confirm Your Interpreter",
    description:
      "We match you with a qualified interpreter and send confirmation with all the details. For telephone interpreting, connection is often within minutes.",
  },
  {
    icon: MessageCircle,
    iconClass: "icon-bounce",
    title: "The Session Takes Place",
    description:
      "Your interpreter joins the call, video, or meeting. Afterwards you receive documentation and an invoice. Simple.",
  },
];

export default function HowItWorks() {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("drawn");
          }
        });
      },
      { root: null, rootMargin: "0px 0px -30% 0px", threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="font-heading font-bold text-navy text-3xl lg:text-4xl uppercase mb-3">
            How It Works
          </h2>
          <p className="text-text-light text-base">
            From booking to delivery in three simple steps
          </p>
        </ScrollFadeIn>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          <div
            ref={lineRef}
            className="how-line hidden md:block absolute top-8"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollFadeIn
                key={step.title}
                delay={i * 120}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-teal flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                    <Icon
                      className={`text-white ${step.iconClass}`}
                      size={28}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
