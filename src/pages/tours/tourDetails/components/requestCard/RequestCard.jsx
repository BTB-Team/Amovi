import imageUrl from "../../../../../assets/images/kabul.webp";
import { useLangStore } from "../../../../../store/useLangStore";
import { Link } from "react-router-dom";
import {
  TicketsPlaneIcon,
  StarIcon,
  TicketIcon,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Headphones,
  BadgeDollarSign,
} from "lucide-react";

const RequestCard = () => {
  const { currentLang, translations } = useLangStore();
  const cardDetail = translations.tourPage.tourDetail;
  const isRTL = currentLang === "fa";

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBF7] lg:pe-50">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Kabul Image - Full Background */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt="Kabul Cityscape"
            className="h-full w-full object-cover object-center"
          />

          {/* Soft fade to white */}

          <div
            className={`absolute inset-0 
             ${isRTL ? "bg-gradient-to-l from-transparent via-white/10 to-[#FDFBF7]" : "bg-gradient-to-r from-transparent via-white/10 to-[#FDFBF7]"}
            `}
          />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
        </div>
      </div>

      {/* ============================================Main Content=============================== */}
      <div className=" relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 sm:px-10 md:py-28 lg:grid-cols-12 lg:px-20">
        {/* Left Side - Empty */}
        <div className="p-4 lg:col-span-6"></div>

        {/* Right Side - Booking Card */}
        <div className="relative flex min-h-[400px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:col-span-6 lg:w-[calc(100%+240px)]">
          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -end-12 -top-12 h-48 w-48 rounded-full border border-amber-400/10" />

          <div className="pointer-events-none absolute -bottom-24 -start-24 h-64 w-64 rounded-full border border-white/5" />

          {/* Decorative Plane */}
          <div className="absolute end-8 top-8 z-10 hidden rotate-[-12deg] text-4xl opacity-80 sm:block">
            <TicketsPlaneIcon
              className="text-[var(--color-amovi-gold)]"
              size={38}
            />
          </div>

          {/* Sparkles */}
          <span className="absolute end-20 top-22 z-10 text-xs opacity-80">
            <StarIcon className="text-[var(--color-amovi-gold)]" size={30} />
          </span>

          <span className="absolute end-38 top-15  z-10 text-[8px] text-white/50">
            <StarIcon className="text-[var(--color-amovi-gold)]" size={15} />
          </span>

          {/* Card Content */}
          <div className="relative z-10 space-y-5">
            {/* Best Price */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 sm:text-sm">
              <span className="text-base">
                <TicketIcon size={20} />
              </span>

              <span className="uppercase">{cardDetail.eyebrow}</span>
            </div>

            {/* Price */}
            <h2 className="pt-1 text-2xl sm:text-3xl lg:text-[36px] font-black text-[var(--color-amovi-gray-light)] leading-tight">
              {cardDetail.title}
            </h2>

            {/* Description */}
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-[var(--color-amovi-gray-light) ">
              {cardDetail.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="relative z-10 space-y-6 pt-8">
            {/* Request Button */}
            <Link
              to="/contact"
              className="inline-flex flex-strec cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-sm font-bold text-[var(--color-amovi-navy)] sm:py-2 xl:py-3 xl:px-6 xl:text-base group hover:bg-[#e08f0a] duration-300"
            >
              {cardDetail.cta}
              {isRTL ? (
                <ArrowLeft
                  className="mt-1 self-center group-hover:translate-x-1 duration-300"
                  size={16}
                />
              ) : (
                <ArrowRight
                  className="mt-1 self-center  group-hover:translate-x-1 duration-300"
                  size={16}
                />
              )}
            </Link>

            {/* Bottom Features */}
            <div className="grid grid-cols-1 gap-3 border-t border-slate-700/50 pt-4 text-xs text-[var(--color-amovi-gray-light) sm:grid-cols-3 sm:gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">
                  <ShieldCheck size={16} />
                </span>
                <span>{cardDetail.booking}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-sm">
                  <Headphones size={16} />
                </span>
                <span>{cardDetail.support}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-sm">
                  <BadgeDollarSign size={16} />
                </span>
                <span>{cardDetail.rates}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCard;
