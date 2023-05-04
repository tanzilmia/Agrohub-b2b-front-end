import React from "react";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useGetLimitProductsQuery } from "../../../features/API/APISlice";
import Loader from "../../shop/util/loader/Loader";

const TopSellingProduct = () => {
  const { data, isLoading, isError, error } = useGetLimitProductsQuery();
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-28 mx-10">
      <div className="flex justify-between py-6">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center dark:text-white">
          <BsFire className="mr-2 text-[#FF5721] text-3xl dark:text-indigo-500" />{" "}
          Top Best Sellers
        </h3>
        <span className="font-semibold md:text-sm flex items-center text-[#FF5721] dark:text-indigo-500 hover:text-orange-400 dark:hover:text-indigo-400 ">
          <Link to="/selling_products">
            <button className="">View More</button>
          </Link>
          <i className="ri-arrow-right-line ml-1"></i>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
        {data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProduct;
