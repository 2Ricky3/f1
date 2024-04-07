

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link> {}
        <Link to="/stats" className="nav-link">Comparison</Link> {}
        <Link to="/timeline" className="nav-link">Timeline</Link> {}
      </div>
    </nav>
  );
};

export default Navbar;
