import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const { _id, images, newPrice, oldPrice, name, description, rating } =
    product;
  console.log(product);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div>
      <Link to={`/details/${_id}`}>
        <div className="block rounded-lg w-full overflow-hidden shadow-2xl shadow-indigo-100 hover:shadow-2xl transition-all duration-300 hover:bg-indigo-100 transform hover:-translate-y-4 hover:scale-105">
          <img
            className=" rounded-t-lg lg:h-48 h-40 w-full object-cover"
            src={images && images[0]}
            alt=""
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Sale
          </span>
          <div className="mt-4 px-5 pb-5">
            <Link to="#">
              <h5 className="lg:text-lg text-sm font-semibold tracking-tight text-slate-900">
                {name.slice(0, 20)}
              </h5>
            </Link>
            <div className="mt-2.5 mb-5 flex items-center">
              <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center">
                <span className="lg:text-2xl text-md font-semibold text-slate-900 ">
                  ${oldPrice}
                </span>
                <span className="lg:text-sm text-xs hidden lg:block text-slate-900 line-through ml-2">
                  ${newPrice}
                </span>
              </p>
              {pathname === "/" && (
                <div className="flex items-center rounded-md bg-slate-900 px-2 py-1 text-center lg:text-sm text-xs font-normal text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Add To Cart
                </div>
              )}
            </div>
            <div>
              {pathname === "/cart" && (
                <div className="font-semibold">
                  <p>Quantity: {product?.quantity}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>

      {pathname === "/cart" && (
        <div
          onClick={() => dispatch(removeToCart(product))}
          className="flex items-center rounded-md bg-slate-900 px-2 py-1 text-center lg:text-sm text-xs font-normal text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Remove To Cart
        </div>
      )}
    </div>
  );
};

export default ProductCard;
