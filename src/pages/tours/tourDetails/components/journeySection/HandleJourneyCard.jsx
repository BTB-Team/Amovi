import JourneyCard from "./JourneyCard";
import { useLangStore } from "../../../../../store/useLangStore";

const HandleJourneyCard = ({ tour }) => {
  const { currentLang, translations } = useLangStore();
  const info = tour.journeyCard[currentLang];

  const staticData = translations.tourPage;

  const journeys = Object.values(info);

  return (
    <section className="mx-auto w-full max-w-[1600px]">
      <div className="px-6 pt-10 sm:px-8 md:px-10 xl:px-12">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-amovi-gold)] sm:text-sm">
          {staticData.journey}
        </p>
        <h3 className="mt-1 text-2xl sm:text-3xl lg:text-[36px] font-black text-[#14213D] leading-tight  text-[var(--color-amovi-navy)] ">
          {staticData.AJourneyToRember}
        </h3>
      </div>

      <div className="m-6 grid grid-cols-1 justify-items-center gap-5 text-[var(--color-amovi-navy)] sm:m-8 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1162px]:grid-cols-4 xl:m-10 xl:gap-6">
        {journeys.map((journey, index) => (
          <JourneyCard key={index} data={journey} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default HandleJourneyCard;
