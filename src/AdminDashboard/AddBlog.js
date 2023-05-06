import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import moment from "moment/moment";
import Loadding from "../sheardComponent/Loadding";
import useTitle from "../hooks/useTitle";
import { useContext } from "react";
import { myContext } from "../contextApi/Authcontext";




const AddBlog = () => {
  const [file, setFile] = useState(null);
  const [thumbnail, setthumbnail] = useState("");
  const [registrError, setregistrError] = useState("");
  const [Lodding, setLodding] = useState(false);
  const {user} =  useContext(myContext)
  const naviget = useNavigate()
  const now = moment();
  const date = now.format("MM/DD/YY hh:mm a");

  useTitle("Register");
  const { getRootProps, getInputProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      acceptedFiles.forEach((file) => {
        const formData = new FormData();
        formData.append("image", file);
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=801237049e770d2af2c17148ff032c3f`,
            formData
          )
          .then((res) => {
            if (res.data.success) {
              const profile = res?.data?.data?.url;
              setthumbnail(profile);
              console.log(profile);
            }
          });
      });
    },
  });

  if (Lodding) {
    return <Loadding />;
  }

  return (
    <nav className="bg-gray-50 dark:bg-[#1B1B1D] min-h-screen  flex items-center justify-center">
      <div className="bg-gray-100 dark:bg-[#4B5563] flex rounded-2xl shadow-lg max-w-7xl p-5 ">
        <div className="md:w-[1000px] px-16">
          <h2 className="font-bold text-2xl text-[#29BA2F] text-center">
            Crate Your Blog
          </h2>
          <p className="text-sm mt-4 text-[#29BA2F] text-center">
            If You'r Not A Member, Easily Register
          </p>
          <section className="container mt-4">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <div className={file === null || "hidden"}>
                <div className="relative mx-auto w-28 h-28 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                 <img src="https://img.freepik.com/premium-vector/vector-photo-gallery-icon_723554-144.jpg" className="absolute w-[120px] h-28 text-gray-400 -left-1" alt="" />
                </div>
              </div>
            </div>
            {file && (
              <div className="relative mx-auto w-60 h-32 overflow-hidden bg-gray-100 rounded-sm dark:bg-gray-600">
                <img
                  className="absolute w-[120px] h-28 text-gray-400 -left-1"
                  src={URL.createObjectURL(file)}
                  alt="Selected"
                />
              </div>
            )}
          </section>

          <Formik
            initialValues={{
              blogTitle: "",
              file: null,
              blogDetails: ""
            }}
            validate={(values) => {
              const errors = {};

              if (!values.blogTitle) {
                errors.blogTitle = "Title is required";
              } else if (values.blogTitle.length < 10) {
                errors.blogTitle =
                  "blogTitle must be at least 10 characters long";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setLodding(true)
              const {blogDetails, blogTitle } =
                values;

              const bloginfo = {
                author: user?.name,
                authorEmail: user?.email,
                thumbnail,
                blogTitle,
                blogDetails,
                date
              };
              console.log(bloginfo);

             try{
                axios.post(`http://localhost:5000/seller/add-blog`, bloginfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.message==="Post Is Already Exist"){
                      setregistrError("Post Is Already Exist")
                      setLodding(false)
                    }
                    if(res.data.message==="Save Success"){
                      naviget("/blogs")
                      setLodding(false)
                    }
                    if(res.data.message==="server error"){
                      setregistrError("SomeThing Is Wrong")
                      setLodding(false)
                    }
                })
             }catch(e){

             }


              
        //    post blog data api 
                

              
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 ">
                <div>
                  <div>
                    <Field
                      className="p-2 mt-8 rounded-xl dark:bg-[#81858d] dark:text-white dark:placeholder:text-gray-300 border w-[100%]"
                      type="text"
                      name="blogTitle"
                      placeholder="Blog Title "
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="blogTitle"
                      component="div"
                    />
                  </div>
                  <div>
                    <Field
                      className="p-2 mt-8 rounded-xl dark:bg-[#81858d] dark:text-white dark:placeholder:text-gray-300 h-[150px]  border w-[100%]"
                      as="textarea"
                      name="blogDetails"
                      placeholder="Write your Full Blog Here "
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="blogDetails"
                      component="div"
                    />
                  </div>
                </div>

                {registrError && <p>{registrError}</p>}

                <button
                  className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
                  type="submit"
                  disabled={isSubmitting}
                >
                  Post Blog
                </button>
              </Form>
            )}
          </Formik>

          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default AddBlog;
