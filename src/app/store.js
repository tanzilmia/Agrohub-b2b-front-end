import { configureStore } from "@reduxjs/toolkit";
import productCategoriesLoadOneDataSlice from "../features/products/productCategoriesLoadOneDataSlice";
import { productsAPI } from "../features/API/APISlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
    loadOneDataByCategories: productCategoriesLoadOneDataSlice,

    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});
