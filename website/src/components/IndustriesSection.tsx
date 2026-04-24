import { useState } from 'react'
import type { Industry } from '../content/siteData'
import { industries } from '../content/siteData'

function IndustryPanel({ industry, open, onToggle }: { industry: Industry; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden">
      <button
        type="button"
        id={`${industry.id}-btn`}
        aria-expanded={open}
        aria-controls={`${industry.id}-panel`}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/[0.03] sm:px-6 sm:py-6"
      >
        <span>
          <span className="font-display block text-lg font-semibold text-white sm:text-xl">{industry.name}</span>
          <span className="mt-2 block text-sm leading-relaxed text-slate-400 sm:text-base">{industry.summary}</span>
        </span>
        <span
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-teal-400 transition ${
            open ? 'rotate-180 bg-teal-500/10' : ''
          }`}
          aria-hidden
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {open && (
        <div id={`${industry.id}-panel`} role="region" aria-labelledby={`${industry.id}-btn`} className="border-t border-white/10 px-5 pb-6 sm:px-6">
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {industry.blocks.map((block) => (
              <article
                key={block.title}
                className="rounded-xl border border-white/5 bg-slate-950/60 p-5 sm:p-6"
              >
                <h3 className="font-display text-base font-semibold text-teal-200 sm:text-lg">{block.title}</h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Workflow</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {block.workflow.map((w) => (
                        <li key={w} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" aria-hidden />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Value</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {block.value.map((v) => (
                        <li key={v} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" aria-hidden />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function IndustriesSection() {
  const [openId, setOpenId] = useState<string | null>(industries[0]?.id ?? null)

  return (
    <section id="domains" className="border-b border-white/5 bg-slate-900/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">Industry domains</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            We serve life sciences end-to-end
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Deep workflows across clinical research, pharma, biotech, health systems, and genomics—each expandable
            below.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {industries.map((ind) => (
            <IndustryPanel
              key={ind.id}
              industry={ind}
              open={openId === ind.id}
              onToggle={() => setOpenId((cur) => (cur === ind.id ? null : ind.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
