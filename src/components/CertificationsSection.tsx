import React, { useEffect, useRef } from 'react';
import { GraduationCap, Shield, Award, Star, CheckCircle, Zap } from 'lucide-react';

const Certifications: React.FC = () => {
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

  const certifications = [
    {
      title: 'AWS Solutions Architect',
      provider: 'Amazon Web Services',
      level: 'Professional',
      year: '2024',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      verified: true
    },
    {
      title: 'Google Cloud Professional',
      provider: 'Google Cloud',
      level: 'Professional',
      year: '2023',
      icon: <Star className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      verified: true
    },
    {
      title: 'MongoDB Developer',
      provider: 'MongoDB University',
      level: 'Associate',
      year: '2023',
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      verified: true
    },
    {
      title: 'React Developer Certification',
      provider: 'Meta',
      level: 'Professional',
      year: '2023',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-600/10 to-purple-600/10',
      verified: true
    },
    {
      title: 'Node.js Certified Developer',
      provider: 'OpenJS Foundation',
      level: 'Professional',
      year: '2022',
      icon: <CheckCircle className="w-8 h-8" />,
      gradient: 'from-green-600 to-teal-600',
      bgGradient: 'from-green-600/10 to-teal-600/10',
      verified: true
    },
    {
      title: 'Kubernetes Administrator',
      provider: 'Cloud Native Computing Foundation',
      level: 'Certified',
      year: '2024',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      verified: true
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional': return 'from-purple-500 to-indigo-500';
      case 'Associate': return 'from-blue-500 to-cyan-500';
      case 'Certified': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-600/20 mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-50 to-indigo-200 bg-clip-text text-transparent">
              Professional Certifications
            </h2>
          </div>
          <p className="text-xl text-slate-400">Validated expertise in cutting-edge technologies</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-50`}></div>
              
              {/* Border gradient on hover */}
              <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="w-full h-full bg-slate-800/90 backdrop-blur-sm rounded-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center h-full flex flex-col">
                {/* Icon and verification */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.gradient} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {cert.icon}
                  </div>
                  {cert.verified && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{cert.provider}</p>
                  
                  {/* Level and year */}
                  <div className="flex flex-col space-y-2">
                    <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r ${getLevelColor(cert.level)} text-white`}>
                      {cert.level}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">
                      Earned in {cert.year}
                    </span>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${cert.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <div className="text-slate-400 text-sm">Active Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-slate-400 text-sm">Verification Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-slate-400 text-sm">Cloud Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-2">
              2024
            </div>
            <div className="text-slate-400 text-sm">Latest Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;