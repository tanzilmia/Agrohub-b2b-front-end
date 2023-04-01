import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDropzone } from "react-dropzone";

const Register = (props) => {
  const [show, setShow] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <img src={URL.createObjectURL(file)} alt={file.path} />
    </li>
  ));

  return (
    <nav className="bg-gray-50 min-h-screen  flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 ">
        <div className="md:w-[700px] px-16">
          <h2 className="font-bold text-2xl text-[#29BA2F] text-center">
            Register
          </h2>
          <p className="text-sm mt-4 text-[#29BA2F] text-center">
            If You'r Not A Member, Easily Register
          </p>
          <section className="container mt-4">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <div className="">
                <div class="relative mx-auto w-28 h-28 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    class="absolute w-[120px] h-28 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </section>
          <form action="" className="flex flex-col gap-4 ">
            <div className="flex justify-between">
              <input
                className="p-2 mt-8 rounded-xl border w-[45%]"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="p-2 mt-8 rounded-xl border w-[45%]"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="flex justify-between">
              <input
                className="p-2 rounded-xl border w-[45%]"
                type="number"
                id="number"
                name="number"
                placeholder="Phone Number"
              />
              <input
                className="p-2  rounded-xl border w-[45%]"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                name="password"
                id="password"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <i
                onClick={() => setShow(!show)}
                className={
                  show
                    ? "ri-eye-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
                    : "ri-eye-off-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
                }
              ></i>
            </div>
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                name="confirmPassword"
                id="confirmPassword"
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <i
                onClick={() => setShow(!show)}
                className={
                  show
                    ? "ri-eye-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
                    : "ri-eye-off-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
                }
              ></i>
            </div>

            <div className="flex items-center mx-auto">
              <h1 className="text-sm text-gray-400">
                Please Select Trade Role:
              </h1>

              <div className="flex items-center ml-4">
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value="Buyer"
                    name="inline-radio-group"
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                  >
                    Buyer
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                  />
                  <label
                    htmlFor="inline-2-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                  >
                    Seller
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
            >
              Register
            </button>
            <p className=" text-lg border-gray-400 text-center text-gray-500">
              Already have an account?{" "}
              <Link
                className="hover:underline hover:text-[#29BA2F]"
                to={"/login"}
              >
                Login
              </Link>{" "}
            </p>
          </form>
          <div></div>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-white hover:bg-[#29BA2F] hover:text-white border py-1 w-3/4 mx-auto rounded-xl mt-5 flex justify-center items-center hover:scale-105 duration-300 hover:font-semibold">
            <FcGoogle className="w-8 mr-3 h-10"></FcGoogle> Login With Google
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Register;
