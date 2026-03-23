import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle, HelpCircle } from 'lucide-react';

// Import local team images
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';

const SupportSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Updated Data for Team Members with Educational Notes
  const teamMembers = [
    {
      name: "Rashid thou",
      image: e1,
      note: "Placement matters! For the best Wi-Fi signal, keep your router elevated, central in your home, and away from thick walls or microwaves."
    },
    {
      name: "Mohamedali kiplagat",
      image: e2,
      note: "Secure your connection. Regularly changing your Wi-Fi password prevents unwanted devices from quietly slowing down your network."
    },
    {
      name: "Davis shiru",
      image: e3,
      note: "Wired vs Wireless: For intense gaming or 4K streaming, plug your device directly into the router using a LAN cable for zero lag."
    }
  ];

  // FAQ Data (ISP relevant)
  const faqs = [
    {
      question: "How do I pay for my subscription?",
      answer: "We accept M-Pesa payments. Go to your SIM toolkit, select Paybill, enter our Business Number (123456), use your Account Number, and enter the amount."
    },
    {
      question: "What happens if I move to a new location?",
      answer: "If you move within our coverage area (Nandi County), we can relocate your fiber connection for a small service fee. Contact support to schedule a transfer."
    },
    {
      question: "Why is my internet slow?",
      answer: "Slow speeds can be caused by many factors including router placement, interference, or network congestion. Try restarting your router first. If the issue persists, contact our technical team."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! You can upgrade your speed package at any time via our self-care portal or by contacting customer support. Changes take effect immediately upon payment."
    },
    {
      question: "Do you offer refunds for downtime?",
      answer: "We strive for 99.9% uptime. In the rare event of extended outages confirmed by our engineers, we provide service credits to your account."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative border-t border-slate-800" id="support">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">We are here to help</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Support & <span className="text-amber-500">FAQs</span></h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* --- TEAM SECTION (Updated with Tips) --- */}
        <div className="mb-24">
            <h3 className="text-2xl font-bold text-white mb-10 text-center">Meet Our Support Leads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl text-center hover:border-amber-500 transition-all duration-300 group hover:-translate-y-2 shadow-xl flex flex-col items-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-amber-500 transition-colors shadow-lg shrink-0">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{member.name}</h4>
                        
                        {/* Decorative separator line */}
                        <div className="w-10 h-1 bg-amber-500/50 rounded-full mb-4"></div>
                        
                        {/* Educational Note styled as a quote */}
                        <p className="text-slate-400 text-sm italic leading-relaxed">
                            "{member.note}"
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- FAQ SECTION (Accordion Style) --- */}
        <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <HelpCircle className="text-amber-500" /> Frequently Asked Questions
            </h3>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-800/50 border-amber-500/50' : 'bg-slate-950 border-slate-800'}`}>
                        <button 
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-800/50 transition-colors"
                        >
                            <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="text-amber-500 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="text-slate-500 flex-shrink-0" />
                            )}
                        </button>
                        
                        <div 
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-700/50 pt-4">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Contact Footer Buttons */}
        <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">Still have questions?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                    <Phone size={18} /> Call Support
                 </button>
                 <button className="flex items-center justify-center gap-2 border border-slate-600 text-white px-8 py-3 rounded-full font-bold hover:border-amber-500 hover:text-amber-500 transition-colors">
                    <MessageCircle size={18} /> Chat with Us
                 </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SupportSection;