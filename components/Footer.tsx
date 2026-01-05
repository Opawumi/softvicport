'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Softvic
            </h3>
            <p className="text-gray-400 text-sm mt-1">Web & Mobile App Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Softvic. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

