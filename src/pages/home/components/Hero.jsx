import React from 'react';
// ایمپورت کردن نوبار از پوشه لایه‌اوت
import Header from '../../layout/Header';

// ایمپورت کردن تصاویر پروژه
import heroBg from '../../../assets/images/hero-bg.webp';
import heroMain from '../../../assets/images/hero-main.webp';
import heroTop from '../../../assets/images/hero-top.webp';
import heroBottom from '../../../assets/images/hero-bottom.webp';

export default function Hero({ currentLang }) {
  const isRtl = currentLang === 'fa';

  return (
    <section className="relative w-full h-[95vh] min-h-[750px] max-h-[950px] flex flex-col justify-center overflow-hidden bg-[#14213D]" dir="ltr">
      
      {/* ۱. نوبار شناور با فاصله از سقف مرورگر */}
      <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-8 pointer-events-none">
        <div className="max-w-[1220px] mx-auto w-full pointer-events-auto">
          <Header />
        </div>
      </div>

      {/* تصویر پس‌زمینه سراسری با ابعاد کامل */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* ۲. لایه سرمه‌ای تیره قفل شده در سمت چپ */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[55%] z-10 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/75 to-transparent pointer-events-none" />

      {/* ۳. کانتینر اصلی محتوا با عرض دقیق ۱۲۲۰ پیکسل */}
      <div className="w-full max-w-[1220px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20 h-full pt-30 text-left" dir="ltr">
        
        {/* 🔴 بخش متن هیرو - استفاده از items-stretch برای کشیده شدن و تراز شدن قطعی لبه‌ها روی هم در حالت فارسی */}
        <div 
          className={`lg:col-span-6 flex flex-col justify-center space-y-6 -mt-6 w-full ${isRtl ? 'items-stretch text-right' : 'items-start text-left'}`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div className={`space-y-3 flex flex-col w-full ${isRtl ? 'items-stretch' : 'items-start'}`}>
            <span 
              className="text-[#FCA311] font-bold tracking-widest text-xs md:text-sm block uppercase font-[Inter]"
            >
              {isRtl ? 'آمووی ترول' : 'AMOVI TRAVEL'}
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-[46px] xl:text-[48px] font-extrabold leading-[1.2] text-white tracking-tight w-full"
              style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
            >
              {isRtl ? (
                <span className="whitespace-normal block w-full">
                  کشف زیبایی‌های <br />
                  <span className="text-[#FCA311]">ناشناخته افغانستان</span>
                </span>
              ) : (
                <>
                  Discover the <br />
                  Unseen Afghanistan
                </>
              )}
            </h1>
            
            <p 
              className="text-gray-200/90 text-sm md:text-[15px] max-w-md leading-relaxed font-light w-full"
              style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
            >
              {isRtl 
                ? 'سفری فراتر از زمان به قلب مناظر بکر، فرهنگ غنی و تاریخ اصیل که برای همیشه در یاد شما تکرار خواهد شد.' 
                : 'Journey beyond the ordinary and discover Afghanistan through unforgettable landscapes, culture, history and authentic experiences.'}
            </p>
          </div>

          {/* 🔴 دکمه مشاهده تورها - تراز شده دقیقاً بر اساس لبه‌ی پایانی خط افقی متن بالایی خود در حالت فارسی */}
          <div className={`flex w-full ${isRtl ? 'justify-start' : 'justify-start'} pt-1`}>
            <button 
              onClick={() => {
                document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 bg-[#FCA311] hover:bg-[#e08f0a] text-[#14213D] font-extrabold px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-[#FCA311]/10 group text-xs tracking-wider uppercase cursor-pointer font-[Inter]"
            >
              <span>{isRtl ? 'مشاهده تورها' : 'Explore Tours'}</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* 🔴 ۴. بخش کلاژ تصاویر دایره‌ای - کاملاً ریسپانسیو شده برای تبلت و موبایل بدون دستکاری تنظیمات و تداخل دسکتاپ شما */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative min-h-[380px] sm:min-h-[500px] lg:min-h-[580px] -mt-10">
          {/* کانتینر اصلی کلاژ دارای ابعاد متغیر بر اساس اندازه صفحه است */}
          <div className="relative w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] lg:w-[550px] lg:h-[550px] mr-0">
            
            {/* دایره بزرگ پایه در بالا */}
            <div className="absolute w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border-4 lg:border-[6px] border-[#FCA311] overflow-hidden shadow-2xl z-10 top-6 right-4 sm:right-8 hover:scale-105 transition-transform duration-500">
              <img 
                src={heroMain} 
                alt="Main Luxury View" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* دایره متوسط سمت چپ */}
            <div className="absolute w-[150px] h-[150px] sm:w-[215px] sm:h-[215px] lg:w-[270px] lg:h-[270px] rounded-full border-4 lg:border-[6px] border-[#FCA311] overflow-hidden shadow-2xl z-20 bottom-0 left-2 sm:left-6 hover:scale-105 transition-transform duration-500">
              <img 
                src={heroTop} 
                alt="Top Experience" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* دایره کوچک سمت راست بالا */}
            <div className="absolute w-[115px] h-[115px] sm:w-[165px] sm:h-[165px] lg:w-[210px] lg:h-[210px] rounded-full border-4 lg:border-[6px] border-[#FCA311] overflow-hidden shadow-2xl z-30 bottom-10 sm:bottom-16 -right-4 sm:-right-8 lg:-right-12 hover:scale-105 transition-transform duration-500">
              <img 
                src={heroBottom} 
                alt="Bottom Experience" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
