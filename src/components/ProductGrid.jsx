import React from 'react';
import products from '../data/products.json'; // Make sure this path is correct
import StandardProductCard from './StandardProductCard';
import SpecialOfferCard from './SpecialOfferCard';

export default function ProductGrid() {
  const specialOffer = products.find(p => p.type === 'special_offer');
  const featuredProducts = products.filter(p => p.type === 'featured');

  return (
    <section className="container mx-auto p-4 md:p-8  shadow-xl rounded-lg">
      
      {/* Main Layout: 1 column on small screens, 3 columns on large screens (1/3 for offer, 2/3 for grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* COLUMN 1: SPECIAL OFFER (Takes 1 of 3 columns) */}
        <div className="lg:col-span-1">
          {specialOffer && (
             <SpecialOfferCard product={specialOffer} />
          )}
        </div>

        {/* COLUMN 2: FEATURED PRODUCTS AREA (Takes 2 of 3 columns) */}
        <div className="lg:col-span-2">
            
            {/* Tab/Header Section */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-6 border-b border-gray-200">
                <span className='text-primary border-b-2 border-primary pb-3'>Featured</span> 
                <span className='text-gray-500 hover:text-gray-700 cursor-pointer pb-3'>On Sale</span> 
                <span className='text-gray-500 hover:text-gray-700 cursor-pointer pb-3'>Top Rated</span>
            </h2>

            {/* PRODUCT GRID: Items arranged in a 3-column layout within this section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                    <StandardProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}