import React from 'react';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 md:pt-20"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Home Section
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to my portfolio homepage
        </p>
      </div>
    </section>
  );
};

export default Home;