import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-grid">
          {/* Main Introduction */}
          <div className="about-intro">
            <div className="intro-content">
              <h3>$ ./introduce_myself.sh</h3>
              <p className="intro-text">
                > Hello, I'm Mohamed Adan<br/>
                > Passionate AI/ML Engineer<br/>
                > Building intelligent systems and data-driven solutions<br/>
                > Focus: elegant solutions to complex problems
              </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="expertise-card">
            <h4>$ cat skills.txt</h4>
            <div className="expertise-list">
              <div className="expertise-item">
                <span className="expertise-icon">></span>
                <div>
                  <strong>AI_ML_Engineer.py</strong>
                  <p>Python | TensorFlow | PyTorch | LLMs</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">></span>
                <div>
                  <strong>MLOps_Engineer.sh</strong>
                  <p>Model Deployment | Azure | Cloud Pipelines</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">></span>
                <div>
                  <strong>DataScience.ipynb</strong>
                  <p>Pandas | NumPy | Statistical Modeling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mission-card">
            <h4>$ echo $MISSION</h4>
            <p>
              To build intelligent systems that solve real-world problems,
              push the boundaries of AI, and deliver measurable impact.
            </p>
          </div>

          {/* Personal Interests */}
          <div className="interests-card">
            <h4>$ ls ~/interests/</h4>
            <p className="interests-subtitle">&gt; genres: sci-fi | fantasy | historical fiction</p>
            <div className="interests-list">
              <span className="interest-tag">reading.epub</span>
              <span className="interest-tag">running.sh</span>
              <span className="interest-tag">astrophysics.py</span>
              <span className="interest-tag">tech_exploration.sh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
