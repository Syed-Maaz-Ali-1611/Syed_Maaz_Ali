import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="pt-16 md:pt-20">
      {children}
    </div>
  );
};

export default Layout;