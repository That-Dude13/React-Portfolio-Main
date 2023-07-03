
import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  const handleTabChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleTabChange('home')}>Home</li>
        <li onClick={() => handleTabChange('portfolio')}>Portfolio</li>
        <li onClick={() => handleTabChange('resume')}>Resume</li>
        <li onClick={() => handleTabChange('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
