import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, X, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Attendance Payroll Adjustment System',
      shortDescription: 'Automated attendance and payroll management',
      fullDescription: 'Built a full-stack system managing 1000+ employee records with secure role-based authentication and real-time payroll adjustments. Improved UI responsiveness by 40% and ensured seamless RESTful API integration for efficient data handling. ',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Express.js','Axios', 'Node.js', 'MangoDB', 'Tailwind CSS', 'JWT','Nodemailer'],
      github: 'https://github.com/SumanthSV/AMS',
      live: 'https://ams-sumanth-svs-projects.vercel.app/',
      duration: '1 months',
      team: 'Personal Project',
      features: ['Role-based Authentication', 'Real-time Payroll Adjustments', 'Responsive UI', 'RESTful API Integration', 'Employee Management', 'Attendance Tracking', 'Email Notifications','Leave Management','Shift Scheduling', 'Performance Analytics']
    },
    {
      id: 2,
      title: 'Data AI - Chemist',
      shortDescription: 'AI-powered spreadsheet cleanup and rule configurator',
      fullDescription: 'Built a full-stack AI-powered tool that helps non-technical users upload, clean, and validate messy CSV/XLSX files, define allocation rules using a user-friendly UI or natural language, and export clean datasets with rules.json and priorities.json. Integrated OpenAI for smart rule generation and auto-corrections. Implemented editable tables, validations, and rule builder with live JSON preview.',
      image: '/AI_chemist.png',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Zod', 'OpenAI API', 'TanStack Table', 'Shadcn UI'],
      github: 'https://github.com/SumanthSV/AI_Chemist',
      live: 'https://ai-chemist-gray.vercel.app/',
      duration: '1 Week',
      team: 'Personal Project',
      features: ['AI-Powered Rule Builder','Natural Language to JSON Conversion','Multi-File CSV/XLSX Upload','Editable Grid with Inline Validation','rules.json & priorities.json Export','Validation Summary Panel','Mobile Responsive']
    },
    {
      id: 3,
      title: 'Smart - Tasker',
      shortDescription: 'AI-powered Task Summarizer',
      fullDescription: 'This AI-based web application automatically summarizes long or complex Tasks lists into concise, actionable items using the AI. It enhances productivity by simplifying task overviews and reducing cognitive load. Built with a sleek frontend and seamless AI integration, it offers a smarter way to manage daily tasks.',
      image: '/smarttasker.jpg',
      technologies: ['Next.js', 'OpenAI API', 'Convex','Tailwind CSS', 'TypeScript','jspdf','sonner'],
      github: 'https://github.com/SumanthSV/AI_Todo_summarizer',
      live: 'https://ai-todo-summarizer.vercel.app/',
      duration: '1 week',
      team: 'Personal Project',
      features: ['AI Summarization', 'Task Management', 'User Authentication', 'Responsive Design', 'PDF Export', 'Real-time Updates', 'Intuitive UI']
    },
    {
      id: 4,
      title: 'Sukalpa-24',
      shortDescription: 'Sukalpa-24 event Page',
      fullDescription: 'Built a responsive website for managing Sukalpa 24 event registrations and showcasing fest details.Handled 1000+ users with event listings, registration forms, and real-time updates.Enhanced user experience and streamlined coordination for organizers and attendees.',
      image: './Sukalpa.png',
      technologies: ['React', 'ThailwindCSS', 'JavaScript', 'HTML'],
      github: 'https://github.com/Sukalpa24/Sukalpa-24',
      live: 'https://sukalpa-24.vercel.app/',
      duration: '1 Week',
      team: '2 developers',
      features: ['Admin Dashboard', 'Real-time Updates', 'Mobile Responsive','Event Registration', 'Event Listings']
    },
    {
      id: 5,
      title: 'Capstone: Online retail store',
      shortDescription: 'Full-stack e-commerce platform with admin panel',
      fullDescription: 'Built a full-stack e-commerce platform with product listings, user authentication (JWT), and admin dashboard.Implemented secure login, role-based access, and real-time order management for seamless transactions.Optimized backend queries and UI performance to support 1000+ products and active users.',
      image: 'https://retail-merchandiser.com/wp-content/uploads/sites/8/2023/12/online-shopping-image-800x445.jpeg',
      technologies: ['React.js','Java','Tailwind CSS','Axios','Spring Boot', 'MySQL', 'JWT', 'Maven','Hibernate'],
      github: 'https://github.com/SumanthSV/Capstone',
      live: 'https://capstone-two-xi.vercel.app/',
      duration: '1 months',
      team: '3 developers',
      features: ['Product Listings', 'User Authentication', 'Admin Dashboard', 'Order Management', 'Role-based Access', 'Real-time Updates', 'Secure Transactions']
    },
    {
      id: 6,
      title: 'Student CO’s and PO’s management System',
      shortDescription: 'Student CO-PO mapping and evaluation system',
      fullDescription: 'Developed a robust web-based platform using HTML, CSS, MySQL, and PHP that automated academic outcome tracking; eliminated 80% of manual errors while enhancing data accuracy for over 500 student records.',
      image: 'https://www.naceweb.org/images/default-source/2020/understanding-cooperative-education-xlarge.jpg',
      technologies: ['HTML', 'CSS','PHP', 'MySQL'],
      github: 'https://github.com/SumanthSV/Co-s-manager',
      live: 'https://github.com/SumanthSV/Co-s-manager',
      duration: '1 month',
      team: '3 developers',
      features: ['CO-PO Mapping', 'Automated Evaluation', 'Data Analytics', 'User Management', 'Performance Tracking', 'Custom Reporting']
    },
    // {
    //   id: 6,
    //   title: 'AI Content Generator',
    //   shortDescription: 'AI-powered content creation tool',
    //   fullDescription: 'An innovative AI-powered content generation platform that helps users create high-quality content for various purposes. Features include customizable templates, multiple content types, SEO optimization suggestions, and integration with popular CMS platforms.',
    //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    //   technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'Prisma', 'Vercel', 'Stripe'],
    //   github: '#',
    //   live: '#',
    //   duration: '2 months',
    //   team: '2 developers',
    //   features: ['AI Generation', 'Custom Templates', 'SEO Optimization', 'CMS Integration']
    // }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 10, opacity: 1 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.2, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="project-card glass-effect rounded-2xl overflow-hidden group transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div 
                  className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <motion.a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass-effect p-2 rounded-full hover-glow"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass-effect p-2 rounded-full hover-glow"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3 
                  className="text-white font-semibold text-xl mb-3 group-hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + techIndex * 0.05 + 0.5
                      }}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="button-hover w-full glass-effect py-3 px-4 rounded-lg text-white text-sm font-medium hover-glow transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && selectedProjectData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 glass-effect p-2 rounded-full hover-glow transition-all duration-300"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 gradient-text">
                    {selectedProjectData.title}
                  </h3>
                  
                  <div className="flex items-center space-x-6 mb-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{selectedProjectData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{selectedProjectData.team}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedProjectData.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProjectData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProjectData.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target='_blank'
                      className="button-hover flex-1 glass-effect py-3 px-6 rounded-lg text-white font-medium hover-glow transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProjectData.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target='_blank'
                      className="button-hover flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 py-3 px-6 rounded-lg text-white font-medium hover-glow transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;