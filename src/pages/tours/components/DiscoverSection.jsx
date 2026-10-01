import imageTwo from "../components/images/imageTwo.webp";
import { useLangStore } from "../../../store/useLangStore";
const DiscoverSection = () => {
  const { translations } = useLangStore();
  const discover = translations.tourPage.discoverSection;
  return (
    <section
      className=" px-8 py-5  grid grid-cols-1
       sm:px-16 sm:py-10 min-[1200px]:grid-cols-2 min-[1200px]:gap-8  "
    >
      <div className="min-[1200px]:order-2">
        <h2 className="my-2 text-2xl font-semibold text-[var(--color-amovi-navy)] sm:text-3xl md:text-4xl lg:text-5xl">
          {discover.title}
        </h2>
        <p className="text-sm text-[var(--color-amovi-black)] leading-relaxed sm:text-base md:text-lg lg:text-xl">
          {discover.description}
        </p>
      </div>
      <div className="my-2 min-[1200px]:order-1">
        <img
          className="rounded-lg h-[200px] w-full"
          src={imageTwo}
          alt={discover.title}
        />
      </div>
    </section>
  );
};

export default DiscoverSection;
