import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSliders = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/SwiperSlide.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  
  const repeatedProducts = [...products, ...products, ...products]; 

  return (
    <div className="relative w-full  py-10 overflow-visible">
     
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        onInit={(swiper) => {
          swiper.params.pagination.el = ".custom-pagination";
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
        className="pb-20"
      >
        
        {Array.from({ length: Math.ceil(repeatedProducts.length / 6) }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {repeatedProducts.slice(i * 6, i * 6 + 6).map((item) => (
                <div
                  key={item.id + "-" + i}
                  className="flex flex-row bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-md overflow-hidden"
                >
                  {/* Left - Image */}
                  <div className="w-2/5 flex items-center justify-center bg-gray-50 p-3">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="object-contain h-24 w-24"
                    />
                  </div>

                  {/* Right - Details */}
                  <div className="w-3/5 flex flex-col justify-between p-4 text-left">
                    <div>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <h2 className="text-md font-semibold text-gray-800 mt-1">
                        {item.title}
                      </h2>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        ${item.price}
                      </p>
                    </div>
                    <button className="mt-3 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-none transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Pagination centered at bottom */}
      <div className="custom-pagination absolute bottom-3 left-0 right-0 flex justify-center z-20"></div>

      {/* ✅ Custom CSS */}
      <style>
        {`
          .custom-pagination {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
          }

          .custom-pagination .swiper-pagination-bullet {
            background-color: red;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            margin: 0 4px;
            transition: all 0.3s ease;
            opacity: 0.8;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #facc15;
            width: 20px;
            height: 10px;
            border-radius: 9999px;
            opacity: 1;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none !important;
          }

          .swiper-button-prev,
          .swiper-button-next {
            position: static !important;
          }
        `}
      </style>
    </div>
  );
};

export default SwiperSliders;
