import React from 'react';
import { NavLink } from 'react-router';
import { 
  MessageSquare, Image, Video, FileText, FileEdit, 
  Briefcase, Brain, BookOpen, Plus, History, Sparkles, ChevronRight, X 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Sidebar.css';

const navCategories = [
  {
    title: 'CHAT',
    items: [
      { icon: MessageSquare, label: 'AI Chat', path: '/chat' },
      { icon: MessageSquare, label: 'Chat Arena', path: '/chat-arena' }
    ]
  },
  {
    title: 'IMAGE & VIDEO',
    items: [
      { icon: Image, label: 'Image Generation', path: '/image-generation' },
      { icon: Video, label: 'Video Generation', path: '/video-generation', badge: 'New' }
    ]
  },
  {
    title: 'DOCUMENTS',
    items: [
      { icon: FileText, label: 'Analyze Documents', path: '/analyze-documents' },
      { icon: FileEdit, label: 'Generate Documents', path: '/generate-documents' }
    ]
  },
  {
    title: 'CAREER',
    items: [
      { icon: Briefcase, label: 'Career Development', path: '/career-development' },
      { icon: Brain, label: 'Psychological Counseling', path: '/psychological-counseling' }
    ]
  },
  {
    title: 'LIBRARY',
    items: [
      { icon: BookOpen, label: 'Digital Library', path: '/library' }
    ]
  }
];

export default function Sidebar({ onClose }) {
  return (
    <aside className="sidebar glass">
      <button className="mobile-close-btn" onClick={onClose}>
        <X size={24} color="#fff" />
      </button>

      <div className="sidebar-header">
        <div className="logo-container">
          <img src="/logo.png" alt="AI Capra Logo" style={{ height: '48px', filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.3))' }} />
          <div className="logo-text-container">
            <h1 className="logo-text text-gradient animate-shimmer" style={{ marginTop: '4px' }}>AI CAPRA</h1>
            <span className="logo-subtitle">INTELLIGENCE REDEFINED</span>
          </div>
        </div>

        <NavLink to="/custom-agents" className="custom-agent-btn" onClick={onClose}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="custom-agent-content">
            <div className="custom-agent-glow"></div>
            <Sparkles size={20} color="#000" />
            <div className="custom-agent-text">
              <span className="title" style={{ color: '#000' }}>Custom Agent</span>
              <span className="subtitle" style={{ color: '#000', opacity: 0.8 }}>Tailor your AI assistant</span>
            </div>
            <ChevronRight size={18} color="#000" />
          </motion.div>
        </NavLink>
      </div>

      <nav className="sidebar-nav text-muted">
        {navCategories.map((cat, idx) => (
          <div key={idx} className="nav-group">
            <div className="nav-group-title" style={{ color: 'var(--accent-primary)' }}>{cat.title}</div>
            {cat.items.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                onClick={onClose}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="active-indicator"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <item.icon size={18} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {item.badge && <span className="nav-badge" style={{ color: '#000' }}>{item.badge}</span>}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-new-chat">
          <Plus size={18} /> New Chat
        </motion.button>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-history">
          <History size={18} /> History
        </motion.button>
      </div>
    </aside>
  );
}
