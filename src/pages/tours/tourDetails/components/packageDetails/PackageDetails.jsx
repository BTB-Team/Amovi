import { Check, X, CircleAlert } from "lucide-react";
import { useLangStore } from "../../../../../store/useLangStore";

const PackageDetails = ({ tour }) => {
  const { currentLang, translations } = useLangStore();

  const included = Object.values(tour.included[currentLang]);
  const notIncluded = Object.values(tour.notIncluded[currentLang]);
  const information = Object.values(tour.importantInformation[currentLang]);
  const packageInfo = translations.tourPage;

  return (
    <section className=" mx-auto max-w-7xl px-10 sm:px-6 py-12 ">
      <p className="mb-1 text-xs uppercase tracking-[0.1em] text-[var(--color-amovi-gold)]">
        {packageInfo.package}
      </p>

      <h3 className="mb-8 text-2xl sm:text-3xl lg:text-[36px] font-black text-[#14213D] leading-tight">
        {packageInfo.included}
      </h3>

      <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
        {/* Included */}
        <ul className="space-y-4">
          {included.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
            >
              <span
                aria-hidden="true"
                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full  text-xs font-bold bg-[var(--color-amovi-gold)] text-[var(--color-amovi-gray-light)]"
              >
                <Check size={16} />
              </span>

              {item}
            </li>
          ))}
        </ul>

        {/* Not Included */}
        <div className="md:border-l md:border-slate-200 md:pl-8">
          <h2 className="mb-5 text-lg font-bold">{packageInfo.excluded}</h2>

          <ul className="space-y-3">
            {notIncluded.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs text-white"
                >
                  <X size={12} />
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Information */}
        <aside className="self-start rounded-xl border border-amber-100 bg-amber-50 p-6 md:col-span-2 lg:col-span-1">
          <h2 className="mb-4 flex items-center gap-3 text-base font-bold">
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-sm"
            >
              <CircleAlert size={16} />
            </span>
            {packageInfo.information}
          </h2>

          <ul className="list-none space-y-3 pl-5 text-sm leading-7 text-slate-600">
            {information.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default PackageDetails;
