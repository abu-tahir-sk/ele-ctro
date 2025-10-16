import { useState } from "react";

const ProductSection = () => {
  const productsData = {
    Laptop: [
      { id: 1, title: "MacBook Air M2", price: 1200, image: "https://cdn-icons-png.flaticon.com/512/882/882747.png" },
      { id: 2, title: "Dell XPS 13", price: 1000, image: "https://cdn-icons-png.flaticon.com/512/882/882747.png" },
      { id: 3, title: "Asus Zenbook", price: 950, image: "https://cdn-icons-png.flaticon.com/512/882/882747.png" },
      { id: 4, title: "HP Spectre x360", price: 1100, image: "https://cdn-icons-png.flaticon.com/512/882/882747.png" },
      { id: 5, title: "Lenovo Yoga", price: 980, image: "https://cdn-icons-png.flaticon.com/512/882/882747.png" },
      { id: 6, title: "Acer Swift 5", price: 870, image: "https://cdn-icons-png.flaticon.com/512/882/882747.png" },
    ],
    Mobile: [
      { id: 7, title: "iPhone 15 Pro", price: 1500, image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },
      { id: 8, title: "Samsung Galaxy S24", price: 1300, image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },
      { id: 9, title: "OnePlus 12", price: 950, image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },
      { id: 10, title: "Google Pixel 8", price: 1200, image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },
      { id: 11, title: "Xiaomi 14 Pro", price: 900, image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },
      { id: 12, title: "Oppo Find X6", price: 850, image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },
    ],
    Accessories: [
      { id: 13, title: "Sony WH-1000XM5", price: 300, image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
      { id: 14, title: "Logitech MX Master 3", price: 120, image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
      { id: 15, title: "Anker Power Bank", price: 60, image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
      { id: 16, title: "Apple AirPods Pro", price: 250, image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
      { id: 17, title: "Samsung Galaxy Buds 2", price: 180, image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
      { id: 18, title: "JBL Bluetooth Speaker", price: 90, image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
    ],
  };

  const [activeTab, setActiveTab] = useState("Laptop");

  return (
    <section className="w-full bg-gray-50 py-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Our Products
      </h2>

      {/* 🔹 Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {productsData[activeTab].map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Left - Image */}
            <div className="w-1/3 flex items-center justify-center bg-gray-50 p-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />
            </div>

            {/* Right - Text */}
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-blue-600 font-bold mt-2">${item.price}</p>
              <button className="mt-3 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
