import { hero } from '../content/siteData'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[90px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
          AI Health Solutions LLP
        </p>
        <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {hero.subtitle}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {hero.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#domains"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-400"
          >
            Explore industries
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-teal-500/40 hover:bg-white/10"
          >
            View products
          </a>
        </div>
      </div>
    </section>
  )
}
