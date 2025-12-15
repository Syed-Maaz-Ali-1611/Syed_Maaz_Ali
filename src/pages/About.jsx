import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          About Section
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Learn more about me here
        </p>
      </div>
    </section>
  );
};

export default About;