import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import header_logo from "../Assets/Images/header-logo.jpg";

const Navbar2 = () => {
  return (
  <nav>
    {/* header section start*/}
    <header className="py-4 shadow-sm">
      <div className="container flex items-center justify-around">
        {/* logo  */}
        <Link to={"/"}>
          <img src={header_logo} alt="" className="w-32" />
        </Link>
        {/* searchbar */}
        <div className="xl:w-full w-56 max-w-xl relative flex">
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
        <div className="hidden xl:flex items-center space-x-4">
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
            {/* <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] text-white text-xs">
              8
            </span> */}
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
        {/* responsive */}
        <div className="px-8 mx-2 flex xl:hidden py-3 bg-[#29BA2F]  items-center cursor-pointer relative group rounded z-10">
          <span className="text-white">
            <i class="ri-menu-fill"></i>
          </span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible">
            <Link
              to={""}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i className="ri-heart-line"></i>
              </div>
              <div className="text-xs leading-3">Wish List</div>
              {/* <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] text-white text-xs">
                8
              </span> */}
            </Link>

            <Link
              to={""}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
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
              to={""}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i className="ri-user-3-line"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
    {/* header section start*/}

    {/* navbar section start */}
    <div className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between xl:justify-around">
        {/* all category start */}
        <div className="px-8 ml-1 xl:bg-[#29BA2F] py-4 flex items-center cursor-pointer relative group rounded z-10">
          <span title="Category" className="text-[#29BA2F] xl:text-white">
            <i className="ri-bar-chart-horizontal-fill"></i>
          </span>
          <span className="capitalize ml-2 text-white">Categories</span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible font-semibold">
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

        <div className="xl:flex hidden items-center justify-end flex-grow pl-12">
          <div className="flex justify-around items-center space-x-6 capitalize mr-4">
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
            <Link
              to={""}
              className=" text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
            >
              Login/Register
            </Link>
          </div>
        </div>
        {/* responsive */}
        <div className="px-8 mx-2 flex xl:hidden py-3  items-center cursor-pointer relative group rounded z-10">
          <span className="text-[#29BA2F]">
            <i class="ri-layout-masonry-fill"></i>
          </span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible">
            <Link
              to={""}
              className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i class="ri-home-3-line"></i>
              </div>
              <div className="text-xs leading-3">Home</div>
            </Link>

            <Link
              to={""}
              className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i class="ri-shopping-bag-3-line"></i>
              </div>
              <div className="text-xs leading-3">Shop</div>
            </Link>
            <Link
              to={""}
              className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i class="ri-home-3-line"></i>
              </div>
              <div className="text-xs leading-3">About US</div>
            </Link>
            <Link
              to={""}
              className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i class="ri-passport-line"></i>
              </div>
              <div className="text-xs leading-3">Contact US</div>
            </Link>
            <Link
              to={""}
              className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <div className="text-2xl">
                <i class="ri-login-box-line"></i>
              </div>
              <div className="text-xs leading-3">Login/Register</div>
            </Link>
          </div>
        </div>
        {/* navbar links end*/}
      </div>
    </div>
    {/* navbar section end */}
  </nav>
  );
};

export default Navbar2;