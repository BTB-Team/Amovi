import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLangStore } from "../../../store/useLangStore";
const ExploreSection = () => {
  const { currentLang, translations } = useLangStore();
  const explore = translations.tourPage.exploreSection;

  const isRTL = currentLang === "fa";

  return (
    <section className=" m-auto max-w-[1600px] mb-5 sm:mb-10">
      <div className="text-center w-[260px] m-auto sm:w-[350px] md:w-[450px] lg:w-[550px] ">
        <p className="text-xs text-[var(--color-amovi-gold)]">
          {explore.label}
        </p>

        <h2 className="text-2xl font-semibold mb-2 sm:text-3xl md:text-4xl lg:text-5xl">
          {explore.title}
        </h2>
        <p className="text-center text-sm mb-2 sm:text-base md:text-lg md:mb-3 lg:text-xl">
          {explore.description}
        </p>
        <button className="mx-auto flex cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-sm font-bold text-[var(--color-amovi-navy)] sm:py-2 xl:py-3 xl:px-6 xl:text-base">
          {explore.button}
          {isRTL ? (
            <ArrowLeft className="mt-1 self-center" size={16} />
          ) : (
            <ArrowRight className="mt-1 self-center" size={16} />
          )}
        </button>
      </div>
    </section>
  );
};

export default ExploreSection;
