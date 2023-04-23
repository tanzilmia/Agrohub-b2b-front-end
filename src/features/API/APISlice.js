import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://agrohub.vercel.app",
  }),
  endpoints: (builder) => ({
    // get all products
    getAllProducts: builder.query({
      query: () => "/seller/all_Product",
    }),

    // get limiting products
    getLimitProducts: builder.query({
      query: () => "/seller/limit_Product",
    }),

    // get products categories
    getCategories: builder.query({
      query: () => "/admin/categories",
    }),

    // get product details by id
    getProductDetailsByID: builder.query({
      query: (id) => `/seller/all_Product/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetLimitProductsQuery,
  useGetCategoriesQuery,
  useGetProductDetailsByIDQuery,
} = productsAPI;
