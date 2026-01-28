import Link from "next/link";

const serviceLinks = [
  {
    title: "Next-Gen Security",
    href: "/services/next-gen",
    description: "Zero-trust architecture and modern security foundations.",
  },
  {
    title: "Proactive Security",
    href: "/services/proactive",
    description: "Continuous hardening and attack surface reduction.",
  },
  {
    title: "Active Defense",
    href: "/services/active",
    description: "Live monitoring, detection, and containment.",
  },
  {
    title: "Reactive Response",
    href: "/services/reactive",
    description: "Incident response and post-breach recovery.",
  },
];

const aiHighlights = [
  {
    title: "Unified risk graph",
    description:
      "AI correlates identity, cloud, and endpoint telemetry into one source of truth.",
  },
  {
    title: "Predictive prioritization",
    description:
      "Automated scoring surfaces the threats most likely to impact the business.",
  },
  {
    title: "Human-verified actions",
    description:
      "AI recommendations are paired with expert validation to earn trust.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Services
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Security coverage engineered for clarity and trust.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          Before Breach delivers an end-to-end security program that maps to the
          full breach lifecycle. Each service line is structured to reduce risk,
          increase resilience, and provide transparent outcomes.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {serviceLinks.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-6 transition hover:border-brand-red/60"
          >
            <h2 className="font-display text-lg font-semibold text-brand-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-brand-white/60">
              {service.description}
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
            AI Enablement
          </p>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            How AI elevates every service line.
          </h2>
          <p className="max-w-2xl text-sm text-brand-white/70">
            We use AI to fuse signals, prioritize actions, and deliver guidance
            that is explainable and accountable. The result is faster decision
            making without sacrificing trust.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {aiHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-5"
            >
              <h3 className="font-display text-base font-semibold text-brand-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-brand-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
