import { Briefcase, BarChart3, Code } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Professional Experience</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Internship & Experience</h2>
          <div className="h-1 w-24 bg-cyan-400"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 md:grid md:grid-cols-3 overflow-hidden">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">Data Analytics Intern</h3>
                  <p className="text-cyan-400 font-medium">Ether Services, Coimbatore</p>
                  <p className="text-slate-400 text-sm">May 2025 – Jun 2025 (Onsite)</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Conducted exploratory data analysis on real-world datasets including Netflix Movies & TV Shows and HR Attrition data. Analyzed 10,000+ records to identify trends and business insights. Preprocessed data using Python (missing values, encoding, scaling) and built 3+ interactive Power BI dashboards for data visualization and decision support.
              </p>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm">Key Responsibilities:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    'Performed EDA on Netflix and HR datasets',
                    'Analyzed 10,000+ records for trends',
                    'Data preprocessing and feature engineering',
                    'Built 3+ interactive Power BI dashboards',
                    'Improved clarity of attrition drivers',
                  ].map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {['Python', 'Power BI', 'Data Analysis', 'Excel', 'Visualization'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-slate-800 p-8 flex items-center justify-center mt-6 md:mt-0 rounded-xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-slate-400 text-sm">Industry Internship</p>
                <p className="text-cyan-400 font-semibold text-xs mt-2">Real-World Experience</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-cyan-400" />
              Additional Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-3">Google 5-Day Agents Intensive</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Completed intensive training on building multi-agent AI systems with Gemini 2.0 Flash and Google ADK. Developed Task Manager Agent with real-world applications.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-3">Hackathon & Competition Experience</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Participated in multiple hackathons including Hack Sprint, GDSC Ideathon, and other competitions. Won awards for innovative solutions in AI and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
