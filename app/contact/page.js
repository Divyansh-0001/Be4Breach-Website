export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-red">
          Contact
        </p>
        <h1 className="font-display text-3xl font-semibold text-brand-white">
          Start a secure conversation.
        </h1>
        <p className="max-w-2xl text-sm text-brand-white/70">
          Placeholder contact page. Provide intake instructions, secure
          communication channels, and response time expectations.
        </p>
        <div className="rounded-lg border border-brand-white/10 bg-brand-black/60 p-4 text-sm text-brand-white/70">
          <p>Email: security@beforebreach.example</p>
          <p className="mt-2">Phone: +1 (555) 010-2901</p>
        </div>
      </section>
    </main>
  );
}
