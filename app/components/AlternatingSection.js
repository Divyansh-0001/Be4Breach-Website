"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, staggerContainer } from "../lib/animations";
import SectionHeader from "./SectionHeader";

export default function AlternatingSection({
  label,
  title,
  description,
  reverse = false,
  tag = "Be4Breach AI",
}) {
  const textVariants = reverse ? slideRight : slideLeft;
  const imageVariants = reverse ? slideLeft : slideRight;

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="grid items-center gap-10 md:grid-cols-2"
    >
      <motion.div variants={textVariants} className={reverse ? "md:order-2" : ""}>
        <SectionHeader label={label} title={title} description={description} />
      </motion.div>
      <motion.div
        variants={imageVariants}
        className={`relative h-64 overflow-hidden rounded-3xl border border-brand-white/10 bg-gradient-to-br from-brand-cyan/15 via-brand-dark to-brand-red/15 shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.35),_transparent_70%)]" />
        <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.35em] text-brand-white/70">
          {tag}
        </div>
      </motion.div>
    </motion.section>
  );
}
