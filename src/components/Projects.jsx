import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, GitFork } from 'lucide-react';

const Projects = () => {
  const [ghRepos, setGhRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/ihsanmohamed/repos?sort=updated&per_page=4');
        if (res.ok) {
          const data = await res.json();
          // Filter out the main projects if they appear, or just keep them as extra cards
          setGhRepos(data.filter(repo => repo.name !== 'ocean-view'));
        }
      } catch (err) {
        console.error('Error fetching github repos:', err);
      }
    };
    fetchRepos();
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Ocean View Resort Reservation',
      description: 'A full-stack hotel reservation system designed to manage bookings, users, and billing efficiently with a 3-tier architecture.',
      tech: 'Java EE • JSP • MySQL • HTML • CSS',
      type: 'Academic Project | 2026',
      github: 'https://github.com/ihsanmohamed/ocean-view.git',
      demo: '#',
      // Using placeholder API image for demonstration
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Ceylon Drive – Car Rental',
      description: 'A modern responsive car rental web application with dynamic booking and price calculation logic.',
      tech: 'HTML • CSS • JavaScript • PHP',
      type: 'Academic Project | 2025',
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        <FolderGit2 color="var(--accent-color)" /> Featured Projects
      </h2>
      
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <div className="project-links">
                  <a href={project.demo} className="project-btn" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> View Details
                  </a>
                  <a href={project.github} className="project-btn" target="_blank" rel="noreferrer">
                    <GitFork size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {ghRepos.map((repo, index) => (
          <motion.div 
            key={repo.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
          >
             <img 
               src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800`} 
               alt={repo.name} 
               className="project-image" 
             />
            <div className="project-overlay">
              <div className="project-info">
                <h3 className="project-title">{repo.name.replace(/-/g, ' ')}</h3>
                <p className="project-tech">{repo.language || 'Code'}</p>
                <div className="project-links">
                  <a href={repo.homepage || repo.html_url} className="project-btn" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> {repo.homepage ? 'View App' : 'View Details'}
                  </a>
                  <a href={repo.html_url} className="project-btn" target="_blank" rel="noreferrer">
                    <GitFork size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
