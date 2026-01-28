import AnimatedSection from "../../components/AnimatedSection";
import InfoCard from "../../components/InfoCard";
import SectionHeader from "../../components/SectionHeader";
import { staggerContainer } from "../../lib/animations";

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
      <AnimatedSection>
        <SectionHeader
          label="Services"
          title="Reactive Response"
          description="When incidents occur, we bring disciplined response, containment, and recovery with transparent reporting. Every action is documented to preserve trust and compliance."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-12" variants={staggerContainer}>
        <SectionHeader label="Delivery" title="What this service delivers" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {coreCards.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12" variants={staggerContainer}>
        <SectionHeader
          label="AI Advantage"
          title="How AI improves reactive response."
          description="AI accelerates investigation and containment while preserving human oversight. Insights are documented for audit-ready clarity."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {aiCards.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
