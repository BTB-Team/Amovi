import ExploreCTA from "./ExploreCTA";

const ExploreHandle = () => {
  return (
    <section className="m-auto max-w-[1600px] ">
      <div className="m-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ExploreCTA />
        <ExploreCTA />
        <ExploreCTA />
        <ExploreCTA />
        <ExploreCTA />
        <ExploreCTA />
      </div>
    </section>
  );
};

export default ExploreHandle;
