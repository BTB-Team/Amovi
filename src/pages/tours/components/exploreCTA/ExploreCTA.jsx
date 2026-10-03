import { Link } from "react-router-dom";
import { Bed, Car, User, ArrowRight, ArrowLeft } from "lucide-react";
import { useLangStore } from "../../../../store/useLangStore";
const ExploreCTA = ({ tour }) => {
  const { currentLang, translations } = useLangStore();

  const isRTL = currentLang === "fa";
  const cta = translations.tourPage.exploreCTA;
  const tourInfo = tour[currentLang];

  return (
    <section className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative shadow rounded-lg  h-[300px] flex flex-col justify-between w-full max-w-[325px]">
      {/* ====================Position on Image=================== */}
      <div className="absolute top-3 left-5 bg-[var(--color-amovi-navy)] text-[var(--color-amovi-gray-light)] px-3 py-1 rounded-full text-sm ">
        <p>
          {tourInfo.days} {cta.days} / {tourInfo.nights} {cta.nights}
        </p>
      </div>
      <img
        className="h-[150px] w-full rounded-t-lg  object-cover"
        src={tour.image}
        alt={tourInfo.title}
      />
      <h3 className="text-lg font-bold ps-2 min-[350px]:ps-5 p-1 ">
        {tourInfo.title}
      </h3>
      {/* ===================Icon Container====================== */}
      <div className="px-2 min-[350px]:px-5 flex justify-between items-center pb-3">
        <div className="flex items-center gap-1">
          <Bed className="text-[var(--color-amovi-gold)]" size={14} />
          <p className="text-xs  ">{cta.bedroom}</p>
        </div>
        <div className="flex items-center gap-1">
          <Car className="text-[var(--color-amovi-gold)]" size={14} />
          <p className="text-xs  ">{cta.transport}</p>
        </div>
        <div className="flex items-center gap-1">
          <User className="text-[var(--color-amovi-gold)]" size={14} />
          <p className="text-xs ">{cta.people}</p>
        </div>
      </div>
      {/* =====================Price Container================== */}
      <div className="flex justify-between items-center px-2 min-[350px]:px-5 pb-2">
        <h3 className="text-xl font-semibold text-[var(--color-amovi-gold)] ">
          {tour.price}
        </h3>
        <Link
          to={`/tours/${tour.slug}`}
          className="flex items-center cursor-pointer gap-3 rounded-full bg-[var(--color-amovi-gold)] px-3 py-1 text-xs font-bold text-[var(--color-amovi-navy)] sm:py-1 group hover:bg-[#e08f0a] duration-300 "
        >
          {cta.meetNow}
          {isRTL ? (
            <ArrowLeft
              className="mt-1  group-hover:translate-x-1  duration-300"
              size={14}
            />
          ) : (
            <ArrowRight
              className="mt-1  group-hover:translate-x-1 duration-300"
              size={14}
            />
          )}
        </Link>
      </div>
    </section>
  );
};

export default ExploreCTA;
