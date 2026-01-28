"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-120px)] flex-col justify-center gap-8 py-10">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={containerVariants}
        className="space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">
          Be4Breach
        </p>
        <h1 className="text-4xl font-semibold text-brand-white md:text-6xl">
          AI-powered cybersecurity solutions
        </h1>
        <p className="max-w-2xl text-base text-brand-white/70 md:text-lg">
          Be4Breach fuses predictive intelligence, continuous validation, and
          guided response into a single enterprise-ready defense platform.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <CTAButton href="/services">Explore Services</CTAButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <CTAButton href="/contact" variant="secondary">
              Contact Us
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
