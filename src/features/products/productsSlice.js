import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categorySlice from "../categories/categorySlice";
import { getAllProducts } from "./productsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  products: [],
  filteredCategory: [],
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response;
  }
);

export const getProductCategoryWise = createAsyncThunk(
  "products/getProductCategoryWise",
  async (_, { getState }) => {
    const allCategory = categorySlice(getState());

    console.log(allCategory);

    // const filteredValue = allCategory
    //   .slice()
    //   .map((category) => category.category === arg);

    return allCategory;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
        state.error = action.error;
        state.products = [];
      })
      .addCase(getProductCategoryWise.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.filteredCategory = [];
      })
      .addCase(getProductCategoryWise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.filteredCategory = action.payload;
      })
      .addCase(getProductCategoryWise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
        state.filteredCategory = [];
      });
  },
});

export default productSlice.reducer;
