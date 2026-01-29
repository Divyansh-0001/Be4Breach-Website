"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  buttonVariants,
  slideUp,
  staggerContainer,
} from "../lib/animations";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
const API_URL = `${API_BASE_URL.replace(/\/$/, "")}/analyze-security`;

const initialFormState = {
  text: "",
  systemType: "",
};

const riskBadgeStyles = {
  Low: "border-brand-white/20 text-brand-white/70",
  Medium: "border-brand-cyan/40 text-brand-cyan/80",
  High: "border-brand-red text-brand-red",
};

export default function AiSecurityPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setResult(null);

    if (!formData.text.trim()) {
      setError("Please provide a short security description to analyze.");
      return;
    }

    const payload = {
      text: formData.text.trim(),
    };

    if (formData.systemType.trim()) {
      payload.system_type = formData.systemType.trim();
    }

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze security input.");
      }

      const data = await response.json();
      setResult(data);
      setFormData(initialFormState);
    } catch {
      setError(
        "Unable to reach the analysis service. Please verify the backend is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <motion.section
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={slideUp}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">
          AI Security
        </p>
        <h1 className="text-3xl font-semibold text-brand-white md:text-5xl">
          AI-assisted security analysis for enterprise teams.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70 md:text-base">
          Submit a short description of a security concern to receive a
          rule-based risk assessment. This experience showcases the foundation
          of the Be4Breach AI analysis engine.
        </p>
      </motion.section>

      <motion.section
        className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={staggerContainer}
      >
        <motion.form
          onSubmit={handleSubmit}
          variants={slideUp}
          className="space-y-4 rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          aria-busy={isLoading}
        >
          <div>
            <label
              htmlFor="text"
              className="text-xs uppercase tracking-[0.35em] text-brand-white/60"
            >
              Security context
            </label>
            <textarea
              id="text"
              name="text"
              rows={6}
              value={formData.text}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-brand-white/10 bg-brand-dark/80 px-4 py-3 text-sm text-brand-white outline-none transition focus:border-brand-cyan/70 focus:ring-1 focus:ring-brand-cyan/70"
              placeholder="Example: We detected unusual authentication attempts and lateral movement across production servers."
            />
          </div>

          <div>
            <label
              htmlFor="systemType"
              className="text-xs uppercase tracking-[0.35em] text-brand-white/60"
            >
              System type (optional)
            </label>
            <input
              id="systemType"
              name="systemType"
              type="text"
              value={formData.systemType}
              onChange={handleChange}
              className="mt-2 w-full rounded-full border border-brand-white/10 bg-brand-dark/80 px-4 py-3 text-sm text-brand-white outline-none transition focus:border-brand-cyan/70 focus:ring-1 focus:ring-brand-cyan/70"
              placeholder="Finance, healthcare, critical infrastructure"
            />
          </div>

          {error ? (
            <p role="alert" className="text-sm text-brand-red">
              {error}
            </p>
          ) : null}

          <motion.button
            type="submit"
            disabled={isLoading}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full rounded-full border border-brand-red bg-brand-red px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark transition hover:shadow-[0_0_24px_rgba(255,46,46,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Analyzing..." : "Run analysis"}
          </motion.button>
        </motion.form>

        <motion.div
          variants={slideUp}
          className="space-y-4 rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          aria-live="polite"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
            Analysis output
          </p>
          {isLoading ? (
            <p className="text-sm text-brand-white/60">Analyzing input...</p>
          ) : result ? (
            <div className="space-y-4 text-sm text-brand-white/70">
              <div className="inline-flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
                  Risk level
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                    riskBadgeStyles[result.risk_level] ||
                    "border-brand-white/20 text-brand-white/70"
                  }`}
                >
                  {result.risk_level}
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
                  Explanation
                </p>
                <p className="mt-2 text-sm text-brand-white/70">
                  {result.explanation}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
                  Recommended actions
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-brand-white/70">
                  {result.recommended_actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-sm text-brand-white/60">
              Submit a security context to receive a risk assessment and
              recommended actions.
            </p>
          )}
        </motion.div>
      </motion.section>
    </main>
  );
}
