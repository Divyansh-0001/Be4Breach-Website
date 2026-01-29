"use client";

import { motion } from "framer-motion";
import { cardVariants } from "../lib/animations";

export default function InfoCard({
  title,
  description,
  className = "",
  variants = cardVariants,
}) {
  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      className={`rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition ${className}`}
    >
      <h3 className="text-lg font-semibold text-brand-white">{title}</h3>
      <p className="mt-3 text-sm text-brand-white/70 md:text-base">
        {description}
      </p>
    </motion.div>
  );
}
