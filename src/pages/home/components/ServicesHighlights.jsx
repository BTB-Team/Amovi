import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Compass, Car, Hotel, MapPin, Sliders } from 'lucide-react';

export default function ServicesHighlights({ currentLang }) {
  const isRtl = currentLang === 'fa';

  // نقشه‌برداری دقیق آیکون‌های لوسید مطابق با دایره‌های نارنجی تمپلت شما
  const iconMap = {
    Visa: <Landmark className="w-5 h-5 text-white" />,
    Tour: <Compass className="w-5 h-5 text-white" />,
    Transport: <Car className="w-5 h-5 text-white" />,
    Accommodation: <Hotel className="w-5 h-5 text-white" />,
    Guide: <MapPin className="w-5 h-5 text-white" />,
    Custom: <Sliders className="w-5 h-5 text-white" />,
  };

  // ساختار استاتیک متون خدمات دقیقاً منطبق بر عکس تمپلت با پشتیبانی کامل از دو زبان
  const amoviServices = [
    {
      id: "visa-service",
      iconKey: "Visa",
      title_en: "Visa Assistance",
      title_fa: "تسهیلات اخذ ویزا",
      desc_en: "Simplify your visa process with expert support.",
      desc_fa: "ساده‌سازی کامل فرآیند اخذ ویزای افغانستان با پشتیبانی کارشناسان مجرب ما.",
      path: "/contact"
    },
    {
      id: "packages-service",
      iconKey: "Tour",
      title_en: "Tour Packages",
      title_fa: "پکیج‌های مسافرتی",
      desc_en: "Curated tours for unforgettable experiences.",
      desc_fa: "تورهای برنامه‌ریزی شده و اختصاصی برگزیده برای خلق تجربه‌های فراموش‌نشدنی.",
      path: "/tours"
    },
    {
      id: "transport-service",
      iconKey: "Transport",
      title_en: "Transportation",
      title_fa: "حمل و نقل پرمیوم",
      desc_en: "Safe and comfortable travel arrangements.",
      desc_fa: "جابه‌جایی ایمن، لوکس و مطمئن با خودروهای VIP در طول تمام مسیرهای سفر.",
      path: "/services"
    },
    {
      id: "accommodation-service",
      iconKey: "Accommodation",
      title_en: "Accommodation",
      title_fa: "رزرو اقامتگاه",
      desc_en: "Quality stays at the best locations.",
      desc_fa: "اقامت در برترین، امن‌ترین و باکیفیت‌ترین هتل‌ها و بوم‌گردی‌های هر ولایت.",
      path: "/services"
    },
    {
      id: "guide-service",
      iconKey: "Guide",
      title_en: "Guide Services",
      title_fa: "راهنمایان متخصص",
      desc_en: "Local experts for authentic experiences.",
      desc_fa: "همراهی کارشناسان و راهنمایان بومی برای لمس اصالت، تاریخ و فرهنگ واقعی.",
      path: "/services"
    },
    {
      id: "custom-service",
      iconKey: "Custom",
      title_en: "Custom Trips",
      title_fa: "سفرهای سفارشی",
      desc_en: "Tailored journeys for your unique interests.",
      desc_fa: "طراحی کاملاً اختصاصی و منعطف مسیر سفر بر اساس علایق و بودجه خاص شما.",
      path: "/contact"
    }
  ];

  return (
    /* 🔴 بخش اصلی سکشن مجهز به شناسه id جهت فعال شدن اسکرول نرم دکمه هیرو */
    <section id="featured-tours" className="w-full py-14 sm:py-16 bg-[#F4F6F9] text-[#14213D] flex items-center justify-center">
      {/* کانتینر اصلی با کادر دقیق ۱۲۲۰ پیکسل استاندارد پروژه */}
      <div className="w-full max-w-[1220px] mx-auto px-6 md:px-8 space-y-12">
        
        {/* ==================== هدر سکشن خدمات (عیناً مطابق عکس تمپلت) ==================== */}
        <div className="w-full flex flex-col items-center text-center space-y-2">
          <span className="text-[#FCA311] text-[10px] sm:text-xs font-bold tracking-widest uppercase font-[Inter]">
            {isRtl ? "خدمات برتر ما" : "OUR SERVICES"}
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#14213D] leading-tight tracking-tight max-w-xl"
            style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRtl ? "هر آنچه برای یک سفر مطمئن نیاز دارید" : "Everything You Need to Travel With Confidence"}
          </h2>
        </div>

        {/* ==================== گرید کارت‌های ۶گانه خدمات ==================== */}
        {/* ریسپانسیو اختصاصی: در عرض‌های بحرانی ۳۲۵پیکسل به صورت تک‌ستونه، در موبایل‌های استاندارد ۲ستونه و از تبلت به بالا کاملاً ۳ ستونه تراز می‌شود */}
        <div 
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {amoviServices.map((service) => (
            <div 
              key={service.id} 
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-100/80 hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 hover:-translate-y-1 ${isRtl ? 'text-right' : 'text-left'}`}
            >
              <div className="space-y-4">
                {/* دایره نارنجی دکوراتیو آیکون‌ها عینا مطابق تمپلت */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCA311] shadow-md shadow-[#FCA311]/20 shrink-0">
                  {iconMap[service.iconKey] || <Compass className="w-5 h-5 text-white" />}
                </div>

                <div className="space-y-2">
                  <h3 
                    className="text-lg font-bold text-[#14213D] tracking-wide"
                    style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
                  >
                    {isRtl ? service.title_fa : service.title_en}
                  </h3>
                  <p 
                    className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal"
                    style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
                  >
                    {isRtl ? service.desc_fa : service.desc_en}
                  </p>
                </div>
              </div>

              {/* لینک Explore همراه با آیکون فلش ظریف طبق عکس تمپلت شما */}
              <div className="pt-5">
                <Link 
                  to={service.path}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#14213D] hover:text-[#FCA311] transition-colors duration-200 font-[Inter]"
                >
                  <span className="border-b border-transparent group-hover:border-[#14213D]/30 pb-0.5">
                    {isRtl ? "کشف بیشتر" : "Explore"}
                  </span>
                  <span className={`inline-block transition-transform duration-200 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`}>
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
