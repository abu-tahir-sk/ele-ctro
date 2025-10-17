import { useState } from "react";

const ProductSection = () => {
  const productsData = {
    Laptop: [
      {
        id: 1,
        title: "Purple Wireless Headphones Solo 2 HD",
        price: 1200,
        image: "https://i.ibb.co/XrgpMRhJ/1a.jpg",
      },
      {
        id: 2,
        title: "Yellow Earphones Waterproof with Bluetooth",
        price: 1000,
        image: "https://i.ibb.co/j9CjvX3g/2b.jpg",
      },
      {
        id: 3,
        title: "Smartwatch 2.0 LTE Wifi Waterproof",
        price: 950,
        image: "https://i.ibb.co/4vXzyTT/3c.jpg",
      },
      {
        id: 4,
        title: "Powerbank 1130 mAh Blue",
        price: 1100,
        image: "https://i.ibb.co/SXMqRbd4/4d.jpg",
      },
      {
        id: 5,
        title: "Camera C430W 4k Waterproof",
        price: 980,
        image: "https://i.ibb.co/whsd6JSK/5e.jpg",
      },
      {
        id: 6,
        title: "22Mps Camera 6200U with 500GB SDcard",
        price: 870,
        image: "https://i.ibb.co/4wHmrTS4/6f.jpg",
      },
      {
        id: 7,
        title: "Nerocool EN52377 Dead Silence Gaming Cube Case",
        price: 1500,
        image: "https://i.ibb.co/F4VjDLp9/7g.jpg",
        star: "⭐️⭐️⭐️",
      },
      {
        id: 8,
        title: "Smartphone 6S 32GB LTE",
        price: 1300,
        image: "https://i.ibb.co/1tGwzWDB/8h.jpg",
        star: "⭐️⭐️⭐️",
      },
      {
        id: 9,
        title: "Full Color LaserJet Pro M452dn",
        price: 950,
        image: "https://i.ibb.co/PGzND93M/9i.jpg",
        star: "⭐️⭐️⭐️",
      }
    ],
    Mobile: [
      
      {
        id: 10,
        title: "Google Pixel 8",
        price: 1200,
        image: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
      },
      {
        id: 11,
        title: "Xiaomi 14 Pro",
        price: 900,
        image: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
      },
      {
        id: 12,
        title: "Oppo Find X6",
        price: 850,
        image: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
      },
    ],
    Accessories: [
      {
        id: 13,
        title: "Sony WH-1000XM5",
        price: 300,
        image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      },
      {
        id: 14,
        title: "Logitech MX Master 3",
        price: 120,
        image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      },
      {
        id: 15,
        title: "Anker Power Bank",
        price: 60,
        image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      },
      {
        id: 16,
        title: "Apple AirPods Pro",
        price: 250,
        image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      },
      {
        id: 17,
        title: "Samsung Galaxy Buds 2",
        price: 180,
        image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      },
      {
        id: 18,
        title: "JBL Bluetooth Speaker",
        price: 90,
        image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Laptop");

  return (
    <section className="w-full py-6">
      {/* 🔹 Tabs */}
      <div className="flex justify-between space-x-4 mb-8 max-w-11/12 mx-auto border-b-2 border-gray-200 ">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-12 py-2 font-medium transition-all ${
              activeTab === tab
                ? "border-b-2 border-[#fed900] text-gray-700"
                : " "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        {productsData[activeTab].map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white    transition-all duration-300"
          >
            {/* Left - Image */}
            <div className="w-1/3 flex items-center justify-center p-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />
            </div>

            {/* Right - Text */}
            <div className="w-2/3 p-4">
              <h3 className="font-bold text-[#0062bd]">
                {item.title}
              </h3>
              <p className="mt-2">${item.price}.00</p>
              <p className="mt-2 text-yellow-400 ">{item.star}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
