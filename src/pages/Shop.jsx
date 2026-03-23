import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

// Import all 12 local product images
import r1 from '../assets/r1.jfif';
import r2 from '../assets/r2.jfif';
import r3 from '../assets/r3.jfif';
import r4 from '../assets/r4.jfif';
import r5 from '../assets/r5.jfif';
import r6 from '../assets/r6.jfif';
import r7 from '../assets/r7.jfif';
import r8 from '../assets/r8.jfif';
import r9 from '../assets/r9.jfif';
import r10 from '../assets/r10.jfif';
import r11 from '../assets/r11.jfif';
import r12 from '../assets/r12.jfif';

const Shop = () => {
  // Scrolls to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "254727696045"; // Your WhatsApp Number

  // Expanded to 12 products
  const products = [
    { id: 1, name: "Premium Laptops", image: r1, desc: "High-performance laptops for business, coding, and everyday home use." },
    { id: 2, name: "Satellite TV Decoders", image: r2, desc: "Crystal clear satellite television receivers and installation accessories." },
    { id: 3, name: "CAT6 Networking Cables", image: r3, desc: "Durable, high-speed Ethernet cables available in custom lengths." },
    { id: 4, name: "Wi-Fi Routers", image: r4, desc: "Long-range, dual-band routers to eliminate dead zones in your home." },
    { id: 5, name: "Fiber Patch Cords", image: r5, desc: "High-quality fiber optic cords and equipment for enterprise networks." },
    { id: 6, name: "Smart Android TVs", image: r6, desc: "Upgrade your entertainment with our smart TV and streaming solutions." },
    { id: 7, name: "CCTV Camera Kits", image: r7, desc: "Full security camera setups for home or business monitoring." },
    { id: 8, name: "4G/5G Sim Routers", image: r8, desc: "Portable internet solutions for areas without fiber coverage." },
    { id: 9, name: "Network Switches", image: r9, desc: "PoE and standard Gigabit switches for expanding your office network." },
    { id: 10, name: "Fiber Splicing Tools", image: r10, desc: "Professional grade toolkits for fiber optic technicians." },
    { id: 11, name: "Wi-Fi Extenders", image: r11, desc: "Plug-and-play range extenders to push Wi-Fi to every corner." },
    { id: 12, name: "Smart Home Hubs", image: r12, desc: "Centralized control devices for your IoT and smart home setups." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Tech Store</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">Hardware & Resources</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Browse our top-quality tech products. Found what you need? Order directly through WhatsApp for fast, local delivery in Nandi County.</p>
        </div>

        {/* Product Grid (Now holds all 12 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition-colors shadow-xl flex flex-col">
              
              <div className="h-64 overflow-hidden relative shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-grow">{product.desc}</p>
                
                {/* Dynamic WhatsApp Button */}
                <a 
                  href={`https://wa.me/${phoneNumber}?text=Hello Golden Networks, I am interested in ordering: ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:bg-[#1ebe57] transition-colors shadow-lg shadow-[#25D366]/20 mt-auto"
                >
                  <MessageCircle size={20} /> Order on WhatsApp
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;