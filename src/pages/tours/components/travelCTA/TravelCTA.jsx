const TravelCTA = ({ icon, title, description }) => {
  return (
    <section className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow rounded-lg flex flex-col items-center py-2 px-4">
      <div className="bg-[var(--color-amovi-gold)]  flex h-10 w-10 items-center justify-center rounded-full">
        {icon}
      </div>
      <p className=" min-[350]:text-xl font-semibold  py-2 ">{title}</p>
      <p className="text-center text-sm leading-relaxed ">{description}</p>
    </section>
  );
};

export default TravelCTA;
