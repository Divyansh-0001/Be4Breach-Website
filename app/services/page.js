import Link from "next/link";

const serviceLinks = [
  {
    title: "Next-Gen Security",
    href: "/services/next-gen",
    description: "Modern defense architecture for evolving threats.",
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

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Services
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Layered security for every stage of risk.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          Explore the Before Breach service model, from next-gen architecture
          to hands-on incident response.
        </p>
      </section>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {serviceLinks.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-6 transition hover:border-brand-red/60"
          >
            <h2 className="font-display text-lg font-semibold text-brand-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-brand-white/60">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
