'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-2xl p-8 border border-emerald-500/20 relative z-10 backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm <span className="text-emerald-400 font-semibold"> Softvic</span>, a web and mobile app developer based in <span className="text-teal-400">Nigeria</span>. I'm passionate about creating innovative web and mobile solutions that solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                With expertise in <span className="text-cyan-400">React.js</span>, <span className="text-cyan-400">Laravel</span>, <span className="text-cyan-400">Kotlin</span>, and modern CSS frameworks, I specialize in building responsive, performant applications that provide exceptional user experiences across web and mobile platforms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of web and mobile development. I'm always excited to take on new challenges and bring creative ideas to life.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl blur-3xl"></div>
            {[
              { label: 'Projects Completed', value: '20+', icon: '🚀' },
              { label: 'Repositories', value: '20+', icon: '💻' },
              { label: 'Technologies', value: '10+', icon: '⚡' },
              { label: 'Experience', value: '3+', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20 text-center relative z-10 backdrop-blur-sm hover:border-emerald-400/40 transition-all"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

