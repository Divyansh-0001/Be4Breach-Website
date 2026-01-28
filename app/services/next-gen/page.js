const coreCards = [
  {
    title: "Zero-trust architecture",
    description:
      "Design identity-first access with continuous verification across every layer.",
  },
  {
    title: "Cloud posture engineering",
    description:
      "Harden cloud infrastructure with policy-driven controls and safe defaults.",
  },
  {
    title: "Resilient segmentation",
    description:
      "Limit lateral movement through segmentation that supports business agility.",
  },
];

const aiCards = [
  {
    title: "Design validation",
    description:
      "AI models test architectures against known attack paths before deployment.",
  },
  {
    title: "Policy drift detection",
    description:
      "Automated checks flag configuration drift and control gaps in real time.",
  },
  {
    title: "Risk-aware hardening",
    description:
      "Prioritized remediation guidance aligns with business criticality.",
  },
];

export default function NextGenPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Services
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Next-Gen Security
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          We build secure-by-design foundations that align architecture, cloud,
          and identity into a durable defense baseline. Every control is mapped
          to measurable risk reduction and operational clarity.
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
            How AI improves next-gen security.
          </h2>
          <p className="max-w-2xl text-sm text-brand-white/70">
            Our AI evaluates architecture choices and continuously validates
            control coverage. Security leaders receive evidence-based guidance
            they can trust.
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
