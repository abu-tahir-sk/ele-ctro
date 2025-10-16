import { PiTelegramLogoThin } from "react-icons/pi";
const NewsletterBar = () => {
  return (
    <div className="w-full bg-[#fed700] text-gray-700 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:w-11/12">
        
        {/* 🔹 Left - Logo */}
        <div className="flex items-center gap-3">
          <PiTelegramLogoThin className="h-10 w-10 bg-[#fed700] p-1 rounded-full" />
            
          
          <h2 className="text-xl font-normal">
            Sign up  to Newsletter
          </h2>
        </div>

        {/* 🔹 Middle Text */}
        <p className="text-center md:text-left  md:text-base">
         . . . . and receive <span className=" font-bold text-gray-700">$20 coupon for your first shopping.</span>
        </p>

        {/* 🔹 Right - Input field */}
        <form className="flex w-full md:w-auto lg:w-5/12 items-center border border-white/30  overflow-hidden rounded-full bg-white text-gray-700">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-8 py-2 outline-none w-full"
          />
          <button
            type="submit"
            className="bg-gray-900 hover:bg-yellow-500 text-white font-semibold px-8 py-3 text-sm transition-all"
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
};

export default NewsletterBar;
