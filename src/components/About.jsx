import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <User color="var(--accent-color)" /> About Me
      </h2>
      
      <motion.div 
        className="glass dashboard-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          A highly motivated Software Engineering student with hands-on experience in web development, 
          IT support, and modern UI design. Skilled in building responsive, scalable, and user-focused 
          applications using HTML, CSS, JavaScript, Java EE, PHP, and MySQL.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '1rem' }}>
          Experienced in WordPress management, system troubleshooting, and performance optimization, 
          ensuring reliable and efficient digital platforms.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '1rem' }}>
          Passionate about creating premium user experiences, clean architectures, and real-world solutions, 
          with a strong interest in full-stack development and modern web technologies.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '500', lineHeight: '1.8', marginTop: '1.5rem' }}>
          Currently seeking an opportunity as a Software Engineering / Web Development Intern to contribute 
          technical expertise and grow within a dynamic development environment.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
