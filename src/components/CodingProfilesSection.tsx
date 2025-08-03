import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Target, Zap } from 'lucide-react';

const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      name: 'GeeksforGeeks',
      username: '@sumant6um1',
      description: 'Solved 400+ problems across various topics',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-green-400 to-emerald-600',
      bgGradient: 'from-green-400/10 to-emerald-600/10',
      stats: '450+ Problems',
      url: 'https://www.geeksforgeeks.org/user/sumant6um1/'
    },
    {
      name: 'LeetCode',
      username: '@ssv04',
      description: 'Active problem solver with consistent streak',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-orange-400 to-red-600',
      bgGradient: 'from-orange-400/10 to-red-600/10',
      stats: '450+ Problems',
      url: 'https://leetcode.com/u/SSV04/'
    },
    {
      name: 'HackerRank',
      username: '@sumanthsv04',
      description: 'Certified in multiple programming domains',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-400/10 to-blue-600/10',
      stats: '5 Star Rating',
      url: 'https://www.hackerrank.com/profile/sumanthsv04'
    }
  ];

  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-1/3 w-96 h-96 bg-gradient-to-r from-orange-400/5 to-red-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-600/20 mb-6">
            <Zap className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Coding Profiles
            </h2>
          </div>
          <p className="text-xl text-slate-400">My competitive programming journey</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => window.open(profile.url, '_blank')}
            >
              {/* Glowing Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-[2px]`}>
                <div className="w-full h-full bg-slate-900 rounded-2xl"></div>
              </div>

              {/* Card Content */}
              <div className={`relative bg-gradient-to-br ${profile.bgGradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full group-hover:border-transparent transition-all duration-300`}>
                {/* Floating Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${profile.gradient} text-white mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {profile.icon}
                </motion.div>

                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${profile.gradient} bg-clip-text text-transparent`}>
                  {profile.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4">{profile.username}</p>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${profile.gradient} text-white rounded-full text-sm font-semibold`}>
                  {profile.stats}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-slate-400 text-sm">Problems Solved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-slate-400 text-sm">Active Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
              5★
            </div>
            <div className="text-slate-400 text-sm">Max Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-slate-400 text-sm">Days Streak</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;