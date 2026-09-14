import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav>
      <Link to="/" className="logo">A Karthik Sagar</Link>
      
      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
      <label htmlFor="menu-toggle" className="hamburger" aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </label>

      <ul className="nav-links">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;