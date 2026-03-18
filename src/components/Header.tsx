import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-3xl font-light text-white signature">Vishal P</div>
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('dashboards')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            Dashboards
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-cyan-400 transition-colors font-light"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
