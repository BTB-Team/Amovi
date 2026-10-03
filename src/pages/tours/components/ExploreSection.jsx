import { useLangStore } from "../../../store/useLangStore";
const ExploreSection = () => {
  const { translations } = useLangStore();
  const explore = translations.tourPage.exploreSection;

  return (
    <section
      id="explore-packages"
      className=" m-auto max-w-[1600px] mb-5 sm:mb-10"
    >
      <div className="text-center w-[260px] m-auto sm:w-[350px] md:w-[450px] lg:w-[550px] ">
        <p className="text-xs text-[var(--color-amovi-gold)]">
          {explore.label}
        </p>

        <h2 className="mb-3  text-2xl lg:text-[38px] tracking-tight  font-extrabold  leading-[1.2]   text-[#14213D]">
          {explore.title}
        </h2>
        <p className="text-center text-base mb-2 leading-relaxed  md:mb-3 ">
          {explore.description}
        </p>
      </div>
    </section>
  );
};

export default ExploreSection;
