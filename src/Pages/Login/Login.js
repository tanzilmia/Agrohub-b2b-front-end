import { useFormik } from "formik";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-gray-50 min-h-screen  flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 ">
        {/* left div */}
        <div className="md:w-[500px] px-16">
          <h2 className="font-bold text-2xl text-[#29BA2F] text-center">
            Login
          </h2>
          <p className="text-sm mt-4 text-[#29BA2F] text-center">
            If You Already A Member, Easily Login
          </p>

          <form action="" className="flex flex-col gap-4 ">
            <input
              className="p-2 mt-8 rounded-xl border w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 mt-4 rounded-xl border w-full"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <i
                onClick={() => setShow(!show)}
                className={
                  show
                    ? "ri-eye-line absolute top-[35%] text-gray-500 right-3 cursor-pointer"
                    : "ri-eye-off-line absolute top-[35%] text-gray-500 right-3 cursor-pointer"
                }
              ></i>
            </div>
            <button
              type="submit"
              className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
            >
              Login
            </button>
            <p className=" text-sm border-gray-400">Forgot Your Password?</p>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white hover:bg-[#29BA2F] hover:text-white border py-1 w-3/4 mx-auto rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 hover:font-semibold">
            <FcGoogle className="w-8 mr-3 h-10"></FcGoogle> Login With Google
          </button>
        </div>

        {/* right div */}
        <div className="w-[500px] py-5 md:block hidden">
          <h2 className="font-bold text-2xl text-[#29BA2F] text-center">
            Create An Account
          </h2>
          <div className="flex items-center text-gray-500 py-2">
            <i className="ri-bank-card-fill text-2xl ml-4"></i>
            <span className="text-lg ml-4">
              Save payment to view in-store purchases
            </span>
          </div>
          <div className="flex items-center text-gray-500 py-2">
            <i className="ri-star-smile-line text-2xl ml-4"></i>
            <span className="text-lg ml-4">Redeem Rewards</span>
          </div>
          <div className="flex  items-center text-gray-500 py-2">
            <i className="ri-shopping-cart-fill text-2xl ml-4"></i>
            <span className="text-lg ml-4">Speedy Checkout</span>
          </div>
          <div className="flex  items-center text-gray-500 py-2">
            <i className="ri-truck-line text-2xl ml-4"></i>
            <span className="text-lg ml-4">
              Easily track orders and view order history{" "}
            </span>
          </div>
          <div className="flex  items-center text-gray-500 py-2">
            <i className="ri-checkbox-blank-circle-line text-2xl ml-4"></i>
            <span className="text-lg ml-4">Create A Regestry</span>
          </div>
          <div className="flex  items-center text-gray-500 py-2">
            <i className="ri-git-repository-fill text-2xl ml-4"></i>
            <span className="text-lg ml-4">View your desgin packages</span>
          </div>
          <div className="flex  items-center text-gray-500 py-2">
            <i className="ri-heart-add-line text-2xl ml-4"></i>
            <span className="text-lg ml-4">Manage Favorites Lists</span>
          </div>
          <Link to={"/register"}>
            <button className="bg-white hover:bg-[#29BA2F] hover:text-white border py-3 w-1/2 mx-auto rounded-xl  flex justify-center items-center hover:scale-105 duration-300 hover:font-semibold ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Login;
