import AnimatedSection from "../components/AnimatedSection";
import InfoCard from "../components/InfoCard";
import SectionHeader from "../components/SectionHeader";
import { staggerContainer } from "../lib/animations";

export const metadata = {
  title: "About",
  description:
    "Learn about Be4Breach: mission, vision, and AI-first cybersecurity philosophy.",
};

const highlights = [
  {
    title: "Mission",
    description:
      "Protect enterprises from modern threats by delivering measurable, proactive security outcomes.",
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
      "We align security strategy, governance, and architecture to business goals.",
  },
  {
    title: "Hands-on execution",
    description:
      "Our operators embed with teams to implement controls and improve readiness.",
  },
  {
    title: "Productized intelligence",
    description:
      "AI-enabled tooling transforms telemetry into clear guidance and outcomes.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <AnimatedSection>
        <SectionHeader
          label="About"
          title="Be4Breach delivers trusted, AI-first cybersecurity for enterprises."
          description="We help organizations reduce breach risk by combining strategic advisory services with AI-powered security products. Every engagement is designed for clarity and accountability."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-6 md:grid-cols-3" variants={staggerContainer}>
        {highlights.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-14 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SectionHeader
            label="AI-first philosophy"
            title="Intelligence that earns trust."
            description="Our AI models prioritize transparency, explainability, and human oversight. We fuse telemetry across cloud, identity, and endpoint layers to build a risk graph that surfaces the actions most likely to prevent breaches."
          />
          <p className="text-sm text-brand-white/70">
            Security leaders receive clear recommendations backed by evidence,
            ensuring every decision is auditable and aligned with policy.
          </p>
        </div>
        <div className="rounded-3xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan/70">
            Consulting + Product
          </p>
          <h3 className="mt-3 text-lg font-semibold text-brand-white">
            A hybrid model built for resilience.
          </h3>
          <p className="mt-3 text-sm text-brand-white/70">
            Be4Breach combines executive advisory, technical execution, and
            AI-enabled products. This hybrid approach delivers immediate impact
            while continuously improving long-term security posture.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14" variants={staggerContainer}>
        <SectionHeader
          label="Operating model"
          title="How we operate"
          description="Our delivery model integrates with enterprise security programs without disrupting operations, reinforcing trust at every stage."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {operatingModel.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
