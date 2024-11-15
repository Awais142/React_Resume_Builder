import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Create Your Professional Resume</h1>
          <p>Build stunning resumes with AI-powered assistance</p>
          <div className="hero-buttons">
            <Link to="/create" className="btn btn-primary">Get Started</Link>
            <Link to="/templates" className="btn btn-secondary">View Templates</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Professional Templates</h3>
            <p>Choose from our collection of professionally designed templates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered Assistance</h3>
            <p>Get intelligent suggestions to improve your resume content.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Easy Customization</h3>
            <p>Customize every aspect of your resume with our intuitive editor.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⬇️</div>
            <h3>Multiple Formats</h3>
            <p>Export your resume in various formats including PDF and Word.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Build Your Professional Resume?</h2>
        <Link to="/create" className="btn btn-primary">Start Building Now</Link>
      </section>
    </div>
  );
};

export default Home;
