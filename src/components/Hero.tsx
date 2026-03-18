import { Github, Linkedin, Code2, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-xl font-light">Hello, I'm</p>
              <h1 className="text-6xl md:text-8xl font-bold text-white">
                VISHAL P
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-cyan-400"></div>
                <p className="text-2xl text-slate-300 font-light">
                  AI & Data Science | Agentic AI | Data Analytics
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Motivated AI and Data Science undergraduate with strong hands-on experience in data analytics, AI-driven applications, and software development. Passionate about transforming data into meaningful insights and building intelligent systems that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Vishalvishal-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/vishal-p-5026a8312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://leetcode.com/u/VISHAL_P2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Code2 className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/727822t4465?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 group"
              >
                <Terminal className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full w-96 h-96 -top-12 -left-12"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Vishal P"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">4+</p>
                  <p className="text-slate-400 text-sm">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">2</p>
                  <p className="text-slate-400 text-sm">Awards</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">8+</p>
                  <p className="text-slate-400 text-sm">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
