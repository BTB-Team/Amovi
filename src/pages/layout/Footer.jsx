import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Services", path: "/services" },
  { name: "Destinations", path: "/destinations" },
  { name: "Tours", path: "/tours" },
  { name: "Blog", path: "/blog" },
];

const legalLinks = [
  { name: "Terms & Conditions", path: "/policy" },
  { name: "Privacy Policy", path: "/policy" },
];

function Footer() {
  return (
    <footer className="bg-[var(--color-amovi-navy)] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:gap-10 xl:gap-16">
          
          {/* COLUMN 1 */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-amovi-gold)] text-sm font-extrabold text-[var(--color-amovi-navy)] shadow-md">
                A
              </div>
              <span className="text-[20px] font-bold tracking-wide">Amovi Travel</span>
            </Link>
            <p className="mt-6 max-w-sm text-[14px] leading-7 text-slate-300">
              Amovi Travel: Explore Afghanistan through meaningful journeys, remarkable destinations, and carefully crafted travel experiences.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-[17px] font-semibold text-white tracking-wide border-b border-white/10 pb-2 w-fit">
              Quick Links
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link key={link.name} to={link.path} className="w-fit text-[14px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)]">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-[17px] font-semibold text-white tracking-wide border-b border-white/10 pb-2 w-fit">
              Contact Us
            </h3>
            <div className="mt-6 space-y-5">
              <a href="mailto:info@amovitravel.com" className="group flex items-start gap-3">
                <Mail size={19} className="mt-0.5 shrink-0 text-[var(--color-amovi-gold)]" />
                <div>
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-white/40">Email</span>
                  <span className="mt-1 block text-[14px] text-slate-300 transition-colors duration-200 group-hover:text-[var(--color-amovi-gold)]">info@amovitravel.com</span>
                </div>
              </a>
              <a href="tel:+93700000000" className="group flex items-start gap-3">
                <Phone size={19} className="mt-0.5 shrink-0 text-[var(--color-amovi-gold)]" />
                <div>
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-white/40">Phone / WhatsApp</span>
                  <span className="mt-1 block text-[14px] text-slate-300 transition-colors duration-200 group-hover:text-[var(--color-amovi-gold)]">+93 700 000 000</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-[var(--color-amovi-gold)]" />
                <div>
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-white/40">Office</span>
                  <span className="mt-1 block text-[14px] leading-6 text-slate-300">Kabul, Afghanistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-[17px] font-semibold text-white tracking-wide border-b border-white/10 pb-2 w-fit">
              Legal
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.path} className="w-fit text-[14px] text-slate-300 transition-colors duration-200 hover:text-[var(--color-amovi-gold)]">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/5 bg-[#000000]/40">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-center px-5 text-center sm:px-8 lg:px-10">
          <p className="text-[13px] text-slate-400">
            © {new Date().getFullYear()} Amovi Travel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;