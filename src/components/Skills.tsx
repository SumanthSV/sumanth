import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Globe, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'i18next', 'JavaScript','Zustand','Framer Motion', 'Responsive Design'],
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-400/10 to-blue-600/10'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Java', 'Node.js', 'Spring Boot', 'Express.js', 'REST APIs', 'Microservices','Firebase', 'Google Cloud','LLM orchestration'],
      gradient: 'from-green-400 to-emerald-600',
      bgGradient: 'from-green-400/10 to-emerald-600/10'
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['SQL', 'MongoDB', 'Postman', 'Git', 'Github', 'Eclipse','Firebase Tools','VS Code','PWA','GCP'],
      gradient: 'from-purple-400 to-pink-600',
      bgGradient: 'from-purple-400/10 to-pink-600/10'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-purple-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -75, 0],
          }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: 150, y: -75 }}
          transition={{
            duration: 0.8,
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
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Skills & Technologies

          </h2>
          <p className="text-xl text-slate-400">Here are the technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group"
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group-hover:scale-105`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.gradient} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded-lg text-center text-slate-300 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 hover:text-white border border-slate-700/30 hover:border-cyan-400/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
             </motion.div>
          ))}
        </div>

        {/* Horizontal Scrolling Skills Showcase */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex space-x-6 py-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...skillCategories.flatMap(cat => cat.skills), ...skillCategories.flatMap(cat => cat.skills)].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-full border border-slate-600/50 text-slate-300 font-medium whitespace-nowrap hover:border-cyan-400/50 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;