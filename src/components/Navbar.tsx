import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useActiveSection } from '../utils/animations';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className={`text-2xl font-bold ${
            isDarkMode ? 'text-teal-400' : 'text-blue-600'
          } transition-colors duration-300`}
        >
          Vishal<span className={isDarkMode ? 'text-purple-400' : 'text-teal-500'}>P</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-teal-400 ${
                activeSection === item.id 
                  ? isDarkMode ? 'text-teal-400' : 'text-blue-600' 
                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={toggleMenu}
            className={isDarkMode ? 'text-white' : 'text-gray-800'}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-[500px] opacity-100 py-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-teal-400 ${
                activeSection === item.id 
                  ? isDarkMode ? 'text-teal-400' : 'text-blue-600' 
                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;