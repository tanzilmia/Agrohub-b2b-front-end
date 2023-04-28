import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../features/API/APISlice";

const SellerProduct = () => {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-[#29BA2F]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.732V24c4.418 0 8-3.582 8-8h-4a4.01 4.01 0 01-4 4.732z"
          ></path>
        </svg>
      </div>
    );
  }

  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-gray-100">
      <div className="flex justify-between py-6">
        <h3 className="text-xl md:text-2xl font-semibold mx-auto">
          All Selling Products
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 pb-8">
        {data?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SellerProduct;
