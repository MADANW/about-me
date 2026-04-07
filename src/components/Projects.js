import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "MuhsinAI",
      description: "A web-based application that provides Muslims with AI-driven chat support, personalized planning, and prayer time integration.",
      imageUrl: "/muhsinai.png",
      repoUrl: "https://github.com/MADANW/MuhsinAI",
      tags: ["React", "Python", "LLM", "Flask"],
      featured: true
    },
    {
      title: "Algorithmic Trading Bot",
      description: "An algorithmic trading bot that uses machine learning to analyze market patterns and make trading decisions.",
      imageUrl: "/dashboard.png",
      repoUrl: "https://github.com/MADANW/stock-predictor",
      tags: ["Python", "TensorFlow", "Pandas", "Finance"],
      featured: true
    },
    {
      title: "Credit Risk & Spending Trends Dashboard",
      description: "A financial intelligence report for consumer behavior analysis and loan risk prediction.",
      repoUrl: "https://github.com/MADANW/credit-risk-dashboard",
      tags: ["Python", "Pandas", "Data Analysis"],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>$ ls ~/projects/</h2>

        {/* Featured Projects */}
        <div className="projects-featured">
          {featuredProjects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
              tags={project.tags}
              compact={false}
            />
          ))}
        </div>

        {/* Compact Project Grid */}
        {otherProjects.length > 0 && (
          <div className="projects-compact-grid">
            {otherProjects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                description={project.description}
                repoUrl={project.repoUrl}
                tags={project.tags}
                compact={true}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
