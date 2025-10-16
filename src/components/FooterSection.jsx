import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import banner from "../assets/image/logo.png";
import masterCard from "../assets/image/MasterCard_Logo.svg.png"

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-center ">
          {/* 🔹 Column 1: Logo + Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-1 rounded-full absolute  left-44"></div>
              <img src={banner} className="h- w-  rounded-full  relative" />
            </div>

            <div className="flex   gap-6 py-6">
              <div className=" text-5xl text-yellow-400">
                <TfiHeadphoneAlt />
              </div>
              <div className="text-sm">
                <p className="text-gray-400 font-mono">Got questions? Call us 24/7!</p>
                <h4 className="text-2xl">+1 234 567 890</h4>
              </div>
            </div>
            <h5 className="font-bold">Contact info </h5>
            <p className="text-sm pt-2 text-gray-500 mb-3">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="#"
                className="p-2  hover:bg-yellow-400 hover:text-gray-900 rounded-full transition text-3xl text-gray-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2  hover:bg-yellow-400 hover:text-gray-900 rounded-full transition text-3xl text-gray-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-yellow-400 hover:text-gray-900 rounded-full transition text-3xl text-gray-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2  hover:bg-yellow-400 hover:text-gray-900 rounded-full transition text-3xl text-gray-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* 🔹 Column 2: Find It Fast */}
          <div>
            <h3 className=" text-lg font-semibold mb-4">Laptops & Computers</h3>
            <ul className="space-y-2 text-sm">
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Cameras & Photography
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Cameras & Photography
                </a>
              </li>
              
             
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Smart Phones & Tablets
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 Video Games & Consoles
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 Gadgets
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                Car Electronic & GPS
                </a>
              </li>
            </ul>
          </div>

          {/* 🔹 Column 3: Customer Care */}
          <div className="md:flex md:flex-col justify-center items-center">
            <h3 className=" text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2 text-sm">
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Printers & Ink
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                Software
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Office Supplies
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Computer Components
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 Accesories
                </a>
              </li>
            </ul>
          </div>

          {/* 🔹 Column 4: My Account */}
          <div>
            <h3 className=" text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 My Account
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 Order Tracking
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 Wish List
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                Customer Service
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Returns / Exchange
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                 FAQs
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-yellow-400">
                  Product Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Bottom Bar */}
      </footer>
        <div className="bg-gray-100 max-w-7xl mx-auto  mt-10  py-4">
          <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Right - Electro Rights */}
            <p className="text-sm text-gray-400 font-bold">
              © {new Date().getFullYear()}{" "}
              <span className="text-black font-semibold pl-2">Electro</span> – All
              Rights Reserved.
            </p>
            {/* Left - Payment Logos */}
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src={masterCard}
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6"
              />
            </div>

            
          </div>
        </div>
    </div>
  );
};

export default FooterSection;
