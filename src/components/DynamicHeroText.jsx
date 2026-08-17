import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGE_PAIRS = [
  { service: "SERVICES", people: "People" },
  { service: "HUDUMA", people: "Watu" },
  { service: "SERVICES", people: "Personnes" },
  { service: "SERIVISI", people: "Abantu" },
  { service: "DIENSTEN", people: "Mensen" },
  { service: "IBIKORWA", people: "Abantu" },
  { service: "SERVICES", people: "Communities" },
];

export const DynamicHeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGE_PAIRS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-xs font-bold tracking-wider text-[#4a9e8e] uppercase mb-3">
        <span>PROFESSIONAL INTERPRETING</span>{" "}
        <div
          className="relative inline-block overflow-hidden align-middle"
          style={{ width: "110px", height: "16px" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={LANGUAGE_PAIRS[index].service}
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 15, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute left-0 top-0 block leading-none"
              style={{ fontSize: "inherit" }}
            >
              {LANGUAGE_PAIRS[index].service}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1923] leading-tight">
        Bridging Languages,<br />
        Connecting{" "}
        <span
          className="relative inline-block text-[#4a9e8e] align-bottom min-w-[180px] md:min-w-[280px]"
          style={{ height: "1.15em", display: "inline-block" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={LANGUAGE_PAIRS[index].people}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute left-0 top-0 block"
            >
              {LANGUAGE_PAIRS[index].people}.
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
    </div>
  );
};

export default DynamicHeroText;
