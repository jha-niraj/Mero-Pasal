
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Your Store, Your Way
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Mobile-friendly stores that look professional and work beautifully on every device. 
            Give your customers a seamless shopping experience.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="DukaanNepal online store example on mobile" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Beautiful Stores That Sell</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Every store comes with a clean, professional design that works perfectly on phones, 
              tablets, and computers. Your customers can browse products, add to cart, and 
              checkout seamlessly — creating a shopping experience they'll love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;