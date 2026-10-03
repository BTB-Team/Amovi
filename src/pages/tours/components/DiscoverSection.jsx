import imageTwo from "../components/images/imageTwo.webp";
import { useLangStore } from "../../../store/useLangStore";
import BrushStroke from "../svgDesign/BrushStroke";

const DiscoverSection = () => {
  const { translations } = useLangStore();
  const discover = translations.tourPage.discoverSection;
  return (
    <section
      className=" px-8 py-15  grid grid-cols-1
       sm:px-16 sm:py-20 min-[900px]:grid-cols-2 min-[1200px]:gap-8  "
    >
      {/* ============================Text=========================== */}
      <div className="relative z-[10] min-[1200px]:order-2">
        <h2 className="relative mb-3 mt-4.5 text-2xl md:text-[28px] xl:text-[38px] tracking-tight  font-extrabold  leading-[1.2]   text-[#14213D] ">
          {/* ===================line design=============== */}
          <div className="absolute -top-2 h-1 w-10  rounded-lg bg-[var(--color-amovi-gold)]"></div>

          {discover.title}
        </h2>
        <p className="text-[14px] text-[var(--color-amovi-black)] leading-relaxed ">
          {discover.description}
        </p>
      </div>
      <div className="relative my-2 min-[1200px]:order-1">
        {/* =========================Decorative Style======================== */}
        <div className="absolute z-[5] -start-15 -top-12  w-[200px] ">
          <BrushStroke className="w-full" />
        </div>
        <div className="absolute z-[5] -start-8 -top-12  w-[200px] ">
          <BrushStroke className="w-full" />
        </div>

        <div className="absolute z-[5]  -bottom-12 end-8  w-[200px] ">
          <BrushStroke className="w-full" />
        </div>
        <div className="absolute z-[5]  -bottom-12 end-15 w-[200px] ">
          <BrushStroke className="w-full" />
        </div>

        {/* ============================Image======================= */}
        <img
          className="relative z-[10] rounded-lg h-[150px] w-full"
          src={imageTwo}
          alt={discover.title}
        />
      </div>
    </section>
  );
};

export default DiscoverSection;
