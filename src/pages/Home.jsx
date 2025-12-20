import React from 'react';
import { ArrowDown, Sparkles, MousePointerClick } from 'lucide-react';

const Home = () => {
  return (
   <section 
  id="home" 
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 md:pt-20 pb-20 md:pb-0"
>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-yellow-500 animate-spin-slow" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available for opportunities
          </span>
        </div>

        {/* Main heading with typing animation */}
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-800 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
              Syed Maaz Ali
              </span>
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full animate-slide-in"></div>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            <span className="typewriter">
              Software Engineer
            </span>
          </h2>
        </div>

        {/* Description */}
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
  Software Engineer skilled in MERN stack, Next.js, and React Native. 
  Building scalable applications with modern technologies.
</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-500">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <MousePointerClick className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#contact" 
            className="group px-8 py-4 border-2 border-indigo-600 dark:border-cyan-500 text-indigo-600 dark:text-cyan-400 font-semibold rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Let's Connect
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-700">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Availability' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl font-bold text-indigo-600 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
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
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slide-in {
          animation: slideIn 1s ease-out;
        }
        
        .typewriter {
          overflow: hidden;
          border-right: 3px solid;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .15em;
          animation: 
            typewriter 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #6366f1; }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </section>
  );
};

export default Home;