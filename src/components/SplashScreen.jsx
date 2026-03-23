import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Keep the splash screen fully visible for 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true); // Triggers the fade-out CSS transition
    }, 2500);

    // 2. Remove it from the DOM completely after the fade finishes (0.5s later)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Cleanup timers if the component unmounts early
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // If the timer is done, don't render anything so it doesn't block the screen
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* --- CUSTOM CSS FOR THE WAVING DOTS --- */}
      <style>
        {`
          .dot-pulse {
            animation: pulse-dot 1.4s infinite ease-in-out both;
          }
          .dot-1 { animation-delay: -0.32s; }
          .dot-2 { animation-delay: -0.16s; }
          
          @keyframes pulse-dot {
            0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
            40% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      <div className="flex flex-col items-center animate-fade-in-up">
        
        {/* Logo Container with a subtle glowing pulse */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-amber-500 shadow-2xl shadow-amber-500/40 mb-8 bg-white animate-[pulse_2s_ease-in-out_infinite]">
          <img 
            src={logo} 
            alt="Golden Networks Logo" 
            className="w-full h-full object-cover scale-110" 
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-widest mb-3">
          GOLDEN <span className="text-amber-500">NETWORKS</span>
        </h1>

        {/* Slogan */}
        <p className="text-slate-400 text-sm md:text-base font-bold tracking-[0.2em] mb-12 uppercase">
          Empowering Kenya
        </p>

        {/* 3-Dot Loading Animation */}
        <div className="flex gap-3">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full dot-pulse dot-1"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full dot-pulse dot-2"></div>
          <div className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full dot-pulse"></div>
        </div>
        
      </div>
    </div>
  );
};

export default SplashScreen;