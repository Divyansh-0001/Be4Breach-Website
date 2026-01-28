import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "AI Security", href: "/ai-security" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-brand-white/10 bg-brand-dark/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cyan/50 bg-brand-dark text-xs font-semibold text-brand-cyan shadow-[0_0_25px_rgba(0,240,255,0.25)]">
            B4
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-white">
              Be4Breach
            </p>
            <p className="text-xs text-brand-white/60">
              AI-first cybersecurity
            </p>
          </div>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-brand-white/60"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-cyan focus-visible:text-brand-cyan focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
