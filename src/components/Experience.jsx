import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
        <Briefcase color="var(--accent-color)" /> Work Experience
      </h2>
      
      <motion.div 
        className="glass dashboard-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="dashboard-card-header">
          <div>
            <h3 className="role-title">IT Support Engineer</h3>
            <div className="company">Easy Baby</div>
          </div>
          <div className="duration">2025 – 2026</div>
        </div>

        <div>
          <ul className="card-list">
            <li>Managed WordPress website (products, SEO, updates)</li>
            <li>Maintained 100% uptime</li>
            <li>Fixed technical issues & improved performance</li>
            <li>Optimized SEO (meta tags, speed improvements)</li>
            <li>Handled full content lifecycle</li>
          </ul>
        </div>

        <div className="badges" style={{ marginTop: '0.5rem' }}>
          <span className="badge">WordPress</span>
          <span className="badge">SEO</span>
          <span className="badge">Troubleshooting</span>
          <span className="badge">Maintenance</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
