import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2022 - Present',
      position: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      achievements: [
        'Led development of a microservices-based SaaS platform serving 50k+ users',
        'Improved application performance by 60% through code optimization',
        'Mentored 5 junior developers and established coding standards',
        'Implemented CI/CD pipeline reducing deployment time by 70%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'GraphQL']
    },
    {
      year: '2020 - 2022',
      position: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      type: 'Full-time',
      achievements: [
        'Built responsive web applications using React and TypeScript',
        'Collaborated with UX team to implement design systems',
        'Reduced bundle size by 40% through code splitting',
        'Implemented unit testing achieving 90% coverage'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Sass']
    },
    {
      year: '2019 - 2020',
      position: 'Software Engineer Intern',
      company: 'StartUp Ventures',
      location: 'Boston, MA',
      type: 'Internship',
      achievements: [
        'Developed features for a React-based dashboard',
        'Assisted in API development using Node.js',
        'Participated in agile development processes',
        'Contributed to team code reviews and documentation'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Work <span className="text-indigo-600 dark:text-cyan-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional growth and contributions to various organizations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'
              } ${index % 2 === 0 ? 'md:text-right' : ''}`}
            >
              {/* Timeline dot */}
              <div className={`absolute ${
                index % 2 === 0 
                  ? 'left-0 md:left-1/2 md:-translate-x-1/2' 
                  : 'left-0 md:left-1/2 md:-translate-x-1/2'
              } top-6 w-4 h-4 rounded-full bg-indigo-600 dark:bg-cyan-400 border-4 border-white dark:border-gray-900 z-10`}></div>
              
              {/* Year badge */}
              <div className={`mb-4 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-cyan-900">
                  <Calendar className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                  <span className="text-sm font-semibold text-indigo-700 dark:text-cyan-300">
                    {exp.year}
                  </span>
                </div>
              </div>

              {/* Experience Card */}
              <div className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className={`flex flex-col ${
                  index % 2 === 0 ? 'md:items-end' : ''
                }`}>
                  {/* Position & Company */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
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
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className={`space-y-3 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      Technologies Used
                    </h4>
                    <div className={`flex flex-wrap gap-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 text-indigo-700 dark:text-cyan-300 rounded-full text-sm font-medium hover:scale-110 transition-transform"
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
            { value: '3+', label: 'Years Experience', desc: 'Professional Development' },
            { value: '15+', label: 'Projects Delivered', desc: 'Successfully Completed' },
            { value: '10k+', label: 'Lines of Code', desc: 'Contributed Monthly' },
            { value: '100%', label: 'Client Satisfaction', desc: 'Across All Projects' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-4xl font-bold text-indigo-600 dark:text-cyan-400 mb-2">
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
      </div>
    </section>
  );
};

export default Experience;