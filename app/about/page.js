export const metadata = {
  title: "About",
  description:
    "Learn about Before Breach: mission, vision, and AI-first cybersecurity philosophy.",
};

const highlights = [
  {
    title: "Mission",
    description:
      "Protect enterprises from modern threats by delivering proactive, measurable security outcomes.",
  },
  {
    title: "Vision",
    description:
      "Enable every organization to operate with confidence in an AI-accelerated threat landscape.",
  },
  {
    title: "Trust by design",
    description:
      "Security decisions are transparent, evidence-backed, and aligned to business risk.",
  },
];

const operatingModel = [
  {
    title: "Strategic consulting",
    description:
      "We align security strategy, governance, and architecture to your business goals.",
  },
  {
    title: "Hands-on execution",
    description:
      "Our operators embed with your teams to implement controls and improve readiness.",
  },
  {
    title: "Productized intelligence",
    description:
      "AI-enabled tooling transforms telemetry into clear guidance and repeatable outcomes.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          About
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Before Breach delivers trusted, AI-first cybersecurity for enterprises.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          We help organizations reduce breach risk by combining strategic
          advisory services with AI-powered security products. Every engagement
          is designed for clarity, accountability, and measurable protection.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-6"
          >
            <h2 className="font-display text-lg font-semibold text-brand-white">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-brand-white/60">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-8 border-t border-brand-white/10 pt-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
            AI-first philosophy
          </p>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            Intelligence that earns trust.
          </h2>
          <p className="text-sm text-brand-white/70">
            Our AI models prioritize transparency, explainability, and human
            oversight. We fuse telemetry across cloud, identity, and endpoint
            layers to build a risk graph that surfaces the actions most likely
            to prevent breaches.
          </p>
          <p className="text-sm text-brand-white/70">
            Security leaders receive clear recommendations backed by evidence,
            ensuring every decision is auditable and aligned with policy.
          </p>
        </div>
        <div className="space-y-4 rounded-lg border border-brand-white/10 bg-brand-black/60 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-white/50">
            Consulting + Product
          </p>
          <h3 className="font-display text-lg font-semibold text-brand-white">
            A hybrid model built for resilience.
          </h3>
          <p className="text-sm text-brand-white/70">
            Before Breach combines executive advisory, technical execution, and
            AI-enabled products. This hybrid approach delivers immediate impact
            while continuously improving your long-term security posture.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-brand-white">
          How we operate
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-brand-white/70">
          Our delivery model is built to integrate with enterprise security
          programs without disrupting operations, reinforcing trust at every
          stage.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {operatingModel.map((item) => (
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
