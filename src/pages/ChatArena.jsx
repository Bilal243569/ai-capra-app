import React, { useState } from 'react';
import { Send, Paperclip, Mic, ChevronDown, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import './ChatArena.css';

const AI_MODELS = [
  { provider: 'OpenAI', model: 'GPT-4o', color: '#00a67e', logo: '🤖' },
  { provider: 'Anthropic', model: 'Claude 3.5', color: '#d4a574', logo: '🧠' },
  { provider: 'Google', model: 'Gemini 1.5', color: '#4285f4', logo: '✨' },
  { provider: 'Mistral', model: 'Mistral Large', color: '#f2a73b', logo: '⚡' }
];

function ChatPanel({ side, selectedModel, onSelectModel }) {
  const [showSelector, setShowSelector] = useState(false);
  
  return (
    <div className="chat-panel">
      <div className="model-selector-bar">
        <div className="model-selector-wrapper">
          <button 
            className="model-selector-btn glass"
            style={{ borderColor: showSelector ? selectedModel.color : 'transparent' }}
            onClick={() => setShowSelector(!showSelector)}
          >
            <span className="model-logo">{selectedModel.logo}</span>
            <div className="model-info">
              <span className="model-provider">{selectedModel.provider}</span>
              <span className="model-name">{selectedModel.model}</span>
            </div>
            <ChevronDown size={14} className={`chevron ${showSelector ? 'up' : ''}`} />
          </button>
          
          {showSelector && (
            <div className="model-dropdown glass">
              {AI_MODELS.map(model => (
                <button 
                  key={model.model}
                  className="model-dropdown-item"
                  style={{ borderLeftColor: selectedModel.model === model.model ? model.color : 'transparent' }}
                  onClick={() => {
                    onSelectModel(model);
                    setShowSelector(false);
                  }}
                >
                  <span className="model-logo">{model.logo}</span>
                  <div className="model-info">
                    <span className="model-provider">{model.provider}</span>
                    <span className="model-name">{model.model}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="chat-messages">
        <div className="message assistant">
          <div className="message-content glass">
            Hello! How can I assist you today?
          </div>
        </div>
        <div className="message user">
          <div className="message-content">
            Write a quick poem about an AI learning to paint.
          </div>
        </div>
        <div className="message assistant">
          <div className="message-content glass">
            Pixels bind,\nA painted mind,\nColors flow,\nMachines now know.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChatArena() {
  const [modelLeft, setModelLeft] = useState(AI_MODELS[0]);
  const [modelRight, setModelRight] = useState(AI_MODELS[1]);
  
  return (
    <div className="chat-arena-container">
      <div className="panels-container">
        <ChatPanel side="left" selectedModel={modelLeft} onSelectModel={setModelLeft} />
        
        <div className="arena-divider">
          <motion.button whileHover={{ scale: 1.1 }} className="trophy-btn" title="Choose Better Response">
            <Trophy size={20} color="#f59e0b" />
          </motion.button>
        </div>
        
        <ChatPanel side="right" selectedModel={modelRight} onSelectModel={setModelRight} />
      </div>

      <div className="chat-input-area">
        <div className="chat-input-bar glass">
          <button className="input-action-btn"><Paperclip size={20} /></button>
          <input type="text" placeholder="Type your message here to compare models..." className="chat-input" />
          <button className="input-action-btn"><Mic size={20} /></button>
          <button className="send-btn"><Send size={18} /></button>
        </div>
      </div>
    </div>
  );
}
