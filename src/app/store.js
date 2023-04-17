/**
 * @ Author: MD Mahiuddin Tuhin
 * @ Create Time: 2023-04-06 22:56:14
 * @ Modified by: Your name
 * @ Modified time: 2023-04-16 17:24:10
 * @ Description: Redux store file
 */

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
