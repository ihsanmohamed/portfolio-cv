import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './components.css'; // Add our specific component styling

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme logic
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
