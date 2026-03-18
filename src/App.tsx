import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Header from './components/Header';
import Dashboards from './components/Dashboards';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Dashboards />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
