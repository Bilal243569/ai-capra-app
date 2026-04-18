import React, { useState } from 'react';
import { Bot, MessageCircle, Share2, Globe, HelpCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomAgents.css';

const agents = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business Agent',
    desc: 'Automate customer support and sales on WhatsApp.',
    icon: MessageCircle,
    color: '#25D366'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Networker',
    desc: 'Automate outreach, connection requests, and customized messaging.',
    icon: Share2,
    color: '#0A66C2'
  },
  {
    id: 'facebook',
    name: 'Facebook Page Assistant',
    desc: 'Manage comments, DMs, and post engagement automatically.',
    icon: Globe,
    color: '#1877F2'
  },
  {
    id: 'support',
    name: 'Custom Website Support Bot',
    desc: 'Embed a trained AI assistant directly into your website.',
    icon: Bot,
    color: '#a855f7'
  }
];

export default function CustomAgents() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="agents-container">
      <div className="agents-header">
        <Bot size={40} color="var(--accent-primary)" />
        <h1>Custom AI Agents</h1>
        <p>Deploy specialized AI assistants to your favorite platforms.</p>
      </div>

      <div className="agents-list">
        {agents.map((agent) => (
          <motion.div 
            key={agent.id}
            whileHover={{ scale: 1.02 }}
            className="agent-card glass"
            onClick={() => setSelectedAgent(agent)}
          >
            <div className="agent-icon-wrapper" style={{ backgroundColor: agent.color }}>
              <agent.icon size={32} color="#fff" />
            </div>
            <div className="agent-details">
              <h2>{agent.name}</h2>
              <p>{agent.desc}</p>
            </div>
            <button className="btn-build">Build Automation</button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAgent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedAgent(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="modal-content glass"
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedAgent(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-header" style={{ borderBottomColor: selectedAgent.color }}>
                 <div className="agent-icon-wrapper" style={{ backgroundColor: selectedAgent.color, width: 64, height: 64 }}>
                   <selectedAgent.icon size={32} color="#fff" />
                 </div>
                 <h2>Deploy {selectedAgent.name}</h2>
              </div>
              
              <div className="modal-body">
                <p>Follow these steps to deploy your custom agent:</p>
                <ol className="deployment-steps">
                  <li>Configure agent personality and knowledge base.</li>
                  <li>Connect to {selectedAgent.name.split(' ')[0]} API via OAuth.</li>
                  <li>Set triggering rules and fallbacks.</li>
                  <li>Test in sandbox environment.</li>
                  <li>Deploy to production.</li>
                </ol>
                
                <button className="btn-deploy" style={{ backgroundColor: selectedAgent.color }}>
                  Start Configuration
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
