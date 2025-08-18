import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <Header />
      <Hero />
      <AppGrid />
    </div>
  );
}

export default App;