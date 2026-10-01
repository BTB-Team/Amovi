import Header from "../layout/Header.jsx";
import DiscoverSection from "./components/DiscoverSection.jsx";
import ExploreHandle from "./components/exploreCTA/ExploreHandle.jsx";
import ExploreSection from "./components/ExploreSection.jsx";
import HandleMoreCTA from "./components/moreThanCTA/HandleMoreCTA.jsx";
import TourHero from "./components/TourHero.jsx";
import HandelTravelCTA from "./components/travelCTA/HandelTravelCTA.jsx";
import HandleWorkCTA from "./components/workCTA/HandleWorkCTA.jsx";
import { useLangStore } from "../../store/useLangStore";

export default function Tours() {
  const { currentLang } = useLangStore();

  return (
    <div
      className={`m-auto max-w-[1440px] ${
        currentLang === "fa"
          ? "font-['Sahel',system-ui,sans-serif]"
          : "font-['Inter',system-ui,sans-serif]"
      }`}
    >
      <div className="fixed top-4 left-0 z-50 w-full px-4 pointer-events-none sm:px-6 md:px-8">
        <div className="mx-auto w-full max-w-[1220px] pointer-events-auto">
          <Header />
        </div>
      </div>

      <TourHero />
      <DiscoverSection />
      <ExploreSection />
      <ExploreHandle />
      <HandelTravelCTA />
      <HandleMoreCTA />
      <HandleWorkCTA />
    </div>
  );
}
