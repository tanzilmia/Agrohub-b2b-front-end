import axios from "axios";
import React, { useEffect, useState } from "react";
import GamingProductCard from "../../../components/ProductCard/GamingProductCard";

const GamingProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("GamingProduct.json");
      setProducts(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="px-4 md:px-10 lg:px-20 bg-gray-100">
        <div className="flex justify-between py-6">
          <h3 className="text-xl md:text-3xl font-bold">Gamer World</h3>
          <span className="font-bold md:text-xl flex items-center hover:text-orange-400">
            <button className="">View More</button>
            <i className="ri-arrow-right-line ml-1"></i>
          </span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
          {products.map((product) => (
            <GamingProductCard
              key={product.id}
              product={product}
            ></GamingProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingProduct;
