import Link from "next/link";
import AnimatedSection from "./components/AnimatedSection";
import CTAButton from "./components/CTAButton";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";

export const metadata = {
  title: "Home",
  description:
    "Be4Breach delivers AI-powered cybersecurity solutions for enterprise teams.",
};

const serviceCards = [
  {
    title: "Next-Gen Security",
    description: "Zero-trust architecture designed for cloud-first teams.",
    href: "/services/next-gen",
  },
  {
    title: "Proactive Security",
    description: "Continuous validation to shrink your attack surface fast.",
    href: "/services/proactive",
  },
  {
    title: "Active Defense",
    description: "Real-time monitoring and guided containment.",
    href: "/services/active",
  },
  {
    title: "Reactive Response",
    description: "Incident response with forensic clarity and trust.",
    href: "/services/reactive",
  },
];

const alternatingSections = [
  {
    label: "Predictive intelligence",
    title: "Stay ahead of adversaries with AI-led insight.",
    description:
      "Our models correlate telemetry across cloud, identity, and endpoint layers to identify emerging threats before impact.",
  },
  {
    label: "Operational clarity",
    title: "Make confident decisions with verified recommendations.",
    description:
      "We surface prioritized actions backed by evidence and explainable AI, giving security leaders the visibility they demand.",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6">
      <HeroSection />

      <AnimatedSection className="border-t border-brand-white/10 py-16">
        <SectionHeader
          label="Services"
          title="Comprehensive protection across the breach lifecycle."
          description="Be4Breach pairs AI-driven intelligence with expert operators to deliver resilient, enterprise-grade security programs."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-brand-white/10 bg-brand-dark/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-cyan/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70"
            >
              <h3 className="text-lg font-semibold text-brand-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-brand-white/70">
                {card.description}
              </p>
              <span className="mt-4 inline-flex text-xs uppercase tracking-[0.35em] text-brand-cyan/70 transition group-hover:text-brand-cyan">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <div className="space-y-16 py-16">
        {alternatingSections.map((section, index) => (
          <AnimatedSection
            key={section.title}
            className="grid items-center gap-10 md:grid-cols-2"
            delay={index * 0.1}
          >
            <div className={index % 2 ? "md:order-2" : ""}>
              <SectionHeader
                label={section.label}
                title={section.title}
                description={section.description}
              />
            </div>
            <div
              className={`relative h-64 overflow-hidden rounded-3xl border border-brand-white/10 bg-gradient-to-br from-brand-cyan/15 via-brand-dark to-brand-red/15 shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${
                index % 2 ? "md:order-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.35),_transparent_70%)]" />
              <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.35em] text-brand-white/70">
                Be4Breach AI
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="pb-20">
        <div className="rounded-3xl border border-brand-white/10 bg-brand-dark/80 px-8 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:flex md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">
              Ready to deploy
            </p>
            <h2 className="text-2xl font-semibold text-brand-white">
              Secure your organization with AI-driven defense.
            </h2>
            <p className="text-sm text-brand-white/70">
              Partner with Be4Breach to design and execute a security program
              tailored to your risk profile.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-0">
            <CTAButton href="/services">Explore Services</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
