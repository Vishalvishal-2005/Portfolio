import React from 'react';
import { useScrollReveal } from '../utils/animations';
import { skills } from '../data/portfolioData';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="skills" 
      className={`py-20 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>My</span> Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {skills.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {skill.proficiency}%
                          </span>
                        </div>
                        
                        <div 
                          className={`w-full h-2 rounded-full ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          <div 
                            className={`h-full rounded-full ${
                              isDarkMode ? 'bg-teal-400' : 'bg-blue-600'
                            }`}
                            style={{ 
                              width: `${skill.proficiency}%`,
                              animation: isVisible ? `growWidth 1.5s ease-out ${skillIndex * 0.1}s forwards` : 'none',
                              transform: 'scaleX(0)',
                              transformOrigin: 'left'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes growWidth {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Skills;