import AnimatedSection from "../../components/AnimatedSection";
import InfoCard from "../../components/InfoCard";
import SectionHeader from "../../components/SectionHeader";

export const metadata = {
  title: "Proactive Security",
  description:
    "Continuous risk reduction through attack surface management and AI guidance.",
};

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
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <AnimatedSection>
        <SectionHeader
          label="Services"
          title="Proactive Security"
          description="Be4Breach helps security teams reduce risk before threats turn into incidents. The program focuses on visibility, verification, and disciplined remediation."
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
          title="How AI improves proactive security."
          description="AI trims the noise, highlights exploitable risk, and accelerates remediation without sacrificing oversight."
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
