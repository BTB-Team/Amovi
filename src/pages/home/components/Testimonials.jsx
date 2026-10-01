import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ currentLang }) {
  const isRtl = currentLang === 'fa';
  const [activeIndex, setActiveIndex] = useState(1); // دات فعال اسلایدر عینا مشابه تصویر

  // دیتای پرمیوم مسافران دقیقاً منطبق با نام‌ها، کشورها و متون انگلیسی عکس تمپلت شما
  const amoviTestimonials = [
    {
      id: 1,
      name: "Sarah M.",
      avatar: "https://unsplash.com",
      location_en: "United Kingdom",
      location_fa: "بریتانیا",
      text_en: "\"Amovi made our journey through Afghanistan feel effortless. Every detail was thoughtfully planned.\"",
      text_fa: "«آمووی باعث شد سفر ما در سراسر افغانستان کاملاً روان و راحت باشد. تک‌تک جزئیات با فکر و دقت برنامه‌ریزی شده بود.»"
    },
    {
      id: 2,
      name: "James T.",
      avatar: "https://unsplash.com",
      location_en: "Canada",
      location_fa: "کانادا",
      text_en: "\"An incredible experience! The landscapes, people and culture were beyond my expectations.\"",
      text_fa: "«یک تجربه باورنکردنی! مناظر، مردم و فرهنگ اصیل افغانستان فراتر از تمام انتظارات من بود.»"
    },
    {
      id: 3,
      name: "Fatima A.",
      avatar: "https://unsplash.com",
      location_en: "UAE",
      location_fa: "امارات متحده عربی",
      text_en: "\"Professional, reliable and truly passionate about what they do. Highly recommended!\"",
      text_fa: "«حرفه‌ای، قابل اعتماد و واقعاً عاشق کاری که انجام می‌دهند. این آژانس مسافرتی را به شدت توصیه می‌کنم!»"
    }
  ];

  return (
    <section className="w-full py-16 bg-[#14213D] text-white flex flex-col items-center justify-center border-t border-white/5">
      {/* کانتینر اصلی با کادر دقیق ۱۲۲۰ پیکسل استاندارد پروژه */}
      <div className="w-full max-w-[1220px] mx-auto px-6 md:px-8 space-y-12">
        
        {/* ==================== هدر سکشن نظرات ==================== */}
        <div className="w-full flex flex-col items-center text-center space-y-2">
          <span className="text-[#FCA311] text-[10px] sm:text-xs font-bold tracking-widest uppercase font-[Inter]">
            {isRtl ? "داستان مسافران" : "TRAVELER STORIES"}
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-[36px] font-black leading-tight tracking-tight text-white"
            style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRtl ? "مسافران ما چه می‌گویند" : "What Our Travelers Say"}
          </h2>
        </div>

        {/* ==================== گرید کارت‌های ۳گانه نظرات ==================== */}
        {/* تبلت (md) کاملاً مشابه دسکتاپ به صورت ۳ ستونه باقی می‌ماند و در موبایل‌های کوچک تک‌ستونه فیکس می‌شود */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" dir={isRtl ? "rtl" : "ltr"}>
          {amoviTestimonials.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col space-y-5 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FCA311]/30 transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {/* بخش پروفایل و اطلاعات مسافر */}
              <div className={`flex items-center gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10 shadow-md shrink-0" 
                />
                <div className="flex flex-col items-start justify-center">
                  <span className="font-bold text-base text-white font-[Inter] leading-none">{item.name}</span>
                  <span 
                    className="text-xs text-slate-400 font-light mt-1.5 block" 
                    style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
                  >
                    {isRtl ? item.location_fa : item.location_en}
                  </span>
                  
                  {/* ۵ ستاره طلایی ثابت مطابق عکس تمپلت */}
                  <div className="flex items-center gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-[#FCA311] text-[#FCA311]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* متن نظر مسافر در تمپلت */}
              <p 
                className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light italic flex-grow pt-1"
                style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
              >
                {isRtl ? item.text_fa : item.text_en}
              </p>
            </div>
          ))}
        </div>

        {/* دات‌های زیر اسلایدر عینا مطابق عکس تمپلت */}
        <div className="flex justify-center items-center gap-2 pt-2" dir="ltr">
          {[...Array(4)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#FCA311]' : 'w-2 bg-white/20'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
