import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const ShopSideNav = ({ categoryOnlyData, brands, setSearchValue }) => {
  const [priceFilter, setPriceFilter] = useState(250);
  return (
    <div className="w-1/5 relative">
      <div className=" w-80 mb-10 sticky top-16">
        <div className=" hidden h-screen my-4  lg:block ">
          <div className="h-full rounded-2xl ">
            <div className="pt-2 ml-4 ">
              <div className="relative mb-4 flex w-44 flex-wrap items-stretch">
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="search"
                  className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
              </div>
            </div>

            <nav className="mt-6">
              <span className="my-3 font-medium ml-4">Category</span>
              <div>
                {categoryOnlyData?.map((currentValue, index) => (
                  <button
                    onClick={() => setSearchValue(currentValue)}
                    key={index}
                    className="flex items-center justify-start w-full py-1 pr-0 my-2 font-thin text-gray-500 uppercase transition-colors duration-200  hover:text-blue-500"
                  >
                    <span className="mx-4 text-sm tracking-tighter leading-3 capitalize font-semibold ">
                      {currentValue}
                    </span>
                  </button>
                ))}
              </div>
            </nav>
            <div className="mt-10">
              <span className="my-3 font-medium ml-4">Brand</span>
              <br />
              <select
                onChange={(e) => setSearchValue(e.target.value)}
                data-te-select-init
                className="mt-3 border w-44 ml-4 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:placeholder:text-neutral-400 dark:focus:border-primary rounded-md"
              >
                {!brands?.length && <option>Choose a brand</option>}
                {brands &&
                  brands?.map((brand) => (
                    <option key={brand._id} value={brand?.brand}>
                      {brand?.brand}
                    </option>
                  ))}
              </select>
            </div>
            <div className="mt-10 ml-4">
              <span className="my-3 font-medium">Price</span>
              <div className="flex items-center mt-3">
                <FiDollarSign className="text-gray-500 -ml-1 mr-2" />
                <p className="text-lg font-medium">{priceFilter}</p>
              </div>
              <input
                type="range"
                min="10"
                max="50000"
                value={priceFilter}
                step="1"
                className="range range-warning mt-1 -ml-1 cursor-pointer"
                onChange={(e) => setPriceFilter(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="text-gray-900 mt-5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSideNav;
