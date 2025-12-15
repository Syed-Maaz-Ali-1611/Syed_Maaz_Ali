import React, { useState } from 'react';
import { Code, Palette, Database, Server, Cloud, Smartphone, Zap, Users } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: {
      icon: <Palette className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'TypeScript', level: 85, icon: 'TS' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Redux', level: 88, icon: '🔄' },
        { name: 'GraphQL', level: 80, icon: '🔷' },
      ]
    },
    backend: {
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚂' },
        { name: 'Python/Django', level: 85, icon: '🐍' },
        { name: 'REST APIs', level: 95, icon: '🔗' },
        { name: 'Microservices', level: 82, icon: '🧩' },
        { name: 'Authentication', level: 90, icon: '🔐' },
      ]
    },
    database: {
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'Redis', level: 80, icon: '🔴' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'Prisma', level: 82, icon: '⚡' },
        { name: 'Elasticsearch', level: 75, icon: '🔍' },
      ]
    },
    devops: {
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'AWS', level: 82, icon: '☁️' },
        { name: 'CI/CD', level: 88, icon: '🔄' },
        { name: 'Kubernetes', level: 75, icon: '⚓' },
        { name: 'Linux', level: 85, icon: '🐧' },
        { name: 'Nginx', level: 80, icon: '🎩' },
      ]
    }
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Palette className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'devops', label: 'DevOps', icon: <Cloud className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
            <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mastery of modern technologies and frameworks to build scalable, 
            performant applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${skillsData[category.id].color} text-white shadow-lg scale-105`
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category.icon}
              <span className="font-semibold">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl">{skill.icon}</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {skill.level}%
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {skill.name}
              </h3>
              
              {/* Animated Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillsData[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Advanced proficiency with {skill.level}% mastery
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Additional Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6" />, label: 'Mobile Development' },
              { icon: <Users className="w-6 h-6" />, label: 'Team Leadership' },
              { icon: <Code className="w-6 h-6" />, label: 'Clean Architecture' },
              { icon: <Zap className="w-6 h-6" />, label: 'Performance Optimization' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-full bg-indigo-100 dark:bg-cyan-900 text-indigo-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Skills;