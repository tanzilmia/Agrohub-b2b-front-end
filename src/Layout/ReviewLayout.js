import React from "react";
import Navbar from "../sheardComponent/Navbar";
import ProductDetails from "../DynamicPage/ProductDetails";
import { Outlet, useLoaderData } from "react-router-dom";
import { useGetProductDetailsByIDQuery } from "../features/API/APISlice";
import useTitle from "../hooks/useTitle";

const ReviewLayout = () => {
  const products = useLoaderData();
  useTitle("review");

  const { data, isLoading, isError, error } = useGetProductDetailsByIDQuery(
    products._id
  );

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
    <div>
      <Navbar></Navbar>
      <ProductDetails products={data}></ProductDetails>
      <Outlet></Outlet>
    </div>
  );
};

export default ReviewLayout;
