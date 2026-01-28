"use client";

import { motion } from "framer-motion";
import { slideUp } from "../lib/animations";

export default function AnimatedSection({
  children,
  className = "",
  variants = slideUp,
  delay = 0,
  viewportMargin = "-120px",
}) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
