import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
const SwiperProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/SwiperSlide.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);
  return (
    <div className="w-11/12 mx-auto mb-2">
      <div className="flex justify-between items-center px-3 lg:px-10 border-b-2 border-gray-200 mx-3 lg:mx-6 py-2">
      <h3 className="text-2xl">Bestsellers</h3>

      <div role="tablist" className="flex justify-center items-center overflow-x-auto  snap-x snap-mandatory">
        {/* Tab 1 */}
        <div className="flex-shrink-0">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="tab1"
            className="tab lg:text-[18px] font-bold border-2 border-yellow-400 rounded-full md:px-4 "
            aria-label="Top 10"
          />
          
        </div>

        {/* Tab 2 */}
        <div className="flex-shrink-0">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="tab2"
            className="tab lg:text-[18px] px-3"
            aria-label="Phones & Tablets"
            defaultChecked
          />
         
        </div>

        {/* Tab 3 */}
        <div className="flex-shrink-0">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="tab3"
            className="tab lg:text-[18px] px-3"
            aria-label="Laptops & Computers"
          />
          
        </div>

        {/* Tab 4 */}
        <div className="flex-shrink-0">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="tab4"
            className="tab lg:text-[18px] px-3"
            aria-label="Video Cameras"
          />
         
        </div>
      </div>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 md:grid-rows-2 bg-white mt-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-row   duration-300 overflow-hidden   border-2 border-base-200 hover:border-gray-100  hover:bg-[#ffffff] py-2 group hover:shadow-2xl rounded-none hover:scale-y-105 hover:py-2 "
          >
            {/* Left - Image */}
            <div className="w-32 h-32 mx-auto flex items-center justify-center bg-gray-50">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full"
              />
            </div>

            {/* Right - Details */}
            <div className="flex flex-col justify-between p-4 text-left">
              <div>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <h2 className="text-md font-bold text-[#0062bd] mt-1">
                  {item.title}
                </h2>
              </div>
              <div className="flex justify-between items-center pr- py-4">
                <p className="text-lg text-start text-gray-900 mt-2">
                  ${item.price}
                </p>
                <button className="p-3 bg-yellow-400  text-white text-sm rounded-full transition-all">
                  <FaCartArrowDown />
                </button>
              </div>
              <div className='  text-center pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center gap-3 w-full border-t-2 border-gray-200'>
             <p className='flex text-sm'><BiRefresh className="text-xl text-gray-400" /> Compare</p>
        <p className="flex justify-center items-center text-sm"><MdFavoriteBorder className="text-xl text-gray-400" />Add to Wishlist</p>
      </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperProduct;
