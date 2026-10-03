import {
  Camera,
  UsersRound,
  Leaf,
  ChartNoAxesColumn,
  Landmark,
  House,
} from "lucide-react";
import Card from "./Card";
import { useLangStore } from "../../../../../store/useLangStore";

const HandleCard = ({ tour }) => {
  const { currentLang } = useLangStore();
  const cardInfo = tour.card[currentLang];

  const icons = [Camera, UsersRound, Leaf, ChartNoAxesColumn, Landmark, House];

  const cards = Object.entries(cardInfo);

  return (
    <div className="mx-auto w-full max-w-[650px] px-4 sm:px-5 xl:max-w-none xl:mt-7">
      <div className="m-5 grid grid-cols-1 justify-items-center gap-4 text-[var(--color-amovi-navy)] min-[540px]:grid-cols-2 xl:m-0 xl:grid-cols-3 xl:justify-items-stretch">
        {cards.map(([key, card], index) => (
          <Card
            key={key}
            icon={icons[index] || Camera}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HandleCard;
