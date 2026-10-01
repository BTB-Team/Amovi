import ExploreCTA from "./ExploreCTA";
import data from "../../../../../db.json";
import { useLangStore } from "../../../../store/useLangStore";
const ExploreHandle = () => {
  const { currentLang } = useLangStore();
  const tours = data.tours;

  return (
    <section className="m-auto max-w-[1600px] ">
      <div className=" m-10 grid justify-items-center grid-cols-1  gap-4 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1162px]:grid-cols-4 text-[var(--color-amovi-navy)]">
        {tours.map((tour) => (
          <ExploreCTA
            key={tour.id}
            title={tour[currentLang].title}
            price={tour.price}
            durationDay={tour[currentLang].days}
            durationNight={tour[currentLang].nights}
            image={tour.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreHandle;
