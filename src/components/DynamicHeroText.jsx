import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Rotates the eyebrow and the headline through the languages Horizon specialises in.
 * Changes from the original: 3.6s instead of 3s so it reads as intentional rather than
 * twitchy, a caption naming the current language, and a hand drawn underline that
 * draws itself in once on load.
 */
const LANGUAGE_PAIRS = [
  { service: 'SERVICES', people: 'People', language: 'English' },
  { service: 'HUDUMA', people: 'Watu', language: 'Swahili' },
  { service: 'SERVICES', people: 'Personnes', language: 'French' },
  { service: 'SERIVISI', people: 'Abantu', language: 'Kirundi' },
  { service: 'DIENSTEN', people: 'Mensen', language: 'Dutch' },
  { service: 'IBIKORWA', people: 'Abantu', language: 'Kinyarwanda' },
  { service: 'SERVICES', people: 'Communities', language: 'English' },
]

const RotatingWord = ({ word, className = '' }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={word}
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -18, opacity: 0 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {word}
    </motion.span>
  </AnimatePresence>
)

export default function DynamicHeroText() {
  const [index, setIndex] = useState(0)
  const [drawn, setDrawn] = useState(false)
  const current = LANGUAGE_PAIRS[index]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGE_PAIRS.length)
    }, 3600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => setDrawn(true), 700)
    return () => clearTimeout(id)
  }, [])

  return (
    <div>
      <p className="font-heading text-eyebrow font-semibold uppercase text-teal mb-4">
        Professional Interpreting <RotatingWord word={current.service} />
      </p>

      <h1 className="font-heading text-display font-bold text-navy text-balance mb-3">
        Bridging Languages,
        <br />
        and Connecting{' '}
        <span className="relative inline-block text-teal-mid">
          <RotatingWord word={current.people} />
          <span className="text-teal">.</span>
          <svg
            viewBox="0 0 220 12"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 -bottom-0.5 w-full h-[11px] overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M2 8C46 3 130 2 218 6"
              fill="none"
              stroke="#4A9E8E"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.38"
              style={{
                strokeDasharray: 230,
                strokeDashoffset: drawn ? 0 : 230,
                transition: 'stroke-dashoffset 900ms cubic-bezier(.16,1,.3,1)',
              }}
            />
          </svg>
        </span>
      </h1>

      {/* names the language so the rotation reads as deliberate */}
      <p className="text-[0.813rem] text-text-muted h-5" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'inline-block' }}
          >
            {current.language}
          </motion.span>
        </AnimatePresence>
      </p>
    </div>
  )
}
