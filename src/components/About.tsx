import React from 'react';
import { useScrollReveal } from '../utils/animations';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Mail, Phone } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="about" 
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>About</span> Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
                <p className={`mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm an Artificial Intelligence and Data Science student at Sri Krishna College of Technology, passionate about leveraging technology to create impactful solutions. I specialize in machine learning, data analysis, and software development.
                </p>
                <p className={`mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  With a strong foundation in programming languages like Python, Java, and C++, I enjoy building web applications using React.js and Spring Boot. My experience includes developing full-stack applications, implementing machine learning models, and participating in hackathons.
                </p>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm constantly learning and exploring new technologies to enhance my skills and create innovative solutions to real-world problems.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className={isDarkMode ? 'text-teal-400' : 'text-blue-600'} size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className={isDarkMode ? 'text-teal-400' : 'text-blue-600'} size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className={`hover:underline ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className={isDarkMode ? 'text-teal-400' : 'text-blue-600'} size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className={`hover:underline ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;