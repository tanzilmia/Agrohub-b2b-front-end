import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categorySlice from "../categories/categorySlice";
import productsSlice from "../products/productsSlice";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  productsByCategory: [],
};

// export const fetchAllProducts = createAsyncThunk(
//   "products/fetchAllProducts",
//   async () => {
//     const response = await getAllProducts();
//     return response;
//   }
// );

export const getProductByCategory = createAsyncThunk(
  "productsByCategory/getProductByCategory",
  async ({ products, categories }) => {
    const filteredValue = categories?.map((currentCategory) => {
      return products?.filter(
        (product) => product.category === currentCategory.category
      );
    });

    return filteredValue;
  }
);

const productsByCategorySlice = createSlice({
  name: "productsByCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductByCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.productsByCategory = [];
      })
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.productsByCategory = action.payload;
      })
      .addCase(getProductByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
        state.productsByCategory = [];
      });
  },
});

export default productsByCategorySlice.reducer;
