import { Code, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'Dart'],
  },
  {
    title: 'Web & Frameworks',
    icon: Database,
    skills: ['React.js', 'Spring Boot', 'FastAPI', 'Node.js', 'HTML', 'CSS'],
  },
  {
    title: 'Data & ML',
    icon: Brain,
    skills: ['Machine Learning', 'EDA', 'Data Visualization', 'Power BI', 'Pandas', 'SHAP', 'Grad-CAM'],
  },
  {
    title: 'AI & Advanced',
    icon: Wrench,
    skills: ['Agentic AI', 'Multi-Agent Systems', 'Google ADK', 'Gemini 2.0 Flash', 'Deep Learning', 'Explainable AI'],
  },
  {
    title: 'Tools & Concepts',
    icon: Code,
    skills: ['Git', 'GitHub', 'MySQL', 'MongoDB', 'Linux', 'DSA', 'OOP', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <category.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'AI Agents Intensive Course (5 Days) - Kaggle',
              'Data Visualization Techniques - Infosys',
              'Machine Learning On-Ramp - MathWorks',
              'Facial Recognition - Udemy',
              'Excel Tools - Infosys Springboard',
              'Java Programming',
              'Command Line in Linux - Coursera',
              'MongoDB Basics',
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-slate-300 text-sm bg-slate-900/50 p-3 rounded-lg"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
