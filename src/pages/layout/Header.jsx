import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe, ArrowRight, ChevronDown } from "lucide-react";
import { useLangStore } from "../../store/useLangStore";

// لود فایل لوگوی رسمی
import amoviLogo from "../../assets/images/logo.png";

// لیست ثابت ۱۰ ولایت افغانستان برای منوی دراپ‌داون
const provincesList = [
  { slug: "kabul", en: "Kabul", fa: "کابل" },
  { slug: "herat", en: "Herat", fa: "هرات" },
  { slug: "balkh", en: "Balkh", fa: "بلخ" },
  { slug: "bamyan", en: "Bamyan", fa: "بامیان" },
  { slug: "kandahar", en: "Kandahar", fa: "کندهار" },
  { slug: "nangarhar", en: "Nangarhar", fa: "ننگرهار" },
  { slug: "badakhshan", en: "Badakhshan", fa: "بدخشان" },
  { slug: "panjshir", en: "Panjshir", fa: "پنجشیر" },
  { slug: "ghazni", en: "Ghazni", fa: "غزنی" },
  { slug: "samangan", en: "Samangan", fa: "سمنگان" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [desktopDestOpen, setDesktopDestOpen] = useState(false);

  const { currentLang, switchLanguage, translations } = useLangStore();
  const isRtl = currentLang === "fa";

  // ناوبری کاملاً پویا منطبق بر تغییر زبان
  const navigation = [
    { name: translations.nav?.home || (isRtl ? "صفحه اصلی" : "Home"), path: "/" },
    { name: translations.nav?.about || (isRtl ? "درباره ما" : "About Us"), path: "/about" },
    { name: translations.nav?.services || (isRtl ? "خدمات" : "Services"), path: "/services" },
    { name: translations.nav?.tours || (isRtl ? "تورها" : "Tours"), path: "/tours" },
    { name: translations.nav?.blog || (isRtl ? "بلاگ" : "Blog"), path: "/blog" },
  ];

  const handleLanguageToggle = () => {
    switchLanguage(currentLang === "en" ? "fa" : "en");
  };

  return (
    <header className="sticky top-4 z-50 w-[96%] max-w-[1600px] mx-auto border border-slate-200 bg-white text-[#14213D] rounded-2xl shadow-xl transition-all duration-300">
      <div className={`flex h-16 sm:h-20 w-full items-center justify-between px-4 sm:px-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
        
        {/* ========================================== BRAND & LOGO ========================================== */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
          <img 
            src={amoviLogo} 
            alt="Amovi Travel Logo" 
            className="h-8 sm:h-12 w-auto object-contain rounded-xl border border-white/20 shadow-sm"
          />
          <div>
            <span 
              className="block text-[12px] sm:text-[18px] font-extrabold leading-tight tracking-wide text-[#14213D]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Amovi Travel
            </span>
            <span 
              className="block text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-[#FCA311]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore Afghanistan
            </span>
          </div>
        </Link>

        {/* ========================================== DESKTOP NAVIGATION ========================================== */}
        <nav className={`hidden items-center gap-6 lg:flex xl:gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {navigation.slice(0, 3).map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => [
                "relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-200",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[#FCA311] after:transition-all after:duration-200",
                isActive ? "text-[#FCA311] after:w-full" : "text-[#14213D] hover:text-[#FCA311] after:w-0",
                isRtl ? "font-[Sahel]" : "font-[Inter]"
              ].join(" ")}
            >
              {item.name}
            </NavLink>
          ))}

          {/* 👑 PREMIUM DESTINATIONS INTERACTIVE STATE-DRIVEN DROPDOWN */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setDesktopDestOpen(true)}
            onMouseLeave={() => setDesktopDestOpen(false)}
          >
            <button 
              type="button"
              onClick={() => setDesktopDestOpen(!desktopDestOpen)}
              className={`flex items-center gap-1 text-[14px] font-semibold text-[#14213D] hover:text-[#FCA311] transition-colors duration-200 cursor-pointer ${isRtl ? 'font-[Sahel] flex-row-reverse' : 'font-[Inter]'}`}
            >
              <span>{translations.nav?.destinations || (isRtl ? "مقاصد" : "Destinations")}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 mt-0.5 ${desktopDestOpen ? 'rotate-180 text-[#FCA311]' : ''}`} />
            </button>

            {/* باکس شناور منوی ۲ ستونه با سایه لوکس ترکیبی */}
            <div 
              className={`absolute top-full min-w-[340px] bg-white border border-slate-100 p-4 rounded-2xl transition-all duration-200 z-50 ${isRtl ? 'right-0' : 'left-0'} ${
                desktopDestOpen 
                  ? "opacity-100 pointer-events-auto visible transform translate-y-0" 
                  : "opacity-0 pointer-events-none invisible transform translate-y-2"
              }`}
              style={{ 
                boxShadow: '0 20px 40px -15px rgba(20, 33, 61, 0.15), 0 0 50px -10px rgba(252, 163, 17, 0.08)' 
              }}
            >
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                {provincesList.map((prov) => (
                  <Link
                    key={prov.slug}
                    to={`/destinations/${prov.slug}`}
                    onClick={() => setDesktopDestOpen(false)}
                    className={`p-2.5 rounded-xl text-[#14213D] hover:bg-slate-50 hover:text-[#FCA311] transition-all duration-150 ${isRtl ? 'text-right font-[Sahel]' : 'text-left font-[Inter]'}`}
                  >
                    {isRtl ? prov.fa : prov.en}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navigation.slice(3).map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => [
                "relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-200",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[#FCA311] after:transition-all after:duration-200",
                isActive ? "text-[#FCA311] after:w-full" : "text-[#14213D] hover:text-[#FCA311] after:w-0",
                isRtl ? "font-[Sahel]" : "font-[Inter]"
              ].join(" ")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        {/* ========================================== GLOBAL ACTIONS ========================================== */}
        <div className={`flex items-center gap-1.5 sm:gap-4 shrink-0 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* سوئیچ زبان دسکتاپ/موبایل متصل به استور زوشتند */}
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="flex h-8 sm:h-10 items-center gap-1 rounded-full border border-slate-200 bg-white px-2 sm:px-4 text-[10px] sm:text-xs font-bold text-[#14213D] shadow-md hover:border-[#FCA311] transition duration-200 cursor-pointer"
          >
            <Globe size={12} className="text-[#14213D] opacity-90 shrink-0" strokeWidth={2} />
            <span className={currentLang === "en" ? "text-[#FCA311]" : "text-slate-500"}>EN</span>
            <span className="text-[#14213D] font-extrabold text-sm mx-0.5 select-none">/</span>
            <span className={currentLang === "fa" ? "text-[#FCA311]" : "text-slate-500"}>دری</span>
          </button>

          {/* دکمه تماس با ما دسکتاپ */}
          <Link
            to="/contact"
            className="hidden lg:flex h-10 items-center justify-center gap-2 rounded-full bg-[#FCA311] px-6 text-sm font-bold text-[#14213D] shadow-md hover:bg-amber-500 hover:gap-3 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
              {translations.nav?.contact || (isRtl ? "تماس با ما" : "Contact Us")}
            </span>
            <ArrowRight size={15} strokeWidth={2.5} className={`mt-0.5 ${isRtl ? 'rotate-180' : ''}`} />
          </Link>

          {/* دکمه بازشوی منوی همبرگر در حالت رسپانسیو موبایل */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-[#14213D] bg-white lg:hidden cursor-pointer shadow-sm"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* ========================================== MOBILE RESPONSIVE ACCORDION MENU ========================================== */}
      <div className={`overflow-hidden bg-white rounded-b-2xl border-t border-slate-100 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 pt-2">
          <nav className="flex flex-col">
            {/* رندر ۳ آیتم اول در منوی موبایل */}
            {navigation.slice(0, 3).map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => [
                  "border-b border-slate-100 py-3.5 text-[15px] font-semibold transition-colors duration-200",
                  isActive ? "text-[#FCA311]" : "text-[#14213D] hover:text-[#FCA311]",
                  isRtl ? "text-right font-[Sahel]" : "text-left font-[Inter]"
                ].join(" ")}
              >
                {item.name}
              </NavLink>
            ))}

            {/* آکاردئون کشویی مقاصد در موبایل با تراز بازشوی ۱۰۰٪ فیکس شده */}
            <div className="border-b border-slate-100 py-3.5">
              <button
                type="button"
                onClick={() => setMobileDestOpen(!mobileDestOpen)}
                className={`flex w-full items-center justify-between text-[15px] font-semibold text-[#14213D] ${isRtl ? 'flex-row-reverse font-[Sahel]' : 'font-[Inter]'}`}
              >
                <span>{translations.nav?.destinations || (isRtl ? "مقاصد" : "Destinations")}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDestOpen ? 'rotate-180 text-[#FCA311]' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 grid grid-cols-2 gap-2 mt-2 px-2 ${mobileDestOpen ? "max-h-[300px] opacity-100 py-2" : "max-h-0 opacity-0"}`}>
                {provincesList.map((prov) => (
                  <Link
                    key={prov.slug}
                    to={`/destinations/${prov.slug}`}
                    onClick={() => { setMobileMenuOpen(false); setMobileDestOpen(false); }}
                    className={`py-2 px-3 rounded-lg bg-slate-50 text-sm font-semibold text-slate-700 active:text-[#FCA311] ${isRtl ? 'text-right font-[Sahel]' : 'text-left font-[Inter]'}`}
                  >
                    {isRtl ? prov.fa : prov.en}
                  </Link>
                ))}
              </div>
            </div>

            {/* رندر آیتم‌های انتهایی در منوی موبایل */}
            {navigation.slice(3).map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => [
                  "border-b border-slate-100 py-3.5 text-[15px] font-semibold transition-colors duration-200",
                  isActive ? "text-[#FCA311]" : "text-[#14213D] hover:text-[#FCA311]",
                  isRtl ? "text-right font-[Sahel]" : "text-left font-[Inter]"
                ].join(" ")}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          {/* دکمه تماس با ما متصل به استور در انتهای منوی موبایل */}
          <div className="mt-4 flex w-full">
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#FCA311] text-[#14213D] font-bold w-full text-center shadow-md justify-center items-center"
            >
              <span style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
                {translations.nav?.contact || (isRtl ? "تماس با ما" : "Contact Us")}
              </span>
              <ArrowRight size={16} strokeWidth={2.5} className={isRtl ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

