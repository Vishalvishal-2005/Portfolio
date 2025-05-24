import React from 'react';
import { ChevronUp } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer 
      className={`py-8 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Vishal P. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`p-3 rounded-full ${
              isDarkMode 
                ? 'bg-gray-800 text-teal-400 hover:bg-gray-700' 
                : 'bg-white text-blue-600 hover:bg-gray-50 shadow-sm'
            } transition-colors`}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;