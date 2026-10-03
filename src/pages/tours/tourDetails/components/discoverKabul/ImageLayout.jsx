import image1 from "../../../../../assets/images/about-1.webp";
import image2 from "../../../../../assets/images/about-2.webp";
import image3 from "../../../../../assets/images/hero-bg.webp";
import BrushStroke from "../../../svgDesign/BrushStroke";

const ImageLayout = () => {
  return (
    <section className=" overflow-hidden relative mx-auto h-[450px] w-full max-w-[600px] px-4 sm:h-[450px] sm:px-6 md:px-0">
      {/* =================================Decorative Style======================= */}

      <div className="w-[200px] absolute z-[5] bottom-6 -end-25">
        <BrushStroke className="w-full" />
      </div>
      <div className="w-[200px] absolute z-[5] bottom-6 start-5">
        <BrushStroke className="w-full" />
      </div>

      <div className="relative">
        <div className="w-[200px] absolute z-[5] -top-2  start-10">
          <BrushStroke className="w-full" />
        </div>
        <img
          src={image1}
          alt=""
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl absolute left-1/2 top-5 z-10 h-[250px] w-[calc(100%-32px)] -translate-x-1/2 rounded-2xl border-4 border-white object-cover shadow-lg sm:h-[300px] sm:w-[440px]"
        />
      </div>

      <img
        src={image2}
        alt=""
        className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl absolute bottom-16 left-4 z-20 h-[140px] w-[160px] rounded-2xl border-4 border-white object-cover shadow-lg rotate-[-5deg] sm:bottom-20 sm:left-0 sm:h-[170px] sm:w-[200px]"
      />

      <img
        src={image3}
        alt=""
        className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl absolute bottom-15 left-1/2 z-30 h-[140px] w-[180px] -translate-x-1/2 rounded-2xl border-4 border-white object-cover shadow-lg rotate-[10deg] sm:h-[170px] sm:w-[220px]"
      />

      <img
        src={image1}
        alt=""
        className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl absolute bottom-16 right-4 z-20 h-[140px] w-[160px] rounded-2xl border-4 border-white object-cover shadow-lg rotate-[6deg] sm:bottom-20 sm:right-0 sm:h-[170px] sm:w-[200px]"
      />
    </section>
  );
};

export default ImageLayout;
