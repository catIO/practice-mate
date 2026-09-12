import { Music } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer = ({ onPageChange }: FooterProps) => {
  return (
    <footer className="relative z-10 bg-black/40 border-t border-gray-800/80 backdrop-blur-md py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Music className="h-6 w-6 text-purple-400" />
          <span className="text-white font-bold tracking-wider">PRACTICE LAB</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <button 
            onClick={() => onPageChange('home')}
            className="hover:text-white transition-colors duration-200"
          >
            Apps
          </button>
          <button 
            onClick={() => onPageChange('about')}
            className="hover:text-white transition-colors duration-200"
          >
            About
          </button>
          <a 
            href="/privacy.html"
            className="hover:text-white transition-colors duration-200 font-medium text-purple-400 hover:text-purple-300"
          >
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} Practice Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
