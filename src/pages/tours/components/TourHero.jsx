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
        <p className="text-xs text-[var(--color-amovi-gold)]">{hero.label}</p>

        <h1 className="mb-1 text-3xl font-bold text-[var(--color-amovi-gray-light)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
          {hero.title}{" "}
          <span className="text-[var(--color-amovi-gold)]">
            {hero.titleHighlight}
          </span>
        </h1>

        <p className="mb-2 text-base text-[var(--color-amovi-gray-light)] sm:text-lg md:text-xl md:mb-3 lg:text-2xl xl:text-3xl xl:mb-5">
          {hero.subtitle}
        </p>

        <button
          onClick={handleExplore}
          className="flex cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-sm font-bold text-[var(--color-amovi-navy)] sm:py-2 xl:py-3 xl:px-6 xl:text-base group hover:bg-[#e08f0a] duration-300"
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
