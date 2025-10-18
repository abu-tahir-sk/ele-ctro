import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { TbCarCrane } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const NavbarF = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerHandler, emailVerification, profileUpdate } =
    useContext(AuthContext);
  const navigate = useNavigate();

  
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    email: "",
    error: "",
  });

  const handleSubmit = (e) => {
    let newErrors = { terms: "", password: "", email: "", error: "" };

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrors("");
    setSuccess(false);

    if (password.length < 6) {
      newErrors.password = "Password should be 6 characters or longer";
      setErrors(newErrors);
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "pleas valid email";
      setErrors(newErrors);
      return;
    } else {
      registerHandler(email, password)
        .then((result) => {
          login("user@example.com");

          emailVerification().then(() => {
            // if (!result.user.emailVerified) {
            //   newErrors.email = "Please verify your Email";
            //   setErrors(newErrors);
            //   return;
            // } else {
            // }
          });

          e.target.reset();
          setSuccess(true);
          toast.success("✅ Login successful!", {
            position: "top-center",
          });
          navigate("/dashboard");
        })

        .catch((error) => {
          newErrors.error = error.message;
          setErrors(newErrors);
          setSuccess(false);
          e.target.reset();
        });
    }
  };

  return (
    <div className="flex justify-between items-center py-2 text-gray-500  min-lg:w-[92%] mx-auto">
      <div>
        <p className="hover:text-gray-600 text-[13px]">
          Welcome to Worldwide Electronics Store
        </p>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-6">
          <li className="flex justify-center items-center gap-2 ">
            <a className="text-xl text-gray-800">
              <CiLocationOn />
            </a>
            <Link className="text-[13px]">Store Locator |</Link>
          </li>

          <li className="flex justify-center items-center gap-2 ">
            <a className="text-xl text-gray-800">
              <TbCarCrane />
            </a>
            <Link className="text-[13px]">Track Your Order |</Link>
          </li>

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="m-1  flex justify-center items-center gap-2"
            >
              <a className="text-xl font-bold  text-gray-800">
                <PiCurrencyDollarBold />
              </a>
              <Link className="flex justify-center items-center gap-2 text-[13px]">
                Dollor(US) <IoIosArrowDown /> |
              </Link>
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

          <div className="flex justify-center items-center gap-2">
            <a className="font-bold  text-gray-800 flex justify-center items-center gap-2">
              <AiOutlineUser />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button text-[13px]"
                >
                  Register  or  <span className="text-[13px] font-light text-gray-800"> Sign IN</span>
                </label>
              </div>
              
            </a>
            
            <div>
              {" "}
              <div className="flex justify-end  gap-6">
                <div className="drawer drawer-end opacity-100">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />

                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu  text-base-content min-h-full w-96 py-4 px-8 bg-white shadow-lg">
                      {/* Sidebar content here */}
                      <div className=" flex flex-col justify-center min-h-screen">
                        <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">
                          Welcome Back!
                        </h2>
                        <p className="text-center text-gray-500 mb-6">
                          Login to manage your account
                        </p>

                        <form onSubmit={handleSubmit}>
                          {/* Email Field */}
                          <div className="mb-4 relative">
                            <label
                              htmlFor="email"
                              className="block text-gray-700"
                            >
                              Email
                            </label>
                            <div className="absolute left-3 top-9 text-gray-500">
                              <AiOutlineUser />
                            </div>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full mt-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                              placeholder="Enter your email"
                              required
                            />
                          </div>

                          {/* Password Field */}
                          <div className="mb-6">
                            <label
                              htmlFor="password"
                              className="block text-gray-700"
                            >
                              Password
                            </label>

                            <input
                              type="password"
                              id="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded-full mt-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                              placeholder="Enter your password"
                              required
                            />
                            {/* Forgot Password Link */}
                            <p
                              href="/forgot-password"
                              className="text-[12px] text-gray-500 hover:text-yellow-400  font-light text-end pt-1"
                            >
                              Forgot password?
                            </p>
                          </div>

                          {/* Login Button */}
                          <button
                            type="submit"
                            className="w-full py-2 bg-[#fff900] text-black  rounded-full font-bold hover:bg-yellow-400 transition-all duration-300"
                          >
                            Login
                          </button>
                        </form>
                       
                        {errors.password && (
                          <p className="text-red-500 text-center">
                            {errors.password}
                          </p>
                        )}
                        {errors.email && (
                          <p className="text-red-500 text-center">
                            {errors.email}
                          </p>
                        )}
                        {errors.error && (
                          <p className="text-red-500 text-center">
                            {errors.error}
                          </p>
                        )}
                        {/* Don't have an account? Sign Up Link */}
                        <p className="text-center text-[12px] font-light text-gray-400 mt-4">
                          Don't have an account?
                          <a
                            href="/signup"
                            className="text-[12px] font-light text-gray-500 hover:underline"
                          >
                            Sign Up
                          </a>
                        </p>

                        {/* Social Media Buttons */}
                        <div className="flex justify-center items-center gap-4 mt-6">
                          <button className="flex justify-center items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-300 transition-all hover:text-black duration-300 font-bold">
                            <FaFacebookF /> Facebook
                          </button>
                          <button className="flex justify-center items-center gap-2 px-6 py-2 bg-emerald-100 text-black font-bold rounded-full hover:bg-red-200 transition-all duration-300">
                            <FcGoogle /> Google
                          </button>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="drawer drawer-end overlay z-50 opacity-100">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarF;
