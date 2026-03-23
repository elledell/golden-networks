import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
// Splash Screen import has been completely removed

// Import Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      {/* Removed the 'relative' class that broke the WhatsApp button */}
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white">
        
        <TopBar /> 
        <Navbar />

        {/* Main content wrapper */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer /> 

        {/* WhatsApp Button will now properly anchor to the screen */}
        <WhatsAppButton />
        
      </div>
    </Router>
  );
}

export default App;