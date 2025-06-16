import React, { useEffect, useRef } from 'react';
import CodingProfiles from './CodingProfilesSection';
import Footer from './Footer';
import { Award, Trophy, Star, Medal, Crown, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: 'Sukalpa-24 Coding Competation Winner',
      description: 'First place winner at State level Coding Competation 2023 for problem Solving.',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-500/10 via-pink-500/10 to-rose-500/10',
      year: '2023',
      category: 'Competition'
    },
    {
      title: 'Ignigtron-24 Tech Competation Winner',
      description: 'First place winner at State level Tech Competation 2024.',
      icon: <Crown className="w-8 h-8" />,
      gradient: 'from-green-500 via-blue-500 to-purple-500',
      bgGradient: 'from-green-500/10 via-blue-500/10 to-purple-500/10',
      year: '2024',
      category: 'Competition'
    },
    {
      title: 'Hacker Rank',
      description: '5⭐ ratings in hackerrank coding plotform in Java and Problem Solving.',
      icon: <Star className="w-8 h-8" />,
      gradient: 'from-emerald-700 via-teal-500 to-cyan-700',
      bgGradient: 'from-emerald-500/10 via-teal-700/10 to-cyan-700/10',
      year: '2023',
      category: 'Consistency'
    },
    {
      title: 'GeeksForGeeks',
      description: 'Awarded goodies for exceptional performance in problem-solving challenges.',
      icon: <Medal className="w-8 h-8" />,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgGradient: 'from-indigo-500/10 via-purple-500/10 to-pink-500/10',
      year: '2024',
      category: 'Technical'
    },
    {
      title: 'Event Lead | Sukalpa-24  ',
      description: 'Spearheaded the planning and execution of a state-level technical fest, coordinating multiple events with over 500 participants.',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      bgGradient: 'from-cyan-500/10 via-blue-500/10 to-indigo-500/10',
      year: '2024',
      category: 'Leadership'
    },
    {
      title: 'Forum Representative',
      description: 'Represented the forum for 2023-2024, facilitating member engagement and organizing workshops.',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      bgGradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
      year: '2023-2024',
      category: 'Mentorship'
    }
  ];

  return (
    <div ref={sectionRef} id='achivements'>
    <section  className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r mb-6">
            <Award className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-200 to-indigo-500 bg-clip-text text-transparent">
              Key Achievements
            </h2>
          </div>
          <p className="text-xl text-slate-400">Milestones that define my journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-50`}></div>
              
              {/* Border gradient on hover */}
              <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="w-full h-full bg-slate-800/90 backdrop-blur-sm rounded-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/50 text-slate-300">
                      {achievement.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.gradient} text-white`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                    {achievement.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <div className={`w-full h-1 rounded-full bg-gradient-to-r ${achievement.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CodingProfiles/>
    <Footer />
    </div>
  );
};

export default Achievements;