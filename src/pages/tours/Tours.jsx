import DiscoverSection from "./components/DiscoverSection.jsx";
import ExploreHandle from "./components/exploreCTA/ExploreHandle.jsx";
import ExploreSection from "./components/ExploreSection.jsx";
import TourHero from "./components/TourHero.jsx";
export default function Tours() {
  return (
    <div>
      <TourHero />
      <DiscoverSection />
      <ExploreSection />
      <ExploreHandle />
    </div>
  );
}
