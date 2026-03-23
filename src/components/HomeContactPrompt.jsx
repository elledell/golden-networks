import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ArrowRight, Wifi } from 'lucide-react';

const HomeContactPrompt = () => {
  // State to track if the card is flipped or not
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* --- LEFT SIDE: BOUNCING FLIP CARD (Now Tap-to-Flip) --- */}
          <div className="w-full md:w-1/2 flex justify-center">
            
            {/* Bounce Animation Container with onClick event */}
            <div 
               className="animate-bounce-slow perspective-1000 cursor-pointer w-[320px] h-[220px]"
               onClick={() => setIsFlipped(!isFlipped)}
            >
               {/* The Card Inner 
                  Instead of group-hover, it now checks the isFlipped state 
               */}
               <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* FRONT FACE (Amber) */}
                  <div className="absolute inset-0 w-full h-full bg-amber-500 rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-2xl shadow-amber-500/20 border border-amber-400/30">
                     <div className="w-12 h-12 rounded-full border-2 border-slate-900/20 flex items-center justify-center mb-4 text-slate-900">
                        <Wifi size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Connected</h3>
                     <p className="text-slate-900/80 text-sm mb-1 font-medium">Need new service?</p>
                     <p className="text-slate-900 font-extrabold text-lg">+254 727 696 045</p>
                     
                     {/* UX Hint */}
                     <span className="absolute bottom-4 text-[10px] uppercase tracking-wider text-slate-900/50 font-bold">
                       Tap to flip
                     </span>
                  </div>

                  {/* BACK FACE (Slate) */}
                  <div className="absolute inset-0 w-full h-full bg-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180 shadow-2xl shadow-black/40 border border-slate-700">
                     <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 flex items-center justify-center mb-4 text-amber-500">
                        <Clock size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Support Hours</h3>
                     <p className="text-slate-400 text-sm mb-1">Mon - Sun: 24/7 Monitoring</p>
                     <p className="text-amber-500 font-bold text-sm">Always Online</p>
                     
                     {/* UX Hint */}
                     <span className="absolute bottom-4 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                       Tap to flip
                     </span>
                  </div>

               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: ISP TEXT CONTENT --- */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
             <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">No More Buffering</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to experience <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Unstoppable Speed?</span>
             </h2>
             <p className="text-slate-400 text-lg leading-relaxed">
                Join the network that keeps Nandi County connected. Whether you need Home Fibre for streaming or a Dedicated Link for your business, we are ready to deploy.
             </p>
             <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
                   Get Installation Quote <ArrowRight size={20} />
                </Link>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeContactPrompt;