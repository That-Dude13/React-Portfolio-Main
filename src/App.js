// App.js
import React, { useState } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import NavTabs from './components/NavTabs';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume/>;
      case 'contact':
        return <Contact/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <NavTabs setCurrentPage={setCurrentPage}currentPage={currentPage} />
      </header>
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;
