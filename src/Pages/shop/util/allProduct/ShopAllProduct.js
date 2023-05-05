import { current } from "@reduxjs/toolkit";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShopCard from "../card/ShopCard";
import Pagination from "../pagination/Pagination";

const ShopAllProduct = ({ products }) => {
  const allProductRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [productOfThisPage, setProductOfThisPage] = useState(currentPage * 5);

  const startsFrom = productOfThisPage - 5;

  const totalProduct = products?.length;

  useEffect(() => {
    setProductOfThisPage(currentPage * 5);
  }, [currentPage]);

  // to scroll to top
  const executeScroll = () => allProductRef.current.scrollIntoView();

  return (
    <div ref={allProductRef}>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:ml-0 ml-8 md:grid-cols-2 gap-5 mb-10 mt-3">
        {products?.map((product, id) => (
          <ShopCard key={id} product={product} />
        ))}
      </div>
      {/* <div className="my-16 flex items-center justify-center">
        <Pagination
          totalProduct={totalProduct}
          setCurrentPage={setCurrentPage}
          executeScroll={executeScroll}
        />
      </div> */}
    </div>
  );
};

export default ShopAllProduct;
