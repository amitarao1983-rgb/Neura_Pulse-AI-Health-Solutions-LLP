import { products, type ProductEntry } from '../content/siteData'

function ProductCard(product: ProductEntry) {
  const secondary = product.impact ?? product.applications ?? []
  const secondaryLabel = product.impact ? 'Impact' : 'Applications'

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-8 transition hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-white">{product.name}</h3>
          <p className="mt-2 text-sm font-medium text-teal-300 sm:text-base">{product.tagline}</p>
        </div>
        <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Product
        </span>
      </div>
      <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">{product.description}</p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Capabilities</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {product.capabilities.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-teal-500" aria-hidden>
                  ·
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{secondaryLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {secondary.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-cyan-400" aria-hidden>
                  ·
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="border-b border-white/5 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">Specialized products</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            AI product portfolio
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Intelligent AI platforms for life sciences and healthcare—custom GPT platforms, analytics engines, and
            bioinformatics across the value chain.
          </p>
        </div>
        <div className="mt-14 space-y-8">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
