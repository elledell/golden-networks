import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X as CloseIcon } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent background scrolling when the mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Handle Navigation & Smooth Scrolling
  const handleNav = (path) => {
    setIsOpen(false); // Close drawer when a link is clicked
    
    if (path === '/contact') {
      navigate(path); 
      window.scrollTo(0, 0); 
      return;
    }
    if (path === '/') {
      if (location.pathname !== '/') navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (path.startsWith('#')) {
      const id = path.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/" }, 
    { name: "About", path: "#about" },
    { name: "Products", path: "#products" }, 
    { name: "Coverage", path: "#coverage" },
    { name: "Shop", path: "#shop" }, 
    { name: "Support", path: "#support" },
    { name: "Blog", path: "#blog" },
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      {/* Note: I kept this 'sticky top-0' instead of 'fixed' so we don't have to manually inject padding into your body, which prevents layout breaking! */}
      <nav className="sticky top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-white/10 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link to="/" onClick={(e) => { e.preventDefault(); handleNav('/'); }} className="relative flex items-center gap-3 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-amber-500 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300 bg-white">
                  <img src={logo} alt="Golden Networks Logo" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="hidden lg:flex flex-col justify-center">
                  <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none">
                    GOLDEN <span className="text-amber-500">NETWORKS</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-1 lg:space-x-4">
                {navLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => handleNav(link.path)}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-bold transition-all duration-200 uppercase tracking-wide border-b-2 border-transparent hover:border-amber-500"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <button 
                onClick={() => handleNav('/contact')}
                className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
              >
                Get Connected
              </button>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="-mr-2 flex md:hidden">
              <button 
                onClick={() => setIsOpen(true)} 
                className="p-2 text-slate-300 hover:text-white transition-colors"
              >
                <Menu size={32} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDE DRAWER & OVERLAY --- */}
      
      {/* 1. Dark blurred overlay backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* 2. The Sliding Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-slate-900 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header (Logo text & Close button) */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <span className="text-lg font-extrabold text-white uppercase tracking-widest">
            GOLDEN <span className="text-amber-500">NETWORKS</span>
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full shadow-sm"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-8 space-y-6 overflow-y-auto font-bold text-lg text-slate-300 flex-grow">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.path)} 
              className="text-left w-full hover:text-amber-500 transition-colors block border-b border-slate-800/50 pb-4 uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
        </div>
        
        {/* Drawer CTA Button fixed at the bottom */}
        <div className="p-6 border-t border-slate-800">
          <button 
            onClick={() => handleNav('/contact')} 
            className="block w-full text-center bg-amber-500 text-slate-900 px-6 py-4 rounded-full hover:bg-amber-400 transition-all shadow-lg uppercase tracking-wider text-sm font-bold"
          >
            GET CONNECTED
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;