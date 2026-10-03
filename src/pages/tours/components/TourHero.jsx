import heroImage from "./images/imageFirst.webp";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";

const TourHero = () => {
  const { currentLang, translations } = useLangStore();
  const hero = translations.tourPage.heroSection;
  const isRTL = currentLang === "fa";

  const handleExplore = () => {
    document.getElementById("explore-packages")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative m-auto  h-[clamp(45vh,35vw,60vh)] bg-cover bg-center bg-no-repeat min-[1440px]:h-[440px]"
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
        className="  top-1/2 -translate-y-1/2 relative z-10 p-8  max-w-[450px]  pt-25  
       sm:px-12 sm:max-w-[500px] md:px-20 md:max-w-[600px] lg:max-w-[650px] xl:max-w-[900px] xl:ps-45 "
      >
        <p className="text-[10px] sm:text-xs leading-normal text-[var(--color-amovi-gold)]">
          {hero.label}
        </p>

        <h1 className="mb-1 text-3xl sm:text-4xl md:text-[36px] lg:text-[46px] xl:text-[48px] font-extrabold leading-[1.25] sm:leading-[1.2]  text-[var(--color-amovi-gray-light)] ">
          {hero.title}{" "}
          <span className="text-[var(--color-amovi-gold)]">
            {hero.titleHighlight}
          </span>
        </h1>

        <p className="mb-2 text-xs leading-relaxed text-[var(--color-amovi-gray-light)] sm:text-sm md:mb-3 lg:text-sm xl:mb-5">
          {hero.subtitle}
        </p>

        <button
          onClick={handleExplore}
          className=" cursor-pointer flex items-center gap-3 bg-[#FCA311] hover:bg-[#e08f0a] text-[#14213D] font-extrabold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all shadow-md shadow-[#FCA311]/10 group text-xs tracking-wider duration-300"
        >
          {hero.button}
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
        </button>
      </div>
    </div>
  );
};

export default TourHero;
