import { motion } from 'framer-motion'

const features = [
  {
    title: 'Real, traceable ingredients',
    desc: 'We partner with small farms and purveyors for transparent sourcing and peak flavor.',
  },
  {
    title: 'Slow churn, dense texture',
    desc: 'Lower overrun means richer scoops that melt luxuriously and carry flavor further.',
  },
  {
    title: 'Balanced sweetness',
    desc: 'Thoughtful sugar profiles and a touch of salt to highlight the core notes.',
  },
]

export function Features() {
  return (
    <section id="story" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="font-instrument italic title-accent text-3xl sm:text-4xl">Our Craft</h2>
          <p className="mt-2 max-w-2xl text-neutral-400">Crafted at midnight in micro-batches. No shortcuts, no artificial colors, just flavor-forward scoops with a clean, modern finish.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <div className="h-10 w-10 rounded-full bg-orange-600/20 ring-1 ring-orange-500/30 flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
