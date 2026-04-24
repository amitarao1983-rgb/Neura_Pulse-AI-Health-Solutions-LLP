import { useEffect, useState } from 'react'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#domains', label: 'Industries' },
  { href: '#value', label: 'Value' },
  { href: '#technology', label: 'Technology' },
  { href: '#vision', label: 'Vision' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/90 shadow-lg shadow-teal-500/5 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          Neura<span className="text-teal-400">_</span>Pulse
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-teal-500/25 transition hover:bg-teal-400 md:inline-flex"
        >
          Talk to us
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-slate-950/98 px-4 py-4 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-teal-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
              onClick={() => setOpen(false)}
            >
              Talk to us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
