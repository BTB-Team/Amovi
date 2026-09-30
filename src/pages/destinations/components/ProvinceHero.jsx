import { MapPin } from 'lucide-react';

export default function ProvinceHero({ province, localData, isRtl }) {
  return (
    <section className="w-[96%] max-w-[1600px] mx-auto mt-6 relative h-[65vh] sm:h-[75vh] rounded-3xl overflow-hidden shadow-2xl group">
      
      {/* عکس پانورامیک پس‌زمینه و لایه تیره لوکس */}
      <div className="absolute inset-0">
        <img 
          src={province.images?.hero_cover} 
          alt={localData?.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent md:bg-gradient-to-r md:from-[#000000]/90 md:via-[#000000]/40 md:to-transparent" />
      </div>

      {/* کانتینر متنی تراز شده بر اساس جهت زبان صفحه */}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 sm:p-12 md:p-16 z-10 max-w-3xl ${isRtl ? 'ml-auto text-right md:bg-gradient-to-l md:from-[#000000]/90 md:via-[#000000]/40 md:to-transparent' : 'mr-auto text-left'}`}>
        
        {/* بج طلایی بالایی */}
        <span className="text-amovi-gold text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-2 block">
          {isRtl ? "ولایت" : "Province"}
        </span>

        {/* عنوان بزرگ طلایی */}
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

        {/* معرفی کوتاه چند خطی */}
        <p 
          className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed mb-8 opacity-85 line-clamp-3 md:line-clamp-none"
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
            className="flex items-center gap-3 bg-amovi-gold hover:bg-amber-500 text-amovi-navy font-extrabold py-3.5 px-8 rounded-full shadow-lg transition-all duration-300 transform active:scale-[0.98] cursor-pointer hover:gap-4"
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
