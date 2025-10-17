import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {  FaCartArrowDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

const Middel = () => {
  const [item, setItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, []);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-between h-full  shadow w-full relative card   border border-base-200 transition-shadow p-4 group hover:bg-white hover:shadow-2xl hover:rounded-none">
      <div>
        <p className="text-gray-400 text-start">speaker</p>
        <h2 className="text-xl font-semibold text-[#0062bd] text-start mb-2">
          {item.name}
        </h2>
      </div>

      {/* Main Image */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Main Image */}
        <img
          src={item.image_url}
          alt={item.name}
          className="min-h-[400px] object-contain mb-4 rounded-lg transition-transform hover:scale-105 duration-300"
        />

        {/* Thumbnail Images */}
        <div className="flex justify-center items-center gap-6 mt-4">
          {[1, 2, 3].map((_, index) => (
            <button
              key={index}
              onClick={() => setShowModal(true)}
              className="border border-gray-200 rounded-md p-2 hover:shadow-md hover:border-blue-400 transition"
            >
              <img
                className="w-24 h-24 object-contain"
                src={item.image_url}
                alt={item.name}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Price + Add to Cart */}
      <div className="flex justify-between items-center w-full pt-6 border-t border-gray-100 my-4">
        <p className="text-lg font-bold text-gray-700">
          ${item.current_price}.00
          <span className="line-through text-gray-400 text-base ml-2">
            ${item.original_price}
          </span>
        </p>
        <button className="px-6 py-2 font-serif bg-yellow-400 hover:bg-amber-300 text-white rounded-full transition flex justify-center items-center gap-2 ">
         <FaCartArrowDown></FaCartArrowDown> Add to Cart
        </button>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white w-[80%] md:w-[70%] h-[85vh] rounded-lg shadow-2xl overflow-hidden relative flex flex-col">
            {/* 🔹 Top Bar (Title + Close Button) */}
            <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-red-500 transition"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* 🔹 Image Section */}
            <div className="flex-grow flex items-center justify-center bg-gray-50">
              <img
                src={item.image_url}
                alt={item.name}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            {/* 🔹 Bottom Section (Price + Add to Cart Button) */}
            <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white sticky bottom-0">
              <p className="text-lg font-bold text-gray-700">
                ${item.current_price}
                <span className="line-through text-gray-400 text-base ml-2">
                  ${item.original_price}
                </span>
              </p>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <div className='  text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center  w-full border-t-2 border-gray-200'>
             <p className='flex text-sm'><BiRefresh className="text-xl text-gray-400" /> Compare</p>
        <p className="flex justify-center items-center text-sm"><MdFavoriteBorder className="text-xl text-gray-400" />Add to Wishlist</p>
      </div>
    </div>
  );
};

export default Middel;
