import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Globe, Phone, Send } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: 'Home Fibre',
    message: ''
  });

  useEffect(() => {
    if (location.state?.interest) {
      setFormData(prev => ({ ...prev, service: location.state.interest }));
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "254727696045"; 
    // Formatted strictly for ISP context
    const text = `*New Installation Inquiry*%0A%0A*Name:* ${formData.name}%0A*Location:* ${formData.location}%0A*Interested In:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-24">
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Golden Networks</h1>
           <p className="text-slate-400 text-lg">Ready to get connected? Reach out to our team in Nandi County.</p>
        </div>

        {/* --- 4 INFO CARDS (Gold Theme) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Email */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500 transition-colors group">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <Mail size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
               <p className="text-slate-400 text-sm mb-4">For support & billing</p>
               <a href="mailto:info@goldennetworks.co.ke" className="text-amber-500 font-bold text-sm hover:underline">info@goldennetworks.co.ke</a>
            </div>

            {/* Location */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500 transition-colors group">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <MapPin size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
               <p className="text-slate-400 text-sm mb-4">Main Office</p>
               <p className="text-white font-bold text-sm">Kapsabet Town, Kenya</p>
            </div>

            {/* Coverage Area */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500 transition-colors group">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <Globe size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Coverage</h3>
               <p className="text-slate-400 text-sm mb-4">Serving</p>
               <p className="text-white font-bold text-sm">Nandi County & Environs</p>
            </div>

            {/* Call / WhatsApp */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500 transition-colors group">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <Phone size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Call Now</h3>
               <p className="text-slate-400 text-sm mb-4">24/7 Support Line</p>
               <a href="tel:+254727696045" className="text-amber-500 font-bold text-sm hover:underline">+254 727 696 045</a>
            </div>

        </div>

        {/* --- CONTACT FORM (ISP Context) --- */}
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
               <div className="w-1 h-8 bg-amber-500 rounded-full"></div>
               <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-300">Full Name</label>
                     <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                        placeholder="Your Name"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-300">Your Location / Estate</label>
                     <input 
                        required
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                        placeholder="e.g. Baraton Center, Kapsabet"
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Service Interested In</label>
                  <select 
                     value={formData.service}
                     onChange={(e) => setFormData({...formData, service: e.target.value})}
                     className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  >
                     <option>Home Fibre</option>
                     <option>Business Internet</option>
                     <option>Dedicated Links</option>
                     <option>Hotspot Vouchers</option>
                     <option>Support / Repair</option>
                  </select>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Message / Inquiry</label>
                  <textarea 
                     required
                     rows="5"
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                     placeholder="I am interested in the 10Mbps package..."
                  ></textarea>
               </div>

               <button type="submit" className="bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20">
                  <Send size={18} /> Send to WhatsApp
               </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;