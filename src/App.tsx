import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex flex-col justify-between">
      <div>
        <Header onPageChange={setCurrentPage} currentPage={currentPage} />
        {renderPage()}
      </div>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;