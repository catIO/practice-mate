import React from 'react';
import { Music, Code, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Practice Mate
            </h1>

          </div>

          {/* Mission Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50">

            <p className="text-gray-300 text-lg leading-relaxed">
            I created these tools to bring more structure to my practice. While balancing work, life, and music, I realized I needed to be more disciplined and focused in order to make the most of the time I can dedicate to practicing.            </p>
          </div>

          {/* Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Built with Purpose</h3>
              </div>
              <p className="text-gray-300">
                Every tool addresses a specific practice need. No bloat, no unnecessary features - just focused 
                functionality that helps you practice better.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Musician-First Design</h3>
              </div>
              <p className="text-gray-300">
                Created by someone who understands the challenges of practice. These tools are designed with 
                real-world practice scenarios in mind.
              </p>
            </div>
          </div>


          {/* Contact/Footer */}
          
        </div>
      </div>
    </div>
  );
};

export default About;
