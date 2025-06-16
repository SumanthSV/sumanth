import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Achievements from './components/AchievementsSection';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Navbar/>
        <ParticleBackground />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <Routes>
              <Route path="/" element={<Hero/>} />
              <Route path="/milestones" element={<Achievements />} />
              <Route path="/aboutme" element={<About />} />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;