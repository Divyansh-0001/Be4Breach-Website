export default function SectionHeader({ label, title, description }) {
  return (
    <div className="space-y-3">
      {label ? (
        <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">
          {label}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold leading-tight text-brand-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-brand-white/70 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
