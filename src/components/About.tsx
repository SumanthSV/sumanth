import React, {useRef} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Heart, User } from 'lucide-react';
import Timeline from './TimelineSection';
import Footer from './Footer';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user experiences'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Love what I do, do what I love'
    }
  ];

  return (
    <div id='about' ref={sectionRef}>
    <section id="about" className="py-20 px-4 relative">
  <div className="max-w-6xl mx-auto">
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
        About Me
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
        I'm a passionate Software developer with 2+ years of experience creating 
        digital solutions that bridge the gap between design and functionality. 
        I love turning complex problems into simple, beautiful designs.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
      {/* Photo Section with Floating Bubbles */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="relative">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-purple-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60, -100],
                opacity: [0.7, 0.3, 0],
                scale: [1, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/SSV.jpg"
                    alt="My Profile"
                    className="w-80 h-80 object-cover rounded-full"
                  />
                </div>
              </div>

              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400/60 to-purple-500/60 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, -200],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
        <p className="text-gray-300 leading-relaxed">
          Started as a curious student exploring the world of programming, 
          I've evolved into a versatile developer who thrives on creating 
          innovative solutions. My journey has taken me through various 
          technologies and frameworks, always with a focus on user experience 
          and clean, efficient code.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, 
          contributing to open-source projects, or sharing knowledge with 
          the developer community.
        </p>
      </motion.div>
    </div>

    {/* Feature Cards */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300 group text-center"
        >
          <feature.icon className="w-8 h-8 text-purple-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Contact Me Section */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 1 }}
      className="text-center"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        I'm always interested in new opportunities and exciting projects. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <a
        href="https://wa.me/918123113412"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="button-hover glass-effect px-8 py-4 rounded-full text-white font-semibold hover-glow transition-all duration-300 pulse-glow relative overflow-hidden group"
        >
          <span className="relative z-10">Get in touch</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-lime-500/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </a>
    </motion.div>
  </div>
</section>

  <Timeline />
  <Footer/>
</div>

  );
};

export default About;