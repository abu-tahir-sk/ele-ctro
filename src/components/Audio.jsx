import Cameras from "./Cameres";
import Middel from "./Middel";
import Smartphones from "./Smartphones";

const Audio = () => {
  return (
    <div className="grid grid-cols-4  p-4 bg-gray-50">
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
        <Smartphones />
      </div>
    </div>
  );
};

export default Audio;
