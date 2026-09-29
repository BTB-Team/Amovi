import imageTwo from "../components/images/imageTwo.webp";
const DiscoverSection = () => {
  return (
    <section
      className="m-auto max-w-[1600px] px-8 py-5  grid grid-cols-1
       sm:px-16 sm:py-10 min-[1200px]:grid-cols-2 min-[1200px]:gap-8  "
    >
      <div className="min-[1200px]:order-2">
        <h2 className="my-2 text-2xl font-semibold font-sans text-[var( --color-amovi-navy: #14213D;)] sm:text-3xl md:text-4xl lg:text-5xl">
          Discover Afghanistan Your Way
        </h2>
        <p className="text-sm text-[var(--color-amovi-black)] sm:text-base md:text-lg lg:text-xl">
          Explore Afghanistan through carefully planned journeys combining
          destination, accomodation, transportation, guides, and travel support
        </p>
      </div>
      <div className="my-2 min-[1200px]:order-1">
        <img className="rounded-lg h-[200px] w-full" src={imageTwo} alt="" />
      </div>
    </section>
  );
};

export default DiscoverSection;
