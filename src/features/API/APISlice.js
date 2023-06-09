import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://agrohub-b2b-new-server.vercel.app",
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

    // post product
    postProduct: builder.mutation({
      query: ({ user, header, product }) => ({
        url: `/seller/product?email=${user?.email}`,
        method: "POST",
        headers: header,
        body: product,
      }),
    }),

    // get product brands
    getBrands: builder.query({
      query: (category) => `/admin/brands?category=${category}`,
    }),

    // get search filtering products
    getFilteringProducts: builder.query({
      query: (search) => `/seller/search?name=${search}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetLimitProductsQuery,
  useGetCategoriesQuery,
  useGetProductDetailsByIDQuery,
  usePostProductMutation,
  useGetBrandsQuery,
  useGetFilteringProductsQuery,
  useGetCategoryWiseProductQuery,
} = productsAPI;
