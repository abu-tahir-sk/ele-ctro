import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/offers.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-gray-100   hover:shadow-lg transition-all duration-300 flex items-center justify-between p-5"
          >
            
            <img
              src={offer.image}
              alt={offer.title}
              className="w-[100px] h-auto object-contain"
            />

            {/* 🔹 টেক্সট */}
            <div className="ml-4">
              <h3 className="text-gray-800 font-semibold text-sm leading-tight">
                CATCH BIG <span className="font-bold text-gray-900">DEALS</span> ON THE <br />
                CAMERAS
              </h3>
              <button className="flex items-center gap-1 text-gray-700 font-semibold mt-3 hover:text-yellow-600">
                Shop now <MdKeyboardArrowRight  className="text-xl  bg-yellow-400 rounded-full text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
