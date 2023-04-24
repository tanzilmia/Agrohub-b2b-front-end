import React from "react";

const ShopCard = ({ product }) => {
  const { name, images, oldPrice, newPrice, description, id, rating, size } =
    product;

  return (
    <div class="relative  flex flex-col items-center justify-center ">
      <div class="container">
        <div class="max-w-xs shadow-xl rounded-xl p-6">
          <div class="flex flex-col ">
            <div class="">
              <div class="relative h-62 w-full mb-3">
                <div class="absolute flex flex-col top-0 right-0 p-3">
                  <button class="transition ease-in duration-300 hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <img
                  src={images && images[0]}
                  alt="Just a flower"
                  class="w-full h-48 object-fill  rounded-2xl"
                />
              </div>
              <div class="flex-auto justify-evenly">
                <div class="flex flex-wrap ">
                  <div class="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class=" whitespace-nowrap mr-3">{rating}</span>
                  </div>
                  <div class="flex items-center w-full justify-between min-w-0 ">
                    <h2 class="text-lg mr-auto cursor-pointer  hover:text-purple-500 truncate ">
                      {name}
                    </h2>
                    <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                      INSTOCK
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div class="text-xl  font-semibold mt-1">${newPrice}</div>
                  <div class="lg:flex  py-4  text-sm text-gray-600">
                    <div class="flex-1 inline-flex items-center mb-3">
                      <span class="text-secondary whitespace-nowrap mr-3">
                        Size
                      </span>
                      <div class="cursor-pointer text-gray-400">
                        <span class="hover:text-purple-500">{size}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex text-sm font-medium justify-start">
                  <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium  bg-purple-500 px-3 py-1 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                    <span>Add Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
