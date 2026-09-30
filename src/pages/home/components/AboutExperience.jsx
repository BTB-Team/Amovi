import React from 'react';
import { Link } from "react-router-dom";

// ایمپورت کردن تصاویر پروژه
import about1 from '../../../assets/images/about-2.webp';
import about2 from '../../../assets/images/about-1.webp';

export default function AboutExperience({ currentLang }) {
  const isRtl = currentLang === 'fa';

  return (
    // رنگ فولادی مات و شیک تمپلت (bg-[#E5E5E5]) با پدینگ‌های منسجم
    <section className="w-full py-10 md:py-14 bg-[#E5E5E5] text-[#14213D] overflow-hidden flex items-center justify-center">
      
      {/* کانتینر اصلی با عرض دقیق ۱۲۲۰ پیکسل استاندارد پروژه */}
      <div className={`w-full max-w-[1220px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-4 lg:gap-12 items-center h-full ${isRtl ? 'md:flex-row-reverse' : ''}`}>
        
        {/* 🔴 بخش کلاژ تصاویر */}
        <div 
          className={`w-full md:col-span-6 flex items-center relative pb-6 md:pb-0
          ${isRtl ? 'md:order-2 justify-start' : 'md:order-1 justify-end'}`} 
          dir="ltr"
        >
          
          {/* کانتینر کلاژ تصاویر */}
          <div className="relative w-[280px] h-[200px] xs:w-[310px] xs:h-[220px] sm:w-[410px] sm:h-[280px] md:w-[350px] md:h-[250px] lg:w-[450px] lg:h-[310px] xl:w-[490px] xl:h-[330px]">

            {/* =====================================================
                SVG عکس بزرگ
                بریدگی پله‌ای + تمام گوشه‌ها گرد
            ====================================================== */}
            <svg 
              className="absolute w-0 h-0"
              aria-hidden="true"
            >
              <defs>
                <clipPath
                  id="aboutExperienceRoundedClip"
                  clipPathUnits="objectBoundingBox"
                >
                  <path
                    d="
                      M 0.075 0

                      H 0.715

                      Q 0.760 0 0.760 0.045
                      V 0.095

                      Q 0.760 0.140 0.805 0.140
                      H 0.945

                      Q 1 0.140 1 0.195
                      V 0.945

                      Q 1 1 0.945 1
                      H 0.075

                      Q 0 1 0 0.925
                      V 0.075

                      Q 0 0 0.075 0

                      Z
                    "
                  />
                </clipPath>
              </defs>
            </svg>

            {/* =====================================================
                تصویر بزرگ
                بریدگی پله‌ای با گوشه‌های نرم
            ====================================================== */}
            <div 
              className="
                absolute
                w-[86%]
                h-[92%]
                top-0
                left-0
                overflow-hidden
                shadow-sm
                bg-slate-200
                hover:scale-[1.01]
                transition-transform
                duration-500
              "
              style={{
                clipPath: 'url(#aboutExperienceRoundedClip)',
                WebkitClipPath: 'url(#aboutExperienceRoundedClip)'
              }}
            >
              <img 
                src={about1} 
                alt="Afghanistan Landscapes" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* =====================================================
                تصویر دوم - عکس جلو
            ====================================================== */}
            <div 
              className="
                absolute
                w-[44%]
                h-[56%]
                rounded-2xl
                overflow-hidden
                shadow-md
                border-[5px]
                border-white
                bottom-0
                right-0
                sm:right-2
                hover:scale-103
                transition-transform
                duration-500
                z-20
                bg-slate-300
              "
            >
              <img 
                src={about2} 
                alt="Afghanistan History" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* 🔴 ستون متون و داستان برند */}
        <div 
          className={`w-full md:col-span-6 flex flex-col justify-center space-y-4 ${
            isRtl 
              ? 'md:order-1 items-end text-right' 
              : 'md:order-2 items-start text-left'
          }`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div 
            className={`space-y-3 flex flex-col w-full ${
              isRtl ? 'items-stretch' : 'items-start'
            }`}
          >
            
            {/* بچ زرد بالای تیتر */}
            <div className={`flex w-full ${
              isRtl ? 'justify-start' : 'justify-start'
            }`}>
              <span 
                className="
                  inline-block
                  bg-[#FCA311]
                  text-white
                  text-[10px]
                  sm:text-xs
                  font-bold
                  tracking-widest
                  px-3
                  py-1
                  rounded-md
                  font-[Inter]
                  uppercase
                "
              >
                {isRtl ? 'تجربه‌ی ما' : 'OUR EXPERIENCE'}
              </span>
            </div>
            
            {/* تیتر اصلی */}
            <h2 
              className="
                text-2xl
                sm:text-3xl
                lg:text-[38px]
                font-extrabold
                leading-[1.2]
                text-[#14213D]
                tracking-tight
                w-full
              "
              style={{ 
                fontFamily: isRtl 
                  ? 'Sahel, sans-serif' 
                  : 'Inter, sans-serif' 
              }}
            >
              {isRtl ? (
                <>سفری فراتر از <br /> یک تجربه‌ی معمولی</>
              ) : (
                <>Travel Beyond <br /> the Ordinary</>
              )}
            </h2>
            
            {/* کپشن لوکس مینیمال */}
            <p 
              className="
                text-slate-600
                text-xs
                sm:text-sm
                md:text-[14px]
                leading-relaxed
                font-normal
                max-w-xs
                sm:max-w-md
                lg:max-w-xl
                w-full
              "
              style={{ 
                fontFamily: isRtl 
                  ? 'Sahel, sans-serif' 
                  : 'Inter, sans-serif' 
              }}
            >
              {isRtl 
                ? 'آمووی ترول مسافران را از طریق سفرهایی که با دقت و ظرافت طراحی شده‌اند، به تاریخ، فرهنگ و مناظر بی‌نظیر افغانستان متصل می‌کند.' 
                : 'Amovi Travel connects travelers with the history, culture and landscapes of Afghanistan through thoughtfully designed experiences.'
              }
            </p>
          </div>

          {/* 🔴 دکمه اختصاصی متصل به صفحه درباره ما */}
          <div className={`flex w-full ${
            isRtl ? 'justify-start' : 'justify-start'
          } pt-1`}>
            <Link 
              to="/about" 
              className="
                group
                flex
                items-center
                gap-2.5
                text-[#14213D]
                hover:text-[#FCA311]
                font-bold
                text-xs
                sm:text-sm
                tracking-wide
                transition-colors
                duration-300
                font-[Inter]
              "
              style={{ 
                fontFamily: isRtl 
                  ? 'Sahel, sans-serif' 
                  : 'Inter, sans-serif' 
              }}
            >
              {/* دایره زرد حروف AT */}
              <div 
                className="
                  w-5
                  h-5
                  rounded-full
                  bg-[#FCA311]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[9px]
                  font-black
                  shadow-sm
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  shrink-0
                "
              >
                AT
              </div>

              <span className="flex items-center gap-1.5 transition-colors duration-200">
                {isRtl ? 'کشف داستان ما' : 'Discover Our Story'} 

                <span 
                  className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${
                    isRtl ? 'rotate-180' : ''
                  }`}
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}