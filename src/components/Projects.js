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
      title: "Algorithmic Trading Bot",
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
