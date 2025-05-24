import React from 'react';
import { useScrollReveal } from '../utils/animations';
import { achievements, certifications, interests } from '../data/portfolioData';
import { Trophy, Award, Heart } from 'lucide-react';

interface AchievementsProps {
  isDarkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isDarkMode }) => {
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollReveal();
  const { ref: certificationsRef, isVisible: certificationsVisible } = useScrollReveal();
  const { ref: interestsRef, isVisible: interestsVisible } = useScrollReveal();

  return (
    <section 
      id="achievements" 
      className={`py-20 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>Achievements</span> & More
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Achievements */}
          <div 
            ref={achievementsRef} 
            className={`transition-all duration-700 ${
              achievementsVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Trophy className={`mr-2 ${isDarkMode ? 'text-teal-400' : 'text-blue-600'}`} size={24} />
              Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  } transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                  <p className={`text-sm font-medium ${
                    isDarkMode ? 'text-teal-400' : 'text-blue-600'
                  } mb-2`}>
                    {achievement.organization} • {achievement.date}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div 
            ref={certificationsRef} 
            className={`transition-all duration-700 ${
              certificationsVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className={`mr-2 ${isDarkMode ? 'text-teal-400' : 'text-blue-600'}`} size={24} />
              Certifications
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {certifications.map((certification, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-200 border border-gray-600' 
                      : 'bg-gray-100 text-gray-800 border border-gray-200'
                  }`}
                >
                  {certification}
                </span>
              ))}
            </div>
          </div>
          
          {/* Interests */}
          <div 
            ref={interestsRef} 
            className={`transition-all duration-700 ${
              interestsVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Heart className={`mr-2 ${isDarkMode ? 'text-teal-400' : 'text-blue-600'}`} size={24} />
              Interests
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    isDarkMode 
                      ? 'bg-teal-900/30 text-teal-300 border border-teal-800/50' 
                      : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;