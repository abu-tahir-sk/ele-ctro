// import { useEffect, useState } from "react";
// import banner from "../assets/image/img1 (1).png"
// import backgroundImage from "../assets/image/bg-igm.jpg";

// const Banner = () => {
//   const [slider, setSlider] = useState([]);

//   useEffect(() => {
//     // Simulating data fetching, replace with actual data
//     setSlider([
//       {
//         id: 1,
//         title: "T",
       
        
//       },
//     ]);
//   }, []);

//   return (
//     <>
//       {slider.length > 0 ? (
//         <div className="relative w-full h-auto min-h-[400px] sm:min-h-[500px] lg:h-[80vh] flex items-center justify-center " >
//           {/* Overlay */}
//           <div className="absolute inset-0  bg-opacity-30 bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

//           {/* Main Wrapper */}
//           <div className="relative w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 z-10 text-gray-700 flex items-center justify-between">
            
//             {/* Left Empty Space (Only for Large Screens) */}
//             <div className="hidden lg:block lg:w-3/12"></div> {/* Empty space for lg screens */}

//             {/* Right Section: Content + Image */}
//             <div className="w-full lg:w-9/12 flex flex-row items-center justify-between gap-6 sm:gap-10">
              
//               {/* Content (Text) */}
//               <div className="w-full lg:w-1/2 text-left space-y-4">
//                 <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-light leading-tight">
//                  THE NEW STANDARD
//                 </h2>
//                 <p className=" md:text-lg opacity-90 font-bold">
//                  UNDER FAVORABLE SMARTWATCHES
//                 </p>

//                 <div className="flex flex-col items-start mt-2 space-y-3">
//                   <span className="text-sm sm:text-base tracking-wide">FROM</span>

//                   <div className="relative inline-block">
//                     <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-6">
//                       749
//                     </h3>
//                     <span className="absolute text-2xl lg:text-3xl font-bold -top-1 left-0">
//                       $
//                     </span>
//                     <span className="absolute text-2xl  font-bold -top-1  -right-8">
//                       99
//                     </span>
//                   </div>

//                   <button className="bg-yellow-400 hover:bg-gray-900 hover:text-white text-black px-8 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg mt-3">
//                     Start Buying
//                   </button>
//                 </div>
//               </div>

//               {/* Image Section */}
//               <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
//                 <img
//                   src={banner}
//                   alt="watch"
//                   className=" "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">Loading...</p>
//       )}
//     </>
//   );
// };

// export default Banner;
