import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useContext } from "react";
import { myContext } from "../../../../contextApi/Authcontext";

const AddCategory = () => {
  const { user, header } = useContext(myContext);
  const handleSubmit = (values) => {
    console.log(values.category);

    const newCategory = {
      category: values.category,
    };
    axios
      .post(
        `http://localhost:5000/admin/categories?email=${user?.email}`,
        newCategory,
        header
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  const initialValues = {
    category: "",
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-medium mb-4">Add Category</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.category) {
            errors.category = "Category is required";
          }
          return errors;
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <Field
                name="category"
                placeholder="Enter Category Name"
                className={`border border-gray-400 p-2 w-full rounded-lg ${
                  errors.category && touched.category
                    ? "border-red-500"
                    : "focus:border-indigo-500"
                }`}
              />
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 mt-1 text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCategory;
