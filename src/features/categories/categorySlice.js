import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "./categoryApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  categories: [],
};

export const fetchAllCategory = createAsyncThunk(
  "category/fetchAllCategory",
  async () => {
    const response = await getAllCategory();
    return response;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.categories = [];
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
        state.categories = [];
      });
  },
});

export default categorySlice.reducer;
