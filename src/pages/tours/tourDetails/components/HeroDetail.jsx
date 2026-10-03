import { ArrowRight, ArrowLeft, Calendar, MapPin, Plane } from "lucide-react";
import { useLangStore } from "../../../../store/useLangStore";
import { Link } from "react-router-dom";

const HeroDetail = ({ tour }) => {
  const { currentLang, translations } = useLangStore();
  const hero = translations.tourPage.heroSection;
  const daysAndNights = translations.tourPage.exploreCTA;
  const isRTL = currentLang === "fa";
  const tourInfo = tour[currentLang];

  return (
    <div
      className="relative m-auto  h-[clamp(45vh,35vw,60vh)] bg-cover bg-center bg-no-repeat min-[1440px]:h-[440px] "
      style={{ backgroundImage: `url(${tour.heroDetailImage})` }}
    >
      {/*============================== Gradient ====================================*/}
      <div
        className={`absolute inset-0 ${
          isRTL
            ? "bg-gradient-to-l from-[var(--color-amovi-navy)] to-transparent"
            : "bg-gradient-to-r from-[var(--color-amovi-navy)] to-transparent"
        }`}
      />

      {/*=============================== Content ====================================*/}
      <div
        className="  top-1/2 -translate-y-1/2 relative z-10 p-8  max-w-[450px]  pt-25  
       sm:px-12 sm:max-w-[500px] md:px-20 md:max-w-[600px] lg:max-w-[650px] xl:max-w-[900px] xl:ps-45 "
      >
        <p className="text-xs text-[var(--color-amovi-gold)] mb-2">
          {hero.label}
        </p>

        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-[36px] lg:text-[46px] xl:text-[48px] font-bold text-[var(--color-amovi-gray-light)]  ">
          {tourInfo.title}{" "}
        </h1>
        {/*=================================== The icons in HeroDetail Section =================================== */}
        <div className="text-[13px] text-[var(--color-amovi-gray-light)] flex flex-wrap mb-3 sm:mb-6">
          <div className="flex gap-1 pe-3 sm:pe-5">
            <Calendar
              className="shrink-0 text-[var(--color-amovi-gold)]"
              size={20}
            />
            <p>
              {" "}
              {tourInfo.days} {daysAndNights.days} / {tourInfo.nights}{" "}
              {daysAndNights.nights}
            </p>
          </div>
          <div className="flex gap-1 pe-3 sm:pe-5">
            <MapPin
              className="shrink-0 text-[var(--color-amovi-gold)]"
              size={20}
            />
            {tourInfo.locations}
          </div>
          <div className="flex gap-1">
            <Plane
              className="shrink-0 text-[var(--color-amovi-gold)]"
              size={20}
            />
            {tourInfo.travelStyle}
          </div>
        </div>
        {/* ==============================Link to Contact Page==================== */}
        <Link
          to="/contact"
          className="inline-flex cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-sm font-bold text-[var(--color-amovi-navy)] sm:py-2 xl:py-3 xl:px-6 xl:text-base group hover:bg-[#e08f0a] duration-300"
        >
          {daysAndNights.requestThisPackage}
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
      </div>
    </div>
  );
};

export default HeroDetail;
