import React, {useRef} from 'react';
import "../App.css";
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Target } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div id="home" ref={sectionRef}>
    <section  className="min-h-screen flex items-center justify-center relative px-4">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center justify-start">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Hi👋 <br />
            I'm {' '} <span className="gradient-text">Sumanth</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="fancy-underline text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Software Developer
          </motion.p>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-lg max-w-lg"
          >
            I craft elegant, user-focused digital experiences that blend design and functionality to create lasting impact.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-hover glass-effect px-8 py-4 rounded-full text-white font-semibold hover-glow transition-all duration-300"
              >
                View My Work
              </motion.button>
            </a>
            
            <a href="/Sumanth_SV.pdf" download="Sumanth_CV.pdf">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-hover border-2 border-purple-400 px-8 py-4 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Download CV
            </motion.button>
          </a>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex space-x-6 pt-4"
          >
            {[
              { icon: Github, href: 'https://github.com/SumanthSV' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sumanth-sv-3b1507221/' },
              { icon: Mail, href: 'mailto:sumanthsv04@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="glass-effect p-3 rounded-full hover-glow transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Floating Cards */}
        <motion.div
            className="hidden lg:flex justify-center items-center relative"
            variants={itemVariants}
          >
            <motion.div
              className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center relative overflow-hidden"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* Inner floating elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{
                    left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
              
              <motion.div
                className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &lt;/&gt;
              </motion.div>
            </motion.div>
          </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="glass-effect p-3 rounded-full"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>

    {/* Component Sections */}
      <Skills />
      <Projects />
      <Footer />
      {/* Uncomment these sections when implemented */}
      {/* <AchievementsSection />
      <CertificationsSection /> */}
    </div>
  );
};

export default Hero;