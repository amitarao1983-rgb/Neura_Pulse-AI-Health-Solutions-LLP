export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Neura<span className="text-teal-400">_</span>Pulse
          </p>
          <p className="mt-1 text-sm text-slate-500">AI Health Solutions LLP</p>
        </div>
        <p className="text-sm text-slate-500">© {year} Neura_Pulse AI Health Solutions LLP. All rights reserved.</p>
      </div>
    </footer>
  )
}
