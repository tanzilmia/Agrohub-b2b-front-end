import React from "react";

const ShopCard = ({ product }) => {
  const {
    name,
    images,
    oldPrice,
    newPrice,
    description,
    id,
    rating,
    size,
    category,
  } = product;

  return (
    <div className="relative  flex flex-col items-center justify-center ">
      <div className="container">
        <div className="max-w-xs shadow-xl rounded-xl p-6">
          <div className="flex flex-col ">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <div className="absolute top-0 right-0 mt-3 mr-3 flex flex-col items-center justify-center p-1 px-2 rounded-full bg-blue-100 shadow-2xl text-gray-500 font-serif text-sm font-medium hover:bg-blue-200 transition-all duration-300">
                  <span className="truncate">{category}</span>
                </div>

                <img
                  src={images && images[0]}
                  alt="Just a flower"
                  className="w-full h-48 object-fill  rounded-2xl"
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className=" whitespace-nowrap mr-3">{rating}</span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-lg mr-auto cursor-pointer  hover:text-purple-500 truncate ">
                      {name}
                    </h2>
                    <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                      INSTOCK
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-xl  font-semibold mt-1">${newPrice}</div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-secondary whitespace-nowrap mr-3">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400">
                        <span className="hover:text-purple-500">{size}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex text-sm font-medium justify-start">
                  <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium  bg-purple-500 px-3 py-1 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
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
