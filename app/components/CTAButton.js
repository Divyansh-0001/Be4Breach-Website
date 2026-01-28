import Link from "next/link";

const variants = {
  primary:
    "border-brand-red bg-brand-red text-brand-dark hover:shadow-[0_0_24px_rgba(255,46,46,0.35)]",
  secondary:
    "border-brand-cyan/60 bg-transparent text-brand-white hover:border-brand-cyan hover:text-brand-cyan",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
