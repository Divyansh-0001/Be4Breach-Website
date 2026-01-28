export const metadata = {
  title: "Active Defense",
  description:
    "Managed detection, threat hunting, and real-time containment powered by AI.",
};

const coreCards = [
  {
    title: "Managed detection",
    description:
      "24/7 monitoring with clear escalation paths and response ownership.",
  },
  {
    title: "Threat hunting",
    description:
      "Proactive hunts identify hidden adversaries and suspicious activity.",
  },
  {
    title: "Rapid containment",
    description:
      "Coordinated actions reduce dwell time and protect critical systems.",
  },
];

const aiCards = [
  {
    title: "Signal correlation",
    description:
      "AI connects endpoint, identity, and cloud signals into one narrative.",
  },
  {
    title: "Alert triage",
    description:
      "Automated prioritization removes noise and highlights real risk.",
  },
  {
    title: "Guided response",
    description:
      "AI suggests response steps with human verification for trust.",
  },
];

export default function ActivePage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Services
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Active Defense
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          Active Defense delivers real-time detection, investigation, and
          containment with a clear chain of custody. We keep teams informed and
          in control throughout every response.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-brand-white">
          What this service delivers
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {coreCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-5"
            >
              <h3 className="font-display text-base font-semibold text-brand-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-brand-white/60">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
            AI Advantage
          </p>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            How AI improves active defense.
          </h2>
          <p className="max-w-2xl text-sm text-brand-white/70">
            AI accelerates triage and investigation while keeping humans in the
            loop. Decisions remain explainable and aligned to policy.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {aiCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-5"
            >
              <h3 className="font-display text-base font-semibold text-brand-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-brand-white/60">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
