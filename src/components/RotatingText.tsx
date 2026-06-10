"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TEXTS = ["UX Designer", "UX Researcher", "Snowboarder", "Fitness Enthusiast"];

const charVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 30,
      stiffness: 400,
      delay: i * 0.025,
    },
  }),
  exit: (i: number) => ({
    y: "-120%",
    opacity: 0,
    transition: {
      ease: [0.4, 0, 0.6, 1] as [number, number, number, number],
      duration: 0.3,
      delay: i * 0.015,
    },
  }),
};

export default function RotatingText({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % TEXTS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const text = TEXTS[index];
  const chars = text.split("");

  return (
    <span
      className={`inline-flex overflow-hidden ${className}`}
      aria-label={text}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="inline-flex"
          aria-hidden="true"
        >
          {chars.map((char, i) => (
            <motion.span
              key={`${index}-${i}`}
              custom={i}
              variants={charVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ display: "inline-block" }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
