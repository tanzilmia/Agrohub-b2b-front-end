import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../../contextApi/Authcontext";
import Google from "./Google";
import { GoogleLogin } from "@react-oauth/google";
import Loader from "../shop/util/loader/Loader";
import useTitle from "../../hooks/useTitle";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [Loadding, setLoadding] = useState(false);
  const { setisLogin, setloading } = useContext(myContext);
  const neviget = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useTitle("Login");
  if (Loadding) {
    return <Loader />;
  }

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

          {/* forkim code here  */}

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.password) {
                errors.password = "Password is required";
              } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters long";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setLoadding(true);
              setloading(true);
              const email = values.email;
              const password = values.password;
              const user = {
                email,
                password,
              };

              axios
                .post(`https://agrohub.vercel.app/auth/login`, user)
                .then((res) => {
                  console.log(res.data);
                  if (res.data.message === "Login Successful") {
                    const token = res.data.data;
                    localStorage.setItem("accessToken", token);
                    setisLogin(true);
                    setLoadding(false);

                    neviget(from, { replace: true });
                  }
                  if (res.data.message === "user not Valid") {
                    setError("password not Match");
                    setLoadding(false);
                  }
                  if (res.data.message === "something is wrong") {
                    setError("user not Valid");
                    setLoadding(false);
                  }
                  setSubmitting(false);
                })
                .catch((err) => {
                  console.log(err);
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <Field
                  className="p-2 mt-8 rounded-xl border w-full"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500 text-xs italic"
                  name="email"
                  component="div"
                />
                <div className="relative">
                  <Field
                    className="p-2 mt-4 rounded-xl border w-full"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                  />
                  <i
                    onClick={() => setShow(!show)}
                    className={
                      show
                        ? "ri-eye-line absolute top-[35%] text-gray-500 right-3 cursor-pointer"
                        : "ri-eye-off-line absolute top-[35%] text-gray-500 right-3 cursor-pointer"
                    }
                  ></i>
                  <ErrorMessage
                    className="text-red-500 text-xs italic"
                    name="password"
                    component="div"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
                  disabled={isSubmitting}
                >
                  Login
                </button>

                <p className=" text-sm border-gray-400">
                  Forgot Your Password?
                </p>
                <Link to={"/register"} className="sm:block hover:text-[#29BA2F] xl:hidden cursor-pointer text-sm border-gray-400 flex items-center">
                  Already have a Account ?
                  {/* <FaArrowRight color="#29BA2F"/> */}
                </Link>

                <p className="text-[red]">{error}</p>
              </Form>
            )}
          </Formik>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <div className="flex justify-center mt-3 items-center">
            <Google />
          </div>
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
