import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, github, description, keypoints, tech }) => {
    
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <article className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
      
      <div className="project-desc">
        <p>{description}</p>
        
        <button onClick={toggleDetails} className="btn btn-outline" style={{ marginTop: '1rem', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>

        {showDetails && (
          <ul style={{ marginTop: '1rem' }}>
            {keypoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-tech" style={{ marginTop: '1.5rem' }}>
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`/projects/${id}`} className="case-study-btn">
          Read Full Case Study <span className="arrow">→</span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;