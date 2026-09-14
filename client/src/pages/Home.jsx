import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  if (isLoading) {
    return (
      <section id="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="hero-title" style={{ fontSize: '2rem' }}>Loading Workspace...</h2>
      </section>
    );
  }

  return (
    <section id="hero">
      <p className="hero-subtitle delay-1">Hi, my name is</p>
      <h1 className="hero-title delay-2">Karthik Sagar.<br /></h1>
      <p className="hero-desc delay-3">
        <Typewriter text="I'm a Computer Science Engineering student specializing in high-performance backend architecture, systems programming, and competitive coding." speed={60}></Typewriter>
      </p>
      
      <div className="hero-buttons delay-3">
        <Link to="/projects" className="btn">View Projects</Link>
        <Link to="/contact" className="btn btn-outline">Contact Me</Link>
      </div>
    </section>
  );
};

export default Home;