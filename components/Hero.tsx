'use client'

import { motion } from 'framer-motion'
// Simple ArrowDown icon component
const ArrowDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }  
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      
      {/* Floating code elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {'</>'}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        {'{}'}
      </motion.div>
      
      {/* Web and Mobile Icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-purple-500/30 rounded-lg opacity-20"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-40 border-2 border-blue-500/30 rounded-3xl opacity-20"
        animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full"
            >
              <span className="text-purple-400 text-sm font-semibold">Frontend Engineer</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Hi, I'm Victor
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
            >
              Web & Mobile App Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              I craft beautiful, responsive web applications and mobile apps with modern technologies. 
              Passionate about creating seamless user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Visual representation of web and mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Web Browser Mockup */}
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded h-48 flex items-center justify-center">
                  <div className="text-6xl">🌐</div>
                </div>
              </motion.div>
              
              {/* Mobile App Mockup */}
              <motion.div
                className="absolute -bottom-10 -right-10 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-3 border border-slate-700/50 shadow-2xl w-32"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg h-40 flex items-center justify-center">
                  <div className="text-4xl">📱</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

