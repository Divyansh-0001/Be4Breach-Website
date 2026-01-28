"use client";

import { motion } from "framer-motion";

const baseVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={baseVariants}
    >
      {children}
    </motion.section>
  );
}
