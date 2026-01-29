"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../lib/animations";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-120px)] flex-col justify-center py-12 text-center md:text-left">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.p
          variants={slideUp}
          className="text-xs uppercase tracking-[0.4em] text-brand-cyan"
        >
          Be4Breach
        </motion.p>
        <motion.h1
          variants={slideUp}
          className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-brand-white md:mx-0 md:text-6xl"
        >
          <span className="bg-gradient-to-r from-brand-white via-brand-cyan to-brand-red bg-clip-text text-transparent">
            AI-powered
          </span>{" "}
          cybersecurity solutions
        </motion.h1>
        <motion.p
          variants={slideUp}
          className="mx-auto max-w-2xl text-base text-brand-white/70 md:mx-0 md:text-lg"
        >
          Be4Breach fuses predictive intelligence, continuous validation, and
          guided response into a premium enterprise-ready defense platform.
        </motion.p>
        <motion.div
          variants={slideUp}
          className="flex flex-wrap justify-center gap-4 md:justify-start"
        >
          <CTAButton href="/services">Explore Services</CTAButton>
          <CTAButton href="/contact" variant="secondary">
            Contact Us
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
