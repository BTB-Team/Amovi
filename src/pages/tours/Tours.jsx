import Header from "../layout/Header.jsx";
import DiscoverSection from "./components/DiscoverSection.jsx";
import ExploreHandle from "./components/exploreCTA/ExploreHandle.jsx";
import ExploreSection from "./components/ExploreSection.jsx";
import HandleMoreCTA from "./components/moreThanCTA/HandleMoreCTA.jsx";
import TourHero from "./components/TourHero.jsx";
import HandelTravelCTA from "./components/travelCTA/HandelTravelCTA.jsx";
import HandleWorkCTA from "./components/workCTA/HandleWorkCTA.jsx";
export default function Tours() {
  return (
    <div>
      <Header />
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
