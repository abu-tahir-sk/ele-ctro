
import tabletImg from "../assets/image/phon-removebg-preview.png"; 

const PromoBanner = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#f7f7f7] flex items-center justify-between relative overflow-hidden py-6 px-6 md:px-12">
      {/* LEFT TEXT */}
      <div className="flex  flex-row  items-center md:items-center 10 gap-10 z-10">
        <h2 className="text-gray-800 text-xl md:text-3xl font-light tracking-wide leading-snug">
          <span className="md:px-3 py-1 font-light tracking-wide">
            SHOP AND <span className="font-bold">SAVE BIG</span>
          </span>{" "}
          ON HOTTEST TABLETS
        </h2>
         <div className="bg-[#fed700] rounded-lg px-8 py-3 text-center shadow-md z-10">
        <p className="italic text-gray-700 text-xs uppercase font-medium">
          Starting at
        </p>
        <p className="font-extrabold text-gray-700 text-[20px] md:text-3xl leading-tight">
          $79<sup className="text-base font-semibold align-top">99</sup>
        </p>
      </div>
      </div>

      {/* PRICE CARD */}
     <div className="hidden lg:block"></div>

      {/* RIGHT IMAGE */}
      <img
        src={tabletImg}
        alt="tablet"
        className="hidden lg:block absolute -right-20 bottom-0 md:top-0 w-[250px] md:w-[300px] object-contain"
      />
    </div>
  );
};

export default PromoBanner;
