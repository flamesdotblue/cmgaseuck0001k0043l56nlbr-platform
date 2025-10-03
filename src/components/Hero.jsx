import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,122,26,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="font-instrument italic title-accent text-4xl sm:text-5xl md:text-6xl leading-tight">
            Artisanal Ice Creams for Night Owls
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
            Hand-churned small-batch scoops made with real ingredients. Explore bold flavors designed to shine in a dark theme.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#flavors"
              className="rounded-full bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
            >
              Explore Flavors
            </a>
            <a
              href="#story"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              Our Craft
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
        >
          {[
            'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2071&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511911063855-6e3a3a9e72e8?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501446690852-4be4b176d4d1?q=80&w=2069&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2069&auto=format&fit=crop',
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              <img src={src} alt="Ice cream collage" className="h-28 w-full object-cover sm:h-32 md:h-36 hover:scale-105 transition will-change-transform" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
