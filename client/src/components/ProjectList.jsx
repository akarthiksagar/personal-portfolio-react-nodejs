import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isSingleProject = projects.length <= 1;

  // 1. Fail-safe reset: Force index to 0 whenever the array changes
  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);
  }, [projects]);

  // 2. The Auto-Slider Timer
  useEffect(() => {
    if (isSingleProject) return; // Hard stop for single items

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [isSingleProject]);

  // 3. The Invisible Snap-Back Logic
  useEffect(() => {
    if (!isSingleProject && currentIndex === projects.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, projects.length, isSingleProject]);

  // 4. Clone only if there are multiple projects
  const renderList = isSingleProject
    ? projects
    : [...projects, { ...projects[0], _isClone: true }];

  // 5. Hard lock the index to 0 if there's only 1 project
  const safeIndex = isSingleProject ? 0 : currentIndex;

  return (
    <div 
      className="projects-carousel-wrapper" 
      style={{ overflow: 'hidden', width: '100%' }}
    >
      <div 
        className="projects-slider"
        style={{ 
          display: 'flex',
          gap:0,
          transition: (!isSingleProject && isTransitioning) ? 'transform 0.5s ease-in-out' : 'none',
          transform: `translateX(-${safeIndex * 100}%)`,
          animation: 'none' // <-- ADD THIS BACK IN
        }}
      >
        {renderList.map((proj) => (
          <div 
            key={proj._isClone ? `${proj.id}-clone` : proj.id} 
            style={{ minWidth: '100%', flexShrink: 0 }}
          >
            <ProjectCard 
              id={proj.id}
              title={proj.title}
              github={proj.github}
              description={proj.description}
              keypoints={proj.keypoints}
              tech={proj.tech}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectList;