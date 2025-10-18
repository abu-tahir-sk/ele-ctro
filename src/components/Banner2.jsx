import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../assets/image/img1 (1).png";
import backgroundImage from "../assets/image/bg-igm.jpg";

const Banner2 = () => {
  const [activeLink, setActiveLink] = useState("item_1");
  const [slider, setSlider] = useState([]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    // Simulating data fetching, replace with actual data
    setSlider([
      {
        id: 1,
        title: "T",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="carousel w-full relative">
        <div id="item_1" className="carousel-item w-full">
          {slider.length > 0 ? (
            <div className="relative w-full  flex items-center justify-center z-0">
              {/* Overlay */}

              {/* Main Wrapper */}
              <div
                className="relative w-full bg-cover  z-10 text-gray-700 flex items-center justify-between h-full"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                {/* Left Empty Space (Only for Large Screens) */}
                <div className="hidden lg:block lg:w-3/12"></div>

                {/* Right Section: Content + Image */}
                <div className="w-full lg:w-9/12 flex flex-row items-center h-full justify-between gap-6 sm:gap-10 px-8">
                  {/* Content (Text) */}
                  {/* Content (Text) */}
                   <AnimatePresence mode="wait">
                    {activeLink === "item_1" && (
                  <motion.div 
                key="#item_1"   
                    initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                     
                    viewport={{ once: false, amount: 0.3 }}
                     className="w-full lg:w-1/2 text-left space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-light leading-tight">
                      THE NEW{" "}
                      <span className="text-2xl sm:text-3xl md:text-5xl lg:text-[62px] text-gray-700">
                        STANDARD
                      </span>
                    </h2>
                    <p className="md:text-[16px] opacity-90 w-full font-bold">
                      UNDER FAVORABLE SMARTWATCHES
                    </p>

                    <div className="flex flex-col items-start mt-2 space-y-3">
                      <span className="text-sm sm:text-base tracking-wide">
                        FROM
                      </span>

                      <div className="relative inline-block">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-6">
                          749
                        </h3>
                        <span className="absolute text-2xl lg:text-3xl font-bold -top-1 left-0">
                          $
                        </span>
                        <span className="absolute text-2xl font-bold -top-1 -right-8">
                          99
                        </span>
                      </div>

                      <button className="bg-yellow-400 hover:bg-gray-900 hover:text-white text-black px-8 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg mt-3">
                        Start Buying
                      </button>
                    </div>
                  </motion.div>)}
                  </AnimatePresence>

                  {/* Image Section */}
                  <AnimatePresence mode="wait">
                    {activeLink === "item_1" && (
                       <motion.div
                  key="#item_1" 
                    initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 1.5, delay: 1 }}
                    whileHover={{ scale: 0 }}
                    className="w-full flex justify-center lg:justify-end h-full lg:pr-12"
                  >
                    <img src={banner} alt="watch" className="h-full" />
                  </motion.div>
                    )}
                     
                  </AnimatePresence>
                   {/* Image Section
                   // initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    whileHover={{ scale: 1.1 }} 

                     initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                   */}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}
        </div>

        {/* Carousel items */}
        <div id="item_2" className="carousel-item w-full">
          {/* Repeat similar code for other carousel items */}
          {slider.length > 0 ? (
            <div className="relative w-full  flex items-center justify-center z-0">
              {/* Overlay */}

              {/* Main Wrapper */}
              <div
                className="relative w-full bg-cover  z-10 text-gray-700 flex items-center justify-between"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                {/* Left Empty Space (Only for Large Screens) */}
                <div className="hidden lg:block lg:w-3/12"></div>

                {/* Right Section: Content + Image */}
                <div className="w-full lg:w-9/12 flex flex-row items-center justify-between gap-6 sm:gap-10 pl-6 py-6">
                  {/* Content (Text) */}

                  {/* Content (Text) */}
                   <AnimatePresence mode="wait">
                    {activeLink === "item_2" && (
                  <motion.div 
                key="#item_2"   
                    initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                     
                    viewport={{ once: false, amount: 0.3 }}
                     className="w-full lg:w-1/2 text-left space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-light leading-tight">
                      THE NEW{" "}
                      <span className="text-2xl sm:text-3xl md:text-5xl lg:text-[62px] text-gray-700">
                        STANDARD
                      </span>
                    </h2>
                    <p className="md:text-[16px] opacity-90 w-full font-bold">
                      UNDER FAVORABLE SMARTWATCHES
                    </p>

                    <div className="flex flex-col items-start mt-2 space-y-3">
                      <span className="text-sm sm:text-base tracking-wide">
                        FROM
                      </span>

                      <div className="relative inline-block">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-6">
                          749
                        </h3>
                        <span className="absolute text-2xl lg:text-3xl font-bold -top-1 left-0">
                          $
                        </span>
                        <span className="absolute text-2xl font-bold -top-1 -right-8">
                          99
                        </span>
                      </div>

                      <button className="bg-yellow-400 hover:bg-gray-900 hover:text-white text-black px-8 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg mt-3">
                        Start Buying
                      </button>
                    </div>
                  </motion.div>)}
                  </AnimatePresence>

                  {/* Image Section */}
                  <AnimatePresence mode="wait">
                    {activeLink === "item_2" && (
                       <motion.div
                  key="#item_2" 
                    initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 1.5, delay: 1 }}
                    whileHover={{ scale: 0 }}
                    className="w-full flex justify-center lg:justify-end h-full pr-12"
                  >
                    <img src={banner} alt="watch" className="h-full" />
                  </motion.div>
                    )}
                     
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}
        </div>
        <div id="item_3" className="carousel-item w-full">
          {/* Repeat similar code for other carousel items */}
          {slider.length > 0 ? (
            <div className="relative w-full  flex items-center justify-center z-0">
              {/* Overlay */}

              {/* Main Wrapper */}
              <div
                className="relative w-full bg-cover  z-10 text-gray-700 flex items-center justify-between"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                {/* Left Empty Space (Only for Large Screens) */}
                <div className="hidden lg:block lg:w-3/12"></div>

                {/* Right Section: Content + Image */}
                <div className="w-full lg:w-9/12 flex flex-row items-center justify-between gap-6 sm:gap-10 pl-6 py-6">
                  {/* Content (Text) */}
                   <AnimatePresence mode="wait">
                    {activeLink === "item_3" && (
                  <motion.div 
                key="#item_3"   
                    initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                     
                    viewport={{ once: false, amount: 0.3 }}
                     className="w-full lg:w-1/2 text-left space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-light leading-tight">
                      THE NEW{" "}
                      <span className="text-2xl sm:text-3xl md:text-5xl lg:text-[62px] text-gray-700">
                        STANDARD
                      </span>
                    </h2>
                    <p className="md:text-[16px] opacity-90 w-full font-bold">
                      UNDER FAVORABLE SMARTWATCHES
                    </p>

                    <div className="flex flex-col items-start mt-2 space-y-3">
                      <span className="text-sm sm:text-base tracking-wide">
                        FROM
                      </span>

                      <div className="relative inline-block">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-6">
                          749
                        </h3>
                        <span className="absolute text-2xl lg:text-3xl font-bold -top-1 left-0">
                          $
                        </span>
                        <span className="absolute text-2xl font-bold -top-1 -right-8">
                          99
                        </span>
                      </div>

                      <button className="bg-yellow-400 hover:bg-gray-900 hover:text-white text-black px-8 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg mt-3">
                        Start Buying
                      </button>
                    </div>
                  </motion.div>)}
                  </AnimatePresence>

                  {/* Image Section */}
                  <AnimatePresence mode="wait">
                    {activeLink === "item_3" && (
                       <motion.div
                  key="#item_3" 
                    initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 1.5, delay: 1 }}
                    whileHover={{ scale: 0 }}
                    className="w-full flex justify-center lg:justify-end h-full pr-12"
                  >
                    <img src={banner} alt="watch" className="h-full" />
                  </motion.div>
                    )}
                     
                  </AnimatePresence>
                  
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a
          href="#item_1"
          className={`p-1 rounded-full ${
            activeLink === "item_1" ? "bg-yellow-400 py-1 px-4" : "bg-gray-400"
          }`}
          onClick={() => handleLinkClick("item_1")}
        ></a>
        <a
          href="#item_2"
          className={`p-1 rounded-full ${
            activeLink === "item_2" ? "bg-yellow-400 px-4" : "bg-gray-400"
          }`}
          onClick={() => handleLinkClick("item_2")}
        ></a>
        <a
          href="#item_3"
          className={`p-1 rounded-full ${
            activeLink === "item_3" ? "bg-yellow-400 px-4" : "bg-gray-400"
          }`}
          onClick={() => handleLinkClick("item_3")}
        ></a>
      </div>
    </div>
  );
};

export default Banner2;
{/* <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    whileHover={{ scale: 1.1 }} */}