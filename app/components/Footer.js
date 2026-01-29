"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/animations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "AI Security", href: "/ai-security" },
  { label: "Contact", href: "/contact" },
];

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
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-white">
              Be4Breach
            </p>
            <p className="text-xs text-brand-white/60">
              Premium AI-driven cybersecurity for modern enterprises.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-brand-white/60 md:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 text-center text-xs text-brand-white/60 sm:text-sm">
          <p>© 2026 Be4Breach. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan/70">
            Trusted AI-first cybersecurity
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
