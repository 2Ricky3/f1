

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link> {}
        <Link to="/stats" className="nav-link">Stats</Link> {}
      </div>
    </nav>
  );
};

export default Navbar;
