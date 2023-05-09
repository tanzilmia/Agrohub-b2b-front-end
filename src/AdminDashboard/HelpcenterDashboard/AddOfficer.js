


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import Loadding from "../../sheardComponent/Loadding";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";


const AddOfficer = () => {
  const [file, setFile] = useState(null);
  const [doctorPic, setdoctorPic] = useState("");
  const [registrError, setregistrError] = useState("");
  const [Lodding, setLodding] = useState(false);
  
  const naviget = useNavigate();
  
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
              setdoctorPic(profile);
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
            Crate A Officer Profile
          </h2>

          <section className="container mt-4">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <div className={file === null || "hidden"}>
                <div className="relative mx-auto w-28 h-28 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <img
                    src="https://img.freepik.com/premium-vector/vector-photo-gallery-icon_723554-144.jpg"
                    className="absolute w-[120px] h-28 text-gray-400 -left-1"
                    alt=""
                  />
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
              officerName: "",
              file: null,
              officerPhone: "",
              officerEmail: "",
              facebookUrl: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.officerName) {
                errors.officerName = "Title is required";
              } else if (values.officerName.length < 5) {
                errors.officerName =
                  "officerName must be at least 5 characters long";
              }
              if (!values.officerPhone) {
                errors.officerPhone = "officerPhone is required";
              } else if (values.officerPhone.length < 10) {
                errors.officerPhone =
                  "officerPhone must be at least 5 characters long";
              }
              if (!values.officerEmail) {
                errors.officerEmail = "officerEmail is required";
              } else if (values.officerEmail.length < 8) {
                errors.officerEmail =
                  "officerEmail must be at least 8 characters long";
              }
              if (!values.facebookUrl) {
                errors.facebookUrl = "facebookUrl is required";
              } else if (values.facebookUrl.length < 10) {
                errors.facebookUrl =
                  "facebookUrl must be at least 10 characters long";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setLodding(true);
              const { officerName, officerPhone, officerEmail, facebookUrl } =
                values;

              const officerInfo = {
                doctorPic,
                officerName,
                officerPhone,
                officerEmail,
                facebookUrl,
                
              };
              console.log(officerInfo);

             try{
                axios.post(`http://localhost:5000/admin/add-officer`,officerInfo)
                .then(res =>{
                    console.log(res.data);
                    if(res.data.message === "Failed"){
                        setregistrError("Officer Is Alreday Exist")
                        setLodding(false);
                    }
                    if(res.data.message === "Success"){
                        toast.success("Officer Add Successfully")
                        setLodding(false);
                    }
                    if(res.data.message === "server error"){
                        toast.error("Some Thing Is Wrong")
                        setLodding(false);
                    }
                })
             }catch(e){
                console.log(e)
             }

              //    post blog data api
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 ">
                <div>
                  <div className="flex">
                    <div className="w-[50%]">
                      <Field
                        className="p-2 mt-8 mr-1 rounded-xl dark:bg-[#81858d] dark:text-white dark:placeholder:text-gray-300 border w-[100%]"
                        type="text"
                        name="officerName"
                        placeholder="Add Doctor Name "
                      />
                      <ErrorMessage
                        className="text-red-500 text-sm"
                        name="officerName"
                        component="div"
                      />
                    </div>

                    <div className="w-[50%]">
                      <Field
                        className="p-2 mt-8 rounded-xl dark:bg-[#81858d] dark:text-white dark:placeholder:text-gray-300 border w-[100%]"
                        type="number"
                        name="officerPhone"
                        placeholder="doctor Phone"
                      />
                      <ErrorMessage
                        className="text-red-500 text-sm"
                        name="officerPhone"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className="flex">
                  <div className="lg:w-[50%] ">
                    <Field
                      className="p-2 mt-8 rounded-xl dark:bg-[#81858d] dark:text-white dark:placeholder:text-gray-300 border w-[100%]"
                      type="text"
                      name="officerEmail"
                      placeholder="doctor Email "
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="officerName"
                      component="div"
                    />
                  </div>

                  <div className="lg:w-[50%]">
                    <Field
                      className="p-2 mt-8 rounded-xl dark:bg-[#81858d] dark:text-white dark:placeholder:text-gray-300 border w-[100%]"
                      type="text"
                      name="facebookUrl"
                      placeholder="doctor facebookUrl "
                    />
                    <ErrorMessage
                      className="text-red-500 text-sm"
                      name="facebookUrl"
                      component="div"
                    />
                  </div>
                  </div>
                  
                </div>

                {registrError && <p>{registrError}</p>}

                <button
                  className="bg-[#29BA2F] rounded-xl text-white py-2 hover:scale-105 duration-300 font-bold "
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add Doctor
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

export default AddOfficer;
