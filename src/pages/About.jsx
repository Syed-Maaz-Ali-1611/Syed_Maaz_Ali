import React from 'react';
import { User, GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      year: '2020 - 2024',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'ABC University',
      location: 'New York, USA',
      gpa: '3.8/4.0',
      achievements: ['Graduated with Honors', 'President of Coding Club']
    },
    {
      year: '2018 - 2020',
      degree: 'Higher Secondary Education',
      institution: 'XYZ College',
      location: 'San Francisco, USA',
      percentage: '95%',
      achievements: ['Science Olympiad Winner', 'Student Council President']
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google UX Design Professional',
    'React Developer Certification',
    'Node.js Backend Development'
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-3000"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-indigo-300 dark:border-cyan-700 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-purple-300 dark:border-purple-700 rounded-lg rotate-45 opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-40 right-1/4 w-16 h-16 border-4 border-blue-300 dark:border-blue-700 rounded-full opacity-20 animate-float delay-2000"></div>
      </div>

      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-100/50 via-white/50 to-transparent dark:from-indigo-900/30 dark:via-gray-900/50 dark:to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-down">
            <User className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in-up">
            My <span className="text-indigo-600 dark:text-cyan-400">Journey</span> & 
            <span className="text-purple-600 dark:text-purple-400"> Background</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full animate-slide-in"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Passionate developer with expertise in modern web technologies, 
            dedicated to creating impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-500">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1 animate-gradient">
                    <div className="w-full h-full rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center">
                      <User className="w-12 h-12 text-indigo-600 dark:text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">[Your Name]</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I specialize in building exceptional digital experiences that are fast, 
                accessible, visually appealing, and responsive. My passion lies in 
                creating software that solves real-world problems with elegant solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-600">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-indigo-50/50 dark:hover:bg-gray-700/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-cyan-900 dark:to-blue-900 flex items-center justify-center animate-pulse-glow">
                      <Award className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-700">
              <h3 className="text-xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                Education
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400"></div>
                
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="relative mb-10 pl-16 group"
                  >
                    {/* Timeline dot with glow effect */}
                    <div className="absolute left-6 top-4 w-4 h-4 rounded-full bg-indigo-600 dark:bg-cyan-400 border-4 border-white dark:border-gray-800 group-hover:scale-150 transition-transform duration-300 animate-pulse-glow"></div>
                    
                    <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-indigo-600 dark:text-cyan-400">
                            {edu.year}
                          </span>
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-cyan-900 dark:to-blue-900 rounded-full">
                          <span className="text-sm font-semibold text-indigo-700 dark:text-cyan-300">
                            {edu.gpa || edu.percentage}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {edu.location}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-indigo-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-800">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Quick Skills Preview
              </h3>
              <div className="space-y-4">
                {['React/Next.js', 'Node.js/Express', 'UI/UX Design', 'Cloud & DevOps'].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                      <span>{skill}</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ 
                          width: '90%',
                          animation: `slideInRight 1s ease-out ${index * 0.2}s forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for decoration */}
        <div className="absolute bottom-10 left-10 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce-slow delay-500"></div>
        <div className="absolute top-1/2 left-5 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-bounce-slow delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { width: 0; }
          to { width: 90%; }
        }
        
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
          0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.6); }
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
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1500 { animation-delay: 1500ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>
    </section>
  );
};

export default About;