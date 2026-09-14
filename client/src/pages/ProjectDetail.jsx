import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${projectId}`);
        
        // Handle the backend's 404 response specifically
        if (response.status === 404) throw new Error('Project not found');
        if (!response.ok) throw new Error('Failed to fetch project details');
        
        const data = await response.json();
        setProject(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (isLoading) return <div style={{ textAlign: 'center', padding: '8rem' }}><h2>Loading details...</h2></div>;
  
  if (error) return (
    <div style={{ textAlign: 'center', padding: '8rem' }}>
      <h2 style={{ color: '#ef4444', marginBottom: '2rem' }}>{error}</h2>
      <Link to="/projects" className="case-study-btn">Return to Projects</Link>
    </div>
  );

  return (
    <section style={{ paddingTop: '8rem' }}>
      <Link to="/projects" className="case-study-btn" style={{ marginBottom: '2rem' }}>
        <span className="arrow">←</span> Back to Projects
      </Link>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{project.title}</h1>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {project.tech.map((item, index) => (
          <span key={index} className="tag">{item}</span>
        ))}
      </div>

      <div className="readme-container" style={{ 
        background: 'var(--surface-color)', 
        padding: '3rem', 
        borderRadius: '12px', 
        border: '1px solid var(--surface-border)' 
      }}>
        {project.readme ? <ReactMarkdown>{project.readme}</ReactMarkdown> : <p>Documentation unavailable.</p>}
      </div>
    </section>
  );
};

export default ProjectDetail;