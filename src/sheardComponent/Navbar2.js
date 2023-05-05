import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import header_logo from "../Assets/Images/header-logo.png";
import { myContext } from "../contextApi/Authcontext";
import { FcSms } from "react-icons/fc";
import { googleLogout } from "@react-oauth/google";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

import {
  useGetCategoriesQuery,
  useGetFilteringProductsQuery,
} from "../features/API/APISlice";
import UserInfo from "../modal/userInfo";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const location = useLocation();
  const [showMenu, setshowMenu] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const { user, logout, productInfo } = useContext(myContext);
  const [categories, setCategories] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [modalopen, setModalOpen] = useState(false);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const { data: filteringProduct } = useGetFilteringProductsQuery(categories);
  const Logouts = () => {
    logout();
    googleLogout();
  };

  const { data } = useGetCategoriesQuery();

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return (
    <>
      {showMenu && (
        <nav className="relative">
          {/* header section start*/}
          <header className="py-4 relative shadow-sm bg-white dark:bg-[#242526]">
            <div className="container flex items-center justify-around">
              {/* logo  */}
              <Link to={"/"}>
                <img src={header_logo} alt="" className="w-32" />
              </Link>
              {/* searchbar */}
              <div className="xl:w-full hidden xl:flex w-32 max-w-xl relative">
                <span className="absolute left-4 top-3 text-lg text-gray-400 dark:text-gray-600">
                  <i className="ri-search-line"></i>
                </span>
                <input
                  type="text"
                  className="w-full border border-green-500 dark:border-gray-600 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none focus:border-green-500 dark:focus:border-gray-600 dark:bg-gray-800 text-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
                  placeholder="Search"
                />
                <button className="bg-green-500 dark:bg-gray-600 border border-green-500 dark:border-gray-600 text-white  sm:hidden xl:block xl:px-8 rounded-r-md hover:bg-transparent hover:text-green-500 dark:hover:text-indigo-400 font-semibold transition">
                  Search
                </button>
              </div>

              {/* icon */}
              <div className="hidden xl:flex items-center space-x-4">
                <button
                  className={`flex items-center justify-center w-10 h-10  hover:bg-gray-200 hover:dark:bg-gray-700 rounded-full focus:outline-none ${
                    theme ? "shadow-md" : ""
                  }`}
                  onClick={() => setTheme((prevMode) => !prevMode)}
                >
                  <i
                    className={`${
                      theme ? "text-yellow-300" : "text-black"
                    } transition-colors duration-300 text-2xl`}
                  >
                    {theme ? <RiMoonLine /> : <RiSunLine />}
                  </i>
                </button>

                <Link
                  to={"/cart"}
                  className="text-center text-gray-700 dark:text-gray-200  hover:text-[#29BA2F] dark:hover:text-indigo-400  transition relative"
                >
                  <div className="text-2xl">
                    <i className="ri-shopping-cart-2-line"></i>
                  </div>
                  <div className="text-xs leading-3  font-semibold">Cart</div>
                  <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] dark:bg-indigo-600 text-white text-xs">
                    {cartTotalQuantity}
                  </span>
                </Link>
                <Link
                  // to={"/userDetails"}
                  className="text-center text-gray-700 hover:text-[#29BA2F] transition relative"
                >
                  {user?.name ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.profilePic}
                      alt={user.name}
                      title={user.name}
                      onClick={() => setModalOpen(true)}
                    />
                  ) : (
                    <>
                      <div className="dark:text-gray-200 font-semibold dark:hover:text-indigo-400">
                        <div className="text-2xl">
                          <i className="ri-user-3-line "></i>
                        </div>
                        <div className="text-xs leading-3">Account</div>
                      </div>
                    </>
                  )}
                </Link>
                {user?.email && (
                  <Link to="/seller/contact/chats">
                    {" "}
                    <span>
                      <FcSms className="text-2xl" />
                    </span>{" "}
                  </Link>
                )}
              </div>
              {/* responsive */}
              <div className="px-8 mx-2 flex xl:hidden py-3   items-center cursor-pointer relative group rounded z-10">
                <button
                  className={`flex items-center mr-3 justify-center w-10 h-10  hover:bg-gray-200 hover:dark:bg-gray-700 rounded-full focus:outline-none ${
                    theme ? "shadow-md" : ""
                  }`}
                  onClick={() => setTheme((prevMode) => !prevMode)}
                >
                  <i
                    className={`${
                      theme ? "text-yellow-300" : "text-black"
                    } transition-colors duration-300 text-2xl`}
                  >
                    {theme ? <RiMoonLine /> : <RiSunLine />}
                  </i>
                </button>

                <Link
                  to={"/cart"}
                  className="text-center mr-4 text-gray-700 dark:text-gray-200  hover:text-[#29BA2F] dark:hover:text-indigo-400  transition relative"
                >
                  <div className="text-2xl">
                    <i className="ri-shopping-cart-2-line"></i>
                  </div>
                  <div className="text-xs leading-3  font-semibold">Cart</div>
                  <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] dark:bg-indigo-600 text-white text-xs">
                    {cartTotalQuantity}
                  </span>
                </Link>

                {/* change this layout */}
                <a className="flex items-center xl:px-6 py-3 hover:bg-gray-100 transition">
                  {user?.name ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.profilePic}
                      alt={user.name}
                      title={user.name}
                      onClick={() => setModalOpen(true)}
                    />
                  ) : (
                    <>
                      <div className="text-2xl">
                        <i className="ri-user-3-line"></i>
                      </div>
                    </>
                  )}
                </a>
              </div>
            </div>
          </header>
          {/* header section start*/}
          {modalopen ? (
            <UserInfo
              Logouts={Logouts}
              user={user}
              modalopen={modalopen}
              setModalOpen={setModalOpen}
            />
          ) : (
            <></>
          )}
          {/* navbar section start */}
          <div className="bg-white dark:bg-[#242526] shadow-sm">
            <div className="container mx-auto flex justify-between xl:justify-around">
              {/* all category start */}
              <div className="px-8 ml-1 xl:bg-[#29BA2F] dark:xl:bg-[#4B5563]  py-4 flex items-center cursor-pointer relative group rounded z-10">
                <span title="Category" className="text-[#29BA2F] xl:text-white">
                  <i className="ri-bar-chart-horizontal-fill"></i>
                </span>
                <span className="capitalize ml-2 text-white font-semibold dark:hover:text-indigo-400">
                  Categories
                </span>
                <div className="absolute w-full left-0 top-full bg-white dark:bg-[#96a2b3] shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible font-semibold">
                  {data &&
                    data?.map((category) => (
                      <Link to={""}>
                        <option
                          onClick={(e) => setCategories(e.target.value)}
                          key={category._id}
                          className="flex items-center px-6 py-3 dark:text-white hover:bg-gray-100 dark:hover:bg-indigo-500  transition"
                        >
                          <span className="ml-6 text-gray-600 text-sm">
                            {category.category}
                          </span>
                        </option>
                      </Link>
                    ))}
                </div>
              </div>
              {/* all category end */}

              {/* navbar links start*/}

              <div className="xl:flex hidden items-center justify-end flex-grow pl-12">
                <div className="flex justify-around items-center font-medium space-x-6 capitalize mr-4">
                  <Link
                    to={"/"}
                    className="text-gray-600  dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                  >
                    Shop
                  </Link>

                  {user?.email && (
                    <Link
                      to={"/custom"}
                      className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                    >
                      Custome Order
                    </Link>
                  )}

                  {user?.role === "admin" && (
                    <Link
                      to={"/dashboard"}
                      className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                    >
                      Dashboard
                    </Link>
                  )}
                  {user?.role === "seller" && (
                    <Link
                      to={"/dashboard"}
                      className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                    >
                      Dashboard
                    </Link>
                  )}

                  <Link
                    to={"/aboutus"}
                    className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                  >
                    About US
                  </Link>
                  <Link
                    to={"/contactus"}
                    className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                  >
                    Contact US
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                  >
                    Blogs
                  </Link>
                  {user?.email ? (
                    <button
                      className=" text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                      onClick={Logouts}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to={"/login"}
                      className=" text-gray-600 dark:text-[#E3E3E3] dark:hover:text-indigo-400 dark:hover:border-b-indigo-700 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] "
                    >
                      Login/Register
                    </Link>
                  )}
                </div>
              </div>
              {/* responsive */}
              <div className="px-8 mx-2 flex xl:hidden py-3  items-center cursor-pointer relative group rounded z-10">
                <span
                  onClick={() => setOpenMenu((Pre) => !Pre)}
                  className="text-[#29BA2F]"
                >
                  <i className="ri-layout-masonry-fill"></i>
                </span>
                <div
                  className={`absolute w-full right-0 top-full  bg-white dark:bg-[#96A2B3] shadow-md py-3 divide-y   dark:text-white ${
                    openMenu
                      ? "opacity-100 duration-500 transition  translate-x-0 visible"
                      : "invisible duration-500 transition-all translate-x-20"
                  }`}
                  style={{ width: "200px" }}
                >
                  <Link
                    to={"/"}
                    className="flex justify-center px-6 py-4 hover:bg-gray-100  dark:hover:bg-indigo-500 transition"
                  >
                    <div className=" leading-3">Home</div>
                  </Link>

                  <Link
                    to="/shop"
                    className="flex justify-center px-6 py-4 hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                  >
                    <div className=" leading-3">Shop</div>
                  </Link>

                  {user?.email && (
                    <Link
                      to={"/custom"}
                      className="flex  px-6 py-3 justify-center hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                    >
                      Custome Order
                    </Link>
                  )}

                  {(user?.role === "seller" || user?.role === "admin") && (
                    <Link
                      to={"/dashboard"}
                      className="flex  px-6 py-3 justify-center hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to={"/aboutus"}
                    className="flex justify-center px-6 py-4 hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                  >
                    <div className=" leading-3">About US</div>
                  </Link>
                  <Link
                    to={"/contactus"}
                    className="flex  px-6 py-4 justify-center hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                  >
                    <div className=" leading-3">Contact US</div>
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="flex  px-6 py-3 justify-center hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                  >
                    Blogs
                  </Link>
                  {user?.email ? (
                    <Link
                      className="flex  px-6 py-3 justify-center hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                      onClick={Logouts}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      to={"/login"}
                      className="flex  px-6 py-3 justify-center hover:bg-gray-100 dark:hover:bg-indigo-500 transition"
                    >
                      Login/Register
                    </Link>
                  )}
                </div>
              </div>
              {/* navbar links end*/}
            </div>
          </div>
          {/* navbar section end */}
        </nav>
      )}
    </>
  );
};

export default Navbar2;
