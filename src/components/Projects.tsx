import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Smart Personal Task Manager Agent',
    description:
      'Built during Google 5-Day Agents Intensive Course. Developed an AI-powered multi-agent productivity system that can plan tasks, manage goals, generate reports, and analyze productivity using natural language interaction. Designed multiple specialized agents with inter-agent communication protocol.',
    tech: ['Python', 'Google ADK', 'Gemini 2.0 Flash', 'FastAPI', 'Multi-Agent'],
    github: 'https://github.com/Vishalvishal-2005/Task_Scheduler',
    demo: null,
    featured: true,
    details: 'Built 5+ custom agent tools • Processed 100+ task inputs • Added observability',
  },
  {
    title: 'FUSE XAI – Multimodal Alzheimer\'s Detection',
    description:
      'Designed a multimodal AI system integrating image, speech, and text data for early-stage Alzheimer\'s detection. Implemented Explainable AI using SHAP & Grad-CAM to improve transparency and trust in predictions.',
    tech: ['Python', 'Deep Learning', 'SHAP', 'Grad-CAM', 'Multimodal AI'],
    github: 'https://github.com/Vishalvishal-2005/MultimodalAI_for_AlzheimerPrediction',
    demo: null,
    featured: true,
    details: 'Integrated 3 data modalities • Explainable predictions',
  },
  {
    title: 'Sustainability Predictive Model',
    description:
      'Built during a 40-hour hackathon using machine learning to forecast company sustainability metrics. Applied Linear Regression on 5,000+ historical records with interactive visualizations.',
    tech: ['Python', 'Machine Learning', 'Matplotlib', 'Data Analysis'],
    github: 'https://github.com/Vishalvishal-2005/Sustainability-PredictionApp',
    demo: 'https://novapredicts.netlify.app/ui',
    featured: true,
  },
  {
    title: 'Medical Equipment Failure Prediction System',
    description:
      'Developed an AI-powered predictive maintenance system to identify potential failures in medical equipment using machine learning, enabling proactive servicing and reducing downtime in healthcare environments.',
    tech: ['React.js', 'FastAPI', 'MongoDB', 'Random Forest', 'Python'],
    github: 'https://github.com/Vishalvishal-2005/failurePrediction_backend',
    demo: null,
    featured: true,
    details: 'Predicted equipment failures • Built FastAPI backend • Real-time monitoring UI',
  },
  {
    title: 'Hall Booking Management System',
    description:
      'Developed a full-stack web application to streamline hall booking operations with secure user authentication and real-time availability tracking. The system enables users to efficiently reserve halls, manage bookings, and interact with an AI-powered chatbot for instant query resolution.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Dialogflow'],
    github: 'https://github.com/Vishalvishal-2005/HallBooking-Management',
    demo: null,
    featured: false,
    details: 'Automated booking queries • Real-time availability tracking',
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const displayedFeaturedProjects = showMore ? featuredProjects : featuredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-cyan-400"></div>
        </div>

        <div className="space-y-8">
          {displayedFeaturedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 md:grid md:grid-cols-3"
            >
              <div className="md:col-span-2 p-8">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">
                    FEATURED PROJECT
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
                  {project.details && (
                    <p className="text-cyan-400/80 text-sm pt-2">{project.details}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-slate-800 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-slate-900/50 border border-cyan-500/20 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-cyan-400" />
                    </div>
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {featuredProjects.length > 3 && !showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl text-cyan-400 font-semibold flex items-center justify-center gap-2 transition-all duration-300 group"
            >
              <span>View More Projects</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {showMore && otherProjects.length > 0 && (
            <div className="mt-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Other Projects</h3>
                <div className="h-1 w-16 bg-cyan-400"></div>
              </div>
              <div className="space-y-6">
                {otherProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-base leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
