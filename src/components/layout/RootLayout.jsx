import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';
import ParticleField from '../ui/ParticleField';

export default function RootLayout() {
  return (
    <div className="root-layout">
      {/* Global Particle Background */}
      <ParticleField />
      
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
