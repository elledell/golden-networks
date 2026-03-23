import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // Import the new button

import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white">
        
        <TopBar /> 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        
        <Footer /> 

        {/* Global Floating WhatsApp Button */}
        <WhatsAppButton />
        
      </div>
    </Router>
  );
}

export default App;