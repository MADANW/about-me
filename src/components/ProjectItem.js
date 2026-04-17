import React, { useState } from 'react';
import './ProjectItem.css';

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

const ProjectItem = ({ title, description, imageUrl, repoUrl = '#', tags = [], compact = false }) => {
  const [imageError, setImageError] = useState(false);
  const fileLabel = `${slugify(title)}.md`;

  if (compact) {
    return (
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link compact"
        aria-label={`View ${title} on GitHub`}
      >
        <article className="project-card compact">
          <header className="card-meta">
            <span className="card-prompt">~/projects</span>
            <span className="card-sep">$</span>
            <span className="card-filename">{fileLabel}</span>
          </header>
          <h3 className="compact-title">{title}</h3>
          <p className="compact-description">{description}</p>
          {tags.length > 0 && (
            <div className="project-tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
          <footer className="card-footer">
            <span className="card-cta">
              view repo
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </footer>
        </article>
      </a>
    );
  }

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
      aria-label={`View ${title} on GitHub`}
    >
      <article className="project-card">
        <header className="card-titlebar">
          <span className="card-dots" aria-hidden="true">
            <span className="card-dot red" />
            <span className="card-dot yellow" />
            <span className="card-dot green" />
          </span>
          <span className="card-filename">{fileLabel}</span>
        </header>
        <div className="card-image">
          {imageUrl && !imageError ? (
            <img
              src={process.env.PUBLIC_URL + imageUrl}
              alt={title}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="card-image-fallback" aria-hidden="true">
              <pre>{`> no_preview.img
> ls /var/log/last
> ▓▒░  ${title}  ░▒▓`}</pre>
            </div>
          )}
          <div className="card-image-scrim" aria-hidden="true" />
        </div>
        <div className="card-body">
          <div className="card-heading">
            <span className="card-prompt">$</span>
            <h3>{title}</h3>
          </div>
          <p className="card-description">{description}</p>
          {tags.length > 0 && (
            <div className="project-tags">
              {tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
          <div className="card-footer">
            <span className="card-cta">
              open repository
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProjectItem;
