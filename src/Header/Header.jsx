import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { PiHandbag } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import logo from "../assets/image/logo.png";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open or not

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state (open/close)
  };
  return (
    <div className="bg-[#fed700]">
      <div className="navbar flex justify-between items-center   w-10/12 mx-auto">
        <div className="flex justify-center items-center">
          <div className="">
            <button className="text-2xl" onClick={toggleMenu}>
              <SlMenu />
            </button>
          </div>
          <div className="h-14 mx-auto pl-4">
            <img className="h-full" src={logo} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className=" text-2xl">
            <CiSearch />
          </button>
          <button className=" text-2xl">
            <LuUserRound />
          </button>
         
            <button className="text-2xl">
              <PiHandbag />
            </button>
           
           
           
          
        </div>
      </div>
      {/* Menu (Drawer-like behavior without daisyUI) */}
      
        <div  className={`absolute left-0 top-0 bg-white shadow-lg p-4 z-50 min-h-screen  flex flex-col transition-transform duration-300 w-6/12 md:w-5/12 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-700 text-3xl"
            >
              <RiCloseLargeFill />
            </button>
          </div>
          <ul className="mt-4 space-y-3 p-4">
            <li>
                  <a>Value of the Day</a>
                </li>
                <li>
                  <a>Top 100 Offers</a>
                </li>
                <li>
                  <a>New Arrivals</a>
                </li>

                <li>
                  <details open>
                    <summary>Computers & Accessories</summary>
                    <ul>
                      <li>
                        <a>All Computers & Accessories</a>
                      </li>
                      <li>
                        <a>Laptops, Desktops & Monitors</a>
                      </li>
                      
                    </ul>
                  </details>
                </li>
                <li>
                  <details open>
                    <summary>Cameras, Audio & Video</summary>
                    <ul>
                      <li>
                        <a>Printers & Ink</a>
                      </li>
                      <li>
                        <a>Networking & Internet Devices</a>
                      </li>
                      
                    </ul>
                  </details>
                </li>
                <li>
                  <details open>
                    <summary>Mobiles & Tablets</summary>
                    <ul>
                      <li>
                        <a>Computer Accessories</a>
                      </li>
                      <li>
                        <a>Smartphones</a>
                      </li>
                      <li>
                        <details>
                          <summary>Movies, Music & Video</summary>
                          <ul>
                            <li>
                              <a>Camera Accessories</a>
                            </li>
                            <li>
                              <a>Security & Surveillance</a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details open>
                    <summary>TV & Audio</summary>
                    <ul>
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                  </li>
          </ul>
        </div>
     
    </div>
  );
};

export default Header;
