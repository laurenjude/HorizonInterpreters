import { Mail, Phone, MapPin } from "lucide-react";
import BridgeLogo from "./BridgeLogo";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Languages", href: "#languages" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark">
      <div className="h-0.5 bg-teal" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <BridgeLogo
            size="medium"
            dark
          />
          <p className="text-gray-400 text-sm mt-4">
            Professional interpreting across 47 languages
          </p>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold uppercase text-sm tracking-wide mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 text-sm hover:text-teal transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-semibold uppercase text-sm tracking-wide mb-5">
            Contact
          </h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail
                size={16}
                className="text-teal flex-shrink-0"
              />
              info@horizoninterpreters.co.uk
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <Phone
                size={16}
                className="text-teal flex-shrink-0"
              />
              0800 123 4567
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin
                size={16}
                className="text-teal flex-shrink-0"
              />
              United Kingdom:Nationwide
            </li>
          </ul>
          <a
            href="https://automationprimeafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="powered-link text-teal text-xs hover:underline">
            Powered by Automation Prime Africa
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-gray-500 text-xs text-center">
          © 2026 Horizon Interpreters LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
