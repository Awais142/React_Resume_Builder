import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">ResumeBuilder</Link>
      </div>
      
      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/templates" className="nav-item" onClick={() => setIsOpen(false)}>
          Templates
        </Link>
        <Link to="/create" className="nav-item" onClick={() => setIsOpen(false)}>
          Create Resume
        </Link>
        <Link to="/ai-assistant" className="nav-item" onClick={() => setIsOpen(false)}>
          AI Assistant
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
