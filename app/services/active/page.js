import AnimatedSection from "../../components/AnimatedSection";
import InfoCard from "../../components/InfoCard";
import SectionHeader from "../../components/SectionHeader";

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
      <AnimatedSection>
        <SectionHeader
          label="Services"
          title="Active Defense"
          description="Active Defense delivers real-time detection, investigation, and containment with a clear chain of custody. We keep teams informed and in control throughout every response."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-12">
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

      <AnimatedSection className="mt-12">
        <SectionHeader
          label="AI Advantage"
          title="How AI improves active defense."
          description="AI accelerates triage and investigation while keeping humans in the loop. Decisions remain explainable and aligned to policy."
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
