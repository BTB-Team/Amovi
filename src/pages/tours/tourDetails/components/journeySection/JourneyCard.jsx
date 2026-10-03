import { useLangStore } from "../../../../../store/useLangStore";

const JourneyCard = ({ data, tour }) => {
  const { currentLang, translations } = useLangStore();

  const cta = translations.tourPage.exploreCTA;
  const tourInfo = tour[currentLang];

  return (
    <section className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative shadow rounded-lg  h-[350px]  flex flex-col justify-between w-full max-w-[325px]">
      {/* ====================Position on Image=================== */}
      <div className="absolute top-3 left-5 bg-[var(--color-amovi-navy)] text-[var(--color-amovi-gray-light)] px-3 py-1 rounded-full text-xs flex flex-col items-center justify-center h-10 w-10">
        <p>{cta.day}</p>
        <p className="font-bold">{data.days}</p>
      </div>
      <img
        className="h-[150px] w-full rounded-t-lg  object-cover"
        src={tour.image}
        alt={tourInfo.title}
      />
      <div>
        <h3 className="text-base sm:text-lg font-semibold ps-2 min-[350px]:ps-5 p-1 ">
          {data.title}
        </h3>
        <p className="text-[13px] leading-relaxed px-2 min-[350px]:px-5">
          {data.description}
        </p>
      </div>
      <div>
        <p className="text-[12px] text-center text-[var(--color-amovi-gold)]/90 pb-2">
          {data.experience}
        </p>
      </div>
    </section>
  );
};

export default JourneyCard;
