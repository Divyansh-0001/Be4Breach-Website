"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-brand-white/10 bg-brand-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeIn}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-brand-white/60 sm:text-sm">
        <p>© 2026 Be4Breach. All rights reserved.</p>
        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan/70">
          Trusted AI-first cybersecurity
        </p>
      </div>
    </motion.footer>
  );
}
