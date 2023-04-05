import React from "react";

const GamingProductCard = ({ product }) => {
  const { image_url, new_price, old_price, rating, title } = product;
  return (
    <div className="bg-white pb-6 md:relative flex flex-col hover:shadow hover:shadow-gray-400">
      <img src={image_url} className="md:h-60 md:w-full p-6 sm:p-10" alt="" />
      <div className="mt-4 md:mt-0 mx-10">
        <div className="flex gap-2 mt-2">
          {rating === 3 ? (
            <>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
            </>
          ) : rating === 4 ? (
            <>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
            </>
          ) : (
            <>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
              <i className="ri-star-fill text-[#29BA2F]"></i>
            </>
          )}
        </div>
        <div className="mb-10 md:mb-16">
          <p className="text-xl my-2">{title}</p>
          <span className="flex gap-4 text-3xl font-semibold mb-2">
            <p className="text-gray-400 line-through">${old_price}</p>
            <p className="text-[#29BA2F]">${new_price}</p>
          </span>
        </div>
      </div>
      <div className="md:absolute inset-x-0 bottom-0 text-center">
        <button className="bg-[#29BA2F] font-semibold text-white px-3 py-2 m-2 sm:m-4">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default GamingProductCard;
