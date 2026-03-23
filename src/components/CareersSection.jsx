import React from 'react';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CareersSection = () => {
  const navigate = useNavigate();

  const handleApply = (jobTitle) => {
    navigate('/contact', { state: { interest: `Application: ${jobTitle}` } });
  };

  const jobs = [
    {
      id: 1,
      title: "Field Network Technician",
      location: "Kapsabet & Environs",
      type: "Full-Time",
      desc: "Install and maintain fiber connections. Must be comfortable with heights and outdoor work."
    },
    {
      id: 2,
      title: "Direct Sales Agent",
      location: "Baraton / Nandi Hills",
      type: "Commission Based",
      desc: "Drive growth by signing up new customers in high-demand areas."
    },
    {
      id: 3,
      title: "Customer Support Specialist",
      location: "Eldoret Office",
      type: "Full-Time",
      desc: "Handle technical inquiries and ensure 100% customer satisfaction."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden" id="careers">
      
      {/* --- BACKGROUND IMAGE WITH LIGHTER OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Team Background" 
          // Increased opacity of the image itself slightly
          className="w-full h-full object-cover opacity-40"
        />
        {/* UPDATED OVERLAY: Much lighter gradient so the image shows through */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-sm font-bold border border-amber-500/30 uppercase tracking-widest mb-4">
            Join Our Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Work with <span className="text-amber-500 font-serif italic">Us!</span>
          </h2>
          <p className="text-xl text-white leading-relaxed font-medium drop-shadow-md">
            We are looking for brilliant people to join our quest for internet connectivity across all of Africa. 
            Do you have what it takes?
          </p>
        </div>

        {/* --- JOB CARDS (Updated to Lighter "Frosted Glass" style) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            // Changed bg-slate-900/50 to bg-white/10 for a lighter glass look
            <div key={job.id} className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{job.title}</h3>
                
                {/* Lighter text for metadata */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-3 uppercase tracking-wide font-semibold">
                  <span className="flex items-center gap-1 bg-slate-900/30 px-2 py-1 rounded-md"><MapPin size={12} className="text-amber-500" /> {job.location}</span>
                  <span className="flex items-center gap-1 bg-slate-900/30 px-2 py-1 rounded-md"><Clock size={12} className="text-amber-500" /> {job.type}</span>
                </div>
              </div>
              
              {/* Lighter description text */}
              <p className="text-white/90 text-sm mb-8 leading-relaxed font-medium">
                {job.desc}
              </p>

              {/* Button adapted for lighter background */}
              <button 
                onClick={() => handleApply(job.title)}
                className="w-full py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-amber-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-amber-500/20"
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* General Application Call to Action */}
        <div className="mt-16 text-center p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl inline-block border border-white/10">
          <p className="text-white mb-4 font-medium">Don't see a role for you?</p>
          <button 
             onClick={() => handleApply("General Inquiry")}
             className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-white transition-colors border-b-2 border-amber-500/50 hover:border-white pb-1"
          >
            Send us your open application <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CareersSection;