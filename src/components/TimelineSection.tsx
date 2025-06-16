import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Timeline: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Varcons Technologies',
      duration: 'Feb 2025 - May 2025',
      location: 'Bangalore, India',
      responsibilities: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Implemented RESTful APIs and database optimization techniques'
      ]
    },
    {
      title: 'Web Developer - Sukalpa-24',
      company: 'GMIT',
      duration: '2024',
      location: 'Davanagere, Karantaka',
      responsibilities: [
        'Built user interfaces using React and modern CSS frameworks',
        'Participated in code reviews and gain knowledge of best practices',
        'Contributed to improving application performance and user experience'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'GM institute of Technology',
      duration: '2021 - 2025',
      highlight: 'Information Science & Engineering, CGPA: 9.17/10',
      location: 'Davanagere, Karnataka'
    },
    {
      degree: 'Pre-University (12th)',
      institution: 'Jain PU College',
      duration: '2019 - 2021',
      highlight: 'Physics, Chemistry, Mathematics - 97%',
      location: 'Davanagere, Karnataka'
    },
    {
      degree: 'High School (10th)',
      institution: 'PNHGK High School',
      duration: '2016 - 2019',
      highlight: 'Science Stream - 98%',
      location: 'Davanagere, Karnataka'
    },
    // {
    //   degree: 'Primary School',
    //   institution: 'Little Angels School',
    //   duration: '2010 - 2015',
    //   highlight: 'Academic Excellence Award',
    //   location: 'Karnataka, India'
    // }
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-purple-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-xl text-slate-400">Experience and Education</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-200">Experience</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-16 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                    <h4 className="text-xl font-semibold text-slate-200 mb-2">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-cyan-400 mb-4 gap-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{exp.location}</p>
                    <ul className="text-slate-300 space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          <span className="text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8 relative">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-200">Education</h3>
              
              {/* Floating Graduation Cap */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-600"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="relative mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-16 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10">
                    <h4 className="text-xl font-semibold text-slate-200 mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-purple-400 mb-4 gap-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{edu.institution}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{edu.location}</p>
                    <p className="text-slate-300 text-sm font-medium">{edu.highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;