'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A selection of my recent design work and case studies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group hover-lift"
            >
              <div className="glass-effect rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden h-full">
                {/* Project Image */}
                <div className="h-36 sm:h-40 md:h-44 lg:h-48 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:scale-110 transition-transform duration-500">
                    {/* You can add actual project images here */}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2 sm:space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full"
                        aria-label="Preview project"
                      >
                        <Eye size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full"
                        aria-label="View live"
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <div>
                      <span className="text-xs sm:text-sm text-purple-300 font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold mt-1">{project.title}</h3>
                    </div>
                    <ExternalLink className="text-gray-400" size={16} />
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features - Hide on very small screens */}
                  <div className="mb-3 sm:mb-4 hidden sm:block">
                    <h4 className="font-semibold mb-1 text-xs sm:text-sm">Features:</h4>
                    <ul className="space-y-0.5">
                      {project.features.slice(0, 2).map((feature) => (
                        <li key={feature} className="flex items-center text-xs text-gray-300">
                          <span className="mr-2">•</span>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs sm:text-sm font-medium"
                    >
                      View Case Study
                    </motion.button>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 glass-effect rounded-full"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 glass-effect rounded-full"
                        aria-label="GitHub repository"
                      >
                        <Github size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;