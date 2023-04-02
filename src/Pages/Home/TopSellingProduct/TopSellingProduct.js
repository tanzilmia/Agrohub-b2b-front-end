import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <h3 className="text-xl md:text-3xl font-bold text-[#29BA2F] ">Top Selling Products</h3>
        <span className="font-bold md:text-xl flex items-center hover:text-[#29BA2F] ">
          <button className="">View More</button>
          <i className="ri-arrow-right-line ml-1"></i>
        </span>
      </div>
      <Link to='/details'>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}

        </div>
      </Link>
    </div>
  );
};

export default TopSellingProduct;
