import { useParams } from "react-router-dom";
import { useLangStore } from "../../../store/useLangStore";
import data from "../../../../db.json";
import Header from "../../layout/Header";
import HeroDetail from "./components/HeroDetail";
import HandlDiscoverSection from "./components/discoverKabul/HandlDiscoverSection";
import HandleJourneyCard from "./components/journeySection/HandleJourneyCard";
import PackageDetails from "./components/packageDetails/PackageDetails";
import RequestCard from "./components/requestCard/RequestCard";

const TourDetail = () => {
  const { slug } = useParams();
  const tour = data.tours.find((tour) => tour.slug === slug);
  const { currentLang } = useLangStore();
  return (
    <div
      className={`m-auto max-w-[1440px] ${
        currentLang === "fa"
          ? "font-['Sahel',system-ui,sans-serif]"
          : "font-['Inter',system-ui,sans-serif]"
      }`}
    >
      {/* ==================================Header Component=============================== */}
      <div className="fixed top-4 left-0 z-50 w-full px-4 pointer-events-none sm:px-6 md:px-8">
        <div className="mx-auto w-full max-w-[1220px] pointer-events-auto">
          <Header />
        </div>
      </div>
      {/* =================================HeroDetail Component============================= */}
      <HeroDetail tour={tour} />
      {/* ========================HandlDiscoverSection Component============================= */}
      <HandlDiscoverSection tour={tour} />
      {/* ============================HandleJourneyCard Component============================ */}
      <HandleJourneyCard tour={tour} />
      {/* ================================PackageDetails Component=========================== */}
      <PackageDetails tour={tour} />
      {/* ================================RequestCard Component============================== */}
      <RequestCard />
    </div>
  );
};

export default TourDetail;
