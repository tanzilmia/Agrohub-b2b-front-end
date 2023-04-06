import React from "react";
import Navbar from "../sheardComponent/Navbar";
import ProductDetails from "../DynamicPage/ProductDetails";
import { Outlet, useLoaderData } from "react-router-dom";

const ReviewLayout = () => {
  const products = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <ProductDetails products={products}></ProductDetails>
      <Outlet></Outlet>
    </div>
  );
};

export default ReviewLayout;
