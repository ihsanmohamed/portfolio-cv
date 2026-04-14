import { useState } from 'react';
import { Home, User, Briefcase, FolderGit2, Code2, Mail, Moon, Sun, Menu, X } from 'lucide-react';

const Sidebar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveMenu(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <Code2 color="var(--accent-color)" size={28} />
          <span>Ihsan.</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <Icon size={20} />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
