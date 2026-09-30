import { useState, useEffect } from 'react';
import { useLangStore } from '../../store/useLangStore';
import { getDestinations, getTours, getTestimonials } from '../../services/api';

import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import ServicesHighlights from './components/ServicesHighlights';
import Testimonials from './components/Testimonials';

export default function Home() {
  const { currentLang, translations } = useLangStore();
  const [destinations, setDestinations] = useState([]);
  const [tours, setTours] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDestinations(), getTours(), getTestimonials()])
      .then(([destRes, toursRes, testRes]) => {
        setDestinations(destRes.data || []);
        setTours(toursRes.data || []);
        setTestimonials(testRes.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Amovi API Error during Home init:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="w-full max-w-[1440px] mx-auto bg-[#14213D] text-white overflow-x-hidden font-['Sahel'] shadow-2xl">
      {/* هیرو سکشن اصلی */}
      <Hero currentLang={currentLang} />
      
      {/* درباره ما و تجربه */}
      <AboutExperience currentLang={currentLang} translations={translations} />
      
      {/* 🔴 این سکشن به عنوان هدف اسکرول تنظیم شده است */}
      <div id="featured-tours" className="w-full">
        <ServicesHighlights 
          currentLang={currentLang} 
          translations={translations} 
          destinations={destinations} 
          tours={tours} 
        />
      </div>
      
      {/* نظرات مسافران VIP */}
      <Testimonials 
        currentLang={currentLang} 
        translations={translations} 
        testimonials={testimonials} 
        loading={loading} 
      />
    </main>
  );
}