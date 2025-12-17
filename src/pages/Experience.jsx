import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Building, Sparkles, Database, Smartphone, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: 'July 2025 – Nov 2025',
      position: 'Full-Stack Developer',
      company: 'Sasquatch Innovations',
      location: 'Toronto, Canada',
      type: 'Full-time',
      achievements: [
        'Developed full-stack web applications using MERN stack and Next.js with TypeScript',
        'Built responsive admin panels and reusable components for better user experience',
        'Implemented secure Node.js/PostgreSQL backend with proper authentication',
        'Integrated Firebase Storage and Stripe payment gateway for seamless operations'
      ],
      technologies: ['MERN Stack', 'Next.js', 'TypeScript', 'PostgreSQL', 'Firebase', 'Stripe']
    },
    {
      year: 'March 2025 – July 2025',
      position: 'Software Developer',
      company: 'ZERO Vertical',
      location: 'Karachi, Pakistan',
      type: 'Full-time',
      achievements: [
        'Developed full-stack MERN and Next.js applications with SSR/SSG for SEO-friendly solutions',
        'Built RESTful APIs with Node.js/Express and Java Spring Boot',
        'Developed cross-platform React Native apps using Firebase for real-time data',
        'Implemented authentication systems and optimized application performance'
      ],
      technologies: ['MERN Stack', 'Next.js', 'React Native', 'Java Spring Boot', 'Firebase', 'SSR/SSG']
    },
    {
      year: 'Nov 2023 – March 2025',
      position: 'Backend Developer',
      company: 'Abidi Solutions',
      location: 'Maryland, USA',
      type: 'Full-time',
      achievements: [
        'Developed full-stack MERN web applications and cross-platform React Native apps',
        'Built backend APIs with Node.js/Express and Firebase for real-time functionality',
        'Implemented smooth frontend-database integration and data management systems',
        'Collaborated with teams to deliver scalable, high-quality solutions'
      ],
      technologies: ['MERN Stack', 'React Native', 'Node.js/Express', 'Firebase', 'REST APIs', 'Azure']
    },
    {
      year: 'Oct 2023 – Nov 2023',
      position: 'Website Developer Intern',
      company: 'Super Nova',
      location: 'Karachi, Pakistan',
      type: 'Internship',
      achievements: [
        'Contributed to frontend development with .NET C# and React Native',
        'Improved UI/UX design for responsive, cross-platform mobile applications',
        'Assisted in debugging and optimizing apps for better performance and stability',
        'Participated in code reviews and learned industry best practices'
      ],
      technologies: ['.NET C#', 'React Native']
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-3000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 right-20 w-10 h-10 border-2 border-indigo-400 dark:border-cyan-700 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-purple-400 dark:border-purple-700 rotate-45 opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-40 left-10 w-8 h-8 border-2 border-pink-400 dark:border-pink-700 rounded-full opacity-20 animate-float delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-down">
            <Briefcase className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in-up">
            Work <span className="text-indigo-600 dark:text-cyan-400 animate-gradient">Experience</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full animate-slide-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-300">
            A timeline of my professional growth in software development, from internships 
            to full-stack roles, focusing on MERN stack, Next.js, and React Native applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line with glow */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'
              } ${index % 2 === 0 ? 'md:text-right' : ''}`}
            >
              {/* Animated timeline dot */}
              <div className={`absolute ${
                index % 2 === 0 
                  ? 'left-0 md:left-1/2 md:-translate-x-1/2' 
                  : 'left-0 md:left-1/2 md:-translate-x-1/2'
              } top-6 w-5 h-5 rounded-full ${
                exp.type === 'Internship' ? 'bg-green-600 dark:bg-green-400' :
                exp.type === 'Contract' ? 'bg-orange-600 dark:bg-orange-400' :
                'bg-indigo-600 dark:bg-cyan-400'
              } border-4 border-white dark:border-gray-900 z-10 animate-pulse-glow`}></div>
              
              {/* Year badge */}
              <div className={`mb-4 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-cyan-900 dark:to-blue-900 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <Calendar className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                  <span className="text-sm font-semibold text-indigo-700 dark:text-cyan-300">
                    {exp.year}
                  </span>
                </div>
              </div>

              {/* Experience Card */}
              <div className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`} style={{ animationDelay: `${index * 150 + 100}ms` }}>
                <div className={`flex flex-col ${
                  index % 2 === 0 ? 'md:items-end' : ''
                }`}>
                  {/* Position & Company */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {exp.location}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${
                        exp.type === 'Internship' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : exp.type === 'Contract'
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
                          : 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500 animate-pulse" />
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className={`space-y-3 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed group/item">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                            <span className="group-hover/item:text-indigo-600 dark:group-hover/item:text-cyan-400 transition-colors">
                              {achievement}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500 animate-pulse" />
                      Technologies Used
                    </h4>
                    <div className={`flex flex-wrap gap-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 text-indigo-700 dark:text-cyan-300 rounded-full text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { 
              value: '4', 
              label: 'Companies', 
              desc: 'Professional Experience', 
              icon: <Building className="w-8 h-8 mx-auto" />,
              color: 'text-blue-600 dark:text-blue-400'
            },
            { 
              value: '2+', 
              label: 'Years Experience', 
              desc: 'Software Development', 
              icon: <Calendar className="w-8 h-8 mx-auto" />,
              color: 'text-purple-600 dark:text-purple-400'
            },
            { 
              value: '10+', 
              label: 'Projects Delivered', 
              desc: 'Across All Roles', 
              icon: <Database className="w-8 h-8 mx-auto" />,
              color: 'text-green-600 dark:text-green-400'
            },
            { 
              value: 'Full-Stack', 
              label: 'Specialization', 
              desc: 'MERN & React Native', 
              icon: <Globe className="w-8 h-8 mx-auto" />,
              color: 'text-pink-600 dark:text-pink-400'
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-500 dark:hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 200 + 800}ms` }}
            >
              <div className={`mb-2 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 group-hover:scale-110 transition-transform ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-12 p-8 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl border border-indigo-100/50 dark:border-gray-700/50">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Experience Highlights
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Cross-platform React Native development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Full-stack MERN applications with secure backends
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Next.js with SSR/SSG for SEO optimization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Payment gateway integration (Stripe) and real-time features
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 left-10 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute -top-10 right-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10 animate-bounce-slow delay-500"></div>
        <div className="absolute top-1/3 right-5 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-10 animate-bounce-slow delay-1000"></div>
      </div>

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
            box-shadow: 0 0 5px rgba(99, 102, 241, 0.3), 
                        0 0 10px rgba(99, 102, 241, 0.2); 
          }
          50% { 
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.6), 
                        0 0 20px rgba(99, 102, 241, 0.4); 
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
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1500 { animation-delay: 1500ms; }
        .delay-2000 { animation-delay: 2000ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>
    </section>
  );
};

export default Experience;