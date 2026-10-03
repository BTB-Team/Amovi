const WorkCTA = ({ icon, number, title, description }) => {
  return (
    <section className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow rounded-lg flex gap-3  items-center py-2 px-4">
      <div className="shrink-0 h-6 w-6 sm:h-8 sm:w-8 bg-[var(--color-amovi-navy)] text-[var(--color-amovi-gray-light)] rounded-full flex    items-center justify-center">
        {number}
      </div>
      <div className="shrink-0 h-8 w-8 bg-[var(--color-amovi-gold)]  flex sm:h-10 sm:w-10 items-center justify-center rounded-full ">
        {icon}
      </div>
      <div>
        <p className="font-bold py-1 text-lg">{title}</p>
        <p className="text-sm leading-relaxed ">{description}</p>
      </div>
    </section>
  );
};

export default WorkCTA;
