import { motion } from 'framer-motion'
import { cn } from '../utils'
import { Coffee, Utensils, Clock, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brown-600 to-brown-800 rounded-full flex items-center justify-center">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">Premium Coffee</h3>
            <p className="text-slate-600">
              Single-origin beans roasted to perfection. Our baristas craft every cup with care and expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brown-600 to-brown-800 rounded-full flex items-center justify-center">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">Artisanal Desserts</h3>
            <p className="text-slate-600">
              Handmade pastries and desserts using locally sourced ingredients. Sweet treats to complement your coffee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brown-600 to-brown-800 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">Flexible Booking</h3>
            <p className="text-slate-600">
              Reserve your table in minutes. Choose your preferred time and enjoy our cozy ambiance without waiting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}