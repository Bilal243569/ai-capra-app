import React, { useState } from 'react';
import { FileEdit, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Documents.css';

export default function GenerateDocuments() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="docs-container">
      <div className="generation-layout">
        
        {/* Prompt Zone */}
        <div className="prompt-zone-wrapper">
          <div className="prompt-controls">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Generate New Document</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--text-muted)' }}>Document Description</label>
              <textarea 
                className="prompt-textarea glass" 
                style={{ minHeight: '200px' }}
                placeholder="Describe the document you want to generate in detail..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              ></textarea>
            </div>

            <div className="tone-selector">
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Tone</label>
                <select className="control-select glass">
                  <option>Professional</option>
                  <option>Casual</option>
                  <option>Academic</option>
                  <option>Persuasive</option>
                </select>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Format</label>
                <select className="control-select glass">
                  <option>Email</option>
                  <option>Report</option>
                  <option>Blog Post</option>
                  <option>Proposal</option>
                </select>
              </div>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} className="generate-btn accent-blue animate-pulse-subtle" style={{ margin: '1rem 0 0 0' }}>
              <Wand2 size={18} />
              Generate Document
            </motion.button>
          </div>
        </div>
        
        {/* Results Area */}
        <div className="results-zone glass">
           <div className="results-header">
             <FileEdit size={20} color="var(--accent-primary)" />
             <h3>Live Preview</h3>
           </div>
           
           <div className="paper-report" style={{ opacity: 0.5 }}>
             <p style={{ textAlign: 'center', marginTop: '5rem', color: '#94a3b8' }}>
               Generated document will appear here...
             </p>
           </div>
        </div>

      </div>
    </div>
  );
}
