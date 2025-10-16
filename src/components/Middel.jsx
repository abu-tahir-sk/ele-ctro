import { useEffect, useState } from "react";

const Middel = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, []);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white border border-gray-200  shadow p-6 w-full">
      <img
        src={item.image_url}
        alt={item.name}
        className="h-60 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
        {item.name}
      </h2>
      <p className="text-sm text-gray-500">{item.discount_label}</p>
      <p className="text-lg font-bold mt-2 text-gray-700">
        ${item.current_price}{" "}
        <span className="line-through text-gray-400 text-base">
          ${item.original_price}
        </span>
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
        Shop Now
      </button>
    </div>
  );
};

export default Middel;
