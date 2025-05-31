import React from 'react';
import { useTypingEffect, useScrollReveal } from '../utils/animations';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const { displayedText } = useTypingEffect("AI & Data Science Student", 100);
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: socialsRef, isVisible: socialsVisible } = useScrollReveal();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center items-center relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full ${
                isDarkMode ? 'bg-blue-500/20' : 'bg-teal-500/20'
              }`}
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 15 + 15 + 's',
                transform: 'translate(-50%, -50%) scale(0)',
                animation: 'pulse 20s infinite'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="rounded-full object-cover w-full h-full shadow-xl ring-3 ring-teal-400/30"
            />
            <div className={`absolute inset-0 rounded-full ${
              isDarkMode ? 'bg-teal-400/10' : 'bg-blue-400/10'
            } animate-pulse`}></div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-6 flex-1">
            <p className={`text-sm uppercase tracking-wider font-medium ${
              isDarkMode ? 'text-teal-400' : 'text-blue-600'
            }`}>
              Hello, my name is
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              {personalInfo.name}
            </h1>
            
            <h2 className={`text-2xl md:text-3xl font-medium h-10 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="inline-block">{displayedText}</span>
              <span className={`inline-block w-1 h-8 ml-1 align-middle animate-blink ${
                isDarkMode ? 'bg-teal-400' : 'bg-blue-600'
              }`}></span>
            </h2>

            <div 
              ref={infoRef} 
              className={`transition-all duration-700 ${
                infoVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
            >
              <p className={`text-lg max-w-2xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {personalInfo.summary}
              </p>
            </div>

            <div 
              ref={socialsRef} 
              className={`flex justify-center md:justify-start space-x-6 pt-4 transition-all duration-700 ${
                socialsVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
            >
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full border ${
                  isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                } transition-colors`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full border ${
                  isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className={`p-3 rounded-full border ${
                  isDarkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                } transition-colors`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 rounded-full ${
            isDarkMode 
              ? 'text-teal-400 hover:bg-gray-800' 
              : 'text-blue-600 hover:bg-gray-100'
          } transition-colors animate-bounce`}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;