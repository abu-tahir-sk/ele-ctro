

const BestDeal = () => {
  return (
    <div className="">
      {/* name of each tab group should be unique */}
      <div className="bg-white shadow-2xl flex justify-center items-center w-11/12 mx-auto">
        <div
           className="w-full mx-auto border-b-2 border-gray-400 tabs tabs-lift justify-center items-center pt-4 overflow-x-auto snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }} // Adding snap-type
        >
          <div className="flex space-x-4">
            {/* Tab Buttons */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="Best Deal"
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="Audio"
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="TV & Video"
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="Cameras"
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="GPS & Navi"
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="Computers"
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="Portable Audio"
            />
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl border-none [--tab-border-color:transparent] data-[state=checked]:border-b-2 data-[state=checked]:border-blue-500"
              aria-label="Accessories"
            />
          </div>

          <div className="flex space-x-4">
            {/* Tab Content */}
            <div
              className="tab-content bg-base-100 border-base-300"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }} // Ensuring width of content
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
            <div
              className="tab-content"
              style={{ scrollSnapAlign: "start", flex: "0 0 100%" }}
            >
            
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .tab:checked {
            border-bottom: 2px solid #fff900; /* Ensure border is 2px */
          }
        `}
      </style>
    </div>
  );
};

export default BestDeal;
