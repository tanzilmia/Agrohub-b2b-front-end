/**
 * @ Author: MD Mahiuddin Tuhin
 * @ Create Time: 2023-04-06 22:56:14
 * @ Modified by: Your name
 * @ Modified time: 2023-04-12 08:53:58
 * @ Description: Redux store file
 */

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categorySlice";
import productsReducer from "../features/products/productsSlice";
import productsByCategoryReducer from "../features/productsByCategory/productsByCategorySlice";

export const store = configureStore({
  reducer: {
    allproducts: productsReducer,
    allCategories: categoryReducer,
    productsByCategory: productsByCategoryReducer,
  },
});
