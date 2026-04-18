import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';
import ParticleField from '../ui/ParticleField';

export default function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="root-layout">
      {/* Global Particle Background */}
      <ParticleField />
      
      <div className={`sidebar-container ${sidebarOpen ? 'mobile-open' : ''}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className="content-wrapper">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
