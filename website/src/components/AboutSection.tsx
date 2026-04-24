import { enablementBullets } from '../content/siteData'

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/5 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            By integrating AI, bioinformatics, advanced analytics, and healthcare expertise
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            we enable organizations to move from data to decisions—without compromising rigor or compliance.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enablementBullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-5 shadow-inner shadow-white/[0.02]"
            >
              <span
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400"
                aria-hidden
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm font-medium leading-snug text-slate-200 sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
