import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function CTA() {
  return (
    <section className="py-24 bg-brown-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Coffee Haven?
          </h2>
          <p className="text-xl text-white mb-10">
            Reserve your table now and enjoy our premium coffee and cozy ambiance.
          </p>
          <a
            href="#booking"
            className="px-8 py-4 bg-white text-brown-600 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>
    </section>
  )
}