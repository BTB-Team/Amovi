import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import { Mail, Phone, MapPin } from "lucide-react";

// لوگوی رسمی آژانس
import amoviLogo from "../../assets/images/logo.png";

function Footer() {
  const { currentLang, translations } = useLangStore();
  const isRtl = currentLang === "fa";

  // لینک‌های ناوبری سریع
  const quickLinks = [
    { name: translations.services || (isRtl ? "خدمات لوکس" : "Services"), path: "/services" },
    { name: translations.destinations || (isRtl ? "مقاصد رویایی" : "Destinations"), path: "/destinations" },
    { name: translations.tours || (isRtl ? "تورهای ویژه" : "Tours"), path: "/tours" },
    { name: translations.blog || (isRtl ? "مجله سفر" : "Blog"), path: "/blog" },
  ];

  // بخش قوانین
  const legalLinks = [
    { name: isRtl ? "شرایط و مقررات" : "Terms & Conditions", path: "/policy" },
    { name: isRtl ? "حریم خصوصی" : "Privacy Policy", path: "/policy" },
  ];

  return (
    <footer 
      className={`bg-[#14213D] text-white border-t border-white/10 w-full ${isRtl ? 'text-right font-[Sahel]' : 'text-left font-[Inter]'}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* کانتینر اصلی محتوای فوتر با عرض استاندارد پروژه */}
      <div className="mx-auto max-w-[1440px] px-4 xs:px-6 py-12 md:py-14 sm:px-8 lg:px-10">
        
        {/* 🔴 گرید هوشمند مچ‌شده با عکس: در موبایل ۲ ستونه و از تبلت (md) به بالا کاملاً ۴ ستونه دسکتاپ می‌شود */}
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] lg:gap-8 xl:gap-14">
          
          {/* ستون اول: معرفی آژانس و شبکه‌های اجتماعی (در موبایل کل عرض ۲ ستون را می‌گیرد) */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <Link to="/" className={`flex items-center gap-2.5 ${isRtl ? 'flex-row-reverse text-right md:flex-row md:text-left' : ''}`}>
              <img 
                src={amoviLogo} 
                alt="Amovi Travel" 
                className="h-10 w-auto object-contain rounded-xl border border-[#FCA311]"
              />
              <div dir="ltr" className="text-left">
                <span className="block text-[16px] font-extrabold leading-tight tracking-wide text-white font-[Inter]">
                  Amovi Travel
                </span>
                <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-[#FCA311] font-[Inter]">
                  Travel & Experiences
                </span>
              </div>
            </Link>
            
            <p className="mt-4 max-w-sm text-[13px] leading-6 text-slate-300 font-light">
              {isRtl 
                ? "آمووی ترول: کشف جاذبه‌های باشکوه و ناشناخته افغانستان از طریق سفرهایی پرمعنا، مقاصد استثنایی و تجربه‌های مسافرتی لوکس و VIP که کاملاً اختصاصی طراحی شده‌اند."
                : "Amovi Travel: Explore Afghanistan through meaningful journeys, remarkable destinations, and carefully crafted travel experiences."}
            </p>
            
            {/* شبکه‌های اجتماعی فیکس شده با SVG بومی */}
            <div className="mt-5 flex items-center gap-3" dir="ltr">
              <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FCA311] hover:text-[#FCA311] bg-white/5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FCA311] hover:text-[#FCA311] bg-white/5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FCA311] hover:text-[#FCA311] bg-white/5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ستون دوم: لینک‌های سریع (در موبایل ۱ ستون از ۲ ستون را می‌گیرد) */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <h3 className="text-[14px] font-bold text-white tracking-wide border-b border-white/10 pb-1.5 w-fit">
              {isRtl ? "دسترسی سریع" : "Quick Links"}
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-[13px] text-slate-300 transition-colors duration-200 hover:text-[#FCA311] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ستون سوم: اطلاعات ارتباطی (در موبایل ۱ ستون از ۲ ستون را در کنار کوئیک‌لینک می‌گیرد) */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <h3 className="text-[14px] font-bold text-white tracking-wide border-b border-white/10 pb-1.5 w-fit">
              {isRtl ? "ارتباط با ما" : "Contact Us"}
            </h3>
            <nav className="mt-4 flex flex-col gap-3.5">
              <a 
                href="mailto:info@amovitravel.com" 
                className={`inline-flex items-center gap-2 text-[13px] text-slate-300 transition-colors duration-200 hover:text-[#FCA311] font-medium group cursor-pointer w-fit ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <Mail size={14} className="text-slate-400 group-hover:text-[#FCA311] shrink-0" />
                <span className="font-[Inter] text-xs xs:text-sm">info@amovitravel.com</span>
              </a>

              <a 
                href="tel:+93700000000" 
                className={`inline-flex items-center gap-2 text-[13px] text-slate-300 transition-colors duration-200 hover:text-[#FCA311] font-medium group cursor-pointer w-fit ${isRtl ? 'flex-row-reverse' : ''}`}
                dir="ltr"
              >
                <Phone size={14} className="text-slate-400 group-hover:text-[#FCA311] shrink-0" />
                <span className="font-[Inter] text-xs xs:text-sm">+93 700 000 000</span>
              </a>

              <div className={`inline-flex items-center gap-2 text-[13px] text-slate-300 transition-colors duration-200 hover:text-[#FCA311] font-medium group w-fit ${isRtl ? 'flex-row-reverse' : ''}`}>
                <MapPin size={14} className="text-slate-400 group-hover:text-[#FCA311] shrink-0" />
                <span className="text-xs xs:text-sm">{isRtl ? "کابل، افغانستان" : "Kabul, Afghanistan"}</span>
              </div>
            </nav>
          </div>

          {/* ستون چهارم: بخش قوانین و حریم خصوصی (در موبایل کل عرض ۲ ستون را پوشش می‌دهد) */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start mt-4 md:mt-0">
            <h3 className="text-[14px] font-bold text-white tracking-wide border-b border-white/10 pb-1.5 w-fit">
              {isRtl ? "قوانین و مقررات" : "Legal"}
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-[13px] text-slate-300 transition-colors duration-200 hover:text-[#FCA311] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* نوار حقوق مادی و معنوی نهایی */}
      <div className="border-t border-white/5 bg-black/30 py-4 w-full">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center px-4 text-center">
          <p className="text-[11px] text-slate-400 font-light tracking-wide font-[Inter]">
            {isRtl 
              ? `©️ ${new Date().getFullYear()} آمووی ترول. تمامی حقوق محفوظ است.`
              : `©️ ${new Date().getFullYear()} Amovi Travel. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
