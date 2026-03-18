import { Mail, Phone, MapPin, Github, Linkedin, Code2, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's work together</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to
                contribute to innovative solutions in AI and Data Science.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:vishal20050413@gmail.com"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">
                    vishal20050413@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-white">+91 8148374326</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">Madurai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/Vishalvishal-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-400 transition-colors">
                    GitHub
                  </span>
                </div>
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  →
                </span>
              </a>

              <a
                href="https://linkedin.com/in/vishal-p-5026a8312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </span>
                </div>
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  →
                </span>
              </a>

              <a
                href="https://leetcode.com/u/VISHAL_P2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-400 transition-colors">
                    LeetCode
                  </span>
                </div>
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  →
                </span>
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/727822t4465?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-cyan-400" />
                  <span className="text-white group-hover:text-cyan-400 transition-colors">
                    GeeksforGeeks
                  </span>
                </div>
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  →
                </span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
              <p className="text-slate-300 text-center">
                Open to opportunities in <span className="text-cyan-400 font-semibold">Agentic AI</span>,{' '}
                <span className="text-cyan-400 font-semibold">Data Analytics</span>,{' '}
                <span className="text-cyan-400 font-semibold">Machine Learning</span>, and{' '}
                <span className="text-cyan-400 font-semibold">Data Science</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
          <p className="text-slate-500">
            © 2025 Vishal P. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
