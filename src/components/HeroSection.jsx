import { Scale, Heart, Building, Briefcase } from "lucide-react";
import DynamicHeroText from "./DynamicHeroText";

const TRUST_BADGES = [
  { icon: Scale, label: "Legal & Immigration" },
  { icon: Heart, label: "NHS & Healthcare" },
  { icon: Building, label: "Local Councils" },
  { icon: Briefcase, label: "Corporate" },
];

function GlobeIllustration() {
  return (
    <div className="hero-illustration relative w-full max-w-md mx-auto overflow-hidden">
      <svg
        viewBox="0 0 460 460"
        className="hero-svg h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        {/* Subtle radial glow behind the globe */}
        <circle className="hero-glow" cx="230" cy="230" r="190" fill="#4a9e8e" />

        <g className="globe-rotate">
          <circle
            cx="230"
            cy="230"
            r="150"
            stroke="#4a9e8e"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <ellipse
            cx="230"
            cy="230"
            rx="150"
            ry="60"
            stroke="#4a9e8e"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <ellipse
            cx="230"
            cy="230"
            rx="150"
            ry="60"
            stroke="#4a9e8e"
            strokeWidth="1.5"
            opacity="0.5"
            transform="rotate(60 230 230)"
          />
          <ellipse
            cx="230"
            cy="230"
            rx="150"
            ry="60"
            stroke="#4a9e8e"
            strokeWidth="1.5"
            opacity="0.5"
            transform="rotate(120 230 230)"
          />
          <line
            x1="80"
            y1="230"
            x2="380"
            y2="230"
            stroke="#4a9e8e"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>

        {/* Language connection arcs — draw themselves in, then stay visible */}
        <path className="arc-line arc1" d="M124,124 Q230,66 336,124" />
        <path className="arc-line arc2" d="M118,320 Q230,378 342,320" />
        <path className="arc-line arc3" d="M95,285 Q230,335 368,175" />

        <line
          className="pulse"
          x1="230"
          y1="230"
          x2="90"
          y2="120"
          stroke="#4a9e8e"
          strokeWidth="1"
          strokeDasharray="4 5"
          opacity="0.6"
        />
        <line
          className="pulse"
          x1="230"
          y1="230"
          x2="370"
          y2="100"
          stroke="#4a9e8e"
          strokeWidth="1"
          strokeDasharray="4 5"
          opacity="0.6"
        />
        <line
          className="pulse"
          x1="230"
          y1="230"
          x2="380"
          y2="330"
          stroke="#4a9e8e"
          strokeWidth="1"
          strokeDasharray="4 5"
          opacity="0.6"
        />
        <line
          className="pulse"
          x1="230"
          y1="230"
          x2="70"
          y2="340"
          stroke="#4a9e8e"
          strokeWidth="1"
          strokeDasharray="4 5"
          opacity="0.6"
        />

        <circle
          className="pulse-dot node-1"
          cx="90"
          cy="120"
          r="5"
          fill="#4a9e8e"
        />
        <circle
          className="pulse-dot node-2"
          cx="370"
          cy="100"
          r="5"
          fill="#4a9e8e"
        />
        <circle
          className="pulse-dot node-3"
          cx="380"
          cy="330"
          r="5"
          fill="#4a9e8e"
        />
        <circle
          className="pulse-dot node-4"
          cx="70"
          cy="340"
          r="5"
          fill="#4a9e8e"
        />

        {/* Speech bubbles: position set on the outer <g>, animation on the inner <g>
            so the CSS transform animation never clobbers the SVG position attribute */}
        <g transform="translate(58, 60)">
          <g className="bubble-hover">
            <g className="bubble b1">
              <rect
                x="0"
                y="0"
                width="56"
                height="38"
                rx="10"
                fill="#ffffff"
                stroke="#4a9e8e"
                strokeWidth="1.5"
              />
              <path
                d="M14 38 L14 48 L26 38 Z"
                fill="#ffffff"
                stroke="#4a9e8e"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <line
                x1="12"
                y1="14"
                x2="44"
                y2="14"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="24"
                x2="34"
                y2="24"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>

        {/* Sits fully inside the globe area rather than crowding the top edge */}
        <g transform="translate(300, 95)">
          <g className="bubble-hover">
            <g className="bubble b2">
              <rect
                x="0"
                y="0"
                width="56"
                height="38"
                rx="10"
                fill="#0f1923"
              />
              <path
                d="M14 38 L14 48 L26 38 Z"
                fill="#0f1923"
              />
              <line
                x1="12"
                y1="14"
                x2="44"
                y2="14"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="24"
                x2="34"
                y2="24"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>

        <g transform="translate(336, 288)">
          <g className="bubble-hover">
            <g className="bubble b3">
              <rect
                x="0"
                y="0"
                width="56"
                height="38"
                rx="10"
                fill="#ffffff"
                stroke="#4a9e8e"
                strokeWidth="1.5"
              />
              <path
                d="M14 38 L14 48 L26 38 Z"
                fill="#ffffff"
                stroke="#4a9e8e"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <line
                x1="12"
                y1="14"
                x2="44"
                y2="14"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="24"
                x2="34"
                y2="24"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>

        <g transform="translate(28, 292)">
          <g className="bubble-hover">
            <g className="bubble b4">
              <rect
                x="0"
                y="0"
                width="56"
                height="38"
                rx="10"
                fill="#0f1923"
              />
              <path
                d="M14 38 L14 48 L26 38 Z"
                fill="#0f1923"
              />
              <line
                x1="12"
                y1="14"
                x2="44"
                y2="14"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="24"
                x2="34"
                y2="24"
                stroke="#4a9e8e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>

        <circle
          cx="230"
          cy="230"
          r="8"
          fill="#4a9e8e"
        />

        {/* Orbiting dots, each with two trailing echoes (staggered 0.5s, fading
            opacity) so they read as comet trails circling the globe. The last
            two orbits hide on mobile to keep the animation light there. */}
        <g transform="translate(230,230)">
          <g className="orbit dot1-a">
            <circle cx="95" cy="0" r="3" fill="#2bb39a" />
          </g>
          <g className="orbit dot1-b" opacity="0.5">
            <circle cx="95" cy="0" r="3" fill="#2bb39a" />
          </g>
          <g className="orbit dot1-c" opacity="0.22">
            <circle cx="95" cy="0" r="3" fill="#2bb39a" />
          </g>
        </g>

        <g transform="translate(230,230)">
          <g className="orbit dot2-a">
            <circle cx="120" cy="0" r="3.5" fill="#2bb39a" />
          </g>
          <g className="orbit dot2-b" opacity="0.5">
            <circle cx="120" cy="0" r="3.5" fill="#2bb39a" />
          </g>
          <g className="orbit dot2-c" opacity="0.22">
            <circle cx="120" cy="0" r="3.5" fill="#2bb39a" />
          </g>
        </g>

        <g className="orbit-extra" transform="translate(230,230)">
          <g className="orbit dot3-a">
            <circle cx="75" cy="0" r="3" fill="#2bb39a" />
          </g>
          <g className="orbit dot3-b" opacity="0.5">
            <circle cx="75" cy="0" r="3" fill="#2bb39a" />
          </g>
          <g className="orbit dot3-c" opacity="0.22">
            <circle cx="75" cy="0" r="3" fill="#2bb39a" />
          </g>
        </g>

        <g className="orbit-extra" transform="translate(230,230)">
          <g className="orbit dot4-a">
            <circle cx="108" cy="0" r="2.5" fill="#2bb39a" />
          </g>
          <g className="orbit dot4-b" opacity="0.5">
            <circle cx="108" cy="0" r="2.5" fill="#2bb39a" />
          </g>
          <g className="orbit dot4-c" opacity="0.22">
            <circle cx="108" cy="0" r="2.5" fill="#2bb39a" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="min-h-screen flex items-center bg-light pt-28 pb-16 lg:pt-24">
      <div className="hero-card max-w-7xl mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-12 items-center w-full rounded-2xl">
        <div>
          <DynamicHeroText />
          <p className="hero-anim hero-anim-subtitle text-text-light text-base leading-relaxed mb-8 max-w-xl">
            Horizon Interpreters provides professional telephone, video, and
            face-to-face interpreting across 47 languages. Specialising in East
            and Central African languages with UK-wide coverage.
          </p>
          <div className="hero-anim hero-anim-buttons flex flex-wrap gap-4 mb-6">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="btn-primary-hero text-white font-semibold px-7 py-3.5 rounded-lg">
              Book an Interpreter
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, "#services")}
              className="btn-secondary-hero border-2 border-teal text-teal font-semibold px-7 py-3.5 rounded-lg">
              View Our Services
            </a>
          </div>
          <div className="hero-anim hero-anim-trust flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="trust-badge inline-flex items-center gap-1.5">
                <Icon size={12} className="text-teal" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-anim hero-anim-graphic">
          <GlobeIllustration />
        </div>
      </div>
    </section>
  );
}
