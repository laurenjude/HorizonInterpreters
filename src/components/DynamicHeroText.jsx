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

const RotatingWord = ({ word, className = "" }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={word}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {word}
    </motion.span>
  </AnimatePresence>
);

const DynamicHeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGE_PAIRS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-xs font-bold tracking-wider uppercase mb-3 text-[#4a9e8e]">
        PROFESSIONAL INTERPRETING{" "}
        <RotatingWord word={LANGUAGE_PAIRS[index].service} />
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1923] leading-tight">
        Bridging Languages,
        <br />
        Connecting{" "}
        <span className="text-[#4a9e8e]">
          <RotatingWord word={LANGUAGE_PAIRS[index].people + "."} />
        </span>
      </h1>
    </div>
  );
};

export default DynamicHeroText;
