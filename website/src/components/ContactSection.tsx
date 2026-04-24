export function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-teal-600/20 via-slate-900 to-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-10 shadow-2xl shadow-teal-500/10 backdrop-blur sm:p-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Partner on your next AI initiative
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Share your roadmap—clinical, commercial, or R&D—and we will align platforms, data governance, and
              integration to your environment.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:mt-0 lg:min-w-[240px]">
            <a
              href="mailto:hello@neurapulse.ai"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
            >
              hello@neurapulse.ai
            </a>
            <p className="text-center text-xs text-slate-500 lg:text-left">
              Replace with your official contact email when ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
