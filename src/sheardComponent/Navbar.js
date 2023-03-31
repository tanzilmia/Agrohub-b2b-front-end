import React from "react";
import { Link } from "react-router-dom";
import header_logo from "../Assets/Images/header-logo.jpg";

const Navbar = () => {
  return (
    <div>
      {/* header section */}
      <header className="py-4 shadow-sm ">
        <div className="container flex items-center justify-around">
          {/* logo  */}
          <Link to={"/"}>
            <img src={header_logo} alt="" className="w-32" />
          </Link>
          {/* searchbar */}
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i class="ri-search-line"></i>
            </span>
            <input
              type="text"
              className="w-full border border-pink-400 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Search"
            />
            <button className="bg-pink-400 border border-pink-400 text-white px-8 rounded-r-md hover:bg-transparent hover:text-pink-400 transition">
              Search
            </button>
          </div>
          {/* icon */}
          <div className="flex items-center space-x-4">
            <Link
              to={"#"}
              className="text-center text-gray-700 hover:text-pink-400 transition relative"
            >
              <div className="text-2xl">
                <i class="ri-heart-line"></i>
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-pink-400 text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to={"#"}
              className="text-center text-gray-700 hover:text-pink-400 transition relative"
            >
              <div className="text-2xl">
                <i class="ri-shopping-cart-2-line"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-pink-400 text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to={"#"}
              className="text-center text-gray-700 hover:text-pink-400 transition relative"
            >
              <div className="text-2xl">
                <i class="ri-user-3-line"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
