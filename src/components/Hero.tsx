import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToApps = () => {
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative px-6 py-20 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
           Practice Mate
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
              Tools for Musicians
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practice tools for musicians to add structure to their practice sessions
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={scrollToApps}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            Explore Tools
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-gray-400 mx-auto cursor-pointer" onClick={scrollToApps} />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;