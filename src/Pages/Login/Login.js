import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 ">
        {/* left div */}
        <div className="md:w-full px-16">
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
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 mt-2 rounded-xl border w-full"
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
            <button className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold ">
              Login
            </button>
            <p className=" text-sm border-gray-400">Forgot Your Password?</p>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white hover:bg-[#29BA2F] hover:text-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 hover:font-semibold">
            <FcGoogle className="w-10 mr-3 h-10"></FcGoogle> Login With Google
          </button>
        </div>

        {/* right div */}
        <div className="w-full py-5 md:block hidden">
          <img
            className="rounded-2xl "
            src="https://www.shutterstock.com/image-vector/photo-graphic-editor-on-computer-600w-1432421069.jpg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Login;
