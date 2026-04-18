import React, { useState } from 'react';
import { Image, Settings, Download, Expand, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './MediaGeneration.css';

const ratios = [
  { label: '1:1', desc: 'Square' },
  { label: '16:9', desc: 'Landscape' },
  { label: '9:16', desc: 'Portrait' },
  { label: '4:3', desc: 'Classic' }
];

export default function ImageGeneration() {
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  const [prompt, setPrompt] = useState('');

  return (
    <div className="media-gen-container">
      {/* Control Panel (Sidebar inside the page) */}
      <div className="control-panel glass">
        <div className="control-header">
          <Image size={20} color="var(--accent-secondary)" />
          <h3>Image Generation</h3>
        </div>

        <div className="control-section">
          <label>Prompt</label>
          <textarea 
            className="prompt-textarea glass" 
            placeholder="A futuristic city with flying cars at midnight, highly detailed..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>

        <div className="control-section">
          <label>Aspect Ratio</label>
          <div className="ratio-grid">
            {ratios.map(r => (
              <button 
                key={r.label}
                className={`ratio-btn glass ${selectedRatio === r.label ? 'active' : ''}`}
                onClick={() => setSelectedRatio(r.label)}
              >
                <span className="ratio-label">{r.label}</span>
                <span className="ratio-desc">{r.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-section">
          <label>Quality</label>
          <select className="control-select glass">
            <option>Standard (Fast)</option>
            <option>High (Detailed)</option>
            <option>Ultra (4K)</option>
          </select>
        </div>

        <motion.button whileHover={{ scale: 1.02 }} className="generate-btn accent-purple animate-pulse-subtle">
          <Wand2 size={18} />
          Generate Image
        </motion.button>
      </div>

      {/* Preview Area */}
      <div className="preview-area">
        <div className="preview-grid">
          {/* Mock Generated Images */}
          {[1,2,3,4].map(idx => (
            <div key={idx} className="preview-card glass">
              <div className="preview-image-placeholder">
                <Image size={48} color="rgba(255,255,255,0.1)" />
              </div>
              <div className="preview-overlay">
                <button className="icon-btn"><Download size={18} /></button>
                <button className="icon-btn"><Expand size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
