
import { useState } from "react";
import SwiperProduct from "./SwiperProduct";

const SwiperSliders = () => {
   const [activeLink, setActiveLink] = useState("item1");
   const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  return (
    <div className="relative w-full  py-10 overflow-visible">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
         <div className="w-full">
          <SwiperProduct></SwiperProduct>
         </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="w-full">
          <SwiperProduct></SwiperProduct>
         </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="w-full">
          <SwiperProduct></SwiperProduct>
         </div>
        </div>
        <div id="item4" className="carousel-item w-full">
          <div className="w-full">
          <SwiperProduct></SwiperProduct>
         </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a  href="#item1"
        className={`p-1 rounded-full ${activeLink === "item1" ? "bg-yellow-400 py-1 px-4" : "bg-gray-400"}`}
        onClick={() => handleLinkClick("item1")}>
          
        </a>
        <a  href="#item2"
        className={`p-1 rounded-full ${activeLink === "item2" ? "bg-yellow-400 px-4" : "bg-gray-400"}`}
        onClick={() => handleLinkClick("item2")}>
          
        </a>
        <a  href="#item3"
        className={`p-1 rounded-full ${activeLink === "item3" ? "bg-yellow-400 px-4" : "bg-gray-400"}`}
        onClick={() => handleLinkClick("item3")}>
          
        </a>
        
        <a  href="#item4"
        className={`p-1 rounded-full ${activeLink === "item4" ? "bg-yellow-400 px-4" : "bg-gray-400"}`}
        onClick={() => handleLinkClick("item4")}>
          
        </a>
        
      </div>
    </div>
  );
};

export default SwiperSliders;