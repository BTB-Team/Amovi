import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe2 } from "lucide-react";
import { useLangStore } from "../../store/useLangStore";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 🌐 متصل کردن هدر به موتور دوزبانه Zustand پروژه
  const { currentLang, switchLanguage, translations } = useLangStore();

  // آرایه پیوندها با متون پویا برگرفته از فایل‌های ترجمه locales
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#14213D]/95 backdrop-blur-xl text-white shadow-md">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* ================================================================ BRAND ================================================================= */}
        <Link to="/" onClick={closeMobileMenu} className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-amovi-gold)] text-sm font-extrabold text-[var(--color-amovi-navy)] shadow-md">
            A
          </div>
          <div className="hidden sm:block">
            <span className="block text-[18px] font-bold leading-tight tracking-wide">
              Amovi Travel
            </span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Travel & Experiences
            </span>
          </div>
        </Link>

        {/* ================================================================ DESKTOP NAVIGATION ================================================================= */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => [
                "relative py-2 text-[14px] font-medium transition-colors duration-200",
                "after:absolute after:bottom-0 after:left-1/2 after:h-[2px]",
                "after:-translate-x-1/2 after:rounded-full",
                "after:bg-[var(--color-amovi-gold)] after:transition-all after:duration-200",
                isActive ? "text-[var(--color-amovi-gold)] after:w-5" : "text-slate-200 hover:text-[var(--color-amovi-gold)] after:w-0",
              ].join(" ")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* ================================================================ DESKTOP ACTIONS ================================================================= */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* دکمه تغییر زبان متصل به Zustand */}
          <button
            type="button"
            onClick={handleLanguageToggle}
            aria-label="Switch language"
            className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-[#000000]/20 px-4 text-sm font-semibold text-white transition-all duration-200 hover:border-[var(--color-amovi-gold)] hover:text-[var(--color-amovi-gold)] cursor-pointer"
          >
            <Globe2 size={16} strokeWidth={1.8} />
            <span className={currentLang === "en" ? "text-[var(--color-amovi-gold)]" : "text-slate-300"}>EN</span>
            <span className="text-white/30">/</span>
            <span className={currentLang === "fa" ? "text-[var(--color-amovi-gold)]" : "text-slate-300"}>دری</span>
          </button>

          {/* دکمه تماس با ما لوکس */}
          <Link
            to="/contact"
            className="flex h-11 items-center justify-center rounded-full bg-[var(--color-amovi-gold)] px-6 text-sm font-bold text-[var(--color-amovi-navy)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            {translations.contact || "Contact Us"}
          </Link>
        </div>

        {/* ================================================================ MOBILE MENU BUTTON ================================================================= */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:border-[var(--color-amovi-gold)] hover:text-[var(--color-amovi-gold)] lg:hidden cursor-pointer"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================================================================ MOBILE MENU ================================================================= */}
      <div
        className={[
          "overflow-hidden bg-[#14213D] border-t border-white/5 lg:hidden",
          "transition-all duration-300 ease-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1440px] px-5 pb-7 pt-5 sm:px-8">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) => [
                  "border-b border-white/5 py-4 text-[15px] font-medium transition-colors duration-200",
                  isActive ? "text-[var(--color-amovi-gold)]" : "text-slate-200 hover:text-[var(--color-amovi-gold)]",
                ].join(" ")}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#000000]/20 px-5 text-sm font-semibold text-white transition-all duration-200 hover:border-[var(--color-amovi-gold)] hover:text-[var(--color-amovi-gold)] cursor-pointer"
            >
              <Globe2 size={17} strokeWidth={1.8} />
              <span className={currentLang === "en" ? "text-[var(--color-amovi-gold)]" : "text-slate-300"}>EN</span>
              <span className="text-white/30">/</span>
              <span className={currentLang === "fa" ? "text-[var(--color-amovi-gold)]" : "text-slate-300"}>دری</span>
            </button>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex h-12 flex-1 items-center justify-center rounded-full bg-[var(--color-amovi-gold)] px-6 text-sm font-bold text-[var(--color-amovi-navy)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-center"
            >
              {translations.contact || "Contact Us"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;