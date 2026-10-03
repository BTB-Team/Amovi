import WorkCTA from "./WorkCTA";
import { PackageOpen, Send, BadgeCheck, PlaneTakeoff } from "lucide-react";
import { useLangStore } from "../../../../store/useLangStore";

const HandleWorkCTA = () => {
  const { translations } = useLangStore();
  const workCTA = translations.tourPage.workCTA;
  const data = [
    {
      id: 1,
      icon: <PackageOpen size={22} />,
      number: workCTA.package.number,
      title: workCTA.package.title,
      description: workCTA.package.description,
    },
    {
      id: 2,
      icon: <Send size={22} />,
      number: workCTA.request.number,
      title: workCTA.request.title,
      description: workCTA.request.description,
    },
    {
      id: 3,
      icon: <BadgeCheck size={22} />,
      number: workCTA.confirmJourney.number,
      title: workCTA.confirmJourney.title,
      description: workCTA.confirmJourney.description,
    },
    {
      id: 4,
      icon: <PlaneTakeoff size={22} />,
      number: workCTA.beginJourney.number,
      title: workCTA.beginJourney.title,
      description: workCTA.beginJourney.description,
    },
  ];
  return (
    <section className="m-auto max-w-[1600px]">
      <p className="text-center text-xs text-[var(--color-amovi-gold)]">
        {workCTA.eyebrow}
      </p>

      <h2 className="mb-2 text-center text-2xl md:text-[28px] xl:text-[38px] font-semibold text-[var(--color-amovi-navy)] ">
        {workCTA.title}
      </h2>
      <div className="m-10 grid min-[560px]:max-[892px]:grid-cols-2 gap-4  min-[892px]:max-[1230px]:grid-cols-3 min-[1230px]:grid-cols-4 text-[var(--color-amovi-navy)]">
        {data.map((item) => (
          <WorkCTA
            key={item.id}
            icon={item.icon}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HandleWorkCTA;
