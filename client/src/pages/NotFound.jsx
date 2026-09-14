import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section 
      style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 
        style={{ 
          fontSize: 'clamp(6rem, 20vw, 12rem)', 
          fontWeight: '900',
          background: 'linear-gradient(to right, var(--primary), var(--accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0', 
          fontFamily: 'var(--font-mono)',
          lineHeight: '1',
          filter: 'drop-shadow(0 10px 20px var(--primary-glow))'
        }}
      >
        404
      </h1>
      
      <h2 style={{ 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        marginBottom: '1rem',
        color: 'var(--text-main)',
        fontFamily: 'var(--font-sans)'
      }}>
        Oops! Page not found.
      </h2>
      
      <p style={{ 
        maxWidth: '600px', 
        marginBottom: '3rem', 
        fontSize: '1.1rem',
        color: 'var(--text-muted)',
        lineHeight: '1.6'
      }}>
        Looks like you took a wrong turn. The page you are looking for doesn't exist, or it might have been moved.
      </p>
      
      <Link to="/" className="case-study-btn">
        Back to Home <span className="arrow">→</span>
      </Link>
    </section>
  );
};

export default NotFound;