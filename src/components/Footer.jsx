import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative Gold Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 bg-white shrink-0">
                   <img 
                     src={logo} 
                     alt="Golden Networks Logo" 
                     className="w-full h-full object-cover scale-110" 
                   />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Golden<span className="text-amber-500">Networks</span>
                </span>
            </div>
            
            {/* --- UPDATED SLOGAN HERE --- */}
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience unstoppable speed. We are dedicated to providing Nandi County with affordable, reliable, and lightning-fast fiber internet.
            </p>
            
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all"><Facebook size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all"><Twitter size={18} /></a>
               <a href="https://www.instagram.com/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><a href="/#products" className="hover:text-amber-500 transition-colors">Fibre Packages</a></li>
              <li><a href="/#coverage" className="hover:text-amber-500 transition-colors">Check Coverage</a></li>
              <li><a href="/#careers" className="hover:text-amber-500 transition-colors">Careers</a></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home Internet</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Business Solutions</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Dedicated Circuits</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Hotspot Installation</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">CCTV & Security</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Kapsabet Town,<br/>Nandi County, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+254 727 696 045</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>info@goldennetworks.co.ke</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-slate-500 text-sm text-center md:text-left">
             &copy; {new Date().getFullYear()} Golden Networks. All rights reserved.
           </p>
           
           <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              
              <button 
                onClick={scrollToTop}
                className="bg-slate-800 hover:bg-amber-500 hover:text-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                title="Back to Top"
              >
                 <ArrowUp size={20} />
              </button>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;