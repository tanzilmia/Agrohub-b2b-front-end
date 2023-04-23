import React from "react";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useGetLimitProductsQuery } from "../../../features/API/APISlice";

const TopSellingProduct = () => {
  const { data, isLoading, isError, error } = useGetLimitProductsQuery();
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
    <div className="mt-28 mx-10">
      <div className="flex justify-between py-6">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center">
          <BsFire className="mr-2 text-[#FF5721] text-3xl" /> Top Best Sellers
        </h3>
        <span className="font-semibold md:text-sm flex items-center text-[#FF5721] hover:text-orange-400">
          <Link to="/selling_products">
            <button className="">View More</button>
          </Link>
          <i className="ri-arrow-right-line ml-1"></i>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProduct;
