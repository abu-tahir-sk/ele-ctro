import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/image/logo.png";

import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw, FiUploadCloud } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import images from "../assets/image/images.jfif";

const Logo = () => {
  return (
    <div>
      <div className="navbar min-lg:w-[92%] mx-auto ">
        <div className="navbar-start">
          <div>
            <img className="" src={logo} alt="" />
          </div>
        </div>
        <div className="text-3xl pr-8">
          <div className="drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-1" className=" drawer-button">
                <GiHamburgerMenu />
              </label>
            </div>
            <div className="drawer-side z-50 drop-shadow-emerald-100 overlay">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-white min-h-screen p-4 w-80  relative bg-cover bg-no-repeat ">
                {/* Sidebar content here */}
                <div>
                  <img className="h-" src={logo} alt="" />
                  <div className="bg-yellow-400 w-1 h-1 p-1 rounded-full absolute top-14 left-40"></div>
                </div>
                <div
                  className="absolute bottom-0 right-[1px] bg-local bg-cover w-full h-[30vh]"
                  style={{ backgroundImage: `url(${images})` }}
                ></div>

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

                <div className="flex justify-center items-center gap-8 fixed bottom-8">
                  <p className="text-white">Privacy</p>
                  <p> Terms</p>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex w-6/12">
          <label className="flex  rounded-full w-full border-2 border-[#fed700] pl-4">
            <input
              className="p-2 focus:outline-none"
              type="text"
              placeholder="Search for Products"
            />
            <select className="w-full text-end focus:outline-none mr-4">
              <option>All Category</option>
              <option>Two</option>
            </select>

            <span className="label rounded-r-full bg-[#fed700]  text-2xl px-4">
              <IoIosSearch />
            </span>
          </label>
        </div>
        <div className="navbar-end pl-12">
          <div className="flex justify-center items-center gap-8">
            <div className="group">
              <p className="absolute top-2 text-sm text-white p-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Compare
              </p>
              <FiRefreshCcw size={20} />
            </div>
            <div className="group">
              <span className="absolute top-2 text-sm text-white p-[3px] rounded bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Favorite
              </span>
              <MdFavoriteBorder size={20} />
            </div>
            <div className="flex items-center gap-2 group ">
              <span className="absolute top-2 text-sm text-white p-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cart
              </span>
              <HiOutlineShoppingBag className="font-bold" size={20} />
              <h4 className="text-xl font-bold">$1785.00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
