

// Helper function to format price
const formatPrice = (price) => `$${price.toFixed(2)}`;

export default function SpecialOfferCard({ product }) {
  const stockTotal = product.stock_sold + product.stock_available;
  const stockPercentage = Math.round((product.stock_sold / stockTotal) * 100);

  return (
    // Card styling to match the large yellow border and shadow from the image
    <div className="card bg-base-100 shadow-xl overflow-hidden border-2 border-yellow-400 p-4">
      <div className="flex justify-between items-center px-8 ">

        <h2 className="text-3xl mb-4 text-gray-800">Special br Offer</h2>
        <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center">
          <span className="text-sm font-bold text-white text-center">
            {product.discount_label}
          </span>
        </div>
      </div>
      <div className="p-4">
        {/* Image Section */}
        <figure className="mb-4">
          <img
            src={product.image_url}
            alt={product.name}
            className="object-contain w-full h-80 rounded-lg mx-auto"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body p-0 items-center text-center">
          <h3 className="text-lg  text-primary font-semibold mb-2">{product.name}</h3>

          {/* Price Block */}
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-error mr-3">
              {formatPrice(product.current_price)}
            </span>
            <span className="text-lg text-gray-400 line-through">
              {formatPrice(product.original_price)}
            </span>
          </div>

          {/* Stock/Progress Bar (Mimics the bottom bar in the original image) */}
          <div className="w-full text-sm font-semibold text-gray-600 pt-2">
            {/* For TSX uncomment the commented types below */}

            <div className="flex justify-between">
              <span>
                Availavle:{" "}
                <span className="font-bold text-gray-800">
                  {product.stock_available}
                </span>
              </span>
              <span>
                Already Sold:{" "}
                <span className="font-bold text-gray-800">
                  {product.stock_sold}
                </span>
              </span>
            </div>
            <input
              type="range"
              min={0}
              max="100"
              defaultValue="40"
              className="range text-yellow-300 my-2"
            />
            <p className="text-center py-3">Hurry Up! Offer ends in:</p>

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
              <div className="flex flex-col p-4 text-xl bg-gray-200 text-black rounded-box">
                00
              </div>
              <div className="flex flex-col p-4 text-xl bg-gray-200 text-black rounded-box ">
                00
              </div>
              <div className="flex flex-col p-4 text-xl bg-gray-200 text-black rounded-box ">
                <span className="countdown font-mono text-5xl"></span>
                00
              </div>
            </div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
              <div className="flex flex-col p-4">
                HORS
              </div>
              <div className="flex flex-col p-4">
                MIN
              </div> 
              <div className="flex flex-col p-4">
                <span className="countdown font-mono text-5xl"></span>
                SECS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
