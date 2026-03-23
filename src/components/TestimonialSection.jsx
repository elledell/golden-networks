import React from 'react';
import { Star, Quote } from 'lucide-react';

// Import your 4 local images
import t1 from '../assets/t1.jfif';
import t2 from '../assets/t2.jfif';
import t3 from '../assets/t3.jfif';
import t4 from '../assets/t4.jfif';

const TestimonialSection = () => {
  // Testimonial Data
  const testimonials = [
    { 
      id: 1, 
      name: "Samuel Kiprop", 
      role: "Business Owner, Kapsabet", 
      image: t1, 
      rating: 5, 
      text: "Switching to Golden Networks was the best decision for my business. The dedicated fiber link has had zero downtime, and the speeds are exactly what was promised." 
    },
    { 
      id: 2, 
      name: "Mercy Cherotich", 
      role: "Student, Baraton", 
      image: t2, 
      rating: 5, 
      text: "The hotspot vouchers are a lifesaver. It is super affordable and the connection is very stable when I need to submit my assignments or attend online classes." 
    },
    { 
      id: 3, 
      name: "John Omondi", 
      role: "Home User, Nandi Hills", 
      image: t3, 
      rating: 4, 
      text: "Installation was fast and professional. We can now stream movies on multiple devices at the same time without any buffering. Highly recommended!" 
    },
    { 
      id: 4, 
      name: "Kevin Wafula", 
      role: "Gamer & Streamer", 
      image: t4, 
      rating: 5, 
      text: "The ultra-low latency is incredible. I've played on other ISPs before, but the ping I get with Golden Networks makes online competitive gaming so much smoother." 
    },
  ];

  // We duplicate the array a few times to ensure the screen is always filled for the infinite loop
  const scrollItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-slate-900 relative border-t border-slate-800 overflow-hidden" id="testimonials">
      
      {/* --- CUSTOM CSS FOR INFINITE SCROLL --- */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } /* Shifts exactly one full set of the duplicated items */
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scroll-left 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused; /* Pauses the scroll when user hovers */
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
        <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Real Feedback</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">What Our <span className="text-amber-500">Customers Say</span></h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
      </div>

      {/* --- SCROLLING TRACK CONTAINER --- */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left and Right faded edges for a smooth gradient transition */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>

        {/* The Animated Track */}
        <div className="animate-marquee gap-6 px-4">
          {scrollItems.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[320px] md:w-[400px] shrink-0 bg-slate-950 border border-slate-800 rounded-2xl p-8 relative group hover:border-amber-500/50 transition-colors shadow-lg cursor-default flex flex-col"
            >
              {/* Giant Quote Watermark */}
              <Quote size={80} className="absolute top-4 right-4 text-slate-800/30 -z-0" />
              
              <div className="relative z-10 flex-grow">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "fill-amber-500 text-amber-500" : "fill-slate-800 text-slate-800"} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* User Info (Pushed to bottom using mt-auto) */}
              <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-slate-800/50">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/30 group-hover:border-amber-500 transition-colors shrink-0">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TestimonialSection;