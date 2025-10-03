export function CTA() {
  return (
    <footer id="cta" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-8 rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 sm:grid-cols-2">
          <div>
            <h3 className="font-instrument italic title-accent text-2xl sm:text-3xl">Late-night scoops, delivered</h3>
            <p className="mt-2 text-neutral-400">Join our midnight drop. Limited pints go live every Friday.</p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! We\'ll keep you posted about fresh flavors.')
              }}
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full flex-1 rounded-full border border-neutral-700 bg-neutral-950/80 px-5 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60"
              />
              <button
                type="submit"
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
              >
                Notify me
              </button>
            </form>
          </div>
          <div className="order-first sm:order-last">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1560008516-b34a36c1f047?q=80&w=2069&auto=format&fit=crop"
                alt="Assorted ice cream scoops"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-neutral-900 pt-6 sm:flex-row">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Night Scoops</p>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#flavors" className="text-neutral-400 hover:text-neutral-200">Flavors</a>
            <a href="#story" className="text-neutral-400 hover:text-neutral-200">Craft</a>
            <a href="#cta" className="text-neutral-400 hover:text-neutral-200">Order</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
