import TravelCTA from "./TravelCTA";
import { useLangStore } from "../../../../store/useLangStore";
import { Plane, Map, Mountain, Settings2, Crown, Landmark } from "lucide-react";

const HandelTravelCTA = () => {
  const { translations } = useLangStore();
  const cta = translations.tourPage.travelCTA;

  const data = [
    {
      id: 1,
      icon: <Plane size={22} />,
      title: cta.plane.title,
      description: cta.plane.description,
    },
    {
      id: 2,
      icon: <Map size={22} />,
      title: cta.map.title,
      description: cta.map.description,
    },
    {
      id: 3,
      icon: <Landmark size={22} />,
      title: cta.landmark.title,
      description: cta.landmark.description,
    },
    {
      id: 4,
      icon: <Mountain size={22} />,
      title: cta.mountain.title,
      description: cta.mountain.description,
    },
    {
      id: 5,
      icon: <Crown size={22} />,
      title: cta.crown.title,
      description: cta.crown.description,
    },
    {
      id: 6,
      icon: <Settings2 size={22} />,
      title: cta.setting.title,
      description: cta.setting.description,
    },
  ];

  return (
    <section className="m-auto max-w-[1600px]">
      <p className="text-center text-[var(--color-amovi-gold)]">
        {cta.eyebrow}
      </p>

      <h2 className="mb-2 text-center text-2xl font-semibold text-[var(--color-amovi-navy)] sm:text-3xl md:text-4xl lg:text-5xl">
        {cta.title}
      </h2>

      <div className="m-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <TravelCTA
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HandelTravelCTA;
