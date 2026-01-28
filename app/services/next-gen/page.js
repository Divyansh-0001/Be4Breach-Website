import AnimatedSection from "../../components/AnimatedSection";
import InfoCard from "../../components/InfoCard";
import SectionHeader from "../../components/SectionHeader";

export const metadata = {
  title: "Next-Gen Security",
  description:
    "Secure-by-design architecture with zero-trust, cloud posture, and AI validation.",
};

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
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <AnimatedSection>
        <SectionHeader
          label="Services"
          title="Next-Gen Security"
          description="Be4Breach builds secure-by-design foundations that align architecture, cloud, and identity into a durable defense baseline with measurable outcomes."
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
          title="How AI improves next-gen security."
          description="Our AI evaluates architecture choices and continuously validates control coverage. Security leaders receive evidence-based guidance they can trust."
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
