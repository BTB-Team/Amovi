const Card = ({ icon: Icon, title, description }) => {
  return (
    <section className=" transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative flex h-full w-full max-w-[325px] items-start gap-3 rounded-lg px-3 py-2 shadow xl:max-w-none">
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-amovi-gold)]">
        <Icon className="text-[var(--color-amovi-navy)]" size={20} />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-[13px] leading-relaxed">{description}</p>
      </div>
    </section>
  );
};

export default Card;
