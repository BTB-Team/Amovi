import { useParams } from "react-router-dom";
import data from "../../../../db.json";
import HeroDetail from "./components/HeroDetail";

const TourDetail = () => {
  const { slug } = useParams();
  const tour = data.tours.find((tour) => tour.slug === slug);
  return (
    <div>
      <HeroDetail tour={tour} />
    </div>
  );
};

export default TourDetail;
