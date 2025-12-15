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
      className="relative min-h-screen py-20 px-4 bg-white dark:bg-gray-900"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-transparent dark:from-gray-800"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            My <span className="text-indigo-600 dark:text-cyan-400">Journey</span> & 
            <span className="text-purple-600 dark:text-purple-400"> Background</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies, 
            dedicated to creating impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
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
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-cyan-900 flex items-center justify-center">
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                Education
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
                
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="relative mb-10 pl-16 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-4 w-4 h-4 rounded-full bg-indigo-600 dark:bg-cyan-400 border-4 border-white dark:border-gray-800 group-hover:scale-150 transition-transform duration-300"></div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-indigo-600 dark:text-cyan-400">
                            {edu.year}
                          </span>
                        </div>
                        <div className="px-3 py-1 bg-indigo-100 dark:bg-cyan-900 rounded-full">
                          <span className="text-sm font-semibold text-indigo-700 dark:text-cyan-300">
                            {edu.gpa || edu.percentage}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
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
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
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
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-indigo-100 dark:border-gray-700">
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
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
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
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { width: 0; }
          to { width: 90%; }
        }
      `}</style>
    </section>
  );
};

export default About;