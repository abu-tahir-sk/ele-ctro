import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { PiHandbag } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import logo from "../assets/image/logo.png"

const Header = () => {
  return (
    <div className="bg-[#fed700]">
      <div className= "navbar flex justify-between items-center   w-10/12 mx-auto">
      <div className="flex justify-center items-center">
            <div className="">
        <button className="text-2xl">
          <SlMenu />
        </button>
      </div>
      <div className="h-14 mx-auto pl-4">
       
        <img className="h-full" src={logo} alt="" />
      </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="btn btn-square btn-ghost text-2xl">
          <CiSearch />
        </button>
        <button className="btn btn-square btn-ghost text-2xl">
       
          <LuUserRound />
        </button>
        <button className="text-2xl">
        
          <PiHandbag />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
