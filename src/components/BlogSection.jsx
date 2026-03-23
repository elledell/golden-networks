import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your local blog images
import b1 from '../assets/b1.jfif';
import b2 from '../assets/b2.jfif';
import b3 from '../assets/b3.jfif';

const BlogSection = () => {
  // State to track which blog post is currently expanded
  const [expandedPostId, setExpandedPostId] = useState(null);

  const togglePost = (id) => {
    // If clicking the already open post, close it. Otherwise, open the new one.
    if (expandedPostId === id) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(id);
    }
  };

  // Blog data updated with 'fullText' for the expandable section
  const blogPosts = [
    {
      id: 1,
      title: "Why Fiber Optic is the Future of Nandi County",
      excerpt: "Discover how upgrading to a dedicated fiber link transforms your home office, gaming, and streaming experience with zero buffering.",
      fullText: "Unlike traditional copper wires that degrade over distance and during bad weather, fiber optic cables use pulses of light to transmit data. This means you get symmetrical upload and download speeds. We are laying down state-of-the-art infrastructure across the county so you can say goodbye to buffering and weather-dependent connections once and for all.",
      date: "Mar 18, 2026",
      readTime: "4 min read",
      category: "Infrastructure",
      image: b1
    },
    {
      id: 2,
      title: "5 Simple Ways to Secure Your Home Wi-Fi Network",
      excerpt: "Is your neighbor stealing your bandwidth? Learn how to change your passwords, hide your SSID, and keep your personal data safe.",
      fullText: "First, always change your default router admin password. Second, use WPA3 encryption if your router supports it (or WPA2 at minimum). Third, set up a dedicated guest network for visitors so they don't have access to your primary devices. Fourth, keep your router's firmware updated. Finally, choose a strong, unique Wi-Fi password that is hard to guess.",
      date: "Mar 12, 2026",
      readTime: "3 min read",
      category: "Security",
      image: b2
    },
    {
      id: 3,
      title: "Golden Networks Expands Coverage to Baraton",
      excerpt: "Great news for students and residents! Our lightning-fast fiber infrastructure is now fully operational in the Baraton university area.",
      fullText: "We have officially lit up the Baraton area! Students, faculty, and local businesses can now enjoy seamless online classes, uninterrupted research, and ultra-low latency for gaming. Our technicians are already on the ground conducting free site surveys. Check our coverage map to see if your hostel or home is within the new grid and request installation today.",
      date: "Mar 05, 2026",
      readTime: "2 min read",
      category: "Company News",
      image: b3
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative border-t border-slate-800" id="blog">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Stay Updated</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Latest News & <span className="text-amber-500">Insights</span></h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mt-6"></div>
          </div>
          
          <Link to="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-500 font-bold transition-colors group">
            View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden group hover:border-amber-500/50 transition-colors shadow-xl flex flex-col">
              
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative shrink-0">
                <div className="absolute top-4 left-4 z-20 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-amber-500" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-amber-500" /> {post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors leading-tight">
                  <Link to="#" onClick={(e) => e.preventDefault()}>{post.title}</Link>
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* EXPANDABLE FULL TEXT SECTION */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedPostId === post.id ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-amber-500/50 pl-4 mt-2">
                    {post.fullText}
                  </p>
                </div>

                {/* Footer / Read More Toggle */}
                <div className="flex items-center justify-end border-t border-slate-800 pt-6 mt-auto">
                  <button 
                    onClick={() => togglePost(post.id)}
                    className="text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-wider flex items-center gap-1 group/btn focus:outline-none"
                  >
                    {expandedPostId === post.id ? 'Read Less' : 'Read More'} 
                    <ArrowRight 
                      size={16} 
                      className={`transition-transform duration-300 ${expandedPostId === post.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} 
                    />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;