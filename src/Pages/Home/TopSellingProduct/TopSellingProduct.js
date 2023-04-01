import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import axios from "axios";
const TopSellingProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("SellingProduct.json");
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20 bg-gray-100">
      <div className="flex justify-between py-6">
        <h3 className="text-xl md:text-3xl font-bold">Top Selling Products</h3>
        <span className="font-bold md:text-xl flex items-center hover:text-orange-400">
          <button className="">View More</button>
          <i className="ri-arrow-right-line ml-1"></i>
        </span>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProduct;
