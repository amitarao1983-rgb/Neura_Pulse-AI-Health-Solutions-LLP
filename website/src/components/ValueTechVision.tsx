import { techFramework, valueProps, visionMission } from '../content/siteData'

export function ValueSection() {
  return (
    <section id="value" className="border-b border-white/5 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">Our value proposition</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Measurable impact across healthcare and life sciences
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Our AI solutions deliver measurable impact across healthcare and life sciences.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((vp) => (
            <div
              key={vp.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6"
            >
              <h3 className="font-display text-xl font-semibold text-white">{vp.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{vp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TechSection() {
  return (
    <section id="technology" className="border-b border-white/5 bg-slate-900/20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {techFramework.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          We combine advanced technologies into solutions that fit how your teams already work.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techFramework.pillars.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 rounded-xl border border-teal-500/20 bg-teal-500/5 px-4 py-3 text-sm font-medium text-teal-100 sm:text-base"
            >
              <span className="h-2 w-2 rounded-full bg-teal-400" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-14 rounded-2xl border border-white/10 bg-slate-950/50 p-8 sm:p-10">
          <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {techFramework.integrationsHeading}
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {techFramework.integrations.map((i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" aria-hidden />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function VisionSection() {
  return (
    <section id="vision" className="border-b border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">Our vision</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{visionMission.vision}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Our mission</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">{visionMission.mission}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
