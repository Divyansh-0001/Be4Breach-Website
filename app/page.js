import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "Before Breach delivers AI-first cybersecurity services for enterprise teams.",
};

const serviceCards = [
  {
    title: "Next-Gen Security",
    description: "Architecture engineered for adaptive zero-trust defense.",
    href: "/services/next-gen",
  },
  {
    title: "Proactive Security",
    description: "Attack surface reduction powered by continuous AI insight.",
    href: "/services/proactive",
  },
  {
    title: "Active Defense",
    description: "Real-time monitoring, detection, and response orchestration.",
    href: "/services/active",
  },
  {
    title: "Reactive Response",
    description: "Incident recovery with forensic precision and resilience.",
    href: "/services/reactive",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-brand-red/40 bg-brand-black/70 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-brand-red">
          <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_12px_rgba(225,29,46,0.8)]" />
          Before Breach
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight text-brand-white md:text-5xl">
          Futuristic cybersecurity built to predict, prevent, and outpace AI
          threats.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70 md:text-base">
          Before Breach blends enterprise-grade security with AI-driven
          intelligence to map threats before they materialize, closing gaps
          across every stage of the breach lifecycle.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-md border border-brand-red bg-brand-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-black transition hover:bg-brand-white hover:text-brand-black"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-brand-white/30 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-white/80 transition hover:border-brand-red hover:text-brand-red"
          >
            Request a Briefing
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-8 border-t border-brand-white/10 pt-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
            AI-Driven Security
          </p>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            A proactive security graph trained on adversarial behavior.
          </h2>
          <p className="text-sm text-brand-white/70">
            Our AI models fuse telemetry, threat intelligence, and anomaly
            signals into a unified risk graph. Security teams receive predictive
            guidance, automated controls, and measurable risk reduction without
            noise.
          </p>
        </div>
        <div className="space-y-4 rounded-lg border border-brand-white/10 bg-brand-black/60 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-white/50">
            Core Capabilities
          </p>
          <ul className="space-y-3 text-sm text-brand-white/70">
            <li>AI-assisted threat forecasting and prioritization.</li>
            <li>Continuous validation of critical control paths.</li>
            <li>Human-in-the-loop orchestration for rapid action.</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
              Service Domains
            </p>
            <h2 className="font-display text-2xl font-semibold text-brand-white">
              Security coverage across the full breach lifecycle.
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-xs uppercase tracking-[0.3em] text-brand-white/60 transition hover:text-brand-red md:inline-flex"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {serviceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-lg border border-brand-white/10 bg-brand-black/60 p-6 transition hover:border-brand-red/70"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-brand-white">
                  {card.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-brand-red/70 transition group-hover:text-brand-red">
                  View
                </span>
              </div>
              <p className="mt-3 text-sm text-brand-white/60">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col items-start justify-between gap-6 rounded-lg border border-brand-white/10 bg-brand-black/70 px-6 py-8 md:flex-row md:items-center">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
            Next Step
          </p>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            Prepare your organization for AI-era threats.
          </h2>
          <p className="text-sm text-brand-white/70">
            Connect with our security architects to design a tailored defense
            program.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md border border-brand-red bg-brand-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-black transition hover:bg-brand-white hover:text-brand-black"
          >
            Talk to Us
          </Link>
          <Link
            href="/ai-security"
            className="rounded-md border border-brand-white/30 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-white/80 transition hover:border-brand-red hover:text-brand-red"
          >
            AI Security
          </Link>
        </div>
      </section>
    </main>
  );
}
