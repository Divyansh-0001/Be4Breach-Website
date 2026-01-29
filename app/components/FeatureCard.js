"use client";

import { motion } from "framer-motion";
import { cardVariants } from "../lib/animations";

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className="rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-cyan/40 bg-brand-dark text-xs font-semibold text-brand-cyan shadow-[0_0_24px_rgba(0,240,255,0.25)]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-brand-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-brand-white/70 md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
