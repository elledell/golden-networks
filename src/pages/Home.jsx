import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import CoverageSection from '../components/CoverageSection';
import ShopSection from '../components/ShopSection';
import TestimonialSection from '../components/TestimonialSection';
import Support from '../components/SupportSection';
import BlogSection from '../components/BlogSection';
import HomeContactPrompt from '../components/HomeContactPrompt';

 // Import new section

const Home = () => {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      
      <CoverageSection />
      <ShopSection />
      <TestimonialSection />

      <Support />
      <BlogSection />
      {/* New Flip Card Contact Section */}
      <HomeContactPrompt />
      

    </main>
  );
};

export default Home;