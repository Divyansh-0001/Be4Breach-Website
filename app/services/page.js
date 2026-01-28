import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import InfoCard from "../components/InfoCard";
import SectionHeader from "../components/SectionHeader";

export const metadata = {
  title: "Services",
  description:
    "Explore Be4Breach services across proactive, active, and reactive defense.",
};

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
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6 py-12">
      <AnimatedSection>
        <SectionHeader
          label="Services"
          title="Security coverage engineered for clarity and trust."
          description="Be4Breach delivers an end-to-end security program mapped to the full breach lifecycle. Each service line reduces risk and provides transparent outcomes."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-6 md:grid-cols-2">
        {serviceLinks.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-cyan/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70"
          >
            <h2 className="text-lg font-semibold text-brand-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-brand-white/70">
              {service.description}
            </p>
            <span className="mt-4 inline-flex text-xs uppercase tracking-[0.35em] text-brand-cyan/70 transition group-hover:text-brand-cyan">
              View details
            </span>
          </Link>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SectionHeader
          label="AI Enablement"
          title="How AI elevates every service line."
          description="We fuse signals, prioritize actions, and deliver guidance that is explainable and accountable. The result is faster decisions without sacrificing trust."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {aiHighlights.map((item) => (
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
