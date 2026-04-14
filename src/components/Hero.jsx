import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-container hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="hero-subtitle">HELLO WORLD, I'M</p>
        <h1 className="hero-title">Mohamed Ihsan</h1>
        
        <div className="hero-type-container">
          <TypeAnimation
            sequence={[
              'Software Engineering Student',
              1000,
              'Web Developer',
              1000,
              'UI/UX Enthusiast',
              1000,
              'Tech Problem Solver',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download size={18} /> Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
