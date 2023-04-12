/**
 * @ Author: Tuhin
 * @ Create Time: 2023-04-10 13:45:22
 * @ Modified by: Your name
 * @ Modified time: 2023-04-12 09:37:49
 * @ Description: shop page to  display product with categories
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "./util/carousel/Carousel";
import Loader from "./util/loader/Loader";
import ShopAllProduct from "./util/allProduct/ShopAllProduct";
import { useEffect } from "react";
import { fetchAllProducts } from "../../features/products/productsSlice";
import ShopSideNav from "./util/sidenav/ShopSideNav";
import { getProductByCategory } from "../../features/productsByCategory/productsByCategorySlice";
import { useState } from "react";

function Shop() {
  const dispatch = useDispatch();
  // getting all products
  const {
    isLoading,
    isError,
    error,
    products: allProducts,
  } = useSelector((state) => state.allproducts);
  const [products, setProducts] = useState(allProducts);

  const {
    isLoading: byCategoryLoading,
    isError: byCategoryIsError,
    error: byCategoryError,
    products: productsbyCategory,
  } = useSelector((state) => state.productsByCategory);

  // get all category from redux store
  const {
    isLoading: categoryLoading,
    isError: categoryIsError,
    error: categoryError,
    categories,
  } = useSelector((state) => state.allCategories);

  // fetch product from store
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // get product by category
  useEffect(() => {
    products &&
      categories &&
      dispatch(getProductByCategory({ products, categories }));
  }, [dispatch, products, categories]);

  // pagination facts

  // conditionally load data
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

  if (!isLoading && !isError && products.length === 0) {
    content = (
      <div className="flex items-center justify-center h-screen">
        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
          No Product Found
        </span>
      </div>
    );
  }

  if (!isLoading && !isError && products.length > 0) {
    content = (
      <div>
        <div className="mx-4 md:mx-12 mt-16">
          <Carousel />
        </div>
        <div className="flex mt-24">
          <ShopSideNav setProducts={setProducts} />
          <div className="ml-1 flex flex-col items-center justify-center">
            <ShopAllProduct products={products} />
          </div>
        </div>
      </div>
    );
  }

  return content;
}

export default Shop;
