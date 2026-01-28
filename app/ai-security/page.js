"use client";

import { useState } from "react";

const API_URL = "http://localhost:8000/analyze-security";

const initialFormState = {
  text: "",
  systemType: "",
};

const riskBadgeStyles = {
  Low: "border-brand-white/20 text-brand-white/70",
  Medium: "border-brand-red/40 text-brand-red/80",
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
    } catch (submitError) {
      setError(
        "Unable to reach the analysis service. Please verify the backend is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          AI Security
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          AI-assisted security analysis for enterprise teams.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          Submit a short description of a security concern to receive a
          rule-based risk assessment. This is a placeholder for our future
          AI-native analysis engine.
        </p>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-brand-white/10 bg-brand-black/60 p-6"
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
              className="mt-2 w-full rounded-md border border-brand-white/10 bg-brand-black/80 px-3 py-2 text-sm text-brand-white outline-none transition focus:border-brand-red/70 focus:ring-1 focus:ring-brand-red/70"
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
              className="mt-2 w-full rounded-md border border-brand-white/10 bg-brand-black/80 px-3 py-2 text-sm text-brand-white outline-none transition focus:border-brand-red/70 focus:ring-1 focus:ring-brand-red/70"
              placeholder="Finance, healthcare, critical infrastructure"
            />
          </div>

          {error ? (
            <p className="text-sm text-brand-red">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md border border-brand-red bg-brand-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-black transition hover:bg-brand-white hover:text-brand-black disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Analyzing..." : "Run analysis"}
          </button>
        </form>

        <div className="space-y-4 rounded-lg border border-brand-white/10 bg-brand-black/60 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-white/50">
            Analysis output
          </p>
          {result ? (
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
        </div>
      </section>
    </main>
  );
}
