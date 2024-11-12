// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#ccc', // Add background color
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-around', // Adjust the space around the links
    padding: '10px'
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

