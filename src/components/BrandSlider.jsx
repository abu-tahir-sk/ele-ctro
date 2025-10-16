import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const BrandSlider = () => {
  const [brands] = useState([
    {
      id: 1,
      brand_name: "Apple",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: 2,
      brand_name: "Samsung",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      id: 3,
      brand_name: "Sony",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_Logo.svg",
    },
    {
      id: 4,
      brand_name: "LG",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/0/02/LG_logo_%282015%29.svg",
    },
    {
      id: 5,
      brand_name: "Dell",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    },
    {
      id: 6,
      brand_name: "HP",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/HP_logo_2012.svg",
    },
    {
      id: 7,
      brand_name: "Asus",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/AsusTek_logo.svg",
    },
    {
      id: 8,
      brand_name: "Lenovo",
      logo_img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Lenovo_logo_2015.svg",
    },
  ]);

  return (
    <div className="w-full bg-gray-50 py-10">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Our Trusted Brands
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
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
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 py-5 px-3">
              <img
                src={brand.logo_img}
                alt={brand.brand_name}
                className="h-16 object-contain mb-3 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-gray-700 text-sm font-medium">
                {brand.brand_name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
