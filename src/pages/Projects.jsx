import React, { useState } from 'react';
import { Github, ExternalLink, Star, Users, Zap, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: '#',
      live: '#',
      stars: 142,
      contributors: 3,
      featured: true,
      image: '🛒'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      category: 'frontend',
      description: 'Interactive dashboard for data visualization and predictive analytics using machine learning models.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'TensorFlow.js'],
      github: '#',
      live: '#',
      stars: 89,
      contributors: 2,
      featured: true,
      image: '📊'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      category: 'fullstack',
      description: 'Scalable chat application with video calling, file sharing, and end-to-end encryption.',
      technologies: ['React', 'Socket.io', 'WebRTC', 'PostgreSQL'],
      github: '#',
      live: '#',
      stars: 67,
      contributors: 4,
      featured: false,
      image: '💬'
    },
    {
      id: 4,
      title: 'Task Management System',
      category: 'frontend',
      description: 'Collaborative project management tool with drag-drop interface and real-time updates.',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      stars: 54,
      contributors: 2,
      featured: false,
      image: '📋'
    },
    {
      id: 5,
      title: 'API Gateway Microservice',
      category: 'backend',
      description: 'High-performance API gateway with rate limiting, authentication, and load balancing.',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Nginx'],
      github: '#',
      live: '#',
      stars: 98,
      contributors: 3,
      featured: true,
      image: '🚪'
    },
    {
      id: 6,
      title: 'Portfolio Website Builder',
      category: 'fullstack',
      description: 'Drag-and-drop website builder specifically designed for creating developer portfolios.',
      technologies: ['Next.js', 'Prisma', 'Tailwind', 'AWS S3'],
      github: '#',
      live: '#',
      stars: 112,
      contributors: 5,
      featured: true,
      image: '🎨'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
            <Eye className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing problem-solving skills and technical expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-4 ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 ${
                project.featured ? 'lg:h-64' : ''
              } bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center`}>
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-purple-100 dark:hover:bg-cyan-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats & Links */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.contributors}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-cyan-900 hover:text-purple-600 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-cyan-900 hover:text-purple-600 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-cyan-500/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, contributions, and open-source work
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
                Visit My GitHub
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;