/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
 * @ Modified by: Your name
 * @ Modified time: 2023-05-06 16:06:48
*/
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiMoneyBill, CiSatellite1, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { myContext } from "../../contextApi/Authcontext";

// starting sidenav
const SideNav = () => {
  const { user } = useContext(myContext);
  const navItems = [
    { icon: <AiOutlineUser />, name: "Admin" },
    { icon: <CiMoneyBill />, name: "Seller" },
    { icon: <CiSatellite1 />, name: "Buyer" },
    { icon: <CiSettings />, name: "Settings" },
  ];
  const pathName = window.location.pathname;
  const [selected, setSelected] = useState(pathName);
  const [path, setPath] = useState(pathName);

  const handleClick = () => {
    setSelected(path);
  };

  return (
    <aside className="flex flex-col w-24 md:w-48 lg:w-64  px-1 md:px-4 py-8 overflow-y-auto bg-white h-full dark:bg-[#4B5563] border-r rtl:border-r-0 rtl:border-l ">
      <Link to="/" className="mx-auto">
        <img className="w-auto h-6 sm:h-7" src="" alt="" />
      </Link>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <>
          {user?.email ? (
            <img
              className="object-cover w-8 h-8 md:w-18 lg:w-24 md:h-18 lg:h-24 mx-2 rounded-full"
              src={user?.profilePic}
              alt="avatar"
            />
          ) : (
            <img
              className="object-cover w-8 h-8 md:w-18 lg:w-24 md:h-18 lg:h-24 mx-2 rounded-full"
              src="https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png"
              alt="avatar"
            />
          )}
        </>

        <>
          {user?.email ? (
            <h4 className="hidden md:block mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
              {user?.name}
            </h4>
          ) : (
            <h4 className="hidden md:block mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
              John Doe
            </h4>
          )}
        </>

        <>
          {user?.email ? (
            <p className="hidden md:block mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              {user?.email}
            </p>
          ) : (
            <p className="hidden md:block mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              john@example.com
            </p>
          )}
        </>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            to="/dashboard"
            className="flex items-center md:px-4 py-2 mt-5 text-gray-600 transition-colors bg-[#f3e8e8] duration-300 transform rounded-lg  hover:bg-gray-200 font-semibold dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-slate-900 dark:bg-indigo-500 dark:text-white"
          >
            Default
          </Link>

          {navItems.slice().map((nav, id) => {
            const isSelected = selected
              .toLowerCase()
              .includes(nav.name.toLowerCase());

            return (
              <div>
                {user?.role === "admin" && (
                  <Link
                    key={id}
                    className={`flex items-center md:px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-indigo-500 dark:text-white dark:hover:text-gray-200 hover:text-slate-900 ${
                      isSelected ? "bg-gray-300" : "bg-slate-100"
                    }`}
                    to={`/dashboard/${nav.name}`}
                    onClick={() => setSelected(nav.name)}
                  >
                    {nav.icon}

                    <span className="mx-1 md:mx-4 font-medium ">
                      {nav.name}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
          <>
            <Link
              to="/dashboard/myproduct"
              className="flex items-center md:px-4 py-2 mt-5 text-gray-600 transition-colors bg-[#f3e8e8] dark:bg-indigo-500 dark:text-white duration-300 transform rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-slate-900"
            >
              My Product
            </Link>
            <Link
              to="/dashboard/mybuyers"
              className="flex items-center md:px-4 py-2 mt-5 dark:bg-indigo-500 dark:text-white text-gray-600 transition-colors bg-[#f3e8e8] duration-300 transform rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-slate-900"
            >
              My Buyers
            </Link>
          </>

          <Link
            to="/dashboard/addproduct"
            className="flex items-center md:px-4 py-2 mt-5 dark:bg-indigo-500 dark:text-white text-gray-600 transition-colors bg-[#f3e8e8] duration-300 transform rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-slate-900"
          >
            Add Product
          </Link>
          <Link
            to="/dashboard/addBlog"
            className="flex items-center md:px-4 py-2 mt-5 dark:bg-indigo-500 dark:text-white text-gray-600 transition-colors bg-[#f3e8e8] duration-300 transform rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-slate-900"
          >
            Add Blog
          </Link>
          <Link
            to="/"
            className="flex items-center md:px-4 py-2 mt-5 dark:bg-indigo-500 dark:text-white text-gray-600 transition-colors duration-300 transform rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-slate-900"
          >
            Back To Home
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
