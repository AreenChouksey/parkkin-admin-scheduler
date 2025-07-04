
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const Index = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Parkkin</h1>
            <p>Advanced Parking Management System</p>
            <div className="cta-buttons">
              <Link to="/admin-schedule" className="cta-primary">
                Super Admin Dashboard
              </Link>
              <button className="cta-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="status-bar"></div>
                    <h3>Parkkin App</h3>
                  </div>
                  <div className="parking-spots">
                    <div className="spot available"></div>
                    <div className="spot occupied"></div>
                    <div className="spot available"></div>
                    <div className="spot available"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2>Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Real-time Monitoring</h3>
              <p>Track parking occupancy and availability in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Comprehensive reports and data insights</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Smart Automation</h3>
              <p>Automated scheduling and management</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Full mobile app integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
