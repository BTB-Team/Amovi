import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLangStore } from "../../store/useLangStore";

// لود فیزیکی فایل لوگوی رسمی شما
import amoviLogo from "../../assets/images/logo.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentLang, switchLanguage, translations } = useLangStore();
  const isRtl = currentLang === "fa";

  // ناوبری کاملاً پویا منطبق بر تغییر زبان
  const navigation = [
    { name: translations.home || (isRtl ? "صفحه اصلی" : "Home"), path: "/" },
    { name: translations.about || (isRtl ? "درباره ما" : "About Us"), path: "/about" },
    { name: translations.services || (isRtl ? "خدمات" : "Services"), path: "/services" },
    { name: translations.destinations || (isRtl ? "مقاصد" : "Destinations"), path: "/destinations" },
    { name: translations.tours || (isRtl ? "تورها" : "Tours"), path: "/tours" },
    { name: translations.blog || (isRtl ? "بلاگ" : "Blog"), path: "/blog" },
  ];

  const handleLanguageToggle = () => {
    switchLanguage(currentLang === "en" ? "fa" : "en");
  };

  return (
    <header className="sticky top-4 z-50 w-[96%] max-w-[1600px] mx-auto border border-slate-200 bg-white text-[#14213D] rounded-2xl shadow-xl transition-all duration-300">
      <div className={`flex h-16 sm:h-20 w-full items-center justify-between px-4 sm:px-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
        
        {/* ========================================== BRAND & LOGO (کاملاً داینامیک و چندزبانه) ========================================== */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
          <img 
            src={amoviLogo} 
            alt="Amovi Travel Logo" 
            className="h-8 sm:h-12 w-auto object-contain rounded-xl border border-white/20 shadow-sm"
          />
          <div>
            <span 
              className="block text-[12px] sm:text-[18px] font-extrabold leading-tight tracking-wide text-[#14213D]"
              style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}
            >
              {isRtl ? "آمووی ترول" : "Amovi Travel"}
            </span>
            <span 
              className="block text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-[#FCA311]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {isRtl ? "کشف زیبایی‌های ناشناخته" : "Explore Afghanistan"}
            </span>
          </div>
        </Link>

        {/* ========================================== DESKTOP NAVIGATION ========================================== */}
        <nav className={`hidden items-center gap-6 lg:flex xl:gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {navigation.map((item) => (
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

        {/* ========================================== ACTIONS ========================================== */}
        <div className={`flex items-center gap-1.5 sm:gap-4 shrink-0 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* 🌐 دکمه سوئیچ زبان متصل به استور */}
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

          {/* 🔴 دکمه دسکتاپ تماس با ما (کاملاً داینامیک و متصل به استور ترجمه) */}
          <Link
            to="/contact"
            className="hidden lg:flex h-10 items-center justify-center gap-2 rounded-full bg-[#FCA311] px-6 text-sm font-bold text-[#14213D] shadow-md hover:bg-amber-500 hover:gap-3 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
              {translations.contact || (isRtl ? "تماس با ما" : "Contact Us")}
            </span>
            <ArrowRight size={15} strokeWidth={2.5} className={`mt-0.5 ${isRtl ? 'rotate-180' : ''}`} />
          </Link>

          {/* دکمه منوی موبایل */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-[#14213D] bg-white lg:hidden cursor-pointer shadow-sm"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* ========================================== MOBILE DROPDOWN MENU ========================================== */}
      <div className={`overflow-hidden bg-white rounded-b-2xl border-t border-slate-100 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 pt-2">
          <nav className="flex flex-col">
            {navigation.map((item) => (
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
          <div className="mt-4 flex w-full">
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#FCA311] text-[#14213D] font-bold w-full text-center shadow-md justify-items-center"
            >
              <span style={{ fontFamily: isRtl ? 'Sahel, sans-serif' : 'Inter, sans-serif' }}>
                {translations.contact || (isRtl ? "تماس با ما" : "Contact Us")}
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