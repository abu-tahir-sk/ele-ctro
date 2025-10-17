
import { BiRefresh } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
// Helper function to format price
const formatPrice = (price) => `$${price.toFixed(2)}`;

export default function StandardProductCard({ product }) {
  // Use price and original price if available, otherwise display only the name (like the bottom row of the image)
  const showPrices = product.current_price !== null;
  const originalPrice = product.original_price;

  return (
    // Card uses DaisyUI classes: card, bg-base-100, shadow-xl
    <div className="card   border-2 border-base-200 transition-shadow p-2 group hover:bg-white hover:shadow-2xl hover:rounded-none">
      
      {/* Product Category Label */}
      {product.category && <div className="text-sm text-gray-500 text-center pt-2 px- py-2  rounded-lg">{product.category}</div>}
      <h2 className="text-lg text-center py-4 font-semibold h-10 overflow-hidden text-primary transition-colors cursor-pointer">
          {product.name}
        </h2>
      
      <figure className="px-4 pt-4 pb-2">
        <img src={product.image_url} alt={product.name} className="rounded-xl h-40 object-contain w-full" />
      </figure>

      <div className="card-body p-4 text-center items-center">
        
        {/* Product Name (Slightly smaller text to fit 3-column grid) */}
        
        
        {/* Price Block with Shopping Cart Icon */}
        <div className="mt-2 flex items-center justify-center w-full">
            {showPrices ? (
                <>
                    {originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                    <span className="text-xl text-neutral">
                        {formatPrice(product.current_price)}
                    </span>
                    {/* Shopping Cart Icon (mimics the original image's look) */}
                    <button className="btn btn-ghost btn-circle btn-sm ml-auto text-white bg-yellow-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </button>
                   
                </>
            ) : (
                // Placeholder for items without price/action (like the bottom-most row)
                <div className="h-7"></div> 
            )}
        </div>
      </div>
      <div className='  text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center  w-full border-t-2 border-gray-200'>
             <p className='flex text-sm'><BiRefresh className="text-xl text-gray-400" /> Compare</p>
        <p className="flex justify-center items-center text-sm"><MdFavoriteBorder className="text-xl text-gray-400" />Add to Wishlist</p>
      </div>
    </div>
  );
}