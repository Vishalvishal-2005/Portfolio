import React, { useState } from 'react';
import { useScrollReveal } from '../utils/animations';
import { projects } from '../data/portfolioData';
import { ExternalLink, Calendar } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="projects" 
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>Featured</span> Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${
                      isDarkMode 
                        ? 'bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent' 
                        : 'bg-gradient-to-t from-white via-white/50 to-transparent'
                    }`}></div>
                  </div>

                  {/* Project Type Badge */}
                  <div 
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full z-10 ${
                      isDarkMode ? 'bg-gray-700 text-teal-400' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {project.type}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
                    </div>
                    
                    <div className="flex items-center mb-4 text-sm">
                      <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={`ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {project.date}
                      </span>
                    </div>
                    
                    <p 
                      className={`mb-4 line-clamp-3 text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-2 py-1 text-xs rounded-md ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${
                        isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      View Project <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;