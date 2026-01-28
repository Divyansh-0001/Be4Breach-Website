const coreCards = [
  {
    title: "Attack surface management",
    description:
      "Inventory and reduce external exposure across cloud, SaaS, and networks.",
  },
  {
    title: "Continuous assessments",
    description:
      "Ongoing validation of controls, configuration, and data protection.",
  },
  {
    title: "Prioritized remediation",
    description:
      "Clear remediation plans aligned to business impact and compliance needs.",
  },
];

const aiCards = [
  {
    title: "Exploit likelihood scoring",
    description:
      "AI weighs threat signals to prioritize the vulnerabilities that matter.",
  },
  {
    title: "Exposure discovery",
    description:
      "Automated detection of shadow assets and misconfigurations.",
  },
  {
    title: "Remediation guidance",
    description:
      "Actionable playbooks tailored to your environment and change windows.",
  },
];

export default function ProactivePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Services
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Proactive Security
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          We help security teams find and reduce risk before threats turn into
          incidents. The proactive program focuses on visibility, verification,
          and disciplined remediation you can trust.
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
            How AI improves proactive security.
          </h2>
          <p className="max-w-2xl text-sm text-brand-white/70">
            AI trims the noise, highlights exploitable risk, and accelerates
            remediation without sacrificing oversight.
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
