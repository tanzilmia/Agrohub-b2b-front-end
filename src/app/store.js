import { configureStore } from "@reduxjs/toolkit";
import productCategoriesLoadOneDataSlice from "../features/products/productCategoriesLoadOneDataSlice";
import { productsAPI } from "../features/API/APISlice";
import productsSlice from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
    products: productsSlice,
    loadOneDataByCategories: productCategoriesLoadOneDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});
