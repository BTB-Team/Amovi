export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-slate-100 p-8">
      <h1 className="text-4xl font-extrabold text-amovi-primary mb-4">
        Amovi Travel Website Base
      </h1>
      <p className="text-lg text-slate-600 mb-6">
        Tailwind CSS & Route System are successfully configured!
      </p>
      <button className="bg-amovi-secondary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
        Explore Afghanistan
      </button>
    </div>
  );
}