import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import header_logo from "../Assets/Images/header-logo.jpg";
import { myContext } from "../contextApi/Authcontext";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { googleLogout } from "@react-oauth/google";

import { useGetCategoriesQuery } from "../features/API/APISlice";
import UserInfo from "../modal/userInfo";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setshowMenu] = useState(true);
  const { user, logout, productInfo } = useContext(myContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [modalopen, setModalOpen] = useState(false);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  const Logouts = () => {
    logout();
    googleLogout();
  };
  const updateHidden = () => {
    switch (location.pathname) {
      case "/":
      case "/shop":
      case "/aboutus":
      case "/contactus":
      case "/blogs":
      case "/custom":
        setshowMenu(true);
        break;
      default:
        setshowMenu(false);
        break;
    }
  };

  const { data } = useGetCategoriesQuery();

  useEffect(() => {
    updateHidden();
  }, [location.pathname]);

  return (
    <>
      {showMenu && (
        <nav className="relative">
          {/* header section start*/}
          <header className="py-4 relative shadow-sm bg-white">
            <div className="container flex items-center justify-around">
              {/* logo  */}
              <Link to={"/"}>
                <img src={header_logo} alt="" className="w-32" />
              </Link>
              {/* searchbar */}
              <div className="xl:w-full hidden xl:flex w-32 max-w-xl relative ">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                  <i className="ri-search-line"></i>
                </span>
                <input
                  type="text"
                  className="w-full border border-[#29BA2F] border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                  placeholder="Search"
                />
                <button className="bg-[#29BA2F] border border-[#29BA2F] text-white sm:hidden xl:block xl:px-8 rounded-r-md hover:bg-transparent hover:text-[#29BA2F] transition">
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
                    {productInfo && productInfo.wishList}
                  </span>
                </Link>
                <Link
                  to={"/cart"}
                  className="text-center text-gray-700 hover:text-[#29BA2F] transition relative"
                >
                  <div className="text-2xl">
                    <i className="ri-shopping-cart-2-line"></i>
                  </div>
                  <div className="text-xs leading-3">Cart</div>
                  <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] text-white text-xs">
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
                      <div className="text-2xl">
                        <i className="ri-user-3-line"></i>
                      </div>
                      <div className="text-xs leading-3">Account</div>
                    </>
                  )}
                </Link>
                {user?.email && (
                  <Link to="/seller/contact/chats">
                    {" "}
                    <span>
                      <BsFillChatRightDotsFill />
                    </span>{" "}
                  </Link>
                )}
              </div>
              {/* responsive */}
              <div className="px-8 mx-2 flex xl:hidden py-3   items-center cursor-pointer relative group rounded z-10">
                {/* <span className="text-white">
                  <i className="ri-menu-fill"></i>
                </span> */}
                <Link
                  to={""}
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  {/* <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#29BA2F] text-white text-xs">
                8
              </span> */}
                </Link>

                <Link
                  to={""}
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <div className="text-2xl hover:text-[#29BA2F]">
                    <i className="ri-shopping-cart-2-line"></i>
                  </div>
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
          <div className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between xl:justify-around">
              {/* all category start */}
              <div className="px-8 ml-1 xl:bg-[#29BA2F] py-4 flex items-center cursor-pointer relative group rounded z-10">
                <span title="Category" className="text-[#29BA2F] xl:text-white">
                  <i className="ri-bar-chart-horizontal-fill"></i>
                </span>
                <span className="capitalize ml-2 text-white">Categories</span>
                <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible font-semibold">
                  {data &&
                    data?.map((category) => (
                      <Link
                        key={category._id}
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                      >
                        <span className="ml-6 text-gray-600 text-sm">
                          {category.category}
                        </span>
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
                    className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                  >
                    Shop
                  </Link>

                  {user?.email && (
                    <Link
                      to={"/custom"}
                      className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                    >
                      Custome Order
                    </Link>
                  )}

                  {user?.role === "admin" && (
                    <Link
                      to={"/dashboard"}
                      className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                    >
                      Dashboard
                    </Link>
                  )}
                  {user?.role === "seller" && (
                    <Link
                      to={"/dashboard"}
                      className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                    >
                      Dashboard
                    </Link>
                  )}

                  <Link
                    to={"/aboutus"}
                    className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                  >
                    About US
                  </Link>
                  <Link
                    to={"/contactus"}
                    className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                  >
                    Contact US
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
                  >
                    Blogs
                  </Link>
                  {user?.email ? (
                    <button onClick={Logouts}>Logout</button>
                  ) : (
                    <Link
                      to={"/login"}
                      className=" text-gray-600 hover:text-black hover:border-b-2 hover:border-b-[#29BA2F] transition"
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
                  className={`absolute w-full right-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed ${
                    openMenu
                      ? "opacity-100 duration-500 transition  translate-x-0 visible"
                      : "invisible duration-500 transition-all translate-x-20"
                  }`}
                  style={{ width: "200px" }}
                >
                  <Link
                    to={"/"}
                    className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <div className="text-xs leading-3">Home</div>
                  </Link>

                  <Link
                    to="/shop"
                    className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <div className="text-xs leading-3">Shop</div>
                  </Link>

                  {user?.email && (
                    <Link
                      to={"/custom"}
                      className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                      Custome Order
                    </Link>
                  )}

                  {user?.role === "admin" && (
                    <Link
                      to={"/dashboard"}
                      className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </Link>
                    //{/* <Link
                    // to={"/dashboard"}
                    // className="text-gray-600
                    //hover:text-black
                    //hover:border-b-2
                    //hover:border-b-[#29BA2F]
                    //transition"
                    //>
                    //  Dashboard
                    //</Link>  */}
                  )}
                  <Link
                    to={"/aboutus"}
                    className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <div className="text-xs leading-3">About US</div>
                  </Link>
                  <Link
                    to={"/contactus"}
                    className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <div className="text-xs leading-3">Contact US</div>
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    Blogs
                  </Link>
                  {user?.email ? (
                    <a
                      className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                      onClick={Logouts}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link
                      to={"/login"}
                      className="flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                      <div className="text-xs leading-3">Login/Register</div>
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

export default Navbar;
