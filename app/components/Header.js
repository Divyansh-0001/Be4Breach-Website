export default function Header() {
  return (
    <header className="border-b border-brand-white/10 bg-brand-black/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
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
        <div className="hidden text-xs uppercase tracking-[0.4em] text-brand-white/50 md:block">
          Threat Intelligence
        </div>
      </div>
    </header>
  );
}
