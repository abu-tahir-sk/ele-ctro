import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const BrandSlider = () => {
  const [brands] = useState([
    {
      id: 1,
      logo_img: "https://i.ibb.co/RTSkf8m7/img1-2.png",
    },
    {
      id: 2,

      logo_img: "https://i.ibb.co/0pXYFT4Y/img2-1.png",
    },

    {
      id: 4,

      logo_img: "https://i.ibb.co/4wSYLxj2/img3-1.png",
    },
    {
      id: 5,

      logo_img:
        "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    },
    {
      id: 6,

      logo_img: "https://i.ibb.co/KxzSdwFm/img4-1.png",
    },
    {
      id: 7,

      logo_img: "https://i.ibb.co/7xsNRWV7/img6.png",
    },
    {
      id: 8,
      logo_img: "https://i.ibb.co/vCFWCmK1/img5-1.png",
    },
  ]);

  return (
  
     <div className=" border-y-2 w-11/12 mx-auto border-gray-200 px-10 py-3 ">
      <Swiper
        modules={[Autoplay]}
        // autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="brand-slider"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="flex justify-center items-center transition-all duration-300 relative px-6 group">
              <img
                src={brand.logo_img}
                alt={brand.brand_name}
                 className="h-12 mb-3 object-cover transition-all duration-300 
               filter grayscale group-hover:grayscale-0 
               group-hover:scale-110"
              />
              <div className="absolute inset-1 rounded-lg"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  
  );
};

export default BrandSlider;
