import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen'; // <-- Added Splash Screen Import

// Import Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white">
        
        {/* The new Splash Screen is placed right here at the top! */}
        <SplashScreen />
        
        <TopBar /> 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          
          {/* Catch-all route moved to the bottom */}
          <Route path="*" element={<Home />} />
        </Routes>
        
        <Footer /> 

        {/* Global Floating WhatsApp Button */}
        <WhatsAppButton />
        
      </div>
    </Router>
  );
}

export default App;