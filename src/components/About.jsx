import { motion } from 'framer-motion'
import { cn } from '../utils'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-brown-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">1. Choose Your Spot</h3>
            <p className="text-slate-600">
              Browse our cozy seating areas and select your preferred table through our reservation system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-brown-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">2. Enjoy Coffee</h3>
            <p className="text-slate-600">
              Savor our expertly crafted coffee while relaxing in our warm, inviting atmosphere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-brown-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brown-800 mb-3">3. Return Anytime</h3>
            <p className="text-slate-600">
              Our loyalty program rewards you for every visit with exclusive discounts and perks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}