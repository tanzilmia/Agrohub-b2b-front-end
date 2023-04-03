import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDropzone } from "react-dropzone";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";

const Register = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [profilePic, setprofilePic] = useState("")
  const [registrError, setregistrError] = useState("")
  const {setloading} = useContext(myContext)
  const neviget = useNavigate()


  const { getRootProps, getInputProps} = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop: acceptedFiles => {
      setFile(acceptedFiles[0]);
      acceptedFiles.forEach(file => {
        const formData = new FormData();
        formData.append('image', file);
        axios.post(`https://api.imgbb.com/1/upload?key=801237049e770d2af2c17148ff032c3f`, formData)
        .then(res => {
          if(res.data.success){
            const profile = res?.data?.data?.url
            setprofilePic(profile)
            console.log(profile)
          }
        })
      })
    }
    
});

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
              <div className={file === null || "hidden"}>
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
            {file && (
              <div className="relative mx-auto w-28 h-28 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <img className="absolute w-[120px] h-28 text-gray-400 -left-1" src={URL.createObjectURL(file)} alt="Selected" />
              </div>
            )}
          </section>

          

            

          <Formik 
            initialValues={{
              email: "",
              password: "",
              firstname: "",
              lastname: "",
              phone: "",
              role: "",
              file: null
            }}
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

              if (!values.firstname) {
                errors.firstname = "First Name is required";
              } else if (values.firstname.length < 2) {
                errors.firstname =
                  "firstname must be at least 2 characters long";
              }

              if (!values.lastname) {
                errors.lastname = "Last Name is required";
              } else if (values.lastname.length < 2) {
                errors.lastname = "lastname must be at least 2 characters long";
              }

              if (!values.phone) {
                errors.phone = "Phone Number is required";
              } else if (values.phone.length < 11) {
                errors.phone = "phone must be at least 11 characters long";
              }

              if (!values.role) {
                errors.role = "select any role";
              }
             
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const { email, password, phone, firstname, lastname, role } =
                values;

                setloading(true)
        
                

              const userinfo = {
                email,
                name: `${firstname} ${lastname}`,
                password,
                phone,
                role,
                profilePic,
                
              };

              console.log(userinfo);

              axios
                .post(`http://localhost:5000/auth/register`, userinfo)
                .then((res) =>{
                  if(res.data.message ===  "Email Is Already Used"){
                    setregistrError("This Email AlReady Use")
                  }
                  if(res.data.message ===  "success"){
                    neviget("/login")
                  }
                })
                .catch((e) => console.log(e.message));

              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <div className="w-[45%]">
                    <Field
                      className="p-2 mt-8 rounded-xl border w-[100%]"
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="firstname"
                      component="div"
                    />
                  </div>
                  <div className="w-[45%]">
                    <Field
                      className="p-2 mt-8 rounded-xl border w-[100%]"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="lastname"
                      component="div"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="w-[45%]">
                    <Field
                      className="p-2 mt-3 rounded-xl border w-[100%]"
                      type="number"
                      name="phone"
                      placeholder="Enter phone "
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="phone"
                      component="div"
                    />
                  </div>
                  <div className="w-[45%]">
                    <Field
                      className="p-2 mt-3 rounded-xl border w-[100%]"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Field
                    className="p-2 rounded-xl border w-full"
                    name="password"
                    id="password"
                    type={show ? "text" : "password"}
                    placeholder="Create Password"
                  />
                  <i
                    onClick={() => setShow(!show)}
                    className={
                      show
                        ? "ri-eye-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
                        : "ri-eye-off-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
                    }
                  ></i>
                  <ErrorMessage
                    className="text-red-500 text-sm"
                    name="password"
                    component="div"
                  />
                </div>

                <div className="flex items-center mx-auto">
                  <h1 className="text-sm text-gray-400">
                    Please Select Trade Role:
                  </h1>

                  <div className="flex items-center ml-4">
                    <div className="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="buyer"
                        name="role"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                      >
                        Buyer
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <Field
                        id="inline-2-radio"
                        type="radio"
                        value="seller"
                        name="role"
                      />
                      <label
                        htmlFor="inline-2-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                      >
                        Seller
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-sm"
                    name="role"
                    component="div"
                  />
                </div>

                {
                  registrError && <p>{registrError}</p>
                }

                <button
                  className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <div className="flex">
                  <p className="text-xs">
                    Already Have an account ?{" "}
                    <Link className="text-[#1c201e] font-bold" to="/login">
                      Login Now
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>

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

// {
//   /* <form action="" className="flex flex-col gap-4 ">
//   <div className="flex justify-between">
//     <input
//       className="p-2 mt-8 rounded-xl border w-[45%]"
//       type="text"
//       id="firstName"
//       name="firstName"
//       placeholder="First Name"
//     />
//     <input
//       className="p-2 mt-8 rounded-xl border w-[45%]"
//       type="text"
//       id="lastName"
//       name="lastName"
//       placeholder="Last Name"
//     />
//   </div>

//   <div className="flex justify-between">
//     <input
//       className="p-2 rounded-xl border w-[45%]"
//       type="number"
//       id="number"
//       name="number"
//       placeholder="Phone Number"
//     />
//     <input
//       className="p-2  rounded-xl border w-[45%]"
//       type="email"
//       name="email"
//       id="email"
//       placeholder="Email Address"
//     />
//   </div>

//   <div className="relative">
//     <input
//       className="p-2 rounded-xl border w-full"
//       name="password"
//       id="password"
//       type={show ? "text" : "password"}
//       placeholder="Password"
//     />
//     <i
//       onClick={() => setShow(!show)}
//       className={
//         show
//           ? "ri-eye-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
//           : "ri-eye-off-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
//       }
//     ></i>
//   </div>

//   <div className="relative">
//     <input
//       className="p-2 rounded-xl border w-full"
//       name="confirmPassword"
//       id="confirmPassword"
//       type={show ? "text" : "password"}
//       placeholder="Confirm Password"
//     />
//     <i
//       onClick={() => setShow(!show)}
//       className={
//         show
//           ? "ri-eye-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
//           : "ri-eye-off-line absolute top-[23%] text-gray-500 right-3 cursor-pointer"
//       }
//     ></i>
//   </div>

//   <div className="flex items-center mx-auto">
//     <h1 className="text-sm text-gray-400">Please Select Trade Role:</h1>

//     <div className="flex items-center ml-4">
//       <div className="flex items-center mr-4">
//         <input
//           id="inline-radio"
//           type="radio"
//           value="Buyer"
//           name="role"
//         />
//         <label
//           htmlFor="inline-radio"
//           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
//         >
//           Buyer
//         </label>
//       </div>
//       <div className="flex items-center mr-4">
//         <input
//           id="inline-2-radio"
//           type="radio"
//           value=""
//           name="role"
//         />
//         <label
//           htmlFor="inline-2-radio"
//           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
//         >
//           Seller
//         </label>
//       </div>
//     </div>
//   </div>

//   <button
//     type="submit"
//     className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
//   >
//     Register
//   </button>
//   <p className=" text-lg border-gray-400 text-center text-gray-500">
//     Already have an account?{" "}
//     <Link className="hover:underline hover:text-[#29BA2F]" to={"/login"}>
//       Login
//     </Link>{" "}
//   </p>
// </form>; */
// }
