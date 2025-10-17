import Cameras from "./Cameres";
import Middel from "./Middel";


const Audio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-white pt-6">
      {/* Left */}
      <div className="flex col-span-1">
        <Cameras />
      </div>

      {/* Middle */}
      <div className="flex col-span-2">
        <Middel />
      </div>

      {/* Right */}
      <div className="flex col-span-1">
       <Cameras />
      </div>
    </div>
  );
};

export default Audio;
