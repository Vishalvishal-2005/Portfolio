import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-cyan-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a motivated Artificial Intelligence and Data Science undergraduate with strong hands-on experience in data analytics, AI-driven applications, and software development. I enjoy transforming raw data into meaningful insights and building intelligent systems that solve real-world problems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My interests lie in agentic AI, multi-agent systems, data analytics, dashboards, and machine learning. I actively work on projects that combine analytics with intelligent automation. I'm passionate about leveraging technology to create impactful and efficient systems.
            </p>
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:vishal20050413@gmail.com" className="hover:text-cyan-400 transition-colors">
                  vishal20050413@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91 8148374326</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-xl mb-2">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-cyan-400 font-medium">
                        B.Tech in Artificial Intelligence and Data Science
                      </p>
                      <p className="text-slate-400 text-sm">
                        Sri Krishna College of Technology
                      </p>
                      <p className="text-slate-500 text-sm">Oct 2022 - 2026</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-medium">Higher Secondary Education</p>
                      <p className="text-slate-400 text-sm">M.L.W.A Hr. Sec. School</p>
                      <p className="text-slate-500 text-sm">89.66% - Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-white font-semibold text-xl mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['Agentic AI', 'Data Analytics', 'Machine Learning', 'Problem Solving', 'Fitness'].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
