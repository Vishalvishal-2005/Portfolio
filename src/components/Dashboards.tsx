import { BarChart3, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

const dashboards = [
  {
    id: 'student-analytics',
    title: 'Student Analytics Dashboard | Power BI',
    description:
      'Designed an interactive dashboard to analyze student enrollment, course popularity, and revenue trends. Key insights covered: Total fees collected & student count, Course-wise revenue distribution, Monthly enrollment trends, Age group analysis, and Certificate issuance tracking. This dashboard helps education institutes make data-driven decisions around course demand and revenue planning.',
    tech: ['Power BI', 'Excel (Data Cleaning & Modeling)'],
    icon: BarChart3,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    images: [
      {
        url: '/StudentAnalytics_DashBoard.png',
        alt: 'Student Analytics Dashboard',
      },
    ],
  },
  {
    id: 'hr-attrition',
    title: 'HR Analytics Dashboard – Data Visualization Project',
    description:
      'Created this HR Analytics Dashboard to analyze: Employee Attrition, Attrition Rate by Age & Gender, Department-wise Insights, and Job Satisfaction Trends. This project helped in understanding how data-driven insights can support HR decision-making.',
    tech: ['Power BI', 'Excel (Data Cleaning)'],
    icon: TrendingUp,
    color: 'from-green-500/20 to-cyan-500/20',
    borderColor: 'border-green-500/30',
    images: [
      {
        url: '/HRAnalytics_Dashboard.png',
        alt: 'HR Analytics Dashboard',
      },
    ],
  },
];

export default function Dashboards() {
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selected = dashboards.find(d => d.id === selectedDashboard);

  return (
    <section id="dashboards" className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Data-Driven Insights</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Dashboards & Case Studies</h2>
          <div className="h-1 w-24 bg-cyan-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {dashboards.map((dashboard) => {
            const Icon = dashboard.icon;
            return (
              <button
                key={dashboard.id}
                onClick={() => {
                  setSelectedDashboard(dashboard.id);
                  setCurrentImageIndex(0);
                }}
                className={`bg-gradient-to-br ${dashboard.color} p-8 rounded-2xl border ${dashboard.borderColor} hover:scale-105 transition-all duration-300 group text-left`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-slate-900/80 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {dashboard.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">{dashboard.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dashboard.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-600/30 text-cyan-400 text-sm font-semibold">
                  Click to View Case Study
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedDashboard && selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 flex items-center justify-between p-6">
              <h2 className="text-2xl font-bold text-white">{selected.title}</h2>
              <button
                onClick={() => setSelectedDashboard(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-400">Overview</h3>
                <p className="text-slate-300 leading-relaxed">{selected.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-400">Case Study Images</h3>
                <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <img
                    src={selected.images[currentImageIndex].url}
                    alt={selected.images[currentImageIndex].alt}
                    className="w-full h-96 object-cover"
                  />
                  {selected.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold">
                      {currentImageIndex + 1} / {selected.images.length}
                    </div>
                  )}
                </div>

                {selected.images.length > 1 && (
                  <div className="flex gap-4 justify-center pt-4">
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length)}
                      className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selected.images.length)}
                      className="px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-400 rounded-lg transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-400">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-lg border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
