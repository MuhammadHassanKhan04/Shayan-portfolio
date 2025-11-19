import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-brand-900 dark:text-white transition-colors">
            SF<span className="text-brand-500">.</span>
          </span>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#about" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a href="#contact" className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
        <div className="container mx-auto px-4">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            Designed & Built with React & Tailwind for Shayan Finyas
          </p>
        </div>
      </footer>

      {/* Floating AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default App;