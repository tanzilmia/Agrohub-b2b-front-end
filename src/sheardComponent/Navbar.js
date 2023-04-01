import React from "react";
import { Link } from "react-router-dom";
import header_logo from "../Assets/Images/header-logo.jpg";

const Navbar = () => {
  return (
    <div>
      {/* header section start*/}
      <header className="py-4 shadow-sm">
        <div className="container flex items-center justify-around">
          {/* logo  */}
          <Link to={"/"}>
            <img src={header_logo} alt="" className="w-32" />
          </Link>
          {/* searchbar */}
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="ri-search-line"></i>
            </span>
            <input
              type="text"
              className="w-full border border-[#29BA2F] border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Search"
            />
            <button className="bg-[#29BA2F] border border-[#29BA2F] text-white px-8 rounded-r-md hover:bg-transparent hover:text-[#29BA2F] transition">
              Search
            </button>
          </div>
          {/* icon */}
          <div className="flex items-center space-x-4">
            <Link
              to={"#"}
              className="text-center text-gray-700 hover:text-[#29BA2F] transition relative"
            >
              <div className="text-2xl">
                <i className="ri-heart-line"></i>
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to={"#"}
              className="text-center text-gray-700 hover:text-[#29BA2F] transition relative"
            >
              <div className="text-2xl">
                <i className="ri-shopping-cart-2-line"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to={"#"}
              className="text-center text-gray-700 hover:text-[#29BA2F] transition relative"
            >
              <div className="text-2xl">
                <i className="ri-user-3-line"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </header>
      {/* header section start*/}

      {/* navbar section start */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex ">
          {/* all category start */}
          <div className="px-8 py-4 bg-[#29BA2F] flex items-center cursor-pointer relative group rounded z-10">
            <span className="text-white">
              <i className="ri-bar-chart-horizontal-fill"></i>
            </span>
            <span className="capitalize ml-2 text-white ">All Categories</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible">
              <Link
                to={""}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Electronics</span>
              </Link>
              <Link
                to={""}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">TV</span>
              </Link>
              <Link
                to={""}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Sports</span>
              </Link>
              <Link
                to={""}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Motorbike</span>
              </Link>
              <Link
                to={""}
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </Link>
            </div>
          </div>
          {/* all category end */}

          {/* navbar links start*/}
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to={"/"}
                className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
              >
                Shop
              </Link>
              <Link
                to={"/"}
                className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
              >
                About US
              </Link>
              <Link
                to={"/"}
                className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
              >
                Contact US
              </Link>
            </div>
            <Link
              to={""}
              className=" text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
            >
              Login/Register
            </Link>
          </div>
          {/* navbar links end*/}
        </div>
      </div>
      {/* navbar section end */}
    </div>
  );
};

export default Navbar;
