import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

/* react icon */
import { FcElectronics } from "react-icons/fc";
import { DiProlog } from "react-icons/di";
import { SiFurrynetwork } from "react-icons/si";
import { FaBabyCarriage } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import {
  GiClothes,
  GiCarWheel,
  GiBirdHouse,
  GiBookshelf,
} from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { getProductCategoryWise } from "../../../../features/products/productsSlice";
/* react icon ends*/

const ShopSideNav = ({ setProducts }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  // category logo and color
  const logos = [
    {
      icon: <FcElectronics />,
      color: "text-amber-600",
    },
    {
      icon: <GiClothes />,
      color: "text-rose-400",
    },
    {
      icon: <GiCarWheel />,
      color: "text-blue-600",
    },
    {
      icon: <SiFurrynetwork />,
      color: "text-violet-600",
    },
    {
      icon: <GiBirdHouse />,
      color: "text-purple-600",
    },
    {
      icon: <FaBabyCarriage />,
      color: "text-yellow-600",
    },
    {
      icon: <GiBookshelf />,
      color: "text-pink-600",
    },
  ];

  /* 
    http://localhost:5000/admin/categories

    http://localhost:5000/admin/brands?category=Clothing
 */

  // getting all products
  const {
    isLoading,
    isError,
    error,
    products: allProducts,
  } = useSelector((state) => state.allproducts);

  const {
    isLoading: byCategoryLoading,
    isError: byCategoryIsError,
    error: byCategoryError,
    products: productsbyCategory,
  } = useSelector((state) => state.productsByCategory);

  // get all category from redux store
  const {
    isLoading: categoryLoading,
    isError: categoryIsError,
    error: categoryError,
    categories,
  } = useSelector((state) => state.allCategories);

  return (
    <div className="ml-12">
      <div className="w-60 relative hidden h-screen my-4 shadow-lg lg:block ">
        <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
          <div className="flex items-center justify-center pt-1">
            <DiProlog className="text-4xl text-violet-800" />
          </div>
          <nav className="mt-1">
            <div className="flex flex-col">
              <button
                onClick={() => setProducts(allProducts)}
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
                className="py-3 flex items-center justify-between px-4 hover:shadow-xl transition ease-in-out delay-50  hover:-translate-y-1   duration-300"
                to=""
              >
                <div className="flex items-center">
                  <span className={`text-left`}>
                    <TbCategory />
                  </span>
                  <span className="ml-4 text-sm tracking-tighter leading-3 capitalize font-normal">
                    All Products
                  </span>
                </div>
                <IoIosArrowForward />
              </button>
              {categories.slice().map((category, id) => {
                return (
                  <button
                    onMouseEnter={() => setShowOptions(true)}
                    onMouseLeave={() => setShowOptions(false)}
                    key={id}
                    className="py-3 flex items-center justify-between px-4 hover:shadow-xl transition ease-in-out delay-50  hover:-translate-y-1   duration-300"
                    to={`category/${category._id}`}
                  >
                    <div className="flex items-center">
                      <span className={`text-left ${logos[id].color}`}>
                        {logos[id].icon}
                      </span>
                      <span className="ml-4 text-sm tracking-tighter leading-3 capitalize font-normal">
                        {category?.category}
                      </span>
                    </div>
                    <IoIosArrowForward />
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ShopSideNav;
