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
      title: "ReadMe",
      description: "This is my readme. I'm using it as placeholder for an upcomming more LLM focused project. Stay tuned!",
      imageUrl: "/under-construction.jpg",
      repoUrl: "https://github.com/MADANW/MADANW",
      tags: ["Stay tuned!"],
      featured: true
    },
    {
      title: "NEO Observer",
      description: "An interactive data science app exploring near-Earth asteroid data via NASA's NeoWs API, featuring EDA, visualizations, hazard classification, and a Streamlit dashboard.",
      imageUrl: "/NEO.jpg",
      repoUrl: "https://github.com/MADANW/NEO-Observer",
      tags: ["Python", "Streamlit", "Scikit-learn", "NASA API"],
      featured: true
    },
    {
      title: "AI Trading Bot",
      description: "A hybrid AI trading system using the Claude API for morning market bias analysis, with automated trade execution, position sizing, and risk management via Alpaca.",
      imageUrl: "/algo-bot.png",
      repoUrl: "https://github.com/MADANW/algo-bot",
      tags: ["Python", "TypeScript", "Claude API", "Next.js", "Alpaca"],
      featured: true
    },
    {
      title: "Expert Advisors Testing",
      description: "A personal log of MQL5 Expert Advisors and MetaTrader 5 backtesting results, documenting Bollinger Band scalping and EMA crossover trend-following strategies.",
      imageUrl: "/EA.png",
      repoUrl: "https://github.com/MADANW/EA-tests",
      tags: ["MQL5", "MetaTrader 5", "Algorithmic Trading", "Forex"],
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
        <header className="projects-header">
          <h2>
            <span className="projects-prompt">$</span> ls ~/projects/
            <span className="projects-cursor" aria-hidden="true" />
          </h2>
          <p className="projects-subtitle">
            # {featuredProjects.length} featured · {otherProjects.length} archived
          </p>
        </header>

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

        {otherProjects.length > 0 && (
          <>
            <h3 className="projects-subheading">
              <span className="projects-prompt">&gt;</span> archive/
            </h3>
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
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
