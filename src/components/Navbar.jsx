import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Logic to handle Scrolling vs Navigation
  const handleNav = (path) => {
    setIsOpen(false); // Close mobile menu drawer

    // Case 1: Contact Page (External Route)
    if (path === '/contact') {
      navigate('/contact');
      window.scrollTo(0, 0);
      return;
    }

    // Case 2: Home Top
    if (path === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Case 3: Sections (#about, #products, etc.)
    if (path.startsWith('#')) {
      const elementId = path.replace('#', '');
      
      if (location.pathname !== '/') {
        // If on another page, go home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If already on Home, just scroll
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // UPDATED LINKS: Replaced "Contact" with "Blog"
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "#about" },      
    { name: "Our Products", path: "#products" }, 
    { name: "Our Coverage", path: "#coverage" },
    { name: "Shop", path: "#shop" },
    { name: "Support", path: "#support" },
    { name: "Blog", path: "#blog" }, // Updated!
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" onClick={() => handleNav('/')} className="relative group">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300 bg-white">
                <img 
                  src={logo} 
                  alt="Golden Networks" 
                  className="w-full h-full object-cover scale-110" 
                />
              </div>
            </Link>
            <span className="text-xl font-bold text-white tracking-wide hidden lg:block">
              GOLDEN <span className="text-amber-500">NETWORKS</span>
            </span>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 border-b-2 border-transparent hover:border-amber-500 uppercase tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* --- DESKTOP CTA BUTTON --- */}
          <div className="hidden md:block">
             <button 
                onClick={() => handleNav('/contact')} 
                className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
             >
               Get Connected
             </button>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          NEW MOBILE DRAWER MENU (RIGHT SIDE)
      ============================================= */}
      
      {/* 1. Dark Overlay (Clicking it closes the drawer) */}
      <div 
        className={`fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* 2. The Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-slate-900 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header (Logo & Close Button) */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <span className="text-lg font-bold text-white tracking-wide">
            GOLDEN <span className="text-amber-500">NETWORKS</span>
          </span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.path)}
              className="w-full text-slate-300 hover:text-amber-500 hover:bg-slate-800 flex justify-between items-center px-4 py-4 rounded-xl text-base font-bold border border-transparent hover:border-slate-700 transition-colors"
            >
              {link.name}
              <ChevronRight size={18} className="text-slate-600" />
            </button>
          ))}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-slate-800 pb-10">
           <button 
               onClick={() => handleNav('/contact')} 
               className="w-full text-center bg-amber-500 text-slate-900 px-5 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20"
           >
               Get Connected
           </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;