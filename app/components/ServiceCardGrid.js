"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cardVariants, staggerContainer } from "../lib/animations";

export default function ServiceCardGrid({
  cards,
  className = "",
  columns = "sm:grid-cols-2 lg:grid-cols-4",
}) {
  return (
    <motion.div
      className={`grid gap-6 ${columns} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            className="rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 group-hover:border-brand-cyan/70 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]"
          >
            <h3 className="text-lg font-semibold text-brand-white">
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-brand-white/70">
              {card.description}
            </p>
            {card.cta ? (
              <span className="mt-4 inline-flex text-xs uppercase tracking-[0.35em] text-brand-cyan/70 transition group-hover:text-brand-cyan">
                {card.cta}
              </span>
            ) : null}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
