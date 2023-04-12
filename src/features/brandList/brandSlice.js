import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "./categoryApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  brand: [],
};

export const fetchAllBrand = createAsyncThunk(
  "brand/fetchAllBrand",
  async () => {
    const response = await getAllCategory();
    return response;
  }
);

const brandSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBrand.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.brand = [];
      })
      .addCase(fetchAllBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.brand = action.payload;
      })
      .addCase(fetchAllBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
        state.brand = [];
      });
  },
});

export default brandSlice.reducer;
