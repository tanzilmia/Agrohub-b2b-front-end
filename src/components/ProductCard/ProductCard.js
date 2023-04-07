import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, image, newPrice, oldPrice, name } = product;

  return (
    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center bg-white py-6">
      <img src={image} className="md:w-40 md:h-full mx-6" alt="" />
      <div className="mt-6 md:mt-0 mx-10">
        <div className="flex gap-2">
          <i className="ri-star-fill text-[#29BA2F]"></i>
          <i className="ri-star-fill text-[#29BA2F]"></i>
          <i className="ri-star-fill text-[#29BA2F]"></i>
          <i className="ri-star-fill text-[#29BA2F]"></i>
          <i className="ri-star-fill text-[#29BA2F]"></i>
        </div>
        <div>
          <p className="text-2xl my-2">{name}</p>
          <span className="flex gap-4 text-3xl font-semibold mb-2">
            <p className="text-gray-400 line-through">${oldPrice}</p>
            <p className="text-[#29BA2F]">${newPrice}</p>
          </span>
          <Link to={`/details/${_id}`}>
            <button className="bg-[#29BA2F] text-white font-semibold  px-3 py-2 mt-2">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
