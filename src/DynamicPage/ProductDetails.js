/**
 * @ Author: Rakibul Hasan
 * @ Create Time: 2023-04-06 00:29:27
 * @ Modified by: Your name
 * @ Modified time: 2023-04-11 05:43:40
 * @ Description: Dynamically working this component Istiak Ahmed
 */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar2 from "../sheardComponent/Navbar2";

const ProductDetails = ({ products }) => {
  const { _id, name, description, newPrice, stock, size, images, brand } =
    products;
  const [count, setCount] = useState(1);
  const [countPrice, setCountPrice] = useState(newPrice);

  const handleIncrement = () => {
    setCount(count + 1);
    const numericPrice = parseFloat(newPrice);
    const setPrice = (count + 1) * numericPrice;
    setCountPrice(setPrice.toFixed(2));
  };

  const handleDecrement = () => {
    if (count <= 1) {
      setCount(1);
      setCountPrice(newPrice);
    } else {
      setCount(count - 1);
      const setPrice = (count - 1) * newPrice;
      setCountPrice(setPrice.toFixed(2));
    }
  };

  // console.log(products);
  return (
    <>
      <Navbar2 />
      <div className="m-20">
        <div className="grid md:grid-cols-5 items-center">
          <div className="md:col-span-2 flex justify-center items-center">
            <img src={images && images[0]} alt="" />
          </div>
          <div className="md:col-span-3 mx-20">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <div className="flex gap-4 my-3">
              <i className="ri-star-fill text-orange-600"></i>
              <i className="ri-star-fill text-orange-600"></i>
              <i className="ri-star-fill text-orange-600"></i>
              <i className="ri-star-fill text-orange-600"></i>
            </div>
            <div>
              <p className=" mb-4">
                {description ? description.slice(0, 250) : "No Description"}
              </p>
              <div className=" flex flex-col gap-4">
                <p className="flex flex-row   ">
                  <label>Price: </label>{" "}
                  <span className="ml-2 font-semibold text-lg">
                    {" "}
                    <span className="text-orange-300 ">$</span> {newPrice}
                  </span>
                </p>
                <p className="flex flex-row">
                  <label>Brand:</label>{" "}
                  <span className="ml-2 font-semibold"> {brand}</span>
                </p>
                <p className="flex flex-row">
                  <label>Status:</label>{" "}
                  <span className="ml-2 font-semibold">{stock}</span>
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4 mt-4">
              <p className="flex items-center">
                Size:
                <span className="flex gap-3 ml-2">
                  {size?.map((sz, i) => (
                    <p className="border border-black py-0 px-2 font-semibold">
                      {sz}
                    </p>
                  ))}
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">Quality:</span>
                <span className="flex items-center border border-black rounded-full">
                  <button
                    onClick={handleDecrement}
                    className="flex items-center justify-center h-8 w-8 rounded-l-full border-r border-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L10 8.586l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <p className="px-4 py-1 text-lg font-semibold">{count}</p>
                  <button
                    onClick={handleIncrement}
                    className="flex items-center justify-center h-8 w-8 rounded-r-full border-l border-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L10 8.586l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </p>
                    
              <p>
                Subtotal:{" "}
                <span className="text-orange-300 font-semibold">$ </span>
                <span className="font-semibold">{countPrice}</span>
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10">
              <button className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                ADD TO CART <i className="ri-shopping-cart-line"></i>
              </button>
              
              <button className="border-2 max-w-[250px] rounded-full py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                  <Link to={`/details/payment-gateway/${_id}`}>
                  BUY IT NOW <i class="ri-arrow-right-fill"></i>
                </Link>
                
                </button>
              <button className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                ADD TO WISHLIST <i className="ri-heart-line"></i>
              </button>
              <button className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                CUSTOM ORDER
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 font-semibold text-xl md:text-3xl mt-20 mx-10 sm:mx-20">
          <NavLink
            to={`/details/${_id}/description`}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Description
          </NavLink>
          <NavLink
            to={`/details/${_id}/review`}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Review
          </NavLink>
          <NavLink
            to={`/details/${_id}/additional-information`}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Additional Information
          </NavLink>
        </div>
        <hr className="my-4" />
      </div>
    </>
  );
};

export default ProductDetails;
