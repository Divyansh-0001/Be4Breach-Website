import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Next-Gen", href: "/services/next-gen" },
  { label: "Proactive", href: "/services/proactive" },
  { label: "Active", href: "/services/active" },
  { label: "Reactive", href: "/services/reactive" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "AI Security", href: "/ai-security" },
];

export default function Header() {
  return (
    <header className="border-b border-brand-white/10 bg-brand-black/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red/40 bg-brand-black text-xs font-semibold text-brand-red">
            BB
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-red">
              Before Breach
            </p>
            <p className="text-xs text-brand-white/60">
              Futuristic enterprise security
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-brand-white/60">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
