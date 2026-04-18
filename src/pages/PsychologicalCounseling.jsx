import React from 'react';
import { Brain, Heart, Target, Award, TrendingUp, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import './Career.css';

export default function PsychologicalCounseling() {
  const agents = [
    {
      title: "Career Clarity Session",
      desc: "Discover your true career calling through guided self-reflection",
      icon: <Brain size={24} color="#fff" />,
      gradient: "linear-gradient(135deg, #d946ef, #8b5cf6)"
    },
    {
      title: "Stress Management",
      desc: "Learn techniques to manage workplace stress and anxiety",
      icon: <Heart size={24} color="#fff" />,
      gradient: "linear-gradient(135deg, #f97316, #ef4444)"
    },
    {
      title: "Goal Setting Workshop",
      desc: "Set achievable career goals with psychological frameworks",
      icon: <Target size={24} color="#fff" />,
      gradient: "linear-gradient(135deg, #0ea5e9, #3b82f6)"
    },
    {
      title: "Confidence Building",
      desc: "Build professional confidence through proven methods",
      icon: <Award size={24} color="#fff" />,
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)"
    },
    {
      title: "Growth Mindset",
      desc: "Develop a mindset that embraces challenges and learning",
      icon: <TrendingUp size={24} color="#fff" />,
      gradient: "linear-gradient(135deg, #14b8a6, #22c55e)"
    },
    {
      title: "Work-Life Balance",
      desc: "Find harmony between career ambitions and personal well-being",
      icon: <Smile size={24} color="#fff" />,
      gradient: "linear-gradient(135deg, #84cc16, #eab308)"
    }
  ];

  return (
    <div className="career-container">
      <div className="career-header" style={{ alignItems: 'flex-start', textAlign: 'left', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mental Wellness Toolkit</h2>
      </div>

      <div className="wellness-grid">
        {agents.map((agent, index) => (
          <motion.div 
            key={index}
            className="career-card glass"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem', alignItems: 'flex-start' }}
          >
            <div 
              className="card-icon-3d" 
              style={{ background: agent.gradient, width: '48px', height: '48px', borderRadius: '12px', marginBottom: '0.5rem' }}
            >
              {agent.icon}
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#fff', margin: 0 }}>{agent.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5', margin: 0, flex: 1 }}>{agent.desc}</p>
            
            <button 
              style={{ 
                background: 'transparent', border: 'none', color: '#c084fc', 
                fontWeight: '600', padding: 0, marginTop: '1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem'
              }}
            >
              Start Session <span style={{ fontSize: '1.1em' }}>↗</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
