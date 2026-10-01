import MoreCTA from "./MoreCTA";
import { useLangStore } from "../../../../store/useLangStore";
import { Hotel, Bus, UserRoundCheck, Headset, FileCheck2 } from "lucide-react";

const HandleMoreCTA = () => {
  const { translations } = useLangStore();
  const moreCTA = translations.tourPage.moreCTA;

  const data = [
    {
      id: 1,
      icon: <Hotel size={25} />,
      title: moreCTA.accommodation.title,
      description: moreCTA.accommodation.description,
    },
    {
      id: 2,
      icon: <Bus size={25} />,
      title: moreCTA.transportation.title,
      description: moreCTA.transportation.description,
    },
    {
      id: 3,
      icon: <UserRoundCheck size={25} />,
      title: moreCTA.professional.title,
      description: moreCTA.professional.description,
    },
    {
      id: 4,
      icon: <Headset size={25} />,
      title: moreCTA.travel.title,
      description: moreCTA.travel.description,
    },
    {
      id: 5,
      icon: <FileCheck2 size={25} />,
      title: moreCTA.visa.title,
      description: moreCTA.visa.description,
    },
  ];

  return (
    <section className="m-auto max-w-[1600px]">
      <div className="px-10 mb-5">
        <p className="text-[var(--color-amovi-gold)]">{moreCTA.eyebrow}</p>
        <h2 className="mb-2  text-2xl font-semibold text-[var(--color-amovi-navy)] sm:text-3xl md:text-4xl lg:text-5xl">
          {moreCTA.title}
        </h2>
      </div>
      <div className="mx-10 mb-10 grid min-[598px]:grid-cols-2 gap-4 min-[890px]:grid-cols-3 min-[1170px]:grid-cols-4 xl:grid-cols-5 text-[var(--color-amovi-navy)]">
        {data.map((item) => (
          <MoreCTA
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

export default HandleMoreCTA;
