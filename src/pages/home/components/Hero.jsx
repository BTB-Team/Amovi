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
    <section className="relative w-full h-[95vh] min-h-[720px] sm:min-h-[800px] md:min-h-[750px] max-h-[950px] flex flex-col justify-center overflow-hidden bg-[#14213D]" dir="ltr">
      
      {/* ۱. نوبار شناور با فاصله از سقف مرورگر */}
      <div className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 md:px-8 pointer-events-none">
        <div className="max-w-[1220px] mx-auto w-full pointer-events-auto">
          <Header />
        </div>
      </div>

      {/* تصویر پس‌زمینه سراسری - در حالت دری عکس فلیپ می‌شود */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ${isRtl ? 'scale-x-[-1]' : ''}`}
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* ۲. لایه گرادینت سرمه‌ای تیره هوشمند */}
      <div className={`absolute inset-y-0 w-full md:w-[55%] z-10 pointer-events-none transition-all duration-500
        ${isRtl 
          ? 'right-0 left-auto bg-gradient-to-l from-[#14213D]/95 via-[#14213D]/75 to-transparent' 
          : 'left-0 right-auto bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/75 to-transparent'
        }`} 
      />

      {/* ۳. کانتینر اصلی محتوا با عرض دقیق ۱۲۲۰ پیکسل */}
      <div className="w-full max-w-[1220px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 lg:gap-8 items-center relative z-20 h-full pt-24 pb-12 md:py-0 text-left" dir="ltr">
        
        {/* 🔴 بخش متن هیرو */}
        <div 
          className={`w-full md:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 lg:-mt-6 
            ${isRtl ? 'md:order-2 items-stretch text-right' : 'md:order-1 items-start text-left'}`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div className={`space-y-2 sm:space-y-3 flex flex-col w-full ${isRtl ? 'items-stretch' : 'items-start'}`}>
            <span className="text-[#FCA311] font-bold tracking-widest text-xs md:text-sm block uppercase font-[Inter]">
              {isRtl ? 'آمووی ترول' : 'AMOVI TRAVEL'}
            </span>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-[36px] lg:text-[46px] xl:text-[48px] font-extrabold leading-[1.25] sm:leading-[1.2] text-white tracking-tight w-full"
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
              className="text-gray-200/90 text-xs sm:text-sm md:text-[14px] lg:text-[15px] max-w-xs sm:max-w-md leading-relaxed font-light w-full"
              style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
            >
              {isRtl 
                ? 'سفری فراتر از زمان به قلب مناظر بکر، فرهنگ غنی و تاریخ اصیل که برای همیشه در یاد شما تکرار خواهد شد.' 
                : 'Journey beyond the ordinary and discover Afghanistan through unforgettable landscapes, culture, history and authentic experiences.'}
            </p>
          </div>

          {/* دکمه مشاهده تورها */}
          <div className="flex pt-1">
            <button 
              onClick={() => {
                document.getElementById('featured-tours')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 bg-[#FCA311] hover:bg-[#e08f0a] text-[#14213D] font-extrabold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 shadow-md shadow-[#FCA311]/10 group text-xs tracking-wider uppercase cursor-pointer font-[Inter]"
            >
              <span>{isRtl ? 'مشاهده تورها' : 'Explore Tours'}</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* 🔴 ۴. بخش کلاژ تصاویر دایره‌ای - ارتقای ابعاد و ایجاد فاصله ایمن از لبه‌ها در تبلت و موبایل */}
        <div className={`w-full md:col-span-6 flex items-center relative mt-4 md:mt-0 lg:mt-12 pb-6 md:pb-0
          ${isRtl ? 'md:order-1 justify-start' : 'md:order-2 justify-end'}`}
        >
          {/* کانتینر اصلی کلاژ: دایره‌ها در موبایل (۳۲۵ تا ۴۲۵) بزرگ‌تر و با فاصله بیشتر از لبه‌ها (px-4) و در تبلت فیکس دسکتاپ هستند */}
          <div className="relative mx-auto md:mx-0 w-[290px] h-[290px] xs:w-[320px] xs:h-[320px] sm:w-[410px] sm:h-[410px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px] xl:w-[550px] xl:h-[550px]">
            
            {/* دایره بزرگ پایه در بالا */}
            <div className={`absolute w-[190px] h-[190px] sm:w-[280px] sm:h-[280px] md:w-[250px] md:h-[250px] lg:w-[330px] lg:h-[330px] xl:w-[380px] xl:h-[380px] rounded-full border-4 lg:border-[6px] border-[#FCA311] overflow-hidden shadow-2xl z-10 top-4 transition-all duration-500
              ${isRtl ? 'left-2 sm:left-8' : 'right-2 sm:right-8'}`}
            >
              <img src={heroMain} alt="Main Luxury View" className="w-full h-full object-cover" />
            </div>

            {/* دایره متوسط سمت چپ */}
            <div className={`absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] xl:w-[270px] xl:h-[270px] rounded-full border-4 lg:border-[6px] border-[#FCA311] overflow-hidden shadow-2xl z-20 bottom-2 transition-all duration-500
              ${isRtl ? 'right-2 sm:right-6' : 'left-2 sm:left-6'}`}
            >
              <img src={heroTop} alt="Top Experience" className="w-full h-full object-cover" />
            </div>

            {/* دایره کوچک رویی */}
            <div className={`absolute w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[210px] xl:h-[210px] rounded-full border-4 lg:border-[6px] border-[#FCA311] overflow-hidden shadow-2xl z-30 bottom-10 transition-all duration-500
              ${isRtl ? 'left-0 sm:-left-2' : '-right-2 sm:-right-8 xl:-right-12'}`}
            >
              <img src={heroBottom} alt="Bottom Experience" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
