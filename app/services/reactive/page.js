export const metadata = {
  title: "Reactive Response",
  description:
    "Incident response and recovery with AI-accelerated investigation workflows.",
};

const coreCards = [
  {
    title: "Incident response",
    description:
      "Structured response plans with clear roles, escalation, and reporting.",
  },
  {
    title: "Forensic investigation",
    description:
      "Evidence-led analysis to understand scope, root cause, and impact.",
  },
  {
    title: "Recovery and resilience",
    description:
      "Operational restoration with guardrails to prevent repeat incidents.",
  },
];

const aiCards = [
  {
    title: "Timeline reconstruction",
    description:
      "AI accelerates investigation by mapping events and attacker movement.",
  },
  {
    title: "Indicator extraction",
    description:
      "Rapid extraction of indicators of compromise improves containment.",
  },
  {
    title: "Response validation",
    description:
      "Recommended containment steps are evaluated for business impact.",
  },
];

export default function ReactivePage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Services
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Reactive Response
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          When incidents occur, we bring disciplined response, containment, and
          recovery with transparent reporting. Every action is documented to
          preserve trust and compliance.
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
            How AI improves reactive response.
          </h2>
          <p className="max-w-2xl text-sm text-brand-white/70">
            AI accelerates investigation and containment while preserving human
            oversight. Insights are documented for audit-ready clarity.
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
