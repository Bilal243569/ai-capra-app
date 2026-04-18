import { useState } from 'react';
import { Shield, Zap, CircleDot, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar with subtle glassmorphic effect */}
      <nav className="navbar glass">
        <div className="nav-brand">
          <img src="/logo.png" alt="AI CAPRA Logo" className="nav-logo" />
        </div>
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
        </div>
        <button className="btn-primary">Get Early Access</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/logo.png" alt="AI Capra emblem" className="hero-logo" />
          
          <h1 className="hero-title">
            Unleash the Power of <br />
            <span className="gold-text">AI CAPRA</span>
          </h1>
          
          <p className="hero-subtitle">
            Next-generation artificial intelligence algorithms encapsulated in an 
            indestructible framework. Built for security, speed, and supreme accuracy.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Initialize System <ChevronRight size={18} style={{ display: 'inline', marginBottom: '-4px' }} />
            </button>
            <button className="btn-secondary">Read Documentation</button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="features-section" id="platform">
        <motion.div 
          className="feature-card glass"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Shield className="feature-icon" />
          <h3 className="feature-title">Impenetrable Security</h3>
          <p className="feature-text">
            Advanced cryptographic protocols ensure your AI infrastructure remains 
            completely insulated from external threats and vulnerabilities.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card glass"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Zap className="feature-icon" />
          <h3 className="feature-title">Lightning Processing</h3>
          <p className="feature-text">
            Quantum-inspired neural networks deliver inference speeds previously 
            thought impossible on conventional hardware.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card glass"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CircleDot className="feature-icon" />
          <h3 className="feature-title">Absolute Precision</h3>
          <p className="feature-text">
            Zero hallucination architecture guarantees 99.9% accuracy across all 
            mission-critical data analysis and processing tasks.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
