import React from 'react';
import { Music } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">

        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#apps" className="text-gray-300 hover:text-white transition-colors duration-200">Apps</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;