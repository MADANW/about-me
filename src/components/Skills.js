import React from 'react';
import './Skills.css';
import Marquee from './Marquee';

const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "C++",
    "C",
    "CSS",
    "HTML",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "VSCode",
    "PyCharm",
    "Node.js",
    "React",
    "WSL",
    "Linux",
    "Cursor",
    "Azure",
    "TensorFlow"
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <Marquee className="skills-marquee" pauseOnHover repeat={4}>
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </Marquee>
        <Marquee className="skills-marquee" pauseOnHover reverse repeat={4}>
          {[...skills].reverse().map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills; 