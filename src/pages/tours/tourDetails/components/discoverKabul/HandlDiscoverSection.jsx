import HandleCard from "./HandleCard";
import ImageLayout from "./ImageLayout";
import { useLangStore } from "../../../../../store/useLangStore";
const HandlDiscoverSection = ({ tour }) => {
  const { currentLang } = useLangStore();
  const tourInfo = tour[currentLang];
  return (
    <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 px-4 sm:px-6 md:px-8 lg:px-10 xl:grid-cols-3 xl:items-center xl:gap-10 xl:my-10">
      {/* =========================================== Image Component ===================================== */}
      <div className="w-full xl:col-span-1">
        <ImageLayout />
      </div>

      {/* ========================================== Text + Cards ======================================== */}
      <div className="w-full xl:col-span-2">
        <div className="mx-auto my-8 max-w-[630px] px-7 text-justify sm:my-10 md:my-12 xl:my-0 xl:max-w-[750px] xl:m-0">
          <p className="text-xs text-[var(--color-amovi-gold)] sm:text-sm">
            {tourInfo.package}
          </p>

          <h3 className="mb-3 text-2xl sm:text-3xl lg:text-[36px] font-black text-[#14213D] leading-tight  text-[var(--color-amovi-navy)]">
            {tourInfo.subtitle}
          </h3>

          <p className="text-sm leading-7 text-[var(--color-amovi-navy)] sm:text-base">
            {tourInfo.subtitleDescription}
          </p>
        </div>

        <HandleCard tour={tour} />
      </div>
    </section>
  );
};

export default HandlDiscoverSection;
