'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
  { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600', icon: '▲' },
  { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-700', icon: '📘' },
  { name: 'Laravel', level: 85, color: 'from-red-400 to-red-600', icon: '🔴' },
  { name: 'Kotlin', level: 80, color: 'from-purple-400 to-purple-600', icon: '📱' },
  { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600', icon: '🎨' },
  { name: 'Bootstrap', level: 88, color: 'from-purple-500 to-pink-600', icon: '💜' },
  { name: 'Python', level: 75, color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-500', icon: '📜' },
  { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600', icon: '🌐' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

