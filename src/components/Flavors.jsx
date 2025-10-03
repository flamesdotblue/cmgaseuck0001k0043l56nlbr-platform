import { motion } from 'framer-motion'

const cards = [
  {
    name: 'Sicilian Pistachio',
    img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=2069&auto=format&fit=crop',
    note: 'Roasted Bronte pistachios, sea salt, silky finish.'
  },
  {
    name: 'Madagascar Vanilla Bean',
    img: 'https://images.unsplash.com/photo-1536599418105-9f803c021c76?q=80&w=1975&auto=format&fit=crop',
    note: 'Single-origin vanilla, speckled and aromatic.'
  },
  {
    name: 'Dark Chocolate Sorbet',
    img: 'https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=2069&auto=format&fit=crop',
    note: '72% cacao, dairy-free, intensely smooth.'
  },
  {
    name: 'Strawberry Balsamic',
    img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop',
    note: 'Mac­erated berries, aged balsamic pop.'
  },
  {
    name: 'Salted Caramel Crunch',
    img: 'https://images.unsplash.com/photo-1497051788611-2c64812349a6?q=80&w=2069&auto=format&fit=crop',
    note: 'Amber caramel ribbons, brittle shards.'
  },
  {
    name: 'Matcha Ripple',
    img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=2070&auto=format&fit=crop',
    note: 'Ceremonial grade matcha, toasted white choc.'
  },
]

export function Flavors() {
  return (
    <section id="flavors" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-instrument italic title-accent text-3xl sm:text-4xl">Seasonal Flavors</h2>
            <p className="mt-2 text-neutral-400">Real ingredients, bold profiles, limited runs.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-500">
            Pre-order a Pint
          </a>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.article
              key={c.name}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
            >
              <div className="relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                <p className="mt-1 text-sm text-neutral-400">{c.note}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-orange-600/15 px-3 py-1 text-xs text-orange-400">Small-batch</span>
                  <button className="rounded-full bg-orange-600 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-orange-500">
                    Add to list
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
