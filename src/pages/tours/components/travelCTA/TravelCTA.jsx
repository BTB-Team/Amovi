const TravelCTA = ({ icon, title, description }) => {
  return (
    <section className="shadow rounded-lg flex flex-col items-center py-2 px-4">
      <div className="bg-[var(--color-amovi-gold)]  flex h-10 w-10 items-center justify-center rounded-full">
        {icon}
      </div>
      <p className="font-bold py-2 text-lg">{title}</p>
      <p className="text-center text-sm sm:text-base">{description}</p>
    </section>
  );
};

export default TravelCTA;
