import React, { useState } from "react";
import ShopSideNav from "./util/sidenav/ShopSideNav";
import Loader from "./util/loader/Loader";
import ShopAllProduct from "./util/allProduct/ShopAllProduct";
import { useGetSearchFilteringProductsQuery } from "../../features/API/APISlice";

function Shop() {
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isError, error } =
    useGetSearchFilteringProductsQuery(searchValue);

  const handleSearchFiltering = (e) => {
    setSearchValue(e.target.value);
  };

  let content;

  if (isLoading) {
    content = (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex items-center justify-center h-screen">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800">
          {error.message}
        </span>
      </div>
    );
  } else {
    content = (
      <div>
        <div className="flex justify-center">
          <ShopSideNav handleSearchFiltering={handleSearchFiltering} />
          <div className="ml-1">
            <div className="flex justify-between">
              <span className="mt-5 ml-6 text-lg font-semibold text-gray-500">
                {data && data.length} Total Products
              </span>
              <select
                data-te-select-init
                className="mt-3 border w-44 ml-4 text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-500 dark:placeholder:text-neutral-400 dark:focus:border-primary rounded-md"
              >
                <option value="lowest">Price(lowest)</option>
                <option value="highest">Price(highest)</option>
                <option value="a-z">Price(a-z)</option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </div>
            {data && data.length > 0 ? (
              <ShopAllProduct products={data} />
            ) : (
              <div className="w-[1000px] flex items-center justify-center h-screen">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  No Product Found
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return content;
}

export default Shop;
