import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/image/logo.png";

import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Logo = () => {
  return (
    <div>
      <div className="navbar w-10/12 mx-auto ">
        <div className="navbar-start relative">
          <div>
            <img className="h-" src={logo} alt="" />
            <div className="bg-amber-400 w-1 h-1 p-1 rounded-full absolute top-10 left-36"></div>
          </div>
        </div>
        <div className="text-3xl pr-8">
          <GiHamburgerMenu />
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
            <p class="absolute top-2 text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Compare
    </p>
            <FiRefreshCcw size={20} />
          </div>
          <div className="group">
             <p class="absolute top-2 text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Favorite
    </p>
            <MdFavoriteBorder size={20} />
          </div>
          <div className="flex items-center gap-2 group">
             <p class="absolute top-2 text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Cart
    </p>
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
