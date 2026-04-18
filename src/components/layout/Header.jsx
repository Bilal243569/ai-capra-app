import React from 'react';
import { NavLink } from 'react-router';
import { Coins, Settings, User, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  return (
    <header className="header glass">
      <div className="header-left">
        <NavLink to="/" className="header-brand">
          <img src="/logo.png" alt="AI Capra Logo" style={{ height: '36px', filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.3))' }} />
          <span className="header-title animate-shimmer text-gradient">AI CAPRA</span>
        </NavLink>
        
        <nav className="header-nav">
          <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
          <a href="#features" style={{ color: 'var(--text-muted)' }}>Features</a>
          <a href="#community" style={{ color: 'var(--text-muted)' }}>Community</a>
          <a href="#blog" style={{ color: 'var(--text-muted)' }}>Blog</a>
          <a href="#pricing" style={{ color: 'var(--text-muted)' }}>Pricing</a>
        </nav>
      </div>

      <div className="header-right">
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="btn-join-earn animate-shimmer-border"
        >
          <span className="relative-z10">Join & Earn</span>
          <div className="gradient-hover-bg"></div>
        </motion.button>
        
        <div className="credits-badge">
          <Coins size={16} color="var(--accent-primary)" />
          <span>1,250</span>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="icon-btn"
        >
          <Bell size={20} />
          <span className="notification-dot"></span>
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="icon-btn"
        >
          <Settings size={20} />
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="avatar-btn"
        >
          <User size={20} color="#000" />
        </motion.button>
      </div>
    </header>
  );
}
