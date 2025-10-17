import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaShoppingCart, FaHeart, FaBalanceScale } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

import data from "../data/SwiperSlider.json";

const SwiperSlider = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        spaceBetween={0}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
        }}
        className="!m-0 !p-0"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="!m-0 !p-0 flex justify-center">
            {/* Product Card */}
            <div className="relative group duration-300 w-[240px] h-[360px] flex flex-col justify-between border border-gray-200 transition-shadow hover:border-2 hover:shadow-2xl hover:bg-white  p-3">
              {/* 🔹 Fixed height card: h-[360px] */}

              {/* Category & Title */}
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  {item.category}
                </p>
                <h3 className="text-[#0062bd] font-bold text-sm line-clamp-2 mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Product Image */}
              <div className="relative h-[160px] w-full overflow-hidden rounded-md my-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>

              {/* Price & Cart */}
              <div className="flex items-center justify-between  relative z-10 py-2 rounded-md">
                <p className="text-base font-semibold text-gray-800">
                  ${item.price}.00
                </p>
                <button className="bg-[#fed900] transition rounded-full p-2 text-white hover:scale-110 duration-200">
                  <FaShoppingCart size={18} />
                </button>
              </div>

              {/* Hover Actions */}
              <div className="bg-gray-50 flex gap-6 items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 py-2 border-t border-gray-200 transition-all duration-300 rounded-md">
                <button className="flex items-center gap-2 text-xs hover:text-yellow-500 transition">
                  <FaBalanceScale /> Compare
                </button>
                <button className="flex items-center gap-2 text-xs hover:text-red-500 transition">
                  <FaHeart /> Wishlist
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination mt-6 flex justify-center"></div>

      {/* Custom CSS */}
      <style>
        {`
          .swiper {
            margin: 0 !important;
            padding: 0 !important;
          }
          .swiper-wrapper {
            gap: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .swiper-slide {
            margin: 0 !important;
            padding: 0 !important;
            width: auto !important;
          }

          /* Pagination Dots */
          .custom-pagination .swiper-pagination-bullet {
            background-color: gray;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            margin: 0 4px;
            transition: all 0.3s ease;
            opacity: 0.7;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #facc15;
            width: 24px;
            height: 10px;
            border-radius: 9999px;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default SwiperSlider;
