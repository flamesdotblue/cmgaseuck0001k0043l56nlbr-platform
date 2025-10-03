import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Maya R.',
    text: 'The pistachio tastes like the grove itself—savory, nutty, unforgettable.',
  },
  {
    name: 'Leo K.',
    text: 'Dark chocolate sorbet that rivals any gelato—intense and perfectly smooth.',
  },
  {
    name: 'Anika P.',
    text: 'Balanced sweetness. You can taste the ingredients, not just sugar.',
  },
]

export function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-instrument italic title-accent text-3xl sm:text-4xl">What People Say</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <blockquote className="text-neutral-200">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-400">— {q.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
