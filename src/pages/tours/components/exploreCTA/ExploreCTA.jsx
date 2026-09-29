import imageFirst from "../images/imageFirst.webp";
import { Bed, Car, User, ArrowRight, ArrowLeft } from "lucide-react";
import { useLangStore } from "../../../../store/useLangStore";
const ExploreCTA = () => {
  const { currentLang } = useLangStore();

  const isRTL = currentLang === "fa";
  return (
    <section className="relative shadow rounded-lg ">
      {/* ====================Position on Image */}
      <div className="absolute top-3 left-5 bg-[var(--color-amovi-navy)] text-[var(--color-amovi-gray-light)] px-3 py-1 rounded-full text-sm ">
        <p>4 Days / 5 Nights</p>
      </div>
      <img className="h-[150px] w-full rounded-t-lg" src={imageFirst} alt="" />
      <h3 className="text-xl font-semibold ps-5 p-1">Kabul Cultural Tour</h3>
      {/* ===================Icon Container====================== */}
      <div className="px-5 flex justify-between pb-3">
        <div className="flex self-center gap-1">
          <Bed className="text-[var(--color-amovi-gold)]" size={18} />
          <p className="text-xs self-center ">Bedroom</p>
        </div>
        <div className="flex self-center gap-1">
          <Car className="text-[var(--color-amovi-gold)]" size={18} />
          <p className="text-xs self-center ">Transport</p>
        </div>
        <div className="flex self-center gap-1">
          <User className="text-[var(--color-amovi-gold)]" size={18} />
          <p className="text-xs self-center ">People</p>
        </div>
      </div>
      {/* =====================Price Container================== */}
      <div className="flex justify-between items-center px-5 pb-2">
        <h3 className="text-xl font-semibold text-[var(--color-amovi-gold)] ">
          $ 850
        </h3>
        <button className="flex cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-sm font-bold text-[var(--color-amovi-navy)] sm:py-2 xl:py-3 xl:px-6 xl:text-base">
          Meet Now
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

export default ExploreCTA;
