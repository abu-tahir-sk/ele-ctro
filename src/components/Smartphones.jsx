import { useEffect, useState } from "react";

const Smartphones = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data2.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 w-full h-full">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 shadow p-6 flex flex-col items-center justify-center hover:shadow-2xl transition"
        >
          <img
            src={item.image_url}
            alt={item.name}
            className="h-48 object-contain mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-800 text-center mb-1">
            {item.name}
          </h2>
          <p className="text-sm text-gray-500 mb-1">{item.discount_label}</p>
          <p className="text-base font-semibold text-gray-700">
            ${item.current_price}{" "}
            <span className="line-through text-gray-400 text-sm">
              ${item.original_price}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Smartphones;
