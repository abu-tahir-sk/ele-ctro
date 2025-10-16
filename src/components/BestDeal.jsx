import Audio from "./Audio";


const BestDeal = () => {
      return (
            <div className="bg-gray-100">
                 {/* name of each tab group should be unique */}
<div className="w-11/12 mx-auto flex justify-center items-center py-4">
      <div className="tabs tabs-lift bg-white  justify-center items-center pt-4 w-full">
  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl " aria-label="Best Deal" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 1</div>

  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="Audio" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 "><Audio></Audio></div>

  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="TV & Video" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 3</div>
  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="Cameras" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 3</div>
  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="GPS & Navi" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 3</div>
  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="Computers" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 3</div>
  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="Portable Audio" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 3</div>
  <input type="radio" name="my_tabs_3" className="tab border-none bg-none  text-xl" aria-label="Accessories" />
  <div className="tab-content bg-base-100 border-base-300 ">Tab content 3</div>
</div> 
</div>
            </div>
      );
};

export default BestDeal;