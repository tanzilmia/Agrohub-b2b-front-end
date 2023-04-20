import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLimitProducts } from "./productsApi";

const initialState = {
  limitProducts: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchLimitProducts = createAsyncThunk(
  "limitProducts/fetchLimitProducts",
  async () => {
    const response = await getLimitProducts();
    return response;
  }
);

const productLimitSlice = createSlice({
  name: "limitProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

export default productLimitSlice.reducer;
