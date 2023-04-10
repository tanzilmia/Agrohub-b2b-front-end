import React from "react";

const ShopCard = ({ product }) => {
  const { name, image, oldPrice, newPrice, description, id } = product;
  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 shadow-2xl min-w-[320px]">
      <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
          <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {name}
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description.slice(0, 200)}...
          </p>
        </div>

        <img class="object-cover w-full h-48 mt-2" src={image} />

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <div className="flex items-center mr-4">
            <h1 class="text-lg font-bold text-white mr-2">${newPrice}</h1>
            <h1 class="text-sm font-bold text-white line-through">
              ${oldPrice}
            </h1>
          </div>
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
