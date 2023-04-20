/**
 * @ Author: MD Mahiuddin Tuhin
 * @ Create Time: 2023-04-06 22:56:14
 * @ Modified by: Your name
 * @ Modified time: 2023-04-21 00:25:02
 * @ Description: Redux store file
 */

import { configureStore } from "@reduxjs/toolkit";
import productCategoriesSlice from "../features/products/productCategoriesSlice";
import productsSlice from "../features/products/productsSlice";
import productLimitSlice from "../features/products/productLimitSlice";
import productDetailsSlice from "../features/products/productDetailsSlice";
import productCategoriesLoadOneDataSlice from "../features/products/productCategoriesLoadOneDataSlice";

export const store = configureStore({
  reducer: {
    categories: productCategoriesSlice,
    limitProducts: productLimitSlice,
    products: productsSlice,
    productDetail: productDetailsSlice,
    loadOneDataByCategories: productCategoriesLoadOneDataSlice,
  },
});
