import { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // New state variables for fetching
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['All', 'Systems / C++', 'Full-Stack Web', 'AI & Security'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const data = await response.json();
        setProjects(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError('Unable to connect to the server. Please ensure the backend is running.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // F2: Graceful error and loading UI
    if (isLoading) {
      return (
        <div className="status-container">
          <h2>Loading projects...</h2>
        </div>
      );
    }

    if (error) {
      return (
        <div className="status-container">
          <div className="error-box">
            <h2>Connection Error</h2>
            <p>{error}</p>
          </div>
        </div>
      );
    }

  return (
    <section id="projects">
      <h2>Featured Work</h2>
      
      <div className="filter-container">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setActiveFilter(category)}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <ProjectList key={activeFilter} projects={filteredProjects} />
    </section>
  );
};

export default Projects;