import React from 'react';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const TopBar = () => {
  // We store the contact info in a variable so we can easily duplicate it for the seamless scroll loop
  const scrollContent = (
    <>
      <div className="flex items-center gap-2 shrink-0">
        <Phone size={14} className="text-slate-900" /> 
        <span className="font-extrabold">0727 696 045 / 0725 903 144</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <MapPin size={14} className="text-slate-900" /> 
        <span className="font-semibold">Kapsabet, Kenya</span>
      </div>
      <div className="flex items-center gap-2 shrink-0 pr-8">
        <Mail size={14} className="text-slate-900" /> 
        <span className="font-semibold">info@goldennetworks.co.ke</span>
      </div>
    </>
  );

  return (
    <div className="w-full text-sm font-medium z-50 relative">
      
      {/* --- CUSTOM CSS FOR MOBILE MARQUEE --- */}
      <style>
        {`
          @keyframes scroll-topbar {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Shifts exactly half the width (one set of items) */
          }
          .animate-topbar-marquee {
            display: flex;
            width: max-content;
            animation: scroll-topbar 20s linear infinite;
          }
        `}
      </style>

      {/* --- DESKTOP VIEW (Hidden on Mobile) --- */}
      <div className="hidden md:flex flex-row w-full">
        {/* LEFT SIDE: Dark Background (Location & Email) */}
        <div className="bg-slate-900 text-slate-300 flex-1 py-2.5 px-12 flex items-center justify-start gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <MapPin size={14} className="text-amber-500" />
            <span>Kapsabet, Kenya</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail size={14} className="text-amber-500" />
            <span>info@goldennetworks.co.ke</span>
          </div>
        </div>

        {/* RIGHT SIDE: Gold Background (Phone & Socials) */}
        <div className="bg-amber-500 text-slate-900 py-2.5 px-12 flex items-center justify-end gap-6">
          <div className="flex items-center gap-2 font-bold border-r border-slate-900/10 pr-6">
            <Phone size={15} />
            <span>0727 696 045 / 0725 903 144</span>
          </div>
          <div className="flex gap-4">
            <Facebook size={15} className="cursor-pointer hover:scale-110 transition-transform" />
            <Twitter size={15} className="cursor-pointer hover:scale-110 transition-transform" />
            <Instagram size={15} className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW (Scrolling Marquee, Hidden on Desktop) --- */}
      <div className="flex md:hidden bg-amber-500 text-slate-900 w-full overflow-hidden py-2 relative items-center border-b border-amber-600">
        
        {/* Subtle faded edges so text disappears smoothly off-screen */}
        <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-amber-500 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-l from-amber-500 to-transparent z-20 pointer-events-none"></div>

        {/* The Animated Scrolling Track */}
        <div className="animate-topbar-marquee gap-8">
          {/* We render the content twice to ensure it loops seamlessly without a gap */}
          {scrollContent}
          {scrollContent}
        </div>

      </div>

    </div>
  );
};

export default TopBar;