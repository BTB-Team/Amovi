import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLangStore } from "../../store/useLangStore";

// لود فیزیکی فایل لوگوی رسمی شما
import amoviLogo from "../../assets/images/logo.JPG";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentLang, switchLanguage, translations } = useLangStore();

  const navigation = [
    { name: translations.home || "Home", path: "/" },
    { name: translations.about || "About Us", path: "/about" },
    { name: translations.services || "Services", path: "/services" },
    { name: translations.destinations || "Destinations", path: "/destinations" },
    { name: translations.tours || "Tours", path: "/tours" },
    { name: translations.blog || "Blog", path: "/blog" },
  ];

  const handleLanguageToggle = () => {
    switchLanguage(currentLang === "en" ? "fa" : "en");
  };

  return (
    <header className="sticky top-4 z-50 w-[96%] max-w-[1600px] mx-auto border border-white/30 bg-white/30 backdrop-blur-2xl text-[var(--color-amovi-navy)] rounded-2xl shadow-xl transition-all duration-300">
      <div className="flex h-16 sm:h-20 w-full items-center justify-between px-4 sm:px-8">
        
        {/* ========================================== BRAND & LOGO ========================================== */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <img 
            src={amoviLogo} 
            alt="Amovi Travel Logo" 
            className="h-8 sm:h-12 w-auto object-contain rounded-xl border border-white/20 shadow-sm"
          />
          <div>
            <span className="block text-[12px] sm:text-[18px] font-extrabold leading-tight tracking-wide text-[var(--color-amovi-navy)]">
              Amovi Travel
            </span>
            <span className="block text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--color-amovi-gold)]">
              Explore Afghanistan
            </span>
          </div>
        </Link>

        {/* ========================================== DESKTOP NAVIGATION ========================================== */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => [
                "relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-200",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[var(--color-amovi-gold)] after:transition-all after:duration-200",
                isActive ? "text-[var(--color-amovi-gold)] after:w-full" : "text-[var(--color-amovi-navy)] hover:text-[var(--color-amovi-gold)] after:w-0",
              ].join(" ")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* ========================================== ACTIONS ========================================== */}
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
          {/* 🌐 دکمه سوئیچ زبان متصل به استور */}
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="flex h-8 sm:h-10 items-center gap-1 rounded-full border border-slate-200 bg-white px-2 sm:px-4 text-[10px] sm:text-xs font-bold text-[var(--color-amovi-navy)] shadow-md hover:border-[var(--color-amovi-gold)] transition duration-200 cursor-pointer"
          >
            <Globe size={12} className="text-[var(--color-amovi-navy)] opacity-90 shrink-0" strokeWidth={2} />
            <span className={currentLang === "en" ? "text-[var(--color-amovi-gold)]" : "text-slate-500"}>EN</span>
            <span className="text-[var(--color-amovi-navy)] font-extrabold text-sm mx-0.5 select-none">/</span>
            <span className={currentLang === "fa" ? "text-[var(--color-amovi-gold)]" : "text-slate-500"}>دری</span>
          </button>

          {/* دکمه دسکتاپ تماس با ما */}
          <Link
            to="/contact"
            className="hidden lg:flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-amovi-gold)] px-6 text-sm font-bold text-[var(--color-amovi-navy)] shadow-md hover:bg-amber-500 hover:gap-3 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{translations.contact || "Contact Us"}</span>
            <ArrowRight size={15} strokeWidth={2.5} className="mt-0.5" />
          </Link>

          {/* دکمه سه خط منوی موبایل */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-[var(--color-amovi-navy)] bg-white lg:hidden cursor-pointer shadow-sm"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* ========================================== MOBILE DROPDOWN MENU ========================================== */}
      <div className={`overflow-hidden bg-white/95 rounded-b-2xl border-t border-slate-100 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 pt-2">
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => [
                  "border-b border-slate-100 py-3.5 text-[15px] font-semibold transition-colors duration-200",
                  isActive ? "text-[var(--color-amovi-gold)]" : "text-[var(--color-amovi-navy)] hover:text-[var(--color-amovi-gold)]",
                ].join(" ")}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4">
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-amovi-gold)] text-[var(--color-amovi-navy)] font-bold w-full text-center shadow-md"
            >
              <span>{translations.contact || "Contact Us"}</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;