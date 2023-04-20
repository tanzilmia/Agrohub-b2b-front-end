import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./productsApi";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchProductCategories = createAsyncThunk(
  "categories/fetchProductCategories",
  async () => {
    const response = await getCategories();
    return response;
  }
);

const productCategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.categories = [];
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.categories = [];
      });
  },
});

export default productCategoriesSlice.reducer;
