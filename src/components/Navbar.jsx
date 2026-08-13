import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import BridgeLogo from "./BridgeLogo";
import useScrollPosition from "../hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Languages", href: "#languages" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const ctaRef = useRef(null);

  useEffect(() => {
    // Pulse CTA 3 times on load
    const el = ctaRef.current;
    if (el) {
      el.classList.add("cta-pulse");
      setTimeout(() => el.classList.remove("cta-pulse"), 3500);
    }

    // Observe sections and toggle active nav link
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href),
    ).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          const link = document.querySelector(`a[href="${id}"]`);
          if (link) {
            link.classList.toggle("active", entry.isIntersecting);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -45% 0px", threshold: 0.1 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}>
            <BridgeLogo size="small" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium text-navy hover:text-teal transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              ref={ctaRef}
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-block bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Book an Interpreter
            </a>
          </div>

          <button
            className="lg:hidden text-navy"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white text-2xl font-heading font-semibold uppercase tracking-wide hover:text-teal transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Book an Interpreter
          </a>
        </div>
      )}
    </>
  );
}
