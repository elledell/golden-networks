import React, { useState } from 'react';
import { MapPin, CheckCircle, X, Search, Wifi } from 'lucide-react';
import nandiMap from '../assets/nandi-map.png'; // Make sure this matches your file name

const CoverageSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  // 1. EXTENDED DATABASE OF LOCATIONS
  // This powers the search bar suggestions
  const coverageDatabase = [
    { name: "Baraton University", status: "Live" },
    { name: "Baraton Center", status: "Live" },
    { name: "Chepterit", status: "Live" },
    { name: "Kapsabet Town", status: "Live" },
    { name: "Kapsabet Boys Area", status: "Live" },
    { name: "Namgoi", status: "Live" },
    { name: "Kamobo", status: "Live" },
    { name: "Samoo", status: "Live" },
    { name: "Kapsasur", status: "Live" },
    { name: "Kapkangani", status: "Live" },
    { name: "Chepsonoi", status: "Live" },
    { name: "Sirwa yala", status: "Live" },
    { name: "Lessos", status: "Live" },
    { name: "Himaki", status: "Live" },
    { name: "Kaptumo", status: "Live" },
    { name: "Arwos", status: "Live" },
    { name: "Nandi Hills", status: "Expanding" },
    { name: "Mosoriot", status: "Coming Soon" },
    { name: "Kiboswa", status: "Coming Soon" },
    { name: "Kaimosi", status: "Coming Soon" },
  ];

  // 2. Map Pins (Visual Dots)
  const mapPins = [
    { id: 1, name: "Baraton University", status: "Live", top: "40%", left: "35%" }, 
    { id: 2, name: "Kapsabet Town", status: "Live", top: "50%", left: "50%" },     
    { id: 3, name: "Nandi Hills", status: "Expanding", top: "70%", left: "60%" },  
    { id: 4, name: "Chepterit", status: "Live", top: "25%", left: "55%" },         
  ];

  // Filter logic
  const filteredLocations = coverageDatabase.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (locationName) => {
    setSearchQuery(locationName);
    setShowDropdown(false);
    setSearchResult(null); // Reset result until they click check
  };

  const handleCheck = () => {
    const match = coverageDatabase.find(loc => loc.name.toLowerCase() === searchQuery.toLowerCase());
    
    if (match) {
      if (match.status === 'Live') {
        setSearchResult({ type: 'success', text: `Great news! We are LIVE in ${match.name}.` });
      } else if (match.status === 'Expanding') {
        setSearchResult({ type: 'warning', text: `We are currently rolling out fiber in ${match.name}. Join the waitlist!` });
      } else {
        setSearchResult({ type: 'neutral', text: `${match.name} is on our roadmap. Coming soon.` });
      }
    } else {
      setSearchResult({ type: 'error', text: `We couldn't find "${searchQuery}" in our current database. Contact us to request coverage.` });
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="coverage">
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 -skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- LEFT SIDE: TEXT & SEARCH --- */}
          <div className="w-full lg:w-1/2 space-y-8">
             <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider rounded border border-amber-500/20">
                Network Coverage
             </div>
             
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Serving the homes <br/>
                of <span className="text-amber-500">Nandi County</span>.
             </h2>
             
             <p className="text-slate-400 text-lg leading-relaxed">
                Check if your area is covered. We are rapidly expanding our fiber network across Kapsabet, Baraton, and beyond.
             </p>

             {/* --- SEARCH WIDGET CONTAINER --- */}
             <div className="relative max-w-md z-50">
                
                {/* Search Bar */}
                <div className="bg-slate-950 p-2 rounded-full border border-slate-700 flex items-center shadow-xl relative z-20">
                    <div className="pl-4 text-slate-500">
                        <MapPin size={20} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search location (e.g. Namgoi)" 
                        className="bg-transparent border-none focus:ring-0 text-white w-full px-4 py-2 outline-none placeholder-slate-600"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowDropdown(true);
                          setSearchResult(null);
                        }}
                        onFocus={() => setShowDropdown(true)}
                    />
                    {searchQuery && (
                       <button onClick={() => setSearchQuery('')} className="text-slate-500 hover:text-white mr-2">
                         <X size={16} />
                       </button>
                    )}
                    <button 
                      onClick={handleCheck}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2.5 rounded-full font-bold transition-colors"
                    >
                        Check
                    </button>
                </div>

                {/* --- AUTOCOMPLETE DROPDOWN --- */}
                {showDropdown && searchQuery.length > 0 && (
                   <div className="absolute top-full mt-2 left-0 w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-10">
                      {filteredLocations.length > 0 ? (
                        <ul>
                          {filteredLocations.map((loc, index) => (
                            <li 
                              key={index}
                              onClick={() => handleSelect(loc.name)}
                              className="px-4 py-3 hover:bg-slate-800 cursor-pointer flex justify-between items-center border-b border-slate-800 last:border-0 transition-colors"
                            >
                               <span className="text-slate-200">{loc.name}</span>
                               <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                 loc.status === 'Live' ? 'bg-green-500/20 text-green-500' : 
                                 loc.status === 'Expanding' ? 'bg-amber-500/20 text-amber-500' : 
                                 'bg-slate-700 text-slate-400'
                               }`}>
                                 {loc.status}
                               </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="p-4 text-slate-500 text-sm text-center">No locations found</div>
                      )}
                   </div>
                )}

                {/* --- RESULT MESSAGE (Success/Fail Alert) --- */}
                {searchResult && (
                  <div className={`mt-4 p-4 rounded-xl border flex items-start gap-3 animate-fade-in-up ${
                    searchResult.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 
                    searchResult.type === 'warning' ? 'bg-amber-500/10 border-amber-500/30 text-amber-500' :
                    searchResult.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
                    'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                      <div className="mt-0.5">
                        {searchResult.type === 'success' ? <Wifi size={18} /> : <Search size={18} />}
                      </div>
                      <p className="text-sm font-medium">{searchResult.text}</p>
                  </div>
                )}

             </div>

             {/* Major Hotspots Tags */}
             <div className="pt-2">
                <p className="text-sm text-slate-500 font-bold mb-3 uppercase tracking-widest">Popular Areas</p>
                <div className="flex flex-wrap gap-3">
                    {coverageDatabase.slice(0, 5).map((loc, idx) => (
                        <button key={idx} onClick={() => { setSearchQuery(loc.name); handleCheck(); }} className="px-3 py-1 rounded-full text-xs font-bold border border-slate-700 bg-slate-800/50 text-slate-400 hover:border-amber-500 hover:text-amber-500 transition-colors">
                            {loc.name}
                        </button>
                    ))}
                </div>
             </div>
          </div>

          {/* --- RIGHT SIDE: NANDI MAP --- */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden group">
             <div 
                className="absolute inset-0 opacity-80 transition-transform duration-700 hover:scale-105"
                style={{
                    backgroundImage: `url(${nandiMap})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1) invert(0.9) brightness(0.8) contrast(1.2)' 
                }}
             ></div>

             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

             {mapPins.map((loc) => (
                 <div 
                    key={loc.id}
                    className="absolute flex flex-col items-center group/pin cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: loc.top, left: loc.left }}
                 >
                    <div className="relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${loc.status === 'Live' ? 'bg-amber-500' : 'bg-slate-500'}`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 ${loc.status === 'Live' ? 'bg-amber-500' : 'bg-white'}`}></span>
                    </div>
                    <div className="absolute bottom-6 opacity-0 group-hover/pin:opacity-100 transition-opacity bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none">
                        {loc.name}
                    </div>
                 </div>
             ))}

             <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-lg">
                <h4 className="text-white font-bold text-sm">Live Coverage</h4>
                <p className="text-slate-400 text-xs">Nandi County</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoverageSection;