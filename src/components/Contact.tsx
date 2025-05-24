import React from 'react';
import { useScrollReveal } from '../utils/animations';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="contact" 
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
              <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>Get In</span> Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1 space-y-6">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-teal-400' : 'bg-blue-50 text-blue-600'
                      }`}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a 
                          href={`mailto:${personalInfo.email}`}
                          className={`text-sm hover:underline ${
                            isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-teal-400' : 'bg-blue-50 text-blue-600'
                      }`}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a 
                          href={`tel:${personalInfo.phone}`}
                          className={`text-sm hover:underline ${
                            isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-teal-400' : 'bg-blue-50 text-blue-600'
                      }`}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-medium mb-4">Social Profiles</h4>
                    <div className="flex space-x-3">
                      <a 
                        href={personalInfo.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${
                          isDarkMode 
                            ? 'bg-gray-700 text-white hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } transition-colors`}
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={personalInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${
                          isDarkMode 
                            ? 'bg-gray-700 text-white hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } transition-colors`}
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={personalInfo.leetcode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${
                          isDarkMode 
                            ? 'bg-gray-700 text-white hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } transition-colors`}
                        aria-label="LeetCode"
                      >
                        <Code size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label 
                          htmlFor="name" 
                          className={`block text-sm font-medium mb-1 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          className={`w-full px-4 py-2 rounded-lg border ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                          } focus:outline-none focus:ring-1 ${
                            isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-blue-500'
                          }`}
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="email" 
                          className={`block text-sm font-medium mb-1 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          Your Email
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          className={`w-full px-4 py-2 rounded-lg border ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                          } focus:outline-none focus:ring-1 ${
                            isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-blue-500'
                          }`}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="subject" 
                        className={`block text-sm font-medium mb-1 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Subject
                      </label>
                      <input 
                        type="text" 
                        id="subject" 
                        className={`w-full px-4 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                        } focus:outline-none focus:ring-1 ${
                          isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-blue-500'
                        }`}
                        placeholder="Enter subject"
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-medium mb-1 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                        } focus:outline-none focus:ring-1 ${
                          isDarkMode ? 'focus:ring-teal-400' : 'focus:ring-blue-500'
                        }`}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="button" 
                      className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                        isDarkMode 
                          ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      Send Message <Send size={16} className="ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;