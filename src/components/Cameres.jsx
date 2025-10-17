import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Cameras = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data2.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 w-full h-full ">
      {products.map((item) => (
        <div
          key={item.id}
          className="  shadow  flex flex-col items-center justify-center card   border border-base-200 transition-shadow p-2 group hover:bg-white hover:shadow-2xl hover:rounded-none"
        >
         <div className="w-full py-3">
           <p className="text-gray-400 text-start">Speaker</p>
          <h2 className="text-lg text-[#0062bd] font-semibold   mb-1">
            {item.name}
          </h2>
         </div>
          <img
            src={item.image_url}
            alt={item.name}
            className="h-48 object-contain mb-3"
          />
          <div className="flex justify-between items-center w-full">
          <div>
            
          <p className="text-2xl  text-gray-700">
            ${item.current_price}{" "}
            <span className="line-through text-gray-400 text-sm">
              ${item.original_price}
            </span>
          </p>
          </div>
            
              <button className="p-3 rounded-full bg-yellow-400 text-white text-xl"><FaCartArrowDown></FaCartArrowDown></button>
           
          </div>
          <div className='  text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center  w-full border-t-2 border-gray-200'>
             <p className='flex text-sm'><BiRefresh className="text-xl text-gray-400" /> Compare</p>
        <p className="flex justify-center items-center text-sm"><MdFavoriteBorder className="text-xl text-gray-400" />Add to Wishlist</p>
      </div>
        </div>
      ))}
    </div>
  );
};

export default Cameras;
