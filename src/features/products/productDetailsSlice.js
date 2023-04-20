import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductDetailsByID } from "./productsApi";

const initialState = {
  productDetail: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchProductDetails = createAsyncThunk(
  "productDetail/fetchProductDetails",
  async (id) => {
    const response = await getProductDetailsByID(id);
    return response;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.productDetail = [];
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.productDetail = [];
      });
  },
});

export default productDetailsSlice.reducer;
