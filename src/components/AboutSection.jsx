import React from 'react';
import { CheckCircle, ArrowRight, Award, Zap, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="about">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/20 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- LEFT SIDE: IMAGE COLLAGE (Matching your Inspo) --- */}
          <div className="w-full lg:w-1/2 relative">
             {/* Main Large Image */}
             <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>

             {/* Small Overlapping Image */}
             <div className="absolute -bottom-10 -right-10 w-2/3 z-20 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl hidden md:block">
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Server technology" 
                  className="w-full h-auto object-cover"
                />
             </div>

             {/* Floating Gold Badge (The 'Award' box from inspo) */}
             <div className="absolute top-10 -left-6 bg-amber-500 p-6 rounded-xl shadow-lg z-30 animate-fade-in-up hidden md:block">
                <Award size={40} className="text-slate-900 mb-2" />
                <h4 className="text-3xl font-extrabold text-slate-900">#1</h4>
                <p className="text-slate-900 font-bold text-xs uppercase tracking-wider">Choice in<br/>Nandi</p>
             </div>
          </div>

          {/* --- RIGHT SIDE: TEXT CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-8">
             
             <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                   <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">About Golden Networks</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                   Empowering Kenya with <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                     Next-Gen Connectivity
                   </span>
                </h2>
                
                <p className="text-slate-400 text-lg leading-relaxed">
                   We aren't just an ISP; we are a technology partner dedicated to bridging the digital divide. 
                   From instant hotspot access to enterprise-grade fiber, we provide the speed you need to succeed in the digital economy.
                </p>
             </div>

             {/* Feature Grid (Icons + Text) */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500 shrink-0">
                      <Zap size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Ultra-Low Latency</h4>
                      <p className="text-slate-500 text-sm">Optimized for gaming & calls.</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500 shrink-0">
                      <Headphones size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg">24/7 Local Support</h4>
                      <p className="text-slate-500 text-sm">Real humans, ready to help.</p>
                   </div>
                </div>

             </div>

             {/* CTA Button */}
             <div className="pt-6">
    <a 
      href="#coverage"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="inline-flex items-center gap-2 bg-transparent border border-amber-500 text-amber-500 px-8 py-3 rounded-full font-bold hover:bg-amber-500 hover:text-slate-900 transition-all group"
    >
        Discover More 
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
    </a>
</div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;