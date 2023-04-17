import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getLimitProducts } from "./productsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  products: [],
  limitProducts: [],
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response;
  }
);

export const fetchLimitProducts = createAsyncThunk(
  "products/fetchLimitProducts",
  async () => {
    const response = await getLimitProducts();
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
      });

    // get limit products data case
    builder
      .addCase(fetchLimitProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.limitProducts = [];
      })
      .addCase(fetchLimitProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.limitProducts = action.payload;
      })
      .addCase(fetchLimitProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.limitProducts = [];
      });
  },
});

export default productSlice.reducer;
