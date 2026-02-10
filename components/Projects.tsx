'use client'

import { motion } from 'framer-motion'

// Simple icon components since we're not using lucide-react
const ExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const projects = [

  {
    title: 'NACCIMA Project',
    description: 'Official website for Nigerian Association of Chambers of Commerce, Industry, Mines and Agriculture.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '🏢',
    github: 'https://github.com/Opawumi/NACCIMAPROJECT',
    live: 'https://opawumi.github.io/NACCIMAPROJECT/',
  },
  {
    title: 'GreenCampus',
    description: 'An eco-friendly campus management platform promoting sustainability and environmental awareness.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: '🌱',
    github: 'https://github.com/Opawumi/GreenCampus',
    live: 'https://uconnect-alpha.vercel.app/dashboard',
  },
  {
    title: 'LostButFound',
    description: 'A platform for reporting and finding lost items, helping people reconnect with their belongings.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: '🔍',
    github: 'https://github.com/Opawumi/LostButFound',
    live: 'https://uconnect-alpha.vercel.app/dashboard',
  },
  {
    title: 'Fire-Kill Mobile App',
    description: 'Android mobile application built with Kotlin for fire safety and emergency response management.',
    tech: ['Kotlin', 'Android'],
    image: '🔥',
    github: 'https://github.com/Opawumi/Fire-Kill-mobile-app',
    live: '#',
  },
  {
    title: 'Tech Conference',
    description: 'Event management platform for tech conferences with registration and scheduling features.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: '🎤',
    github: 'https://github.com/Opawumi/tech-conference',
    live: 'https://tech-conference-navy.vercel.app/',
  },
  {
    title: 'McFin Documentation',
    description: 'Comprehensive documentation platform built with JavaScript, featuring clean UI and organized content structure.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: '📚',
    github: 'https://github.com/Opawumi/McFin_Docs',
    live: 'https://mcfindocs.vercel.app/dashboard/memos/inbox',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

