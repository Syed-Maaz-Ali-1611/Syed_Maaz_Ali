import React from 'react';

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Projects Section
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          View my projects here
        </p>
      </div>
    </section>
  );
};

export default Projects;