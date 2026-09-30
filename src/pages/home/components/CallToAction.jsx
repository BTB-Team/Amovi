import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // ایمپورت لوسید آیکون تیرک
import heroBg from '../../../assets/images/hero-bg.webp'; // تصویر باکیفیت کوه‌ها

export default function CallToAction({ currentLang }) {
  const isRtl = currentLang === 'fa';

  return (
    <section className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden bg-[#14213D]">
      {/* تصویر پس‌زمینه خیره‌کننده کوه‌ها با پارالکس ملایم عینا مثل تمپلت */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* لایه تیره محافظ برای وضوح کامل متن سفید */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

      {/* محتوای متنی و دکمه کپسولی عینا مچ با عکس تمپلت */}
      <div className="relative z-20 text-center space-y-6 px-4 max-w-2xl mx-auto flex flex-col items-center">
        <div className="space-y-2 flex flex-col items-center">
          <span className="inline-block text-[#FCA311] text-[10px] sm:text-xs font-bold tracking-widest uppercase font-[Inter] bg-[#14213D]/60 backdrop-blur-sm px-3 py-1 rounded-md">
            {isRtl ? "سفر شما از اینجا شروع می‌شود" : "YOUR JOURNEY STARTS HERE"}
          </span>
          <h2 
            className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white leading-tight tracking-tight drop-shadow-md"
            style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRtl ? "آماده کشف زیبایی‌های افغانستان هستید؟" : "Ready to discover Afghanistan?"}
          </h2>
        </div>

        {/* 🔴 دکمه کپسولی زرد/طلایی لوکس مجهز به آیکون فیزیکی تیرک (ArrowRight) با قابلیت چرخش هوشمند در زبان فارسی */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#FCA311] hover:bg-amber-500 text-[#14213D] font-extrabold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 group text-xs sm:text-sm tracking-wide font-[Inter] uppercase"
        >
          <span style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
            {isRtl ? "برنامه‌ریزی سفر" : "Plan Your Journey"}
          </span>
          <ArrowRight 
            size={16} 
            strokeWidth={3} 
            className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
          />
        </Link>
      </div>
    </section>
  );
}
