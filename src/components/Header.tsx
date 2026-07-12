interface HeaderProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Header = ({ onPageChange, currentPage }: HeaderProps) => {
  return (
    <header className="relative z-10 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onPageChange('home')}
            className={`transition-colors duration-200 ${
              currentPage === 'home' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Apps
          </button>
          <button 
            onClick={() => onPageChange('about')}
            className={`transition-colors duration-200 ${
              currentPage === 'about' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => onPageChange('privacy')}
            className={`transition-colors duration-200 ${
              currentPage === 'privacy' 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Privacy
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;