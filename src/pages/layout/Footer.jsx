import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import { Mail, Phone, MapPin } from "lucide-react";

// لود فیزیکی فایل لوگوی رسمی شما برای همگامی کامل با هدر
import amoviLogo from "../../assets/images/logo.JPG";

function Footer() {
  const { translations } = useLangStore();

  const quickLinks = [
    { name: translations.services || "Services", path: "/services" },
    { name: translations.destinations || "Destinations", path: "/destinations" },
    { name: translations.tours || "Tours", path: "/tours" },
    { name: translations.blog || "Blog", path: "/blog" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", path: "/policy" },
    { name: "Privacy Policy", path: "/policy" },
  ];

  return (
    <footer className="bg-[#14213D] text-white border-t border-white/10 font-sans">
      {/* ================================================================
          MAIN FOOTER
      ================================================================= */}
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:gap-8 xl:gap-14">
          
          {/* ============================================================
              COLUMN 1 — AGENCY & SOCIALS
          ============================================================= */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img 
                src={amoviLogo} 
                alt="Amovi Travel Logo" 
                className="h-10 w-auto object-contain rounded-xl border border-white/10 shadow-sm"
              />
              <div>
                <span className="block text-[16px] font-extrabold leading-tight tracking-wide">
                  Amovi Travel
                </span>
                <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-[var(--color-amovi-gold)]">
                  Travel & Experiences
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-7 text-slate-300 font-light">
              Amovi Travel: Explore Afghanistan through meaningful journeys, remarkable destinations, and carefully crafted travel experiences.
            </p>
            
            {/* 🌐 آیکون‌های شبکه‌های اجتماعی به صورت دایره‌های ظریف طلایی تمپلت */}
            <div className="mt-5 flex items-center gap-3">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-amovi-gold)] hover:text-[var(--color-amovi-gold)] bg-white/5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {social === 'facebook' && <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/>}
                    {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>}
                    {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ============================================================
              COLUMN 2 — QUICK LINKS
          ============================================================= */}
          <div>
            <h3 className="text-[15px] font-bold text-white tracking-wide border-b border-white/10 pb-1.5 w-fit">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-[13px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ============================================================
              COLUMN 3 — CONTACT US (ادغام دقیق آیکون و لینک متناسب با تمپلت)
          ============================================================= */}
          <div>
            <h3 className="text-[15px] font-bold text-white tracking-wide border-b border-white/10 pb-1.5 w-fit">
              Contact Us
            </h3>
            <nav className="mt-4 flex flex-col gap-4">
              {/* لینک هوشمند ایمیل با هاور همزمان آیکون و متن */}
              <a 
                href="mailto:info@amovitravel.com" 
                className="inline-flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)] font-medium group cursor-pointer w-fit"
              >
                <Mail size={15} strokeWidth={2.2} className="text-slate-400 group-hover:text-[var(--color-amovi-gold)] transition-colors duration-200 mt-0.5" />
                <span>info@amovitravel.com</span>
              </a>

              {/* لینک هوشمند تلفن و واتس‌اپ */}
              <a 
                href="tel:+93700000000" 
                className="inline-flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)] font-medium group cursor-pointer w-fit"
                dir="ltr"
              >
                <Phone size={15} strokeWidth={2.2} className="text-slate-400 group-hover:text-[var(--color-amovi-gold)] transition-colors duration-200 mt-0.5" />
                <span>+93 700 000 000</span>
              </a>

              {/* لینک هوشمند آدرس دفتر کابل */}
              <div 
                className="inline-flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)] font-medium group cursor-pointer w-fit"
              >
                <MapPin size={15} strokeWidth={2.2} className="text-slate-400 group-hover:text-[var(--color-amovi-gold)] transition-colors duration-200 mt-0.5" />
                <span>Kabul, Afghanistan</span>
              </div>
            </nav>
          </div>

          {/* ============================================================
              COLUMN 4 — LEGAL
          ============================================================= */}
          <div>
            <h3 className="text-[15px] font-bold text-white tracking-wide border-b border-white/10 pb-1.5 w-fit">
              Legal
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-[13px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* ================================================================
          COPYRIGHT BAR
      ================================================================= */}
      <div className="border-t border-white/5 bg-black">
        <div className="mx-auto flex min-h-12 max-w-[1440px] items-center justify-center px-5 text-center sm:px-8 lg:px-10">
          <p className="text-[12px] text-slate-400 font-light">
            © {new Date().getFullYear()} Amovi Travel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;