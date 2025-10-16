import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/SwiperSlider.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="relative w-full py-10 overflow-visible">
      {/* 🔹 Navigation Buttons */}
      <div className="swiper-navigation absolute right-3 flex z-20 md:-top-2 flex-row">
        <div className="swiper-button-prev text-gray-700 hover:text-white hover:bg-gray-800 rounded-full flex items-center justify-center transition">
          <MdOutlineArrowBackIos />
        </div>
        <div className="swiper-button-next text-gray-700 hover:text-white hover:bg-gray-800  rounded-full flex items-center justify-center  transition">
          <MdArrowForwardIos />
        </div>
      </div>

      {/* 🔹 Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={
          {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
        }
        loop={true}
        spaceBetween={0}
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
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 6 },
        }}
        className="pb-20"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="!m-0 !p-0">
            <div className="flex flex-col justify-between items-center bg-white border border-gray-200 h-[350px] md:h-[380px] shadow-sm hover:shadow-lg transition-all duration-300">
              <img
                src={item.image_url}
                alt={item.title}
                className="h-40 w-full object-contain mb-3"
              />
              <div className="flex-grow flex flex-col justify-between items-center text-center px-3">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    ${item.price}
                  </p>
                </div>
                <button className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-none transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Pagination perfectly centered */}
      <div className="custom-pagination absolute bottom-3 left-0 right-0 flex justify-center z-20"></div>

      <style>
        {`
          
          .custom-pagination {
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            margin: auto;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
          }

          .custom-pagination .swiper-pagination-bullet {
            background-color: gray;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            margin: 0 4px;
            transition: all 0.3s ease;
            opacity: 0.8;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #facc15;
            width: 24px;
            height: 10px;
            border-radius: 9999px;
            opacity: 1;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 20px !important;
            color: gray; 
  height: 20px !important;
  font-size: 20px !important;
  position: static !important;
          }
        `}
      </style>
    </div>
  );
};

export default SwiperSlider;
