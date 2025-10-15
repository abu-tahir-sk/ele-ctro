import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import watch from "../assets/image/bg-igm.jpg";

const Banner = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/slide.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);

  return (
    <>
      {slider.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-gray-400 mx-1 transition-all duration-300"></span>`,
          }}
        >
          {slider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-auto min-h-[400px] sm:min-h-[500px] lg:h-[80vh] flex items-center justify-center bg-center bg-cover"
                style={{ backgroundImage: `url(${watch})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-30"></div>

                {/* Main Wrapper */}
                <div className="relative w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 z-10 text-gray-700 flex items-center justify-end">
                  
                  {/* Left Empty Space for lg */}
                  <div className="hidden lg:block lg:w-1/3"></div>

                  {/* Content + Image Section */}
                  <div className="w-full lg:w-2/3 flex flex-row items-center justify-between gap-6 sm:gap-10">
                    
                    {/* Text area */}
                    <div className="w-1/2 text-left space-y-4">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg opacity-90">
                        {slide.description}
                      </p>

                      <div className="flex flex-col items-start mt-2 space-y-3">
                        <span className="text-sm sm:text-base tracking-wide">FROM</span>

                        <div className="relative inline-block">
                          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-6">
                            {slide.price}
                          </h3>
                          <span className="absolute text-2xl lg:text-3xl font-bold -top-1 left-0">
                            $
                          </span>
                        </div>

                        <button className="bg-yellow-400 hover:bg-gray-900 hover:text-white text-black px-8 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg mt-3">
                          Start Buying
                        </button>
                      </div>
                    </div>

                    {/* Image area */}
                    <div className="w-1/2 flex justify-center lg:justify-end">
                      <img
                        src={slide.image}
                        alt="watch"
                        className="w-[130px] sm:w-[200px] md:w-[250px] lg:w-[350px] object-contain drop-shadow-xl transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">Loading slides...</p>
      )}
    </>
  );
};

export default Banner;
