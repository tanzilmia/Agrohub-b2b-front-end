/**
 * @ Author: Tuhin
 * @ Create Time: 2023-04-10 13:45:22
 * @ Modified by: Your name
 * @ Modified time: 2023-04-24 00:11:51
 * @ Description: shop page to  display product with categories
 */

import React from "react";
import Carousel from "./util/carousel/Carousel";
import ShopSideNav from "./util/sidenav/ShopSideNav";
import Loader from "./util/loader/Loader";
import ShopAllProduct from "./util/allProduct/ShopAllProduct";
import { useGetAllProductsQuery } from "../../features/API/APISlice";

function Shop() {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  let content = null;

  if (isLoading) {
    content = (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className="flex items-center justify-center h-screen">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800">
          {error.message}
        </span>
      </div>
    );
  }

  if (!isLoading && !isError && data.length === 0) {
    content = (
      <div className="flex items-center justify-center h-screen">
        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
          No Product Found
        </span>
      </div>
    );
  }

  if (!isLoading && !isError && data.length > 0) {
    content = (
      <div>
        <div className="mx-4 md:mx-12 mt-16">
          <Carousel />
        </div>
        <div className="flex mt-24">
          <ShopSideNav />
          <div className="ml-1 flex flex-col items-center justify-center">
            <ShopAllProduct products={data} />
          </div>
        </div>
      </div>
    );
  }

  return content;
}

export default Shop;
