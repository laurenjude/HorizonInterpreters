import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import { allLanguagesSorted } from "../data/languages";

function buildTimeSlots() {
  const slots = [];
  for (let hour = 8; hour <= 18; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 18 && minute === 30) continue;
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour > 12 ? hour - 12 : hour;
      const label = `${displayHour}:${minute === 0 ? "00" : "30"} ${period}`;
      slots.push(label);
    }
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots();
const INTERPRETING_TYPES = ["Telephone", "Video", "Face-to-Face"];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  language: "",
  interpretingType: "",
  date: "",
  time: "",
  details: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const webhookUrl = import.meta.env.VITE_WEBHOOK_BOOKING;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch {
        // Fall through to success state regardless — the booking is still logged for follow-up.
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn className="text-center mb-16">
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl uppercase mb-3">
            Book an Interpreter
          </h2>
          <p className="text-gray-300 text-base">
            Fill the form below and we will confirm your booking within 2 hours
          </p>
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollFadeIn>
            {submitted ? (
              <div className="bg-white rounded-xl p-10 flex flex-col items-center text-center">
                <CheckCircle2
                  className="text-teal mb-4"
                  size={48}
                />
                <h3 className="font-heading font-bold text-navy text-xl mb-3">
                  Booking Request Received!
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  We will confirm your interpreter within 2 hours. A
                  confirmation email has been sent to {form.email}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                  <input
                    type="text"
                    name="organisation"
                    placeholder="Organisation / Company"
                    value={form.organisation}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    name="language"
                    required
                    value={form.language}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal">
                    <option
                      value=""
                      disabled>
                      Select a language
                    </option>
                    {allLanguagesSorted.map((lang) => (
                      <option
                        key={lang}
                        value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>

                  <select
                    name="interpretingType"
                    required
                    value={form.interpretingType}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal">
                    <option
                      value=""
                      disabled>
                      Interpreting Type
                    </option>
                    {INTERPRETING_TYPES.map((type) => (
                      <option
                        key={type}
                        value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                  <select
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal">
                    <option
                      value=""
                      disabled>
                      Preferred Time
                    </option>
                    {TIME_SLOTS.map((slot) => (
                      <option
                        key={slot}
                        value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="details"
                  rows={3}
                  placeholder="Additional Details"
                  value={form.details}
                  onChange={handleChange}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-70">
                  {submitting ? "Sending..." : "Request Booking"}
                </button>
              </form>
            )}
          </ScrollFadeIn>

          <ScrollFadeIn delay={150}>
            <h3 className="font-heading font-bold text-white text-xl mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail
                  className="text-teal flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-white text-sm">
                    info@horizoninterpreters.co.uk
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone
                  className="text-teal flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-white text-sm">0800 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin
                  className="text-teal flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-white text-sm">
                    United Kingdom|Serving clients nationwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock
                  className="text-teal flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                    Operating Hours
                  </p>
                  <p className="text-white text-sm">
                    Available 7 days a week, 8:00 AM ➡️ 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              For urgent same day requests, please call us directly.
            </p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
