import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your local images
import c1 from '../assets/c1.jfif';
import c2 from '../assets/c2.jfif';
import c3 from '../assets/c3.jfif';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="products">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Choose Your Connection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Product Categories</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* --- TEASER CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* CARD 1: HOME FIBRE */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-colors hover:border-amber-500/50">
            <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-3/5 space-y-6 z-10">
               <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider rounded border border-amber-500/20 w-fit">
                 Max Home
               </div>
               <h3 className="text-3xl font-bold text-white leading-tight">
                 Unlimited and speedy <br/> <span className="text-amber-500">Home WiFi</span>
               </h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Stream movies, play games, and connect all your smart devices with zero buffering.
               </p>
               <Link to="/services" onClick={() => window.scrollTo(0,0)} className="w-fit bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition-all flex items-center gap-2">
                 View Plans <ArrowRight size={18} />
               </Link>
            </div>
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900 via-transparent to-transparent z-10"></div>
               <img src={c1} alt="Home WiFi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* CARD 2: BUSINESS INTERNET */}
          <div className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-colors hover:border-blue-500/50">
            <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-3/5 space-y-6 z-10">
               <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider rounded border border-blue-500/20 w-fit">
                 Biz Connect
               </div>
               <h3 className="text-3xl font-bold text-white leading-tight">
                 Reliable, high-quality <br/> <span className="text-blue-400">Business Internet</span>
               </h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Dedicated fiber lines ensuring 99.9% uptime for your office. Secure, scalable, and built for productivity.
               </p>
               <Link to="/services" onClick={() => window.scrollTo(0,0)} className="w-fit bg-transparent border border-blue-400 text-blue-400 px-6 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-slate-900 transition-all flex items-center gap-2">
                 View Solutions <ArrowRight size={18} />
               </Link>
            </div>
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900 via-transparent to-transparent z-10"></div>
               <img src={c2} alt="Business Internet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* CARD 3: HOTSPOT VOUCHERS */}
          <div className="lg:col-span-2 group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-colors hover:border-green-500/50">
            <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-3/5 space-y-6 z-10 order-2 md:order-1">
                <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider rounded border border-green-500/20 w-fit">
                    Instant Access
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight">
                    Hotspot Vouchers <br/> <span className="text-green-400">Pay as you go.</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Affordable, high-speed Wi-Fi packages starting from just <strong>Ksh 5.00</strong>. Connect instantly at any of our hotspot locations.
                </p>
                <Link to="/services" onClick={() => window.scrollTo(0,0)} className="w-fit bg-transparent border border-green-500 text-green-400 px-6 py-3 rounded-full font-bold hover:bg-green-500 hover:text-slate-900 transition-all flex items-center gap-2">
                    View Voucher Prices <ArrowRight size={18} />
                </Link>
            </div>
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
                <img src={c3} alt="Using phone outside" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;