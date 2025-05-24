import React from 'react';
import { useScrollReveal } from '../utils/animations';
import { education } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="education" 
      className={`py-20 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className={`transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>Education</span>
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div 
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              ></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative md:flex ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 ${
                        isDarkMode ? 'bg-gray-900 text-teal-400' : 'bg-white text-blue-600'
                      } border-2 ${
                        isDarkMode ? 'border-teal-400' : 'border-blue-600'
                      }`}
                    >
                      <GraduationCap size={16} />
                    </div>
                    
                    {/* Content */}
                    <div 
                      className={`pl-16 md:pl-0 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                      }`}
                    >
                      <div 
                        className={`p-6 rounded-lg shadow-md ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                        } transition-transform duration-300 hover:-translate-y-1`}
                      >
                        <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                        <p className={`text-sm font-medium ${
                          isDarkMode ? 'text-teal-400' : 'text-blue-600'
                        } mb-2`}>
                          {item.degree} {item.field && `• ${item.field}`}
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        } mb-2`}>
                          {item.startDate} - {item.endDate}
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.location}
                        </p>
                        {item.score && (
                          <p className="text-sm mt-2">
                            <span className="font-medium">Score:</span> {item.score}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;