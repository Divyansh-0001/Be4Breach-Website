import AnimatedSection from "./components/AnimatedSection";
import FeatureCard from "./components/FeatureCard";
import CTAButton from "./components/CTAButton";
import AlternatingSection from "./components/AlternatingSection";
import HeroSection from "./components/HeroSection";
import ServiceCardGrid from "./components/ServiceCardGrid";
import SectionHeader from "./components/SectionHeader";
import { staggerContainer } from "./lib/animations";

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

const features = [
  {
    icon: "AI",
    title: "Predictive intelligence",
    description:
      "Anticipate adversary behavior with AI models trained on real-world threat patterns.",
  },
  {
    icon: "XR",
    title: "Explainable response",
    description:
      "Every recommendation is transparent, auditable, and aligned to policy.",
  },
  {
    icon: "24",
    title: "Continuous validation",
    description:
      "Monitor critical controls around the clock to eliminate blind spots.",
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

const testimonials = [
  {
    title: "Global Fintech CISO",
    description:
      "Be4Breach delivered immediate visibility into our critical control gaps and a roadmap we could execute quickly.",
  },
  {
    title: "Healthcare Security Director",
    description:
      "The AI-driven prioritization helped us focus on what mattered most without losing trust in the data.",
  },
  {
    title: "Cloud Infrastructure Lead",
    description:
      "We reduced response times and gained confidence in our incident readiness within weeks.",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl px-6">
      <HeroSection />

      <AnimatedSection className="py-16" variants={staggerContainer}>
        <SectionHeader
          label="Feature Highlights"
          title="Premium AI capabilities built for security leaders."
          description="Modernize your defenses with intelligent automation, continuous validation, and trusted guidance."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-brand-white/10 py-16">
        <SectionHeader
          label="Services"
          title="Comprehensive protection across the breach lifecycle."
          description="Be4Breach pairs AI-driven intelligence with expert operators to deliver resilient, enterprise-grade security programs."
        />
        <ServiceCardGrid
          className="mt-10"
          cards={serviceCards.map((card) => ({
            ...card,
            cta: "Learn more",
          }))}
        />
      </AnimatedSection>

      <div className="space-y-16 py-16">
        {alternatingSections.map((section, index) => (
          <AlternatingSection
            key={section.title}
            label={section.label}
            title={section.title}
            description={section.description}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <AnimatedSection className="py-16" variants={staggerContainer}>
        <SectionHeader
          label="Trusted by teams"
          title="Confidence from enterprise security leaders."
          description="Be4Breach is trusted to deliver measurable risk reduction with transparency at every step."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <FeatureCard
              key={item.title}
              icon="QB"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-20">
        <div className="rounded-3xl border border-brand-white/10 bg-brand-dark/80 px-8 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:flex md:items-center md:justify-between">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">
              Ready to deploy
            </p>
            <h2 className="text-2xl font-semibold text-brand-white md:text-3xl">
              Secure your organization with AI-driven defense.
            </h2>
            <p className="text-sm text-brand-white/70 md:text-base">
              Partner with Be4Breach to design and execute a security program
              tailored to your risk profile.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
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
