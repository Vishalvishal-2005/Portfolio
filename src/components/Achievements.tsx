import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    position: '1st Place',
    title: 'GDSC Ideathon',
    organization: 'PSG iTech',
    date: 'March 2024',
    description:
      'Won Yukta Hackathon for developing a mobile app to optimize waste management and transportation routes.',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30',
  },
  {
    position: '3rd Place',
    title: 'Hack Sprint Hackathon',
    organization: 'IamNeo, Coimbatore',
    date: '2024',
    description:
      'Built a machine learning-powered sustainability predictor using React, Spring Boot, and Linear Regression during a 40-hour hackathon.',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
  },
];

export default function Achievements() {
  return (
    <section className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Recognition</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Achievements</h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${achievement.color} p-8 rounded-2xl border ${achievement.borderColor} hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-slate-900/80 rounded-xl group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  ) : (
                    <Award className="w-8 h-8 text-cyan-400" />
                  )}
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="inline-block px-3 py-1 bg-slate-900/80 text-cyan-400 text-xs font-bold rounded-full mb-3">
                      {achievement.position}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{achievement.title}</h3>
                    <p className="text-slate-300 text-sm">
                      {achievement.organization} • {achievement.date}
                    </p>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-cyan-400 mb-2">3+</p>
                <p className="text-slate-400">Major Projects</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-cyan-400 mb-2">2</p>
                <p className="text-slate-400">Hackathon Wins</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-cyan-400 mb-2">8+</p>
                <p className="text-slate-400">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
