import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  loadOneProduct: [],
};

export const fetchLoadOneDataByCategories = createAsyncThunk(
  "products/fetchLoadOneDataByCategories",
  async () => {
    const response = await axios.get("https://agrohub-b2b-new-server.vercel.app/admin/categories");
    const requests = response.data.map(async (category) => {
      try {
        const res = await axios.get(
          `https://agrohub-b2b-new-server.vercel.app/seller/category_products?category=${category.category}`
        );
        return res.data;
      } catch (error) {
        throw new Error(
          `Error fetching products for category "${category}": ${error.message}`
        );
      }
    });
    const results = await Promise.all(requests);
    const sortedProducts = results.flat();
    return sortedProducts;
  }
);

const productCategoriesLoadOneData = createSlice({
  name: "loadOneDataByCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoadOneDataByCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.loadOneProduct = [];
      })
      .addCase(fetchLoadOneDataByCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loadOneProduct = action.payload;
      })
      .addCase(fetchLoadOneDataByCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productCategoriesLoadOneData.reducer;
