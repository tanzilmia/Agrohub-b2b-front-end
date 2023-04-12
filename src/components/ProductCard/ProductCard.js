import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, images, newPrice, oldPrice, name, description } = product;
  return (
    <Link to={`/details/${_id}`}>
      <div className="flex flex-col lg:w-full sm:flex-row justify-center md:justify-start items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 lg:h-52 border border-gray-200 hover:border-orange-500">
        <div className="w-full sm:w-1/2 relative">
          <img
            src={images && images[0]}
            className="w-full h-52 transform hover:scale-105 transition duration-300 hover:opacity-75"
            alt=""
          />
          <div className="absolute bottom-0 right-0 px-3 py-1 bg-white bg-opacity-80">
            <span className="text-gray-700 font-semibold">${newPrice}</span>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-6 py-4">
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-orange-500">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <span className="text-gray-600 text-sm">(5)</span>
          </div>
          <h3 className="text-sm font-semibold mb-2 text-gray-800">
            {name.slice(0, 35)}
          </h3>
          <Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-extralight py-1 px-2 rounded transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
