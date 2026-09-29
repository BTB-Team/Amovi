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
    // کانتینر اصلی پروژه با حداکثر عرض ۱۴۴۰ پیکسل و سنتر شده در مانیتورهای عریض
    <main className="w-full max-w-[1440px] mx-auto bg-[#14213D] text-white overflow-x-hidden font-['Sahel'] shadow-2xl">
      <Hero currentLang={currentLang} translations={translations} />
      <AboutExperience currentLang={currentLang} translations={translations} />
      <ServicesHighlights currentLang={currentLang} translations={translations} destinations={destinations} tours={tours} />
      <Testimonials currentLang={currentLang} translations={translations} testimonials={testimonials} loading={loading} />
    </main>
  );
}