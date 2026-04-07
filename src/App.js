import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={process.env.PUBLIC_URL + '/bg.mp4'} type="video/mp4" />
      </video>
      <div className="bg-overlay" />
      <div
        className="scroll-indicator"
        style={{ width: `${(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title">~/portfolio — bash</span>
        </div>
        <div className="terminal-body">
          <Header />
          <main>
            <AboutMe />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
