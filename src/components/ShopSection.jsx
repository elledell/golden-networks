import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your first 6 local images for the teaser
import r1 from '../assets/r1.jfif';
import r2 from '../assets/r2.jfif';
import r3 from '../assets/r3.jfif';
import r4 from '../assets/r4.jfif';
import r5 from '../assets/r5.jfif';
import r6 from '../assets/r6.jfif';

const ShopSection = () => {
  const teaserProducts = [
    { id: 1, img: r1, name: "Premium Laptops" },
    { id: 2, img: r2, name: "Satellite TV" },
    { id: 3, img: r3, name: "Networking Cables" },
    { id: 4, img: r4, name: "Wi-Fi Routers" },
    { id: 5, img: r5, name: "Fiber Accessories" },
    { id: 6, img: r6, name: "Smart TVs" },
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden" id="shop">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Top Content: Text & Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
                <span className="inline-block px-4 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider rounded border border-amber-500/20">
                  Golden Networks Store
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Premium Hardware & <span className="text-amber-500">Resources</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Beyond lightning-fast internet, we provide top-tier networking equipment, premium laptops, satellite TVs, and CAT cables. Everything you need to stay connected.
                </p>
            </div>
            
            {/* Discover More Button */}
            <div className="shrink-0">
                <Link 
                  to="/shop" 
                  onClick={() => window.scrollTo(0,0)}
                  className="inline-flex items-center gap-2 bg-transparent border border-amber-500 text-amber-500 px-8 py-3 rounded-full font-bold hover:bg-amber-500 hover:text-slate-900 transition-all group"
                >
                  Discover More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>

        {/* Bottom Content: 6-Image Teaser Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {teaserProducts.map((item) => (
                <Link 
                  to="/shop" 
                  onClick={() => window.scrollTo(0,0)}
                  key={item.id} 
                  className="group relative h-48 md:h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-lg block"
                >
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    {/* Dark gradient overlay so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    {/* Hover text */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h4 className="text-white font-bold text-lg md:text-xl">{item.name}</h4>
                        <span className="text-amber-500 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">View in Shop &rarr;</span>
                    </div>
                </Link>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ShopSection;