import React, { useState } from 'react';
import { Code, Palette, Database, Server, Cloud, Smartphone, Zap, Users, Cpu, GitBranch } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: {
      icon: <Palette className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'JavaScript', level: 92, icon: 'JS' },
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TypeScript', level: 80, icon: 'TS' },
        { name: 'React Native', level: 85, icon: '📱' },
      ]
    },
    backend: {
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚂' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'REST APIs', level: 90, icon: '🔗' },
        { name: 'OOP', level: 85, icon: '🧩' },
        { name: 'DSA', level: 80, icon: '🧠' },
      ]
    },
    database: {
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'MERN Stack', level: 90, icon: '⚡' },
        { name: 'Database Design', level: 82, icon: '🗄️' },
        { name: 'Data Modeling', level: 78, icon: '📊' },
      ]
    },
    tools: {
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🐙' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS Basics', level: 70, icon: '☁️' },
        { name: 'CI/CD', level: 75, icon: '🔄' },
        { name: 'Agile/Scrum', level: 85, icon: '🏃' },
        { name: 'Testing', level: 80, icon: '🧪' },
      ]
    }
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Palette className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'tools', label: 'Tools & Methods', icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-3000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 border-2 border-purple-400 dark:border-purple-700 rounded-lg rotate-45 opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-40 right-10 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-float delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-down">
            <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in-up">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">Technologies</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full animate-slide-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Proficient in modern web technologies with expertise in MERN stack, Next.js, 
            React Native, and full-stack development. Focused on building scalable, 
            efficient applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${skillsData[category.id].color} text-white shadow-lg scale-105 animate-pulse-glow`
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:shadow-md'
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
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl">{skill.icon}</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white group-hover:scale-110 transition-transform duration-300">
                  {skill.level}%
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
              
              {/* Animated Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillsData[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level >= 90 ? 'Expert proficiency' : 
                 skill.level >= 80 ? 'Advanced proficiency' : 
                 skill.level >= 70 ? 'Intermediate proficiency' : 
                 'Working knowledge'} with {skill.level}% mastery
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-500">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: <Smartphone className="w-6 h-6" />, 
                label: 'Mobile Development', 
                desc: 'React Native, Cross-platform'
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                label: 'Team Management', 
                desc: 'Leadership & Collaboration'
              },
              { 
                icon: <Code className="w-6 h-6" />, 
                label: 'Problem Solving', 
                desc: 'DSA & Algorithm Design'
              },
              { 
                icon: <GitBranch className="w-6 h-6" />, 
                label: 'Version Control', 
                desc: 'Git, GitHub, CI/CD'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-cyan-50/50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform animate-pulse-glow">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {item.label}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 dark:border-gray-700/50">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
            Full Stack Proficiency
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'MERN Stack', 'Next.js', 'TypeScript', 'React Native', 
              'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 
              'Firebase', 'Python', 'REST APIs', 'OOP', 'DSA'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 dark:hover:from-cyan-900 dark:hover:to-blue-900 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorator elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute top-20 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow delay-300"></div>
      <div className="absolute top-2/3 left-5 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-bounce-slow delay-600"></div>

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
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
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
        .delay-600 { animation-delay: 600ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1500 { animation-delay: 1500ms; }
        .delay-2000 { animation-delay: 2000ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>
    </section>
  );
};

export default Skills;