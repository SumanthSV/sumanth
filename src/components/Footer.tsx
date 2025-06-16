import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const quickLinks = [
  //   { name: 'Home', id: 'home' },
  //   { name: 'About', id: 'about' },
  //   { name: 'Skills', id: 'skills' },
  //   { name: 'Projects', id: 'projects' },
  //   { name: 'Contact', id: 'contact' },
  // ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sumanth SV
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Software Developer passionate about creating innovative digital solutions 
              that make a difference.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/SumanthSV", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sumanth-sv-3b1507221/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sumanthsv04@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Contact Info */}
          <motion.div
            className="space-y-4 absolute right-[14rem] hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-200">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-slate-400">
                <span className="text-slate-300">Email:</span> sumanthsv04@gmail.com
              </p>
              <p className="text-slate-400">
                <span className="text-slate-300">Location:</span> Davanagere, Karnataka
              </p>
              <p className="text-slate-400">
                <span className="text-slate-300">Available for:</span> Freelance & Full-time
              </p>
            </div>
          </motion.div>

          {/* Scroll to Top Button */}
          <div className="absolute bottom-12 right-10">
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
        </div>
        </div>
        <div className="mt-6 text-center text-sm text-slate-500">
          © 2025 Sumanth SV. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;