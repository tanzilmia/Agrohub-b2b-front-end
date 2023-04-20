import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getCategories,
  getLimitProducts,
  getPostProduct,
} from "./productsApi";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  postProduct: [],
  products: [],
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response;
  }
);

export const fetchPostProduct = createAsyncThunk(
  "products/fetchPostProduct",
  async ({ user, product, header }) => {
    const response = await getPostProduct(user, product, header);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all products data case
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.products = [];
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.products = [];
      })

      // post a product in database
      .addCase(fetchPostProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.postProduct = [];
      })
      .addCase(fetchPostProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.postProduct = action.payload;
      })
      .addCase(fetchPostProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
        state.postProduct = [];
      });
  },
});

export default productSlice.reducer;
