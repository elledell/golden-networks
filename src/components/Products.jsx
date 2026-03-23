import React from 'react';
import { Wifi, Smartphone, Zap, Clock, Check } from 'lucide-react';

const Products = () => {
  // Data from your uploaded images
  const plans = [
    { duration: "1 HOUR", price: "5.00", badge: null },
    { duration: "2 HOURS", price: "10.00", badge: null },
    { duration: "4 HOURS", price: "15.00", badge: null },
    { duration: "8 HOURS", price: "20.00", badge: "Most Bought" }, // Highlighted in your image
    { duration: "12 HOURS", price: "25.00", badge: null },
    { duration: "24 HOURS", price: "35.00", badge: "Best Value" },
    { duration: "4 DAYS", price: "100.00", badge: null },
    { duration: "7 DAYS", price: "199.00", badge: null },
    { duration: "1 MONTH", price: "500.00", badge: "Monthly Saver" },
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden" id="products">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-[150px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-slate-400">Affordable high-speed internet for everyone.</p>
        </div>

        {/* --- VOUCHER INPUT SECTION (From your Design) --- */}
        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-20 text-center shadow-2xl shadow-black/50 relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-transparent rounded-2xl blur opacity-50"></div>
            
            <div className="relative">
                <h3 className="text-xl font-bold text-amber-500 mb-2">Have a Voucher Code?</h3>
                <p className="text-slate-400 text-sm mb-6">Enter your voucher code or mobile number to connect instantly.</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="text" 
                        placeholder="Enter Code or Mobile..." 
                        className="flex-1 bg-slate-950 border border-slate-700 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                    />
                    <button className="bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 uppercase tracking-wide">
                        Connect
                    </button>
                </div>
            </div>
        </div>

        {/* --- PRICING GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-slate-900 border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 group ${
                plan.badge 
                ? "border-amber-500 shadow-lg shadow-amber-500/5" 
                : "border-slate-800 hover:border-slate-600"
              }`}
            >
              
              {/* Badge (Most Bought) */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-1">Duration</h3>
                    <p className="text-2xl font-bold text-white flex items-center gap-2">
                        <Clock size={20} className="text-amber-500" /> 
                        {plan.duration}
                    </p>
                 </div>
                 <div className="bg-slate-950 p-3 rounded-full border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                    <Wifi size={20} className="text-slate-500 group-hover:text-amber-500 transition-colors" />
                 </div>
              </div>

              {/* Price */}
              <div className="mb-8 border-b border-slate-800 pb-8">
                <span className="text-sm text-slate-500 align-top">Ksh</span>
                <span className="text-4xl font-bold text-white mx-1">{plan.price}</span>
              </div>

              {/* Features (Hardcoded based on typical hotspot) */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                    <Check size={16} className="text-amber-500" />
                    <span>Unlimited Browsing</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                    <Check size={16} className="text-amber-500" />
                    <span>High Speed Connection</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                    <Smartphone size={16} className="text-amber-500" />
                    <span>1 Device Allowed</span>
                </li>
              </ul>

              {/* Button */}
              <button className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                plan.badge
                ? "bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/20"
                : "bg-slate-800 text-white hover:bg-white hover:text-slate-900"
              }`}>
                Buy Now
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;