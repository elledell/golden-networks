import React, { useState, useEffect } from 'react';
import { Wifi, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your 6 local images
import hero1 from '../assets/hero1.jfif';
import hero2 from '../assets/hero2.jfif';
import hero3 from '../assets/hero3.jfif';
import hero4 from '../assets/hero4.jfif';
import hero5 from '../assets/hero5.jfif';
import hero6 from '../assets/hero6.jfif';

// --- Internal Helper Component for Counting Animation ---
const Counter = ({ end, duration = 2000, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Calculate percentage complete (0 to 1)
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth stop (easeOutExpo)
      const ease = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
      
      const currentVal = ease(percentage) * end;
      setCount(currentVal);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Updated to use your 6 local images
  const slides = [
    { id: 1, image: hero1, alt: "Golden Networks Slide 1" },
    { id: 2, image: hero2, alt: "Golden Networks Slide 2" },
    { id: 3, image: hero3, alt: "Golden Networks Slide 3" },
    { id: 4, image: hero4, alt: "Golden Networks Slide 4" },
    { id: 5, image: hero5, alt: "Golden Networks Slide 5" },
    { id: 6, image: hero6, alt: "Golden Networks Slide 6" }
  ];

  // Typewriter Logic
  const slogans = ["Seamless.", "Zero-delay.", "Unstoppable."];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % slogans.length;
      const fullText = slogans[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, slogans]);


  // Slider Logic
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(slideTimer);
  }, [slides.length]); // Added dependency

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-slate-900" id="hero">
      
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side Text */}
        <div className="w-full md:w-2/3 pt-20 md:pt-0 space-y-6">
           <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded px-3 py-1 text-amber-400 font-bold text-xs tracking-widest uppercase mb-2">
             Premium Internet Service
           </div>

           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
             Internet that is <br/>
             <span className="text-amber-500 min-h-[1.2em] inline-block">
               {text}
               <span className="animate-pulse text-white">|</span>
             </span>
           </h1>

           <p className="text-slate-300 text-lg md:text-xl max-w-lg border-l-4 border-amber-500 pl-6">
             Connect your home, office, and life with Nandi County's most reliable fiber network. 
             Stream, learn, and work without buffering.
           </p>

           <div className="pt-8 flex gap-4">
              <Link to="/contact" className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
                Get Connected
              </Link>
           </div>
        </div>

        {/* Right Side: Gold Stat Box (Functional Counters) */}
        <div className="hidden md:flex w-1/3 h-full items-end justify-end pb-20">
           <div className="bg-amber-500 p-8 w-full max-w-sm shadow-2xl relative animate-fade-in-up">
              {/* Decorative Squares */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-4 border-white opacity-50"></div>

              {/* Counter 1: Happy Homes */}
              <div className="flex justify-between items-start border-b border-slate-900/20 pb-6 mb-6">
                 <div>
                    <h3 className="text-5xl font-extrabold text-slate-900">
                       <Counter end={5} duration={1500} suffix="k+" />
                    </h3>
                    <p className="text-slate-900 font-bold mt-1">Happy Homes</p>
                 </div>
                 <Users size={40} className="text-slate-900" />
              </div>
              
              {/* Counter 2: Uptime Guarantee */}
              <div className="flex justify-between items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                       <Counter end={99.9} duration={2500} decimals={1} suffix="%" />
                    </h3>
                    <p className="text-slate-800 text-sm font-medium">Uptime Guarantee</p>
                 </div>
                 <div className="bg-slate-900 p-3 rounded-full text-amber-500">
                    <CheckCircle size={24} />
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Bouncing Wifi Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce cursor-pointer">
        <div className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-amber-500 rounded-full flex items-center justify-center text-amber-500 shadow-lg shadow-amber-500/50">
            <Wifi size={20} />
        </div>
      </div>

    </section>
  );
};

export default Hero;