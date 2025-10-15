import LastNavbar from "../components/LastNavbar";
import Logo from "../components/Logo";
import NavbarF from "../components/NavbarF";


const Navbar = () => {
      return (
            <div>
                  <div><NavbarF></NavbarF></div>
                  <div className="border-b-1 border-gray-300"></div>
                  <div><Logo></Logo></div>
                  <div><LastNavbar></LastNavbar></div>
            </div>
      );
};

export default Navbar;