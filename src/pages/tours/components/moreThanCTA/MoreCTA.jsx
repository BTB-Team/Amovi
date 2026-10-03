const MoreCTA = ({ title, icon, description }) => {
  return (
    <section className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow rounded-lg  py-2 px-4 flex gap-3 items-center">
      <div className="shrink-0 bg-[var(--color-amovi-gold)]  flex h-8 w-8 items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="font-bold py-1 text-lg">{title}</p>
        <p className="text-sm leading-relaxed ">{description}</p>
      </div>
    </section>
  );
};

export default MoreCTA;
