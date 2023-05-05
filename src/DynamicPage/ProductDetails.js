import React, { useContext, useRef, useState } from "react";
import Navbar2 from "../sheardComponent/Navbar2";
import { myContext } from "../contextApi/Authcontext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// tanzil 2
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = ({ products }) => {
  const ImageRef = useRef();
  const [currentIndex, SetcurrentIndex] = useState(0);
  const { _id, name, description, newPrice, stock, size, images, brand } =
    products;
  const dispatch = useDispatch();
  const { setProductInfo, user } = useContext(myContext);

  const [count, setCount] = useState(1);
  const [countPrice, setCountPrice] = useState(newPrice);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
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
  const ProductAddToCard = async () => {
    setProductInfo({
      productId: _id,
      productCount: count,
      countPrice,
      rating,
    });

    const CartProduct = await axios.post(
      "https://agrohub.vercel.app/CartProduct/addcartproduct",
      {
        Email: user.email,
        productId: _id,
        productCount: count,
        countPrice,
        rating,
      }
    );
    if (CartProduct.status === 200) {
      alert("Product add to Cart successfully");
      navigate("/cartProduct");
    }
    console.log("CartProduct", CartProduct);
  };
  const AddDataToWishlist = () => {
    return;
  };
  // console.log(products);

  const handleRatingClick = async (ratingNumber) => {
    try {
      const response = await axios.post(
        `https://agrohub.vercel.app/seller/product_rating/${_id}/rating`,
        { rating: ratingNumber }
      );
      if (response.data) {
        setRating(ratingNumber);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {products?.rating > index ? (
          <FaStar className="icon text-orange-600"></FaStar>
        ) : (
          <AiOutlineStar className="icon text-orange-600"></AiOutlineStar>
        )}
      </span>
    );
  });

  return (
    <>
      <Navbar2 />
      <div className="px-3 mt-3">
        <div className="grid md:grid-cols-5 items-center">
          <div className="col-span-1 md:col-span-2 flex justify-center items-center">
            <div className="flex flex-col">
              {/* className="max-w-xl max-h-full" */}
              <img
                className="w-[469px] h-[366px] max-h-96"
                src={images && images[currentIndex]}
                alt=""
              />
              {/* <div className="active opacity-100 border border-[gray]"></div> */}
              <div
                ref={ImageRef}
                className="thumb flex w-full ml-5 h-[100px] cursor-pointer my-3 mx-0 mt-5"
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    className={`w-24 xl:w-24 lg:w-24  h-full block object-cover border border-[#999] mr-1 opacity-70 rounded-sm ${
                      index === currentIndex ? "active" : ""
                    }`}
                    src={img}
                    onClick={() => SetcurrentIndex(index)}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-3 ml-1 xl:mx-20">
            <h2 className="lg:text-2xl text-xl font-semibold dark:text-gray-300">
              {name}
            </h2>

            {products?.rating === 0 ? (
              <div className="flex gap-4 my-3">
                {[1, 2, 3, 4, 5].map((number) => (
                  <i
                    key={number}
                    className={`ri-star-fill text-orange-600 ${
                      rating >= number ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => handleRatingClick(number)}
                  ></i>
                ))}
              </div>
            ) : (
              <div className="flex gap-4 my-3"> {ratingStar}</div>
            )}
            <div>
              <p className=" mb-4 dark:text-gray-400">
                {description ? description.slice(0, 250) : "No Description"}
              </p>
              <div className=" flex flex-col gap-4">
                <p className="flex flex-row dark:text-gray-300">
                  <label>Price: </label>{" "}
                  <span className="ml-2 font-semibold text-lg">
                    {" "}
                    <span className="text-orange-300 ">$</span> {newPrice}
                  </span>
                </p>
                <p className="flex flex-row dark:text-gray-300">
                  <label>Brand:</label>{" "}
                  <span className="ml-2 font-semibold"> {brand}</span>
                </p>
                <p className="flex flex-row dark:text-gray-300">
                  <label>Status:</label>{" "}
                  <span className="ml-2 font-semibold">{stock}</span>
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4 mt-4">
              <p className="flex items-center dark:text-gray-300 ">
                Size:
                {size.length === 0 ? (
                  <span className="ml-2 font-semibold">Not Available</span>
                ) : (
                  <span className="flex gap-3 ml-2">
                    {size.map((sz, i) => (
                      <p className="border border-black py-0 px-2 font-semibold">
                        {sz}
                      </p>
                    ))}
                  </span>
                )}
              </p>
              <p className="flex items-center dark:text-gray-300">
                <span className="mr-2">Quality:</span>
                <span className="flex items-center border border-black rounded-full dark:border-gray-300">
                  <button
                    onClick={handleDecrement}
                    className="flex items-center justify-center h-8 w-8 rounded-l-full border-r border-black dark:border-gray-300 "
                  >
                    <svg
                      width={15}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                  <p className="px-4 py-1 text-lg font-semibold">{count}</p>
                  <button
                    onClick={handleIncrement}
                    className="flex items-center justify-center h-8 w-8 rounded-r-full border-l border-black dark:border-gray-300"
                  >
                    <svg
                      width={15}
                      xmlns="https://icons8.com/icon/efXxtDBBjc22/add"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </button>
                </span>
              </p>

              <p className="dark:text-gray-300">
                Subtotal:{" "}
                <span className="text-orange-300 font-semibold">$ </span>
                <span className="font-semibold">{countPrice}</span>
              </p>
            </div>
            {/* flex-col */}
            <div className="flex sm:flex-row md:flex-col lg:flex-row gap-3 mt-10">
              <button
                onClick={() => dispatch(addToCart(products))}
                className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white dark:text-gray-200 dark:hover:bg-indigo-600"
              >
                ADD TO CART{" "}
                <i className="ri-shopping-cart-line hidden lg:block"></i>
              </button>
              {user?.email ? (
                <Link to={`/details/payment-gateway/${_id}`}>
                  <button className="border-2 max-w-[250px] rounded-full py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white dark:text-gray-200 dark:hover:bg-indigo-600">
                    BUY IT NOW
                  </button>
                </Link>
              ) : (
                <Link to={`/login`}>
                  <button className="border-2 max-w-[250px] rounded-full py-2 px-3 font-semibold hover:bg-orange-500 hover:text-white dark:text-gray-200 dark:hover:bg-indigo-600">
                    BUY IT NOW
                  </button>
                </Link>
              )}
              <button
                onClick={AddDataToWishlist}
                className="border-2 max-w-[250px] rounded-full flex justify-center gap-2 py-2 px-3  font-semibold hover:bg-orange-500 hover:text-white dark:text-gray-200 dark:hover:bg-indigo-600"
              >
                ADD TO WISHLIST{" "}
                <i className="ri-heart-line hidden lg:block"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 font-semibold text-lg lg:mt-20 mt-10 lg:text-xl dark:text-gray-300">
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
