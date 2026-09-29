import heroImage from "./images/imageFirst.webp";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";

const TourHero = () => {
  const { currentLang } = useLangStore();

  const isRTL = currentLang === "fa";

  return (
    <div
      className="relative m-auto flex items-center max-w-[1600px] h-[clamp(30vh,35vw,60vh)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
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
        className="relative z-10 p-8 font-sans max-w-[450px] 
      sm:px-12 md:px-14 md:max-w-[500px] lg:max-w-[600px] xl:max-w-[750px] "
      >
        <p className="text-xs text-[var(--color-amovi-gold)]">TOUR PACKAGES</p>

        <h1 className="mb-1 text-3xl font-bold text-[var(--color-amovi-gray-light)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Tour <span className="text-[var(--color-amovi-gold)]">Packages</span>
        </h1>

        <p className="mb-2 text-base text-[var(--color-amovi-gray-light)] sm:text-lg md:text-xl md:mb-3 lg:text-2xl xl:text-3xl xl:mb-5">
          Thoughtfully designed journeys to discover Afghanistan
        </p>

        <button className="flex cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-sm font-bold text-[var(--color-amovi-navy)] sm:py-2 xl:py-3 xl:px-6 xl:text-base">
          Explore Package
          {isRTL ? (
            <ArrowLeft className="mt-1 self-center" size={16} />
          ) : (
            <ArrowRight className="mt-1 self-center" size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TourHero;
