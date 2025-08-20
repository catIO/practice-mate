import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import About from './components/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero />
            <AppGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;