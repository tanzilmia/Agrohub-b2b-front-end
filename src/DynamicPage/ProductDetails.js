/**
 * @ Author: Rakibul Hasan
 * @ Create Time: 2023-04-06 00:29:27
 * @ Modified by: Your name
 * @ Modified time: 2023-04-06 23:50:38
 * @ Description: Dynamically working this component Istiak Ahmed
 */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar2 from "../sheardComponent/Navbar2";

const ProductDetails = ({ products }) => {
  const { _id, name, description, newPrice, stock, size, image } = products;
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

  return (
    <>
      <Navbar2 />
      <div className="mt-20">
        <div className="grid md:grid-cols-5 items-center">
          <div className="md:col-span-2 flex justify-center items-center">
            <img src={image} alt="" />
          </div>
          <div className="md:col-span-3 mx-20">
            <h2 className="text-4xl">{name}</h2>
            <div className="flex gap-4 my-3">
              <i className="ri-star-fill text-orange-600"></i>
              <i className="ri-star-fill text-orange-600"></i>
              <i className="ri-star-fill text-orange-600"></i>
              <i className="ri-star-fill text-orange-600"></i>
            </div>
            <div>
              <p className="text-xl mb-4">
                {description ? description.slice(0, 250) : "No Description"}
              </p>
              <div className="font-semibold flex flex-col gap-4">
                <p className="flex flex-row">
                  {" "}
                  <label>EFFECTIVE PRICE: </label>{" "}
                  <span className="ml-2"> $ {newPrice}</span>
                </p>
                <p className="flex flex-row">
                  <label>BRAND:</label>{" "}
                  <span className="ml-2"> Cushnie et Ochs</span>
                </p>
                <p className="flex flex-row">
                  <label>TYPE:</label> <span className="ml-2"> Tops</span>
                </p>
                <p className="flex flex-row">
                  <label>AVAILABILITY:</label>{" "}
                  <span className="ml-2"> {stock} in stock</span>
                </p>
              </div>
            </div>
            <div className="font-semibold flex flex-col gap-4 mt-4">
              <p className="flex items-center">
                SIZE:
                <span className="flex gap-6 ml-2">
                  {size.map((sz, i) => (
                    <p className="border-2 border-black py-2 px-3">{sz}</p>
                  ))}
                </span>
              </p>
              <p className="flex items-center">
                COLOR:
                <span className="flex gap-6 ml-2">
                  <p className="border-2 p-4 rounded-full bg-blue-600"></p>
                  <p className="border-2 p-4 rounded-full bg-red-800"></p>
                  <p className="border-2 p-4 rounded-full bg-black"></p>
                  <p className="border-2 p-4 rounded-full bg-pink-600"></p>
                </span>
              </p>
              <p className="flex items-center">
                QUANTITY:
                <span className="flex ml-2">
                  <button
                    onClick={handleDecrement}
                    className="border border-black py-2 px-3"
                  >
                    -
                  </button>
                  <p className="border border-black py-2 px-3">{count}</p>
                  <button
                    onClick={handleIncrement}
                    className="border border-black py-2 px-3"
                  >
                    +
                  </button>
                </span>
              </p>
              <p>SUBTOTAL: $ {countPrice}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 mt-10">
              <button className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                ADD TO CART <i className="ri-shopping-cart-line"></i>
              </button>
              <Link to="/details/payment-gateway">
                <button className="border-2 max-w-[250px] rounded-full py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                  BUY IT NOW
                </button>
              </Link>
              <button className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white">
                ADD TO WISHLIST <i className="ri-heart-line"></i>
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
