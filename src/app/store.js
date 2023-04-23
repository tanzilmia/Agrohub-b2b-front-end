import { configureStore } from "@reduxjs/toolkit";
import productCategoriesLoadOneDataSlice from "../features/products/productCategoriesLoadOneDataSlice";
import { productsAPI } from "../features/API/APISlice";

export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
    loadOneDataByCategories: productCategoriesLoadOneDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});
