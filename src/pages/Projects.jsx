import React, { useState } from 'react';
import { Github, ExternalLink, Star, Users, Zap, Eye, Sparkles } from 'lucide-react';

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
      image: '🛒',
      color: 'from-blue-500 to-cyan-500'
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
      image: '📊',
      color: 'from-purple-500 to-pink-500'
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
      image: '💬',
      color: 'from-green-500 to-emerald-500'
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
      image: '📋',
      color: 'from-orange-500 to-red-500'
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
      image: '🚪',
      color: 'from-indigo-500 to-purple-500'
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
      image: '🎨',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', color: 'from-blue-500 to-cyan-500' },
    { id: 'fullstack', label: 'Full Stack', color: 'from-purple-500 to-pink-500' },
    { id: 'frontend', label: 'Frontend', color: 'from-green-500 to-emerald-500' },
    { id: 'backend', label: 'Backend', color: 'from-orange-500 to-red-500' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-3000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-12 h-12 border-2 border-purple-400 dark:border-purple-700 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-pink-400 dark:border-pink-700 rotate-45 opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 border-2 border-blue-400 dark:border-blue-700 rounded-full opacity-20 animate-float delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-down">
            <Eye className="w-5 h-5 text-purple-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in-up">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient">Projects</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-slide-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-300">
            A collection of my recent work showcasing problem-solving skills and technical expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm ${
                filter === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105 animate-pulse-glow`
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl animate-fade-in-up ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon with gradient background */}
              <div className={`relative h-48 ${
                project.featured ? 'lg:h-64' : ''
              } overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-8xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {project.image}
                  </div>
                </div>
                
                {/* Featured badge with animation */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold shadow-lg animate-pulse-glow">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {project.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold">{project.contributors}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
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
                      className="px-3 py-1.5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-cyan-900 dark:hover:to-blue-900 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Click icons to explore
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="p-2.5 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2.5 rounded-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-cyan-500/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-pulse-glow">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8">
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-glow hover:animate-none"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Visit My GitHub
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute top-10 right-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce-slow delay-300"></div>
      <div className="absolute top-2/3 left-5 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-bounce-slow delay-600"></div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.3), 
                        0 0 20px rgba(168, 85, 247, 0.2); 
          }
          50% { 
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 
                        0 0 30px rgba(168, 85, 247, 0.4); 
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slide-in {
          animation: slideIn 1s ease-out;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1500 { animation-delay: 1500ms; }
        .delay-2000 { animation-delay: 2000ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>
    </section>
  );
};

export default Projects;