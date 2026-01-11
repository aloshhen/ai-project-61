import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/800x600/?coffee,cafe"
          alt="Coffee Haven"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900/60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white">
            ☕ Coffee Haven
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Experience the perfect blend of premium coffee, artisanal desserts, and cozy ambiance. Reserve your table today!
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-3 bg-brown-600 text-white rounded-lg font-medium hover:bg-brown-700 transition-colors"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-8 py-3 bg-white/80 text-brown-600 rounded-lg font-medium hover:bg-white transition-colors"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}