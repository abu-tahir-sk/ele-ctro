import { TfiMenuAlt } from "react-icons/tfi";
const LastNavbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-10/12 mx-auto relative pt-6 pb-0">
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
          
          <div className="dropdown dropdown-bottom absolute bottom-0">
            <div tabIndex={0} role="button" className="flex items-center py-2 pl-4 bg-[#fed700] pr-10 gap-3 font-bold rounded-t-md rounded-b-none">
                  <TfiMenuAlt size={18} />
              All Departments
            </div>
           < ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
    <li><a>Value of the Day</a></li>
    <li><a>Top 100 Offers</a></li>
  </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="font-bold text-rose-500">Super Deals</summary>
                <ul className="p-2">
                  <li>
                <h3 className="font-bold">Value of the Day</h3>
              </li>
             <li>
                <h3 className="font-bold">Top 100 Offers</h3>
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
          <p className="text-gray-600">Free Shipping on Orders $50+</p>
        </div>
      </div>
    </div>
  );
};

export default LastNavbar;
