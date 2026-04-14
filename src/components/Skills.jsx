import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development',
      icon: Code2,
      skills: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java (Java EE)', level: 80 },
        { name: 'PHP', level: 65 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'WordPress', level: 90 }
      ]
    },
    {
      title: 'Other',
      icon: Sparkles,
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Troubleshooting', level: 90 },
        { name: 'SEO Optimization', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">
        <Code2 color="var(--accent-color)" /> Tech Stack & Skills
      </h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div 
              key={category.title}
              className="glass skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3><Icon size={18} color="var(--accent-color)" /> {category.title}</h3>
              <div className="skill-list">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="skill-item">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
