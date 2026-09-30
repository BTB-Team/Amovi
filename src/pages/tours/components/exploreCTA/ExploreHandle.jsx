import ExploreCTA from "./ExploreCTA";
import data from "../../../../../db.json";
import { useLangStore } from "../../../../store/useLangStore";
const ExploreHandle = () => {
  const { currentLang } = useLangStore();
  const tours = data.tours;

  // console.log(tour[0].price);
  // console.log(tour[0].days);

  return (
    <section className="m-auto max-w-[1600px] ">
      <div className=" m-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
