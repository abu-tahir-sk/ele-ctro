import {  AiOutlineUser } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { TbCarCrane } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavbarF = () => {
  return (
    <div className="flex justify-between items-center py-2 text-gray-500 md:w-11/12 lg:w-10/12 mx-auto">
      <div>
        <p className="hover:text-gray-600">Welcome to Worldwide Electronics Store</p>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-6">
          <li className="flex justify-center items-center gap-2 ">
            <a className="text-xl text-gray-800">
              <CiLocationOn />
            </a>
            <Link>Store Locator |</Link>
          </li>

          <li className="flex justify-center items-center gap-2 ">
            <a className="text-xl text-gray-800">
              <TbCarCrane />
            </a>
            <Link>Track Your Order |</Link>
          </li>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1  flex justify-center items-center gap-2">
                  <a className="text-xl font-bold  text-gray-800">
              <PiCurrencyDollarBold />
            </a>
             <Link className="flex justify-center items-center gap-2">Dollor(US) <IoIosArrowDown /> |</Link>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Deutsch</a>
              </li>
              <li>
                <a>Esponal</a>
              </li>
            </ul>
          </div>
          

          <li className="flex justify-center items-center gap-2">
            <a className="text-xl font-bold bg-amber-50 text-gray-800">
              <AiOutlineUser />
            </a>
            <button> <Link className="text-gray-600">Register</Link> or  <Link className="text-gray-600">Sign IN</Link></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarF;
