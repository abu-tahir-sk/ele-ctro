import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
const LastNavbar = () => {
    const [isOpen, setIsOpen] = useState(true);

  // Toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar min-lg:w-[92%]   mx-auto relative pt-6 pb-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          
          <div className="dropdown dropdown-bottom dropdown-open absolute bottom-0">
             <div
        
        role="button"
        onClick={toggleDropdown}
        
        className="flex items-center py-3 pl-4 bg-[#fed700] pr-10 gap-3 font-bold rounded-t-md rounded-b-none btn-wide w-56"
      >
        <TfiMenuAlt size={18} />
        All Departments
      </div>
      {
        isOpen ?  < ul  className="dropdown-content menu   lg:w-56 p-4 shadow-2xl drop-shadow-2xl bg-white rounded-b-md overlay  z-20">
    <li><a>Value of the Day</a></li>
    <li><a>Top 100 Offers</a></li>
    <li><a>Value of the Day</a></li>
    <li><a>Top 100 Offers</a></li>
    <li><a>Value of the Day</a></li>
    <li><a>Top 100 Offers</a></li>
    <li><a>Value of the Day</a></li>
    <li><a>Top 100 Offers</a></li>
    <li><a>Value of the Day</a></li>
    <li><a>Top 100 Offers</a></li>
  </ul> : ""
      }
          
          </div>
        </div>
        <div className="navbar-center  hidden min-lg:flex">
          <ul className="menu menu-horizontal  z-20">
            <li>
              <details>
                <summary className=" text-rose-500 font-bold">Super Deals</summary>
                <ul className="py-2">
                  <li>
                <h3 className="py-2">Value of the Day</h3>
              </li>
             <li>
                <h3 className="">Top 100 Offers</h3>
              </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="font-bold">Featured Brands</a>
            </li>
            <li>
              <a className="font-bold">Trending Styles</a>
            </li>
            <li>
              <a className="font-bold">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <p className="text-gray-600 text-sm">Free Shipping on Orders $50+</p>
        </div>
      </div>
    </div>
  );
};

export default LastNavbar;
