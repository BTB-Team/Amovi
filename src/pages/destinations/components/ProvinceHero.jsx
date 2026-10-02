import { MapPin } from 'lucide-react';

export default function ProvinceHero({ province, localData, isRtl }) {
  return (
    /* 👑 هیرو با قد عمیق، هماهنگ با لایه زدایندکس و مارجین منفی جهت اتصال به سقف */
    <section className="w-[100%] max-w-[1600px] mx-auto relative h-[95vh] md:h-[88vh] overflow-hidden shadow-2xl group z-0 -mt-24 sm:-mt-28 bg-black">
      
      {/* ۱. عکس پس‌زمینه پانورامیک (تضمین لود کامل) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={province.images?.hero_cover} 
          alt={localData?.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* گرادینت کف برای رسپانسیو موبایل */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent md:hidden" />
      </div>

      {/* ۲. 👑 لایه گرادینت تیره عمیق دوزبانه (اصلاح شده با کدهای رنگی بومی سیستم برای ایجاد شفافیت واقعی) */}
      <div 
        className={`absolute inset-0 z-10 pointer-events-none w-full h-full hidden md:block ${
          isRtl 
            ? 'bg-gradient-to-l from-black via-black/60 to-transparent' 
            : 'bg-gradient-to-r from-black via-black/60 to-transparent'
        }`}
      />

      {/* ۳. باکس متنی قفل‌شده به کف هیرو با فواصل کاملاً مستقل و پویا */}
      <div 
        className={`absolute bottom-8 sm:bottom-16 md:bottom-[8vh] z-20 w-full max-w-3xl px-6 sm:px-12 md:px-16 ${
          isRtl ? 'right-0 text-right' : 'left-0 text-left'
        }`}
      >
        
        {/* بج طلایی بالایی */}
        <span className="text-amovi-gold text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-2 block">
          {isRtl ? "ولایت" : "Province"}
        </span>

        {/* عنوان بزرگ طلایی کابل */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amovi-gold leading-tight mb-3 drop-shadow-md"
          style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
        >
          {localData?.name}
        </h1>

        {/* شعار ولایت */}
        <p 
          className="text-white text-lg sm:text-xl font-medium mb-4 opacity-95 tracking-wide max-w-xl"
          style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
        >
          {localData?.tagline}
        </p>

        {/* معرفی کوتاه چند خطی کابل */}
        <p 
          className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed mb-8 opacity-85 line-clamp-4 md:line-clamp-none max-w-2xl"
          style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
        >
          {localData?.intro}
        </p>

        {/* دکمه اکشن هدایت به بخش فیلترینگ زیرین */}
        <div className="flex">
          <button 
            type="button"
            onClick={() => {
              const targetSection = document.getElementById("explore-hub");
              if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-3 bg-amovi-gold hover:bg-amber-500 text-amovi-navy font-extrabold py-3.5 px-8 rounded-full shadow-lg transition-all duration-300 transform active:scale-[0.98] cursor-pointer hover:gap-4 pointer-events-auto"
          >
            <span style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
              {isRtl ? "مشاهده جاهای دیدنی" : "Explore Sights"}
            </span>
            <span className={`text-base font-bold transition-transform duration-200 ${isRtl ? 'rotate-180' : ''}`}>+</span>
          </button>
        </div>

      </div>
    </section>
  );

}
