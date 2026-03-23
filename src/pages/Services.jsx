import React, { useState, useEffect } from 'react';
import { Check, ShoppingCart, Wifi, ShieldCheck, Zap, PhoneCall, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (serviceName) => {
    navigate('/contact', { state: { interest: serviceName } });
  };

  const handleBuyVoucher = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); 
  };

  const homePackages = [
    { speed: "8", price: "1,500", benefits: ["Ideal for 1-5 devices", "Basic web browsing", "Social media & light video"] },
    { speed: "10", price: "1,800", benefits: ["Ideal for 2-6 devices", "Seamless HD streaming", "Clear video conferencing"] },
    { speed: "15", price: "2,000", isPopular: true, benefits: ["Ideal for 4-8 devices", "4K Video streaming", "Smart TV & console ready"] },
    { speed: "20", price: "2,500", benefits: ["Heavy family usage", "Lag-free online gaming", "Lightning-fast downloads"] },
  ];

  const hotspotPackages = [
    { duration: "1 Hour", price: "5.00" },
    { duration: "2 Hours", price: "10.00" },
    { duration: "4 Hours", price: "15.00" },
    { duration: "8 Hours", price: "20.00", isPopular: true },
    { duration: "12 Hours", price: "25.00" },
    { duration: "24 Hours", price: "35.00" },
    { duration: "4 Days", price: "100.00" },
    { duration: "7 Days", price: "199.00" },
    { duration: "1 Month", price: "500.00" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Internet Plans <br/> Built for <span className="text-amber-500">You.</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Whether you are powering a smart home, running a corporate office, or just need a quick connection on the go, we have a package ready.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
          
        {/* --- HOME FIBRE SECTION --- */}
        <section>
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500"><Wifi size={24}/></div>
               <h2 className="text-3xl md:text-4xl font-bold text-white">Max Home Fibre</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {homePackages.map((pkg, index) => (
                    <div key={index} className={`relative bg-slate-900 rounded-2xl p-8 border ${pkg.isPopular ? 'border-amber-500 shadow-lg shadow-amber-500/10' : 'border-slate-800'} flex flex-col`}>
                        {pkg.isPopular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                                Most Popular
                            </span>
                        )}
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-5xl font-black text-white">{pkg.speed}</span>
                            <span className="text-amber-500 font-bold text-xl">Mbps</span>
                        </div>
                        <div className="border-b border-slate-800 pb-6 mb-6">
                            <span className="text-sm text-slate-500">Ksh </span>
                            <span className="text-3xl font-bold text-white">{pkg.price}</span>
                            <span className="text-slate-500 text-sm"> /mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {pkg.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                    <Check size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleNavigation(`${pkg.speed}Mbps Home Plan`)} className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors ${pkg.isPopular ? 'bg-amber-500 text-slate-900 hover:bg-amber-400' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                            Get Installed
                        </button>
                    </div>
                ))}
            </div>
        </section>

        {/* --- BUSINESS INTERNET SECTION --- */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="w-full lg:w-1/2">
                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider rounded border border-blue-500/20 mb-6">Biz Connect</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Enterprise-Grade Reliability</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Standard internet isn't enough for modern businesses. Our dedicated corporate links provide guaranteed speeds, absolute security, and zero downtime. Let's build a network tailored to your office.
                    </p>
                    <button onClick={() => handleNavigation('Corporate Business Quote Customization')} className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
                        Request Custom Quote <ArrowRight size={18} />
                    </button>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <ShieldCheck className="text-blue-400 mb-4" size={28} />
                        <h4 className="text-white font-bold mb-2">99.9% Uptime SLA</h4>
                        <p className="text-slate-500 text-sm">Guaranteed reliability backed by our Service Level Agreement.</p>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <Zap className="text-blue-400 mb-4" size={28} />
                        <h4 className="text-white font-bold mb-2">1:1 Contention</h4>
                        <p className="text-slate-500 text-sm">Dedicated bandwidth just for your business. No sharing.</p>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <Wifi className="text-blue-400 mb-4" size={28} />
                        <h4 className="text-white font-bold mb-2">Free Public IP</h4>
                        <p className="text-slate-500 text-sm">Static IPs available for CCTV, servers, and remote access.</p>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <PhoneCall className="text-blue-400 mb-4" size={28} />
                        <h4 className="text-white font-bold mb-2">Priority Support</h4>
                        <p className="text-slate-500 text-sm">Direct line to our senior network engineers 24/7.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- HOTSPOT VOUCHERS SECTION --- */}
        <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
               <div>
                   <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Zap size={24}/></div>
                       <h2 className="text-3xl md:text-4xl font-bold text-white">Hotspot Vouchers</h2>
                   </div>
                   <p className="text-slate-400">Connect instantly at any Golden Networks hotspot location.</p>
               </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {hotspotPackages.map((pkg, index) => (
                    <div key={index} className={`relative bg-slate-900 rounded-xl p-6 border text-center flex flex-col items-center ${pkg.isPopular ? 'border-green-500 shadow-lg shadow-green-500/10' : 'border-slate-800'}`}>
                        {pkg.isPopular && (
                            <span className="absolute -top-3 bg-green-500 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                MOST POPULAR
                            </span>
                        )}
                        <span className="text-slate-300 font-bold text-base mb-2">{pkg.duration}</span>
                        <span className="text-3xl font-bold text-white mb-6">
                            <span className="text-sm text-slate-500 mr-1">Ksh</span>{pkg.price}
                        </span>
                        
                        <button onClick={handleBuyVoucher} className={`w-full py-3 mt-auto rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors uppercase tracking-wider ${pkg.isPopular ? 'bg-green-500 text-slate-900 hover:bg-green-400' : 'bg-slate-800 text-white hover:bg-green-500 hover:text-slate-900'}`}>
                            <ShoppingCart size={14} /> Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </section>

      </div>

      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-slate-800 border border-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
            <div className="bg-green-500 text-slate-900 rounded-full p-1"><Check size={16} /></div>
            <p className="font-bold">Buy from a billing system</p>
        </div>
      </div>

    </div>
  );
};

export default Services;